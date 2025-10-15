import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import dripImg from '../assets/svg.png'

export default function ProductCard({ image, title, price, onAdd }) {
  return (
    <div className="w-[85%] overflow-visible relative items-stretch  ">
      <article className="relative z-0 bg-white rounded-2xl overflow-visible hover:shadow-xl transition mb-6">
        <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full block h-48 md:h-56 rounded-2xl object-cover"
        />
        <button
          onClick={onAdd}
          className="absolute left-3 top-3 bg-white/90 text-[#0D9DD3] p-2 rounded-full shadow hover:scale-105 transition"
          aria-label={`Add ${title} to cart`}
        >
          <ShoppingCartOutlinedIcon className="text-[24px] text-black cursor-pointer" />
        </button>
      </div>

        <div className="p-4 pb-6">{/* reduced bottom padding, drip sits outside the card */}
        <h3
          className="text-lg font-semibold text-slate-800 text-right"
          dir="rtl"
        >
          {title}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#0D9DD3] font-bold text-lg">{price} ج.م</span>
          
        </div>
      </div>

      {/* drip image absolutely positioned over the card bottom */}
      <img
        src={dripImg}
        alt="drip"
        className="absolute left-0 right-0 bottom-0 translate-y-14 z-10 w-full h-14  object-cover pointer-events-none"
      />
      </article>

    </div>
  );
}
