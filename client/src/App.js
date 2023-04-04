import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ErrorPage from './pages/error/ErrorPage';
import { React, useContext } from 'react';
import { Context } from './context/Context';

function App() {
	const { user } = useContext(Context);

	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/login' element={user ? <Home/> :<Login />} />
				<Route path='/register' element={user ? <Home/> :<Register />} />
				<Route path='/settings' element={user ? <Settings /> :<Register/>} />
				<Route path='/post/:postId' element={<Single />} />
				<Route path='/write' element={user ? <Write /> :<Register/>} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
