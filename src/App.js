import React, { Component } from 'react'
import Header from './common/header/header'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Detail from './pages/detail/detail'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
