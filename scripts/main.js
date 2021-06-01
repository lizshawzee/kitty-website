// First Image has click to change images
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/oscar1.JPG') {
      myImage.setAttribute('src','img/tyson1.JPG');
    } else {
      myImage.setAttribute('src','img/oscar1.JPG');
    }
}

// Personalized welcome message code

//let myButton = document.getElementById('userButton');
let myButton = document.querySelector('#userButton');
let myHeading = document.querySelector('#mainHeading');
const originalHeading = myHeading.textContent

const kittyHeading = "Kitties are Cool, "
function setUserName() {
  let myName = prompt('Please enter your name.');
console.log(myName)
  if(null === myName) {
    return
  }
  if("" === myName) {
      myHeading.textContent = originalHeading
      return
  }

    // setUserName();
  //} else {
    localStorage.setItem('name', myName);
    myHeading.textContent = kittyHeading + myName;
    return myName
}
/*
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = kittyHeading + storedName;
}
*/
myButton.onclick = function() {
  setUserName()
}
