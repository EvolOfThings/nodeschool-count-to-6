
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
module.exports = function midpoint(l = 0, u = 1) {
        return (l + u) / 2;
};


//module.exports = (x = 0, y = 1) => (x + y) / 2;

















