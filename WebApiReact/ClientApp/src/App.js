import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Clouds } from './components/Clouds';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faCoffee)


    //< Route path = '/redux-counter' component = { ReduxCounter } />
        //<Route path='/swatch' component={Swatch} />

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/clouds' component={Clouds} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
 