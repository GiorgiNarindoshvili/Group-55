import React from 'react'
import Counterpro from './components/counterpro'
import Namelist from './components/safeList.jsx'
import Quizcontroller from './components/Quizcontroller.jsx'

const App = () => {
  return (
    <div>
      <Counterpro/><br />
      <Namelist/><br />
      <Quizcontroller   questions={"გიორგი"}/>
    </div>
    
  )
}

export default App