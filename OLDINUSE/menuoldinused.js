
const menuData = {
  veg: [
    {
      category: "starter",
      title: "Vegetarian Starters",
      items: [
        { name: "Veg. China Town", price: "90 / 170" },
        { name: "Veg. Chilly", price: "— / 220" ,
            image: "veg-chilly.jpg"             
         },
        { name: "Veg. 65", price: "90 / 170" ,
            image: "veg-65.jpg"
        },
        { name: "Veg. Manchurian", price: "90 / 170",
          image: "veg-manchurian.jpg" },
        { name: "Veg. Crispy", price: "170" ,
            image: "veg-crispy.jpg"
         },
        { name: "Paneer 65", price: "170" ,
            image: "paneer-65.jpg"
         },
        { name: "Veg. Lollypop", price: "180" ,
            image: "veg-lollipop.jpg"
         },
        { name: "Veg. Garlic Dry", price: "170" },
        { name: "Veg. Barbeque Sauce", price: "180" },
        { name: "Paneer Chilly", price: "180",
          image: "paneer-chilly.jpg" },
        { name: "Paneer Manchurian", price: "180" , image: "paneer-manchurian.jpg" },
        { name: "Paneer Crispy", price: "180" },
        { name: "Potato Crispy", price: "170" }
      ]
    },

    {
      category: "rice",
      title: "Vegetarian Rice",
      items: [
        { name: "Veg. Paneer Chilli Rice", price: "100 / 180" , image: "veg-paneer chilly rice.jpg" },
        { name: "Veg. Tadka Spl Rice", price: "150 / 250" },
        { name: "Veg. Chopper Rice", price: "130 / 210" , image: "veg-chopper-rice.jpg" },
        { name: "Veg. Burnt Chilli Rice", price: "110 / 180" },
        { name: "Veg. Fried Rice", price: "110" , image : "veg-friedrice.jpg" },
        { name: "Veg. Schezwan Rice", price: "120" , image: "Veg-Schezwan Rice.jpg" },
        { name: "Veg. Triple Rice", price: "140" , image: "veg-Triple Rice.jpg" },
        { name: "Veg. Chopper Rice", price: "180" , image: "veg-chopper-rice.jpg" },
        { name: "Veg. Garlic Rice", price: "120" },
        { name: "Veg. Hong Kong Rice", price: "130" },
        { name: "Veg. Singapore Rice", price: "130" , image: "veg-Singapore Rice.jpg" },
        { name: "Veg. Paneer Rice", price: "140" },
        { name: "Veg. Combination Rice", price: "110" },
        { name: "Veg. Combination Schezwan Rice", price: "120" }
      ]
    },

    {
      category: "noodles",
      title: "Vegetarian Noodles",
      items: [
        { name: "Veg. Hakka Noodles", price: "70 / 130",
          image: "Veg-Hakka Noodles.jpg" },
        { name: "Veg. Schezwan Noodles", price: "80 / 140" , image: "Veg-Schezwan Noodles.jpg" },
        { name: "Veg. Triple Noodles", price: "100 / 180" },
        { name: "Veg. Singapore Noodles", price: "90 / 170" },
        { name: "Veg. Pecking Noodles", price: "100 / 180" },
        { name: "Veg. Hong Kong Noodles", price: "90 / 170" },
        { name: "Veg. Hot Garlic Noodles", price: "100 / 180" },
        { name: "Veg. Green Garlic Noodles", price: "130 / 220" },
        { name: "Veg. Special Noodles", price: "100 / 180" },
        { name: "Veg. Tikka Spl Noodles", price: "120 / 220" }
      ]
    },

    {
      category: "soup",
      title: "Vegetarian Soup",
      items: [
        { name: "Veg. Manchow", price: "80 / 110",
          image: "Veg-Manchow.jpg" },
        { name: "Veg. Hot & Sour", price: "100" },
        { name: "Veg. Royal Soup", price: "100" },
        { name: "Veg. Special Soup", price: "100" },
        { name: "Veg. Lung Fung Soup", price: "100" },
        { name: "Veg. Noodles Soup", price: "100" },
        { name: "Veg. Tomato Soup", price: "150" },
        { name: "Veg. Sweet Corn Soup", price: "110" , image: "Veg-Sweet Corn Soup.jpg" },
        { name: "Veg. Tallumein Soup", price: "110" },
        { name: "Veg. Theka Spl Soup", price: "120" }
      ]
    }
  ],

  nonveg: [
    {
      category: "starter",
      title: "Non-Vegetarian Starters",
      items: [
        { name: "Chicken Chilly", price: "120 / 200",
          image: "chicken-chilly.jpg" },
        { name: "Chicken 65", price: "200" },
        { name: "Chicken Manchurian", price: "120 / 200",
          image: "Chicken-Manchurian.jpg" },
        { name: "Chicken Crunchy", price: "260" },
        { name: "Chicken Sate", price: "280" },
        { name: "Garlic Chicken", price: "200" , image: "Garlic-Chicken.jpg" },
        { name: "Apple Chicken", price: "220" },
        { name: "Chicken Lolipop (8 pcs)", price: "190",
          image: "chicken-lollipop.jpg" },
        { name: "Chicken Black Pepper", price: "220" },
        { name: "Hot Garlic Chicken", price: "220" , image: "Hot-Garlic-Chicken.jpg" },
        { name: "Chicken Crispy", price: "190" },
        { name: "Chil. Hong Kong Dry", price: "190" },
        { name: "Chil. Schezwan Dry", price: "110 / 190" },
        { name: "Chil. Lolipop Masala Dry", price: "120 / 200" },
        { name: "Theka Special Chicken Dry", price: "230" },
        { name: "Chil. Barbeque Sauce", price: "220" }
      ]
    },

    {
      category: "rice",
      title: "Non-Vegetarian Rice",
      items: [
        { name: "Chicken Fried Rice", price: "80 / 120",
          image: "chicken-fried-rice.jpg" },
        { name: "Chicken Schezwan Rice", price: "90 / 140" },
        { name: "Chicken Triple Rice", price: "130 / 220" ,image: "Chicken-Triple-Rice.jpg" },
        { name: "Chicken Garlic Rice", price: "110 / 180" },
        { name: "Chicken Hong Kong Rice", price: "110 / 180" },
        { name: "Chicken Singapore Rice", price: "110 / 180" },
        { name: "Mushroom Chilli Rice", price: "130 / 220" },
        { name: "Chicken Korean Rice", price: "180" },
        { name: "Chicken Chopper Rice", price: "100 / 180" ,image: "Chicken-Chopper-Rice.jpg" },
        { name: "Chicken Ginger Rice", price: "90 / 180" },
        { name: "Chicken Manchurian Rice", price: "100 / 170" ,image: "Chicken-Manchurian-Rice.jpg" },
        { name: "Theka Special Rice", price: "150 / 250" },
        { name: "Chicken Combination Rice", price: "90 / 140" },
        { name: "Chicken Schezwan Combination Rice", price: "100 / 140" }
      ]
    },

    {
      category: "noodles",
      title: "Non-Vegetarian Noodles",
      items: [
        { name: "Chicken Hakka Noodles", price: "90 / 150" ,image: "Chicken-Hakka-Noodles.jpg" },
        { name: "Chicken Schezwan Noodles", price: "100 / 160" },
        { name: "Chicken Triple Noodles", price: "130 / 210" },
        { name: "Chicken Singapore Noodles", price: "110 / 180" },
        { name: "Chicken Pecking Noodles", price: "130 / 220" },
        { name: "Chicken Hong Kong Noodles", price: "110 / 180" },
        { name: "Chicken Hot Garlic Noodles", price: "130 / 220" },
        { name: "Green Garlic Noodles", price: "150 / 250" },
        { name: "Chicken Special Noodles", price: "130 / 220" },
        { name: "Desi Theka Noodles", price: "150 / 250" }
      ]
    },

    {
      category: "soup",
      title: "Non-Vegetarian Soup",
      items: [
        { name: "Chicken Manchow", price: "60 / 100" , image: "Chicken-Manchow.jpg" },
        { name: "Chicken Hot & Sour", price: "120" ,image: "Chicken-Hot & Sour.jpg" },
        { name: "Chicken Royal Soup", price: "110" },
        { name: "Chicken Special Soup", price: "120" },
        { name: "Chicken Noodles Soup", price: "110" },
        { name: "Sweet Corn Soup", price: "120" },
        { name: "Chicken Tallumein Soup", price: "130" },
        { name: "Chicken Clear Soup", price: "140" },
        { name: "Chicken Schezwan Soup", price: "140" }
      ]
    }
  ]
};

