//Taken from UV docs + poorly documented Scramjet docs

const wispUrl =
  (location.protocol === "https:" ? "wss" : "ws") +
  "://" +
  location.host +
  "/wisp/";

let client = new LibcurlTransport.LibcurlClient({ wisp: wispUrl });

const { Controller } = $scramjetController;
const { defaultConfig } = $scramjet;
const serviceworker = navigator.serviceWorker.controller;
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
  if (document.querySelector("#urlBox")) {
    urlBox.value = url;
  }
  console.trace(url);
});

const httpcache = new $scramjetUtils.HttpCachePlugin();

const catchescapedlinks = new $scramjetUtils.CatchEscapedLinksPlugin((url) => {
  addWindowTab(url.href);
  return new URL(location.origin + "/close.html");
});

let errorPage = `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Scramjet</title>
                    <link rel="stylesheet" href="/stylesheet.css"/>
                    <style>
                      body {
                    padding: 10px;
                        }
                    textarea, img {
                    margin: 5px;
                    }
                    button {
                    margin-bottom: 5px;
                    }
                    </style
                </head>
                <body>
                <h2>hyprproxy demo ({{ORIGIN}}) has encountered a Scramjet error!!</h2>
                <br>
                        <p>There was an error loading <b id="fetchedURL">{{URL}}</b></p>
                                <textarea id="errorTrace" cols="40" rows="10" readonly>Internal Service Worker Error: {{ERROR}}</textarea>
                            <img src="/images/proxyfail3.gif" style="border-radius: 0.6em;">
                        </div>
                        <br>
                        <button id="reload" class="primary" onclick="window.location.reload()">Reload</button>
                    </div>
                    <p id="version-wrapper"><i>Scramjet v<span id="version">{{SCRAMJET_VERSION}}</span> (build <span id="build">{{SCRAMJET_BUILD}}</span>)</i></p>
                </body>
            </html>`;

const customErrorPage = new $scramjetUtils.customErrorPagePlugin(errorPage);
