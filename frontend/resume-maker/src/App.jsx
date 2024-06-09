import React from 'react'
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
  import Home from './components/Home';
  import Navbar from './components/Navbar';
  import Login from './components/Login';
import Signup from './components/Signup';

import About from './res_sections/About';
// import EducationPage from './res_sections/EducationPage';
// import PersonalInfo from './res_sections/PersonalInfo';


const App = () => {
  return (
 <Router>
  <div>
    <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  {/* <Route path='/personal' element={<PersonalInfo/>}/>

  <Route path='/education' element={<EducationPage/>}/> */}
  <Route path='/about' element={<About/>}/>




 </Routes>
 </div>
 </Router>
  )
}

export default App