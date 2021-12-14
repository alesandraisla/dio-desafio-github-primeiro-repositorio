let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    console.log(currentNumberWrapper)
    if(currentNumberWrapper.innerHTML > 10) {
        document.getElementById("btnIncrement").disabled = true;
        currentNumberWrapper.style.color = "black";
        alert('A contagem é até 10!')
    } else {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumberWrapper.innerHTML <= 0 ) {
        document.getElementById("btnDecrement").disabled = true;
        currentNumberWrapper.style.color = "red";
        alert('A contagem é até 0!')

    } else {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.innerHTML = currentNumber;
    }
}