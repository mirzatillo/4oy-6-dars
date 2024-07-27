// 1-masala

// let arr = [];
// let num = +prompt("son kiriting");
// for(let i = 1; i <= num; i++){
//     arr.push(i);
// }
// console.log(arr);

// 2-masala

// let arr = [1,2,3,4,5,6,7,8,9];
// let juft = 0;
// let toq = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 ==1) {
//         toq += arr[i];
//     } else{
//         juft += arr[i];
//     }
// }

// console.log("toq sonlar yeg'indisi", toq);
// console.log("juft sonlar yeg'indisi", juft);



// 3-masala

// let sum = 0;
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let res = arr1.concat(arr2);
// for(let i = 0; i < res.length; i++){
//     sum += res[i];
// }
// console.log(sum);


// 4 masala
// Berilgan massivni elementlarini teskarisiga aylantirib bering. Reverse ishlatish mumkin emas.

// let  arr= [1, 3, 5, 9, 7, 99]
// let res=[]

// for(let i=arr.length-1; i>=0; i--){
//     res.push(arr[i])
// }

// console.log(res);


// console.log(max);



// 6-masala

// let arr = [4,15,20,30,60];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 != 0) {
//         res.push(arr[i])
//     }
// }
// console.log(res);



// 7-masala

// let arr = [1,2,3,4,5,6];
// let res = [];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         sum = sum + arr[i];
//     }
//     if(sum % arr[i] == 0){
//         res.push(arr[i])
//     }
// }
// console.log(sum);
// console.log(res);



// 8-masala

// let arr = [5,6,7,8,9];
// for (let i = 1 ; i < arr.length; i++) {
//     arr[i] -= 1
// }
// console.log(arr);


// 9-masala

// let arr = [1,-2,3,-4,5,-6];
// let res = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//          res.push(arr[i]);
//     }
// }
// console.log(res.length);


// 10-masala

// let arr = [1,-2,3,-4,5,-6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

// 12 masala

// Massivdagi barcha musbat sonlarning ko'paytmasini hisoblang.
// let  arr= [2, 4, 8, 9, 7, 22]

// let max=1;
// for(let i=1; i <= arr; i++){
//     if (arr % 2==0) {
//         max=arr*arr
//     }
// }