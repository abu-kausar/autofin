import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileForm from './ProfileForm'

const ProfileComponent = () => {
  return (
    <div className='flex flex-col'>
      <ProfileHeader/>
      <ProfileForm/>
    </div>
  )
}

export default ProfileComponent