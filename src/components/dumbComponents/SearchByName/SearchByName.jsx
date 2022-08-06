import React from 'react'
import { useSelector } from 'react-redux'
import ContainCards from '../Card/ContainCards'

export default function SearchByName() {
    let books = useSelector(s => s.root.allBooksByName)
    return (
        <div className='w-full h-full bg-greyBlack-100'>
            <div className='grid grid-cols-4 justify-items-center'>
                <div className='w-full col-span-1 p-10'>
                    <h1>{books?.length} Resultados</h1>
                </div>
                <div className='w-full col-span-3'>
                    <div className='w-full h-auto'>
                        <ContainCards data={books}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
