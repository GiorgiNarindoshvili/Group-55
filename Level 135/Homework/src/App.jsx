import React from 'react'
import { useState } from 'react'

const App = () => {
  const[form, setForm] = useState({
      name1: "",
      password: "",
      email: ""
  })
    
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({...prev, [name]: value}))
  }

  
  return (
    <div>
      <input type="name" name='name1' value={form.name1} onChange={handleChange}/>
      <input type="password" name='password' value={form.password} onChange={handleChange}/>
      <input type="email" name='email' value={form.email} onChange={handleChange} />
    </div>
    
  )
}

export default App