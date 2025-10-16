import React from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import ProductsBtns from "../components/ProductsBtns";
import backgroundImage from "../assets/bgBanner.png";

export default function Home() {
  return (
    <main className="relative overflow-y-visible">
      <section className="bg-[#16BFEF] text-white mb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12 lg:py-15">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              dir="rtl"
            >
              مش مجرد لقمة..
            </h1>
            <p
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold mr-10 md:mr-40 lg:mr-80"
              dir="rtl"
            >
              ده مود جديد!
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => (window.location.href = "#order")}
                className="bg-white text-[#0D9DD3] hover:bg-blue-50 transition-all duration-300 px-10 py-1.5 rounded-[15px] font-bold text-2xl shadow"
              >
                اطلب الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* product banner image placed in the flow and pulled up to overlap the hero (full-bleed) */}
      <div
        className="w-full pointer-events-none -mt-28 md:-mt-40 lg:-mt-55 overflow-y-visible relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative w-full">
          <img
            src={banner}
            alt="products"
            className="w-full block h-56 md:h-96 lg:h-[520px] pt-8 md:pt-18 lg:pt-28 "
          />

          {/* logo overlay - top-right */}
          <div className="pointer-events-auto absolute right-10 top-8 md:right-50 md:top-22 lg:right-90 lg:top-35">
            <div className="bg-white rounded-full p-0 drop-shadow-lg">
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* products placeholder - carousel is rendered via App */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h2
            className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#046EAB] "
            dir="rtl"
          >
            اللي كل الناس بتحكي عنه...
          </h2>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5" id="order">
          <ProductsBtns />
        </div>
      </section>
    </main>
  );
}
