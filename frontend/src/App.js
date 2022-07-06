import './App.css';
import LandingPage from './Pages/LandingPage'
import CreatePost from './Pages/CreatePost'
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/create_post' element={<CreatePost />} />
          
          {/* Redirect if url doesn't exist */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
