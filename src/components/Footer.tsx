import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export default function Footer(): JSX.Element {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          <Link
            href="https://www.linkedin.com/in/igorbayerl/"
            className="underline
            underline-offset-2
            "
            target={'_blank'}
          >
            Igor Bayerl
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/igorbayerl/"
          target={'_blank'}
          className="underline
            underline-offset-2
            "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}
