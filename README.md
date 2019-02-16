### demos

该项目为 `hooks` 的实战练习, 加强对 `hooks` 的熟悉程度。

### custom hooks

| 自定义 hook name | 作用 | 用到的 hooks |
|:---:|:---:|:---:|
| `useLocalStorage` | 运用 localStorage 的 demo | useState |
| `useHover` | 鼠标移动/离开界面会产生不同变化 | useState/useEffect/useRef |
| `useOnClickOutside` | 模拟在 modal/menu 外点击鼠标, modal/menu 框关闭 | useState/useEffect/useRef |
| `usePrevious` | 获取之前的 state 或者 props | useEffect |
| `useDebounce` | 函数防抖 | useState/useEffect/useRef |

### some notes

#### usePrevious

* 要有这个概念 `useEffect` 的执行在 `render` 之后。

#### useDebounce

* 在 hooks(useState, useEffect) 的基础上，函数防抖出现了新的思路, 可以对 input 输入框的值进行防抖;
* 通过这个 demo 可以理顺 `useEffect` 中的 (`componentWillUnmount`) 的执行时机;

### 相关资料

* [usehooks](https://usehooks.com/)