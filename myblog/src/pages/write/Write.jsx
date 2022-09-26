import './write.css'
import bizhi from '../../img/bizhi.jpeg'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src={bizhi} alt="" />
      <form className='writeForm'>
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}}/>
              <input type="text" placeholder='title' className='writeInput' autoFocus/>
          </div>
          <div className="writeFormGroup">
              <textarea placeholder='tell me your story' type='text' className='writeInput writeText'></textarea>
          </div>
          <button className='writeSubmit'>publish</button>
      </form>
    </div>
  )
}
