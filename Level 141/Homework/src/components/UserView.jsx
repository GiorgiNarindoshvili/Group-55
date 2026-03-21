import React from 'react'

const UserView = ({ users }) => {
  return (
    <ul>
        {users.map(user => (
            <li id = {user.id}>{user.name1}</li>
        ))}
    </ul>
  )
}

export default UserView