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

// Because of scope, first x in the global scope , after that second x inside local scop. 

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

// it will log 10 for x .But it will give an error that y is not defined .. because the log for y made out of side the scope the y have been defined in .. (let inside the  block scoped)

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

What will be the output of this code. Explain your answer in 50 words or less

//It will log 9  and x =10  and because  x defined with const and const can not be reassigned (constant) the same applied for the const object if we reassigned the object or we attempted to overwrite it, but the keys for that object are not protected so we can reassign them or overwrite them.