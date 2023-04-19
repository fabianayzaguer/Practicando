
let number = document.getElementById('num').value;

function fibonacci(number){
    let serie = [0, 1] ;
  

    for(let i = 2; i <= number; i++) {
        serie.push (serie[i - 1] + serie[i -2]) ;
        
    }
   

document.getElementById('p').innerHTML = 'La suseción de Fibonacci hasta el valor de ' + number + ' es:' + serie;
}

document.getElementById('start').addEventListener("click", (e)=> {
    number = document.getElementById('num').value;
    (fibonacci(number))}

 
);
   



