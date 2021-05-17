import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <div>
            <Link to="/">React SSR</Link>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Link to="/users">Users</Link>
                <a href="/admins">Admins</a>
                {
                    props.auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);