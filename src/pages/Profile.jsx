import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Global_Context } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/supabase'

const Profile = () => {
  const {user} = useAuth()
  const {setSignedOut} = Global_Context()
  const navigate  = useNavigate()
  const handleSignOut = async()=>{
    const {error} = await supabase.auth.signOut()
    setSignedOut(true)
    if(error){
      console.error(error)
    }
    navigate('/')
  }
  return (
    <div className='container-px max-w-7xl mx-auto pt-8 sm:pt-12'>
        logged in as {user?.user_metadata?.username}
        <button className='p-1 bg-red-500 rounded-2xl cursor-pointer mx-1 text-white px-2 hover:bg-red-700' onClick={handleSignOut}>
          Log out
        </button>
    </div>
  )
}

export default Profile
