/*=======================================*/
/*==========  HAMBURGER MENU  ===========*/
/*=======================================*/

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

/*=======================================*/
/*======= TEXT FOR ROTATING CIRCLE ======*/
/*=======================================*/
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

  // Text change every 2 seconds
  setInterval(setRandomTech, 2000);

  // Set initial value
  setRandomTech();


/*=======================================*/
/*======= PROJECTS SLIDER FUNCTION ======*/
/*=======================================*/

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
function slideProjects(direction) {
  const track = document.getElementById('sliderTrack');
  const cardWidth = track.querySelector('.project-card').offsetWidth + 24; // 24 for gap
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

/*=======================================*/
/*==== CONTACT FORM THANKYOU LIGHTBOX ===*/    
/*=======================================*/
const form = document.getElementById('contactForm');
const lightbox = document.getElementById('thankYouLightbox');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop default behavior

  const formData = new FormData(form);

  fetch('https://formsubmit.co/ajax/raveenamattu.dev@gmail.com', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
    .then(response => {
      if (response.ok) {
        lightbox.style.display = 'block';
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => alert("Error submitting form."));
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

/*=======================================*/
/*======= PROJECT LIGHTBOX FUNCTION =====*/
/*=======================================*/
const projectScreenshots = {
  "ps": [
    { type: "image", src: "assets/screenshots/ps1.png" },
    { type: "image", src: "assets/screenshots/ps2.png" },
    { type: "image", src: "assets/screenshots/ps3.png" },
    { type: "image", src: "assets/screenshots/ps4.png" },
    { type: "image", src: "assets/screenshots/ps5.png" },
    { type: "video", src: "assets/screenshots/ps.mov" }
  ],
  "trios": [
    { type: "image", src: "assets/screenshots/trios1.png" },
    { type: "image", src: "assets/screenshots/trios2.png" },
    { type: "image", src: "assets/screenshots/trios3.png" },
    { type: "image", src: "assets/screenshots/trios4.png" },
    { type: "image", src: "assets/screenshots/trios5.png" },
    { type: "image", src: "assets/screenshots/trios6.png" },
    { type: "video", src: "assets/screenshots/trios.mov" }
  ],
  "game": [
    { type: "image", src: "assets/screenshots/game1.png" },
    { type: "image", src: "assets/screenshots/game2.png" },
    { type: "image", src: "assets/screenshots/game3.png" },
    { type: "image", src: "assets/screenshots/game4.png" },
    { type: "image", src: "assets/screenshots/game5.png" },
    { type: "image", src: "assets/screenshots/game6.png" },
    { type: "image", src: "assets/screenshots/game7.png" },
    { type: "video", src: "https://drive.google.com/file/d/1skD27g8tlRb6vyjKlu6Cbc1c0yEZA1N8/view?usp=sharing" }
  ],
  "market": [
    { type: "image", src: "assets/screenshots/market.png" }
  ]
};

const projectMedia = projectScreenshots;

document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const projectKey = this.id;
    const media = projectMedia[projectKey];

    if (media && media.length > 0) {
      e.preventDefault();
      openProjectLightbox(media);
    }
  });
});

function openProjectLightbox(media) {
  const lightbox = document.getElementById('projectLightbox');
  const previewContainer = document.getElementById('projectLightboxMain');
  const thumbnails = document.getElementById('projectLightboxThumbs');

  previewContainer.innerHTML = '';
  thumbnails.innerHTML = '';

  renderMedia(media[0], previewContainer);

  const firstImageSrc = media.find(item => item.type === "image")?.src || 'assets/images/video-icon.png';

media.forEach((item, i) => {
  const thumb = document.createElement('img');

  if (item.type === "video") {
  // Use first image src as thumbnail for video items
    thumb.src = firstImageSrc;
  } else {
    thumb.src = item.src;
  }

  if (i === 0) thumb.classList.add('active');

  thumb.addEventListener('click', () => {
    previewContainer.innerHTML = '';
    renderMedia(item, previewContainer);
    document.querySelectorAll('#projectLightboxThumbs img').forEach(img => img.classList.remove('active'));
    thumb.classList.add('active');
  });

  thumbnails.appendChild(thumb);
});

  lightbox.classList.add('show');
} // openProjectLightbox

function renderMedia(item, container) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    container.appendChild(video);
  } else if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    container.appendChild(img);
  } else if (item.type === "iframe") {
    const iframe = document.createElement("iframe");
    iframe.src = item.src;
    iframe.width = "100%";
    iframe.height = "100%"; ;
    iframe.allow = "fullscreen"; 
    container.appendChild(iframe);
  }
} // renderMedia

  document.querySelector('.projectLightbox-close').addEventListener('click', () => {
  document.querySelector('#projectLightbox').classList.remove('show');
});

