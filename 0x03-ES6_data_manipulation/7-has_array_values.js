export default function hasValuesFromArray(set, array) {
  // Use the every() method to check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}

// Example usage:
const mySet = new Set([1, 2, 3, 4, 5]);
const myArray1 = [1, 2, 3];
const myArray2 = [3, 4, 6];

console.log(hasValuesFromArray(mySet, myArray1)); // true, all elements in myArray1 exist in mySet
console.log(hasValuesFromArray(mySet, myArray2)); // false, not all elements in myArray2 exist in mySet	
