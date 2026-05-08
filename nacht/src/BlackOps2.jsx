import Gallery from "./Gallery"
import tranzitMap from "./assets/Bo2/black-ops-2-zombies-tranzit-map-v0-pjVvM7sY9qixJiYuJvMRAbZip552E8oXxQDeveWBX-k.webp"
import maxresDefault from "./assets/Bo2/maxresdefault.jpg"
import nachtInBo2 from "./assets/Bo2/nacht-in-bo2.webp"
import sdDefault from "./assets/Bo2/sddefault.jpg"

export default function BlackOps2() {
    const bo2Images = [
        nachtInBo2,
        maxresDefault,
        sdDefault,
        tranzitMap,
    ]

    return (
        <section>
            <h1>Nacht Der Untoten - Black Ops 2</h1>
            <Gallery imageList={bo2Images} />
            <hr/>
            <h2>Adapation</h2>
            <p>In Black Ops 2, Nacht Der Untoten was downgraded to a single room in a cornfield in the map Tranzit.</p>
            <p>Tranzit was one of the biggest maps in the history of Call Of Duty Zombies, and it featured a lot of different areas to explore.</p>
            <p>Nacht Der Untoten was one of the areas you could explore in the map, and it was nicknamed "Prototype".</p>
            <p>Prototype was a building near a cornfield where Tranzit took place. Tranzit is a zombie map based around taking a bus to different locations.</p>
            <hr />
            <h2>Location</h2>
            <p>Since the original Nacht Der Untoten took place in Poland (revealed in Black Ops: Cold War) and Tranzit taking place in Green Run, US, it means that not only is this not the same location, but it also implies several countries built a bunker just like this.</p>
            <p>This implies that the structure of Nacht Der Untoten is publicly known and can be replicated.</p>
            <hr/>
            <h2>Changes</h2>
            <p>There are no wallbuys, no perks, and no reason to be there other than a few parts.</p>
            <p>This version of the map was significantly different from the original.</p>
            <p>It is a recreation of the starting room on the original map.</p>
        </section>
    )
}