//Taken from UV docs + poorly documented Scramjet docs

const { ScramjetController } = $scramjetLoadController();
const scramjet = new ScramjetController({
	files: {
		wasm: "/scram/scramjet.wasm",
		all: "/scram/scramjet.all.js",
    sync: "/scram/scramjet.sync.js",
	},
});
scramjet.init();

async function setTransport(transportsel) {

  const connection = new BareMux.BareMuxConnection("/baremux/worker.js")
  const wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
  const bareUrl = location.protocol + "//" + location.host + "/bare/";

  if (transportsel == "epoxy") {
    await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
  } else if (transportsel == "libcurl") {
    await connection.setTransport("/libcurl/index.mjs", [{ wisp: wispUrl }]);
  } else {    
    await connection.setTransport("/bareasmodule/index.mjs", [ bareUrl ]);
  }
}
setTransport("epoxy")

const sjEncode = scramjet.encodeUrl.bind(scramjet);

document.getElementById("pxysearch").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        window.location.href = sjEncode(document.getElementById("pxysearch").value)
    }
})