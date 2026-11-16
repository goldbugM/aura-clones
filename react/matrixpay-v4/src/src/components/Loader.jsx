export default function Loader() {
  return (
    <>
<div className="loader" id="loader" aria-hidden="true">
  <div className="loader__mark">
    {/*loader-mark*/}<span className="logo__m loader__m" aria-hidden="true"><svg className="logo__still" viewBox="90 110 320 280" aria-hidden="true"><defs><linearGradient id="mg0" gradientUnits="userSpaceOnUse" x1={80} y1={100} x2={420} y2={400}><stop offset={0} stopColor="#05b366" /><stop offset=".5" stopColor="#0acc94" /><stop offset={1} stopColor="#1fe0d6" /></linearGradient></defs><path fill="url(#mg0)" d="M90 138 154 110V390H90ZM166 110 250 224 334 110V220L250 334 166 220ZM346 110 410 138V390H346Z" /></svg><canvas /></span>{/*/loader-mark*/}
  </div>
  <div className="loader__row"><span className="loader__label">MatrixPay / Treasury OS</span><span className="loader__pct"><span id="loaderPct">000</span>%</span></div>
  <div className="loader__bar"><i id="loaderBar" /></div>
</div>
{/* WebGL stage */}
    </>
  );
}
