import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {

  var [data, setData] = useState({ username: '', email: '', password: '', cpassword: '' })
  // console.log(data)

  var handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  var handleSubmit = (e) => {
    e.preventDefault()
    if (data.username.length <= 4) {
      alert('username must be more than 4 characters')
    } else if (data.email.length <= 15) {
      alert('Email must be more than 15 letters')
    } else if(data.password <= 4) {
      alert('password must be more than 4 letters')
    } else if (data.password !== data.cpassword ) {
      alert('password and cpassword not matched')
    } else {
      console.log(data)
      // axios.post('api', data)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='App'>
        <div>
          <label>User name</label>
          <input
            type='text'
            name='username'
            value={data.username}
            onChange={handleChange}
          />
          {data.username.length <= 4 ? (
            <span>User name must be more than 4 letters </span>
          ) : null}
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          {data.email.length <= 15 ? (
            <span>Email must be more than 15 letters </span>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
          />
          {data.password.length <= 4 ? (
            <span>Password must be more than 4 letters </span>
          ) : null}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type='password'
            name='cpassword'
            value={data.cpassword}
            onChange={handleChange}
          />
          {data.password !== data.cpassword ? <span>Password and cpassword are not matched</span> : null}
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
