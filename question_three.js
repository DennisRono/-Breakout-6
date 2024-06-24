/** Difference btwn == & === */

let a = 10
let b = '10'

if (a === b) {
  console.log('They are equal')
} else {
  console.log('They are not Equal!')
}

/**
 * Double equals (==) - Does type conversion,  it converts the variables to the same type before making the comparison
 * Triple equals (===) - Does not do type conversion, It checks both data the type and the value.
 */
