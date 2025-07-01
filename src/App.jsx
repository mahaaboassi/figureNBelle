import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/home/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Layout/>}>
          <Route path='' element={<Home/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
