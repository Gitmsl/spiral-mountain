import './App.css';
import TopBar from '../src/components/topbar/TopBar';
import Home from '../src/pages/home/Home'
import Single from '../src/pages/single/Single'
import Write from '../src/pages/write/Write'
import Settings from '../src/pages/settings/Settings'
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Login />
    </div>
  );
}

export default App;
