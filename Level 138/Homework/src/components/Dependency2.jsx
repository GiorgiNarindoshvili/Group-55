import React, { useEffect, useState } from "react"


const Dependency2 = () => {
  const [user, setUser] = useState("")
      useEffect(() => {
          console.log("user changed", user)
      }, [user])
  
      return (
      <>
        <input type="text" onChange={(e) => setUser(e.target.value)}/>
        <div>
            {user}
        </div>

      </>
    )
} 
    


export default Dependency2