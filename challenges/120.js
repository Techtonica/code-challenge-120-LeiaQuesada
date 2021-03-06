// Since you all have been reading about functional programming,
// let's create some useful functional-style JS.
//
// You have an array and you want to group it by some logic.
// In the \_functional\_ style you define that logic using a function
// and use it as an argument.
//
//
//
// ```
//
// // Let's say you want to group your pomeranians by weight class.
// pomeranians = [
//   { name: 'Osito', weight_kg: 3.5 },
//   { name: 'Maní', weight_kg: 3.9 },
//   { name: 'Bella', weight_kg: 7.2 }
// ]
// groupBy(pomeranians, (p) => Math.floor(p.weight_kg))\
// /*
//  {
//   '3': [
//         { name: 'Osito', weight_kg: 3.5 },
//         { name: 'Maní', weight_kg: 3.9 }
//       ],
//   '7': [{ name: 'Bella', weight_kg: 7.2 }]
//  }
// */
//
//  // or string by their length
// groupBy(['one', 'two', 'three'], (s) => s.length);
// // => { '3': ['one', 'two'], '5': ['three'] }
//
// ```
//
//
//
// Implement groupBy. Use other existing functions on Array if you want.
//

function groupBy(arr, logic){
  // return an object of keys with it's value as an array
  let resultObj = {};
  // iterate through the array elements, to check for multiple keys
  for (let element of arr) {
    // apply logic arg
    let property = logic(element);
    if(resultObj.hasOwnProperty(property)) {
      let value = resultObj[property];
      value.push(element);
    } else {
      // need to create an empty array for next key
      resultObj[property] = [];
      let value = resultObj[property];
      value.push(element);
    }
  }
    // console.log("i'm confused", resultObj);
    return resultObj;
}

pomeranians = [
  { name: 'Osito', weight_kg: 3.5 },
  { name: 'Maní', weight_kg: 3.9 },
  { name: 'Bella', weight_kg: 7.2 }
]
groupBy(pomeranians, (p) => Math.floor(p.weight_kg))
/*
 {
  '3': [
        { name: 'Osito', weight_kg: 3.5 },
        { name: 'Maní', weight_kg: 3.9 }
      ],
  '7': [{ name: 'Bella', weight_kg: 7.2 }]
 }
*/

groupBy(['one', 'two', 'three'], (s) => s.length);
// => { '3': ['one', 'two'], '5': ['three'] }

module.exports = groupBy;
