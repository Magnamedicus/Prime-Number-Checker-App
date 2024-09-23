
//Peter Hornbach, CSC6303, Project 4, Prime Number Calculator Web-App written in JavaScript, HTML and CSS. Visual Studio Code was used for writing/testing the program




function isPrime(n) {
    //function that determines the primality of a positive integer 'n'
    //function will return a boolean based on primarlity calculation, which will be used to determine output behavior in the browser
    //if n is prime, function returns true, if not returns false
    if (n <= 1) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function prime_or_notPrime() {
    //function for processing the results of isPrime() and displaying formatted output
    const user_num = document.getElementById("inputNumber").value; //user_num saves the user's input integer for calling isPrime() and displaying output  
    const result = document.getElementById("prime_result"); //HTML container where results will be displayed after calculation 

    if (user_num >= 2 && user_num <= 9999) {
        if (isPrime(user_num)) { //isPrime is called with user_num passed as an argument. If the function returns true, result.classname is assigned 'prime' so that
                                 //the appropriate CSS styling can be applied to the output
            result.innerHTML = `${user_num} is a prime number`;
            result.className = 'prime';
        } else {
            result.innerHTML = `${user_num} is not a prime number`;
            result.className = 'not-prime';
        }
    } else {
        result.innerHTML = "Your number is out of range";//if the function returns false or user_num is out of range, appropriate CSS styling is again applied based on classname
        result.className = 'orange';
    }
}
