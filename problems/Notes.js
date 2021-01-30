let num = 3434333333
let arr = num.toString().split("");
let finalStr = "";
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1){
        finalStr += arr[i] + "-";
    }
    else {
        finalStr += arr[i];
    }
}
console.log(sumEvenNumbers(1,2,3,4,5,6,7,8))