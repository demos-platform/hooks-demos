import React from 'react';
import useLocalStorage from './hooks/useLocalStorage'

function UseLocalStorageDemo() {
  const [itemValue, setItemValue] = useLocalStorage('pddkey', 'pddvalue')
  return <input value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
}

function App() {
  return <>
    <UseLocalStorageDemo />
  </>
}

export default App;
