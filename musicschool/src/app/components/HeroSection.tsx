import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
function Herosection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-3 md:py-0 text-white z-20'>

      <div className='p-4 relative z-10 w-full justify-center items-center'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
           <h1 className='"mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center'>Master the art of Music</h1>
           <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center'>Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential</p>
           <div className="mt-4 flex justify-center items-center w-full">
           <Link href={"/pages"} className='mt-10 flex justify-center items-center w-full'>
           <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-white-900 text-black dark:text-black border-neutral-400 dark:border-slate-800 font-extrabold"
      >
        Explore Courses
      </Button>
           </Link>
           </div>
      </div>
    </div>
  )
}

export default Herosection
