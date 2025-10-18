import React from 'react'
import icon from '../../assets/svg/iconProfile.svg'
import call from '../../assets/svg/iconCall.svg'
import sms from '../../assets/svg/iconSMS.svg'
import dots from '../../assets/svg/iconDots.svg'
import Navbar from './Navbar'
import Categories from './Categories'


const Chat = () => {
  return (
    <>
    <Navbar/>
    <Categories/>

      <div className="chat">
        <div className="sidebar">
          <h2 className='inbox'>Inbox</h2>
        <div className='msg'>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="inbox-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
        </div>
        </div>
        <div className="chat-container">
            <div className="top-bar">
              
             <div className="inbox-bar chat-bar">
                <div className="profile"><img src={icon} alt="" /></div>
            <div className="profile-name">Abdul Bari</div>
            </div>
            <div className="actions">
              <img src={call} alt="" className='action-img'/>
              <img src={sms} alt="" className='action-img'/>
              <img src={dots} alt="" className='action-img'/>
            </div>
            </div>
            <div className="bottom-bar">
             <i className="fa-solid fa-link"></i>
             <input type="text" placeholder='Type a message' className='chat-input'/>
             <i className="fa-solid fa-paper-plane"></i>
            </div>
        </div>
    
      </div>
    </>
  )
}

export default Chat
