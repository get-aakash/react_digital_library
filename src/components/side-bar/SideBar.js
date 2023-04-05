import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <h3>Welcome</h3>
            <hr />
            <ul>
            <li><Link to="/admin/books">Books</Link></li>
            <li><Link to="/admin/new">New Book</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/profile">Profile</Link></li>
              
            </ul>
    </div>
  )
}

export default SideBar
