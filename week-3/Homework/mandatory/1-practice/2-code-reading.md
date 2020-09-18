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

They output different numbers because the scopes of the x variable are different.


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

The output of this code will be 10 and undefined. The x variable have a global scope which means can be accessed inside other scopes. The y variable it's defined inside a functions scope and we are trying to display it outside of the function( where it's scope is not recognised).

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

The output of the code will be x = 9 and y = 10. 
X is a integer const and cannot be changed. 
Y is a const object but we can change the value of the x inside. If we try to reasign the y object then this will throw an error.
