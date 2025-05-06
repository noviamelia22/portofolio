import React from 'react'
import './MyWork.css'
import mywork_logo from '../../assets/logo2.png'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='certificate' className='mywork'>
        <div className="mywork-title">
            <h1>My certificate</h1>
            <img src={mywork_logo} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <i className="fas fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default MyWork
