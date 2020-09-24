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
They have different scope. line 4 is within the curly braces and gets defined using let so x is only 2 within those curly braces.

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
10, undefined
x gets assigned 10 and is then consoled from within the function which is called on line 32. y is defined as y inside the function so the y which is console logged is not defined within the global scope so is undefined.

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
9
{x:9}
the f1 function is called with 9 as the argument. Although this function returns 10 that is not consoled. the x defined on line 44 is consoled.Its the same for the object passed into the function f2. What is consoled is the const assigned the object on line 54.
