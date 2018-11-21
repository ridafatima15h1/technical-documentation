"use strict";
var section = [];
section[0] = "none";
var x = -1;

document.getElementsByClassName("nav-link")[0].classList.add("nav-select");

for (let i = 0; i < document.getElementsByTagName("section").length; i++) {
    section[i + 1] = document.getElementsByTagName("section")[i];
}

function open_Section(clicked_id) {

    for (let i = 1; i < section.length; i++) {
        section[i].style.display = "none";
        document.getElementsByClassName("nav-link")[i - 1].classList.remove("nav-select");
    }

    document.getElementById(clicked_id).classList.add("nav-select");

    var p_menu_select = document.getElementById(clicked_id).innerHTML;

    switch (clicked_id) {
        case "link-1":
            section[1].style.display = "block";
            break;
        case "link-2":
            section[2].style.display = "block";
            break;
        case "link-3":
            section[3].style.display = "block";
            break;
        case "link-4":
            section[4].style.display = "block";
            break;
        case "link-5":
            section[5].style.display = "block";
            break;
        case "link-6":
            section[6].style.display = "block";
            break;
        case "link-7":
            section[7].style.display = "block";
            break;
        case "link-8":
            section[8].style.display = "block";
            break;
        case "link-9":
            section[9].style.display = "block";
            break;
        case "link-10":
            section[10].style.display = "block";
            break;
        case "link-11":
            section[11].style.display = "block";
            break;
        case "link-12":
            section[12].style.display = "block";
            break;
        case "link-13":
            section[13].style.display = "block";
            break;
        case "link-14":
            section[14].style.display = "block";
            break;
        case "link-15":
            section[15].style.display = "block";
            break;
        case "link-16":
            section[16].style.display = "block";
            break;
        case "link-17":
            section[17].style.display = "block";
            break;
        case "link-18":
            section[18].style.display = "block";
            break;
        case "link-19":
            section[19].style.display = "block";
            break;
        case "link-20":
            section[20].style.display = "block";
            break;
    }

    document.getElementById("p-menu-select").innerHTML = p_menu_select;

    if (window.innerWidth <= 750) {
        document.getElementById("blur").style.display = "none";
        document.getElementById("navbar").style.display = "none";
        x = -1;
    }
}

function open_menu() {
    document.getElementById("blur").style.display = "block";
    document.getElementById("navbar").style.display = "grid";
    x = 1;
}

function cross() {
    document.getElementById("blur").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    x = -1;
}


function resize() {
    if ((window.innerWidth > 750) && (document.getElementById("navbar").style.display === "none")) {
        document.getElementById("navbar").style.display = "grid";
    } else if ((window.innerWidth < 750) && (x === -1)) {
        document.getElementById("navbar").style.display = "none";
    } else if ((window.innerWidth < 750) && (x === 1)) {
        document.getElementById("navbar").style.display = "grid";
    }
}

window.onresize = resize;
