/*
Question 3
Create a function in your program that counts from 0 to [NUMBER]
 */


function countme(num)
{
   var i=0;
    do                        // Assume the user entered a negative number. Do-while loop will run once
    {
        console.log(i);
        i++
    }
    while(i<=num)
}

countme(14);