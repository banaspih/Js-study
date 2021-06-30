nst/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');
  
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // LECTURES
  
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  /////////////////////////////////////////////////
  const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };


  const eurToUsd = 1.1;

//  const movementsUSD=  movements.map(function(mov){
//       return mov * eurToUsd;
//   })



//  const movementsUSD=  movements.map(mov =>
//      mov * eurToUsd
// );
//   console.log(movements)
//   console.log(movementsUSD)

// const movementsUSDfor = [];
//   for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//   console.log(movementsUSDfor)


// const movementsDescriptions =  movements.map((mov, i ) => {
//     if (mov > 0) {
//         return `Movement ${i + 1}: You deposited ${mov}`;

//     }else {
//         return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     }
//   })

//   console.log(movementsDescriptions);


// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('');

// console.log(username);


// const createUsernames = function(user){
//     const username = user.toLowerCase().split(' ').map(name => name[0]).join('')
//     return username;
// };


const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  })
};


//start at 0 
const calcDisplayBalance = function(movement){
  const balance = movement.reduce((acc, mov)=> acc + mov,0)
  labelBalance.textContent = `${balance} EUR`;

}

calcDisplayBalance(account1.movements)








const deposits = movement.filter(mov => mov > 0);

for (const mov of movements) if (mov > 0) depositsFor.push(mov);

const withdrawals = movements.filter(function(mov){
  return mov < 0;
});


const balance = movementd.reduce(function(acc,cur,i,arr){
  console.log(`Iteration ${i}: ${acc}`)
  return acc + cur
},100)


// const balance = movementd.reduce((acc,cur) => acc + cur
// ,100);


let balance2 = 0;
for (const mov of movements) balance2 +=mov;
console.log(balance2);


const max = movements.reduce((acc, mov)=> {
  if (acc > mov)
  return acc;
  else return mov;

}, movements[0]);

console.log(max);

//maximum values


// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(humanAges);
//   console.log(adults);
  
//   const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
//   return average

// }




const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov ) => acc + mov,0 )

const calcDisplaySummary = function(movements){
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}`

  const out = movements
  .filter(mov <= mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}`



  const interest = movements.filter(mov => mov > 0)
  .map(deposit => deposit * 1.2/100)
  .filter((int, i ,arr) => {
    console.log(arr);
    return int >= 1 
  })
  .reduce((acc, int) => acc + int,0)
  labelSumInterest.textContent = `${interest}`
}




// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(humanAges);
//   console.log(adults);
  
//   const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
//   return average

// }


// const avg1 = calcAverageHumanAge([5, 2 ,4 ,1, 15, 8 ,3])
// const avg2 = calcAverageHumanAge([16, 6, 10,5,6,1,4])

// console.log(avg1,avg2)

const firstWithdrawal = movements.find(mov => mov < 0)

console.log(movements)
console.log(firstWithdrawal)

console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
















