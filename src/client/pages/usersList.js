import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../action/index';
import { Helmet } from 'react-helmet';

class UsersList extends Component{

    componentDidMount(){
        if(this.props.getUsersList){
            this.props.getUsersList();
        }
    }


    renderUsers() {
        return (
            <ul>
                {this.props.usersList && this.props.usersList.map((userObj) => {
                    return (
                    <li key={userObj.id}>{userObj.name}</li>
                    )
                })}
            </ul>
        )
    }

    render() {
        return(
            <div>
                <Helmet>
                    <title>{`${this.props.usersList.length} Users Loaded`}</title>
                    <meta property="og:title" content="Users App"/>
                </Helmet>
                {this.renderUsers()}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        usersList: state.users
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getUsersList: () => dispatch(fetchUsers())
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, mapDispathToProps)(UsersList),
    loadData: loadData
};