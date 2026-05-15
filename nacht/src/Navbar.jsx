import { Link } from "react-router-dom"

export default function Navbar() {
    const linkJSX = <>
        <Link to="/">Home</Link>
        <Link to="/WorldAtWar">World At War</Link>
        <Link to="/BlackOps1">Black Ops 1</Link>
        <Link to="/BlackOps2">Black Ops 2</Link>
        <Link to="/BlackOps3">Black Ops 3</Link>
        <Link to="/BlackOpsColdWar">Black Ops: Cold War</Link>
        </>
    
    return (<>
        <nav>
            <h1 onClick={
        () => {document.documentElement.classList.toggle("dark"); }
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