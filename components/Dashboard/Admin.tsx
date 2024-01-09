'use client'

import { useSession } from 'next-auth/react'
import WelcamePage from './welcame/WelcamePage'

const Admin = () => {
  const { data: session } = useSession()
  return session?.user ? (
    <div className='relative'>
       <WelcamePage />
    </div>) 
    :(
    <div className='py-64 px-64'>
      Acces Denied, Login to Admin :)
    </div>)
}

export default Admin
