import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'

export const Header = (props) => (
  <header className="head">
    <Link className="title" to="/dashboard">
        <h1>Expense Tracker</h1>
    </Link>
    <button className="logout" onClick={props.startLogout}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
