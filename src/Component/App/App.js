import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Beer from '../Beer/Beer'
class App extends React.Component {

  render(){
  return (
    <div className="App">
<Header/>
<Search/>
<Beer/>
    </div>
  );
}
}
export default App;
