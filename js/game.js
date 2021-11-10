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

let soucet = 0;
let prumer = 0;

var color = 0;




function animace() {
   
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



pink.addEventListener('click', () => {
    kostka.src = './img/0kostka' + hod + '.png';
    color = 1;
});

gold.addEventListener('click',  () => {
    kostka.src = './img/1kostka' + hod + '.png';
    color = 2;
});





button.addEventListener('click',  () => {
console.log(hody);

    if (timer == false) {

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
        statistika.innerHTML = statistikyVypis();

    }
});


function Soucet() {

    let soucet = 0;

    hody.forEach(function(value){

soucet+= value;


    });

return soucet;
}



function maximum() {

    let max = 1;

    hody.forEach(function (value) {

        if (value > max) max = value;
    });

    return max;


}

function minimum() {

    let min = 6;

    hody.forEach(function (value) {

        if (value < min) min = value;
    });

    return min;


}


function statistikyVypis() {

    let vysledek  = `<p>Poslední hozená hodnota: ${hod}</p>`; /* hody.[hody.length -1] */
    vysledek  += `<p>Celkový počet hodů: ${hody.length}</p>`;
    vysledek += `<p>Součet: ${soucet}</p>`;
    vysledek += `<p>Průměr: ${(Soucet() / hody.length).toFixed(2)}</p>`;
    vysledek += `<p>Maximum z hodů: ${maximum()}</p>`;
    vysledek += `<p>Minimum  z hodů: ${minimum()}</p>`;

    if (soucet == 666) return vysledek += '<p> Získal jsi ďábelské číslo</p>';

if (hody.length >=5) {

gold.style.display = "block";
pink.style.display = "block";

}

return vysledek;

}


