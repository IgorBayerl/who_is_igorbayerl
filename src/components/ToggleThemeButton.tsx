import React, { useRef, useEffect, useState } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { SunIcon, MoonIcon } from './Icons'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useRouter } from 'next/router'

export default function ToggleThemeButton(): JSX.Element {
  function isMobileBrowser() {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    )
  }

  const [mode, setMode] = useThemeSwitcher()
  const [isAnimating, setIsAnimating] = useState(false)
  const { asPath } = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const parentMaskRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const syncIframeScroll = () => {
    const parentScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    iframeRef?.current?.contentWindow?.scrollTo(0, parentScrollTop)
  }

  useEffect(() => {
    if (!isMobileBrowser()) {
      window.addEventListener('scroll', syncIframeScroll)
      addIframe()
      return () => {
        window.removeEventListener('scroll', syncIframeScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (!isMobileBrowser()) {
      const updateIframeSrc = () => {
        if (iframeRef.current) {
          iframeRef.current.src = asPath
        }
      }

      const timeout = setTimeout(updateIframeSrc, 2400)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [asPath])

  const addIframe = () => {
    if (!parentMaskRef.current || !maskRef.current || !buttonRef.current) {
      return
    }
    parentMaskRef.current.style.display = 'none'
    parentMaskRef.current.style.pointerEvents = 'none'
    const iframe = document.createElement('iframe')
    iframe.src = asPath
    iframe.style.zIndex = '50'
    iframe.style.pointerEvents = 'none'
    iframe.style.position = 'fixed'
    iframe.style.top = '0'
    iframe.style.left = '0'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.style.overflow = 'hidden'
    iframe.scrolling = 'no' // Set scrolling attribute to "no"

    // Append iFrame to mask
    maskRef.current.appendChild(iframe)

    // Assign iframe element to iframeRef using a callback ref
    iframeRef.current = iframe
  }

  // Function to trigger the expanding liquid effect from a reference point
  function handleThemeSwitch() {
    if (!parentMaskRef.current || !maskRef.current || !buttonRef.current) {
      return
    }

    const animationDuration = 500
    maskRef.current.style.transition = `clip-path ${animationDuration}ms ease-in-out`

    parentMaskRef.current.style.display = 'block'
    syncIframeScroll()

    parentMaskRef.current.style.top = '0px'
    parentMaskRef.current.style.left = '0px'
    // Get the position of the reference point
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()

    // Add scroll position to the top and left values
    const scrollTop = window.scrollY || window.pageYOffset
    const scrollLeft = window.scrollX || window.pageXOffset
    const topWithScroll = top + scrollTop
    const leftWithScroll = left + scrollLeft

    parentMaskRef.current.style.top = `${topWithScroll}px`
    parentMaskRef.current.style.left = `${leftWithScroll}px`

    const circleSize =
      window.innerHeight > window.innerWidth
        ? window.innerHeight * 1.5
        : window.innerWidth * 1.5

    // Set the position of clip path to the button's center
    const clipHeight = height / 2
    const clipWidth = width / 2

    const start_clip = `circle(${circleSize}px at ${clipWidth}px ${clipHeight}px)`
    const end_clip = `circle(0px at ${clipWidth}px ${clipHeight}px)`

    maskRef.current.style.clipPath = start_clip
    maskRef.current.style.clipPath = end_clip

    // Wait for the animation to complete and clean up the iframe
    setTimeout(() => {
      if (!parentMaskRef.current || !maskRef.current) {
        return
      }
      maskRef.current.style.clipPath = start_clip
      parentMaskRef.current.style.top = '0px'
      parentMaskRef.current.style.left = '0px'
      parentMaskRef.current.style.display = 'none'

      // Remove the iframe element when the animation is finished
      if (iframeRef.current) {
        maskRef.current.removeChild(iframeRef.current)
      }
      addIframe()
    }, animationDuration)
  }

  function handleClickButton() {
    if (!isMobileBrowser()) {
      handleThemeSwitch()
    }
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div
        ref={parentMaskRef}
        className="absolute top-0 left-0 z-50 pointer-events-none "
      >
        <div ref={maskRef} className="mask-inner"></div>
      </div>
      <button
        ref={buttonRef}
        onClick={handleClickButton}
        className={` ml-3 flex items-center justify-center rounded-full  p-3 ${
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
        } rotate-animation `}
      >
        {mode === 'light' ? <FiSun size={26} /> : <FiMoon size={26} />}
      </button>
    </>
  )
}
