import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

function HireMe() {
  return (
    <div className="fixed right-4 bottom-4">
      <Link
        href="mailto:abcd@gmail.com"
        className="flex items-center bg-dark text-light p-2.5 px-6 hover:scale-105 
           text-lg font-semibold hover:bg-light hover:text-dark
          border-2 border-solid border-transparent hover:border-dark
          aspect-square rounded-full
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
          hover:dark:border-light md:p-2 md:px-4 md:text-base
          transition duration-200 ease-in-out
          "
      >
        Hire Me
      </Link>
    </div>
  )
}

export default HireMe
