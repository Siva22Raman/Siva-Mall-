import React from 'react';
import { Route,Routes,  Link } from 'react-router-dom';
import Home from './pages/Home'; 
import StoreList from './pages/Storelist';
import Cloth from './pages/Cloth';
import LoginForm from './pages/LoginForm';
import Zudio from './pages/Zudio/Zudio';
import SignupForm from './pages/SignupForm';
import Pay from './pages/Pay';
import Contact from './components/Contact';


function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path='/Storelist' element={<StoreList/>}/>;
        <Route path='/Cloth' element={<Cloth/>}/>;
        <Route path='/loginform' element={<LoginForm/>}/>;
        <Route path='/signupform' element={<SignupForm/>}/>;
        <Route path='/Pay' element={<Pay/>}/>;
       
        <Route path='/store/:id' element={<Zudio />} />;
        <Route path='/contact' element={<Contact/>} />;
      </Routes>
    
  );
}

export default App;