import Gallery from "./Gallery.jsx"
import nightHelpRoom from "./assets/WaW/Nacht_der_Untoten_Help_Room.webp"
import nacht1 from "./assets/WaW/Nacht_der_untoten1 (2).webp"
import nacht2 from "./assets/WaW/Nacht_der_untoten2.webp"
import nachtWaw from "./assets/WaW/nachtwaw.jpg"
import radio from "./assets/WaW/radio.webp"
import sniperCabinet from "./assets/WaW/sniper_cabinet.webp"

export default function WorldAtWar() {
    const imageList = [
        nacht1,
        nacht2,
        nightHelpRoom,
        nachtWaw,
        radio,
        sniperCabinet,
    ]

    return (
        <section>
        <h1>Nacht Der Untoten - World At War</h1>
        <Gallery imageList={imageList} />
        <hr/>
        <h2>Start Room</h2>
        <p>Nacht Der Untoten starts you out in the start room where you have nothing. You can either buy a Kar98k or a M1 Garand.</p>
        <p>Both are rifles, with the Kar98k being a bolt-action rifle and the M1 Garand being an semi-automatic rifle.</p>
        <hr/>
        <h2>Help Room</h2>
        <p>Buying the door that says "Help!" on the first floor will take you to the help room.</p>
        <p>The help room contains a mystery box, a radio, and a set of staircases similar to the ones in the start room.</p>
        <p>The Double Barrel Shotgun and the Thompson are available here.</p>
        <h2>Upstairs</h2> 
        <hr/>
        <p>Going upstairs takes you to the M1897 Trench Gun, the Sawed Off Shotgun, the BAR, and some grenades.</p>
        <p>Note most of the objects in this building are only wallbuys, with the exception of the items in the help room.</p>
        
        </section>
    )
}