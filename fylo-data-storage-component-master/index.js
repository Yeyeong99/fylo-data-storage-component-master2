const usedStorage = document.getElementById('used-storage');
const input = document.querySelector("input");
const leftStorage = document.querySelector("h1");


function caculateLeft() {
    leftStorage.innerText=1000-input.value;
    usedStorage.innerText = input.value;
}
caculateLeft();
input.addEventListener("click", caculateLeft)