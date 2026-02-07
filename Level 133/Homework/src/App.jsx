import React from 'react'
import Counter from './components/counter'
import Toggle from './components/toggle'
import Livetext from './components/Livetext.jsx'
import Listadder from './components/Listadder.jsx'


const App = () => {
  return(
    <>
      <Counter/>
      <Toggle/>
      <Livetext/>  
      <Listadder/>
    </>
    
  )
}

export default App