// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };



// const properties = Object.keys(openingHours);
// console.log(properties)

// let openStr = 'we open on ${properties.length}';

// for (const day of properties){
//     openStr += '${day}';
// }


// console.log(openStr)



// const values = Object.values(openingHours);
// console.log(values);


// const entries = Object.entries(openingHours);

// for (const x of entries){
//     console.log('On ${key} we open ${open}')
// }


/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,HTMLAllCollection,
//     team2: 6.5,
//   },
// };


// for (const [i, player]of game.scored.entries())
//     console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds)
//     average += odd;
//     average /= odds.length;
//     console.log(average);

// for(const [team, odd] of Object.entries(game.odds)) {
//    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//    console.log(`Odd of ${teamStr} ${odd}`);

// }

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',

]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordorsSet.size); 

for (const order of ordersSet) console.log(order);
const staff = ['Waiter', 'Chef', 'Waiter','Manager'];
const staffUnique = [...new Set(staff)]
console.log(staffUnique);

const rest = new Map();
rest.set('name', 'Classino Italiano');
rest.set(1, 'Firenze, Italy')
rest.set(2,'Liston, Portugal')

rest.set('categories', ['Itslisn', 'Pizzeria'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')


const arr = [1,2]
const time = 21;
console.log(rest.get(time> rest.get('open') && time < rest.get ('close'))) 
console.log(Object.entries(openingHours))


const question = new Map([
      ['question', 'What is the best programming language in the world?'],
      [1, 'c'],
      [2, 'JS']
])

for (const [key, value] of question){
      if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

for (const[min, event] of gameEvents){
      const half = min <= 45 ? 'First': 'SECOND';
      console.log(`[${half} HALF] ${min}: ${event}`)

}

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0])
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('portugal'))
























