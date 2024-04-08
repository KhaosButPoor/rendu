const cardContainer = document.getElementById("card-container");

// Fetch API data
fetch("https://hp-api.lainocs.fr/characters")
  .then((response) => response.json())
  .then((apiData) => {
    // Create cards dynamically
    apiData.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundImage = `url(${character.image})`;

      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");

      const name = document.createElement("p");
      name.textContent = character.name;
      cardInfo.appendChild(name);

      // Event listener for when the mouse is over the card
      card.addEventListener("mouseover", () => {
        for (const key in character) {
          if (key !== "image" && key !== "name") {
            const info = document.createElement("p");
            info.textContent = `${key}: ${character[key]}`;
            cardInfo.appendChild(info);
          }
        }
      });

      // Event listener for when the mouse leaves the card
      card.addEventListener("mouseout", () => {
        while (cardInfo.firstChild) {
          cardInfo.removeChild(cardInfo.firstChild);
        }
        cardInfo.appendChild(name);
      });

      card.appendChild(cardInfo);
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });