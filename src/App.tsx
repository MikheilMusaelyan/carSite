import './App.css'
import Navbar from './navbar/navbar'
import Item from './item/item'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home/home'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
