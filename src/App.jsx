import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/home/page'
import Service from './pages/services/page'
import About from './pages/about/page'
import Terms from './pages/terms/page'
import Privacy from './pages/privacy/page'
import BookAnAppointment from './pages/book/page'
import { checkMissingRoutes } from './data/data'

async function App() {
  // const data = await checkMissingRoutes()
  // console.log(data);
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path=':link' element={<Service/>} />
            <Route path="terms-and-conditions" element={<Terms/>} />
            <Route path="privacy-policy" element={<Privacy/>} />
            <Route path='book-an-appointment' element={<BookAnAppointment/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