// CURRENT FILTERS

let selectedType = "veg";
let selectedCategory = "all";
let searchText = "";

// HTML ELEMENTS

const digitalMenu = document.getElementById("digitalMenu");
const menuHeading = document.getElementById("menuHeading");
const menuCount = document.getElementById("menuCount");
const menuSearch = document.getElementById("menuSearch");

// DISPLAY MENU

function renderMenu() {

  if (!digitalMenu) return;

  const sections = menuData[selectedType];

  const filteredSections = sections.map(section => {

    const filteredItems = section.items.filter(item => {

      const matchesSearch =
        item.name.toLowerCase().includes(searchText);

      return matchesSearch;
    });

    return {
      ...section,
      items: filteredItems
    };

  }).filter(section => {

    const matchesCategory =
      selectedCategory === "all" ||
      section.category === selectedCategory;

    return matchesCategory && section.items.length > 0;
  });

  digitalMenu.innerHTML = "";

  let totalItems = 0;

  filteredSections.forEach(section => {

    totalItems += section.items.length;

    const card = document.createElement("div");
    card.className = "menu-category-card";

    const heading = document.createElement("h4");
    heading.textContent = section.title;

    card.appendChild(heading);

    section.items.forEach(item => {

      const row = document.createElement("div");
      row.className = "digital-menu-item";

      const details = document.createElement("div");
      details.className = "dish-details";

      if (item.image) {

        const image = document.createElement("img");

        image.src = `assets/images/menu/${item.image}`;
        image.alt = item.name;
        image.className = "dish-thumbnail";

        image.onerror = function() {
          this.style.display = "none";
        };

        details.appendChild(image);
      }

      const name = document.createElement("span");
      name.className = "dish-name";
      name.textContent = item.name;

      details.appendChild(name);

      const price = document.createElement("span");
      price.className = "dish-price";
      price.textContent = item.price;

      row.append(details, price);

      card.appendChild(row);

    });

    digitalMenu.appendChild(card);

  });

  menuHeading.textContent =
    selectedType === "veg"
      ? "Vegetarian Menu"
      : "Non-Vegetarian Menu";

  menuCount.textContent = `${totalItems} dishes`;

  if (totalItems === 0) {

    const message = document.createElement("p");

    message.className = "no-menu-results";
    message.textContent = "No dishes found. Try another search.";

    digitalMenu.appendChild(message);
  }
}

// VEG / NON-VEG BUTTONS

document.querySelectorAll(".type-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".type-btn").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    selectedType = button.dataset.type;

    renderMenu();
  });

});

// CATEGORY FILTERS

document.querySelectorAll(".category-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".category-btn").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    selectedCategory = button.dataset.category;

    renderMenu();
  });

});

// SEARCH FUNCTION

if (menuSearch) {

  menuSearch.addEventListener("input", event => {

    searchText = event.target.value.toLowerCase().trim();

    renderMenu();
  });

}

// INITIAL MENU

renderMenu();