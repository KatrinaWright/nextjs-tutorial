import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', //default caching static
        { cache: 'no-store'} //To get fresh data instead of cacheing buildtime data
        // {next: { revalidate: 10}} //// This is a second option to refresh every 10 second with fresh data
    )
    const users: User[] = await res.json();


  return (
    <div>
        <h1>Users</h1>
        <p> {new Date().toLocaleDateString()}</p>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td></tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default UsersPage