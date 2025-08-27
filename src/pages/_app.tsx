import '../styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface IAppProps {
  Component: React.FC
  pageProps: any
}

export default function App({ Component, pageProps }: IAppProps) {
  const router = useRouter()
  console.warn = () => {}
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Import the Google Fonts directly */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-mont bg-light dark:bg-dark w-full min-h-screen">
        <Component key={router.asPath} {...pageProps} />
      </main>
    </>
  )
}
