import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function ProductsCarousel({ items = [] }){
  const ref = useRef(null)

  const scroll = (direction) => {
    if(!ref.current) return
    const el = ref.current
    const offset = direction === 'next' ? el.clientWidth : -el.clientWidth
    el.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <div className="relative ">
      {/* mobile controls above carousel */}
      <div className="flex justify-center gap-1 mb-5 md:hidden">
        <button onClick={() => scroll('prev')} className="bg-white p-2 rounded-full shadow-sm">
          <ChevronLeftIcon className="text-sky-600" />
        </button>
        <button onClick={() => scroll('next')} className="bg-white p-2 rounded-full shadow-sm">
          <ChevronRightIcon className="text-sky-600" />
        </button>
      </div>

      {/* desktop overlay controls (centered vertically) */}
      <button
        onClick={() => scroll('prev')}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="previous"
      >
        <ChevronLeftIcon className="text-sky-600" />
      </button>

      <button
        onClick={() => scroll('next')}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="next"
      >
        <ChevronRightIcon className="text-sky-600" />
      </button>

      <div ref={ref} className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 px-4 py-8 md:px-0">
        {items.map(item => (
          <div key={item.id} className="snap-center flex-shrink-0 w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductCard image={item.image} title={item.title} price={item.price} onAdd={item.onAdd} />
          </div>
        ))}
      </div>
    </div>
  )
}
