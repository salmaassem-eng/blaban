import React from "react";
import mapImg from "../assets/map.png";

export default function BranchesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#0D9DD3] mb-8"
          dir="rtl"
        >
          فروعنا
        </h2>

      </div>

      {/* full width map */}
      <div className="relative w-full overflow-hidden">
        {/* full-bleed image: use w-screen and translate to align with viewport edges */}
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
          <img
            src={mapImg}
            alt="branches map"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
