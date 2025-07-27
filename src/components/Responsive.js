import { Sun } from 'lucide-react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Responsive = () => {
  return (
    <div className ="responsiveheader">
        <div className="picname">
            <div className="pic">
                <img src = "./profileimg.jpg" alt="/" height="100%" width="100%" />
            </div>
            <div className="name2">
                <span className="na">Mohammad Ziya</span>
                <span className="me">
                    <Typewriter
                            words={['Full Stack Developer', 'Frontend Developer', 'Coder']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          />
                </span>
            </div>
        </div>
         <span className = "dark1">
        <Sun color="white" size="35px"/>
      </span>
      
    </div>
  )
}

export default Responsive
