import React, { Component } from 'react';


export class FormCreateUser extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
    isUpdating: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, email, password, isUpdating } = this.state;
    this.props.handleSubmit({
      name,
      age: Number(age),
      email,
      password
    });
    if (!isUpdating) {
      this.setState({
        name: '',
        age: '',
        email: '',
        password: ''
      })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isUpdating !== state.isUpdating) {
      return {
        brand: props.editedUser?.name ?? '',
        age: props.editedUser?.age ?? '',
        email: props.editedUser?.email ?? '',
        password: props.editedUser?.password ?? '',
        isUpdating: props.isUpdating
      }
    }
    return null;

  }

  render() {
    return
    
}
}
export default FormCreateUser