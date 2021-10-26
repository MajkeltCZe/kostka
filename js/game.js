const pink = document.getElementById('pink');
const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const button = document.getElementById('button');
const gold = document.getElementById('gold');
gold.style.display = "none";
pink.style.display = "none";

let hod = 1;
let hody = [];
let timer = false;
let timer2 = false;

let soucet = 0;
let prumer = 0;

var color = 0;




function animace() {
    let z = 0;
    hod = Math.ceil(Math.random() * 6);

switch(color) {
case 1:
kostka.src = './img/0kostka' + hod + '.png';
break;

case 2:
kostka.src = './img/1kostka' + hod + '.png';
break;
 

default:
      kostka.src = './img/kostka' + hod + '.png';
 
}
}



pink.addEventListener('click', function () {
    kostka.src = './img/0kostka' + hod + '.png';
    color = 1;
});

gold.addEventListener('click', function () {
    kostka.src = './img/1kostka' + hod + '.png';
    color = 2;
});





button.addEventListener('click', function () {


    if (!timer) {

        timer = setInterval(animace, 50);
        button.innerText = 'Zastav';
    }
    else {

        button.innerText = 'Hrej';
        clearInterval(timer);
        timer = false;
        hody.push(hod);
        soucet += hod;
        prumer = (soucet / hody.length).toFixed(2);
        console.log(Soucet());
        statistikyVypis();

    }
});


function Soucet() {

    let sum = 0;

    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];

    }
    return sum;



}



function maximum() {

    let max = 1;

    hody.forEach(function (value, index) {

        if (value > max) max = value;
    })

    return max;


}

function minimum() {

    let min = 6;

    hody.forEach(function (value, index) {

        if (value < min) min = value;
    })

    return min;


}


function statistikyVypis() {

    statistika.innerHTML = `<p>Poslední hod: ${hod}</p>`;
    statistika.innerHTML += `<p>Celkový počet hodů: ${hody.length}</p>`;
    statistika.innerHTML += `<p>Součet: ${soucet}</p>`;
    statistika.innerHTML += `<p>Průměr: ${prumer}</p>`;
    statistika.innerHTML += `<p>Maximum: ${maximum()}</p>`;
    statistika.innerHTML += `<p>Minimum: ${minimum()}</p>`;

    if (soucet == 666) return statistika.innerHTML += '<p> Získal jsi ďábelské číslo</p>';

if (hody.length >=5) {

gold.style.display = "block";
pink.style.display = "block";
}



}


