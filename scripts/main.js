let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/oscar1.JPG') {
      myImage.setAttribute('src','img/tyson1.JPG');
    } else {
      myImage.setAttribute('src','img/oscar1.JPG');
    }
}
