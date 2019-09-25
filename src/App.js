import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import NuevoProducto from './components/NuevoProducto'




function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>    
    </Router>
    
  );
}

export default App;
