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
    <div class="rightBtns">
      <button id="minButton">Minimize</button>
      <button id="closeButton">Close</button>
    </div>
    </div>
    <iframe class="frame" id="tabFrame" src="./search.html"></iframe>`
    document.querySelector("#windowContainer").appendChild(windowTab);
    const tab = document.createElement("div");
    tab.id = "tab"
    tab.innerHTML = `<div class="infoHolder">
    <img id="icon" src="/images/icon.png"></img>
    <h3 id="title">New Window</h3>
    </div>
    <div class="rightBtns">
      <button id="closeButton">Close</button>
    </div>`
    tab.setAttribute('active', 'true')
    document.querySelector("#apps").appendChild(tab);
    if (url) {
      windowTab.querySelector("#tabFrame").src = sjEncode(url)
    }
    document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
    document.querySelectorAll("#tab").forEach(element => {
      element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
      tab.setAttribute('active', 'true')

    function closeWindowTab() {
      windowTab.style.animation = ".4s ease-out 0s 1 byeBye";
      if(document.body.getAttribute('browserView') === "1") {
        tab.style.animation = ".4s linear 0s 1 slideDown";
      } else {
        tab.style.animation = ".4s linear 0s 1 byebyeTab";
      }
      setTimeout(() => {
        windowTab.remove();
        tab.remove();
      }, 395) // this number is to prevent the animation from going faster than the timeout... yet it still happens, just less.
    }
    function goTo(url) {
      windowTab.querySelector("#tabFrame").contentWindow.location.href = sjEncode(url)
    }

    if (window.getComputedStyle(document.getElementById("greeting")).opacity === "1") {
      document.getElementById("greeting").style.animation = ".4s linear 0s 1 sizeOut";
      document.getElementById("greeting").style.opacity = "0";
      document.getElementById("greeting").style.zIndex = "-1";
      windowTab.style.animation = ".4s linear 0s 1 sizeIn";
      if(document.body.getAttribute('browserView') === "1") {
        tab.style.animation = ".4s linear 0s 1 slideUp";
      } else {
        tab.style.animation = ".4s linear 0s 1 fadeIn";
      }
    } else {
      windowTab.style.animation = ".4s ease-out 0s 1 slideIn";
      if(document.body.getAttribute('browserView') === "1") {
        tab.style.animation = ".4s linear 0s 1 slideUp";
      } else {
        tab.style.animation = ".4s linear 0s 1 fadeIn";
      }
    }

    windowTab.querySelector("#tabFrame").addEventListener("load", (e) => {
      if(document.body.getAttribute('browserView') === "2") {
        windowTab.querySelector("#tabFrame").contentDocument.body.setAttribute('bg', 'true')
    }
      windowTab.querySelector("#tabFrame").contentWindow.addEventListener("click", (event) => {
      document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
    document.querySelectorAll("#tab").forEach(element => {
      element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
      tab.setAttribute('active', 'true')
      if (windowTab.querySelector("#tabFrame").contentWindow.location.href.includes("/scramjet/")) {
        document.querySelector("#urlBox").value = sjDecode(windowTab.querySelector("#tabFrame").contentWindow.location.href)
      } else {
        document.querySelector("#urlBox").value = ""
      }
    })
    windowTab.querySelector("#tabFrame").contentWindow.addEventListener('keydown', function(e) {
    if (e.key === 't' && (e.ctrlKey || e.metaKey || e.altKey)) {
        e.preventDefault();
        e.stopPropagation();
        console.log('custom shit');
        addWindowTab()
        }
      });
    windowTab.querySelector("#tabFrame").contentWindow.addEventListener('keydown', function(e) {
    if (e.key === 'w' && (e.ctrlKey || e.metaKey || e.altKey)) {
        e.preventDefault();
        e.stopPropagation();
        console.log('custom shit');
        closeWindowTab()
        }
      });
      if (windowTab.querySelector("#tabFrame").contentWindow.location.href.includes("/scramjet/")) {
        console.log(sjDecode(windowTab.querySelector("#tabFrame").contentWindow.location.href))
        document.querySelector("#urlBox").value = sjDecode(windowTab.querySelector("#tabFrame").contentWindow.location.href)
      } else {
        document.querySelector("#urlBox").value = ""
      }
      windowTab.querySelector("#title").innerHTML = windowTab.querySelector("#tabFrame").contentDocument.title
      tab.querySelector("#title").innerHTML = windowTab.querySelector("#tabFrame").contentDocument.title
      windowTab.querySelector("#icon").src = windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='icon']").href || windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='shortcut icon']").href
      tab.querySelector("#icon").src = windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='icon']").href || windowTab.querySelector("#tabFrame").contentWindow.document.querySelector("link[rel~='shortcut icon']").href
    })

    windowTab.querySelector("#closeButton").addEventListener("click", (e) => {
      closeWindowTab()
    })
    tab.querySelector("#closeButton").addEventListener("click", (e) => {
      closeWindowTab()
    })

    tab.addEventListener("click", (e) => {
      if (document.body.getAttribute('browserView') === "1") {
        if (window.getComputedStyle(windowTab).display === "block") {
          windowTab.style.display = "none"
        } else if (window.getComputedStyle(windowTab).display === "none") {
          windowTab.style.display = "block"
        }
    } else if (document.body.getAttribute('browserView') === "2") {
          document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
    document.querySelectorAll("#tab").forEach(element => {
      element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
      tab.setAttribute('active', 'true')
          if (windowTab.querySelector("#tabFrame").contentWindow.location.href.includes("/scramjet/")) {
            document.querySelector("#urlBox").value = sjDecode(windowTab.querySelector("#tabFrame").contentWindow.location.href)
          } else {
            document.querySelector("#urlBox").value = ""
      }
    }
    }) // quite simple
    windowTab.querySelector("#minButton").addEventListener("click", (e) => {
        windowTab.style.display = "none"
    }) // same as tab button function but w/o if statement
    
    windowTab.addEventListener("click", (event) => {
      document.querySelectorAll("#windowTab").forEach(element => {
        element.setAttribute('active', 'false')
      })
    document.querySelectorAll("#tab").forEach(element => {
      element.setAttribute('active', 'false')
      })
      windowTab.setAttribute('active', 'true')
      tab.setAttribute('active', 'true')
      if (windowTab.querySelector("#tabFrame").contentWindow.location.href.includes("/scramjet/")) {
        document.querySelector("#urlBox").value = sjDecode(windowTab.querySelector("#tabFrame").contentWindow.location.href)
      } else {
        document.querySelector("#urlBox").value = ""
      }
    })

    document.querySelector("#refresh").addEventListener("click", (e) => {
      if (windowTab.getAttribute("active") === "true") {
        windowTab.querySelector("#tabFrame").contentWindow.location.reload()
      }
    })

    document.querySelector("#fullscreen").addEventListener("click", (e) => {
      if (windowTab.getAttribute("active") === "true") {
        windowTab.querySelector("#tabFrame").requestFullscreen()
      }
    })
    document.querySelector("#back").addEventListener("click", (e) => {
      if (windowTab.getAttribute("active") === "true") {
        windowTab.querySelector("#tabFrame").contentWindow.history.back()
      }
    })
    document.querySelector("#forward").addEventListener("click", (e) => {
      if (windowTab.getAttribute("active") === "true") {
        windowTab.querySelector("#tabFrame").contentWindow.history.forward()
      }
    })
    window.addEventListener('keydown', function(e) {
    if (e.key === 'w' && (e.ctrlKey || e.metaKey || e.altKey)) {
        e.preventDefault();
        e.stopPropagation();
        console.log('custom shit');
        if (windowTab.getAttribute("active") === "true") {
        closeWindowTab()
        }
        }
      });
    document.querySelector("#urlBox").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        console.log('custom shit');
        if (windowTab.getAttribute("active") === "true") {
          goTo(document.querySelector("#urlBox").value)
        }
        }
      });
      document.querySelector("#enter").addEventListener("click", (e) => {
      if (windowTab.getAttribute("active") === "true") {
        goTo(document.querySelector("#urlBox").value)
      }
    })
    document.querySelector("#switchView").addEventListener("click", (e) => {
    if(document.body.getAttribute('browserView') === "2") {
        windowTab.querySelector("#tabFrame").contentDocument.body.setAttribute('bg', 'true')
    } else {
        windowTab.querySelector("#tabFrame").contentDocument.body.setAttribute('bg', 'false')
    }
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

// thank you @ohonbob on discord for allowing me to use this piece of code (also used in the addWindowTab function now)

window.addEventListener('keydown', function(e) {
  if (e.key === 't' && (e.ctrlKey || e.metaKey || e.altKey)) {
    e.preventDefault();
    e.stopPropagation();
    console.log('custom shit');
    addWindowTab()
  }
});

function switchView() {
  if(document.body.getAttribute('browserView') === "1") {
    document.body.setAttribute('browserView', '2')
    document.querySelectorAll("#windowTab").forEach(element => {
        element.style.display = "block"
    })
    document.querySelector("#add").innerHTML = "Add Tab"
  } else {
    document.querySelector("#add").innerHTML = "Add Window"
    document.body.setAttribute('browserView', '1')
  }
} // honestly though this would be the most complicated part. the real part is in the css.

window.addEventListener('keydown', function(e) {
  if (e.key === 'z' && (e.ctrlKey || e.metaKey || e.altKey)) {
    e.preventDefault();
    e.stopPropagation();
    console.log('custom shit');
    switchView()
  }
});