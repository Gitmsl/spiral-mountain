import './App.css';
import TopBar from '../src/components/topbar/TopBar';
import Home from '../src/pages/home/Home'
import Single from '../src/pages/single/Single'
import Write from '../src/pages/write/Write'
import Settings from '../src/pages/settings/Settings'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Settings />
    </div>
  );
}

export default App;
