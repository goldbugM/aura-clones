export default function ArchGrid() {
  return (
    <>
<div className="archgrid" id="archgrid" aria-hidden="true">
  <i style={{'--x': 0}} /><i style={{'--x': 1}} /><i style={{'--x': 2}} /><i style={{'--x': 3}} /><i style={{'--x': 4}} /><i style={{'--x': 5}} /><i style={{'--x': 6}} />
  <b className="archgrid__h" style={{'--y': 0}} /><b className="archgrid__h" style={{'--y': 1}} />
</div>
{/* Velocity marquee */}
    </>
  );
}
