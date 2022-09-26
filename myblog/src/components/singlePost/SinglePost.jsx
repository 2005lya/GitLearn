import './SinglePost.css'
import Image from '../../img/bizhi.jpeg'

export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={Image} alt="" className="singlePostImage" />
            <h1 className="singlePostTitle"> 
                front-end skills and frameworks.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b>Stephan</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                From 22 August, people receiving certain benefits can ask broadband firms to check their eligibility for social tariffs.
                This means customers will not have to take full responsibility for proving they qualify for low-cost options.
                Campaign group Digital Poverty Alliance described it as a positive first step but warned it did not go far enough.
                Elizabeth Anderson, chief operating officer for the Alliance, argues that, as more sectors moved essential resources and 
                services online ,"it's not right that a growing number of people face being cut off from the online world"
                From 22 August, people receiving certain benefits can ask broadband firms to check their eligibility for social tariffs.
                This means customers will not have to take full responsibility for proving they qualify for low-cost options.
                Campaign group Digital Poverty Alliance described it as a positive first step but warned it did not go far enough.
                Elizabeth Anderson, chief operating officer for the Alliance, argues that, as more sectors moved essential resources and 
                services online ,"it's not right that a growing number of people face being cut off from the online world"
                From 22 August, people receiving certain benefits can ask broadband firms to check their eligibility for social tariffs.
                This means customers will not have to take full responsibility for proving they qualify for low-cost options.
                Campaign group Digital Poverty Alliance described it as a positive first step but warned it did not go far enough.
                Elizabeth Anderson, chief operating officer for the Alliance, argues that, as more sectors moved essential resources and 
                services online ,"it's not right that a growing number of people face being cut off from the online world"
            </p>
        </div>
    </div>
  )
}
