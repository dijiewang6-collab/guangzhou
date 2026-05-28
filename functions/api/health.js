export const onRequestGet = async ({ env }) => {
  return new Response(JSON.stringify({
    ok: true,
    sct: !!env.SCT_KEY,
    email: env.EMAIL_TO || '931097380@qq.com'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
