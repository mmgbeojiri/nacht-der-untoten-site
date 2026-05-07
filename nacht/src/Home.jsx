import NachtDerUntoten from "./assets/Nacht_Der_Untoten_Ground_Floor.webp"
import HardLanding from "./assets/hardLanding.webp"
import NightOfDead from "./assets/nightofdead.webp"
import CodZombies from "./assets/warheads.jpg"
export default function Home() {
    return (<section>
    <h1>You drove them deep into the heart of the Reich. You thought they were dead. You were wrong.</h1>
    <img src={NachtDerUntoten}/>
    <hr/>
    <p>Nacht Der Untoten was the first map to ever be in Call Of Duty: Zombies starting out with World at War in 2008.</p>
    <p>The premise of the game was simple, survive the night in a bunker you defend.</p>
    <p>Nacht Der Untoten is known for being one of the hardest maps, due to no perks, no pack a punch, and no power.</p>
    <p>It's just you, a couple barrels, and the mystery box.</p>
    <hr/>
    <h2>What is Call Of Duty: Zombies?</h2>
    <img src={CodZombies} />
    <p>Call Of Duty: Zombies is a side gamemode in the games where you are placed in a certain map and have to survive against endless hordes of zombies.</p>
    <p>You can buy better guns off of the wall, and even spin the mystery box to get any gun in the game, even the amazing weapon known as the Raygun.</p>
    <p>In later titles, there are multiple ways to fight off the zombies better.</p>
    <p>The Pack-A-Punch is a machine where you can insert your gun into to have it make more damage and an overall ammo capacity increase.</p>
    <p>Perk-a-colas are in vending machines throughout the map, but here are the 4 main perks you need to know.</p>
    <p>Juggernog: Doubles health.</p>
    <p>Quick Revive: Revives your teammate in half the time, but in solo gives you a second chance at life if you go down.</p>
    <p>Double Tap: Increases fire rate (advertising two bullets for the shot of oone) and in later titles increased bullet damage as well.</p>
    <p>Speed Cola: Allows to reload your guns extremely fast.</p>

    <p>Ever since Nacht Der Untoten, most zombie maps, official or unoffical have these things put in to make the life of the players playing easier.</p>
    <p>None of which, appear in Nacht.</p>
    <hr/>
    <h2>Development</h2>
    <img src={HardLanding} />
    <hr/>
    <p>Nacht Der Untoten was made from reused from the map "Airfield" in the WaW multiplayer, and can be seen again in the campaign mission "Hard Landing". </p>
    <p>Nacht Der Untoten was a part of four special maps the player got access to after finishing the campaign for World At War.</p>
    <p>These four maps were Nacht Der Untoten, Verruckt, Shi No Numa, and Der Riese.</p>
    <p>These four maps were the start of the entire Call Of Duty: Zombie franchise.</p>
    <p>The creators of the game intended for Round 10 to be the "turning point", while round 20 was the point where a single mistake could cost everything.</p>
    <p>However, Nacht Der Untoten has people who have gotten up to round 8,277.</p>
    <hr/>
    <h2>The Lore</h2>
    <p>Allied forces flying over a German airspace was shotdown and crashed in a convoy of trucks of Element 115, that when exposed, turns the nearby dead people into zombies.</p>
    <p>The only people who survived were four unnamed marines, who ran into the building to seek shelter.</p>
    <p>They now have to survive, "The Night Of The Undead."</p>
    <img src={NightOfDead} />
    <hr/>
    
    </section>)
}