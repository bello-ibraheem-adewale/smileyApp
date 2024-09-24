
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import State from './pages/State'

function App() {


  return (
    
    <BrowserRouter>
    <div>
    <Routes>
    <Route path='/' element={<State/>} />
    </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App
