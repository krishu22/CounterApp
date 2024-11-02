const countValue = document.getElementById('counter');

function increment(){
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
};

function decrement(){
    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;
};