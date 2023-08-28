const Btn = document.getElementById('btn');
let color = ['red' , 'orange' , 'green' , 'yellow' , 'tomato']

Btn.addEventListener('click' , () =>{
 let newColor = color[Math.floor (Math.random () * color.length) ];
   
   document.body.style.background =  newColor
})
