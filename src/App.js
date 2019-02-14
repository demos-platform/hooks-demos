import React, { useState, useRef } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import useHover from './hooks/useHover'
import useOnClickOutside from './hooks/useOnClickOutside'

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

// 模拟在 modal/menu 外点击鼠标, modal/menu 框关闭。
function UseOnClickOutsideDemo() {
  const modalRef = useRef(null)
  const [modalState, setModalState] = useState(false)

  useOnClickOutside(modalRef, () => { setModalState(false) })
  return <>
    {
      modalState
        ? <div ref={modalRef}>I'm a modal</div>
        : <button onClick={() => setModalState(true)}>Show Modal</button>
    }
  </>
}

function App() {
  return <>
    <div>UseLocalStorageDemo:</div>
    <UseLocalStorageDemo />
    <div>UseHoverDemo:</div>
    <UseHoverDemo />
    <div>UseOnClickOutside: 模拟在 modal/menu 外点击鼠标, modal/menu 框关闭。</div>
    <UseOnClickOutsideDemo />
  </>
}

export default App;
