import React from 'react';
import './App.css';
import Header from './HeaderContainer';
import Body from './Body.js';
import {BrowserRouter, HashRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Loading from './loadingCircle';
import {makeAuth} from './redux/auth-reducer';

class App extends React.Component {

      componentDidMount(){
        this.props.makeAuth()
      }

      render(){

        if (this.props.loading) { return <Loading /> }

      return (
        <HashRouter>
          <div >
            <Header />
            <Body />
          </div>
        </HashRouter>
      )
}

}
const mstp = (state)=>{
  return{
    loading:state.auth.loading
  }
}
const mdtp = (dispatch)=>{
  return{
    makeAuth:()=>dispatch(makeAuth)
  }
}
export default connect(mstp,mdtp)(App);
