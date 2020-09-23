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

The line 4 and line 6 displays different output because the line 4 is inside the block scope and get the value from line 3 . The line 6 display the value which it get from line 1 which is global variable. and the value of x at line 3 is not accessible at line 6 because of its block scope.


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
The output will be 10 from line 34 and undefined from line 35. The reason of undefined output of y at line 35 is because y is defined inside the block scope at line 31 and not accessible outside the block scope.


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
As the x is assigned as the constant variable so its value cannot be changed after the function run and will display the value 9.
As the y is constant but it is assigned to an object thats why with in the object the value of x is changed by using function f2 and will display { x:  10 } .