const input=document.getElementById('input');
const box=document.getElementById('box');

const changeBorderRadius=()=>{
const value=input.value;
box.style.borderRadius=value+'px';
}
input.addEventListener("input",changeBorderRadius)
document.write(value);
