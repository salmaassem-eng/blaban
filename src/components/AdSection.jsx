import React from "react";
import AdImage from "../assets/Ad.png";
import MilkBg from "../assets/bgAd.png"; // your uploaded milk image

const AdBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#0D9DD3] via-[#16BFEF] to-[#f3f5f5] overflow-hidden mb-10">

      {/* Milk splash left behind man */}
      <img
        src={MilkBg}
        alt="milk splash left"
        className="absolute -left-35 -top-40 lg:-top-65 w-[60%] rotate-[125deg] max-w-[900px] opacity-80 z-0 object-contain pointer-events-none hidden md:block"
        style={{ transform: "rotate(0deg)" }}
      />

      {/* Milk splash top right */}
      <img
        src={MilkBg}
        alt="milk splash right"
        className="absolute -right-20 -top-130 w-[50%] max-w-[800px] opacity-80 z-0 object-contain pointer-events-none hidden md:block"
        style={{ transform: "scaleX(-1) rotate(-70deg)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Left image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
          <img
            src={AdImage}
            alt="banner"
            className="w-[90%] md:w-[80%] max-w-lg lg:max-w-xl left-0 lg:-left-30 object-contain drop-shadow-lg relative z-10"
          />
        </div>

        {/* Right text */}
        <div className="md:w-1/2 text-center md:text-right text-white space-y-5" dir="rtl">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            جرب الطعم اللي كل الناس بتحكي عنه.
          </h2>
          <p className="text-lg md:text-3xl leading-relaxed font-bold opacity-80">
            حلوياتنا صارت ترند... <br /> بس الطعم؟ تريند طول العمر.
          </p>

          <button                 onClick={() => (window.location.href = "#order")}
 className="mt-10 bg-white text-[#0D9DD3] font-bold py-2 px-8 rounded-lg text-2xl hover:bg-blue-50 transition-all duration-300">
            اطلب الآن
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdBanner;
