import React from 'react'
import Fetch1 from './components/Fetch1'
import Fetch2 from './components/Fetch2'
import Fetch3 from './components/Fetch3'

const App = () => {
  return (
    <div>
      <h1>First store</h1>
      <Fetch1/> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>Second</h1>
      <Fetch2/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>Third</h1>
      <Fetch3/>
    </div>
    
  )
}

export default App