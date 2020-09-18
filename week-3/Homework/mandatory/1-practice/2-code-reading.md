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

on line 4, x is read from the variable on line 3 as it is within block scope and will reference the closest variable. whereas on line 6 x is read from the global variable on line one, as the variable on line 3 is not available outside of the block scope 

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

when f1 is called x = 10 (global variable),
console.log(f1()) will be undefined as there is no return from the function
console.log(y) will log nothing as Y is only available within the scope of function f1

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
x is assigned to a constant and can therefore not be changed, it will still be 9 after running function

whereas with the object what is inside can be changed even tho const is used. so the value of x within the object can increase to x:10 using function f2 