const pink = document.getElementById('pink');
const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const button = document.getElementById('button');
const gold = document.getElementById('gold');
const blue = document.getElementById('blue');
var myMusic= document.getElementById("music");
const musicbutton = document.getElementById('musicbutton');

var o = true;


let hod = 1;
let hody = [];
let timer = false;

let soucet = 0;
let prumer = 0;

var color = 0;


musicbutton.addEventListener('click',() => {
 
   if (o == true) {
        myMusic.play();
        o = false;
  musicbutton.innerText='Zastavit hudbu';
  
  
    }

    else {
        myMusic.pause();
        o = true;
        musicbutton.innerText = 'Pustit hudbu';
    }


});














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

    let vysledek  = `<p><strong>Posledn?? hozen?? hodnota:</strong> ${hod}</p>`; /* hody.[hody.length -1] */
    vysledek  += `<p><strong>Celkov?? po??et hod??:</strong> ${hody.length}</p>`;
    vysledek += `<p><strong>Sou??et:</strong> ${soucet}</p>`;
    vysledek += `<p><strong>Pr??m??r:</strong> ${(Soucet() / hody.length).toFixed(2)}</p>`;
    vysledek += `<p><strong>Maximum z hod??:</strong> ${maximum()}</p>`;
    vysledek += `<p><strong>Minimum  z hod??:</strong> ${minimum()}</p>`;

    if (soucet == 666) return vysledek += '<p> Z??skal jsi ????belsk?? ????slo</p>';

if (hody.length >=5) {

gold.style.display = "initial";
pink.style.display = "initial";
blue.style.display = "initial";
}

if (hody.length >= 10) {
musicbutton.style.display = "initial";



}



return vysledek;

}


