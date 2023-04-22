import React from 'react'
import AnimatedText from '../components/AnimatedText'
import HireMe from '../components/HireMe'
import { LinkArrow } from '../components/Icons'
import Layout from '../components/Layout'
import TransitionEffect from '../components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const profilePic = '/images/profile/developer-pic-3.png'

  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta
          name="description"
          content="Explore Igor Bayerl's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full relative">
              <Image
                width={580}
                height={580}
                src={profilePic}
                alt="Igor Bayerl"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
              {/* <AnimatedText
                text="Igor Bayerl"
                className="!text-6xl  
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl   absolute bottom-10 right-0
                "
              /> */}
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Igor Bayerl"
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl 
                "
              />
              <div className="h-1 my-3 w-full bg-gray-700 dark:bg-gray-300" />
              <AnimatedText
                text="Turning Vision Into Reality With Code."
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl 
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/projects"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  transition duration-200 ease-in-out
                  whitespace-nowrap
                  "
                >
                  Look at my work!
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  )
}
