import React, { Component } from 'react';import '../home.css';
import axios from 'axios';
import './registration.css'
import { Navbar } from '../../components';

export default class Registration extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name:null,
        file: null
    }
    this.onChangeImg = this.onChangeImg.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
}

onChangeImg(event) {
    this.setState({
        name: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
    })
}

uploadImage(user){
    const formData =  new FormData();
    formData.append('image', this.state.file);
    formData.append('uid', user);
    let url = "http://127.0.0.1/api/imgServer.php";
    axios.post(url, formData, {
    })
    .then(res => {
        console.log(res.data);
    })
}


    handleSubmit = (event) => {

      event.preventDefault();

      const data = new FormData(event.target);
      // check if passwords match
      if (data.get('password1') !== data.get('password2')) {
          alert('Passwords do not match');
      }else{
      const user = {
        username: data.get('username'),
        password: data.get('password1'),
        cpassword: data.get('password2'),
        email: data.get('email'),
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
      }
      const username = data.get('username');
      console.log(user);
      fetch('http://localhost/api/signup.inc.php', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
      .then(data => {
        console.log(data.status);
        if (data.status === 'success') {
          this.uploadImage(username);
          alert('Registration: ' + data.status);
          window.location.href = '/login';
        } else {
          alert(data.status);
        }
      })
    }
  }
  render() {
    let preview;
    if (this.state.name) {
        preview = <img src={this.state.name} alt='File preview' />;
    }
    return (
      <div id="page-container">
        <Navbar />
        <div className="content-description">
        <div id="content">
        <h2>Sign Up:</h2>
        <hr />
        <div id="content-body" >
            <div style={{textAlign: 'center'}}>
              <form onSubmit={this.handleSubmit} className="form-area" id='reg-form'>
                <table>
                  <tr>
                    <th colSpan={2} id="imgprofile">
                    {preview}
                    </th>
                  </tr>
                          <tr>
                            <th><label className="block-header">First Name: </label></th>
                            <td><input type="text" name="first_name" required id="id_first_name" placeholder="first name"/></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className="block-header">Last Name: </label></th>
                            <td><input type="text" name="last_name" required id="id_last_name" placeholder="last name" /></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className="block-header">Username: </label></th>
                            <td><input type="text" name="username" maxLength="25" required id="id_username" placeholder="username" /></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className="block-header">Email: </label></th>
                            <td><input type="email" name="email" required id="id_email" placeholder="email" /></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className="block-header">Password: </label></th>
                            <td><input type="password" name="password1" maxLength="25" required id="id_password1" placeholder="password" /></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className="block-header">Confirm Password: </label></th>
                            <td><input type="password" name="password2" maxLength="25" required id="id_password2" placeholder="confirm password" /></td>
                          </tr>
                          <br />
                          <tr>
                            <th><label className='block-header'>Profile Picture: </label></th>
                            <input type="file" name="image" onChange={this.onChangeImg} />
                          </tr>
                          <tr>
                            <td colSpan={2}>
                            <button type="submit" id="submit" value="submit" name='submit-signup'> Sign Up </button>
                            </td>
                          </tr>
                  </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

