import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../action/index';

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