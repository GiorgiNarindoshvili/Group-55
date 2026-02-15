import React from 'react'
import { useState } from 'react'

const Quizcontroller = ({questions}) => {
    const[currentIndex, setCurrent] = useState(0)

    const total = questions.length
    const isPrev = currentIndex == 0
    const isNext = currentIndex == total - 1


    const goPrevious = () => {
        setCurrent((prev) => prev - 1)
    }
    const goNext = () => {
        setCurrent((prev) => prev + 1)
    }
  return (
    <>
        <div>
            <h2>Question {currentIndex + 1} of {total}</h2>


            
        </div>
        <div>
            <button onClick={goPrevious} disabled = {isPrev}>Previous</button>
            <button onClick={goNext} disabled = {isNext}>Next</button>
        </div>
    </>
    
  )
}

export default Quizcontroller