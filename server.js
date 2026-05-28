// ============ 留言中转后端 ============
// 接收前端表单 -> 同时：① 转发邮件到 QQ 邮箱 ② 推送到 Server 酱（微信）
// 配置：SendKey 与邮箱写在 .env（不提交到 git）

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

// 读取 .env
const envPath = path.join(__dirname, '.env');
const env = {};
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  });
}

const PORT = Number(env.PORT || 5174);
const EMAIL_TO = env.EMAIL_TO || '931097380@qq.com';
const SCT_KEY = env.SCT_KEY || '';

if (!SCT_KEY) console.warn('[warn] SCT_KEY 未配置，将跳过微信推送');

// ============ 读取请求体（JSON 或 form） ============
const readBody = (req) => new Promise((resolve, reject) => {
  let raw = '';
  req.on('data', c => { raw += c; if (raw.length > 1e6) req.destroy(); });
  req.on('end', () => {
    try {
      const ct = (req.headers['content-type'] || '').toLowerCase();
      if (ct.includes('application/json')) resolve(JSON.parse(raw || '{}'));
      else resolve(querystring.parse(raw));
    } catch (e) { reject(e); }
  });
  req.on('error', reject);
});

// ============ 转发邮件（FormSubmit Ajax） ============
const sendEmail = (data) => new Promise((resolve) => {
  const payload = JSON.stringify({
    name: data.name || '',
    phone: data.phone || '',
    email: data.email || '',
    topic: data.topic || '',
    message: data.message || '',
    _subject: '[广州站留言] ' + (data.name || 'New message'),
    _template: 'table',
    _captcha: 'false'
  });
  const req = https.request({
    method: 'POST',
    hostname: 'formsubmit.co',
    path: '/ajax/' + encodeURIComponent(EMAIL_TO),
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'Accept': 'application/json',
      'Origin': 'http://localhost:5173',
      'Referer': 'http://localhost:5173/',
      'User-Agent': 'Mozilla/5.0 (compatible; gz-contact-relay/1.0)'
    }
  }, (res) => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      try {
        const j = JSON.parse(body);
        resolve({ ok: j.success === 'true' || j.success === true, raw: j, message: j.message });
      } catch (e) { resolve({ ok: false, raw: body, error: e.message }); }
    });
  });
  req.on('error', e => resolve({ ok: false, error: e.message }));
  req.write(payload);
  req.end();
});

// ============ 推送 Server 酱（微信） ============
const pushWeChat = (data) => new Promise((resolve) => {
  if (!SCT_KEY) return resolve({ ok: false, skipped: true });

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

  const payload = querystring.stringify({ title, desp });
  const req = https.request({
    method: 'POST',
    hostname: 'sctapi.ftqq.com',
    path: `/${SCT_KEY}.send`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      try {
        const j = JSON.parse(body);
        resolve({ ok: j.code === 0, raw: j });
      } catch (e) { resolve({ ok: false, raw: body, error: e.message }); }
    });
  });
  req.on('error', e => resolve({ ok: false, error: e.message }));
  req.write(payload);
  req.end();
});

// ============ HTTP 服务 ============
const server = http.createServer(async (req, res) => {
  // CORS：允许 5173 的前端 origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/api/contact') {
    try {
      const data = await readBody(req);
      if (!data.name || !data.email || !data.message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: false, error: 'Missing fields' }));
      }

      console.log('[contact]', new Date().toLocaleString('zh-CN'), '|', data.name, '|', data.email);

      const [emailRes, wechatRes] = await Promise.all([sendEmail(data), pushWeChat(data)]);

      console.log('  email:', emailRes.ok ? 'sent' : 'failed', emailRes.error || emailRes.message || '');
      console.log('  wechat:', wechatRes.skipped ? 'skipped' : (wechatRes.ok ? 'pushed' : 'failed'), wechatRes.error || '');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        ok: emailRes.ok || wechatRes.ok,
        email: emailRes.ok,
        wechat: wechatRes.ok
      }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: e.message }));
    }
    return;
  }

  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, sct: !!SCT_KEY, email: EMAIL_TO }));
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`\n  ✓ 留言中转服务已启动`);
  console.log(`    监听端口: ${PORT}`);
  console.log(`    邮件转发: ${EMAIL_TO}`);
  console.log(`    微信推送: ${SCT_KEY ? '已启用' : '未启用 (配置 SCT_KEY)'}`);
  console.log(`    POST    http://localhost:${PORT}/api/contact`);
  console.log(`    GET     http://localhost:${PORT}/api/health\n`);
});
