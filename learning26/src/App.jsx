import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import{ Hedercomponent} from './component/Hedercomponent'
import { Footercomponent } from './component/Footercomponent'
import Containcomponent from './component/Containcomponent'
import { Mapdemo1 } from './component/Mapdemo1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hedercomponent />
      {/* <Containcomponent /> */}
      <Mapdemo1></Mapdemo1>
      <Footercomponent />
      
    </>
  )
}

export default App