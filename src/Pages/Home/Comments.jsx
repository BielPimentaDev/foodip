import React from 'react'
import stars from '../../assets/estrelas.png'
import profile from '../../assets/img profile 1.png'
import profile2 from '../../assets/img profile 2.png'

export default function Comments() {
    const coments =[
        {
            name: 'Daniele Alemida',
            pic: profile,
            comment: 'Ótimo serviço! Encantada com a qualidade dos pratos.'

        },
        {
            name: 'Ricardo França',
            pic: profile2,
            comment: 'Não é apenas a comida excelente, o serviço torna a experiência especial.'
        },
    ]
  return (

    <div>
        <h2 className='font-mont font-semibold text-3xl mb-6'>Comantários</h2>
        <div className='flex justify-between gap-8 sm:flex-row flex-col items-center'>
            {
                coments.map(coment=>{
                    return(

            <div className='bg-white-200 p-8 rounded-md sm:w-[45%] lg:text-start text-center ' >
                <img src={coment.pic} alt="" className='lg:mx-0 mx-auto'/>
                <h4 className='font-mont font-semibold my-2 text-xl'>{coment.name}</h4>
                <p className='lg:w-[80%] text-gray mb-2 text-lg'>{coment.comment}</p>
                <img src={stars} alt="" className='lg:mx-0 mx-auto' />
            </div>
                    )
                })
            }
           
        </div>
    </div>
  )
}
