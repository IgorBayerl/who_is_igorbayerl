import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import TransitionEffect from '../components/TransitionEffect'

const FramerImage = motion(Image)

export default function contact(): JSX.Element {
  const article1 = '/images/articles/pagination_component_in_reactjs.jpg'
  const article2 = '/images/articles/create_loading_screen_in_react_js.jpg'
  const article3 =
    '/images/articles/form_validation_in_reactjs_using_custom_react_hook.png'
  const article4 = '/images/articles/smooth_scrolling_in_reactjs.png'
  const article5 =
    '/images/articles/create_modal_component_in_react_using_react_portals.png'
  const article6 =
    '/images/articles/todo_list_app_built_using_react_redux_and_framer_motion.png'
  const article7 = '/images/articles/What_is_Redux_with_easy_explanation.png'
  const article8 =
    '/images/articles/What_is_higher_order_component_in_React.jpg'

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
