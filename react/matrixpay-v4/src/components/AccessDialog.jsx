export default function AccessDialog() {
  return (
    <>
<dialog className="access" id="access" aria-labelledby="accessTitle">
  <form method="dialog" className="access__form" id="accessForm">
    <button className="access__x" value="cancel" aria-label="Close">×</button>
    <p className="mono access__k">Early access</p>
    <h3 id="accessTitle">Start moving <em className="serif">forward.</em></h3>
    <label><span className="mono">Full name</span><input name="name" autoComplete="name" required /></label>
    <label><span className="mono">Work email</span><input name="email" type="email" autoComplete="email" required /></label>
    <label><span className="mono">Monthly volume</span><select name="vol"><option>Under $1M</option><option>$1M – $25M</option><option>$25M – $250M</option><option>$250M+</option></select></label>
    <button className="btn btn--primary" type="submit" value="ok" id="accessSubmit"><span>Request sandbox</span><span className="btn__arrow" aria-hidden="true"><i>→</i><i>→</i></span></button>
    <p className="access__done" id="accessDone" hidden>You're on the list. This is a concept experience — nothing was sent.</p>
  </form>
</dialog>
    </>
  );
}
