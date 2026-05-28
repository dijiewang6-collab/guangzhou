// Cloudflare Pages Function: POST /api/contact
// 接收前端表单 -> ① FormSubmit 转发邮件 ② Server 酱推送微信
// 环境变量在 Cloudflare Pages 控制台配置：EMAIL_TO、SCT_KEY

export const onRequestOptions = async () => new Response(null, {
  status: 204,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }
});

export const onRequestPost = async ({ request, env }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  const EMAIL_TO = env.EMAIL_TO || '931097380@qq.com';
  const SCT_KEY = env.SCT_KEY || '';

  let data;
  try {
    const ct = (request.headers.get('content-type') || '').toLowerCase();
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries());
    }
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid body' }), { status: 400, headers });
  }

  if (!data.name || !data.email || !data.message) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400, headers });
  }

  const [emailRes, wechatRes] = await Promise.all([
    sendEmail(data, EMAIL_TO),
    pushWeChat(data, SCT_KEY)
  ]);

  return new Response(JSON.stringify({
    ok: emailRes.ok || wechatRes.ok,
    email: emailRes,
    wechat: wechatRes,
    config: {
      email_to: EMAIL_TO,
      sct_set: !!SCT_KEY
    }
  }, null, 2), { status: 200, headers });
};

async function sendEmail(data, EMAIL_TO) {
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(EMAIL_TO), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name || '',
        phone: data.phone || '',
        email: data.email || '',
        topic: data.topic || '',
        message: data.message || '',
        _subject: '[广州站留言] ' + (data.name || 'New message'),
        _template: 'table',
        _captcha: 'false'
      })
    });
    const j = await r.json();
    return {
      ok: j.success === 'true' || j.success === true,
      status: r.status,
      response: j
    };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function pushWeChat(data, SCT_KEY) {
  if (!SCT_KEY) return { ok: false, skipped: true };

  const topicMap = {
    travel: '旅行 / 行程',
    business: '商务 / 贸易',
    culture: '文化 / 非遗',
    other: '其他'
  };
  const title = '【广州站留言】' + (data.name || '匿名访客');
  const desp = [
    '## 留言信息',
    '',
    `- **姓名**：${data.name || '-'}`,
    `- **电话**：${data.phone || '-'}`,
    `- **邮箱**：${data.email || '-'}`,
    `- **类型**：${topicMap[data.topic] || data.topic || '-'}`,
    '',
    '### 留言内容',
    '',
    (data.message || '(空)').replace(/\n/g, '\n\n'),
    '',
    '---',
    `*提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}*`
  ].join('\n');

  try {
    const body = new URLSearchParams({ title, desp }).toString();
    const r = await fetch(`https://sctapi.ftqq.com/${SCT_KEY}.send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    const j = await r.json();
    return { ok: j.code === 0, status: r.status, response: j };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
