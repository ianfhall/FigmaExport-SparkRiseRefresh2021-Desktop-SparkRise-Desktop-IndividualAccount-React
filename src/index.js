import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import SparkRiseDesktopIndividualAccount1267630 from './views/spark-rise-desktop-individual-account1267630'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={SparkRiseDesktopIndividualAccount1267630}
          path="/"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
