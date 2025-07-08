import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/home/page'
import Service from './pages/services/page'
import About from './pages/about/page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path=':link' element={<Service/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
