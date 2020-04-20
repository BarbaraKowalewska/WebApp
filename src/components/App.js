import React from 'react'
import Home from './Home'
import history from '../history'

import { Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import BrandToolBar from './BrandToolBar'
import Footer from './Footer'
import CategoryShow from './categories/CategoryShow'

const App = () => {
  return (
    <div>
      <div className="ui container">
        <React.Fragment>
          <CssBaseline/>
          <BrandToolBar/>
          <main>
            <Router history={history}>
              <div>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/categories/:id" exact component={CategoryShow}/>
                </Switch>
              </div>
            </Router>
          </main>
          <Footer/>
        </React.Fragment>
      </div>
    </div>
  )
}

export default App
