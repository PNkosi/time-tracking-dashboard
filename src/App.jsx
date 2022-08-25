import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, Weekly, Monthly } from './components'
import Daily from './components/daily/Daily'

function App() {
  return (
    <div className='container lg-screen-grid'>
      <Header />
      <main className='cards-container'>
        <Routes>
          <Route path='/' element={<Daily />} />
          <Route path='/weekly' element={<Weekly />} />
          <Route path='/monthly' element={<Monthly />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
