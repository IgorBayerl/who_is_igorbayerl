import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import TransitionEffect from '../components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef<HTMLImageElement>(null)

  function handleMouse(event) {
    if (!imgRef.current) return
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    if (!imgRef.current) return
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        width={500}
        height={300}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          width={500}
          height={300}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  )
}

export default function articles(): JSX.Element {
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
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
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
            text="Words Can Change The World!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="build a custom pagination component in reactjs from scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this 
              step-by-step guide to integrate Pagination component in your ReactJS project."
              link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
            />

            <FeaturedArticle
              img={article2}
              title="creating stunning loading screens in react: Build 3 types of loading screens"
              time="10 min read"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the 
              user experience."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
              img={article3}
              date="January 27, 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
            />
            <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              img={article4}
              date="January 30, 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
              img={article5}
              date="January 29, 2023"
              link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
              img={article6}
              date="January 28, 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
            />
            <Article
              title="redux simplified: a beginner's guide for web developers"
              img={article7}
              date="January 31, 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
            />
            <Article
              title="what is higher order component (hoc) in react?"
              date="January 4, 2023"
              img={article8}
              link="https://devdreaming.com/blogs/higher-order-component-hoc-react"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}
