// simply Alert creating system
// alert('Please click on the ok button!');



// onclick alert creating with a click handler function
const getAccess = () => {
    alert('Click here to get access!');
}



// comfirm button. it works like taking confirmation about yes or no answer
// const askMe = () => {
//     confirm('Sign here (Yes or No)!');
// }


// use it in a variable to get true or false result
// const askMe = () => {
//     const response = confirm('Sign here (Yes or No)!');
//     // this console.log will show us true or false result
//     console.log(response);
// }



// more works done just using confirm()
const askMe = () => {
    const response = confirm('Sign here (Yes or No)!');
    console.log(response);
    if (response === true) {
        alert('Check your balance please!');
    } else {
        console.log('user pressed Cancel button!');
    }
}



// it'll show a writting box like a alert message
// const writeYourName = () => {
//     prompt('Please write your full name below!');
// }

// do more things just using prompt()
const writeYourName = () => {
    const name = prompt('Please write your full name below!');
    if (name) {
        console.log(name);
    }
}