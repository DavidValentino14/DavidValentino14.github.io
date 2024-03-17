const tombol = document.querySelector(".button");
const lagu = document.querySelector(".lagu");
const container = document.querySelector(".container")


const humburger = document.querySelector(".navbar-toggler");
const btnClose = document.querySelector(".btn-close");
const stickyTop =  document.querySelector(".sticky-top");


tombol.addEventListener('click', function() {
    const song = document.createElement('audio')
    song.setAttribute("src", "Song/Selamat ulang tahun.mp3");
    song.setAttribute("autoplay", "")
});

// humburger.addEventListener("click" , function(){
//     stickyTop.style.overflow = 'visible';
// });

// btnClose.addEventListener("click" , function(){
//     stickyTop.style.overflow = 'hidden';
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const tombol = document.querySelector(".button");
//     const lagu = document.querySelector(".lagu");

//     tombol.addEventListener('click', function() {
//         lagu.setAttribute("autoplay", "");
//     });
// });
