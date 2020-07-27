# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rtnrtn/lotide`

**Require it:**

`const _ = require('@rtnrtn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Retrieves the first element of an array.
* `tail(array)`: Retrieves every element except the head of an array.
* `eqArrays(arrayA, arrayB)`: Compares two arrays for a perfect match.
* `without(source, itemsToRemove)`: Takes in a source array and an itemsToRemove array, returning a new array with only items from source array that are not in itemsToRemove.
* `middle(array)`: Returns an array with only the middle element(s) of a provided array -- a single element for arrays with an odd number of elements, two elements for arrays with an even number of elements, and an empty array for arrays with one or two elements. 
* `countOnly(allItems, itemsToCount)`: Takes in an array and an object, returning an object containing counts of everything the input object listed.
* `countLetters(string)`: Takes in a string and returns a count of each of the letters in that string.
* `letterPositions(string)`: Takes in a string and returns the index position(s) of each letter.
* `findKeyByValue(object, value)`: Searches for a key on an object whose value matches input value. 
* `eqObjects(objectA, objectB)`: Compares two objects for a perfect match.
* `map(array, callback)`: Takes in an array to map and a callback function, returning a new array based on the callback function.
* `takeUntil(array, callback)`: Takes in an array and a callback function, returning a slice of the array starting at the beggining until the callback returns a truthy value. 
* `findKey(object, callback)`: Takes in an object and a callback, returning the first key that returns a truthy value in the callback.