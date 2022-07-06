const containerDom = document.getElementById('container');

for (let x=1; x<=100; x++){
    const div = document.createElement('<div></div>');
    let number = x;
    
    div.classList.add('box');

    containerDom.appendChild('<div></div>');

    if (x%3 == 0 && x%5 == 0){
        div.classList.add('box1');
        div.innerHTML = 'FizzBuzz';
    } else if (x%3 == 0){
        div.classList.add('box2');
        div.innerHTML = 'fizz';
    } else if (x%5 == 0){
        div.classList.add('box3');
        div.innerHTML = 'buzz';
    } else {
        div.innerHTML = 'number';
    }
}