document.getElementById("pxysearch").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        window.location.href = sjEncode(document.getElementById("pxysearch").value)
    }
})