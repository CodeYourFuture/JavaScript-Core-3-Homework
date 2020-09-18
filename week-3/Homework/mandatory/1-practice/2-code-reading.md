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

line 6 will print out 1 as x in line 6 is global scoped which means it takes data from line 1. Line 3 is in {} which means the the x on line 3 is changing what x was originally but this only works inside {} which is why ;ine 4 will print 2 instead.

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

The first console log will print out 10 as the x is global scoped and can be accessed anywhere. However for y it will come out as an error or it not being defined as it is not global and the y is only accessible inside the function.

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

The console.log(x) will be 9 as x is defined using a const variable which means it cannot be changed
The console.log(y) will be {x:10} and the f2 function can change the object and keys in the object can be overwritten.
