// //ex.0 
let matrix = [['a','b','c'],
            ['home','cat','dog'],
            ["red", "green", "blue"]];
function printMatrix(x){
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            console.log(x[i][j]);
        }
    }
}
printMatrix(matrix);
//ex.1
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
function sumOfColumns(x){
    let sum=[0,0,0];
    for(let i=0; i<x[0].length; i++){
        let grow = 0;
        for(let j=0;j<x[i].length;j++ ){
            sum[i] +=parseInt(x[i][j]);
        }
    }
    console.log(sum)
}
sumOfColumns(matrix1);

//ex.2
let matrix2 =  [
    [1,2,3],
    [4,5,6],
    [7,]
];
function smallestInRow(x){
    let sum=[];
    for(let i = 0; i<x.length; i++){
        let smaller = x[i][0];
        for(let j=1;j<x[i].length;j++ ){
            if(smaller > x[i][j]){
                 smaller = x[i][j];
            }
            else{
             continue;
            }
        }sum.push(smaller);
    }console.log(sum);
}
smallestInRow(matrix2);
// //ex.4
let number4 = [10,2,'b',5,'s','a',1];
function sorted(x){
    let str = [];
    let num = [];
    for(let i = 0; i<x.length; i++){
        if(typeof x[i] === typeof 3 ){
              num.push(x[i]);
        }
          else{
            str.push(x[i]);
          }
        str.sort();
         num.sort((a, b) => a - b);
}x=num.concat(str);
console.log(x);
}
sorted(number4);
// //ex.5 
function shuffle(x){
    let list = [];
    while (x.length > 0) {
        let randomIndex = Math.floor(Math.random() * (x.length));
        list.push(x.splice(randomIndex, 1)[0]);
    }
    console.log(list);
}
shuffle([1,5,8]);
//ex.6
//index:0,element:1
//index:1,element:2
 //index:2,element:3
//index:3,element:4
// index:4,element:5

// //ex.7
function number7(){
    let symbol = ["***"];
    for(let i = 1; i<=5; i++){
        let spaces = " ".repeat(i*2);
       console.log(spaces + symbol+spaces);
    }
}
number7();

//ex.8
function number8(){
    let symbol = "******";
    for(let i = 5; i>=1; i--){
        symbol = symbol.slice(0,-1);
       console.log(symbol);
    }
}
number8();
