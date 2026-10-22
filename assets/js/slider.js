let scrollSlider = document.getElementById("scrollSlider");
let allDescription = document.getElementById("allDescription");
let sliderImg = document.getElementById("sliderImg");
let nextSlider = document.getElementById("nextSlider");
let prevSlider = document.getElementById("prevSlider");
let currentIndex = 0;
let autoplayerTimer;
let dataSlider = [
  {
    img: "assets/img/img-poster/Grand Theft Auto VI.jpg",
    title: "Grand Theft Auto VI",
    description:
      "Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet.",
  },

  {
    img: "assets/img/img-poster/Marvel's Wolverine.jpg",
    title: "Marvel's Wolverine",
    description:
      "Marvel's Wolverine is a single-player action-adventure game and a standalone entry in the Marvel's Spider-Man series, sharing continuity with those titles while telling its own self-contained story. Players control Logan/Wolverine in close-quarters combat, using his adamantium claws against enemies drawn from the X-Men comic book mythology.",
  },

  {
    img: "assets/img/img-poster/Scarlet Skips.jpg",
    title: "Scarlet Skips",
    description:
      "Jump jump jump as much as you can in this silly 1-button Rogue-Like about skipping rope! Power up your jump ropes to help Scarlet jump higher, survive longer, and reach absurdly high scores! boing boing boing boing boing boing boing boing",
  },

  {
    img: "assets/img/img-poster/Silent Hill Townfall.jpg",
    title: "Silent Hill: Townfall",
    description:
      "Silent Hill: Townfall is a full-length, self-contained psychological horror set against the cold, isolated backdrop of Scotland, 1996.Players can explore St. Amelia, where fog-soaked streets, abandoned communities, and forgotten corners tell their story through atmosphere and history. Reality and delusion subtly intertwine, luring players into the depths of St. Amelia's grounded, tangible world",
  },

  {
    img: "assets/img/img-poster/Palworld.jpg",
    title: "Palworld",
    description:
      "Palworld is a multiplayer open-world survival game that combines creature-collecting with crafting, base-building, and combat. Set on the Palpagos Islands, players capture and tame animal-like creatures called Pals, which can be used as mounts, combat partners, or workers at player-built bases. The game incorporates firearms and darker satirical elements into the monster-taming formula.",
  },

  {
    img: "assets/img/img-poster/Big Walk.jpg",
    title: "Big Walk",
    description:
      "Big Walk is unforgettable. Untitled Goose Game developer House House evokes the puzzle-solving exploration of Myst in a brilliant co-op adventure that's all about hanging out with your best pals. It looks silly, what with its goofball characters, but Big Walk's trick is that it's a surprisingly emotional journey built to sharpen your communication skills with the people you love. It all pays off in an astounding ending sequence that you have to experience to truly understand. If you can't find a crew to play with but want to know more, you can read Polygon's journal-like review that chronicles our playthrough from three perspectives.",
  },

  {
    img: "assets/img/img-poster/007 First Light.jpg",
    title: "007 First Light",
    description:
      "It’s been a long time since we’ve gotten a great James Bond video game, but IO Interactive has ended a long drought in spectacular fashion. 007 First Light nails the assignment, combining the cinematic highs of Uncharted with Hitman’s immersive sim brilliance. That’s all anchored by Patrick Gibson’s strong take on a young Bond that sells First Light’s origin story premise. “He's exactly as you'd expect a younger, bright-eyed, bushy-tailed Bond to be,” Ford James wrote in his review. “Far more talkative than his jaded, older self, but with the perfect amount of defiance for authority, back-chat, and quick-wittedness, alongside enviable levels of suavity.”",
  },

  {
    img: "assets/img/img-poster/EA Sports FC 27.png",
    title: "EA Sports FC 27",
    description:
      "EA Sports FC 27 is an association football simulation video game developed by EA Vancouver and EA Romania and published by Electronic Arts. It was released on 25 September 2026 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, and Nintendo Switch 2. The Asian version is scheduled for release on 2 October 2026 in South Korea, then for Thailand and Vietnam markets in the following weeks and China markets in two weeks later.[1] It is the fourth installment in the EA Sports FC series, succeeding EA Sports FC 26, and the 34th overall installment of EA Sports' football simulation games. The Standard and Ultimate Edition cover features Kylian Mbappé, while the Ultimate Plus Edition cover features both Mbappé and Jude Bellingham.[2]",
  },

  {
    img: "assets/img/img-poster/Pragmata.jpg",
    title: "Pragmata",
    description:
      "No one is having a better 2026 than Capcom, and Pragmata is proof of that. What looks like a generic sci-fi shooter at a distance is actually a delightfully inventive take on the genre with a heart of gold. Its main draw is its unique bot-hacking twist, where you need to complete a quick maze puzzle while aiming before you can do any real damage to enemies. Austin Manchester praised the system and how it comes together with Pragmata’s weighty shooting in his review: “While these two elements may seem trite on their own, together, in the flow and intensity of combat, they make Pragmata feel like nothing I’ve ever played before.”",
  },

  {
    img: "assets/img/img-poster/Resident Evil Requiem.jpg",
    title: "Resident Evil Requiem",
    description:
      "Resident Evil Requiem is two excellent horror games in one. First, you have a return to the series’ roots with Grace Ashford’s terrifying escape from a creepy Care Center. Then, you have Leon S. Kennedy returning to the ruins of Raccoon City to face his past and slay hordes of zombies in the process. That divide is a meaningful one: “It returns to the Raccoon City incident, both in its classic survival horror gameplay and story, to allow its characters to finally unpack decades of grief, regret, and survivor’s guilt,” I wrote in my review. It makes for a mournful but always exciting horror game about the different ways people confront trauma.",
  },
];

function renderSlider() {
  let currentGame = dataSlider[currentIndex];

  sliderImg.src = currentGame.img;

  allDescription.innerHTML = `
   <h2 class="title-game">${currentGame.title}</h2>
  <p class="description-game">${currentGame.description}</p>
  `;
}

renderSlider();

function nextSlide() {
  currentIndex = (currentIndex + 1) % dataSlider.length;
  renderSlider();
  startAutoPlayer();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + dataSlider.length) % dataSlider.length;
  renderSlider();
  startAutoPlayer();
}

nextSlider.addEventListener("click", function () {
  nextSlide();
});

prevSlider.addEventListener("click", function () {
  prevSlide();
});

function startAutoPlayer() {
  clearInterval(autoplayerTimer);

  autoplayerTimer = setInterval(function () {
    nextSlide();
  }, 4000);
}

function pausePlayer() {
  allDescription.addEventListener("mouseenter", function () {
    clearInterval(autoplayerTimer);
  });

  allDescription.addEventListener("mouseleave", function () {
    startAutoPlayer();
  });
}

pausePlayer();
startAutoPlayer();
