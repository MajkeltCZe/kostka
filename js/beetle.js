const beetle = document.getElementById('beetle');
const cube = document.getElementById('cube');
const text = document.getElementById('text');
const image = document.getElementById('image');

let t = 1;
let throws = [];
let timer2 = false;
var i = 1;

function animated() {
   
   t= Math.ceil(Math.random() * 6);


cube.src = './img/kostka' + t + '.png';

}



beetle.addEventListener('click',  () => {
    
    
        if (timer2 == false) {
    
            timer2 = setInterval(animated, 150);
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
    
    
 function Game () { 
   
    

console.log(i);
   




 if (t == i) {


image.src = './img/' + i + '.png'
i++;




} 





if (throws.length > 200) {

text.innerHTML = 'Konec hry';
beetle.style.display = "none";

} 



 }
  