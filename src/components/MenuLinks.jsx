import React from 'react'

const LINKS = [
  { id: 'home', label: 'الرئيسية', href: '#home' },
  { id: 'menu', label: 'قائمتنا', href: '#menu' },
  { id: 'branches', label: 'فروعنا', href: '#branches' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact' },
]

export default function MenuLinks({ active, setActive, isMobile = false, className = '', closeMobile }){
  return (
    <ul className={className}>
      {LINKS.map(link => {
        const isActive = active === link.id
        const itemClass = isMobile
          ? `cursor-pointer py-2 ${isActive ? 'font-bold opacity-100' : 'opacity-90'}`
          : `cursor-pointer transition-transform duration-200 ease-in-out ${isActive ? 'scale-125 opacity-100 font-bold' : 'opacity-80 hover:scale-105 hover:opacity-100'}`

        return (
          <li
            key={link.id}
            onClick={() => { setActive(link.id); if (closeMobile) closeMobile() }}
            className={itemClass}
            aria-current={isActive ? 'page' : undefined}
          >
            <a href={link.href} className={isMobile ? 'no-underline text-white' : ''}>{link.label}</a>
          </li>
        )
      })}
    </ul>
  )
}
