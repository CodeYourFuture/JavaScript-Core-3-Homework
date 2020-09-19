# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    {
3        let x = 2;
4        console.log(x);
5    }
6    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

## Answer 1

The console log on line 4 refers to the block scoped function declared on line 3, whereas the console log on line 6, refers to the globally scoped variable declared on line 1;

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
## Answer 2

The first console log to be displayed will be from line 31, output is from the globally scoped x variable: 10. The 2nd console log attempts to display the return value of f1(): undefined. The 3rd console log causes an error as the y variable is out of scope.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less

## Answer3

The 1st  log displays the global variable x: outputs 9. f1() takes a copy of the globally scoped x, therefore x is not affected by f1(). The 2nd logs the structure of object y,  showing that the object's property changes from 9 to 10 due to f2() receiving a reference to y.