import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import React from 'react'

const Resume = () => {
  return (
    <div className="resume">
       <h1 className="abouthead">Resume</h1>
       <div className="eduexp">
       <div className="experience">
         <div className="exphead">
           <div className="encirclet">
          <BriefcaseBusiness color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
          <h1 className="experiencehead">Experience</h1>
         </div>
         <div className="logocontent">
          <div className="logo">
             <div className="organization">
               <span className = "tenure">
                2024-Present
               </span>
               <span className="position">Web Developer</span>
               <span className ="orgname">Machine Learning Centre Of Excellence</span>
             </div>
             <div className="orglogo">
              <img src ="./logo1.png" alt="/" height="100%" width="100%"/>
             </div>
          </div>
          <div className="experiencecontent">
            <ul>
              <li>Website Maintenance</li>
              <li>UI/UX Design</li>
              <li>Frontend Developement</li>
            </ul>
          </div>
         </div>
       </div>
       <div className="education">
         <div className="eduhead">
           <div className="encirclet">
          <GraduationCap color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
          <h1 className="experiencehead">Education</h1>
         </div>
          <div className="logocontent">
          <div className="edulogo">
             <div className="organization">
               <span className = "tenure">
                2023-Present
               </span>
               <span className="position">B.Tech in Computer Science (Honours)</span>
               <span className ="uniname">Ajay Kumar Garg Engineering College</span>
             </div>
             <div className="unilogo">
              <img src ="./akgec.png" alt="/" height="100%" width="100%"/>
             </div>
          </div>
          </div>
            <div className="logocontent">
          <div className="edulogo">
             <div className="organization">
               <span className = "tenure1">
                2021-22
               </span>
               <span className="position">Senior Secondary</span>
               <span className ="uniname1">Virendra Swarup Education Centre</span>
             </div>
             <div className="unilogo">
              <img src ="./vsec.png" alt="/" height="100%" width="100%"/>
             </div>
          </div>
          </div>
             <div className="logocontent">
          <div className="edulogo">
             <div className="organization">
               <span className = "tenure1">
                2020-21
               </span>
               <span className="position">High School</span>
               <span className ="uniname1">Virendra Swarup Education Centre</span>
             </div>
             <div className="unilogo">
              <img src ="./vsec.png" alt="/" height="100%" width="100%"/>
             </div>
          </div>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Resume
