import React, { useState } from 'react'

const App = () => {
  const[nameInput, setNameInput] = useState("")
  const[lastnameInput, setLastnameInput] = useState("")
  const[emailInput, setEmailInput] = useState("")
  const [codeInput, setCodeInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")



  const handleName = (e) => {
    setNameInput(e.target.value)
  }

  const handlelastName = (e) => {
    setLastnameInput(e.target.value)
  }

  const handleEmail = (e) => {
    setEmailInput(e.target.value)
  }


  const handlePassword = (e) => {
    setPasswordInput(e.target.value)
  }


  const handleCode = (e) => {
    setCodeInput(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder='Enter Your Name' onChange={handleName}/><br /><br />
      <input type="text" placeholder='Enter Your Lastname' onChange={handlelastName}/><br /><br />
      <input type="email" placeholder='Enter Your Email' onChange={handleEmail}/><br /><br />
      <input type="password" placeholder='Enter Your Password' onChange={handlePassword}/><br /><br />
      <input type="text" placeholder='Enter a random code' onChange={handleCode} />

      <p>{nameInput}</p>
      <p>{lastnameInput}</p>
      <p>{emailInput}</p>
      <p>{passwordInput}</p>
      <p>{codeInput}</p>
    </div>
  )
}

export default App