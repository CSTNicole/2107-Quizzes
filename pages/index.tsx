import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAnimals } from '../backend/database'

import Clickbtn from '../components/inputs'

export default function firstPage() {

  // const [name, setName] = useState('');
  // const handleUpdateName = (event) => {
  //   const value = event.target.value;
  // };

  return (
    <div className={styles.container}>
      <Head>
          <title>quiz01-ntan</title>
          <h1>this is the first page</h1>
      </Head>

      <p>Hello</p>
      <input type = 'text' />
      <button>Create Database</button>
      {/* <button onClick = {handleClick}>Create database</button> */}

    </div>
  )
}

export async function getServerSideProps() {
  const data = await getAnimals();

  return {
    props: {}
  }

}



