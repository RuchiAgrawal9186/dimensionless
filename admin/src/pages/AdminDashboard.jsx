import React from 'react'
import SideBar from '../Components/SideBar'
import RightDiv from '../Components/RightDiv'


const AdminDashboard = () => {
  return (
    <>
    <div className='Container'>
        <div className='sidebar'>
        <SideBar></SideBar>
        </div>

        <div className='rightdiv'>
        <RightDiv></RightDiv>
        </div>
        
        
    </div>
    </>
  )
}

export default AdminDashboard