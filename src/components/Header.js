import { BookOpen, BookText, CircleUser, Laptop, Medal, Send, Sun } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate();
 const [activeTab, setActiveTab] = useState("");
  const handleabout= () =>{
    navigate("/about")
    setActiveTab("about");
  }
   const handleresume= () =>{
    navigate("/resume")
      setActiveTab("resume");
  }
  return (
    <div className="header">
      <span className = "dark">
        <Sun color="white" size="35px"/>
      </span>
      <div className = "headitems">
       <div className = "abouticon" onClick={handleabout}  onMouseEnter={()=>{ setActiveTab("about")}} onMouseLeave={()=>{setActiveTab("")}}>
         <div className={activeTab === "about" ? "circleitem" : "displaynone"}></div>
         <CircleUser color={activeTab === "about" ? "#ff9800" : "white"} />
         <span className={activeTab === "about" ? "abouttextcolour" : "abouttext"}>ABOUT</span>
         
       </div>
        <div className = "abouticon" onClick={handleresume} onMouseEnter={()=>{ setActiveTab("resume")}}  onMouseLeave={()=>{setActiveTab("")}}>
           <div className={activeTab === "resume" ? "circleitem1" : "displaynone"}></div>
          <BookText color={activeTab === "resume" ? "#ff9800" : "white"} />
           <span className={activeTab === "resume" ? "abouttextcolour" : "abouttext"}>RESUME</span>
       </div>
        <div className = "abouticon" onClick={()=>{navigate("/works")
          setActiveTab("works")
        }} onMouseEnter={()=>{ setActiveTab("works")}}  onMouseLeave={()=>{setActiveTab("")}}>
        <div className={activeTab === "works" ? "circleitem2" : "displaynone"}></div>
         <BookOpen color={activeTab === "works" ? "#ff9800" : "white"}/>
         <span className={activeTab === "works" ? "abouttextcolour" : "abouttext"}>WORKS</span>
       </div>
        <div className = "abouticon" onClick={()=>{navigate("/skills")
          setActiveTab("skills")
        }} onMouseEnter={()=>{ setActiveTab("skills")}}  onMouseLeave={()=>{setActiveTab("")}}>
           <div className={activeTab === "skills" ? "circleitem3" : "displaynone"}></div>
         <Laptop color={activeTab === "skills" ? "#ff9800" : "white"}/>
         <span className={activeTab === "skills" ? "abouttextcolour" : "abouttext"}>SKILLS</span>
       </div>
        <div className = "abouticon" onClick={()=>{navigate("/contact")
          setActiveTab("contact")
        }} onMouseEnter={()=>{ setActiveTab("contact")}}  onMouseLeave={()=>{setActiveTab("")}}>
        <div className={activeTab === "contact" ? "circleitem4" : "displaynone"}></div>
         <Send color={activeTab === "contact" ? "#ff9800" : "white"}/>
         <span className={activeTab === "contact" ? "abouttextcolour" : "abouttext"}>Contact</span>
       </div>
      </div>

    </div>
  )
}

export default Header
