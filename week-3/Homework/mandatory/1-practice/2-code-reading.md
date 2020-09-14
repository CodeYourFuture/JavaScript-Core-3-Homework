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


Line 4 will output 2 where as line 6 will output 1 because of the scope of variables. Scope of local variable declared on line 3 is limited and goes till the end of the block (till line 5). And console.log on line 11 will have access to the closest x which is on line 3 so it will output 2.


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


Firstly the code will output the value 10 because function f1() is called on line 32. Then it will output undefined for the console.log on line 32 because f1() is not returning anything for the output. Then it will throw an error for the console.log() on line 33 because y is not known outside of the f1 function so y is an undefined variable outside the function f1().


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



Output will be :
9
{ x: 10 }

the console.log() on line will print 9 because value of x is not changing inside the function because val is a local variable. and object y will change it's value as it is passed as a parameter and its  value is being inside the function so x:9 inside the object will change to 1.
