/* 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */
const maxmin= [];
for (let i = 0; i < 5; i++) 
{
    let number = Math.floor(Math.random() * 999);
    maxmin[i]=number;
}

  for (let i = 0; i < 5; i++) 
{
    let temp=maxmin[i];
    console.log("Number : "+ temp);
}
/////////
// for sorting use sort function
maxmin.sort(function (a, b) {
  return a - b;
});

console.log("Minimun Number is : "+ maxmin[0]);

console.log("Maximum Number is : "+ maxmin[4]);



  
