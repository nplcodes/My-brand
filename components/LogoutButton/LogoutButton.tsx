'use client'

import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <div>
       <li className='bg-red-500 px-3 py-2 text-white cursor-pointer hover:bg-black' onClick={()=> signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/login`
        })}>

        Sign Out

        </li>
    </div>
  )
}

export default LogoutButton