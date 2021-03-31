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
  
    
  
    
  
    
  
    displayError = errMsg => {
        console.log(errMsg);
        this.setState({ errMsg });
      }
  
    render() {
      return (
        <div className={styles.Grid}>
          
        </div>
      )
    }
  };