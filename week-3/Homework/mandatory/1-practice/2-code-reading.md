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

- They belong to different scopes. Also `x` on line 3 will 'over shadow' the `x` from global scope as they have the same name.

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

- First console.log will print `10` as it can access the outer scope.
- Second console.log will throw a reference error as `y` is not accessible from the global scope.

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

- First console.log will will print `9` as we are not modifying it by just calling `f1` function and this is a constant variable which would throw an error if we would try to do so.
- Second console.log will print `{ x: 10}` because objects are of reference type. `f2` will modify the property of referenced object.
