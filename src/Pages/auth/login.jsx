import React, { Component } from 'react';
//import axios from 'axios';
import '../home.css';
import './login.css';
import { Navbar } from '../../components';
import Auth from './auth';
import { withRouter } from './withRouter';


class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const user = {
            username: data.get('username'),
            password: data.get('password'),
        }
        console.log(JSON.stringify(user));
        fetch('http://localhost/api/login.inc.php', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data.status);
            if (data.status === 'success') {
                alert('Login: ' + data.status);
                sessionStorage.setItem('user', JSON.stringify(data));
                //check if cookie is set
                if (document.cookie.includes('user') === false) {
                    let date = new Date();
                    date.setDate(date.getDate() + 1);
                    document.cookie = "user=" + JSON.stringify(data) + "; expires=" + date;
                }
                Auth.login(() => {
                    this.props.navigate('/home');
                }
                );
                //window.location.href = '/home';
            } else {
                alert(data.status);
            }
        })
    }

  render() {
    return (
      <div id="page-container">
        <Navbar />
      <div id="content">
          <h2> Log In:</h2>
              <hr />
              <div className="auth-flow-form">
                  <form onSubmit={this.handleSubmit} action="#" method="post" className="form-area" id='login-form'>
                      <table style={{textAlign:'left'}}>
                          <tr>
                              <td>
                                  <label for="id_username">Username:</label>
                                  <br />
                                  <input type="text" name="username" placeholder="Username" required id="id_username" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="id_password">Password:</label>
                                  <br />
                                  <input type="password" name="password" placeholder="Password" required id="id_password" />
                              </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                            <button type="submit" id="submit">Login</button>
                            </td>
                          </tr>
                        </table>
                      
                  </form>
                </div>
              </div>
            </div>
      )
  }
} 

export default withRouter(Login);