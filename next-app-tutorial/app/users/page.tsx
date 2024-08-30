import React from 'react'

interface User {
    id: number;
    name: string;
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
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default UsersPage