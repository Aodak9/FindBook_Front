import React from 'react'
import { useSelector } from 'react-redux'
import ContainCards from '../Card/ContainCards'
import ImgReleased from '../../../assets/released.jpg'
export default function SearchByReleased() {
    let state = useSelector(s => s.root.allBooksByRealiced) 
    console.log(state)
  return (
        <div className='w-full h-full bg-greyBlack-100'>
            <div className='relative h-full'>
                <span className='absolute grid w-full text-5xl place-content-center top-10'>{state[0].released}</span>
                <img className='w-full h-36' src={ImgReleased} alt='Not found' />
            </div>
            <div className='grid grid-cols-4 justify-items-center'>
                <div className='w-full col-span-1 p-10'>
                    {state?.length} Resultados
                </div>
                <div className='w-full col-span-3'>
                    <div className='w-full h-auto'>
                        <ContainCards data={state} />
                    </div>
                </div>
            </div>
        </div>
  )
}
