let sliderWeb = document.getElementById("sliderWeb");
let aboutWeb = document.getElementById("aboutWeb");
let posterWeb = document.getElementById("posterWeb");
let currentIndex = 0;
let autoplayerTimer;
let dataWeb = [
  {
    img: "assets/img/img-website/MovieJoy.png",
    title: "Movie Joy",
    about:
      "Features: - Real-time search with race-condition handling(correctly discards outdated API responses) - Search history(last 4 searches) with click-to-search and delete, persisted via LocalStorage - Hover-reveal details (year, type) on each movie card - Fully responsive design across 7 breakpoints, from desktop to small mobile screens - Custom video background with glassmorphism UI Built in 6 days as my second full-scale JavaScript project, focused on real API integration and handlingedge cases like concurrent requests.",
    address: "https://mahanjafari138.github.io/MovieJoy/",
  },
  {
    img: "assets/img/img-website/Penny-Track.png",
    title: "Penny Track",
    about:
      "Finished my third vanilla JS project: PennyTrack, an income/expense tracker with a live donut chart. Took me 3 days — which surprised me, honestly, because this was the hardest one yet.",
    address: "https://mahanjafari138.github.io/Penny-Track/",
  },
  {
    img: "assets/img/img-website/taskflow.png",
    title: "TaskFlow",
    about:
      "I built this as my first full-scale JavaScript project after learning the language from scratch, to practice combining everything I'd learned — DOM manipulation, event handling, array methods, and state management — into one real, working application.",
    address: "https://mahanjafari138.github.io/taskflow/",
  },
];

function imgWeb() {
  let currentGame = dataWeb[currentIndex];

  posterWeb.src = currentGame.img;

  aboutWeb.innerHTML = `
  <span class="title-website">${currentGame.title}</span>
  <span class="aboutWeb">${currentGame.about}</span>
                    <a class="link-media" href="${currentGame.address}">
                <button class="Go-link">
                  Go to websites
                </button>
              </a>
  `;
}

imgWeb();

function nextSlide() {
  currentIndex = (currentIndex + 1) % dataWeb.length;
  imgWeb();
}

function slideWeb() {
  clearInterval(autoplayerTimer);

  autoplayerTimer = setInterval(function () {
    nextSlide();
  }, 5000);
}

function pausePlayer() {
  aboutWeb.addEventListener("mouseenter", function () {
    clearInterval(autoplayerTimer);
  });

  aboutWeb.addEventListener("mouseleave", function () {
    slideWeb();
  });
}

pausePlayer();
slideWeb();
