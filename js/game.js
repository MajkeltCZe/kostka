const pink = document.getElementById('pink');
const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const button = document.getElementById('button');
const gold = document.getElementById('gold');
const blue = document.getElementById('blue');

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


blue.addEventListener('click',  () => {
    kostka.src = './img/kostka' + hod + '.png';
    color = 0;
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

    let vysledek  = `<p><strong>Poslední hozená hodnota:</strong> ${hod}</p>`; /* hody.[hody.length -1] */
    vysledek  += `<p><strong>Celkový počet hodů:</strong> ${hody.length}</p>`;
    vysledek += `<p><strong>Součet:</strong> ${soucet}</p>`;
    vysledek += `<p><strong>Průměr:</strong> ${(Soucet() / hody.length).toFixed(2)}</p>`;
    vysledek += `<p><strong>Maximum z hodů:</strong> ${maximum()}</p>`;
    vysledek += `<p><strong>Minimum  z hodů:</strong> ${minimum()}</p>`;

    if (soucet == 666) return vysledek += '<p> Získal jsi ďábelské číslo</p>';

if (hody.length >=5) {

gold.style.display = "initial";
pink.style.display = "initial";
blue.style.display = "initial";
}

return vysledek;

}


