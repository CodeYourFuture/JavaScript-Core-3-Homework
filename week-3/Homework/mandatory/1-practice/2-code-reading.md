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
Answer:  The output is diffrent because the scope is diffrent the first x is outside the curly braces 

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
Answer : The output of the code will be: 
10   =========> the first console.log has called the function f1 which logs out the global variable x with the value 10;
              the function also intiate a varible y with a value 20 within its scope but does nothing with it.
error ==========> the second console.log will force  the debugger to print an error message because variable  y is unknown since it's declared in un accissible scope.                                        



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
Answer 1: The output will be 9 , since the function is called to increment the variable x but the result is not stored in any varilble. the value of x remain unchanged despite we have passed x as an arrgument for when the incrementing functin f1 was called. 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer 2 : since  x is stored within an object as a key into  a constent variable any operation will on it will alter it's value  Variable y will log {x:10}. 
