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
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let filtered = numbers.filter(function evenNumber(number) {
//     return number % 2 === 0;
// });
// console.log(filtered);

//accessing array values
// let food = ['apple', 'pizza', 'pear'];
// console.log(food[1]);

//looping-through-arrays.js
// var pets = ['cat', 'dog', 'rat'];
// for (var i = 0; i < pets.length; i++){
//     pets[i] = pets[i] + 's';
// }
// console.log(pets);

//Objects
// let pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
// };
// console.log(pizza);

//Object-properties
// let food = {
//     types: 'only pizza'
// };

// console.log(food.types);

//Functions
// const eat = (food) => food + ' tasted really good.';
// console.log(eat("bananas"));

//Functions-arguments
// const math = (arg1, arg2, arg3) => arg2 * arg3 + arg1;
// console.log(math(53, 61, 67));

//Scope
     var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
       console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();























