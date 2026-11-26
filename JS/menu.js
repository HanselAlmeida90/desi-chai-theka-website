
// ==========================================
// DESI CHAI THEKA - SUPABASE MENU AND CART
// ==========================================

// Menu data from Supabase
let menuData = {
    veg: [],
    nonveg: []
};

// Menu filters
let selectedType = "veg";
let selectedCategory = "all";
let searchText = "";

// Customer cart
let cart = [];

// HTML elements
const digitalMenu = document.getElementById("digitalMenu");
const menuHeading = document.getElementById("menuHeading");
const menuCount = document.getElementById("menuCount");
const menuSearch = document.getElementById("menuSearch");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
// Restaurant WhatsApp number (India)
const RESTAURANT_WHATSAPP = "919370016822";

// Load menu from Supabase
async function loadMenuFromSupabase() {

    if (!window.db) {
        console.error("Supabase client not initialized.");
        digitalMenu.textContent = "Unable to connect to menu database.";
        return;
    }

    digitalMenu.textContent = "Loading menu...";

    const { data, error } = await window.db
        .from("menu_items")
        .select("*")
        .eq("is_available", true)
        .order("name");

    if (error) {
        console.error("Menu loading error:", error);
        digitalMenu.textContent = "Unable to load menu. Please try again.";
        return;
    }

    menuData.veg = data.filter(item => item.food_type === "veg");
    menuData.nonveg = data.filter(item => item.food_type === "nonveg");

    renderMenu();
}

