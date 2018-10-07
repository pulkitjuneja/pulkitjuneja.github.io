import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage'
// import { FlexDiv } from './App.style'
import Header from '../Header/Header';
import Projects from '../Projects/Projects'
import BlogSection from '../BlogSection/BlogSection'


const fullpageOptions = {
  scrollOverflow: true
};


  const App = () => (
    <ReactFullpage
      {...fullpageOptions}
      callbacks={["afterRender"]}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line
        return (
          <div>
            <Header />
            <div className="section">
              <Projects/>
              <BlogSection/>
            </div>
          </div>
        );
      }}
    />
  );

export default App;
