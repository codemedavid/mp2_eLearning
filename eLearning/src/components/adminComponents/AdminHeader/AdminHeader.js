import React from 'react'
import './adminHeader.css'
import { Link } from 'react-router-dom'
function AdminHeader() {
  return (
    <div className='px-4'>
      <div className="navbar bg-base-100">
       <div className="navbar-start">
       <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
       </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/'}>Dashboard</Link></li>
        <li><Link to={'/admin'}>Add Course</Link></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
      <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">Instructor</a>
      </div>
  
  </div>
    </div>
  )
}

export default AdminHeader
