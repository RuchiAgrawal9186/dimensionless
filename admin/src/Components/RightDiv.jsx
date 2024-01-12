import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { TiMicrophone } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import Tabel from './Tabel';
import Tabel1 from './Tabel1';
import DonutChart from './DonutChart';
import BubbleChart from './BubbleChart';
import { FaUserAstronaut } from "react-icons/fa";

const RightDiv = () => {
  return (
    <>
    <div className='topdiv'>

    <div className='searchdiv'>
    <IoIosSearch fontSize="1.5em"/>
    <input type="text" placeholder='Search your question here...'/>
    <TiMicrophone color="blue" fontSize="1.5em"/>
    </div>

    <div className='rightmenu'>
    <IoIosNotifications fontSize="1.5em"/>
    <div className='circle'>
    <FaUserAstronaut />
    </div>
    <h3>Username</h3>
    </div>
   
    </div>

    <div className='seconddiv'>

      <div className='left'>
        <h4 style={{color:"blue"}}>Current License</h4>
        <h4>USD/CAD</h4>
        <h4>AUD/USD</h4>
      </div>

      <div className='right'>
        <h3>Welcome,Username</h3>
        <p>Good to see you again</p>
      </div>

    </div>
       

    <div className='middlediv'>

      <div className='left'>
        <h3>News & Data Flow</h3>
         <BubbleChart></BubbleChart>
         
      </div>

      <div className='right'>
      <h3 style={{textAlign:"center"}}>Average Score</h3>

        <div>
          <div> <DonutChart></DonutChart></div>
          <div>
          <p>75%</p>
          <p>About Graph </p>
          <p>see details</p>
          </div>
        </div>
      
      </div>

    </div>

    <div className='lastdiv'>

      <div className='left'>

      <div className="tablediv">
            <h2>Refined News & Data Flow</h2>
            <Tabel></Tabel>
      </div>

      </div>

      <div className='right'>

      <div className="tablediv">
            <h3>Top 10 Focus Topics</h3>
            <Tabel1></Tabel1>
      </div>

    </div>

    </div>
     
    </>
  )
}

export default RightDiv
