import React, { useState, useRef, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import useHover from './hooks/useHover'
import useOnClickOutside from './hooks/useOnClickOutside'
import usePrevious from './hooks/usePrevious'
import useDebounce from './hooks/useDebounce'

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

function UsePreviousDemo() {
  const [value, setValue] = useState(0)
  const usePreviousValue = usePrevious(value)
  return <div>
    <span>previousValue: {usePreviousValue}; value: {value}</span>
    <button onClick={() => {setValue(previousValue => previousValue + 1)}}>add 1</button>
  </div>
}

// 在 hooks(useState, useEffect) 的基础上，函数防抖出现了新的思路, 可以对 input 输入框的值进行防抖
function UseDebounceDemo() {
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value, 3000)
  useEffect(() => {
    console.log('3 秒内我只会出现一次')
  }, [debounceValue])
  return <>
    <input
      onChange={e => setValue(e.target.value)}
    />
  </>
}

function App() {
  return <>
    <div>UseLocalStorageDemo: 运用 localStorage 的 demo</div>
    <UseLocalStorageDemo />
    <br />
    <br />

    <div>UseHoverDemo: 模拟鼠标移动/离开指定 dom 上发生的行为</div>
    <UseHoverDemo />
    <br />
    <br />

    <div>UseOnClickOutsideDemo: 模拟在 modal/menu 外点击鼠标, modal/menu 框关闭。</div>
    <UseOnClickOutsideDemo />
    <br />
    <br />

    <div>UsePrevious: 获取之前的 state 或者 props</div>
    <UsePreviousDemo />
    <br />
    <br />

    <div>UseDebounce: 函数防抖</div>
    <UseDebounceDemo />
    <br />
    <br />
  </>
}

export default App;
