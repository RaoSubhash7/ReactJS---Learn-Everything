import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
<>
<Card user={{ name: "Subhash Kumar", age: 18 }} img="https://i.pravatar.cc/300?img=3" />
<Card user={{ name: "Aman Singh", age: 20 }} img="https://i.pravatar.cc/300?img=2" />
</>
  )
}

export default App
