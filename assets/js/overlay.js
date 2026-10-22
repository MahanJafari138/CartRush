let imgPoster = document.querySelectorAll(".card-shadow");

function overlayBox() {

  imgPoster.forEach(function (card) {
    let shadow = card.querySelector(".poster-hover-off");

    card.addEventListener("mouseenter", function () {
      shadow.classList.remove("poster-hover-off");
      shadow.classList.add("poster-hover");
    });

    card.addEventListener("mouseleave", function () {
      shadow.classList.remove("poster-hover");
      shadow.classList.add("poster-hover-off");
    });
  });
}

overlayBox()
