import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState } from 'react'

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  }

  const handleSignIn = async () => {
    console.log(username);
    console.log(password);

    const data = {
      username,
      password
    }

    const body = JSON.stringify(data)
    const requestOptions = {
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      body,
    }

    const response = await fetch('http://localhost:3000/api/signin', requestOptions)
    const json = await response.json(); 
    console.log(json)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz 2 -ntan</title>

      </Head>

      <p>
          Username <br/>
          <input type='text' value={ username } onChange={ handleUsernameChange }></input>
      </p>
      <p>
          Password <br/>
          <input type='password' value={ password } onChange={ handlePasswordChange }></input>
      </p>

      <button onClick={ handleSignIn }>Sign in</button>
     
    </div>
  )
}
