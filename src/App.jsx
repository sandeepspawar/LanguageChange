
import './App.css'
import { Header } from './components/header/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Welcome } from './components/Welcome'


function App() {


  return (
    <>
    
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<Welcome/>} ></Route>
    <Route path="/home" element={<Home/>} ></Route>
    <Route path="/about" element={<About/>}></Route>



   </Routes>
   </BrowserRouter>

    </>
  )
}
export default App