Did you know that destructuring can also be used on objects as well.

We can use destructuring to extract values from an object and assign them to variables in one line.

```
let person = {
    firstName: "Bruce",
    lastName: "Wayne"
}

let { firstName, lastName} = person;

console.log(`Batman is ${firstName}, ${lastName}`);
```

The program above will print `Batman is Bruce Wayne`. Notice how we use the `{}` characters since it is an object rather than `[]` which is used when it is an array.

# Exercise

- What is the syntax to destructure the object `personOne` in exercise-1.js?
- Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.
