const {shuffleArray} = require('./utils')

let testArray = [1,2,3,4,5]

describe('shuffleArray should', () => {
   test('shuffleArray ', () => {
    expect(shuffleArray(testArray).length).toEqual(testArray.length)
   })

   test('shuffle array to return array', () => {
       expect(shuffleArray).toBeTruthy()
   })
  
})