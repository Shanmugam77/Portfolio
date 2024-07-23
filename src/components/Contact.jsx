import style from "./style.module.css"
import { useContext,useState,useEffect } from "react"
import { Themevalue } from "../App"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField,Button } from "@mui/material";
import Aos from "aos"
import "aos/dist/aos.css"
import axios from "axios";




const Contact=()=>{
    let {theme}=useContext(Themevalue);
    let [Name,setName]=useState("");
    let [Email,setEmail]=useState("");
    let [Message,setMessage]=useState("");
    let [namevaild,setNamevalid]=useState(false)
    let [emailvalid,setEmailvalid]=useState(false)
    let [messagevalid,setMessagevalid]=useState(false)
    let emailregex=/[a-zA-Z0-9].*@gmail.com$/

    let getname=(e)=>{
        setName(e.target.value)
        if (e.target.value.length>=4) {
            setNamevalid(false)
        }
    }
    let getemail=(e)=>{
        setEmail(e.target.value)
        if (e.target.value.match(emailregex)) {
            setEmailvalid(false)
        }
    }
    let getmessage=(e)=>{
        setMessage(e.target.value)
        if (e.target.value.length>=10) {
            setMessagevalid(false)
        }
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        if (Name.length>=4 && Email.match(emailregex) && Message.length>=10) {
            let payload={Name,Email,Message}
            console.log(payload);
            axios.post("https://formspree.io/f/xbjnzgpj",payload)
            .then(()=>{
                alert("Messsage sent successfullY...!!!")
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch(()=>{alert(`Something went wrong...!!!
                                Try again some other time`)})   
        }
        else{
           if (Name.length>=4) {
            setNamevalid(false)
           }else{setNamevalid(true)}
           if (Email.match(emailregex)) {
            setEmailvalid(false)
           }else{setEmailvalid(true)}
           if (Message.length>=10) {
            setMessagevalid(false)
           }else{setMessagevalid(true)}
        }    
    }

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <section id={style.contact} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
            <article id={style.cmainblock} >
                <div   data-aos="fade-up">
                    <h1 className={style.ctitle}>Contact <span style={{color:"aqua"}}>Me</span></h1>
                    <h1 className={style.csubtitle} style={{display:"flex",alignItems:"center"}}><EmailIcon sx={{fill:"aqua"}}/><span style={{marginLeft:"5%"}}>Shanmugam070702@gmail.com</span></h1>
                    <h1 className={style.csubtitle} style={{display:"flex",alignItems:"center"}}><PhoneIcon sx={{fill:"aqua"}}/><span style={{marginLeft:"5%"}}>9361813275</span></h1>
                    <h1 className={style.csubtitle} style={{display:"flex",alignItems:"center"}}><LinkedInIcon sx={{fill:"aqua"}}/><a href="https://www.linkedin.com/in/shanmugam-n" target="_blank" style={{marginLeft:"5%",color:"currentcolor"}}>linkedin.com/in/shanmugam-n</a></h1>
                    <h1 className={style.csubtitle} style={{display:"flex",alignItems:"center"}}><GitHubIcon sx={{fill:"aqua"}}/><a href="https://github.com/Shanmugam77" target="_blank" style={{marginLeft:"5%",color:"currentcolor"}}>github.com/Shanmugam77</a></h1>
                
                </div>
                <form >
                    <TextField className={style.cnametextfield} color={namevaild?"error":"info"} helperText={namevaild?"name atleast contain 4 char":""} required onChange={getname} value={Name} type="text" variant="filled"   label="Your Name" sx={{border:"none",borderRadius:"3px",width:"80%",backgroundColor:"whitesmoke",marginTop:"70px"}}/>
                    <TextField className={style.cemailtextfield} color={emailvalid?"error":"info"} helperText={emailvalid?"@ mandatory":""} required onChange={getemail} value={Email} type="email" variant="filled"   label="Your Email" sx={{borderRadius:"3px",width:"80%",backgroundColor:"whitesmoke",marginTop:"20px"}}/>
                    <TextField className={style.cmesstextfield} color={messagevalid?"error":"info"} helperText={messagevalid?"message atleast contain 10 char":""} required onChange={getmessage} value={Message} type="text" variant="filled"  label="Your Message" multiline rows={7} sx={{borderRadius:"3px",width:"80%",backgroundColor:"whitesmoke",marginTop:"20px"}}/>
                    <Button onClick={handleSubmit} type="submit" variant="contained" color="inherit"  sx={{height:"40px",width:"150px",color:"black",fontWeight:"bolder",marginTop:"20px",backgroundColor:"aqua",borderRadius:"20px"}}>submit</Button>
                </form>

            </article>
            <div style={{backgroundColor:theme?"whitesmoke":"rgb(39,39,39)",color:theme?"black":"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 >Copyright © 2024 by Shanmugam | All Rights Reserved.</h1>
            </div>
        </section>
    )
}
export default Contact