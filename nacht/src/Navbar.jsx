import { Link } from "react-router-dom"

export default function Navbar() {
    return (<>
        <nav>
            <h1>NachtDerUntoten.com</h1>
            <div id="linkLists">
                <Link to="/">Home</Link>
                <Link to="/WorldAtWar">World At War</Link>
                <Link to="/BlackOps1">Black Ops 1</Link>
                <Link to="/BlackOps2">Black Ops 2</Link>
                <Link to="/BlackOps3">Black Ops 3</Link>
                <Link to="/BlackOpsColdWar">Black Ops: Cold War</Link>
                <Link to="/BlackOps6">Black Ops 6</Link>
            </div>
            <button id="hamburger" onClick={
                ()=>{
                    document.getElementById("hiddenLinks").classList.toggle("showLinks");
                }
            }>=</button>
        </nav>
        <div id="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/WorldAtWar">World At War</Link>
                <Link to="/BlackOps1">Black Ops 1</Link>
                <Link to="/BlackOps2">Black Ops 2</Link>
                <Link to="/BlackOps3">Black Ops 3</Link>
                <Link to="/BlackOpsColdWar">Black Ops: Cold War</Link>
                <Link to="/BlackOps6">Black Ops 6</Link>
            </div>
            
            </>
    )
}