//Taken from UV docs + poorly documented Scramjet docs

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
const sjDecode = scramjet.decodeUrl.bind(scramjet);