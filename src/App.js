import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TopBar from '../src/components/topbar/TopBar';
import Home from '../src/pages/home/Home'
import Single from '../src/pages/single/Single'
import Write from '../src/pages/write/Write'
import Settings from '../src/pages/settings/Settings'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const user = true;
  // guest account will render user true
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={user ? <Home/> :<Login />} />
        <Route path='/register' element={user ? <Home/> :<Register />} />
        <Route path='/settings' element={user ? <Settings /> :<Register/>} />
        <Route path='/single' element={<Single />} />
        <Route path='/write' element={user ? <Write /> :<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
