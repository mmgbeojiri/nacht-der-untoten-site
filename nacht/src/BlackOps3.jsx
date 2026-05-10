import Gallery from "./Gallery";
import maxresdefault1 from './assets/Bo3/maxresdefault (1).jpg';
import nachtbo3 from './assets/Bo3/nachtbo3.jpg';
import nachtderuntoten23 from './assets/Bo3/nachtderuntoten23-1024x576.webp';
import nachthigheround from './assets/Bo3/nachthigheround.jpg';
import spawnArea from './assets/Bo3/spawn-area-for-nacht-der-untoten.png';

export default function BlackOps3() {
    
    const bo3Images = [
        nachtbo3,
        nachtderuntoten23,
        spawnArea,
        maxresdefault1,
        nachthigheround,
    ]
    
    return (
        <section>
        <h1>Nacht Der Untoten - Black Ops 3</h1>
        <Gallery imageList={bo3Images} />
        <hr/>
        
        <h2>Adaptation</h2>
        <p>In Black Ops 3, Nacht Der Untoten was remastered and included in the map pack "Zombies Chronicles".</p>
        <p>The map was remastered with new graphics and new features, but it still retained the same layout and gameplay as the original.</p>
        <p>It was a fan favorite and was praised for its faithful recreation of the original map.</p>
        <hr/>
        <h2>Changes</h2>
        <p>The updated Nacht Der Untoten has been given a makeover with two new things.</p>
        <p>The Wunderfizz is a machine that can grant you random perks.</p>
        <p>These perks are Juggernog, Quick Revive, Stamin-Up, Speed Cola, Widow's Wine, Electric Cherry, Deadshot Daiquiri, Mule Kick, and Phd Slider. </p>
        <p>The next thing is the Gobblegum Machine.</p>
        <p>Gobblegums can be eaten to gain special powerups that are specific to the gum themselves, from simple things such as being invisible to zombies or making them all crawlers, to gaining all perks and changing the entire round.</p>
        <hr/>
        <h2>Perks</h2>
        <p>Juggernog: Doubles health.</p>
        <p>Quick Revive: Revives your teammate in half the time, but in solo gives you a second chance at life if you go down.</p>
        <p>Double Tap: Increases fire rate (advertising two bullets for the shot of oone) and in later titles increased bullet damage as well.</p>
        <p>Speed Cola: Allows to reload your guns extremely fast.</p>
        <p>Widow's Wine: Every time you take damage, zombies slow down and get stuck in your webs.</p>
        <p>Electric Cherry: Every time you reload, you release an electric shock that stuns nearby zombies.</p>
        <p>Deadshot Daiquiri: Make it easier to get headshots.</p>
        <p>Mule Kick: Allows you to carry three guns instead of two.</p>
        <p>Phd Slider: Prevents you from taking explosive damage and allows you to slide into zombies to explode them.</p>
    </section>
    )
}