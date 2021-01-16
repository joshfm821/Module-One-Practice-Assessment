/**
 * Takes in an array of people and sorts them by age
 * @param {Object[]} people - an array containing people objects
 * @returns {Object[]} - a sorted array
 *
 * ex: sortPeopleByAge([
  { name: "Corey", age: 100 },
  { name: "Sam", age: 18 },
  { name: "Sparky", age: 500 },
  { name: "Peter", age: 50 },
])
 * returns [
     { name: "Sam", age: 18 },
     { name: "Peter", age: 50 },
  { name: "Corey", age: 100 },
  { name: "Sparky", age: 500 },
]
 */

const sortPeopleByAge = people => {
  return people.sort((a,b)=> {
    return a.age - b.age;
  }).map((el)=>{
      return el;
  })
}

module.exports = sortPeopleByAge;
