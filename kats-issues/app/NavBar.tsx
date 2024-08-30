// Only needed in Layout.tsx

import Link from 'next/link'
import React from 'react'
import { MdOutlineCleanHands } from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className="flex space-x-20 border-b mb-5 px-5 h-14 items-center">
        <Link className="shadow-3xl bg-green-100" href={"/"}><MdOutlineCleanHands /></Link>
        <ul className="flex space-x-20 ">
            <li className='text-green-500 hover:text-green-950 transition-colors'><Link href="/">Dashboard</Link></li>
            <li><Link href="/issues">Issues</Link></li>
            <li><Link href="/">Optional</Link></li>

        </ul>
    </nav>
  )
}

export default NavBar