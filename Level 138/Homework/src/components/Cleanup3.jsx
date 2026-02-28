import React, { useEffect } from 'react'

const Cleanup3 = () => {

    useEffect(() => {
        console.log("Terminal")


        return () => {
            console.log("Terminal should be empty")
        }
    }, [])
  return (
    <div></div>
  )
}

export default Cleanup3