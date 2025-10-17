import React from 'react'
import r1 from '../assets/review1.jpg'
import r2 from '../assets/review2.jpg'
import r3 from '../assets/review3.jpg'
import r4 from '../assets/review4.jpg'
import r5 from '../assets/review5.jpg'
import r6 from '../assets/review6.jpg'
import r7 from '../assets/review7.jpg'
import r8 from '../assets/review8.jpg'
import r9 from '../assets/review9.jpg'
import a1 from '../assets/review10.jpg'
import a2 from '../assets/review11.jpg'
import a3 from '../assets/review12.jpg'
import a4 from '../assets/review13.jpg'
import a5 from '../assets/review14.jpg'

export default function ReviewsGallery(){
  const images = [r1,r2,r3,r4,r5,r6,r7,r8,r9,a1,a2,a3,a4,a5,]

  return (
    <section className="relative py-12 w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#046EAB] mb-10" dir="rtl">مش إحنا اللي بنقول... الناس بتحكي</h3>
      </div>

      <div className="relative w-full overflow-hidden mt-8">
        <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
          <div className="relative h-[320px] md:h-[420px]">
          {/* layered collage */}
          <div className="absolute left-1 top-8 transform -rotate-8 shadow-lg">
            <img src={images[3]} alt="review" className="w-50 h-56 object-cover rounded" />
          </div>

          <div className="absolute left-[12%] top-0 transform rotate-3 shadow-2xl">
            <img src={images[1]} alt="review" className="w-64 h-70 object-cover rounded" />
          </div>

          <div className="absolute left-[28%] top-8 transform -rotate-7 shadow-xl">
            <img src={images[2]} alt="review" className="w-44 h-58 object-cover rounded" />
          </div>

          <div className="absolute left-[38%] top-15 transform rotate-0 shadow-2xl">
            <img src={images[0]} alt="review" className="w-90 h-60 object-cover rounded" />
          </div>
          <div className="absolute left-[60%] top-5 transform -rotate-5 shadow-lg">
            <img src={images[4]} alt="review" className="w-56 h-64 object-cover rounded" />
          </div>

          <div className="absolute left-[72%] top-36 transform rotate-4 shadow-lg">
            <img src={images[5]} alt="review" className="w-40 h-48 object-cover rounded" />
          </div>

          <div className="absolute left-[6%] top-54 transform rotate-8 shadow-xl">
            <img src={images[6]} alt="review" className="w-29 h-34 object-cover rounded" />
          </div>

          <div className="absolute left-[25%] top-60 transform -rotate-4 shadow-lg">
            <img src={images[7]} alt="review" className="w-28 h-30 object-cover rounded" />
          </div>

          <div className="absolute left-[58%] top-62 transform rotate-2 shadow-lg">
            <img src={images[8]} alt="review" className="w-20 h-24 object-cover rounded" />
          </div>

          <div className="absolute left-[78%] top-4 transform -rotate-8 shadow-lg">
            <img src={images[9]} alt="review" className="w-48 h-44 object-cover rounded" />
          </div>

          <div className="absolute left-[85%] top-36 transform rotate-6 shadow-lg">
            <img src={images[10]} alt="review" className="w-55 h-36 object-cover rounded" />
          </div>

          <div className="absolute left-[73%] top-[5%] transform -rotate-6 shadow-lg">
            <img src={images[11]} alt="review" className="w-20 h-24 object-cover rounded" />
          </div>

          <div className="absolute left-[37%] top-[41%] transform -rotate-10 shadow-lg">
            <img src={images[12]} alt="review" className="w-24 h-32 object-cover rounded" />
          </div>

          <div className="absolute left-[80%] top-[65%] transform rotate-8 shadow-lg">
            <img src={images[13]} alt="review" className="w-38 h-36 object-cover rounded" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
