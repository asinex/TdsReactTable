import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MyReactTable from './components/MyReactTable';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import MyWidget from './MyWidget';



const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header> */}
          <hr/>
          {/* <div>
              <MyWidget/>
          </div> */}
          {/* <MyReactTable/> */}
        </div>
      </Provider>

    );
  }
}

export default App;
