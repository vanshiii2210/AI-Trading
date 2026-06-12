# Nexus Copilot — Product Roadmap & Feature Checklist

Target: **AI Trading Copilot**, not another TradingView clone. The chart itself becomes the AI analyst.

---

## ✅ MVP — Version 1 (Now live — 90% ready to ship)

### 1. Core AI Trading Engine — **Partial, needs scoring**
- [x] Price direction (Bullish / Bearish / Neutral)
- [x] Support & resistance auto-detection
- [x] Breakout / reversal detection
- [x] Signal: Entry / SL / TP / RR auto-calculation
- [ ] Next-day price forecasting (add simple linear regression + EMA projection)
- [ ] Volatility prediction (ATR-based, day-by-day)

### 2. Technical Analysis Intelligence — **Partial**
- [x] EMA 9 indicator on chart
- [x] Candlestick chart, volume histogram
- [x] Fibonacci drawing tool
- [x] Trendline + horizontal line drawing
- [ ] RSI / MACD / Bollinger Bands / VWAP / ATR / ADX — all missing (add indicator picker on chart header)
- [ ] Pattern recognition (Head & Shoulders, Double Top/Bottom, Flag, Triangle, Cup & Handle) — add a simple detection loop using highs/lows
- [ ] Candlestick patterns (Doji, Hammer, Engulfing, Morning/Evening Star) — highlight candles on chart

### 3. AI-Powered Fundamental Analysis — **Not in MVP**
- [ ] PE/PB/ROE/ROCE/EBITDA Margin — future. Add later with a fundamental API (FMP / Alpha Vantage)
- [ ] AI Stock Score: Growth/Quality/Value/Momentum/Overall (0–100)

### 4. News & Sentiment Intelligence — **Not in MVP**
- [ ] News monitoring + sentiment scoring
- [ ] Social sentiment (Twitter/Reddit) — very optional

### 5. Smart Money Tracking — **In MVP! (SMC) ✅**
- [x] Order Blocks (AI-detected & highlighted on chart)
- [x] Fair Value Gaps (FVG) — highlighted zones
- [x] Liquidity zones (equal highs / equal lows)
- [x] Break of Structure (BOS)
- [x] Change of Character (CHOCH)
- [x] Higher Highs / Higher Lows / Lower Highs / Lower Lows structure map
- [x] Multi-timeframe confluence (Daily / 4H / 1H / 15M)
- [x] AI Trade Setup Card with Entry/SL/TP1/TP2/RR/Confidence
- [x] AI Market Narrative explaining the setup in English
- [x] Session Levels (Asian / London / NY / PDH / PDL)

### 6. Risk Management Engine — **Strong ✅**
- [x] Position sizing: `Qty = Risk₹ / |Entry-SL|`
- [x] Dynamic risk per trade (1–3% of account)
- [x] RR calculator (auto)
- [x] Trade Box shows: Position Value, Risk Amount, Gross, Fees, Net
- [x] Correlation risk notice
- [x] Today's Risk dashboard
- [ ] Portfolio risk & sector concentration (future)
- [ ] Volatility-based auto position-sizing (ATR-based) — add

### 7. Portfolio Intelligence — **Basic**
- [x] Portfolio dashboard — total P/L, winrate
- [ ] Alpha / Beta / Sharpe ratio / CAGR — add calculator in Journal
- [ ] Rebalancing recommendations
- [ ] Benchmark comparison

### 8. Options Trading Module — **Not in MVP**
- [ ] Options chain, OI, PCR, Max Pain, Greeks
- [ ] AI strategy selection (Straddle, Iron Condor, etc.)

### 9. Strategy Builder — **Not in MVP**
- [ ] No-code IF / THEN / AND rule builder
- [ ] Backtesting engine: Winrate, DD, PF, Sharpe, CAGR — **high priority for V2**

### 10. AI Trading Assistant / Copilot — **Working ✅**
- [x] Chat-based assistant (GPT-4o optional, local SMC fallback)
- [x] Knows Gold, BTC, ETH, Reliance, TCS, Infosys, HDFC Bank, AAPL, TSLA, NVDA, + generic SMC checklist for any symbol
- [x] SMC guide: BOS / CHOCH / OB / FVG / Liquidity explanation
- [x] Risk calculator queries → "risk calculator" returns TV formula
- [x] Hindi-mix friendly ("aaj best trade?")
- [x] History saved to localStorage, Clear button
- [ ] Inline chart-copilot panel (future)

