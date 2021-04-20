import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ users }) {

  return (
    <div className={styles.container}>
      <table id='users'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Details</th>
        </tr>
        {users.map(user => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <Link href={`/users/${user.id}`}>
              <a style={{ color: '#4caf50' }}>View Details</a>
            </Link>
          </tr>
        ))}
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const users = await res.json();

  return {
    props: {
      users
    }
  }
}
