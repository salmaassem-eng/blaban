import React from 'react'
import banner from '../assets/banner.png'
import logo from '../assets/logo.png'
import ProductsBtns from '../components/ProductsBtns'

export default function Home(){
  return (
    <main className="relative overflow-y-visible">
      <section className="bg-[#16BFEF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight" dir='rtl'>مش مجرد لقمة..</h1>
            <p className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold mr-10 md:mr-40 lg:mr-80" dir='rtl'>ده مود جديد!</p>

            <div className="mt-8 flex justify-center">
              <button onClick={() => window.location.href="#order"} className="bg-white text-[#0D9DD3] px-10 py-1.5 rounded-[15px] font-bold text-2xl shadow">اطلب الآن</button>
            </div>
          </div>
        </div>
      </section>

      {/* product banner image placed in the flow and pulled up to overlap the hero (full-bleed) */}
      <div className="w-full pointer-events-none -mt-12 md:-mt-20 lg:-mt-28 overflow-y-visible">
        <div className="relative w-full">
          <img src={banner} alt="products" className="w-full block h-56 md:h-96 lg:h-[420px] object-cover" />

          {/* logo overlay - top-right */}
          <div className="pointer-events-auto absolute right-4 top-4 md:right-50 md:top-8 lg:right-90 lg:top-10">
            <div className="bg-white rounded-full p-0 drop-shadow-lg">
              <img src={logo} alt="Logo" className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* products placeholder - carousel is rendered via App */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0D9DD3] " dir="rtl">اللي كل الناس بتحكي عنه...</h2>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10" id="order">
            <ProductsBtns />
        </div>
      </section>

    </main>
  )
}

