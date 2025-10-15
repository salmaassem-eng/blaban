import React, { useState } from 'react'
import logo from '../assets/logo.png'
import whatsappIcon from '../assets/whatsapp.png'
import tiktokIcon from '../assets/telegram.png'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import xIcon from '../assets/twitter.png'
import MenuLinks from './MenuLinks'

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
    <span className="text-xs">{children}</span>
  </div>
)

export default function Footer(){
  const [active, setActive] = useState('home')

  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Top nav (RTL) - use MenuLinks so active links scale like Navbar */}
        <div className="flex justify-center gap-6 text-[#16BFEF] opacity-80 font-semibold" dir="rtl">
          <MenuLinks active={active} setActive={setActive} className="flex gap-6 no-underline text-[#046EAB]" />
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-60 h-auto" />
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <img src={whatsappIcon} alt="whatsapp" className="w-7 h-7 " />
          <img src={tiktokIcon} alt="tiktok" className="w-7 h-7 " />
          <img src={instagramIcon} alt="instagram" className="w-7 h-7 " />
          <img src={facebookIcon} alt="facebook" className="w-7 h-7 " />
          <img src={xIcon} alt="x" className="w-7 h-7 " />
        </div>

        <hr className="border-t border-gray-200 my-6" />

        <p className="text-sm text-gray-400">© 2025 B.laban | All Rights Salma Assem</p>
      </div>
    </footer>
  )
}
