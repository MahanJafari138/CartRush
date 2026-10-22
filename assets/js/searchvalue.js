let searchInput = document.getElementById("searchInput");
let searchBox = document.getElementById("searchBox");
let resultText = document.getElementById("resultText");
let cardBox = document.getElementById("cardBox");
let wasteTimeUser;

async function searchGame() {
  let searchValue = searchInput.value.trim();

  try {
    let response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?title=${encodeURIComponent(searchValue)}`,
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    let dataCard = await response.json();

    if (searchInput.value.trim() !== searchValue) {
      return;
    }

    if (dataCard.length === 0) {
      let imgError = document.createElement("img");
      imgError.src = "assets/img/No Games Found UI Illustration.png";
      imgError.classList.add("notfound-img");

      cardBox.classList.remove("cart-container");
      cardBox.appendChild(imgError);
      return;
    }

    dataCard.forEach(function (card) {

      let cardImg = document.createElement("div");
      cardImg.classList.add("card-shadow");
      cardBox.appendChild(cardImg);

      let poster = document.createElement("img");
      poster.classList.add("poster-card");
      poster.src = `${card.thumb}`;
      cardImg.appendChild(poster);

      let divOverlay = document.createElement("div");
      divOverlay.classList.add("poster-hover-off");
      cardImg.appendChild(divOverlay);

      let textName = document.createElement("span");
      textName.classList.add("poster-name-style");
      textName.textContent = `${card.title}`;
      divOverlay.appendChild(textName);

      let divPrice = document.createElement("div");
      divPrice.classList.add("row-text");
      divOverlay.appendChild(divPrice);

      let basePrice = document.createElement("span");
      basePrice.textContent = `$${card.normalPrice}`;
      basePrice.classList.add("text-off");
      divPrice.appendChild(basePrice);

      let discountPrice = document.createElement("span");
      discountPrice.textContent = `$${card.salePrice}`;
      discountPrice.classList.add("basePrice");
      divPrice.appendChild(discountPrice);

      let buyCard = document.createElement("button");
      buyCard.classList.add("click-Buy");
      buyCard.textContent = "Buy It";
      divOverlay.appendChild(buyCard);

    });
  } catch (error) {

    console.error(error);

    let imgError = document.createElement("img");
    imgError.src = "assets/img/error-picture.svg";
    imgError.classList.add("error-img");

    cardBox.classList.remove("cart-container");
    cardBox.appendChild(imgError);
  }
}

function overlayBox() {
  let imgPoster = cardBox.querySelectorAll(".card-shadow");

  imgPoster.forEach(function (on) {

    let shadow = on.querySelector(".poster-hover-off");

    on.addEventListener("mouseenter", function () {
      shadow.classList.remove("poster-hover-off");
      shadow.classList.add("poster-hover");
    });

    on.addEventListener("mouseleave", function () {

      shadow.classList.remove("poster-hover");
      shadow.classList.add("poster-hover-off");
    });
  });
}

searchInput.addEventListener("input", function () {

  resultText.innerText = "";
  cardBox.classList.add("cart-container");
  clearTimeout(wasteTimeUser);
  if (searchInput.value.trim() === "") {

    searchBox.classList.remove("shop-container");
    searchBox.classList.add("shop-container-off");
  } else {
    
    let searchText = document.createElement("h2");
    searchText.textContent = `${searchInput.value}`;
    resultText.appendChild(searchText);

    searchBox.classList.remove("shop-container-off");
    searchBox.classList.add("shop-container");

    cardBox.innerHTML = "";
    wasteTimeUser = setTimeout(async () => {

      await searchGame();
      overlayBox();
    }, 400);
  }
});
