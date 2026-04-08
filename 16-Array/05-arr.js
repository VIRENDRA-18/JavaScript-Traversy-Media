 
 // How to Add Elements to an Array

 let foods = ["pizza", "burger", "pasta", "momos", "sandwich"];

 // add the element in the end --->>>>   use push()

 foods.push('kheman');

 // remove the element in the end --->>>>   use pop()

 foods.pop();
 foods.pop();
 foods.pop();
 

 let newLength = foods.push('resgulaa')

 console.log(foods);

 //  add the element in the starting

 const User = ['Virendra', 'Ram', 'sita', 'Gita']

 User.unshift('Meena');

 // remove the element in the starting --->>>>   use shif()

 User.shift();

 console.log(User);


 // Adding Elements at a Specific Position

 // syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

 let Marks =  [67,89,45,78,90];

 Marks.splice(2,0,99);

 // remove Elements at a Specific Position 

 // syntax: array.splice(startIndex, deleteCount)

 Marks.splice(1,1);


 console.log(Marks);



 