import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to = {'/addproduct'} style={{textDecoration: 'none'}}>
            <div className="sidebar-item">
                <div>add product icon</div>
                <p>add product</p>
                <div>product list icon</div>
                <p>product list</p>
            </div>

        </Link>
    </div>
  )
}

export default Sidebar