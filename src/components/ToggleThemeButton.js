import React, { useRef, useEffect, useState } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { SunIcon, MoonIcon } from './Icons'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useRouter } from 'next/router'

export default function ToggleThemeButton() {
  const [mode, setMode] = useThemeSwitcher()
  const [isAnimating, setIsAnimating] = useState(false)
  const { asPath } = useRouter()
  const iframeRef = useRef(null)
  const maskRef = useRef(null)
  const parentMaskRef = useRef(null)
  const buttonRef = useRef(null)

  const syncIframeScroll = () => {
    const parentScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (iframeRef.current) {
      iframeRef.current.contentWindow.scrollTo(0, parentScrollTop)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', syncIframeScroll)
    addIframe()
    return () => {
      window.removeEventListener('scroll', syncIframeScroll)
    }
  }, [])

  useEffect(() => {
    const updateIframeSrc = () => {
      if (iframeRef.current) {
        iframeRef.current.src = asPath
      }
    }

    const timeout = setTimeout(updateIframeSrc, 2400)

    return () => {
      clearTimeout(timeout)
    }
  }, [asPath])

  function addIframe() {
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

    iframeRef.current = iframe

    // Append iFrame to mask
    maskRef.current.appendChild(iframeRef.current)
  }

  // Function to trigger the expanding liquid effect from a reference point
  function handleThemeSwitch() {
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
      maskRef.current.style.clipPath = start_clip
      parentMaskRef.current.style.top = '0px'
      parentMaskRef.current.style.left = '0px'
      parentMaskRef.current.style.display = 'none'

      // Remove the iframe element when the animation is finished
      if (maskRef.current && maskRef.current.contains(iframeRef.current)) {
        maskRef.current.removeChild(iframeRef.current)
      }
      addIframe()
    }, animationDuration)
  }

  function handleClickButton() {
    handleThemeSwitch()
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
        className={`fixed right-10 top-10 ml-3 flex items-center justify-center rounded-full  p-3 ${
          mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
        } rotate-animation `}
      >
        {mode === 'light' ? <FiSun size={26} /> : <FiMoon size={26} />}
      </button>
    </>
  )
}
