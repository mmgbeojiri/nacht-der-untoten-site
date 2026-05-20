export default function Secret() {
    return(
        <section id="wide">
            <h1>Play Nacht Der Untoten Online</h1>
            <hr/>
        <div id="iframeContainer"><iframe id="iframe" src="https://nzp.gay/"></iframe>
        <button id="fullscreen" onClick={() => {
  const iframe = document.getElementById("iframe");
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
    }
    }
}>FullScreen</button>
        </div>
        <p>Iframe embedded to <a href="https://nzp.gay" target="_blank">Nazi Zombies Portable</a>.</p>
        </section>
    )
}