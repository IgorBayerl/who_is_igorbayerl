import React, { useRef, useEffect, useState, useCallback } from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useRouter } from 'next/router'
import useIsIframe from './hooks/useIsIframe'

export default function ToggleThemeButton(): JSX.Element {
  function isMobileBrowser() {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    )
  }

  const isIframe = useIsIframe()

  const [mode, setMode] = useThemeSwitcher()
  const [isAnimating, setIsAnimating] = useState(false)
  const [isIframeLoaded, setIFrameLoaded] = useState(false)
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
    if (!isMobileBrowser() && !isIframe) {
      resetMask()
    }
  }, [])

  function refreshIframe() {
    if (!iframeRef.current) return
    console.log('refreshIframe()')
    iframeRef.current.src = iframeRef.current.src
  }

  const getThemeButtonCenterPosition = useCallback((): [number, number] => {
    if (!buttonRef.current) {
      return [0, 0]
    }
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    return [left + width / 2, top + height / 2]
  }, [buttonRef.current?.getBoundingClientRect])

  function getCircleMaskSize(): number {
    return window.innerHeight > window.innerWidth
      ? window.innerHeight * 1.5
      : window.innerWidth * 1.5
  }

  function resetMask() {
    if (!maskRef.current || !parentMaskRef.current) {
      return
    }
    const [x, y] = getThemeButtonCenterPosition()
    const circleSize = getCircleMaskSize()
    const start_clip = `circle(${circleSize}px at ${x}px ${y}px)`
    maskRef.current!.style.clipPath = start_clip
    parentMaskRef.current.style.display = 'none'
  }

  const iframeCurrent = iframeRef.current

  useEffect(() => {
    iframeCurrent?.addEventListener('load', () => setIFrameLoaded(true))
    return () => {
      iframeCurrent?.removeEventListener('load', () => setIFrameLoaded(true))
    }
  }, [iframeCurrent])

  function canChangeTheme(): boolean {
    return !isIframe || isIframeLoaded || isAnimating
  }

  function handleThemeSwitch() {
    if (
      !parentMaskRef.current ||
      !maskRef.current ||
      !buttonRef.current ||
      !iframeRef.current
    ) {
      return
    }
    setIsAnimating(true)

    const animationDuration = 500

    parentMaskRef.current.style.display = 'block'
    syncIframeScroll()

    const [x, y] = getThemeButtonCenterPosition()
    const end_clip = `circle(0px at ${x}px ${y}px)`

    maskRef.current.style.clipPath = end_clip

    // Wait for the animation to complete and clean up the iframe

    setTimeout(() => {
      if (!parentMaskRef.current || !maskRef.current) return
      resetMask()
      refreshIframe()
      setIsAnimating(false)
    }, animationDuration)
  }

  function handleClickButton() {
    if (!canChangeTheme()) return
    if (!isMobileBrowser() && !isIframe) {
      handleThemeSwitch()
    }
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div
        ref={parentMaskRef}
        className="fixed h-full w-full top-0 left-0 z-50 pointer-events-none hidden overflow-hidden "
      >
        <div ref={maskRef} className="mask-inner">
          <iframe
            ref={iframeRef}
            src={asPath}
            scrolling="no"
            className="w-full h-full fixed top-0 left-0 z-50 pointer-events-none overflow-hidden "
          />
        </div>
      </div>
      <button
        ref={buttonRef}
        disabled={isAnimating}
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
