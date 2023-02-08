/* This assignment will give you some practice with creating arrays and using their methods. */


//console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
//   // Challenge 1 Code
// for(let i = 0; i < students.length; i++){
//   const currentStudent = students[i]
//   console.log(currentStudent);
// }


//   console.log("\n");
//   console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  //const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

  // for(let i = 0; i < 1; i++){
  //   const reversed = grades.reverse(); 
  //   console.log(reversed);
  // }
  
  // console.log("\n");
  // console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  //const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code
  // for(let i = 0; i < positiveNumbers.length; i++){
  //   const currentNum = positiveNumbers[i];
  //   if(currentNum % 2 === 0){
  //     console.log(currentNum);
  //   }
  // }


  // console.log("\n");
  // console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  //const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
  // for(let i = 0; i < mixedSignNumbers.length; i++){
  //   const currentNum = mixedSignNumbers[i];
  //   if(currentNum % 2 === 0){
  //     console.log(currentNum);
  //   }
  // }


  
  ///console.log("\n");
 ///console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, using pop and shift.  Then console.log out each value in the array individually.
  //const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
  //let firstValues = symmetricalCapitals.shift();
  //console.log(firstValues);

  //let secondValues = symmetricalCapitals.shift();
  //console.log(secondValues);
  
  //let lastValue = symmetricalCapitals.pop();
  //console.log(lastValue);

  // for(let i = 0; i < symmetricalCapitals.length; i++){
  //   const currentLetter = symmetricalCapitals[i];
  //   console.log(currentLetter);
  // }


  //  console.log("\n");
  //  console.log("Challenge 6");
  // // Challenge 6
  // // Add a value (your choice!) to the start of the following array and two values (of your choice) using push and unshift. Then console.log out each value in the array individually.
   //const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // // Challenge 6 Code
  // fibonacciNumbers.push("smuffleupagus");
  // fibonacciNumbers.unshift("big bird");
  // for(let i = 0; i < fibonacciNumbers.length; i++){
  //   const currentItem = fibonacciNumbers[i];
  //   console.log(currentItem);
  // }

  


   //console.log("\n");
   //console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code
  //let characters = ["kenny", "Eric", "Kyle", "Stan"];
  //for (let index = 0; index <characters.length; index++) {
    //const currentCharacters =characters[index];
    //console.log(currentCharacters);
  //}




   //console.log("\n");
   //console.log("Challenge 8"); 
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
   //const emptyArray = [];
  // Challenge 8 Code
  //emptyArray.push("Chef","Tolkien");
  //emptyArray.unshift("Towelie","Scary Monster");

  // for(let i = 0; i < emptyArray.length; i++){
  //   const currentItem = emptyArray[i];
  //   console.log(currentItem);
  // } 



   //console.log("\n");
   //console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  // for(let i = 3; i < 11; i++){
  //   const currentStudent = students[i];
  //   console.log(currentStudent);
  // }


   console.log("\n");
   console.log("Challenge 10");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  let newStudentArr = students.slice(3,11);
  //console.log(newStudentArr)
  for(let i = 0; i < newStudentArr.length; i++){
    const currentItem = newStudentArr[i];
    console.log(currentItem);
  }



  // console.log("\n");
  // console.log("Challenge 11");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  //const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  
  
  
  // console.log("\n");
  // console.log("Challenge 12");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code



  
  // console.log("\n");

  // console.log("Challenge 13");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code



  
  // console.log("\n");
  // console.log("Challenge 14");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code


  