// Display menu
function renderMenu() {

    if (!digitalMenu) return;

    const sections = menuData[selectedType];

    const categoryTitles = {
        starter: selectedType === "veg" ? "Vegetarian Starters" : "Non-Vegetarian Starters",
        rice: selectedType === "veg" ? "Vegetarian Rice" : "Non-Vegetarian Rice",
        noodles: selectedType === "veg" ? "Vegetarian Noodles" : "Non-Vegetarian Noodles",
        soup: selectedType === "veg" ? "Vegetarian Soup" : "Non-Vegetarian Soup"
    };

    const filteredItems = sections.filter(item => {

        const matchesSearch = item.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    digitalMenu.innerHTML = "";

    const categories = ["starter", "rice", "noodles", "soup"];

    let totalItems = 0;

    categories.forEach(category => {

        const categoryItems = filteredItems.filter(
            item => item.category === category
        );

        if (categoryItems.length === 0) return;

        totalItems += categoryItems.length;

        const card = document.createElement("div");
        card.className = "menu-category-card";

        const heading = document.createElement("h4");
        heading.textContent = categoryTitles[category];

        card.appendChild(heading);

        categoryItems.forEach(item => {

            const row = document.createElement("div");
            row.className = "digital-menu-item";

            const details = document.createElement("div");
            details.className = "dish-details";

            if (item.image_url) {

                const image = document.createElement("img");

                image.src = item.image_url;
                image.alt = item.name;
                image.className = "dish-thumbnail";

                image.onerror = function () {
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

            if (item.has_half_full) {
                price.textContent =
                    `Half ₹${item.half_price} / Full ₹${item.full_price}`;
            } else {
                price.textContent = `₹${item.single_price}`;
            }

            // Portion selector
            const portionSelect = document.createElement("select");
            portionSelect.className = "portion-select";

            if (item.has_half_full) {

                const halfOption = document.createElement("option");
                halfOption.value = "half";
                halfOption.textContent = "Half";

                const fullOption = document.createElement("option");
                fullOption.value = "full";
                fullOption.textContent = "Full";

                portionSelect.append(halfOption, fullOption);

            } else {

                const singleOption = document.createElement("option");
                singleOption.value = "single";
                singleOption.textContent = "Single";

                portionSelect.appendChild(singleOption);
                portionSelect.style.display = "none";
            }

            // Add to cart button
            const addButton = document.createElement("button");
            addButton.className = "add-cart-btn";
            addButton.textContent = "+ Add";

            addButton.addEventListener("click", () => {

                const portion = portionSelect.value;

                addToCart(item, portion);
            });

            const orderControls = document.createElement("div");
            orderControls.className = "dish-order-controls";

            orderControls.append(portionSelect, addButton);

            const itemContent = document.createElement("div");
            itemContent.append(price, orderControls);

            row.append(details, itemContent);
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

// Add dish to cart
function addToCart(item, portion) {

    let unitPrice;

    if (item.has_half_full) {

        unitPrice = portion === "half"
            ? Number(item.half_price)
            : Number(item.full_price);

    } else {

        unitPrice = Number(item.single_price);
    }

    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
        alert("This portion is currently unavailable.");
        return;
    }

    const existingItem = cart.find(cartItem =>
        cartItem.id === item.id &&
        cartItem.portion === portion
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: item.id,
            name: item.name,
            portion: portion,
            price: unitPrice,
            quantity: 1
        });
    }

    renderCart();
}

// Display cart
function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.textContent =
            "Your cart is empty. Add your favourite dishes!";

        cartTotal.textContent = "₹0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const lineTotal = item.price * item.quantity;
        total += lineTotal;

        const row = document.createElement("div");
        row.className = "cart-item";

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const name = document.createElement("strong");
        name.textContent = item.name;

        const details = document.createElement("small");

        const portionName =
            item.portion === "single"
                ? "Single"
                : item.portion.charAt(0).toUpperCase() + item.portion.slice(1);

        details.textContent =
            `${portionName} | ₹${item.price} each | Subtotal: ₹${lineTotal}`;

        info.append(name, details);

        const controls = document.createElement("div");
        controls.className = "cart-controls";

        const minusButton = document.createElement("button");
        minusButton.textContent = "−";

        minusButton.addEventListener("click", () => {
            changeQuantity(index, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";

        plusButton.addEventListener("click", () => {
            changeQuantity(index, 1);
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });

        controls.append(
            minusButton,
            quantity,
            plusButton,
            removeButton
        );

        row.append(info, controls);
        cartItems.appendChild(row);
    });

    cartTotal.textContent = `₹${total}`;
}

// Change quantity
function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    renderCart();
}

// Veg / Non-veg buttons
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

// Category filters
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

// Search
if (menuSearch) {

    menuSearch.addEventListener("input", event => {

        searchText = event.target.value.toLowerCase().trim();

        renderMenu();
    });
}

// Initial cart display
renderCart();

// Load menu when website opens
loadMenuFromSupabase();

// ==========================================
// CHECKOUT: SUPABASE + WHATSAPP
// ==========================================

const placeOrderBtn = document.getElementById("placeOrderBtn");
const customerNameInput = document.getElementById("customerName");
const tableDisplay = document.getElementById("tableDisplay");
const orderMessage = document.getElementById("orderMessage");

// Get table number from QR code URL, e.g. ?table=T01
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get("table") || "Counter";

if (tableDisplay) {
    tableDisplay.textContent = `Order Type: ${tableNumber}`;
}

if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", async function () {

        if (!tableNumber) {
            alert("Table number not detected. Please scan the table QR code.");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty. Please add dishes first.");
            return;
        }

        const customerName = customerNameInput.value.trim();

        // Prevent repeated clicks
        placeOrderBtn.disabled = true;
        placeOrderBtn.textContent = "Placing Order...";
        orderMessage.textContent = "Saving your order...";

        try {
            // Save order in Supabase
            const { data, error } = await window.db.rpc(
                "place_table_order",
                {
                    p_table_number: tableNumber,
                    p_customer_name: customerName || null,
                    p_items: cart.map(item => ({
                        menu_item_id: item.id,
                        quantity: item.quantity,
                        portion: item.portion
                    }))
                }
            );

            if (error) {
                throw error;
            }

            if (!data || !data.success) {
                throw new Error("Order could not be confirmed.");
            }

            // Prepare WhatsApp message
            let message = `*DESI CHAI THEKA - NEW ORDER*\n\n`;
            message += `Order Number: ${data.order_number}\n`;
            message += `Table: ${tableNumber}\n`;
            message += `Customer: ${customerName || "Not provided"}\n\n`;
            message += `*ORDER ITEMS*\n`;

            cart.forEach(item => {
                const portion = item.portion.toUpperCase();
                const subtotal = item.price * item.quantity;

                message += `\n${item.name}\n`;
                message += `${portion} x ${item.quantity}\n`;
                message += `₹${item.price} each = ₹${subtotal}\n`;
            });

            message += `\n*TOTAL: ₹${data.total_amount}*\n`;
            message += `\nStatus: ${data.status.toUpperCase()}`;
            message += `\n\nPlease confirm this order.`;

            const whatsappURL =
                `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;

            // Clear cart after successful database save
            cart = [];
            renderCart();

            orderMessage.textContent =
                `Order #${data.order_number} saved successfully! Opening WhatsApp...`;

            // Open WhatsApp with the prepared order
            window.location.href = whatsappURL;

        } catch (error) {
            console.error("Order submission error:", error);
            orderMessage.textContent =
                "Unable to place order. Please try again.";
            alert(error.message || "Something went wrong.");
        } finally {
            placeOrderBtn.disabled = false;
            placeOrderBtn.textContent = "Place Order on WhatsApp";
        }
    });
}
