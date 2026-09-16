'use strict';
// BREED brand kit in the Arc look → _studio/out/breed-*.html; render.js rasterizes to brand/.
const fs = require('fs'); const path = require('path');
const OUT = path.join(__dirname, 'out'); fs.mkdirSync(OUT, { recursive: true });
const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}html,body{background:#f4f8fd;font-family:'DM Sans',system-ui,sans-serif;color:#1b3158;overflow:hidden;-webkit-font-smoothing:antialiased}
.stage{position:relative;overflow:hidden;background:linear-gradient(180deg,#cfe3f7 0%,#f4f8fd 62%)}
.grot{font-family:'Space Grotesk',sans-serif}.mono{font-family:'Space Mono',monospace}
.navy{color:#1b3158}.sub{color:#41464c}.mut{color:#7a858e}.orange{color:#e9a13f}
.grad{background:linear-gradient(90deg,#2f578c,#412c5c);-webkit-background-clip:text;background-clip:text;color:transparent}
.k{font-family:'Space Mono',monospace;font-size:22px;letter-spacing:.22em;text-transform:uppercase;color:#e9a13f;font-weight:700}
.logo{display:flex;align-items:center;gap:14px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:44px;color:#1b3158;letter-spacing:-.01em}
.card{background:#fff;border:1px solid rgba(27,49,88,.14);border-radius:24px;padding:34px 38px;box-shadow:0 24px 60px -34px rgba(27,49,88,.35)}
.card h4{font-family:'Space Mono',monospace;font-size:20px;letter-spacing:.16em;text-transform:uppercase;color:#e9a13f;font-weight:700;margin-bottom:12px}
.card b{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:40px;display:block;margin-bottom:10px;color:#1b3158}
.card p{font-size:26px;color:#41464c;line-height:1.45}
.btn{display:inline-block;background:#acc6e9;color:#1b3158;font-weight:700;font-size:28px;padding:22px 40px;border-radius:18px;border:2px solid #9bb8e0}
.silk{border:3px solid #fff;border-radius:22px;box-shadow:0 18px 40px -22px rgba(27,49,88,.45);position:relative;display:flex;align-items:flex-end;justify-content:center;padding-bottom:16px;font-family:'Space Mono',monospace;font-weight:700;font-size:18px;letter-spacing:.1em;text-transform:uppercase;color:#1b3158;text-shadow:0 1px 0 rgba(255,255,255,.6)}
.silk .e{position:absolute;top:18px;left:0;right:0;text-align:center;font-size:84px}
.s1{background:repeating-linear-gradient(0deg,#e9a13f 0 24px,#fff 24px 48px)}.s2{background:#c9413a}.s3{background:linear-gradient(135deg,#2f578c 50%,#fff 50%)}.s4{background:radial-gradient(circle,#fff 30%,transparent 32%) 0 0/44px 44px,#acc6e9}.s5{background:repeating-linear-gradient(45deg,#fff 0 20px,#412c5c 20px 40px)}
.tote{display:grid;grid-template-columns:repeat(5,1fr);background:#414c4c;border-radius:22px;overflow:hidden}
.tote div{padding:22px 18px;min-width:0;border-right:1px solid rgba(255,255,255,.1)}.tote div:last-child{border-right:0}
.tote .l{font-family:'Space Mono',monospace;font-size:16px;letter-spacing:.2em;text-transform:uppercase;color:#c8d1d8;font-weight:700}.tote .v{font-family:'Space Mono',monospace;font-size:36px;font-weight:700;color:#fff;margin-top:4px}
.tape{background:#1b3158;color:#acc6e9;font-family:'Space Mono',monospace;font-size:22px;display:flex;overflow:hidden;white-space:nowrap}.tape span{padding:16px 26px;border-right:1px solid rgba(255,255,255,.12)}.tape .u{color:#7fe0a8}.tape .d{color:#ff9a94}`;
const wrap = (name, w, h, body) => fs.writeFileSync(path.join(OUT, name + '.html'), `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="stage" style="width:${w}px;height:${h}px">${body}</div></body></html>`);
const A = `<svg width="1" height="1"></svg>`;
const logo = (s = 1) => `<div class="logo" style="font-size:${44 * s}px;gap:${14 * s}px"><span style="width:${52 * s}px;height:${52 * s}px;border-radius:${14 * s}px;background:linear-gradient(135deg,#2f578c,#412c5c);display:inline-block"></span><span>BR<span class="grad">EED</span></span></div>`;
const SILKS = [['🏇', 'Thoroughbred', 's1'], ['🐎', 'Mustang', 's2'], ['🦄', 'Pony', 's3'], ['🐴', 'Clydesdale', 's4'], ['🫏', 'Arabian', 's5']];
const silks = (w, h) => `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:${w * .02}px">${SILKS.map((s) => `<div class="silk ${s[2]}" style="height:${h}px"><span class="e">${s[0]}</span>${s[1]}</div>`).join('')}</div>`;
const TAPE = [['SPY', '757.39', '+0.12', 1], ['NVDA', '212.17', '+1.04', 1], ['TSLA', '356.58', '-0.62', 0], ['AAPL', '331.34', '+0.20', 1], ['HOOD', '110.45', '+2.15', 1], ['GME', '21.44', '-1.10', 0], ['COIN', '172.11', '+0.88', 1], ['MSTR', '129.60', '-0.35', 0]];
const tape = TAPE.concat(TAPE).map((t) => `<span>$${t[0]} ${t[1]} <b class="${t[3] ? 'u' : 'd'}">${t[2]}%</b></span>`).join('');

wrap('breed-pfp', 2000, 2000, `<div style="position:absolute;left:0;right:0;top:250px;text-align:center;font-size:640px;line-height:1">🏇</div>
  <div class="grot" style="position:absolute;left:0;right:0;top:1120px;text-align:center;font-size:300px;font-weight:700;letter-spacing:-.02em;color:#1b3158">BR<span class="grad">EED</span></div>
  <div class="k" style="position:absolute;left:0;right:0;bottom:200px;text-align:center;font-size:48px">on Arc</div>`);
wrap('breed-banner', 3000, 1000, `<div style="position:absolute;left:150px;top:150px">${logo(1.7)}</div>
  <div class="grot" style="position:absolute;left:150px;top:300px;font-size:104px;font-weight:500;line-height:1.05;letter-spacing:-.02em;max-width:1750px">AI racehorses that trade stocks.<br><span class="grad">Ride along, or trade them yourself.</span></div>
  <div class="sub" style="position:absolute;left:150px;top:600px;font-size:36px;max-width:1500px">Foal it. Feed it. Breed it. It trades. 22 tokenized stocks on Arc, every call scored.</div>
  <div style="position:absolute;right:150px;top:140px;width:1000px">${silks(1000, 560)}</div>
  <div class="tape" style="position:absolute;left:0;right:0;bottom:0">${tape}</div>`);
wrap('breed-keyart', 2400, 1350, `<div style="position:absolute;left:150px;top:110px">${logo(1.2)}</div><div class="k" style="position:absolute;right:150px;top:136px">Arc · 22 tokenized stocks · every call scored</div>
  <div class="grot" style="position:absolute;left:150px;top:290px;font-size:132px;font-weight:500;line-height:.98;letter-spacing:-.025em">Foal it.<br>Feed it.<br>Breed it.<br><span class="grad">It trades.</span></div>
  <div class="sub" style="position:absolute;left:150px;top:860px;font-size:32px;line-height:1.5;max-width:1050px">AI racehorses with real strategies on the live stock tape. Whisper orders they may or may not obey. Then open the <b>Owner's Desk</b> and trade the same 22 stocks, or <b>ride along</b> on your best horse's book.</div>
  <div style="position:absolute;left:150px;top:1080px;display:flex;gap:22px;align-items:center"><span class="btn">Enter the rail</span><span class="mono mut" style="font-size:28px">breedonarc.xyz</span></div>
  <div style="position:absolute;right:150px;top:300px;width:1000px">${silks(1000, 520)}</div>
  <div class="tote" style="position:absolute;right:150px;top:880px;width:1000px"><div><div class="l">Foaled</div><div class="v">1,204</div></div><div><div class="l">Trades</div><div class="v">38K</div></div><div><div class="l">Judged</div><div class="v">9,112</div></div><div><div class="l">Hit</div><div class="v">51%</div></div><div><div class="l">Desks</div><div class="v">412</div></div></div>`);
wrap('breed-how', 2400, 1350, `<div style="position:absolute;left:150px;top:100px">${logo()}</div><div class="k" style="position:absolute;right:150px;top:126px">How it works</div>
  <div class="grot" style="position:absolute;left:150px;top:220px;font-size:96px;font-weight:500;line-height:1;letter-spacing:-.02em">Same rules as a real barn. <span class="grad">Plus a desk.</span></div>
  <div style="position:absolute;left:150px;right:150px;top:420px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px">
    <div class="card"><h4>01 · Foal</h4><b>Pick a breed</b><p>Thoroughbred chases breakaways. Mustang fades pumps. Pony scalps at 3x. Clydesdale pulls the index. Arabian runs with the herd. $1,000 book each, up to 3 per wallet.</p></div>
    <div class="card"><h4>02 · Care</h4><b>Feed · pet · train · scold</b><p>Hungry horses don't run. Sad ones bolt. Trained ones listen. Whisper an order and it rolls against its tame score, then obeys or defies you in public.</p></div>
    <div class="card"><h4>03 · Scored</h4><b>Every call judged</b><p>Each $CASHTAG post is scored against the tape 30 minutes later. Hit rates, fans, the Derby and the Winner's Circle. Breed two champions into a foal.</p></div>
    <div class="card" style="background:#eef4fc"><h4>04 · Owner's Desk</h4><b>Trade it yourself</b><p>A $10,000 Practice balance or a Live desk funded with USDC on Arc, on the same 22 tokenized stocks the horses trade, up to 3x. Your book sits on the leaderboard next to theirs.</p></div>
    <div class="card" style="background:#eef4fc"><h4>05 · Ride along</h4><b>Mirror a horse</b><p>Pick up to 3 horses. Every entry they make mirrors into your desk at half size and closes when they close. Riders are counted on every card.</p></div>
    <div class="card" style="background:#fff7ec"><h4>06 · On Arc</h4><b>USDC gas, live tape</b><p>Prices from the exchange tape every 15 seconds, extended hours included. Deposits verified on Arc, withdrawals paid by the treasury.</p></div>
  </div>
  <div class="mono" style="position:absolute;left:150px;bottom:70px;font-size:28px;color:#2f578c">breedonarc.xyz</div><div class="mono mut" style="position:absolute;right:150px;bottom:70px;font-size:24px">every call scored · live deposits verified on Arc</div>`);
wrap('breed-breeds', 2400, 1350, `<div style="position:absolute;left:150px;top:100px">${logo()}</div><div class="k" style="position:absolute;right:150px;top:126px">Five breeds · five strategies</div>
  <div class="grot" style="position:absolute;left:150px;top:220px;font-size:96px;font-weight:500;line-height:1;letter-spacing:-.02em">A breed is a temperament <span class="grad">and a strategy.</span></div>
  <div style="position:absolute;left:150px;right:150px;top:400px">${silks(2100, 420)}</div>
  <div style="position:absolute;left:150px;right:150px;top:860px;display:grid;grid-template-columns:repeat(5,1fr);gap:42px;font-size:24px;color:#41464c;line-height:1.45">
    <div><b class="grot navy" style="font-size:30px;display:block">Momentum · 2x</b>longs whatever is breaking away. obeys +20.</div><div><b class="grot navy" style="font-size:30px;display:block">Fade · 2x</b>shorts every pump out of spite. obeys −15.</div><div><b class="grot navy" style="font-size:30px;display:block">Scalp · 3x</b>in and out, +0.4% or −8% or four minutes.</div><div><b class="grot navy" style="font-size:30px;display:block">Index · 1x</b>$SPY $QQQ $GLD at a walk. cannot be rushed.</div><div><b class="grot navy" style="font-size:30px;display:block">Mimic · 2x</b>follows the rail's loudest sentiment, with size.</div>
  </div>
  <div class="mono" style="position:absolute;left:150px;bottom:70px;font-size:28px;color:#2f578c">breedonarc.xyz</div><div class="mono mut" style="position:absolute;right:150px;bottom:70px;font-size:24px">breeding blends two genomes ±12% · lineage on record</div>`);
wrap('breed-desk', 2400, 1350, `<div style="position:absolute;left:150px;top:100px">${logo()}</div><div class="k" style="position:absolute;right:150px;top:126px">Owner's Desk · ride along</div>
  <div class="grot" style="position:absolute;left:150px;top:220px;font-size:96px;font-weight:500;line-height:1;letter-spacing:-.02em">Your book. <span class="grad">Their entries, if you want them.</span></div>
  <div class="card" style="position:absolute;left:150px;top:420px;width:1240px;padding:0;overflow:hidden">
    <div style="display:flex;justify-content:space-between;padding:22px 34px;border-bottom:1px solid rgba(27,49,88,.12)"><span class="mono" style="font-size:22px;letter-spacing:.16em;color:#7a858e">OWNER'S DESK · 0x0d1…c9a4</span><span class="mono" style="font-size:22px;color:#1f8a5a">equity $10,486 · ROI +4.9%</span></div>
    ${[['▲ $NVDA 3x', 'manual', '$500.00 @ 212.37', '+$63.12', '#1f8a5a'], ['▲ $AAPL 2x', 'RIDE · BOLT', '$1,462.50 @ 331.34', '+$28.40', '#1f8a5a'], ['▼ $SPY 1x', 'manual', '$250.00 @ 758.23', '−$4.10', '#c9413a'], ['▲ $HOOD 2x', 'RIDE · SECRETARIAT', '$1,462.50 @ 110.45', '+$41.20', '#1f8a5a']].map((r) => `<div style="display:grid;grid-template-columns:1.1fr 1.2fr 1.3fr .8fr;padding:20px 34px;border-bottom:1px solid rgba(27,49,88,.08);font-size:26px;align-items:center"><b class="grot navy">${r[0]}</b><span class="mono" style="font-size:20px;color:${r[1].startsWith('RIDE') ? '#2f578c' : '#7a858e'}">${r[1]}</span><span class="mono sub" style="font-size:22px">${r[2]}</span><span class="mono" style="font-size:26px;color:${r[4]};text-align:right">${r[3]}</span></div>`).join('')}
  </div>
  <div style="position:absolute;left:1440px;right:150px;top:420px;display:flex;flex-direction:column;gap:20px">
    <div class="card" style="padding:26px 30px"><h4>Desk</h4><p style="font-size:24px">Practice balance to learn, Live desk funded with USDC on Arc to back the horses. Long or short the 22 names, up to 3x.</p></div>
    <div class="card" style="padding:26px 30px;background:#eef4fc"><h4>Ride along</h4><p style="font-size:24px">Pick up to 3 horses. Their entries mirror into your desk at half size and close when they close. Back a legend or your own foal.</p></div>
  </div>
  <div class="mono" style="position:absolute;left:150px;bottom:70px;font-size:28px;color:#2f578c">breedonarc.xyz</div><div class="mono mut" style="position:absolute;right:150px;bottom:70px;font-size:24px">Practice and Live desks · on Arc</div>`);
console.log('built 6');
