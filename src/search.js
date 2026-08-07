document.querySelector("pxysearch").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (document.querySelector("#pxysearch").value.includes("://")) {
            window.location.href = sjEncode(document.querySelector("#pxysearch").value)
          } else if (document.querySelector("#pxysearch").value.includes(".")) {
            window.location.href = sjEncode("https://" + document.querySelector("#pxysearch").value)
          } else {
            window.location.href = sjEncode("https://" + "google.com" + "/search?q=" + document.querySelector("#urlBox").value)
          }
        window.location.href = sjEncode(document.getElementById("pxysearch").value)
    }
})