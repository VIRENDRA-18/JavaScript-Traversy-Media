const Number = [2,4,6,8,56.3]; // arr store numbers

const Fruits = ['Apple', 'Banana', 'Graps']; // arr store string

const MixArr = [12,24,46,'Virendra', true, 67.8]; // arr store mix values

const nestedArr = [1,3,5,[2,4,6],[10,20,30],['viru', 'Anshul']] // arr store values in nested form

console.log(MixArr.length);
console.log(Number.length);

console.log(nestedArr);



//   -------->>>>>>>>>>>>>>>>>>>>>>>>



// How to create arr in javascript

// there are 2 ways to create arr in javascript
 
// first - Array Literal

let Arr = [10,15,20,25,30];

console.log(Arr);

//  second -  Using the Array() Constructor

let UserName = new Array ('Virendra', 'Kumkum', 'Mudit', 'Nisha', 'Meena');

console.log(UserName.length);

console.log(UserName);


// Third -  Array.of() Method

const number = Array.of(1,2,3,4);

const Singlenumber = Array.of(5);

console.log(Singlenumber);


//  fourth -  Array.from() Method

const ArrString = Array.from('VIRENDRA');

console.log(ArrString);




//   How to Get/Access Elements from an Array in JS

//  We can access array elements using square bracket notation with the index


const User_Name = ['Virendra', 'Aman', 'Himanshu', 'Levish', 'Nitin',];

console.log(User_Name[0]);
console.log(User_Name[2]);
console.log(User_Name[1]);
console.log(User_Name[3]);


// we can also acces the array using loops
//   -->>   example 1
const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

console.log(salad);

// using for loop 
for (let i = 0; i < salad.length; i++) {
    console.log(salad[i]);
}

//   -->>   example 2
const EvenNumber = [2,4,6,8,10,12,14];

console.log(EvenNumber);

// Using For loop
for (let i = 0; i < EvenNumber.length; i++) {
    console.log(EvenNumber[i]);
}

//   -->>   example 3

let ClgSportsCulb = ['Drona Club', 'Sports Club', 'Technical Club'];

console.log(ClgSportsCulb);

// Using For loop
for(let i = 0; i < ClgSportsCulb.length; i++) {
    console.log(ClgSportsCulb[i]);
}


// Using forEach method

//   -->>   example 1

// salad.forEach((Vegetables, index) => {
//     console.log(`Element at index ${index} is ${Vegetabless}`)
// });









