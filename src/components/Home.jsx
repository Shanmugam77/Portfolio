import { useTypewriter,Cursor } from "react-simple-typewriter"
import style from "./style.module.css"
import resume from "./assets/CV.pdf"
import { Button } from "@mui/material"
import imag1 from "./assets/Picsart_24-03-26_21-38-14-587.png"
import { useContext } from "react"
import { Themevalue } from "../App"
import image2 from "../components/assets/my_pick-removebg-preview.png"
import {Link} from "react-scroll"



const Home =()=>{
    let {theme}=useContext(Themevalue);
    const [typewriter]=useTypewriter({
        words:['MERN Full Stack Developer','Node Developer','React Developer','Front-End Developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
    
    return(
        <section id={style.home} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
            <div id={style.conblock} style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px",display:"flex",flexDirection:'column',justifyContent:"center"}}>
                <h1 className={style.h}>Hello,It's Me</h1>
                <h1 className={style.name} >Shanmugam</h1>
                <h1 className={style.h} style={{marginBottom:'20px'}}>
                    And I'm a <span style={{color:"aqua"}}>{typewriter}</span>
                </h1>
                <p className={style.p}>Skilled fresher in web development proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Eager to contribute to dynamic web projects with a commitment to continuous learning and growth within the industry.</p>
                <Button variant="contained" color="inherit"  sx={{height:"40px",width:"150px",marginTop:"20px",backgroundColor:"aqua",borderRadius:"20px"}}><Link to={style.contact}  style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>Say Hello! <span style={{fontSize:'22px'}}>👋</span></Link></Button>
                

            </div>
            <div id={style.imgblock} style={{display:"flex",justifyContent:"center",alignItems:"center",objectFit:"contain"}}>
                   <img className={style.img} src={image2} alt="" />
            </div>

        </section>
    )
}
export default Home