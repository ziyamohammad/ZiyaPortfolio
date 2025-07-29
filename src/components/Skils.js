import { Brain, Code, Monitor, Server, ToolCase } from 'lucide-react'
import React, { useState } from 'react'
import { FaHtml5 , FaCss3Alt , FaJs,FaReact, FaNodeJs, FaGithub, FaDatabase, FaBug, FaLock, FaJava, FaPython} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiCplusplus, SiExpress , SiMongodb, SiPostman, SiRender} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoLogoFirebase , IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

import { MdDevices } from "react-icons/md";

const Skils = () => {
    const[frontend,setfrontend]=useState([
        {
            tech:<FaHtml5 size="30px" color="#E34F26"/>,
            techname:"HTML5"
        },
         {
            tech:<FaCss3Alt size="30px" color="#1572B6"/>,
            techname:"CSS3"
        },
         {
            tech:< FaJs size="30px" color="#F7DF1E"/>,
            techname:"JavaScript"
        },
         {
            tech:<FaReact size="30px" color="#61DAFB"/>,
            techname:"React"
        },
         {
            tech:<RiTailwindCssFill size="30px" color="#38BDF8"/>,
            techname:"Tailwind CSS"
        },
    ])
     const[backend,setbackend]=useState([
        {
            tech:<FaNodeJs size="30px" color="339933"/>,
            techname:"Node"
        },
         {
            tech:<SiExpress size="30px" color="#000000"/>,
            techname:"Express"
        },
         {
            tech:<SiMongodb size="30px" color="#47A248"/>,
            techname:"Mongodb"
        },
         {
            tech:<TbApi size="30px" color="#4479A1"/>,
            techname:"RestAPI"
        },
         {
            tech:<IoLogoFirebase  size="30px" color="#FFCA28"/>,
            techname:"Firebase"
        },
    ])
    const[tools,settools]=useState([
        {
            tech:<FaGithub size="30px" color="#F05032"/>,
            techname:"Git/Github"
        },
         {
            tech:<IoLogoVercel size="30px" color="#000000"/>,
            techname:"Vercel"
        },
         {
            tech:<SiRender size="30px" color="#47A248"/>,
            techname:"Render"
        },
         {
            tech:<SiPostman size="30px" color="#FF6C37"/>,
            techname:"Postman"
        },
         {
            tech:<VscVscode size="30px" color="#007ACC"/>,
            techname:"Vs Code"
        },
    ])

     const[others,setothers]=useState([
        {
            tech:<FaDatabase size="30px" color="#47A248"/>,
            techname:"Localstorage"
        },
         {
            tech:<MdDevices size="30px" color="#e6f3f9ff"/>,
            techname:"Responsive Designs"
        },
         {
            tech:<FaBug size="30px" color="#f84e38ff"/>,
            techname:"Debugging"
        },
         {
            tech:<FaLock size="30px" color="#d5b204ff"/>,
            techname:"Otp Systems"
        },
    ])
     const[language,setlanguage]=useState([
        {
            tech:< SiC size="30px" color="#A8B9CC"/>,
            techname:"C"
        },
         {
            tech:<SiCplusplus size="30px" color="#00599C"/>,
            techname:"C++"
        },
         {
            tech:<FaJava size="30px" color="#f89820"/>,
            techname:"Java(Basic)"
        },
         {
            tech:<FaPython size="30px" color="#FFD43B"/>,
            techname:"Python(Basic)"
        },
    ])
  return (
    <div className = "Skills">
       <h1 className="abouthead">Skills</h1>
       <div className="allfourskills">
        <div className="frontend">
           <div className="exphead">
             <div className="encirclet">
              <Monitor color="#ff9800" size="20px" strokeWidth={3}/>
             </div>
             <h1 className="experiencehead">Frontend</h1>
           </div>
           <div className="frontendicons">
            {frontend.map((item)=>{
                return(
                    <div className="iconandname">
                        {item.tech}
                        <span className="techname">{item.techname}</span>
                    </div>
                )
            })}
           </div>
        </div>
        <div className="backend">
          <div className="exphead">
             <div className="encirclet">
              <Server color="#ff9800" size="20px" strokeWidth={3}/>
             </div>
             <h1 className="experiencehead">Backend</h1>
           </div>
           <div className="frontendicons">
            {backend.map((item)=>{
                return(
                    <div className="iconandname">
                        {item.tech}
                        <span className="techname">{item.techname}</span>
                    </div>
                )
            })}
           </div>
        </div>
        <div className="AIintegration">
          <div className="exphead">
             <div className="encirclet">
              <ToolCase color="#ff9800" size="20px" strokeWidth={3}/>
             </div>
             <h1 className="experiencehead">Tools</h1>
           </div>
           <div className="frontendicons">
            {tools.map((item)=>{
                return(
                    <div className="iconandname">
                        {item.tech}
                        <span className="techname">{item.techname}</span>
                    </div>
                )
            })}
           </div>
        </div>
        <div className="Tools">
          <div className="exphead">
             <div className="encirclet">
              <Brain color="#ff9800" size="20px" strokeWidth={3}/>
             </div>
             <h1 className="experiencehead">Others</h1>
           </div>
           <div className="frontendicons">
            {others.map((item)=>{
                return(
                    <div className="iconandname">
                        {item.tech}
                        <span className="techname">{item.techname}</span>
                    </div>
                )
            })}
           </div>
        </div>
         <div className="Languages">
          <div className="exphead">
             <div className="encirclet">
              <Code color="#ff9800" size="20px" strokeWidth={3}/>
             </div>
             <h1 className="experiencehead">Languages</h1>
           </div>
           <div className="frontendicons">
            {language.map((item)=>{
                return(
                    <div className="iconandname">
                        {item.tech}
                        <span className="techname">{item.techname}</span>
                    </div>
                )
            })}
           </div>
        </div>
       </div>
    </div>
  )
}

export default Skils
