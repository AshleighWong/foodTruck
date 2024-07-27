import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Foodtruck from './Foodtruck'
import Foodcard from './Foodcard'

function App() {

  return (
    <>
      <body>
        <Foodtruck></Foodtruck>
        <div className="containers">
          <Foodcard src={"/src/assets/birria.jpg"} name={"Birria-Landia"} cuisine={"Mexican"}></Foodcard>
          <Foodcard src={"/src/assets/mysttik.jpg"} name={"Mysttik Masala"} cuisine={"Indian"}></Foodcard>
          <Foodcard src={"/src/assets/halals.jpg"} name={"The Halal Guys"} cuisine={"Middle Eastern"}></Foodcard>
        </div>
      </body>
    </>
  )
}

export default App
