import { Award, BotMessageSquare, Code2, CodeXml, Database, HandHeart, Laptop, MailOpen, MapPin, Phone, Presentation, Trophy } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1 className="abouthead">About Me</h1>
      <div className="intro">
        <h3>Hey there! 👋 I'm <strong>Ziya</strong></h3>
        <p>Hi, I'm Mohammad Ziya — a passionate full-stack developer and tech enthusiast currently pursuing B.Tech in CSIT. With a strong foundation in React, Node.js, and C++, I love building impactful projects that solve real-world problems. I've also been recognized in national-level hackathons like Code for Bharat. Let's build something meaningful together!</p>
      </div> 
      <div className="contacticon">
        <div className="aboutphone">
         <Phone fill="#BB06FC" size="30px"/>
         <span>Call</span>
        </div>
        <div className="aboutlocation">
          <MapPin fill="#61CE70" size="30px" />
          <span>Kanpur,India</span>
        </div>
        <div className="aboutsupport">
         <HandHeart fill="#FBFC06"  size="30px"/>
         <span>Support</span>
        </div>
        <div className="aboutemail">
         <MailOpen fill="#06B3FC" size="30px" />
         <span>Email</span>
        </div>
      </div>
      <h1 className="abouthead">My Services</h1>
      <div className="myservices">
        <div className="fullstack">
          <div className="encirclet">
          <CodeXml color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
          <h2 className="servicehead">Web Developement</h2>
           <span className="courierdetails">Crafting dynamic, responsive, and scalable full-stack web apps using React, Node.js, Express, and MongoDB.</span>
        </div>
        <div className="aiintegration">
           <div className="encirclet">
          <BotMessageSquare color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
           <h2 className="servicehead">Ai Integration</h2>
           <span className="courierdetails">Integrate intelligent features like real-time voice interviews, AI scoring, and chatbot systems using APIs like Vapi & Gemini.</span>
        </div>
        <div className="apidev">
             <div className="encirclet">
          <Database color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
           <h2 className="servicehead">Database Developement</h2>
            <span className="courierdetails">Designing robust REST APIs and managing secure, efficient database systems using MongoDB, Firestore, and Express.</span>
        </div>
        <div className="uiux">
              <div className="encirclet">
          <Laptop color="#ff9800" size="30px" strokeWidth={3}/>
          </div>
           <h2 className="servicehead">Frontend Design</h2>
            <span className="courierdetails">Building modern, accessible, and pixel-perfect UI with smooth user interactions using Tailwind, CSS3, and React animations.</span>
        </div>
      </div>
       <h1 className="abouthead">Achievements</h1>
       <div className="achievements">
        <div className="allfour">
              <div className="encirclet">
          <Trophy color="#ff9800" size="30px" strokeWidth={3}/>
           </div>
          <span className = "courierdetails">4th Rank @ National Hachathon</span>
         
        </div>
         <div className="allfour">
              <div className="encirclet">
          <Award color="#ff9800" size="30px" strokeWidth={3}/>
           </div>
          <span className = "courierdetails">CBSE Class 10th Maths Topper</span>
         
        </div>
         <div className="allfour">
              <div className="encirclet">
          <Code2 color="#ff9800" size="30px" strokeWidth={3}/>
           </div>
          <span className = "courierdetails">10+ Projects Deployed</span>
         
        </div>
         <div className="allfour">
              <div className="encirclet">
          <Presentation color="#ff9800" size="30px" strokeWidth={3}/>
           </div>
          <span className = "courierdetails">GenAI Workshop Conducted</span>
         
        </div>
       </div>
    </div>
  )
}

export default About
