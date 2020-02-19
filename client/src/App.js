import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoppinglist from './components/Shoppinglist.jsx';
import AppNavBar from './components/AppNavbar.jsx'
import {Provider} from 'react-redux';
import store from './store.js';
import ItemModal from './components/itemModel.jsx'

import {Container} from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar></AppNavBar>
      <Container>
        <ItemModal></ItemModal>
        <Shoppinglist></Shoppinglist>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
