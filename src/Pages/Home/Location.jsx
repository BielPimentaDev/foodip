import React from 'react'
import map from '../../assets/map.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
export default function Location() {
  return (
    <div className='my-8'>
        <h2 className='font-mont font-semibold text-3xl mt-16 mb-8 '>Localização</h2>
        <img src={map} className=""/>

        <div className='flex relative my-16 mx-auto md:w-[60%]'>
            <HiOutlineLocationMarker className='absolute left-4 top-2' size={24} color="red"/>
            <input type="text" placeholder='Localização para entrega' className= ' rounded-lg border bg-white-100 border-gray w-[600px] h-[45px] placeholder:pl-14 placeholder:font-mont placeholder:text-xs placeholder:sm:text-base placeholder:text-gray'/>
            <button className='bg-red text-white-100 py-1  px-2 h-full lg:w-[120px] w-[40px] rounded-r-lg absolute right-0'>
              <span className='hidden lg:block'>Buscar</span>
              <BsSearch className='lg:hidden block mx-auto' color='#FBFBFB' size={20}/>
            </button>
        </div>
        </div>
  )
}
