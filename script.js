const color=document.getElementById('color');
const colorButton=document.getElementById('color-button');
const bgColor=document.getElementById('wrap');
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorButton.addEventListener('click',changeColor);
function changeColor(){
let randomColor='#';
for(let i=0;i<6;i++){
randomColor+=randomHexValue();
}
color.innerHTML=randomColor;
bgColor.style.backgroundColor=randomColor;
}

function randomHexValue(){
let randomIndex=Math.floor(Math.random()*15)
return hex[randomIndex];
}
console.log(randomHexValue());