import style from "./style.module.css"
import empimg from "./assets/employee.jpg"
import spoimg from "./assets/spotify.jpg"
import netimg from "./assets/netflix.png"
import disimg from "./assets/discord.png"
import swigimg from "./assets/Swiggy.jpg"
import primimg from "./assets/prime.jpeg"
import { Button } from "@mui/material"
import { Themevalue } from "../App"
import { useContext } from "react"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState,useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"





const Project=()=>{
    let {theme}=useContext(Themevalue)
    let [viewmore,setviewmore]=useState(false)
    let seemore=()=>{
         setviewmore(true)
    }

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <section id={style.project} style={{height:viewmore?"auto":"auto", backgroundColor:theme?"white":"black",color:theme?"black":"white",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
            <h1 data-aos="fade-up">Latest <span style={{color:"aqua"}}>Project</span></h1>
            <article id={style.mainblock}  style={{height:viewmore?"auto":"100%"}}>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  >
                        <img src={empimg}  alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Employee Management</h1>
                        <h2>Mern project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/Employeemanagement" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  style={{height:"100%",width:'100%',borderRadius:"20px"}}>
                        <img src={spoimg} height="100%" width="100%" style={{borderRadius:"10px"}} alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Spotify</h1>
                        <h2>UI/UX project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/Spotify" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  style={{height:"100%",width:'100%',borderRadius:"20px"}}>
                        <img src={netimg} height="100%" width="100%" style={{borderRadius:"10px"}} alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Netflix</h1>
                        <h2>UI/UX project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/Netflix" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  style={{height:"100%",width:'100%',borderRadius:"20px"}}>
                        <img src={disimg} height="100%" width="100%" style={{borderRadius:"10px"}} alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Discord</h1>
                        <h2>UI/UX project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/Discord" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  style={{height:"100%",width:'100%',borderRadius:"20px"}}>
                        <img src={swigimg} height="100%" width="100%" style={{borderRadius:"10px"}} alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Swiggy</h1>
                        <h2>UI/UX project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/swiggy" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>

                <div data-aos="fade-up" style={{marginTop:"30px",boxShadow:theme?"0px 0px 5px black":"0px 0px 5px white"}}>
                    <div  style={{height:"100%",width:'100%',borderRadius:"20px"}}>
                        <img src={primimg} height="100%" width="100%" style={{borderRadius:"10px"}} alt="" />
                    </div>
                    <div className={style.hovercontent} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <h1>Prime Video</h1>
                        <h2>UI/UX project</h2>
                        <h1>Explore this</h1>
                        <a href="https://github.com/Shanmugam070702/Primevideo" target="_blank" style={{textDecoration:"none",color:"none"}}><OpenInNewIcon sx={{fill:theme?"black":"white"}}/></a>
                        
                    </div>
                </div>
            </article>
        {/* <Button onClick={seemore} variant="contained" color="inherit" sx={{display:viewmore?"none":"block",height:"40px",width:"150px",borderRadius:"20px",backgroundColor:"aqua",color:"black",fontWeight:"bold"}}>see more</Button> */}

        </section>
    )
}
export default Project