//*  2020 - 03 - 19 //
// 03 - 19 - 2020 //

// let oldDate = "2020 - 03 - 19";

// const date = oldDate.split(" ");

// let temp = date[0];
// date[0] = date[4];
// date[4] = temp;

// let temp2 = date [0];
// date[0] = date[2];
// date[2] = temp2; 

// date[1] = "/";
// date[3] = "/";

// let finalDate = date.join("");

// console.log(finalDate);



function dateParser(oldDate){

  //Lets transform a string into an array 
  const date = oldDate.split("-")
 
  
  // Create a new array 
  const array = [date[1], date [2], date [0]]
  
  // Add a separator between months and year
  const finalDate = array.join("/");

  
 
  return finalDate
  
}

const result = dateParser("2020-10-05");

console.log(result)
