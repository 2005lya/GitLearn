import './Header.css';
import headerImg from '../../img/bizhi.jpeg'

export default function header() {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
        className='headerImg'
        src={headerImg} alt="" />
    </div>
  )
}
