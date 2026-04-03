import React from 'react'



const App = () => {

  const style1 = {
    color: "brown"
  }

  const style2 = {
    backgroundColor: "pink"
  }

  const style3 = {
    fontSize: "40px"
  }

  const style4 = {
    textAlign: "center"
  }
  const style5 = {
    border: "5px dotted green"
  }


  return (
    <div>
      <p style={{color:"blue"}}>Para1</p>
      <p style={{backgroundColor:"green"}}>Nigga</p>
      <p style={{fontSize:"30px"}}>YOOOO</p>
      <p style={{textAlign:"center"}}>HI</p>
      <p style={{border:"1px solid skyblue"}}>Giorgi</p><br /><br /><br /><br /><br /><br />


      <p style={style1}>Para1</p>
      <p style={style2}>Nigga</p>
      <p style={style3}>YOOOO</p>
      <p style={style4}>HI</p>
      <p style={style5}>Giorgi</p><br /><br /><br /><br /><br /><br />


      

    </div>
  )
}

export default App