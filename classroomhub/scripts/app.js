
let menuOpen = false; // either true or false

function toggleMenu() {
  if(!menuOpen){ // menu closed, open it
    $('#menu').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // menu open, close it
    $('#menu').animate({
      right: -280
    }, 420, 'swing');
  } 
  // toggles the boolean to the opposite value
  menuOpen = !menuOpen;
} // toggleMenu()