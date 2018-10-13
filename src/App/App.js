import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage'
// import { FlexDiv } from './App.style'
import Header from '../Header/Header';
import Projects from '../Projects/Projects'
import BlogSection from '../BlogSection/BlogSection'
import About from '../About/About'


const fullpageOptions = {
  scrollOverflow: true
};


  const App = () => (
    <ReactFullpage
      {...fullpageOptions}
      callbacks={["afterRender"]}
      render={() => {
        return (
          <div style={{padding:'0px'}}>
            <Header />
            <div className="section">
              <About/> 
              <Projects/>
              <BlogSection/>
            </div>
          </div>
        );
      }}
    />
  );

export default App;
