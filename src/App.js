import './App.css';
import TopBar from '../src/components/topbar/TopBar';
import Home from '../src/pages/home/Home'
import Single from '../src/pages/single/Single'
import Write from '../src/pages/write/Write'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Write />
    </div>
  );
}

export default App;
