import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
function Sidebar() {
  const [extended, setExtended] = useState(true)
  const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context)
  const loadPrompt=async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt);
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended && <p>chat</p>}
        </div>
        {extended &&
          <div className="recent">
            <p className='recent-title'>recent</p>
            {prevPrompts.map((item,i) => {
              return (
                <div  key={i} onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              )
            })}

          </div>
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar