import './App.css'
import Navbar from './navbar/navbar'
import Item from './item/item'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Item />
      <Router>
        <Routes>
            {/* <Route path='/' element={<Navbar />}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
