// let example = 123456789;
// console.log(example);

// let roundUp = 1.5;
// let rounded = Math.round(roundUp);
// console.log(rounded);

// var n = 128;
// n = n.toString();
// console.log(n);

// let fruit = "orange";
// if(fruit.length > 5) {
//     console.log(`The fruit name has more than five characters.`);
// } else
//     console.log(`The fruit name has five characters or less.`);

//for-loop
// let total = 0;
// let limit = 10;
// for (var i = 0; i < limit; i++) {
//    total += i;
// }
//    console.log(total);

//Arrays
// let pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];
// console.log(pizzaToppings);

//array-filtering
let numbers = [1,2,3,4,5,6,7,8,9,10];
let filtered = numbers.filter(function evenNumber(number) {
    return number % 2 === 0;
});
console.log(filtered);