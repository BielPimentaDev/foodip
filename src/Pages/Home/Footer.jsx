import React from 'react'

export default function Footer() {
    const footerInfos =[
        {
            name : 'Contatos',
            infos: ['+55 21 9999-9999', 'email.com']
        },
        {
            name : 'Serviços',
            infos: ['Entrega', 'Retirada']
        },
        {
            name : 'Sobre nós',
            infos: ['Menu', 'Valores', 'Página inicial']
        },
    ]
  return (
    <div className='my-8' >
        <h1 className='font-mont font-bold md:text-3xl text-2xl my-8'>Food<span className='text-red'>JP</span></h1>
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-8'>
            {footerInfos.map(({name, infos})=>{
                return(
            <ul>
                <h5 className='text-xl mb-8 font-mont font-semibold'>{name} </h5>
                {
                    infos.map(info=>{
                        return(

                            <li className='text-gray '>{info}</li>
                        )
                    })
                }
               
            </ul>

                )
            })}
          
        </div>
          <p className='text-center py-30 mx-auto w-[300px] h-[100px]'> &copy; Criado por Gabriel Pimenta</p>
    </div>
  )
}
