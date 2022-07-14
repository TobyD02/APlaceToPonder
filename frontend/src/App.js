import './App.css';
import LandingPage from './Pages/LandingPage'
import CreatePost from './Pages/CreatePost'
import { Route, Routes, HashRouter, Navigate} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
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
