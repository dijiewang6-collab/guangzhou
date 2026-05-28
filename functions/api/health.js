export const onRequestGet = async ({ env }) => {
  const sctKey = env.SCT_KEY || '';
  const emailTo = env.EMAIL_TO || '';

  return new Response(JSON.stringify({
    ok: true,
    env: {
      EMAIL_TO_set: !!emailTo,
      EMAIL_TO_value: emailTo || '(default: 931097380@qq.com)',
      SCT_KEY_set: !!sctKey,
      SCT_KEY_length: sctKey.length,
      SCT_KEY_preview: sctKey ? sctKey.slice(0, 4) + '...' + sctKey.slice(-3) : '(empty)'
    },
    note: 'EMAIL_TO_set=false 表示没配，邮件会发到默认地址；SCT_KEY_set=false 表示微信推送不会触发'
  }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
