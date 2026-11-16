export default function Main() {
  return (
    <>
<main id="main">
  {/* scroll sizer: the document scrolls, chapters are fixed layers driven by the director */}
  <div className="sizer" id="sizer" aria-hidden="true" />
  {/* ===================== HERO ===================== */}
  <section className="ch ch--hero" id="c-hero" data-ch="hero" aria-labelledby="heroTitle">
    <svg className="hero-lines" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
      <line x1={-40} y1={140} x2={1480} y2={520} className="hl hl--a" />
      <line x1={-40} y1={700} x2={1480} y2={170} className="hl hl--b" />
      <line x1={1040} y1={-20} x2={1040} y2={920} className="hl hl--c" />
    </svg>
    <div className="hero">
      <h1 className="hero__title" id="heroTitle" aria-label="Financial intelligence. Without limits.">
        <span className="hl1 line"><span className="w-financial">FINANCIAL</span></span>
        <span className="hl2 line"><span className="w-intel" data-split="chars">INTELLIGENCE.</span></span>
        <span className="hl3 line"><span className="w-limits"><em className="serif">without</em> LIMITS.</span></span>
      </h1>
      <p className="hero__sub" data-reveal>Orchestrate capital across chains, automate payouts and see your global treasury through one quantum‑secure lens.</p>
      <div className="hero__cta" data-reveal>
        <button className="btn btn--primary magnetic" data-open-access><span>Start moving forward</span><span className="btn__arrow" aria-hidden="true"><i>→</i><i>→</i></span></button>
        <a href="#c-ops" className="btn btn--text" data-goto="ops"><span>Explore the platform</span></a>
      </div>
    </div>
    {/* the atrium HUD: the system the sculpture is holding (js/main.js hud) */}
    <div className="hud" id="hud">
      <svg className="hud__lead" aria-hidden="true"><polyline id="hudLine" points="0,0 0,0 0,0" pathLength={1} /><circle id="hudDot" r="2.6" cx={0} cy={0} /><circle id="hudRing" r={7} cx={0} cy={0} /></svg>
      <div className="hud__label" id="hudLabel" aria-live="polite">
        <span className="hud__tag mono"><i className="hud__led" aria-hidden="true" /><b id="hudTag">System 01</b><span aria-hidden="true">/</span><span id="hudKind">Core</span></span>
        <span className="hud__title" id="hudTitle" aria-hidden="true">MATRIX OS</span>
        <span className="sr" id="hudSr">Matrix OS</span>
        <span className="hud__data mono" id="hudData">6 systems · one ledger</span>
        <span className="hud__row"><button className="hud__go mono" id="hudGo" type="button"><span id="hudGoT">View system</span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h10.6M9.2 3.9 13.3 8l-4.1 4.1" /></svg></button>
          <span className="hud__pager"><button className="hud__nav" id="hudPrev" type="button" aria-label="Previous system"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" /></svg></button><span className="hud__pn mono" aria-hidden="true"><b id="hudPn">01</b>/07</span><button className="hud__nav" id="hudNext" type="button" aria-label="Next system"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg></button></span></span>
      </div>
      <div className="hud__rail" aria-hidden="true"><i id="hudFill" /></div>
      <span className="hud__count mono" aria-hidden="true"><b id="hudN">01</b> / 06</span>
    </div>
    <div className="hero__stats" data-reveal>
      <div className="stat"><span className="mono stat__k">Total treasury</span><span className="stat__v">$412,906 <em className="chip-up">+9.73%</em></span></div>
      <div className="stat"><span className="mono stat__k">Latency</span><span className="stat__v">37ms</span></div>
      <div className="stat stat--scroll"><span className="mono stat__k">Scroll to explore</span><i className="scroll-line" /></div>
    </div>
    {/* phase captions at different depths */}
    <div className="depth" aria-hidden="false">
      <p className="depth__t depth__t--1" data-depth={1}><span className="mono">Phase I — Signal</span>Inside every card,<br /><em className="serif">a living network.</em></p>
      <p className="depth__t depth__t--2" data-depth={2}><span className="mono">Phase II — Routing</span>40+ liquidity venues.<br /><em className="serif">One decision.</em></p>
      <p className="depth__t depth__t--3" data-depth={3}><span className="mono">Phase III — Ledger</span>Every transaction<br /><em className="serif">becomes intelligence.</em></p>
      <span className="depth__tag mono" data-tag={0}>USD → SGD · 0.09s</span>
      <span className="depth__tag mono" data-tag={1}>EUR · SEPA · T+0</span>
      <span className="depth__tag mono" data-tag={2}>BRL · PIX · instant</span>
      <span className="depth__tag mono" data-tag={3}>USDC · SOL · 400ms</span>
    </div>
  </section>
  {/* ===================== OPERATING LAYER (a fixed overlay carried up over the held scene, between the hero and Treasury) ===================== */}
  <section className="ops" id="c-ops" aria-labelledby="opsTitle">
    <div className="ops__grid" aria-hidden="true" />
    <header className="ops__head">
      <div className="ops__hl">
        <p className="ops__idx mono rv"><span className="lottie sec-ic" data-icon="ai" />01 — Operating layer</p>
        <h2 className="ops__title" id="opsTitle"><span className="line"><span className="ops__l">FOUR SYSTEMS.</span></span><span className="line"><em className="serif ops__l">One motion.</em></span></h2>
      </div>
      <p className="ops__lede rv">Behind every MatrixPay transfer, four autonomous systems hand a single signal down the line&nbsp;— executing orders, matching payments, forecasting cash and guarding every move, with no human handoff in between.</p>
    </header>
    <div className="ops__flow" id="opsFlow">
      <svg className="ops__path" id="opsPath" aria-hidden="true">
        <g className="ops__taps" />
        <path className="ops__track" d /><path className="ops__glow" d /><path className="ops__lit" d />
        <g className="ops__ports" />
        <defs><radialGradient id="opsHalo"><stop offset={0} stopColor="#9AFFD3" stopOpacity=".55" /><stop offset=".45" stopColor="#00D996" stopOpacity=".22" /><stop offset={1} stopColor="#00D996" stopOpacity={0} /></radialGradient></defs>
        <text className="ops__in mono" x={0} y={0}>Signal in</text>
        <g className="ops__packet"><circle r={16} className="ops__halo" fill="url(#opsHalo)" /><circle r="3.6" className="ops__core" /></g>
      </svg>
      <article className="sys sys--wide sys--l" id="ops-execution" data-key="execution" aria-labelledby="opsT1">
        <figure className="sys__plate">
          <figcaption className="sys__bar mono"><span>01 — Execution engine</span><span className="sys__live" aria-hidden="true"><i /><span>Live · <b data-live="orders">1,204</b> orders/s</span></span></figcaption>
          <div className="sys__frame"><div className="sys__stage"><canvas className="sys__cv" role="img" aria-label="Animated isometric illustration: candlestick orders flow by cable into the Execution platform, then branch to routing and settle as checked blocks beside coin stacks." /></div><span className="sys__corners" aria-hidden="true" /><span className="sys__ping" aria-hidden="true" /></div>
        </figure>
        <div className="sys__copy">
          <h3 className="sys__t rv" id="opsT1">Orders that<br /><em className="serif">route themselves.</em></h3>
          <p className="sys__d rv">Smart order routing slices every instruction across 40+ venues, nets opposing flows and settles the remainder in under a second&nbsp;— slippage held to basis points.</p>
          <ol className="sys__stages rv" aria-label="What the illustration shows">
            <li data-from={0} data-to="2.2"><b className="mono">01</b><span>Orders</span><em className="mono">candles · clock</em></li>
            <li data-from="2.2" data-to="4.7"><b className="mono">02</b><span>Execution</span><em className="mono">net · split</em></li>
            <li data-from="3.8" data-to="5.6"><b className="mono">03</b><span>Routing</span><em className="mono">3 branches</em></li>
            <li data-from="5.6" data-to="7.3"><b className="mono">04</b><span>Settlement</span><em className="mono">checked · settled</em></li>
          </ol>
          <dl className="sys__spec rv"><div><dt className="mono">Median fill</dt><dd>37<small>ms</small></dd></div><div><dt className="mono">Slippage</dt><dd>0.18<small>%</small></dd></div><div><dt className="mono">Venues</dt><dd>40+</dd></div></dl>
        </div>
      </article>
      <div className="ops__pair">
        <article className="sys sys--half" id="ops-payments" data-key="payments" aria-labelledby="opsT2">
          <figure className="sys__plate">
            <figcaption className="sys__bar mono"><span>02 — Reconciliation</span><span className="sys__live" aria-hidden="true"><i /><span>Live · <b data-live="matched">3,418</b> matched today</span></span></figcaption>
            <div className="sys__frame"><div className="sys__stage"><canvas className="sys__cv" role="img" aria-label="Animated isometric illustration: pound, euro and dollar payment cards send a signal to the Match platform's chain link, then on to two verified documents and a confirmation badge." /></div><span className="sys__corners" aria-hidden="true" /><span className="sys__ping" aria-hidden="true" /></div>
          </figure>
          <div className="sys__copy">
            <h3 className="sys__t rv" id="opsT2">Every payment,<br /><em className="serif">matched on arrival.</em></h3>
            <p className="sys__d rv">Incoming £, € and $ payments are paired with invoices and ledger lines the moment they land, verified and closed&nbsp;— no spreadsheets, no month-end scramble.</p>
            <dl className="sys__spec rv"><div><dt className="mono">Auto-match</dt><dd>98.7<small>%</small></dd></div><div><dt className="mono">Exceptions</dt><dd>0.4<small>%</small></dd></div><div><dt className="mono">Close</dt><dd>1<small>tap</small></dd></div></dl>
          </div>
        </article>
        <article className="sys sys--half sys--drop" id="ops-treasury" data-key="treasury" aria-labelledby="opsT3">
          <figure className="sys__plate">
            <figcaption className="sys__bar mono"><span>03 — Treasury forecast</span><span className="sys__live" aria-hidden="true"><i /><span>Live · re-forecast <b data-live="ago">2</b>s ago</span></span></figcaption>
            <div className="sys__frame"><div className="sys__stage"><canvas className="sys__cv" role="img" aria-label="Animated isometric illustration: a closed vault and coin stacks feed a rising bar chart and an elevated Forecast display, beside a segmented donut chart." /></div><span className="sys__corners" aria-hidden="true" /><span className="sys__ping" aria-hidden="true" /></div>
          </figure>
          <div className="sys__copy">
            <h3 className="sys__t rv" id="opsT3">Cash you can<br /><em className="serif">see coming.</em></h3>
            <p className="sys__d rv">Vault balances, inflows and payroll roll forward into a live 13-week forecast, so idle cash is rebalanced before it ever sits still.</p>
            <dl className="sys__spec rv"><div><dt className="mono">Horizon</dt><dd>13<small>wk</small></dd></div><div><dt className="mono">Runway</dt><dd>38<small>mo</small></dd></div><div><dt className="mono">Yield</dt><dd>4.82<small>%</small></dd></div></dl>
          </div>
        </article>
      </div>
      <article className="sys sys--wide sys--r" id="ops-risk" data-key="risk_ai" aria-labelledby="opsT4">
        <figure className="sys__plate">
          <figcaption className="sys__bar mono"><span>04 — Risk sentinel</span><span className="sys__live" aria-hidden="true"><i /><span>Live · <b data-live="alerts">0</b> open alerts</span></span></figcaption>
          <div className="sys__frame"><div className="sys__stage"><canvas className="sys__cv" role="img" aria-label="Animated isometric illustration: a checkmarked shield floats above the Risk AI processor, which pulses signals to Analytics, Monitor and Protect platforms." /></div><span className="sys__corners" aria-hidden="true" /><span className="sys__ping" aria-hidden="true" /></div>
        </figure>
        <div className="sys__copy">
          <h3 className="sys__t rv" id="opsT4">Risk,<br /><em className="serif">caught in motion.</em></h3>
          <p className="sys__d rv">A sentinel model scores every movement in real time, watches exposure across entities and holds anomalies before they settle&nbsp;— with audit evidence filed automatically.</p>
          <ol className="sys__stages rv" aria-label="What the illustration shows">
            <li data-from={0} data-to="1.6"><b className="mono">01</b><span>Risk AI core</span><em className="mono">processor pulse</em></li>
            <li data-from="1.6" data-to="3.3"><b className="mono">02</b><span>Analytics</span><em className="mono">bars · segments</em></li>
            <li data-from="3.3" data-to="5.4"><b className="mono">03</b><span>Monitor</span><em className="mono">trace · inspect</em></li>
            <li data-from="5.1" data-to="7.3"><b className="mono">04</b><span>Protect</span><em className="mono">certify · seal</em></li>
          </ol>
          <dl className="sys__spec rv"><div><dt className="mono">Decision</dt><dd>12<small>ms</small></dd></div><div><dt className="mono">Coverage</dt><dd>100<small>%</small></dd></div><div><dt className="mono">Audit</dt><dd>SOC2</dd></div></dl>
        </div>
      </article>
    </div>
    <div className="ops__coda">
      <dl className="ops__tally" aria-label="4 systems, 1 signal, 0 handoffs">
        <div className="rv"><dt className="mono">Systems</dt><dd data-count={4} data-from={0}>4</dd></div>
        <div className="rv"><dt className="mono">Signal</dt><dd data-count={1} data-from={0}>1</dd></div>
        <div className="rv"><dt className="mono">Handoffs</dt><dd data-count={0} data-from={12}>0</dd></div>
      </dl>
      <span className="ops__seam" aria-hidden="true" />
    </div>
    <div className="ops__fade" aria-hidden="true" />
  </section>
  {/* ===================== TREASURY ===================== */}
  <section className="ch ch--treasury" id="c-treasury" data-ch="treasury" aria-labelledby="treTitle">
    <header className="sec-head">
      <p className="sec-head__idx mono"><span className="lottie sec-ic" data-icon="treasury" />02 — Treasury</p>
      <h2 className="sec-title vtype" id="treTitle"><span className="line"><span data-split="chars">EVERY DOLLAR.</span></span><span className="line"><em className="serif" data-split="words">Every possibility.</em></span></h2>
    </header>
    <div className="tre" id="tre">
      <div className="tre__hero" data-panel>
        <div className="tre__sum">
          <p className="cell__k mono"><span className="lottie mod-ic" data-icon="treasury" />Total treasury</p>
          <div className="odo" id="odo" aria-label="$412,906.37" />
          <p className="cell__meta"><em className="chip-up">+9.73%</em><span>30 days · 6 liquidity pools</span></p>
        </div>
        <div className="tre__act">
          <p className="tre__status mono"><i className="pulse-dot" /><span id="treSync">Synced 8s ago</span><span className="tre__sep" aria-hidden="true">·</span><span>Yield 4.82% APY</span><em className="yield-chip" id="yieldChip">+$312 captured</em></p>
          <div className="cell__actions">
            <button className="btn btn--chip" id="topup"><span className="lottie btn__ic" data-icon="wallet" />Instant top-up</button>
          </div>
        </div>
      </div>
      <div className="tre__mods">
        <article className="mod mod--liq" data-panel>
          <p className="cell__k mono"><span className="lottie mod-ic" data-icon="globe" />Global liquidity</p>
          <div className="liq">
            <div className="donut-wrap">
              <svg className="donut" id="donut" viewBox="0 0 120 120" role="img" aria-label="Liquidity split across six pools" />
              <div className="donut__c"><b id="donutV">6</b><span className="mono" id="donutK">pools</span></div>
            </div>
            <ul className="legend" id="legend" />
          </div>
        </article>
        <article className="mod mod--flow" data-panel>
          <p className="cell__k mono"><span className="lottie mod-ic" data-icon="transfers" />Flows<span className="hide-md"> · this cycle</span></p>
          <dl className="flows">
            <div><dt className="mono">In</dt><dd className="flow__v" data-count={92441} data-prefix="+$">+$92,441</dd><dd className="mono flow__d up">+5.8%</dd></div>
            <div><dt className="mono">Out</dt><dd className="flow__v flow__v--out" data-count={61307} data-prefix="−$">−$61,307</dd><dd className="mono flow__d">−2.4%</dd></div>
          </dl>
          <svg className="flowbars" id="flowbars" viewBox="0 2 280 70" preserveAspectRatio="none" aria-hidden="true" />
        </article>
        <article className="mod mod--perf" data-panel>
          <div className="cell__row"><p className="cell__k mono"><span className="lottie mod-ic" data-icon="analytics" />Performance · 12 months</p><p className="mono perf__v" id="perfV">Nov · $412.9k</p></div>
          <div className="perf" id="perf">
            <svg className="perf__svg" id="perfSvg" viewBox="0 0 600 200" preserveAspectRatio="none" role="img" aria-label="Treasury balance grew from $268k to $412.9k over twelve months" />
            <div className="perf__x mono"><span style={{'--i': 0}}>Dec</span><span style={{'--i': 2}}>Feb</span><span style={{'--i': 4}}>Apr</span><span style={{'--i': 6}}>Jun</span><span style={{'--i': 8}}>Aug</span><span style={{'--i': 11}}>Nov</span></div>
            <div className="perf__tip" id="perfTip" />
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* ===================== TRANSFER ===================== */}
  <section className="ch ch--transfer" id="c-transfer" data-ch="transfer" aria-labelledby="trTitle">
    <header className="sec-head sec-head--right">
      <p className="sec-head__idx mono"><span className="lottie sec-ic" data-icon="transfers" />03 — Smart transfer</p>
      <h2 className="sec-title vtype" id="trTitle"><span className="line"><span data-split="chars">MONEY MOVES.</span></span><span className="line"><em className="serif" data-split="words">Intelligence leads.</em></span></h2>
    </header>
    <ol className="route" id="route">
      <li className="route__s" data-step={0}><span className="mono route__n">01</span><div><b>Origin</b><span>Ops-Main wallet · New York</span><em className="route__v">$1,204.66</em></div></li>
      <li className="route__s" data-step={1}><span className="mono route__n">02</span><div><b>Optimal route</b><span>New York → London → Singapore</span><em className="route__v mono route__v--tight">3 rails · fee $1.03 · 0.09s</em></div></li>
      <li className="route__s" data-step={2}><span className="mono route__n">03</span><div><b><span className="lottie btn__ic" data-icon="exchange" />Conversion</b><span>USD → SGD · <b className="mono" id="fxRate">1.3194</b> · locked 12m</span><em className="route__v mono">Slippage 0.18%</em></div></li>
      <li className="route__s" data-step={3}><span className="mono route__n">04</span><div><b>Delivered</b><span>Partner receives · Singapore</span><em className="route__v">S$1,589.42</em></div></li>
    </ol>
    <div className="globe-meta"><span className="lottie sec-ic" data-icon="globe" /><div><b>140+</b><span className="mono">countries</span></div><div><b>12ms</b><span className="mono">avg latency</span></div><div><b>99.99%</b><span className="mono">uptime</span></div></div>
    <div className="hubs" id="hubs" role="group" aria-label="Financial hubs — select one to see details" />
    <aside className="hubcard" id="hubcard" aria-live="polite" hidden>
      <button className="hubcard__x" aria-label="Close hub details">×</button>
      <p className="mono hubcard__k" id="hubK">Hub</p>
      <h3 id="hubName">London</h3>
      <dl id="hubDl" />
    </aside>
    <p className="hint mono" id="globeHint">Select a hub · drag to rotate</p>
  </section>
  {/* ===================== INTELLIGENCE ===================== */}
  <section className="ch ch--intel" id="c-intel" data-ch="intel" aria-labelledby="inTitle">
    <header className="sec-head">
      <p className="sec-head__idx mono"><span className="lottie sec-ic" data-icon="intelligence" />04 — Spend intelligence</p>
      <h2 className="sec-title vtype" id="inTitle"><span className="line"><span data-split="chars">SEE BEYOND</span></span><span className="line"><span data-split="chars" id="inThe">THE</span> <span className="numbers-word" id="numbersWord"><span data-split="chars">NUMBERS.</span></span></span></h2>
    </header>
    <p className="depth__t depth__t--4" id="depthCap"><span className="mono">Phase IV — Depth</span>Behind every number,<br /><em className="serif">another dimension.</em></p>
    <div className="intel" id="intel">
      <div className="intel__stat">
        <p className="mono cell__k">Outflow · <span id="wkLabel">Week 34</span></p>
        <p className="intel__num"><span id="outNum">$61,307</span></p>
        <p className="mono intel__delta" id="outDelta">−2.4% vs last week</p>
        <div className="seg" role="tablist" aria-label="Choose week">
          <button role="tab" data-wk={0} data-cursor="W32">W32</button><button role="tab" data-wk={1} data-cursor="W33">W33</button><button role="tab" data-wk={2} aria-selected="true" data-cursor="W34">W34</button>
        </div>
        <ul className="trends" id="trends" />
      </div>
      <div className="intel__chart">
        <div className="cell__row"><p className="mono cell__k"><span className="lottie btn__ic" data-icon="analytics" />Outflow by category<span className="hide-sm"> · tap a bar</span></p><p className="mono intel__legend" aria-label="Legend"><i className="lg lg--cur" /><span id="lgCur">W33</span><i className="lg lg--prev" /><span id="lgPrev">W32</span></p></div>
        <div className="bars" id="bars" role="group" aria-label="Outflow by category" />
        <div className="anomaly" id="anomaly"><i className="pulse-dot" /><p><b id="anoT">Vendors +18% above trend</b><span className="mono" id="anoS">Flagged · 3 invoices · review suggested</span></p></div>
      </div>
    </div>
  </section>
  {/* ===================== VAULT ===================== */}
  <section className="ch ch--vault" id="c-vault" data-ch="vault" aria-labelledby="vaTitle">
    <header className="sec-head">
      <p className="sec-head__idx mono"><span className="lottie sec-ic" data-icon="security" />05 — Sentinel Vault</p>
      <h2 className="sec-title vtype" id="vaTitle"><span className="line"><span data-split="chars">SECURITY</span></span><span className="line"><em className="serif" data-split="words">without compromise.</em></span></h2>
    </header>
    <ul className="specs" id="specs">
      <li><span className="mono">MPC</span><b>3-of-5 signing shards</b><em>5 regions · threshold ECDSA</em></li>
      <li><span className="mono">HSM</span><b>FIPS 140-3 Level 4</b><em>Hardware-isolated keys</em></li>
      <li><span className="mono">Policy</span><b>Level 4 approval groups</b><em>Quorum + time locks</em></li>
      <li><span className="mono">Tamper</span><b>Feed secure</b><em>0 events · 412 days</em></li>
    </ul>
    <div className="vault-state mono" id="vaultState"><i className="pulse-dot" /><span id="vaultStateT">Core sealed</span></div>
    <div className="certs mono"><span>SOC2 Type II</span><span>ISO 27001</span><span>PCI-DSS L1</span></div>
  </section>
  {/* ===================== LIQUIDITY ===================== */}
  <section className="ch ch--liquidity" id="c-liquidity" data-ch="liquidity" aria-labelledby="liTitle">
    <header className="sec-head">
      <p className="sec-head__idx mono"><span className="lottie sec-ic" data-icon="exchange" />06 — Liquidity grid</p>
      <h2 className="sec-title vtype" id="liTitle"><span className="line"><span data-split="chars">ONE PLATFORM.</span></span><span className="line"><em className="serif" data-split="words">Every market.</em></span></h2>
    </header>
    <div className="fx-wrap"><p className="mono fx__h"><span>Markets</span><span>vs USD · select</span></p><div className="fx" id="fx" role="list" aria-label="Supported currencies" /></div>
    <aside className="ccy" id="ccy" aria-live="polite">
      <p className="mono ccy__k" id="ccyK">Selected market</p>
      <div className="ccy__head"><b id="ccyCode">EUR</b><span id="ccyName">Eurozone</span></div>
      <dl className="ccy__dl" id="ccyDl" />
    </aside>
  </section>
  {/* ===================== FUTURE ===================== */}
  <section className="ch ch--future" id="c-future" data-ch="future" aria-labelledby="fuTitle">
    <h2 className="future__title" id="fuTitle" aria-label="The future is already moving."><span className="line"><span className="magnetic-type" data-split="chars">THE FUTURE</span></span><span className="line"><span className="magnetic-type" data-split="chars">IS ALREADY</span> <em className="serif">moving.</em></span></h2>
    <div className="future__cta">
      <button className="btn btn--huge magnetic" data-open-access><span>Start moving forward</span><span className="btn__arrow" aria-hidden="true"><i>→</i><i>→</i></span></button>
      <p className="mono future__sub"><span>14-day sandbox</span><span>No card required</span><span>SOC2&nbsp;Type&nbsp;II</span></p>
    </div>
  </section>
  {/* mask overlay for the typography-mask transition */}
  <svg className="tmask" id="tmask" aria-hidden="true">
    <defs><radialGradient id="tmaskG" cx="50%" cy="52%" r="62%"><stop offset={0} stopColor="#0b241b" /><stop offset=".55" stopColor="#07130f" /><stop offset={1} stopColor="#050807" /></radialGradient><mask id="tmaskM" maskUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="#fff" /><text id="tmaskText" x="50%" y="50%" textAnchor="middle" dominantBaseline="central">ONE</text></mask></defs>
    <rect width="100%" height="100%" fill="url(#tmaskG)" mask="url(#tmaskM)" />
    <text id="tmaskStroke" x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="none" stroke="rgba(154,255,211,.55)" strokeWidth="1.2" vectorEffect="non-scaling-stroke">ONE</text>
  </svg>
</main>
    </>
  );
}
