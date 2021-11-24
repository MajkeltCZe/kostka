const beetle = document.getElementById('beetle');
const cube = document.getElementById('cube');
const text = document.getElementById('text');
const image = document.getElementById('image');
const tries = document.getElementById('tries');


let t = 1;
let throws = [];
let timer2 = false;
var i = 1;
var pocetKol = 0;



function animated() {

    t = Math.ceil(Math.random() * 6);


    cube.src = './img/kostka' + t + '.png';

}



beetle.addEventListener('click', () => {

    if (beetle.innerText == 'Restart') {
pocetKol++;
        
        image.src = './img/0.png';
        

        }

    

 
    if (timer2 == false) {

        timer2 = setInterval(animated, 250);
        beetle.innerText = 'Zastav';
    }
   
   

   
    else {

        beetle.innerText = 'Hrej';
        clearInterval(timer2);
        timer2 = false;
        throws.push(t);
        Game();


    }

  
    

});



function Game() {

   
    tries.innerHTML = `<p><strong>Počet hodů v aktuálním kole:</strong> ${throws.length}</p>`;
   
    if (pocetKol >= 1) {
    
        tries.innerHTML += `<p><strong>Celkový počet kol:</strong> ${pocetKol}</p>`;
       }
    
   
    if (t == i) {

        if ( i == 6) {

            beetle.innerText = 'Restart';
            
        }

        image.src = './img/' + i + '.png';
        i++;

    }

    if (throws.length >= 25) {
        beetle.innerText = 'Restart';
      image.src = './img/fail.png';
        

    }


    if (beetle.innerText == 'Restart') {

    throws.length = 0;
    i = 1;

}




}
    





