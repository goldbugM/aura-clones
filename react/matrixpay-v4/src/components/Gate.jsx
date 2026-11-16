export default function Gate() {
  return (
    <>
<div className="gate" id="gate" hidden>
  <div className="gate__ring" aria-hidden="true"><svg viewBox="0 0 160 160"><circle className="gate__trk" cx={80} cy={80} r={76} /><circle className="gate__fill" id="gateFill" cx={80} cy={80} r={76} pathLength={1} />
      <g className="gate__ticks"><path d="M80 0v8M80 152v8M0 80h8M152 80h8" /></g></svg></div>
  <button className="gate__t mono" id="gateBtn" type="button"><span>Hold to enter the Matrix</span></button>
  <p className="gate__s mono" aria-hidden="true">or scroll · hold space</p>
  <div className="gate__c gate__c--tl mono" aria-hidden="true"><span>MatrixPay</span><span>Atrium · Level 0</span></div>
  <div className="gate__c gate__c--br mono" aria-hidden="true"><span id="gateCoord">40.7128° N · 74.0060° W</span><span>Treasury systems · online</span></div>
</div>
{/* Geometric page transition */}
    </>
  );
}
