export default function Menu() {
  return (
    <>
<div className="menu" id="menu" aria-hidden="true" inert>
  <div className="menu__bg" />
  <div className="menu__inner">
    <p className="menu__eyebrow mono">Index</p>
    <ol className="menu__list">
      <li><a href="#c-ops" data-goto="ops"><span className="menu__n mono">01</span><span className="lottie menu__ic" data-icon="ai" /><span className="menu__t">Systems</span><span className="menu__d">Operating layer</span></a></li>
      <li><a href="#c-treasury" data-goto="treasury"><span className="menu__n mono">02</span><span className="lottie menu__ic" data-icon="lai-treasury" /><span className="menu__t">Treasury</span><span className="menu__d">Capital in motion</span></a></li>
      <li><a href="#c-transfer" data-goto="transfer"><span className="menu__n mono">03</span><span className="lottie menu__ic" data-icon="lai-transfers" /><span className="menu__t">Transfers</span><span className="menu__d">Global routing</span></a></li>
      <li><a href="#c-intel" data-goto="intel"><span className="menu__n mono">04</span><span className="lottie menu__ic" data-icon="lai-intelligence" /><span className="menu__t">Intelligence</span><span className="menu__d">Spend analytics</span></a></li>
      <li><a href="#c-vault" data-goto="vault"><span className="menu__n mono">05</span><span className="lottie menu__ic" data-icon="lai-security" /><span className="menu__t">Security</span><span className="menu__d">Sentinel Vault</span></a></li>
      <li><a href="#c-liquidity" data-goto="liquidity"><span className="menu__n mono">06</span><span className="lottie menu__ic" data-icon="lai-exchange" /><span className="menu__t">Liquidity</span><span className="menu__d">Every market</span></a></li>
    </ol>
    <div className="menu__foot mono"><span>SOC2 Type II · ISO 27001 · PCI-DSS</span><button className="menu__access" data-open-access>Open account →</button></div>
  </div>
</div>
{/* The gate: a wireframe of the atrium, the particles folded into one dotted cube; hold to enter */}
    </>
  );
}
