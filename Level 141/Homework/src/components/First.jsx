import React, { useState, useEffect, useEffectEvent } from 'react'

const First = () => {
    const[time, setTime] = useState(0)



    const eff = useEffectEvent (() => {
        setTime(prev => {
            const next = prev + 1
            console.log(next)
            return next
        }
            

        )
        
    })


    useEffect(() => {
        const timer = setInterval(() => {
            eff()
        }, 3000)    
        

        return () => {
            clearInterval(timer)
        }

        
    }, [])
    
    
  return (
    <></>
  )
}

export default First