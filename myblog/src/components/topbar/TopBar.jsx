import React from './TopBar.css';
import mengmeng from '../../img/mengmeng.jpg'
import { Link } from 'react-router-dom'

export default function TopBar() {
  const user = true; 
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-tiktok"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">
                <Link to='/' className='link'>HOME</Link>
                </li>
              <li className="topListItem">
              <Link to='/Sidebar' className='link'>ABOUT</Link>
              </li>
              <li className="topListItem">
              <Link to='/contact' className='link'>CONTACT</Link>
              </li>
              <li className="topListItem">
              <Link to='/write' className='link'>WRITE</Link>
              </li>
              <li className="topListItem">
              <Link to='/Login' className='link'>SETTINGS</Link>
              </li>
              

          </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <>
              <img className='topImg' src={mengmeng} alt="" />
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
              </>
          ): (
            <ul className='topList'>
              <li className='topListItem'>
                  <Link  className='link' to='./login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                  <Link  className='link' to='./register'>REGISTER</Link>
              </li>
            </ul>
          ) 
        }
      </div>
    </div>
  )
}
