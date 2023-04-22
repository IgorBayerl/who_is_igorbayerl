import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

function HireMe() {
  return (
    <div className="fixed right-4 bottom-4">
      <div className="dark:bg-white dark:text-black hover:scale-125 transition-all  bg-black text-white aspect-square flex justify-center p-4 rounded-full">
        <Link
          href="mailto:abcd@gmail.com"
          className="flex items-center justify-center font-bold animate-pulse "
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
