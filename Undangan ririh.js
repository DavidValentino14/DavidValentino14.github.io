const tombol = document.querySelector(".button");
const lagu = document.querySelector(".lagu");
const container = document.querySelector(".container")


const humburger = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const stickyTop =  document.querySelector(".sticky-top");

let laguString = "";
// console.log(laguString)
tombol.addEventListener('click', function() {
    const att = lagu.attributes;
    for (let i = 0; i < att.length; i++) {
        laguString += att[i].value;
    }

    console.log(laguString);
    if (laguString.includes('autoplay')) {
        console.log('1')
    }
     else {
        lagu.setAttribute("src", "Song/Selamat ulang tahun.mp3");
        lagu.volume = 0.2;
        lagu.setAttribute("autoplay", "");
        lagu.setAttribute("loop", "");
    }
});
