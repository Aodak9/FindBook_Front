import React from 'react'

export default function Footer() {
    return (
        <div className='w-screen px-32 h-44 bg-greyBlack-300 grid grid-rows-3 justify-items-center items-center'>
            <div className='w-full grid grid-cols-3 gap-3 row-span-2'>
                <p>Terminos y Condiciones</p>
                <p>Quienes Comos</p>
                <p>Preguntas Frecuntes</p>
                <p>Como comprar</p>
                <p>Contacto</p>
            </div>
            <div className='row-span-1 grid grid-cols-3 w-full py-3'>
                <p className='col-span-2'>Politica cookies</p>
                <button className='col-span-1 rounded-full border-greyBlack-100 border-2 py-2 mx-10'>Boton de arrepentimientos</button>
            </div>
        </div>
    )
}
