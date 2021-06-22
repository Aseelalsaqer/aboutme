'use strict';
let score = 0;
let name1 = prompt('What is your name?')
alert('Welcome ' + name1)
console.log(name1)

let x = confirm('Get ready to know who I\'m')
console.log(x);
switch (x) {
    case true:
        alert('Put on your seat belt');
        break;
    case false:
        alert('You are already in :P');
}

let y = prompt('Are you intrested to know more about me?');
console.log(y);
switch (y.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('I hope you enjoy it')
        break;
    case 'NO':
    case 'N':
        alert('Sorry, but you have to');


}

let z = prompt('Do you think I\'m 24 years old?');
console.log(z);
switch (z.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('When did I get this old :P ')
        score++
        break;
    case 'NO':
    case 'N':
        alert('I\'m 24');
}
let a = prompt('Can I be a web developer?');
console.log(a);
if (a == 'Yes' || 'Y') {
    alert('I hope So.');

} else if (a == 'No' || 'N') {
    alert('Maybe I\'ll');
}




let tall = prompt('Guess how tall I am ?', 'your answer should be a range 100-110')

while (!tall) {
    tall = prompt('Enter a Number Please', 'Ex:100-110');
}
let i = 0;



while (i < 4) {
    if (tall == '160-170') {
        alert('That\'s right');
        score++;
        break;
    }
    if (tall < '160-170') {

        tall = prompt('Try a higher value');
        i++

    } else {

        tall = prompt('Try a lower value');
        i++

    }
}

let letter = prompt('Guess a letter in my name', 'Use Capital Letter');


let f = 0;

while (f < 6) {
    if (letter == 'A' || letter == 'S' || letter == 'E' || letter == 'L') {
        alert('Good Job');
        score++
        break;

    } else {
        letter = prompt('Try another')
    }
    f++;



}
alert('My Name is : A S E E L');


alert('Thank you For your time' +  name1  + ',out of 3 your score is:' + score );



