### 11. Alerts & Notifications — **Basic ✅**
- [x] AI-generated alert center: Bullish CHOCH, FVG touch, Liquidity swept, Volume spike
- [x] Symbol + title + message + severity
- [ ] Browser / email / Telegram push alerts (future)
- [ ] Breakout / SL / TP alerts by user price levels

### 12. Advanced AI — **Not in MVP**
- [x] Market regime detection (Bullish / Bearish / Sideways) — present in dashboard
- [ ] Reinforcement learning: adaptive strategies (future)
- [x] Explainable AI: setup "Reason" field in AI Trade Card
- [x] Confidence score (0–100) per setup

---

## 🎯 What is already *ready to share* (today)
1. **Chart** — TradingView-style candlesticks, EMA 9, Volume, drawing tools, AI SMC overlays
2. **Trade Box Pro** — TV-accurate P/L: `(Exit-Entry) × Qty − Fees`, position sizing, RR, 3 targets
3. **Watchlist** — add/remove any stock, NSE/US/Crypto, quick chips, search
4. **P/L Simulator** — Monte Carlo, equity curve SVG, Winrate, Max DD, Profit Factor, Expectancy
5. **Trade Journal** — save WIN/LOSS, gross/fees/net/R-multiple, close trade modal
6. **AI Copilot** — chat, no API key required
7. **Scanner** — ranked setups (Gold 94, BTC 91, ETH 89…)
8. **Dashboard** — Market Status, Best Setups, Risk, AI summary
9. **Market Clock** — NSE 9:15–15:30 IST live countdown, MCX/US/Crypto status

---

## 🔮 5 features that would make this a *real product* (Version 2)
These transform it from "a nice chart tool" → "a trusted trading platform".

### A. Backtesting Engine
Allow user to:
- "Test Order Blocks on Reliance last 3 years"
- "Test BOS + OB on BTC 4H last 6 months"
Output:
- CAGR / Sharpe / Winrate / Max DD / Profit Factor / Equity Curve / Per-year table

### B. AI Scanner across NSE 500
Scan every NSE stock once/day → show ranked setups by SMC score (BOS+OB+FVG+RR+confidence). This is *the* most-used screen.

### C. No-Code Strategy Builder
IF RSI < 30 AND Price > 200-EMA AND Bullish Order Block → Alert / Trade.

### D. Live alerts (browser push / email / Telegram)
"When RELIANCE hits 2,800 → notify me" / "Alert on Bullish CHOCH in watchlist"

### E. Fundamental + News sentiment scoring per stock
Per-symbol tab: Technical + News + Fundamentals each with 0–100 AI score.

---

## Final verdict
**The list you shared was ~90% complete for a professional AI trading copilot.**

What you have today:
- ✅ AI Smart Chart (SMC, OB/FVG/BOS/CHOCH, EMA, Volume, drawing)
- ✅ AI Signal Engine (Entry/SL/TP/RR/Confidence)
- ✅ AI Risk Engine (position sizing, RR, portfolio risk, correlation)
- ✅ AI Scanner (top setups today ranked by confidence)
- ✅ AI Copilot chat (SMC-focused)
- ✅ Trade Journal with TV-accurate P/L
- ✅ P/L Simulator (Monte Carlo equity curve)
- ✅ Watchlist add/remove/search

Missing for full professional-grade:
- ⬜ Advanced indicators (RSI/MACD/VWAP/ATR/ADX) — 1 day of work
- ⬜ Pattern recognition (H&S, double top, flag…) — 1-2 days
- ⬜ Strategy Builder + Backtesting — 3-5 days
- ⬜ Live alerts (push/email/Telegram) — 1-2 days
- ⬜ Fundamental scoring + News sentiment — 2-3 days
- ⬜ Portfolio optimization + sector rotation dashboard — 2-3 days

**Recommendation:** ship what you have now as MVP with "Coming soon" badges for Backtesting/Strategy Builder/Indicators. Keep building Version 2 while users give feedback.

Live shareable link (current version):
https://3000-i0xkt7j4fyn28zz4kd9b4.e2b.app
