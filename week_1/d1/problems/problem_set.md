## Problem Set W1D1

This problem set will test your understanding of how JavaScript is evaluated.
Check your answers by running the lines code. Type out these expressions and avoid
copy & paste. Get used to typing JavaScript! Some of these answers are obvious but
run the code anyway to get familiar with the workflow for running JavaScript.


### Expression Evaluation Round 1

Predict what the following JavaScript expressions will evaluate to. Open your command
line and use the **Node REPL** to check if you are correct.

```js
4 + 4 / 2

(2 + -7) * 3

101 % 10

12 - 4 % 3

true && false

true && !(false || false)

!true && !(false || false)

'cat' + 'dog'

2 + 'pizza'

2.5 * 'fish'

5 >= 11

5 === 5.0

7 !== 7.1

5 + 5 > 8

6 + 6 !== 12

2 > 1 || false

'true' === true

10 % 2 === 0

21 % 2 === 0

21 % 2 !== 0

21 % 2 === 1

12 % 3 === 0

9 % 3 === 0

14 % 3 === 0

'new york'[0]

'new york'[1]

'san francisco'[2 * 3]

'bootcamp'[3].toUpperCase()

'bootcamp'.indexOf('T')

'bootcamp'.indexOf('camp')

'bootcamp'.indexOf('o') > -1

'science'.indexOf('x') === -1
```

### Expression Evaluation Round 2

Predict what the `console.log` lines will print out. Test your work by writing
these code snippets to `.js` files and running them. Put each snippet into it's own
`.js` file and see what the `console.log`s print out. Reference the `running_javascript`
reading for how to run `.js` files.

```js
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ?
idx * 2;
console.log(idx); // ?
```

```js
// 2
let num = 33;
const isEven = num % 2 === 0;
console.log(isEven); // ?
console.log(!isEven); // ?
```

```js
// 3
const str1 = 'marker';
const num = 'whiteboard'.length - str1.length;
console.log(num); // ?
const str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
const char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
```

```js
// 4
const sentence = 'welcome to bootcamp prep';
const lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar)); // ?
```

### Conditionals

Predict what will happen in the following examples. Which `console.log`s will actually
print?
To check your work, type these code snippets to `.js` files. No copy and pasting!
After, feel free to play around with the variable (by assigning your own value)
in each example to experiment!

```js
// 5
const age = 30; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
```

```js
// 6
const str = 'pizza'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
```

```js
// 7
const num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
```

```js
// 8
const num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
```

```js
// 9
const str = 'JosEphs BootCAMP'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
```

```js
// 10
const num = -44; // try different numbers here

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
```

### Conditional Muscle Memory

Practice typing the syntax for conditionals. **Type each snippet 10 times each to
burn the muscle memory into your typing fingers!** Be sure to use proper spacing and
indentation, type it **exactly** as shown below. Run the code after each time to make
sure it runs. You'll realize how easy it is to forget parentheses or braces. Syntax
errors like this will cause your code to be totally misunderstood by the computer.
Practice, practice, practice!

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
}
```

```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
```

```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}
```
