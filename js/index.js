// const userName = prompt('Please enter your name');
// const helloMessage = 'Hello ' + userName;

// alert(helloMessage);
// document.write(helloMessage);
// console.log(helloMessage);



// let age = Number(prompt('Enter your age'));

// if (isNaN(age)) {
//     document.write('Please enter correct number!');
// } else { 
//     if (age < 40) {
//         document.write('You are young!');
//     } else {
//         document.write('You are not young');
//     }
// }



// let mark = Number(prompt('Enter mark'));
// let textMark;
// switch (mark) {
//     case 1:
//         textMark = 'Bad';
//         //break;
//     case 2:
//         textMark = 'Average';
//         break;
//     case 3:
//         textMark = 'Good';
//         break;
//     default:
//         textMark = 'Incorrect mark';
// }
// document.write(textMark);


// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// let a = 10;
// let b = 20;
// let c = add(a, b);
// document.write(c);
// document.write('<br>');
// let d = 40;
// let f = 50;
// let g = add(d, f);
// document.write(g);

// function add3 (n1, n2, n3) {
//     return n1 + n2 + n3;
// }
// document.write(add3(1,2,3));
 
 
// for (var i = 9; i >= 0; i--) {
//     if (i % 2 === 0) {
//         document.write(i);
//         document.write('<br>');
//     }
// }


// let age;
// let correct = false;
// while (!correct) {
//   age = parseInt(prompt('Enter your age'));
//   correct = !isNaN(age);
//   if (!correct) {
//       alert('Please enter correct age');
//   }
// }

// document.write('Your age: ' + age);



// let root = Math.sqrt(16);
// document.write(root);

function calcDiscr(a, b, c) {
    return a * b - c;
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0) {
        return 'No roots';
    }
    
    return 'x1 = ' + x1 + ', x2= ' + x2;
}

var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);

document.write(result);
