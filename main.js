const containerDom = document.getElementById('container');

for (let x=1; x<=100; x++){

    

    if (x%3 == 0 && x%5 == 0){
        containerDom.innerHTML += "<div class='box box1'>FizzBuzz</div>"
        console.log('FizzBuzz');
    } 
    else if (x%3 == 0){     
        console.log('Fizz');
        containerDom.innerHTML += "<div class='box box2'>Fizz</div>"


    } 
    else if (x%5 == 0){     
        console.log('Buzz');
        containerDom.innerHTML += "<div class='box box3'>Buzz</div>"


    } 
    else {
        console.log(x);
        containerDom.innerHTML += "<div class='box'>" + x + "</div>"
    }
}