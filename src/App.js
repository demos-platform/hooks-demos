import React from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import useHover from './hooks/useHover'

function UseLocalStorageDemo() {
  const [itemValue, setItemValue] = useLocalStorage('pddkey', 'pddvalue')
  return <input value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
}

function UseHoverDemo() {
  const [hoverRef, isHover] = useHover()
  return <div ref={hoverRef}>
    { isHover ? 'true' : 'false' }
  </div>
}

function App() {
  return <>
    <div>UseLocalStorageDemo:</div>
    <UseLocalStorageDemo />
    <div>UseHoverDemo:</div>
    <UseHoverDemo />
  </>
}

export default App;
