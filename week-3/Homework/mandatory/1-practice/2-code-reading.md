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
On line 6, x is a global variable. On line 4, x is a local variable whose scope is within a block of lines 2 through 5.

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
There will be:
10 - x is a global variable. (line 28)
undefined - the function f1 doesn't return any value. (line 32)
error - variable y is not defined - variable y has a scope only within the function f1. (line 33)

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

On line 47 defines a global constant x with value 9.
On line 54 calls function f1, but the result doesn't set to any variable.
Function f1 gets the value of constant x as a parameter and doesn't change it (and even can't).
On line 55 the result will be 9.
On line 57 defines a global constant and sets to object.
On line 64 calls function f2, but the result doesn't set to any variable.
Nevertheless, function f2 gets an object y as a parameter and change its property. 
On line 65 the result will be {x: 10}.
