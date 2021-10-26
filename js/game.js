const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const button = document.getElementById('button');

let hod = 1;
let hody = [];

button.addEventListener('click', function() {
hod = Math.ceil(Math.random() * 6);
hody.push(hod);
console.log(hody);
kostka.src = './img/kostka' + hod + '.png';




});

function statistikyVypis ()