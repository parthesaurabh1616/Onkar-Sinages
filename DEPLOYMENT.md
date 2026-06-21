# Deploying Onkar AP Signages

**Repo:** https://github.com/parthesaurabh1616/Onkar-Sinages
**Stack:** Next.js 15 (auto-detected by Vercel — no config needed)
**Domain:** onkarsinages.com (GoDaddy)

---

## 1. Deploy on Vercel

1. Go to **https://vercel.com** and log in with **GitHub** (parthesaurabh1616).
2. Click **Add New… → Project**.
3. Under **Import Git Repository**, find **`Onkar-Sinages`**.
   - If it's not listed: click **Adjust GitHub App Permissions** → grant Vercel access to the repo.
4. On the configure screen, leave everything at defaults:
   - **Framework Preset:** Next.js (auto)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default)
   - **Environment Variables:** none needed
5. Click **Deploy**. In ~1–2 minutes you get a live URL like `onkar-sinages.vercel.app`.

> Every future `git push` to `main` auto-deploys.

---

## 2. Connect the domain (onkarsinages.com on GoDaddy)

### In Vercel
1. Open your project → **Settings → Domains**.
2. Add **`onkarsinages.com`**, then add **`www.onkarsinages.com`**.
3. Vercel will show the DNS records to set. Use the values below.

### In GoDaddy
1. Go to **godaddy.com → My Products → Domains → onkarsinages.com → DNS / Manage DNS**.
2. **Delete every conflicting `@` record**, especially the **`A` · `@` · "WebsiteBuilder Site"** row
   (it resolves to GoDaddy IPs `13.248.243.5` / `76.223.105.230` and breaks the apex).
   If it won't delete / keeps returning, disconnect the site in **GoDaddy → Websites + Marketing** first.
   Do **not** use GoDaddy "Forwarding".
3. Use exactly the records Vercel shows (current values):

   | Type  | Name (Host) | Value                                  |
   |-------|-------------|----------------------------------------|
   | A     | `@`         | `216.198.79.1`                         |
   | CNAME | `www`       | (the `*.vercel-dns-*.com` value Vercel gives, e.g. `caca5d83f9371a6e.vercel-dns-017.com`) |

   > The apex `@` must have **only one** A record (`216.198.79.1`). Any extra A record on `@`
   > (Website Builder / parking) must be removed or the site loads intermittently.

4. Save → Vercel → Domains → **Refresh**. It verifies and **auto-issues SSL**.
5. Optionally set **`onkarsinages.com`** as the primary domain (Vercel redirects `www` → apex).

Propagation: usually a few minutes, up to ~1 hour.

> Confirm the live records anytime with: `nslookup onkarsinages.com`

---

## 3. Updating the site later
```
git add -A
git commit -m "your change"
git push
```
Vercel rebuilds and redeploys automatically.
