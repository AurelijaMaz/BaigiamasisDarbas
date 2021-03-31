import React, { Component } from 'react';

import API from '../../api';
import UserTable from '../UserTable';
import FormCreateUser from '../FormCreateUser';
import styles from './styles.module.css';


export default class UsersManager extends Component {
    state = {
      users: [],
      editedUserId: null,
      errMsg: null,
    }
  
    // GET
    fecthUsers = () => {
      API.getUsers(({ users }) => this.setState({ users }), this.displayError)
    }

    // POST
  createUser = (data) => {
    API.postUser(data, this.fecthUsers, this.displayError);

  }

  editUser = (id) => {
    this.setState({ editedUserId: id === this.state.editedUserId ? null : id });
  }
  
    
  // PATCH
  saveUser = (data) => {
    API.updateUser(this.state.editedUserId, data, this.fecthUsers, this.displayError);
    this.setState({ editedUserId: null });
  }
    
  // DELETE
  deleteUser = (id) => {
    API.deleteUser(id, this.fecthUsers, this.displayError)
  }
    
  
    displayError = errMsg => {
        console.log(errMsg);
        this.setState({ errMsg });
      }


      componentDidMount() {
        this.fecthUsers();
      }
  
    render() {
      return (
        <div className={styles.Grid}>
         <UserTable
          users={this.state.users}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        /> 
        </div>
      )
    }
  };