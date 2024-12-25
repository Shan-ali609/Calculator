const display = document.getElementById('display');
const button = document.querySelectorAll('button');


let buttonarray = Array.from(button);
// console.log(buttonarray);  

let string = '';

buttonarray.forEach(val => {
    console.log(val);
    val.addEventListener('click', (e) => {
       if(e.target.innerHTML == 'Del'){
        string = string.substring(0,string.length-1);
        display.value = string;
       }else if (e.target.innerHTML == 'AC') {
             string =  '';
             display.value= string;
       }else if (e.target.innerHTML == '=') {
        string = eval(string)
        display.value= string;
         }
       else{
        string +=e.target.innerHTML;
        display.value = string;
       }


     
        
    })


});