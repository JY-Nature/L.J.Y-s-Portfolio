import React from 'react';
import Nav from './components/head/Nav';
import Main from './components/section/Main'
import About from './components/section/About'
import Project from './components/section/Project'
import Contact from './components/section/Contact'

const App = () => {
  return (
    <div>
      <Nav/>
      <Main/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default App;