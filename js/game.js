const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const button = document.getElementById('button');

let hod = 1;
let hody = [];
let timer = false;


let soucet = 0;
let prumer = 0;


function animace() {

    hod = Math.ceil(Math.random() * 6);
    
    
    kostka.src = './img/kostka' + hod + '.png';


}




button.addEventListener('click', function() {
   
    if(!timer) {

        timer = setInterval(animace, 50);    
        button.innerText = 'Zastav';
    }
     else {




        button.innerText = 'Hraj';
clearInterval(timer);
timer = false;
hody.push(hod);
statistikyVypis ();
soucet += hod;
prumer = soucet / hody.length;






   }



    
   




});

/*
function Soucet() {

let sum = 0;

for (let i = 0;i < hody.length;i++) {
sum += hody[i];

}
return sum;

console.log(soucet);

}
*/



function maximum() {

let max = 1;

hody.forEach(function(value,index){

if(value  > max) max = value;
})

return max;


}

function minimum() {

    let min =  6 ;
    
    hody.forEach(function(value,index){
    
    if(value  < min) min = value;
    })
    
    return min;
    
    
    }


function statistikyVypis () {
statistika.innerHTML = `<p>Poslední hod: ${hod}</p>`; 
statistika.innerHTML += `<p>Celkový počet hodů: ${hody.length}</p>` ;
statistika.innerHTML += `<p>Součet: ${soucet}</p>` ;
statistika.innerHTML += `<p>Průměr: ${(prumer).toFixed(2)}</p>` ;
statistika.innerHTML += `<p>Maximum: ${maximum()}</p>` ;
statistika.innerHTML += `<p>Minimum: ${minimum()}</p>` ;
}


