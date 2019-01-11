/*
Question 4
Create a function called checkPassword. Send two string variables to the checkPassword function to check if the strings
are equal. Return true if they are equal and false if they are not equal. Print the function's return value.
 */


function checkPassword (string1,string2)

{
    if (string1==string2)    // test if strings are true, else false
        return true
    else
        return false
}

console.log(checkPassword("joe","joey"));