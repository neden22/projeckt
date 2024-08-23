let numbers = [];
for (let i = 0; i <10; i++) {
    numbers.push(Math.floor(Math.random() * 100) +1);
}
//Власна реалізація методу reverse
function myReverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >=0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

numbers.reverse();

console.log(numbers);

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; j < n -i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr [j + 1]] = [arr[j +1], arr[j]];
        }
    }
}