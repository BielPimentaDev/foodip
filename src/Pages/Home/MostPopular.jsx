import React from 'react'
import plate from '../../assets/plate1.png'
import plate2 from '../../assets/plate2.png'
import plate3 from '../../assets/plate3.png'

export default function MostPopular() {

    const plates = [
        {
            name: 'Ramen de Frango',
            img: plate
        },
        {
            name: 'Ramen Apimentado',
            img: plate2
        },
        {
            name: 'Ramen Tradicional',
            img: plate3
        },
    ]

  return (
    <div className='my-16' >
        <h2 className='font-mont font-semibold text-3xl text-center my-24 mt-16'>Mais populares</h2>
        <div className='flex md:justify-between md:flex-row flex-col justify-center items-center gap-28 md:gap-0' >
            {
                plates.map(plate=>{
                    return(
            <div className='bg-white-200 md:w-[28%] py-4 flex flex-col justify-center items-center  rounded-4xl relative pt-[100px]'>
                <img src={plate.img} alt="prato 1" className='w-[150px] h-[150px] absolute bottom-40  '/>
                <h3 className='font-mont font-medium mt-4 mb-2 text-2xl'>{plate.name}</h3>
                <p className='text-center text-gray text-sm w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <span className='mt-4 font-bold text-xl'>R$ 30</span>
            </div>
                    )
                })
            }
        </div>
    </div>
  )
}
