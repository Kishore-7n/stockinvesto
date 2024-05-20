
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/pages/Navbar'
import Home from './Components/pages/Home'
import Login from './Components/pages/Login'
import Signup from './Components/pages/SignUp'
import Stock from './Components/pages/Stock';
import { useEffect } from 'react';
import { UserContext} from './Context/UserContext';
import { useContext } from 'react';
import 'chart.js';
import 'react-chartjs-2';
import Orders from './Components/pages/Orders';
import Feed from './Components/pages/Feed';
import StickyChatbotButton from './Components/pages/StickyChatbotButton';

function App() {

  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    setUserData(user)
    // eslint-disable-next-line 
  }, []);
  return (
    <Router>
        <div className="App">
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/stock' element={<Stock/>}></Route>
          <Route path='/order' element={<Orders></Orders>}></Route>
          <Route path='/news' element={<Feed/>}></Route>
        </Routes>
        <StickyChatbotButton/>
    </Router>
  );
}

export default App;
