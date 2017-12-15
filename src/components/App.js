import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './header'
import Footer from './footer'

import Home from '../containers/home'
import News from '../containers/news'
import GalleryItem from '../containers/galleryItem'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/news/:id' component={News} />
            <Route path="/galleries/:id" component={GalleryItem} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
