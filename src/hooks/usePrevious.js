import { useEffect } from 'react'

let tmp
function usePrevious(value) {

  useEffect(() => {
    tmp = value
  })

  return tmp
}

export default usePrevious