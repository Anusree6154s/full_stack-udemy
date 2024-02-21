# JavaScript Array Methods and Emojipedia

This README provides an overview of JavaScript array methods and how they are applied in the code. The code also demonstrates the usage of Emojipedia data.

## JavaScript Array Methods

### Map
The `map` method is used to create a new array by performing an operation on each item in an existing array. In this code, it doubles each number in the `numbers` array using the `map` method. Additionally, it demonstrates the use of the `forEach` method for the same operation.

```javascript
const map = numbers.map((x) => x * 2);
```

### Filter
The `filter` method is utilized to create a new array that contains only the items that satisfy a specific condition. In this code, it creates a new array with numbers greater than 10. It also showcases how to use `forEach` for a similar purpose.

```javascript
const filter = numbers.filter((num) => num > 10);
```

### Reduce
The `reduce` method accumulates a value by applying a function to each item in an array. The code demonstrates the use of `reduce` to calculate the sum of all numbers in the `numbers` array.

```javascript
var num = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});
```

### Find and FindIndex
The `find` method returns the first item that matches a condition from an array, while `findIndex` returns the index of the first matching item. The code showcases how to use these methods.

```javascript
const find = numbers.find((num) => num > 10);
const findIndex = numbers.findIndex((num) => num > 10);
```

## Emojipedia
This section of the code imports data from Emojipedia and uses the `map` method to extract the meanings of emojis while truncating them to a maximum length of 100 characters. Two different arrow function syntaxes are demonstrated for `map`.

```javascript
const array = emojipedia.map((data) => data.meaning.substring(0, 100));
```

Feel free to use this README to document and explain your JavaScript code that involves array methods and the usage of Emojipedia data.