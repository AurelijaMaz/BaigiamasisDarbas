import React, { Component } from 'react';
import styles from './styles.module.css';

export class UserTable extends Component {

  createDataRows = (users) =>
    users.map(({ id, name, age, email, password }) => (
      <tr key={id}>
        <td>{name}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>
          <button className={styles.Button} onClick={() => this.props.editUser(id)}>Atnaujinti</button>
          <button className={styles.Button} onClick={() => this.props.deleteUser(id)}>Ištrinti</button>
        </td>
      </tr>
    ))

  render() {
    const { users } = this.props;
    const rows = this.createDataRows(users);
    return (
      <div>
          <h1>Ačiū Jums </h1>
        { users.length === 0
          ? <h2>Nėra vartotojų</h2>
          : <table className={styles.Table}>
            <thead>
              <tr>
                <th>Vardas</th>
                <th>Amžius</th>
                <th>El. paštas</th>
                <th>Spaltažodis</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        }
      </div>
    )
  }
}

export default UserTable;