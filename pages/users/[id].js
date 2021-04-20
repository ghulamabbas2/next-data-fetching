import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home({ user }) {

    return (
        <div className={styles.container}>
            <table id='users'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>website</th>
                </tr>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
            </table>

            <Link href='/'>
                <a style={{ marginTop: '3rem' }}><b>Go Back</b></a>
            </Link>

        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);

//     const user = await res.json();

//     return {
//         props: {
//             user
//         }
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);

    const user = await res.json();

    return {
        props: {
            user
        }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const users = await res.json()

    const ids = users.map((user) => user.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    // paths : { params: { id: '1', id: '2' } }

    return {
        paths,
        fallback: false,
    }
}
