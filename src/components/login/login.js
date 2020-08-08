import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {sendDataToAuth} from '../../redux/auth-reducer'
const LoginForm = reduxForm({form:'login'})(
    (props)=>{
    return( <form onSubmit={props.handleSubmit} >
         <div>
             <Field component={'input'} name='login' placeholder='login' /> <br/>
             <Field component='input' name='password' placeholder='password'/> <br/>
             <Field component='input' name='rememberMe' type='checkbox'/> запомнить меня <br/>
             <button>Войти</button>
         </div>
     </form>
    )
})




const Login = (props)=>{
    if(props.auth){return<Redirect to='/me'/>}

    const onSubmit = (data)=>{
        
        props.makeLogin(data)
    }
    return(<div>     
        <div>Вход:</div>
        <LoginForm onSubmit={onSubmit} />
    </div>

    )
}

const mstp=(state)=>{
    return{
        auth:state.auth.auth
    }
}
const mdtp = (dispatch)=>{
    return{
        makeLogin:(data)=> dispatch(sendDataToAuth(data))
    }
}



export default compose(
    connect(mstp,mdtp)
)
(Login)