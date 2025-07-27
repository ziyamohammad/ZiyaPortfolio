import { HandHeart, MailOpen, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {
    const[name,setname]=useState("Name");
    const[email,setemail]=useState("Email")
    const[subject,setsub]=useState("Subject")
    const[message,setmessage]=useState("Enter your message")
    const phone = "6387034769" ;
      const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs
          .send(
            "service_4r3d0ha", // Replace with your EmailJS Service ID
            "template_heuei0i", // Replace with your EmailJS Template ID
            {
                name,              // Passing individual fields
                email,
                subject,
                message,
              },
            "R_SWFGG_XmrW_H6yx" // Replace with your EmailJS Public User ID
          )
          .then(
            (response) => {
              // console.log("SUCCESS!", response.status, response.text);
              alert("Email sent successfully!");
            },
            (error) => {
              console.error("FAILED...", error);
              alert("Failed to send email. Please try again later.");
            }
          );
          const updatename="Full Name"
          const updateemail="Email Address"
          const updatemessage="Enter your Message"

          setname("Name")
          setemail("Email")
          setsub("Subject")
          setmessage("Enter your message")
        }
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
         <a href={`tel:${phone}`} className="aboutphone1">
         <Phone fill="#BB06FC" size="30px"/>
         <span>Call</span>
        </a>
        <a href ="https://www.google.com/maps/place/AKGEC+Central+Library/@28.6765587,77.4980679,17z/data=!3m1!4b1!4m6!3m5!1s0x390cf243b9724ab7:0x8b006649d0d90739!8m2!3d28.6765587!4d77.5006428!16s%2Fg%2F11bxdylpv8?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="aboutlocation1">
          <MapPin fill="#61CE70" size="30px" />
          <span>Delhi,India</span>
        </a>
         <a href="https://www.instagram.com/ziya_mohammad_.123/" target="_blank" className="aboutsupport1">
         <HandHeart fill="#FBFC06"  size="30px"/>
         <span>Support</span>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="aboutemail1">
         <MailOpen fill="#06B3FC" size="30px" />
         <span>Email</span>
        </a>
      </div>
       <h1 className="abouthead">Let's Connect</h1>
       <form className ="contactform">
        <div className="nameemail">
            <input type="text" className="name1" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} onClick={()=>{setname("")}}/>
             <input type="text" className="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} onClick={()=>{setemail("")}}/>
        </div>
             <input type="text" className="subject" name="subject" value={subject} onChange={(e)=>{setsub(e.target.value)}} onClick={()=>{setsub("")}}/>
              <input type="text" className="message" value={message} name="message" onChange={(e)=>{setmessage(e.target.value)}} onClick={()=>{setmessage("")}}/>
              <button className="submit" onClick={handleSubmit}><Send color="grey"/>Send</button>
       </form>
    </div>
  )
}

export default Contact
