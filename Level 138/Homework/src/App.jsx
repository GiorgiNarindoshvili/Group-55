import React from 'react'

import Cleanup1 from './components/cleanup1'
import Cleanup2 from './components/Cleanup2'
import Cleanup3 from './components/Cleanup3'
import Dependency1 from './components/Dependency1'
import Dependency2 from './components/Dependency2'

const App = () => {
  return (
    <div>
        <Cleanup1/>
        {/* <Cleanup2/> */}
        <Cleanup3/>
        <Dependency1/>
        <Dependency2/>
    </div>
    
  )
}

export default App