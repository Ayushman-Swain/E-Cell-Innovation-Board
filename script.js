//Scrolling Feature
const navBar = document.querySelector(".nav-bar");

const scrollTop = document.querySelector(".scroll-top");

//Nav Bar Background
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }

  //Scroll to Top
  scrollTop.style.display = window.scrollY > 500 ? "flex" : "none";
});

//Scroll to Top behaviour
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Logo click
const logo = document.querySelector(".logo");

if (logo) {
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const footerLogo = document.querySelector(".footer-logo");

if (footerLogo) {
  footerLogo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//Start-Up Ideas
ideas.forEach((idea, index) => {
  idea.id = index;
});
function displayIdeaCards(data) {
  const cardsSet = document.querySelector(".cards-set");

  cardsSet.innerHTML = "";

  data.forEach((idea) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${idea.name}</h3>
      <p class="pitch"><b>Pitch:</b> ${idea.pitch}</p>
      <p class="idea-description">${idea.description.slice(0, 100)}...</p>
      <p class="category"><b>Category:</b> <span class="badge-card">${
        idea.category
      }</span></p>
      <span class="more-btn">+</span>
    `;
    cardsSet.appendChild(card);
    card.addEventListener("click", () => {
      window.location.href = `ideas.html?id=${idea.id}`;
    });
  });
}

displayIdeaCards(ideas);

//Search and Filter
const searchInput = document.querySelector(".search");

const categoryFilter = document.querySelector(".categoryFilter");

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filterIdeas = ideas.filter((idea) => {
    const matchSearch =
      idea.name.toLowerCase().includes(searchTerm) ||
      idea.pitch.toLowerCase().includes(searchTerm);

    const matchCategory =
      selectedCategory === "All" || idea.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  displayIdeaCards(filterIdeas);
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
}

//Form submit button
const form = document.querySelector(".form-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Your form is submitted! Thank you for your idea.");
  form.reset();

  setTimeout(() => {
    location.href = "#form";
  }, 500);
});

//Nav Bar Toggle
const toggle = document.querySelector(".toggle");
const naviBar = document.querySelector(".nav-bar");
const navList = document.querySelectorAll(".nav-list li a");
const navLogo = document.querySelector(".logo");

toggle.addEventListener("click", () => {
  naviBar.classList.add("open");
});
navList.forEach((list) => {
  list.addEventListener("click", () => {
    naviBar.classList.remove("open");
  });
});
navLogo.addEventListener("click", () => {
  naviBar.classList.remove("open");
});
