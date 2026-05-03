import React, {useState} from 'react'

const Example1 = () => {
  const[name, setName] = useState("")
  const[lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLastname = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
  return (
    <div>
        <form>
            <label htmlFor="name">Enter Your Name </label>
            <input type="text" onChange={handleName} id='name' placeholder='Enter Your Name'/> <br />
            <label htmlFor="lastname">Enter Your Lastname </label>
            <input type="text" onChange={handleLastname} placeholder='Enter Your Lastname' id='lastname'/><br />
            <label htmlFor="dob">Date of birth</label>
            <input type="date"/><br />
            <label htmlFor="email">Enter your Email</label>
            <input type="email" onChange={handleEmail}/>



            <p>{name}</p>
            <p>{lastname}</p>
            <p>{email}</p>
        </form>
    </div>
  )
}

export default Example1