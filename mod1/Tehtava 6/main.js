//Write a program that prints the text "Should I calculate the square root?"

// in a confirmation window. If the user selects OK,
// the program asks for the number and calculates and prints its square root to the HTML document.

// If the user selects Cancel,
// the program prints the text "The square root is not calculated." to the HTML document (3p)
////     You cannot calculate the square root of a negative number.
// //     If the number entered by the user is negative,
// //     the program prints "The square root of a negative number is not defined" to the HTML document.

//     The confirmation window can be displayed with the function confirm().
//     The function returns true if the user selects OK. If the user selects Cancel, the function returns false.



const choice =  confirm("Should I calculate the square root?")

let return_line;

if (choice) {
    const num = parseInt(prompt("Number: "))

    if (0 >= num) {
        return_line = "You cannot calculate the square root of a negative number."
    }
    else {
        return_line = Math.sqrt(num)
    }
}
else {
    return_line = "The square root is not calculated.";
}

document.querySelector('h1').innerHTML = return_line;