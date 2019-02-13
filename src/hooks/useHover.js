import { useState, useEffect, useRef } from 'react'

function useHover() {
  const el = useRef(null)

  const [isHover, setHover] = useState(false)

  const enterFn = () => { setHover(true) }
  const outFn = () => { setHover(false) }

  useEffect(() => {
    el.current.addEventListener('mouseenter', enterFn)
    el.current.addEventListener('mouseout', outFn)
    return () => {
      el.current.removeEventListener('mouseenter', enterFn)
      el.current.removeEventListener('mouseout', outFn)
    }
  }, [el.current])

  return [el, isHover]
}

export default useHover