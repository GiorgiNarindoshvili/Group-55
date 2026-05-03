import React from 'react'
import Products from './Products'
import { Route, Routes } from 'react-router-dom'
import ParamProds from './ParamProds'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/products/:id' element = {<ParamProds/>}/>
      </Routes>
      

    </div>
  )
}

export default App




// კომენტარების გამოყენებით ახსენით თუ რა არის dynamic router, რა არის მისი დანიშნულება და როგორ მუშაობს იგი.


//დინამიური როუტერი არის როუტერის კიდევ ერთი ტიპი, რომელსაც შეუძლია დააკავშიროს თითო ვებსაიტის კონტენტი ლინკების გამოყენებით და ისე მართოს ვებსაიტი, ასევე ჩვენ უნდა გამოვიყენოთ useParams როუტერ ხელსაწყო რათა დინამიურ როუტერს მივცეთ სწორად მუშაობის საშუალება