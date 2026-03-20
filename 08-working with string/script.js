
let x;

const Name = 'Virendra';

const Age = 23;


x = 'Hello my name is' + ' ' + Name + " " + 'I am ' + Age + ' ' +'year old';


// Template Literals

x = `Hello my name is ${Name} I am ${Age} year old`;


// string properties and Methods

const s = new String('Hello Viru');

x = typeof s;

x = s.length;

// Access the value by key

x = s[0];
x = s[1];

x = s.__proto__;

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(6);

x = s.indexOf('Viru')

x = s.slice(0,5)

x = s.substring(0,8);

x = s.slice(-4);

x = '    Hello guys  ';

x = s.trim();

x = s.replace('Hello', 'Hii');

x = s.includes('llo');

x = s.valueOf();

x = s.split('');
x = s.split(' ');

console.log(x);