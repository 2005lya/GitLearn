import './Sidebar.css'
import me from '../../img/me.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src={me} alt="" />
          <p> 
            I'm a self-driven and highly committed graduate seeking a 
            role as a software developer. I possess technical skills 
            including front-end skills and frameworks. 
          </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATERGORIES</span>
          <ul className="sidebarList">
              <li className='sidebarListItem'>Life</li>
              <li className='sidebarListItem'>Music</li>
              <li className='sidebarListItem'>Style</li>
              <li className='sidebarListItem'>Sport</li>
              <li className='sidebarListItem'>Tech</li>
              <li className='sidebarListItem'>Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
          <span className='sidebarTitle'>FOLOOW US</span>
          <div className="sidebarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-github"></i>
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
          <i className="sideBarIcon fa-brands fa-tiktok"></i>
      </div>
      </div>
    </div>
  )
}
