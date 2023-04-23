import { useEffect, useState } from 'react'

export default function useIsIframe(): boolean {
  const [isIframe, setIsIframe] = useState(false)

  useEffect(() => {
    setIsIframe(window.self !== window.top)
  }, [])

  return isIframe
}
