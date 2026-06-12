# Nexus Copilot – AI Trading Copilot

Not another TradingView clone. AI-powered Smart Money analysis: BOS, CHOCH, Order Blocks, FVG, Liquidity Sweeps.

Live P/L = (Exit − Entry) × Qty − Fees – TradingView accurate.

## Features
- Dashboard: Market Status, Best Setups, AI Market Summary, Risk Dashboard
- Scanner: Ranked AI setups – Gold, BTC, ETH, Nifty
- Chart: Candlestick OHLC via Yahoo Finance, 1m/5m/15m/1h/3h/4h/1d, Drawing tools: Trendline, H-Line, Fibonacci, AI overlays OB/FVG/BOS/CHOCH, Session levels
- Trade Box Pro: Account Size / Risk % → auto Qty, Commission %, RR quick buttons, Gross / Fees / Net P/L, Live P/L
- Watchlist: Search any stock – NSE (RELIANCE.NS, TCS.NS, INFY.NS …), US (AAPL, TSLA), Crypto, add/remove
- Trade Journal: Gross / Fees / Net / R-Multiple, close trade modal, Winrate, Expectancy
- AI Copilot Chat: `OPENAI_API_KEY` optional, local SMC fallback
- Alerts Center

## Local dev
```bash
npm install
# set DATABASE_URL in .env
# npx drizzle-kit push
npm run dev
```

## Deploy to Vercel – Fix for “Couldn't find any `pages` or `app` directory”

That error means Vercel is building in the wrong folder.

1. Push the **entire repo root** to GitHub – the root must contain:
   ```
   package.json
   next.config.ts
   src/app/page.tsx
   src/app/layout.tsx
   ```
   Do **NOT** push only the `src/` folder. Do **NOT** nest everything in an extra subfolder.

2. Vercel → New Project → Import your GitHub repo

3. **Framework Preset:** Next.js (auto-detected)

   **Root Directory:** `./`  ← leave as project root
   - If your repo looks like `my-repo/nexus-copilot/package.json`, then set Root Directory = `nexus-copilot`
   - If your repo root IS the Next.js app (has package.json at top), leave Root Directory empty / `./`

4. Build settings (defaults are fine):
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: (leave empty)

5. Environment Variables – add in Vercel Project Settings → Environment Variables:
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/db?sslmode=require
   ```
   - Use Vercel Postgres / Neon / Supabase – any Postgres works
   - Optional: `OPENAI_API_KEY=sk-...` for live AI chat (falls back to local SMC if missing)

6. After first deploy, run a one-time schema push:
   - Vercel → your project → Settings → General → add a Build Command override temporarily:
     `npx drizzle-kit push && npm run build`
     – deploy once, then revert to plain `npm run build`
   - Or run locally: `DATABASE_URL="your_vercel_db_url" npx drizzle-kit push`

That's it. The repo includes `vercel.json` and `next.config.ts` with `outputFileTracingRoot` to prevent the “app directory not found” error.

### Still getting the error?
- Check Vercel build logs → “Cloning repository…” – does it show `src/app` at the top level?
  If you see `Cloning … /nexus-copilot/src/app`, then set Vercel **Root Directory = nexus-copilot**
- Make sure `.gitignore` is NOT ignoring `src/`. The included `.gitignore` in this repo is correct.
- Delete and re-import the project in Vercel if you changed Root Directory – Vercel caches the first detection.

## Tech
Next.js 16, React 19, Postgres + Drizzle, lightweight-charts, Tailwind 4

P/L Formula (TV-accurate):
```
points = side=='long' ? exit-entry : entry-exit
gross  = points * qty
fees   = (entry + exit) * qty * commissionRate/100
net    = gross - fees
```
Example: Buy 105 Sell 108 Qty 100, 0.03% commission
→ Gross ₹300, Fees ₹0.64, Net ₹299.36
→ 0% commission → Net ₹300 exactly
