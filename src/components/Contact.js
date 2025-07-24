import { HandHeart, MailOpen, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'

const Contact = () => {
    const[name,setname]=useState("Name");
    const[email,setemail]=useState("Email")
    const[subject,setsub]=useState("Subject")
    const[message,setmessage]=useState("Enter your message")
  return (
    <div className="contact">
         <h1 className="abouthead">Get in Touch</h1>
      <div className="contactimages">
        <div className="customimg">
          <img src="https://www.jamshidelmi.me/wp-content/uploads/2022/06/Contanct-us-png-vector-CV-website-Recovered-2.png" alt="/" height="100%" width="100%" />
        </div>
        {/* <div className="scanqr">
          
        </div> */}
      </div>
     <div className="contacticon">
        <div className="aboutphone1">
         <Phone fill="#BB06FC" size="30px"/>
         <span>Call</span>
        </div>
        <div className="aboutlocation1">
          <MapPin fill="#61CE70" size="30px" />
          <span>Kanpur,India</span>
        </div>
        <div className="aboutsupport1">
         <HandHeart fill="#FBFC06"  size="30px"/>
         <span>Support</span>
        </div>
        <div className="aboutemail1">
         <MailOpen fill="#06B3FC" size="30px" />
         <span>Email</span>
        </div>
      </div>
       <h1 className="abouthead">Let's Connect</h1>
       <form className ="contactform">
        <div className="nameemail">
            <input type="text" className="name1" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
             <input type="text" className="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div>
             <input type="text" className="subject" name="subject" value={subject} onChange={(e)=>{setsub(e.target.value)}}/>
              <input type="text" className="message" value={message} name="message" onChange={(e)=>{setmessage(e.target.value)}}/>
              <button className="submit"><Send color="grey"/>Send</button>
       </form>
    </div>
  )
}

export default Contact
