import React from 'react'

const Profile = () => {
    const user=JSON.parse(localStorage.getItem('user'))
  return (
    <>
        <h1>{user.username}</h1>
    </>
  )
}

export default Profile