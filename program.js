
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
//[userId, username, email, age, firstName, lastName];
let userArray = process.argv.slice(2);
let userObject = {};
[, userObject.username, userObject.email] = userArray; //excluding first cell value
console.log(userObject);