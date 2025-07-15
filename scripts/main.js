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

// let header = document.querySelector('header');
let door = document.querySelector('#door');
let codingLang = ['PHP', 'HTML', 'CSS', 'JS', 'Python', 'Java', 'PS', 'XD', 'Ai', 'React', 'Swift'];
const techText = document.getElementById('techText');
let codingIcons = ['assets/images/languages/php.png', 
                   'assets/images/languages/html.png', 
                   'assets/images/languages/css.png', 
                   'assets/images/languages/js.png', 
                   'assets/images/languages/python.png', 
                   'assets/images/languages/java.png', 
                   'assets/images/languages/ps.png', 
                   'assets/images/languages/xD.png', 
                   'assets/images/languages/aI.png',
                   'assets/images/languages/react.png', 
                   'assets/images/languages/swift.png'];
let content = [codingLang, codingIcons];
let fontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
let fontSize = ['2em', '2.2em', '2.4em', '2.6em'];
let color = ['#e7e7e5', '#ffd36a'];
let textAlign = ['left', 'right', 'center', 'justify'];


 function setRandomTech() {
    const randomIndex = Math.floor(Math.random() * codingLang.length);
    techText.textContent = codingLang[randomIndex];
    techText.style.fontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)];
    techText.style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];
    techText.style.color = color[Math.floor(Math.random() * color.length)];
  }

  // Change text every 2 seconds (optional)
  setInterval(setRandomTech, 2000);

  // Set initial value
  setRandomTech();

// function createGrid() {
// let squareSize = 150; // You can adjust this for different sizes
// let cols = Math.ceil(window.innerWidth / squareSize);
// let rows = Math.ceil(window.innerHeight / squareSize);


//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       let square = document.createElement('div');
//       let randomIndex = Math.floor(Math.random() * codingLang.length);
//       square.index = randomIndex; // store the index for syncing text/icon
//       square.innerText = codingLang[randomIndex];     
//       // start animation loop
//       setInterval(function () {
//         square.style.opacity = 0;
//         square.style.transition = 'opacity 4s ease';
      
//         setTimeout(function () {
//           if (square.innerText === codingLang[randomIndex]) {
//             // switch to icon
//             square.innerHTML = `<img src="${codingIcons[randomIndex]}" style="width: 40px; height: 40px;">`;
//           } else {
//             // switch back to text
//             square.innerText = codingLang[randomIndex];
//           }
//           square.style.opacity = .5;
//         }, 4000); // wait for fade-out to finish
      
//       }, 4000 + Math.random() * 12000);
      
//       square.textContent = codingLang[Math.floor(Math.random() * codingLang.length)];
//       square.setAttribute('class', 'square');
//       square.style.position = 'absolute'; 
//       square.style.fontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)];
//       square.style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];
//       square.style.textAlign = textAlign[Math.floor(Math.random() * textAlign.length)];
//       square.style.width = squareSize + 'px';
//       square.style.height = squareSize + 'px';
//       const offset = (i % 2 === 0) ? 0 : squareSize / 2;
//       square.style.left = (j * squareSize + offset) + 'px';
//       square.style.top = (i * squareSize) + 'px';

//      header.appendChild(square); 
//     }
//   }
// }

// function createGrid() {
//   const squareSize = 175;
//   const cols = Math.ceil(window.innerWidth / squareSize);
//   const rows = Math.ceil(window.innerHeight / squareSize);

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const square = document.createElement('div');
//       const randomIndex = Math.floor(Math.random() * codingLang.length);

//       // Decide randomly whether to show text or icon initially
//       const showText = Math.random() < 0.5;

//       if (showText) {
//         square.textContent = codingLang[randomIndex];
//         square.dataset.type = "text";
//       } else {
//         square.innerHTML = `<img src="${codingIcons[randomIndex]}" style="width: 40px; height: 40px;">`;
//         square.dataset.type = "icon";
//       }

//       square.dataset.index = randomIndex;
//       square.className = 'square';
//       square.style.position = 'absolute';
//       square.style.fontWeight = fontWeight[Math.floor(Math.random() * fontWeight.length)];
//       square.style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];
//       square.style.textAlign = textAlign[Math.floor(Math.random() * textAlign.length)];
//       square.style.width = squareSize + 'px';
//       square.style.height = squareSize + 'px';
//       const offset = (i % 2 === 0) ? 0 : squareSize / 2;
//       square.style.left = (j * squareSize + offset) + 'px';
//       square.style.top = (i * squareSize) + 'px';
//       square.style.opacity = 0.5; // Initial opacity

//       // Start animation loop
//       setInterval(() => {
//         square.style.opacity = 0;
//         square.style.transition = 'opacity 4s ease';

//         setTimeout(() => {
//           const index = parseInt(square.dataset.index);
//           const currentType = square.dataset.type;

//           if (currentType === "text") {
//             square.innerHTML = `<img src="${codingIcons[index]}" style="width: 40px; height: 40px;">`;
//             square.dataset.type = "icon";
//           } else {
//             square.textContent = codingLang[index];
//             square.dataset.type = "text";
//           }

//           square.style.opacity = 0.5;
//         }, 4000);
//       }, 4000 + Math.random() * 12000);

//       header.appendChild(square);
//     }
//   }
// }


// // Create grid on load
// createGrid();
// // Optional: Recreate grid on window resize
// window.addEventListener('resize', () => {
//   header.innerHTML = ''; // Clear existing squares
//   createGrid();
// });

// function openLightbox() {
//   document.getElementById('resumeLightbox').style.display = 'flex';
// }

// function closeLightbox() {
//   document.getElementById('resumeLightbox').style.display = 'none';
// }



let currentIndex = 0;

function slideProjects(direction) {
  const track = document.getElementById('sliderTrack');
  const slides = track.children;
  const totalSlides = slides.length;

  // Update index safely
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

  // Get the width of one visible slide
  const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(track).gap || 0);

  // Scroll to exact card without extra offset
  track.scrollTo({
    left: slideWidth * currentIndex,
    behavior: 'smooth'
  });
}



