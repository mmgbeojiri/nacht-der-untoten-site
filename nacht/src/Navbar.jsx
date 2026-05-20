import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        const stored = window.localStorage.getItem("darkMode")
        return stored === "true"
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        window.localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    const linkJSX = <>
        <Link to="/">Home</Link>
        <Link to="/WorldAtWar">World At War</Link>
        <Link to="/BlackOps1">Black Ops 1</Link>
        <Link to="/BlackOps2">Black Ops 2</Link>
        <Link to="/BlackOps3">Black Ops 3</Link>
        <Link to="/BlackOpsColdWar">Black Ops: Cold War</Link>
        </>

    


    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");

    }
    
    return (<>
        <nav>
            <h1 onClick={
        toggleDarkMode
        }>NachtDerUntoten.com</h1>
            <div id="linkLists">
               {linkJSX}
            </div>
            <button id="hamburger" onClick={
                ()=>{
                    document.getElementById("hiddenLinks").classList.toggle("showLinks");
                }
            }>=</button>
        </nav>
        <div id="hiddenLinks">
                {linkJSX}
            </div>
            
            </>
    )
}