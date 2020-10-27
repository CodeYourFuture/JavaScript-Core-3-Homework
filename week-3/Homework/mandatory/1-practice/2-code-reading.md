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
 - because line 4 statement uses variable from line 3, and line 6 statement uses the variable from line 1

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
- first console.log statement will print 10
- second console statement will call the function which will print 10 again, then "undefined" will be printed because the return value of f1() is undefined
- third statement will cause an error because y is not in the same scope

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
- first console.log will print 9 (f1() does nothing to x because it copies the variable)
- second console.log statement will print { x: 10 } because the object y is first created and then the variable y is modified with f2() function, since the function modifies original object, not it's copy. 
  const allows the modification of the object attributes, but it does not allow the var y to be reassigned to another object.
