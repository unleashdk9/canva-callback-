export default async function handler(req, res) {
  const { code, state, error, error_description } = req.query;

  if (error) {
    console.error("Canva OAuth error:", error, error_description);
    return res.status(400).send(`OAuth error: ${error_description || error}`);
  }

  // Log for debugging (visible in Vercel logs)
  console.log("Canva redirect received:", { hasCode: !!code, state });

  // Minimal success page (no token exchange yet)
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Unleash’d K9 × Canva</title>
        <style>
          body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#0b0b0c;color:#eaeaea}
          .card{background:#141417;border:1px solid #2a2a2e;border-radius:16px;padding:28px;max-width:560px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.3)}
          h1{font-size:22px;margin:0 0 10px}
          p{opacity:.9;line-height:1.5}
          .ok{font-size:48px;line-height:1}
          .badge{display:inline-block;margin-top:12px;padding:6px 10px;border:1px solid #2a2a2e;border-radius:999px;font-size:12px;opacity:.8}
        </style>
      </head>
      <body>
        <div class="card">
          <div class="ok">✅</div>
          <h1>Unleash’d K9 × Canva</h1>
          <p>Callback received${code ? " with authorization code." : "."} You can close this tab.</p>
          <div class="badge">/api/canva/oauth/callback</div>
        </div>
      </body>
    </html>
  `);
}
