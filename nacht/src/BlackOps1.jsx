

import Gallery from "./Gallery"
import nightRezurrection from "./assets/Bo1/Night_rezurrection_BO.webp"
import muleKick from "./assets/Bo1/mulekick.jpg"
import radioWaw from "./assets/Bo1/radiowaw.jpg"
import zombiesNight from "./assets/Bo1/zombiesnachtderuntoten4.webp"

export default function BlackOps1() {
    const bo1Images = [
        nightRezurrection,
        muleKick,
        radioWaw,
        zombiesNight,
    ]

    return (
        <section>
            <h1>Nacht Der Untoten - Black Ops 1</h1>
            <Gallery imageList={bo1Images} />
            <hr/>
            <h2>Adapation</h2>
            <p>In Call Of Duty: Black Ops 1, Nacht Der Untoten was remastered for the first time.</p>
            <p>Nacht Der Untoten as well as the other maps for World At War were added into the game.</p>
            <p>It was added to the "Rezurrection" DLC, which was the first DLC for Black Ops 1.</p>
            <hr/>
            <h2>Changes</h2>
            <p>In this version of the map, there are some minor changes to the map, such as the addition of a new wallbuy location for the MP40 and the removal of the grenades from upstairs.</p>
            <p>The main difference of this map to its original version is the addition of the perk Mule Kick.</p>
        </section>
    )
}