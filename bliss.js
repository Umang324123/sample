// DOMContentLoaded ensures all scripts run after the DOM is fully loaded

// bliss.js

const hero = document.getElementById("hero");

const images = [
  "jessica-christian-EdRqqj9gF0g-unsplash.jpg",
  "pexels-juliano-astc-1623739-12303222.jpg",
  "pexels-reneterp-3167257.jpg"
];

let currentIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);

document.addEventListener('DOMContentLoaded', () => {


// search bar
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');

searchInput.addEventListener('focus', () => {
  searchBar.classList.add('expanded');
});

document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target)) {
    searchBar.classList.remove('expanded');
  }
});
// Example to update cart count
document.querySelector('.cart-count').textContent = 3; // or fetch from localStorage / backend


searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
});



  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Form Validation for Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for contacting us! We will get back to you soon.');
      this.reset();
    });
  }

  // Form Validation for Sign Up Form
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!username || !email || !password) {
        alert('Please fill out all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for signing up! Welcome to Blissora.');
      this.reset();
    });
  }

  // Email Validation Function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Product Slider (Custom Implementation)
  const slider = document.querySelector('.product-slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (slider && prevBtn && nextBtn) {
    let scrollAmount = 0;
    const cardWidth = 270;

    prevBtn.addEventListener('click', () => {
      if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        slider.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });

    nextBtn.addEventListener('click', () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth;
        slider.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });

    // Autoplay Feature
    setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth;
        slider.style.transform = `translateX(-${scrollAmount}px)`;
      } else {
        scrollAmount = 0;
        slider.style.transform = `translateX(0px)`;
      }
    }, 3000);
  }

  // Swiper.js Initialization for Collections Slider
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Intersection Observer for Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('show');
    });
    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('show');
      });
    });
  }
});

// Search Bar Functionality
document.querySelector('.search-btn').addEventListener('click', () => {
  const query = document.querySelector('.search-input').value.trim();
  if (query) {
    alert(`Searching for: "${query}"`);
    // Redirect to a search results page (optional)
    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
  } else {
    alert('Please enter a search term.');
  }
});

// Allow pressing "Enter" to trigger the search
document.querySelector('.search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('.search-btn').click();
  }
});
document.querySelector('.search-input').addEventListener('input', (e) => {
  const query = e.target.value.trim();
  if (query) {
    console.log(`Searching for: "${query}"`);
    // Fetch and display suggestions dynamically
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const categoryCards = document.querySelectorAll('.category-card');
  const categoryGroups = document.querySelectorAll('.category-group');
  const modal = document.getElementById('product-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');

  // Click on category
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedCategory = card.getAttribute('data-category');
      categoryGroups.forEach(group => {
        group.style.display = group.getAttribute('data-category') === selectedCategory ? 'grid' : 'none';
      });
    });
  });

  // Click on a product
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img').src;
      const title = card.querySelector('h3').textContent;
      const price = card.querySelector('p').textContent;

      modalImg.src = img;
      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modal.style.display = 'flex';
    });
  });

  closeModal.onclick = () => modal.style.display = 'none';
});


function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultBox = document.getElementById("searchResults");
  resultBox.innerHTML = ""; // Clear old results

  if (query.trim() === "") return;

  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  
  if (filtered.length === 0) {
    resultBox.innerHTML = "<li>No items found</li>";
    return;
  }

  filtered.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${product.link}">${product.name}</a>`;
    resultBox.appendChild(li);
  });
}



  // Load cart from localStorage or initialize empty array
  function loadCart() {
    return JSON.parse(localStorage.getItem("blissora-cart")) || [];
  }

  // Update the cart count badge
  function updateCartCount() {
    const cart = loadCart();
    const cartCountElement = document.querySelector(".cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = cart.length;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
  });

