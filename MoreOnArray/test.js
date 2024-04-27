// const myArray = []
// %DebugPrint(myArray)


// Array is of two types
// Continous, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// This 10 elements has introduced holes in the array and 
// hence our array has become less optimised
//HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// Optimisation sequence of various array
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'    // HOLEY_ELEMENTS
arrFour[1] = '2'    // HOLEY_ELEMENTS
arrFour[2] = '3'    // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1')   // PACKED_ELEMEMTS
arrFive.push('2')   // PACKED_ELEMEMTS
arrFive.push('3')   // PACKED_ELEMEMTS


const arrSix = [1,2,3,4,5]

arrSix.push(NaN)        // DOUBLE
arrSix.push(Infinity)   // DOUBLE


// prefer these method as it is more optimised
// for, for-of, forEach





