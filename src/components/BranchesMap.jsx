import React from 'react';
import mapImg from '../assets/map.png'; // add your map image at this path

export default function BranchesMap() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* full-bleed image: use w-screen and translate to align with viewport edges */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
        <img src={mapImg} alt="branches map" className="w-full h-auto block" />
      </div>
    </div>
  );
}
