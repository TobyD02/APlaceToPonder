import './App.css';
import LandingPage from './Pages/LandingPage'
import CreatePost from './Pages/CreatePost'
import {useState, useEffect} from 'react'
import { Route, Routes, HashRouter, Navigate} from 'react-router-dom'


function App() {

  const [data, setData] = useState('')
  useEffect(() => {
    fetch(process.env.API_URL).then(res => {
      console.log(res)
    })
  }, [])



  return (
    <div className="App">
      {data}
      <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/create_post' element={<CreatePost />} />
          
          {/* Redirect if url doesn't exist */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
