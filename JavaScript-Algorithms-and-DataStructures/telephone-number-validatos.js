//try solution on freeCodeCamp.com link to specific problem below:
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

const validatePhoneNumbersLengt = (str)=> {
  //then we filter non numberic elements
  let temp = []
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i).match(/[0-9]/)){
      temp.push(str.charAt(i))
    }
  }
  //then we veryfy that length === 10 or 11.
  if (temp.length !== (10) ) return true;
  if(temp[0]!= 1) return false;
  if (temp.length !== (11) ) return true;
  return false
}

function telephoneCheck(str) {
  //validate that numbers should be 10 without country code
  //or 11 with countrycode.
  if(validatePhoneNumbersLengt(str) === false) return false;
  if(str.match(/1[]/))
  return true;
}

telephoneCheck("555-555-5555");