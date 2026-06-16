function addWindowTab() {
    const windowTab = document.createElement("div");
    windowTab.id = "windowTab"
    windowTab.innerHTML = `<iframe class="frame" src="./search.html"></iframe>`
    document.querySelector("#windowContainer").appendChild(windowTab);
    windowTab.style.animation = ".4s ease-out 0s 1 slideIn"
}



//Taken from ACE

function startTime() {
  const today = new Date();
  document.getElementById('time').innerHTML =  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
  setTimeout(startTime, 5000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();

//sj

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