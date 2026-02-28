import React, { useEffect, useState } from 'react'

const Dependency1 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("count changed", count)
    }, [count])

    const handleChangeplus = () => {
            setCount(prev => prev + 1) 
            console.log("+1")
        }
        const handleChangeminus = () => {
            setCount(prev => prev - 1)
            console.log("-1")
        }
  return (
    <>
        <p>{count}</p>
        <button onClick={handleChangeplus}> + 1</button>
        <button onClick={handleChangeminus}> - 1</button>
    </>
  )
}

export default Dependency1