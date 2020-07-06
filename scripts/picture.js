var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");


simon.addEventListener("click", pickLink);
bruce.addEventListener("click", pickLink);
ben.addEventListener("click", pickLink);

function pickLink() {
    var allImages = document.querySelectorAll("img");

    for (var i=0; i<allImages.length; i++){
        allImages[i].className = "hide";
    }

    var picID = this.attributes["data-img"].value;
    var pic = document.getElementById(picID);
    if (pic.className ==="hide") {
        pic.className = "";
    } else {
        pic.className = "hide"
    }

}