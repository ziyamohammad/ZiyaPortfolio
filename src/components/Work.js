import React, { useState } from 'react'

const Work = () => {
    const[subhead,Setsubhead]=useState("all")
    const[webarray,setwebarray]=useState([
        {
            webimg:"./CareConnect.png",
            webname:"CareConnect",
            webhref:"https://semicolon-frontend.vercel.app/"
        },
         {
            webimg:"./ECOMMERCE.png",
            webname:"Meesho Ecommerce Clone",
             webhref:"https://meesho-ecommerceclone.vercel.app/"
        },
         {
            webimg:"./Game.png",
            webname:"Card Flip Guess Game",
             webhref:"https://card-guess.vercel.app/"
        },
         {
            webimg:"./currency.png",
            webname:"Crypto Currency Tracker",
             webhref:"https://currencttracker.vercel.app/"
        },
         {
            webimg:"./AI.png",
            webname:"Prepwise:AI Interviewer Platform",
             webhref:"https://societyproject.vercel.app/"
        },
         {
            webimg:"./registration form.png",
            webname:"Workshop Registration Form",
             webhref:"https://genaievent.vercel.app/"
        }

    ])
const[certificate,setcertificate]=useState([
    {
        certimg:"./Infosys Cyber (2).png",
        certiname:"Python Programming"
    },
     {
        certimg:"./Infosys cyber.png",
        certiname:"Cyber Security"
    },
     {
        certimg:"./nation building.png",
        certiname:"Participation in National Hackathon"
    },
     {
        certimg:"./vyto.png",
        certiname:"Vytoflow hackathon Participation"
    }, {
        certimg:"./mlsamiet.png",
        certiname:" 4th position DevGathering 2K25 "
    },
])
  return (
    <div className="works">
      <div className="workhead">
        <h2 className = "headingwork">Works</h2>
        <div className="subhead">
             <span className = {subhead==="all" ?"notall":"all"} onClick={()=>{Setsubhead("all")}}>All</span>
            <span className ={subhead==="websites" ?"notwebsite":"website"}  onClick={()=>{Setsubhead("websites")}}>Website</span>
            <span className={subhead==="certificates" ?"notcertificate":"certificate"} onClick={()=>{Setsubhead("certificates")}}>Certificates</span>
        </div>
      </div>
      {(subhead==="all" || "websites" || "certificates") && (
            <div className ="allworks">
               {(subhead==="all" || subhead==="websites" )&&(
                <div className="allwebsites">
                  {webarray.map((item)=>{
                    return(
                        <div className="webapp">
                            <a href ={item.webhref} target="_blank" rel="noreferrer" className="webimage">
                            <img src={item.webimg} alt="/" height="100%" width="100%"/></a>
                            <span className="webname">{item.webname}</span>
                             <span className="common">Website</span>
                        </div>
                    )
                  })}
                </div>
               )}
                {(subhead==="all" || subhead=== "certificates" )&&(
                <div className="allcertificates">
                    {certificate.map((item)=>{
                    return(
                        <div className="webapp">
                            <div className="webimage">
                               <img src={item.certimg} alt="/"  height="100%" width="100%"/>
                            </div>
                           
                            <span className="webname">{item.certiname}</span>
                             <span className="common">Certificate</span>
                        </div>
                    )
                  })}
                </div>
               )}

            </div>
       
      )}
    </div>
  )
}

export default Work
