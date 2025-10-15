# Unleash’d K9 – Canva OAuth Callback (Vercel)

This tiny project gives you a working **HTTPS callback URL** for Canva’s OAuth.

## What you get
- Live endpoint at `/api/canva/oauth/callback`
- Returns a success page when Canva redirects back
- Ready for **Vercel** deployment

> Note: This minimal version does **not** exchange the `code` for tokens yet. It’s enough to pass Canva’s “non-localhost redirect” requirement and complete a redirect without 404s. You can add token exchange later.

---

## 1) Put it on GitHub (quick)
1. Create an empty GitHub repo called `unleashdk9-canva-callback`
2. Upload these files (the whole folder) to that repo

## 2) Deploy on Vercel
1. Go to https://vercel.com → **New Project**
2. Import your GitHub repo
3. Accept defaults and **Deploy**

When it finishes you’ll have a live URL like:

```
https://<vercel-project>.vercel.app/api/canva/oauth/callback
```

## 3) Add this URL in Canva Developer Portal
- Go to your app → **Authentication → Redirect URLs**
- Add the URL above and set it as **Default**

Optional (later): point your custom domain to Vercel so it becomes:
```
https://unleashdk9.com/api/canva/oauth/callback
```

## How it looks when it works
Visiting the URL in the browser should show a green check and “Callback received”.

