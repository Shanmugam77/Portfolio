import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Nav from "./components/Nav"
import { createContext, useState } from "react"
import Project from "./components/Project"
import Skills from "./components/Skills"




export let Themevalue=createContext()
const App=()=>{
    let [theme,setTheme]=useState(false)
    let toggletheme=()=>{
        if(theme==false){
            setTheme(true)
        }
        else{
            setTheme(false)
        }
    }
    return(
        <div style={{backgroundColor:"black"}}>
        <Themevalue.Provider value={{theme,toggletheme}}>
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/> 
        </Themevalue.Provider>
        </div>
    )
}
export default App