
import React from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import {makeAuth} from './redux/auth-reducer';
import {logout} from './redux/auth-reducer'

class HeaderContainer extends React.Component {

    componentDidMount= () => {
        //this.props.makeAuth();
        
    }

    render(){return(
        <Header {...this.props} />
       )}
    
}
let mapStateToProps = (state) => {
    return{
        login: state.auth.login,
        auth: state.auth.auth
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        setUserData:(data)=> { return(dispatch({type:'SET_USER_DATA', data}))},
        makeAuth: ()=>dispatch(makeAuth),
        logout: ()=> dispatch(logout)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)


