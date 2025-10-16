import React from "react";
import AdImage from "../assets/Ad.png";

const AdBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#0D9DD3] via-[#16BFEF] to-[#f3f5f5] overflow-hidden mb-10">

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Left image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={AdImage}
            alt="banner"
            className="w-[90%] md:w-[80%] max-w-md object-contain drop-shadow-lg"
          />
        </div>

        {/* Right text */}
        <div className="md:w-1/2 text-center md:text-right text-white space-y-5">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug " dir="rtl">
            جرب الطعم اللي كل الناس بتحكي عنه.
          </h2>
          <p className="text-lg md:text-3xl leading-relaxed font-bold opacity-80" dir="rtl">
            حلوياتنا صارت ترند... <br /> بس الطعم؟ تريند طول العمر.
          </p>

          <button className="mt-10 bg-white text-[#0D9DD3] font-bold py-2 px-8 rounded-lg text-2xl hover:bg-blue-50 transition-all duration-300">
            اطلب الآن
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdBanner;
