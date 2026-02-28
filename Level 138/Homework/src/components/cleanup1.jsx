
import React, { useEffect } from 'react'

const Cleanup1 = () => {
    useEffect(() => {
        const handleSize = () => {
            console.log("Window Resized")
        }

        window.addEventListener('resize', handleSize)


        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [])
  return (
    <div>Resize Window</div>
  )
}

export default Cleanup1