import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import bizhi from '../../img/bizhi.jpeg'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
              <img src={bizhi} alt="" />
              <label htmlFor="fileInput">
                  <i className="settingPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder='Stephan' />
          <label>Email</label>
          <input type="email" placeholder='email' />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">submit</button>
          
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  )
}
