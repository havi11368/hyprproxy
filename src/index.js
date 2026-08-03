function addWindowTab(url) {
    const windowTab = document.createElement("div");
    windowTab.id = "windowTab"
    windowTab.tabIndex = -1
    windowTab.setAttribute('active', 'true')
    windowTab.innerHTML = `<div class="windowHeader justified">
    <div class="infoHolder">
    <img id="icon" src="/images/icon.png"></img>
    <h3 id="title">New Window</h3>
    </div>
    <button id="closeButton">Close</button>
    </div>
    <iframe class="frame" id="tabFrame" src="./search.html"></iframe>`
    document.querySelector("#windowContainer").appendChild(windowTab);
    const tab = document.createElement("div");
    tab.id = "tab"
    tab.innerHTML = `<img id="icon" src="/images/icon.png"></img>`
    document.querySelector("#apps").appendChild(tab);
    if (url) {
      windowTab.querySelector("#tabFrame").src = sjEncode(url)
    }

    if (window.getComputedStyle(document.getElementById("greeting")).opacity === "1") {
      document.getElementById("greeting").style.animation = ".4s linear 0s 1 sizeOut";
      document.getElementById("greeting").style.opacity = "0";
      document.getElementById("greeting").style.zIndex = "-1";
      windowTab.style.animation = ".4s linear 0s 1 sizeIn";
      tab.style.animation = ".4s linear 0s 1 slideUp";
      windowTab.setAttribute('active', 'true')
    } else {
      windowTab.style.animation = ".4s ease-out 0s 1 slideIn";
      tab.style.animation = ".4s linear 0s 1 slideUp";
      windowTab.setAttribute('active', 'false')
    }

    windowTab.querySelector("#tabFrame").addEventListener("load", (e) => {
      // document.querySelector("#urlBox").value = windowTab.querySelector("#tabFrame").src
      windowTab.querySelector("#title").innerHTML = windowTab.querySelector("#tabFrame").contentDocument.title
      windowTab.querySelector("#icon").src = windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='icon']").href || windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='shortcut icon']").href
      tab.querySelector("#icon").src = windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='icon']").href || windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='shortcut icon']").href
      windowTab.querySelector("#tabFrame").contentWindow.document.addEventListener('mousedown', () => {
        windowTab.focus();
    });
    })

    windowTab.querySelector("#closeButton").addEventListener("click", (e) => {
      windowTab.style.animation = ".4s ease-out 0s 1 byeBye";
      tab.style.animation = ".4s linear 0s 1 slideDown";
      setTimeout(() => {
        windowTab.remove();
        tab.remove();
      }, 395) // this number is to prevent the animation from going faster than the timeout... yet it still happens, just less.
    })

    tab.addEventListener("click", (e) => {
      if (window.getComputedStyle(windowTab).display === "block") {
        windowTab.style.display = "none"
      } else if (window.getComputedStyle(windowTab).display === "none") {
        windowTab.style.display = "block"
      }
    }) // quite simple
    
    windowTab.addEventListener("click", (event) => {
      document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
    })
    windowTab.querySelector("#tabFrame").contentWindow.addEventListener("click", (event) => {
      document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
    })
}

function openSettings() {
  if (window.getComputedStyle(document.getElementById("settings")).display === "none") {
    document.getElementById("settings").style.display = "block"
  } else {
    document.getElementById("settings").style.display = "none"
  }
}



//Taken from ACE

function startTime() {
  const today = new Date();
  document.getElementById('time').innerHTML =  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
  setTimeout(startTime, 5000); // ohh so that's how you do loops in js
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();