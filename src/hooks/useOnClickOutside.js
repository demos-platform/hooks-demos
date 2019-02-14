import { useEffect } from 'react'

function UseOnClickOutside(ref, fn) {
  useEffect(() => {
    const mousedown = (e) => {
      // 如果不存在当前元素或者在 Modal 中触发点击事件
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }
      fn()
    }
    document.addEventListener('mousedown', mousedown)
    return () => {
      document.removeEventListener('mousedown', mousedown)
    }
  }, [])
}

export default UseOnClickOutside