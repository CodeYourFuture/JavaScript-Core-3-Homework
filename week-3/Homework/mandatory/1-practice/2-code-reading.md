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
Ans:line 4 use the local variable x which is defined at line 3 in the  block and line 6 use the global variable x which id defined at line 1.

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
Ans:x is a global variable so when we call function f1() at line 32 its display x value which is 10.
y is the local variable in function f1 so when we call function f1() at line 33 its display undefined because we cannot access a variable from outside of its scope.the scope of variable y is just whiten the function f1.y is local variable of function f1()
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
Ans:line 52 will display 9 which is the value of x although on line 51 its call the function f1 which return a value after adding one in it but it use the original value of variable x instead of value return by function f1();
line 61 call a function f1() with an argument y which ia an object({x:9}).the function f1 add one in the member of object x and return the whole object(x:10).line 62 display object which is now {x:10}