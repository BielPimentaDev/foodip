import React from 'react'

import banner from '../../assets/banner.png'
import holdingPlate from '../../assets/holdingPlate.png'

export default function FirstSection() {
  return (
    <div className=''>

        <section className='flex items-center justify-between p-4 md:flex-row flex-col gap-4' >

            <div className='flex flex-col gap-8 justify-center md:w-[60%] mb-8'>
                <h2 className='font-mont  font-semibold text-4xl text-center md:text-start'>Comida Oriental</h2>
                <p className='md:w-[60%] text-lg'>A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.</p>

                <button className='bg-red text-white-100 md:w-[180px] w-full h-[40px] rounded-md font-semibold'>Cardápio</button>

            </div>
                <img src={banner} className="w-[400px]  md:block hidden" alt="food banner" />
        </section>

        <section className='flex justify-between md:flex-row flex-col items-center '>
    
    
                <img src={holdingPlate} alt=""  className="w-[500px] h-[400px]"/>
    
            <div className=' flex flex-col gap-8 md:w-[45%] p-8'>
                <h2 className='font-mont  font-semibold  text-4xl md:text-start text-center'>Feita de forma <br className='hidden'/> Tradicional</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a className='text-red underline md:text-start text-center' href="#">Ler mais sobre o modo de preparo </a>
            </div>
</section>
    </div>
  )
}
