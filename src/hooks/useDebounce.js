import { useState, useEffect } from 'react'

// 在 hooks(useState, useEffect) 的基础上，函数防抖出现了新的思路, 可以对 input 输入框的值进行防抖
function useDebounce(value, time) {
  const [debounceValue, setDebounceValue] = useState('')

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value)
    }, time);
    return () => {
      clearTimeout(handle)
    }
  }, [value, time])

  return debounceValue
}

export default useDebounce