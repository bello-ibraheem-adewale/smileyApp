import React from 'react'
import { useState, useEffect } from 'react'
import { MdEmojiEmotions } from "react-icons/md";
import { BsEmojiFrownFill } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";





const State = () => {
    const [change, setchange] = useState(<IoAccessibility />
    )
    
    
    useEffect(() => {
      console.log(change);
    if (change.type === MdEmojiEmotions) {
      document.title = 'happy'
      
    } else if(change.type === BsEmojiFrownFill){
      document.title = 'broke'
}else if (change.type === FaHeartBroken ){
  document.title = 'breakFast'

}

        
      
    
      
    }, [change])
    
    const happy = () => {
        setchange(<MdEmojiEmotions/>)

    }

    const broke = () => {
        setchange(<BsEmojiFrownFill />
        )
    }
    const breakFast = () => {
        setchange(<FaHeartBroken />
        )
    }

    
  return (
    <div className='bg-orange-500 w-screen h-screen justify-center text-center align-middle'>
    <h1 className='items-center text-center justify-center flex'>{change}</h1>
    <div className='mt-5 gap-10 flex flex-row justify-center'>
    <button className='w-30 h-20 text-green-600' onClick={happy}>Happy Mood</button>
    <button className='w-30 h-20' onClick={broke}>Broke Mood</button>
    <button className='w-30 h-20' onClick={breakFast}>BreakFast Mood</button>
    </div>
    


    </div>
  )
}

export default State