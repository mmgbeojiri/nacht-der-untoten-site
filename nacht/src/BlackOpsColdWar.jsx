import Gallery from "./Gallery";
import previewMQADD6 from './assets/BoCw/2951105088_preview_MQ-ADD6.jpg';
import DieMaschine7 from './assets/BoCw/Die-Maschine-7.webp';
import brianGlinesDieMaschine1 from './assets/BoCw/brian-glines-die-maschine-1.jpg';
import dieMaschine from './assets/BoCw/die-maschine.webp';
import images2 from './assets/BoCw/images (2).jpg';
import { Link } from "react-router-dom"

export default function BlackOpsColdWar() {
    
    const boCwImages = [
        brianGlinesDieMaschine1,
        dieMaschine,
        previewMQADD6,
        images2,
        DieMaschine7,
    ]


    return (
        <section>
            <h1>Nacht Der Untoten - Black Ops Cold War</h1>
            <Gallery imageList={boCwImages} />
            <hr/>
            <h2>Adaptation</h2>
            <p>In Black Ops Cold War, Nacht Der Untoten was adapted in a way where it was entirely reimagined in the map "Die Maschine", which means "The Machine" in german.</p>
            <p>In the game, you spawn outside the building and must pass through the building, now covered in snow and graffiti.</p>
            <p>This was the first map to introduce the "Dark Aether" timeline to Call Of Duty: Zombies.</p>
            <p>Due to new infil information from this game, we now know that the original Nacht Der Untoten took place in Poland.</p>
            <p>Underneath the original Nacht Der Untoten, there is a huge grand particle accelerator.</p>
            <hr/>
            <h2>Changes</h2>
            <p>Die Maschine has most of the internal building intact but only with one perk inside: Stamin-Up.</p>
            <p>The building is old, rundown with cracks in the walls.</p>
            <p>Gobblegums have been removed but perks are still around, being dispered around the map and underground.</p>
            <p>The original plane crash site is there, and there is a small pond nearby.</p>
            <hr/>
            <h2>Secret</h2>
            <p>So since you're all caught up on Nacht Der Untoten, <Link to="/secret">why not put yourself to the test?</Link></p>
        </section>
    )
}