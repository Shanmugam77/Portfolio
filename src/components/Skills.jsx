import style from "./style.module.css"
import htmlimg from "./assets/html5.svg"
import cssimg from "./assets/css3-alt.svg"
import jsimg from "./assets/square-js.svg"
import reactimg from "./assets/react.svg"
import nodeimg from "./assets/node-js.svg"
import mongoimg from "./assets/mongodb.svg"
import sqlimg from "./assets/sql.svg"
import { Themevalue } from "../App"
import { useContext, useEffect, useRef, useState } from "react"
import CountUp from "react-countup"
import Aos from "aos"
import "aos/dist/aos.css"


const Skills=()=>{
    let {theme}=useContext(Themevalue)

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    // --------------------quick learn-------------------
    let Qouterlayer=useRef()
    let Qinnervalue=useRef()
    useEffect(()=>{
        // console.log(Qouterlayer,Qinnervalue);
        let startvalue=0;
        let endvalue=80;
        let speed=20;
        let animation=setInterval(()=>{
            startvalue++;
            Qouterlayer.current.style.background=`conic-gradient(aqua ${startvalue*3.6}deg,gray 0deg)`;
            Qinnervalue.current.textContent=`${startvalue}%`;
            if(startvalue==endvalue){
                clearInterval(animation)
            }
        },speed)

    },[])
    // ------------------------team  work----------------
    let Touterlayer=useRef()
    let Tinnervalue=useRef()
    useEffect(()=>{
        // console.log(Touterlayer,Tinnervalue);
        let startvalue=0;
        let endvalue=72;
        let speed=20;
        let animation=setInterval(()=>{
            startvalue++;
            Touterlayer.current.style.background=`conic-gradient(aqua ${startvalue*3.6}deg,gray 0deg)`;
            Tinnervalue.current.textContent=`${startvalue}%`;
            if(startvalue==endvalue){
                clearInterval(animation)
            }
        },speed)

    },[])
    // ----------------------communication------------------
    let Couterlayer=useRef()
    let Cinnervalue=useRef()
    useEffect(()=>{
        // console.log(Couterlayer,Cinnervalue);
        let startvalue=0;
        let endvalue=65;
        let speed=20;
        let animation=setInterval(()=>{
            startvalue++;
            Couterlayer.current.style.background=`conic-gradient(aqua ${startvalue*3.6}deg,gray 0deg)`;
            Cinnervalue.current.textContent=`${startvalue}%`;
            if(startvalue==endvalue){
                clearInterval(animation)
            }
        },speed)

    },[])
    // ------------------------problem solving-----------------
    let Pouterlayer=useRef()
    let Pinnervalue=useRef()
    useEffect(()=>{
        // console.log(Pouterlayer,Pinnervalue);
        let startvalue=0;
        let endvalue=70;
        let speed=20;
        let animation=setInterval(()=>{
            startvalue++;
            Pouterlayer.current.style.background=`conic-gradient(aqua ${startvalue*3.6}deg,gray 0deg)`;
            Pinnervalue.current.textContent=`${startvalue}%`;
            if(startvalue==endvalue){
                clearInterval(animation)
            }
        },speed)

    },[])

    
    return(
        <section id={style.skills} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white",fontFamily:"sans-serif",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
            <h1 data-aos="fade-down">My <span style={{color:"aqua"}}>Skills</span></h1>
            <article id={style.main} >
                {/* ----------------------------------------------------------------Technical skills------------------------------------------ */}
                <div id={style.tskills} >
                    
                    <h1 className={style.Ssubtitle} data-aos="fade-right" >Technical Skills</h1>
                    
                    <div id={style.html}>
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={htmlimg} height="30px"  width="30px" alt="" />  HTML</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={84} duration={2}/>%</h5>
                        </span>
                        
                    </div>
                    <div id={style.css} >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={cssimg} height="30px"  width="30px" alt="" />  CSS</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={80} duration={2}/>%</h5>
                        </span>
                    </div>
                    <div id={style.js} >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={jsimg} height="30px"  width="30px" alt="" />  JAVASCRIPT</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={75} duration={2}/>%</h5>
                        </span>
                    </div>
                    <div id={style.react} >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={reactimg} height="30px"  width="30px" alt="" />  REACT.JS</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={72} duration={2}/>%</h5>
                        </span>
                    </div>
                    <div id={style.node}  >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={nodeimg} height="30px"  width="30px" alt="" />  NODE.JS</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={70} duration={2}/>%</h5>
                        </span>
                    </div>
                    <div id={style.mongodb} >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={mongoimg} height="30px"  width="30px" alt="" />  MONGODB</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={60} duration={2}/>%</h5>
                        </span>
                    </div>
                    <div id={style.sql} >
                        <h1 style={{display:"flex",alignItems:"center"}}><img src={sqlimg} height="30px"  width="30px" alt="" />  SQL</h1>
                        <span style={{display:"flex",alignItems:"center"}}>
                            <div style={{border:theme?"1px solid black":"1px solid white",borderRadius:"5px",overflow:"hidden"}}>
                                <div></div>
                            </div>
                            <h5><CountUp start={0} end={80} duration={2}/>%</h5>
                        </span>
                    </div>
                </div>
                {/* ------------------------------------------------professional skills-------------------------------------------------------------------------------- */}
                <div id={style.pskills} >
                    <h1 className={style.Ssubtitle} data-aos="fade-right">Professional Skills</h1>
                    <div >
                        <div>
                            <div className={style.outerlayer} ref={Qouterlayer} >
                                <div style={{backgroundColor:theme?"white":"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <h1 ref={Qinnervalue}></h1>
                                </div>
                            </div>
                            <h1>Quick Learner</h1>
                        </div>
                        <div >
                           <div className={style.outerlayer} ref={Touterlayer} >
                                <div style={{backgroundColor:theme?"white":"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <h1 ref={Tinnervalue}></h1>
                                </div>
                            </div>
                            <h1>Team Work</h1>

                        </div>
                    </div>
                    <div >
                        <div>
                            <div className={style.outerlayer} ref={Couterlayer} >
                                <div style={{backgroundColor:theme?"white":"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <h1 ref={Cinnervalue}></h1>
                                </div>
                            </div>
                            <h1>Communication</h1>
                        </div>
                        <div>
                            <div className={style.outerlayer} ref={Pouterlayer}>
                                <div style={{backgroundColor:theme?"white":"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <h1 ref={Pinnervalue}></h1>
                                </div>
                            </div>
                            <h1>Problem Solveing</h1>
                        </div>
                    </div>
                    
                </div>
            </article>
        </section>
    )
}
export default Skills