import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Landing from './Landing';



const Dashboard = () => 
    <h2>Dashboard</h2>

const Survey = () =>
    <h2>Do it Now</h2>



                                // broswer router can only take one child. 
                                    //JSX will take exact and automatically assume that it is true. 
                                    //materialize CSS_ 
class App extends Component {
    componentDidMount(){
     this.props.fetchUser();  
    }

    render(){
    return(
        <div className="container">
            <BrowserRouter> 
             <div>
                <Header/>
                <Route path="/" component={Landing} exact/>
                <Route path="/survery" component={Dashboard} exact/>
                <Route path="/survery/new" component={Survey} exact/>
             </div>
            </BrowserRouter>
        </div>
    );
  }
};


export default connect(null,actions)(App);