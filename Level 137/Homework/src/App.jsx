import React from 'react'
import Api1 from './components/Api1'
import Api2 from './components/Api2'
import Api3 from './components/Api3'

const App = () => {
  return (
    <div>
      <h1>Store</h1>
      <Api1/><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>Users</h1>
      <Api2/><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>IDK BRUH</h1>
      <Api3/>
    </div>
  )
}

//1. useEffect არის კაუჭი რომელიც მდგომარეობის შეცვლის თანავე უშვებს გარკვეულ ფუნქციას
//2. useEffectს ვიყენებთ ძირითადად მაშინ თუ გვინდა რომ მოვახდინოთ კომუნიკაცია APIსთან და მათ სერვერებთან, და ასევე იმისთვის რომ გავუშვათ ფუნქცია მდგომარეობის ცვლილების და დარენდერების თანავე.
//3. useEffects როგორც ყველა კაუჭს შეიძლება ქონდეს დადებითი და უარყოფითი მხარეები, დადებითი მხარე ისაა რომ კომპონენტს მეტად advanced level ს ხდის და შეუძლია ბევრი ახალი თვისების დამატება ჩვენს კომპონენტში, თუმცა ასევე შეიძლება გამოიწვიოს ბაგები და კოდის არევა.

export default App