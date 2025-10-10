import React, { useState } from 'react'

export default function ProductsBtns({
  items = ['دبي','مامبو','كريب','كبسة','قشطوطه','بمبوظه','اللؤه','المزيد'],
  defaultActive = 0,
  onChange,
}){
  const [active, setActive] = useState(defaultActive)

  function handleClick(index){
    setActive(index)
    if(onChange) onChange(items[index], index)
  }

  return (
    <div className="w-full flex flex-wrap gap-3 justify-center" dir="rtl">
      {items.map((label, i) => {
        const isActive = i === active
        return (
          <button
            key={label + i}
            type="button"
            onClick={() => handleClick(i)}
            aria-pressed={isActive}
            className={
              `rounded-full px-7 py-1.5 text-sm font-medium transition-all duration-200 focus:outline-none ` +
              (isActive
                ? 'bg-sky-500 text-white shadow-md border-2 border-sky-500'
                : 'bg-white text-sky-600 border-2 border-sky-300 hover:scale-105 hover:shadow-sm')
            }
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}