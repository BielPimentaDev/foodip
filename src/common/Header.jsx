import React, { useState } from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'

export default function Header() {
    const [menu, setMenu] = useState(false)

    const nav =
       [ 
        {page: 'inicio'},
       { page: 'Cardápio'},
        {page: 'Sobre'},
    ]
    

  return (
    <div className='flex justify-between w-full items-center py-4'>
        <h1 className='font-mont font-bold md:text-3xl text-2xl'>Food<span className='text-red'>JP</span></h1>
        <nav className='hidden md:block' >
            <ul className='font-medium flex  gap-16'>
                {nav.map(item=>{
                    return(
                        <li>{item.page}</li>
                    )
                })}
        <button className='border px-8 rounded-lg border-black '>Entrar</button>
            </ul>
        </nav>
        <HiOutlineMenuAlt3 className='md:hidden block' size={28} onClick={() =>setMenu(!menu)}/>
        {menu && 
        <div className='fixed top-16 left-0 bg-white-200 w-full'>
             <ul className='font-medium flex flex-col justify-center items-center  gap-24 p-8'>
                {nav.map(item=>{
                    return(
                        <li>{item.page}</li>
                    )
                })}
                </ul>
            </div>}
    </div>
  )
}
