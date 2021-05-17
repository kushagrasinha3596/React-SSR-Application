import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../action/index';

class AdminList extends Component{
    componentDidMount(){
        if(this.props.fetchAdmins){
            this.props.fetchAdmins();
        }
    }

    getAdminsList(){
        return (
            <ul>
                {this.props.adminsList && this.props.adminsList.map((adminObj) => {
                    return (
                    <li key={adminObj.id}>{adminObj.name}</li>
                    )
                })}
            </ul>
        )
    }

    render(){
        return (
            this.props.adminsList &&  this.props.adminsList.length > 0 ? this.getAdminsList() : <h1>Login First Please!!!</h1>
        );
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchAdmins());
}

const mapStateToProps = (state) => {
    return {
        adminsList: state.admins
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdmins: () => dispatch(fetchAdmins())
    }
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(AdminList),
    loadData: loadData
};