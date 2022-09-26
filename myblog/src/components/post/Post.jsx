import './Post.css'
import { Link } from 'react-router-dom'
import bizhi from '../../img/bizhi.jpeg'
export default function Post() {
  return (
    <div className='post'>
        <img 
        className='postImg'
        src={bizhi} 
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                <Link to='/post/:postId' className='link'>spanasgfhskdjgl</Link>
            </span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className='postDesc'>
           I possess technical skills including front-end skills and frameworks. 
           I bring a passion to a position where integrity and hard work are most fundamental.
           I possess technical skills including front-end skills and frameworks. 
           I bring a passion to a position where integrity and hard work are most fundamental.
           I possess technical skills including front-end skills and frameworks. 
           I bring a passion to a position where integrity and hard work are most fundamental.
           I possess technical skills including front-end skills and frameworks. 
           I bring a passion to a position where integrity and hard work are most fundamental.
        </p>
    </div>
  )
}
