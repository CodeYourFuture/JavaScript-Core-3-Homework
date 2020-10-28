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

 <!-- the first 'x' declared in line 1 is global and the second 'x' declared in line 3
 is block scoped and is undefined outside that block. -->

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

<!-- at line 34 the invoked function will log 'x' which is a global variable declared 
as the number 10 while at line 35 'y' will not be loged as it is undefined ouside 
the function f1() -->


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
<!-- 
at line 57 the code will log 'x' as 9 as it was origionaly declared 
at line 60 'y' was declared as an object with one element 'x: 9' 
function f2() at 62 will change the value of y["x"] from 9 to 9+1 
 and thus at line 68 the code will display 'y' as { x: 10 } -->
