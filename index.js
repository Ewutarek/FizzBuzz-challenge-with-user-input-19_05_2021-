Fizz/*
  FizzBuzz Challenge with user input by Keratuwe Pheko
 */

/* 
    Function  prints the numbers from 1-100 and assigned user values for fizz and buzz will be printed 
*/

function FizzBuzz(fizz_in, buzz_in)
{
  let fbResults = '';

  //Checks that the entered numbers are within bounds
  if((fizz_in > 100 || buzz_in >100) || (fizz_in < 0 || buzz_in < 0))
  {
    alert("Please enter a number between 1-100");
    
  } 
  else
  {
    for(var i = 1; i <= 100; i++)
    {
    
    if(i % fizz_in === 0 && i % buzz_in === 0)
    {
      fbResults = fbResults + 'FizzBuzz' + '\n';
    } else if (i % fizz_in === 0)
      {
        fbResults = fbResults + 'Fizz' + '\n';
      } else if(i % buzz_in === 0)
        {
          fbResults = fbResults + 'Buzz' + '\n';
        } else
          {
            fbResults = fbResults+ i + '\n';
          }
    
  }

  return fbResults;
  }
  
}

let fizzNum = prompt("Pleasea assign a multiple for 'Fizz' between 1-100", "0");

let BuzzNum = prompt("Pleasea assign a multiple for 'Buzz' between 1-100", "0");

fizzNum = parseInt(fizzNum,10);
BuzzNum = parseInt(BuzzNum,10);

console.log(FizzBuzz(fizzNum,BuzzNum));


