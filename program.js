
///// ### Count-to-6 \\\\\

//#1
//console.log("HELLO ES6");

//#2 - Template strings
// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`);

//#3 - Arrow Functions Part 1
// var inputs = process.argv.slice(2);
// var results = inputs.map(letter => letter[0])
//                     .reduce((last, first) => last + first);
// console.log(`[${inputs}] becomes "${results}"`);

//#4 - Arrow Functions and This
    // var foot = {
    //     kick: function () {
    //         this.yelp = "Ouch!";
    //         setImmediate( () => {
    //             console.log(this.yelp);
    //         });
    //     }
    // };
    // foot.kick();

//5 Destructuring
//destructuring array and assigning it to object
//[userId, username, email, age, firstName, lastName];
// let userArray = process.argv.slice(2);
// let userObject = {};
// [, userObject.username, userObject.email] = userArray; //excluding first cell value
// console.log(userObject);

//6 Spread
//let numbers = process.argv[2];
// let numbers = process.argv.slice(2);
// let min = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${min}`);

//7 Rest
// module.exports = function average (...args) {
//     let length = args.length;
//     //console.log(length);
//     let sum = args.reduce((last, prev) => last + prev);
//     return sum / length;
// };

//8 Default arguments
// module.exports = function midpoint(l = 0, u = 1) {
//         return (l + u) / 2;
// };
//or
//module.exports = (x = 0, y = 1) => (x + y) / 2;

//9 Default arguments part 2
// module.exports = (str, n = str.length) => {
//     let exclaim = '!';
//     return str + exclaim.repeat(n);
// };
//OR
//    module.exports =
//        (string, bangs = string.length) => string + "!".repeat(bangs);

//10 TAGGED TEMPLATE STRINGS
    // console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    // function html(strings, ...values) {
    //     let escape = ;
    //     // what goes here?
    //     return escapedS;
    // }





////////////    FUNCTIONAL JAVASCRIPT    \\\\\\\\\\\\\\\\\\\\\\\

//1
// const upperCaser = (string) => string.toUpperCase();
// module.exports = upperCaser;

//2 Higher Order functions
// const repeat = (operation, num) => {
//     for (let i = 0; i < num; i++) {
//         operation();
//     }
// }
// //OR
//     // function repeat(operation, num) {
//     //   if (num <= 0) return
//     //   operation()
//     //   return repeat(operation, --num)
//     // }
// module.exports = repeat;

//3 Map
// function doubleAll(numbers) {
//     return numbers.map(value => value * 2);
// }
//     module.exports = doubleAll

//4 Filter
function getShortMessages (messages) {
    return messages.filter(each => each.message.length < 50)
                    .map(msg => msg.message);
}
module.exports = getShortMessages





























