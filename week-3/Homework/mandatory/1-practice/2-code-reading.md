# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1() 
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

x on line 4 is referring to the x declared within it's block scope while the x on line 6 can only access the x on line 1 which is declared within a global scope. The main reason for the difference is the use of the keyword 'let' on line 3.

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
Line 33 will log 10 as x is a global variable, while line 34 will log an error message as the y declared in line 30 is outside of it's scope.

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

What will be the output of this code. Explain your answer in 50 words or less.
Lines 53 and 63 will log the original value of the global variable x which is 9 & y - {x:9} respectively, because that is the value that is declared within its scope. The result will however be different if the function call (on lines 52 & 62) was logged.
