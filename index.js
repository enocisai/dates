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
