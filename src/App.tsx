import React from 'react'
import {Navbar} from './components/Navbar'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {TodosPage} from './pages/TodosPages'
import {AboutPage} from './pages/AboutPage'


function App() {
  
  return (
  <BrowserRouter>
    <Navbar/>
      <div className='container'>
      <Routes>
          <Route path="/" element={<TodosPage/>} />
          <Route path="/about" element={<AboutPage/>} />
      </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App;
