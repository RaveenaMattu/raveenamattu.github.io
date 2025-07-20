
let menuOpen = false; // either true or false

function toggleMenu() {
  if(!menuOpen){ // menu closed, open it
    $('#menu').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // menu open, close it
    $('#menu').animate({
      right: -250
    }, 420, 'swing');
  } 
  // toggles the boolean to the opposite value
  menuOpen = !menuOpen;
} // toggleMenu()

let darkTheme = false; // either true or false
let header = document.querySelector('#indexHeader');
let main = document.querySelector('main');
let heading = document.querySelectorAll('.heading');
let rightSeparator = document.querySelectorAll('.topRightRow');
let topFooter = document.querySelector('#topFooter');

function toggleTheme() { 
  if(!darkTheme) {
    main.setAttribute('style', 'background-color: #000; color: #fff;');
    header.setAttribute('style', 'color: #000;');
    for (let i = 0; i < rightSeparator.length; i++) {
      rightSeparator[i].style.borderTop = '1px solid #6d6c6c';
    }
    for (let i = 0; i < heading.length; i++) {
      heading[i].style.color = '#fff';
    }
  } else {
    main.setAttribute('style', 'background-color: #fff; color: #000;');
    header.setAttribute('style', 'color: #fff');
    for (let i = 0; i < rightSeparator.length; i++) {
      rightSeparator[i].style.borderTop = '1px solid #000';
    }
    for (let i = 0; i < heading.length; i++) {
      heading[i].style.color = '#000';
    }
  }
  darkTheme = !darkTheme;
}