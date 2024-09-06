import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
// import {  BrowserRouter , Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer></footer>

        {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
       </BrowserRouter> */}


    </div>
  );
};

export default App;
