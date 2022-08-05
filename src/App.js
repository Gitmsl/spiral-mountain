import './App.css';
import TopBar from '../src/components/topbar/TopBar';
import Home from '../src/pages/home/Home'
import Single from '../src/pages/single/Single'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Single />
    </div>
  );
}

export default App;
