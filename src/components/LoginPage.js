import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth'

export const LoginPage = (props) =>(
    <div className = "box-layout">
    <div className ="box">
         <h1>Expense Tracker</h1>
         <p>Start controlling your expenses</p>
        <button className= "button" onClick = {props.startLogin}>
        Login with  <i className="fab fa-google"> </i>
        </button>
    </div>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage);