import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';

class NavBar extends Component {

    render() {
        let navColor = 'transparent';
        if (this.props.location.pathname !== "/") {
            navColor = 'black';
        }
        return (<div className="container-fluid nav">
            <div className="row">
                <nav className={navColor}>
                    <div className="nav-wrapper">
                        <Link to="/" className="left">Airbnb</Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">English</Link></li>
                            <li><Link to="/">USD $</Link></li>
                            <li><Link to="/">Become a Host</Link></li>
                            <li><Link to="/">Help</Link></li>
                            <li onClick={() => { this.props.openModal(true, <SignUp />) }}>Sign Up</li>
                            <li onClick={() => { this.props.openModal(true, <Login />) }}>Log in</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>)
    }

}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal
    }, dispatcher);
}

export default connect(null, mapDispatchToProps)(NavBar);