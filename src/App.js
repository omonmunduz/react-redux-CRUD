import React,{Component} from 'react';
import './App.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import AllCustomers from './components/AllCustomers';
import Navigation from './components/Navigation';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/allCustomers" component={AllCustomers}/>
        </Switch>
      </div>
      </BrowserRouter>

    )
  }
}

export default App;