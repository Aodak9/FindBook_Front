import React from 'react'
import Publicity from '../../dumbComponents/Publicity/Publicity';
import Card from '../Card/Card';

export default function Home() {
    return (
        <div className='w-full h-screen bg-greyBlack-100'>
            <Publicity/>
            <Card/>
        </div>
    )
}
