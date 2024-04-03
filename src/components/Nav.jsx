import style from "./style.module.css"
import {Link} from "react-scroll"
import { useContext } from "react"
import { Themevalue } from "../App"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav=()=>{
    let {theme}=useContext(Themevalue);
    let {toggletheme}=useContext(Themevalue);
    let [ismobile,setIsmobile]=useState(false)
    return(
        <section id={style.nav} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white",boxShadow:theme?"0px 0px 5px rgb(39,39,39) ":"0px 0px 5px whitesmoke"}}>
            
                <h1> <span style={{color:"aqua"}}>D</span>EVELOPE <span style={{color:"aqua"}}>R</span></h1>
            
           
                <ul className={ismobile?style.mobilemenu:style.pcmenu} style={{color:theme?"black":"white"}} onClick={()=>{setIsmobile(false)}}>
                    <li><Link to={style.home}>HOME</Link></li>
                    <li><Link to={style.about}>ABOUT</Link></li>
                    <li><Link to={style.skills}>SKILLS</Link></li>
                    <li><Link to={style.project}>PROJECT</Link></li>
                    <li><Link to={style.contact}>CONTACT</Link></li>
                    <li onClick={toggletheme}>  {theme?<DarkModeIcon sx={{fill:"black",marginTop:"4px"}}/>:<LightModeIcon sx={{fill:"white",marginTop:"4px"}}/>}</li>
                </ul>

                <button onClick={()=>{setIsmobile(!ismobile)}} style={{height:"25px",width:"25px",border:"none"}}>
                    {ismobile?<CloseIcon sx={{backgroundColor:"aqua",height:"100%",width:"100%"}}/>:<MenuIcon sx={{backgroundColor:"aqua",height:"100%",width:"100%"}}/>}
                </button>
        
        </section>
    )
}
export default Nav