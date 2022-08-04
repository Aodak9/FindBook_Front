import React from 'react'
import SearchNavBar from '../../smartComponents/SearchNavBar/SearchNavBar'
import Logo from '../../../assets/FindBookLogo.png'
import Filters from '../../smartComponents/Filters/Filters'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <div className='w-screen h-20 bg-cream-100'>
      <div className={'grid grid-cols-5 h-full items-center justify-items-center'}>
        <Link to={'/'}>
          <img src={Logo} alt='Not found' className={'h-16 col-start-1 col-end-2'}/>
        </Link>
        <div className='col-start-2 col-end-4'>
          <SearchNavBar/>
        </div>
        <div className='grid grid-cols-3 col-start-4 col-end-6'>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>   
                <Link to={'/loggin'}>
                  <h1 className='duration-700 border-b-2 border-cream-100 hover:border-cream-300'>Ingresar</h1>
                </Link>         
              </div>
              <div className='flex col-start-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"  stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <Link to={'/shop'}>
                  <h1 className='duration-700 border-b-2 border-cream-100 hover:border-cream-300'>Comprar</h1>
                </Link>
          </div>
        </div>
      </div>
    </div>
      <div className='h-14 bg-cream-200'>
        <Filters/>
      </div>
    </>
  )
}
