
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

 const  AuthRedirect = (Component)=>{

    let newComponent = connect({})(Component)

    class RedirectComponent extends React.Component{
        render(){ 
              if (!this.props.auth) { return<Redirect to='/login'/>}
              
             return <Component />
        }       
    }
    let state = (state)=>{
        return{
            auth:state.auth.auth
        }
    }

    
    return connect(state)(RedirectComponent);
}



export default AuthRedirect;

