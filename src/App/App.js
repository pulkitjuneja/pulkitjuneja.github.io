import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PortfolioMain from '../PortfolioMain/PortfolioMain'
import MagneticPrivacy from '../MagneticPrivacy/MagneticPrivacy'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={PortfolioMain} />
      <Route exact path='/Privacy/Magnetic' component={MagneticPrivacy} />
    </Switch>
  </div>
)

export default App;
