//Taken from UV docs + poorly documented Scramjet docs

const wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

let client = new LibcurlTransport.LibcurlClient({ wisp: wispUrl })

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

const urlwatch = new $scramjetUtils.UrlWatcherPlugin((url) => {
      urlBox.value = url
      console.trace(url)
    })