
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


