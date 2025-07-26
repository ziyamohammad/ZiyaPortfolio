import React from 'react'
import About from './About'
import Resume from './Resume'
import Work from './Work'
import Skils from './Skils'
import Contact from './Contact'

function Fullpage() {
  return (
    <div className="fullpage">
       <About/>
       <Resume/>
       <Work/>
       <Skils/>
       <Contact/>
      
    </div>
  )
}

export default Fullpage
