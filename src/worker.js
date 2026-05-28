// Cloudflare Worker 入口
// - 静态资源由 [assets] 绑定 (ASSETS) 自动处理 (public/ 目录)
// - /api/contact   POST  接收表单 -> ① FormSubmit 邮件 ② Server 酱 微信
// - /api/health    GET   返回环境变量诊断信息

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const json = (obj, status = 200) => new Response(JSON.stringify(obj, null, 2), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS }
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (url.pathname === '/api/health' && request.method === 'GET') {
      const sctKey = env.SCT_KEY || 'SCT355983TqMHKMzqPtqL47lbTznAVzRrc';
      const emailTo = env.EMAIL_TO || '931097380@qq.com';
      return json({
        ok: true,
        env: {
          EMAIL_TO_set: !!emailTo,
          EMAIL_TO_value: emailTo,
          SCT_KEY_set: !!sctKey,
          SCT_KEY_length: sctKey.length,
          SCT_KEY_preview: sctKey ? sctKey.slice(0, 4) + '...' + sctKey.slice(-3) : '(empty)'
        }
      });
    }

    // 浏览器直接访问即可触发一次邮件测试,返回 FormSubmit 原始响应
    if (url.pathname === '/api/diag-email' && request.method === 'GET') {
      const EMAIL_TO = env.EMAIL_TO || '931097380@qq.com';
      const fakeData = {
        name: 'DIAG TEST',
        phone: '12345678901',
        email: 'diag@test.com',
        topic: 'other',
        message: 'This is a diagnostic email triggered from /api/diag-email at ' + new Date().toISOString()
      };
      const r = await sendEmail(fakeData, EMAIL_TO);
      return json({ target: EMAIL_TO, result: r });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      const EMAIL_TO = env.EMAIL_TO || '931097380@qq.com';
      const SCT_KEY = env.SCT_KEY || 'SCT355983TqMHKMzqPtqL47lbTznAVzRrc';

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
        return json({ ok: false, error: 'Invalid body' }, 400);
      }

      if (!data.name || !data.email || !data.message) {
        return json({ ok: false, error: 'Missing fields' }, 400);
      }

      const [emailRes, wechatRes] = await Promise.all([
        sendEmail(data, EMAIL_TO),
        pushWeChat(data, SCT_KEY)
      ]);

      return json({
        ok: emailRes.ok || wechatRes.ok,
        email: emailRes,
        wechat: wechatRes,
        config: { email_to: EMAIL_TO, sct_set: !!SCT_KEY }
      });
    }

    // 其它路径交给静态资源
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Not Found', { status: 404 });
  }
};

async function sendEmail(data, EMAIL_TO) {
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(EMAIL_TO), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
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
    return { ok: j.success === 'true' || j.success === true, status: r.status, response: j };
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
    `- **姓名**:${data.name || '-'}`,
    `- **电话**:${data.phone || '-'}`,
    `- **邮箱**:${data.email || '-'}`,
    `- **类型**:${topicMap[data.topic] || data.topic || '-'}`,
    '',
    '### 留言内容',
    '',
    (data.message || '(空)').replace(/\n/g, '\n\n'),
    '',
    '---',
    `*提交时间:${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}*`
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
