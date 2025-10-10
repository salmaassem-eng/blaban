import React, { useState } from 'react'
import logo from '../assets/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import MenuLinks from './MenuLinks'

export default function Navbar(){
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className=" inset-x-0 top-0 z-50 bg-[#16BFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[88px] flex items-center justify-between" dir="rtl">

            {/* logo */}
            <div className="flex items-center">
              <div className="bg-white rounded-full p-0.5 flex items-center justify-center">
                <img src={logo} alt="B.Laban Logo" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full object-cover" />
              </div>
            </div>

            {/* desktop links */}
            <div className="hidden md:block">
              <MenuLinks active={active} setActive={setActive} className="flex gap-8 text-white text-[20px] font-medium" />
            </div>

            {/* icons / hamburger */}
            <div className="flex items-center gap-3">
              <ShoppingCartOutlinedIcon className="text-[24px] text-white cursor-pointer" />

              <button className="hidden sm:inline-block bg-white text-sky-500 font-semibold px-4 py-1.5 rounded-full hover:bg-sky-50 transition">
                تسجيل دخول
              </button>

              <button onClick={() => setMobileOpen(v => !v)} aria-label="فتح القائمة" aria-expanded={mobileOpen} className="md:hidden text-white p-2 rounded hover:bg-white/10">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu rendered in-flow so it pushes content */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-[#16BFEF]" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <MenuLinks active={active} setActive={setActive} isMobile={true} className="flex flex-col gap-2 text-white text-[18px]" closeMobile={() => setMobileOpen(false)} />
            <div className="pt-2">
              <button className="w-full bg-white text-[#0D9DD3] font-bold py-2 rounded">تسجيل دخول</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
