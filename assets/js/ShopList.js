let cartList = document.getElementById("cartList");
let finalPrice = document.getElementById("finalPrice");
let productCount = document.getElementById("productCount");
let specificationsBox = document.querySelector(".card-shadow");
let buyProduct = document.querySelectorAll(".click-Buy");
let productQuantity = document.getElementById("productQuantity");
let allGame = loadGame();

function buyingProcess() {

  document.addEventListener("click", (event) => {

    let buy = event.target.closest(".click-Buy");

    if (!buy) {
      return;
    }

    let card = buy.closest(".card-shadow");
    let poster = card.querySelector(".poster-card");
    let nameProduct = card.querySelector(".poster-name-style");
    let gamePrice = card.querySelector(".basePrice");

    let selectPoster = poster.src;
    let selectName = nameProduct.textContent;
    let selectPrice = gamePrice.textContent;

    let existingGame = allGame.find((game) => {
      return game.name === selectName;
    });

    if (existingGame) {
      return;
    }

    allGame.push({
      name: selectName,
      img: selectPoster,
      price: selectPrice,
    });

    savedGame();
    updateFinalPrice();
    updateProductCount();
    renderShopList();
  });
}

buyingProcess();

function updateProductCount() {

  if (productCount) {
    productCount.textContent = `${allGame.length}`;
  }

  if (productQuantity) {
    productQuantity.textContent = `${allGame.length}`;

    if (allGame.length > 0) {
      productQuantity.classList.remove("Number-value-List");
      productQuantity.classList.add("Number-value-List-active");
      productQuantity.textContent = `${allGame.length}`;
    } else {
      productQuantity.classList.remove("Number-value-List-active");
      productQuantity.classList.add("Number-value-List");
    }
  }
}

function savedGame() {
  localStorage.setItem("allGame", JSON.stringify(allGame));
}

function loadGame() {
  let save = JSON.parse(localStorage.getItem("allGame"));
  return save || [];
}

function renderShopList() {

  if (!cartList) {
    return;
  } else {
    cartList.innerHTML = "";
    allGame.forEach(function (card) {
      let divList = document.createElement("div");
      divList.classList.add("div-ListShop");
      cartList.appendChild(divList);

      let posterGame = document.createElement("img");
      posterGame.src = card.img;
      posterGame.classList.add("postergame-List");
      divList.appendChild(posterGame);

      let nameGame = document.createElement("span");
      nameGame.textContent = card.name;
      nameGame.classList.add("namegame-List");
      divList.appendChild(nameGame);

      let priceGame = document.createElement("span");
      priceGame.textContent = `${card.price}`;
      priceGame.classList.add("priceGame-List");
      divList.appendChild(priceGame);

      let deletBox = document.createElement("button");
      deletBox.classList.add("deleteBox-List");
      divList.appendChild(deletBox);

      let deletIcon = document.createElement("img");
      deletIcon.src = "assets/icon/icons8-delete-24.png";
      deletIcon.classList.add("deleteicon-List");
      deletBox.appendChild(deletIcon);

      deletBox.addEventListener("click", () => {
        allGame = allGame.filter((game) => {
          return game !== card;
        });

        savedGame();
        updateFinalPrice();
        updateProductCount();
        renderShopList();
      });
    });
  }
}

function updateFinalPrice() {
  
  if (!finalPrice) {
    return;
  } else {
    let allPrice = allGame.reduce((total, item) => {
      return total + Number(item.price.replace("$", ""));
    }, 0);

    finalPrice.textContent = `$${allPrice}`;
  }
}

savedGame();
updateFinalPrice();
updateProductCount();
renderShopList();
