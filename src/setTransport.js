//Taken from UV docs + poorly documented Scramjet docs

const wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

/*async function setTransport(transportsel) {

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
}*/

const EpoxyClient = EpxMod.default;

let client = new EpoxyClient({ wisp: wispUrl })

const { Controller } = $scramjetController;
const { defaultConfig } = $scramjet;
const serviceworker = navigator.serviceWorker.controller
const scramjet = new Controller({
  serviceworker,
  transport: client,
	config: {
		scramjetPath: "/scram/scramjet.js",
    wasmPath: "/scram/scramjet.wasm",
    injectPath: "/cont/controller.inject.js",
	},
  scramjetConfig: {
          ...defaultConfig,
          flags: {
            ...defaultConfig.flags,
            allowFailedIntercepts: true,
            allowInvalidJs: true,
          },
        },
  
});