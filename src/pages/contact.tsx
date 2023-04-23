import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Head from 'next/head'
import React from 'react'

import TransitionEffect from '../components/TransitionEffect'

export default function contact(): JSX.Element {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Browse through Igor Bayerl's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Get in touch!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16"></ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Contact options
          </h2>
        </Layout>
      </main>
    </>
  )
}
