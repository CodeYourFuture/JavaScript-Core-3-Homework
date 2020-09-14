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

***********************************************************************************************************************
# The answer is 

 let is block scoped .. so x between {} will not work outside this scope, it will log 2 because the log is inside the scop and although it can take the value from the global declaration but always the value of the variable will be taken from the nearst so it will take 2 not 1.. but the x = 1 is global and will work for the global scope and will log 1 . 
***********************************************************************************************************************


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

***********************************************************************************************************************
# The answer is 
it will log 10 as a value of x .. but it will give an error that y is not defined .. because the log for y made out side the scope the y had been defined in .. (let is block scoped)
***********************************************************************************************************************


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


***********************************************************************************************************************

# The answer is 
It will log 9  and {x:10} and the reason is x defined with const and const can not be reassined the same applied for the const object if we reassiend the object or we attemted to overwrite it, but the keys for that object are not protected so we can ressign them or overwrite them.
***********************************************************************************************************************

