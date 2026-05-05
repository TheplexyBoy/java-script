const name = prompt('Enter your name: '); //I am declare varibable with const for the varibable is unic. 
const age = Number(prompt('Enter your age: '));

if (isNaN(age)) { //isNaN is a built-in global function in JavaScript for declared "Not a number"
    alert('¡Error! that not are a number.'); //That one I used IsNaN for declare if age no is a Number return error. 
} else {
    alert(`Yeah, excelent the age is: ${age} `);
}

if (age >= 18) {
    alert(`Hello ${name}, you are adult, prepate for big oportunites around the world of software programing!`)
} else {
    alert(`Hello!, ${name}, you age is don´t permit, !Continue with your lessons!. `)
}

