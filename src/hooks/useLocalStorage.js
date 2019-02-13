// 练习 useState 的使用, 调用 localStorage
import { useState } from 'react';

function useLocalStorage(key, value) {
  const [storageValue, setStorageValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    return localValue ? storageValue : value
  })

  function setLocalStorage(e) {
    localStorage.setItem(key, e)
    setStorageValue(e)
  }

  return [storageValue, setLocalStorage]
}

export default useLocalStorage