import style from "./style.module.css"
import imag1 from "./assets/1683825076521.jpg"
import { Button } from "@mui/material"
import { useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useContext } from "react"
import { Themevalue } from "../App"





const About=()=>{
    let {theme}=useContext(Themevalue);
    let [more,setMore]=useState(false)
    let openmore=()=>{
        if (more==false) {
            setMore(true)    
        }
        // else{
        //     setMore(false)
        // }
    }
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <section id={style.about} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
            <div id={style.Aimgblock}>
               <img className={style.img}  src={imag1} alt="" />
            </div>
            <div id={style.Aconblock}  data-aos="fade-right">
                <h1 className={style.Atitle} >About <span style={{color:"aqua"}}>me</span></h1>
                <h1 className={style.Asubtitle}  >Mern Full Stack Developer</h1>
                <p  className={style.Apara} style={{height:more?"auto":"19vh",overflowY:"hidden"}}>I am Shanmugam,a BSC Graduate student in Computer Science from Arignar Anna College (Arts & Science) Krishnagiri.Passed out in the year 2023 with a CGPA of 7.4 .After completing my Graduation, I joined Jspiders to purse MERN Full Stack Developer Course and to learn Industry standard Practices.Here I am learning both Front-end & Back-end technologies.I am confident working on Frontend  technologies like HTML, CSS, JAVASCRIPT, REACT.JS .I am equally good working on Backend technologies like NODE.JS, EXPRESS.JS . I am capable of  handling SQL Queries also.I have worked on 6 Projects using these technologies with the guidence of the faculty at Jspiders.I consider myself as a result oriented person, I usually complete the tasks before the deadlines.I am adaptable to work in teams, I take the feedback of the seniors positively.I am willing to work under the guidence of seniors.I am here seeking opportunity to put my education & skills into real-time project work.I want mentorship to groom my skills for the future projects of the company.I will be happy to get this opportunity & I am sure I will not disappoint my selection.</p>
                <Button onClick={openmore} variant="contained" color="inherit" sx={{height:"40px",width:"150px",borderRadius:"20px",color:"black",backgroundColor:"aqua",fontWeight:"bolder",marginTop:"20px",display:more?"none":"block"}}>Read more</Button>

            </div>
        </section>
    )
}
export default About