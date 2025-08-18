
import './App.css';
import {Routes,Route} from 'react-router-dom'
import User from './Pages/User';
import UserCreate from './Pages/UserCreate';
import UserUpdate from './Pages/UserUpdate';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<User></User>}></Route>
      <Route path="/UserCreate" element={<UserCreate></UserCreate>}></Route>
      <Route path="/UserUpdate/:id" element={<UserUpdate></UserUpdate>}></Route>
    </Routes>
     
    </>
  );
}

export default App;
