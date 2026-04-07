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
