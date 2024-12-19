// Food items data
const foodItems = [
    {
        image: 'assets/Product card (1).png',
        name: 'Home made pizza',
        price: '₹190',
        rating: 4.7,
        time: '50-79 min',
        discount: '50%'
    },
    {
        image: 'assets/Product card (2).png',
        name: 'Tandoori Chicken',
        price: '₹184',
        rating: 4.3,
        time: '15-29 min',
        discount: '20%'
    },
    {
        image: 'assets/Product card (3).png',
        name: 'Chilli Chicken',
        price: '₹116',
        rating: 4.1,
        time: '30-40 min',
        discount: '50%'
    },
    {
        image: 'assets/Product card (4).png',
        name: 'Grilled Sandwich',
        price: '₹170',
        rating: 4.5,
        time: '40-50 min',
        discount: '20%'
    },
    {
        image: 'assets/Product card (5).png',
        name: 'Veg Biryani',
        price: '₹210',
        rating: 4.8,
        time: '45-60 min',
        discount: '30%'
    },
    {
        image: 'assets/Product card (6).png',
        name: 'Chicken Biryani',
        price: '₹250',
        rating: 4.9,
        time: '45-60 min',
        discount: '25%'
    },
    {
        image: 'assets/Product card (7).png',
        name: 'Paneer Butter Masala',
        price: '₹180',
        rating: 4.6,
        time: '35-45 min',
        discount: '15%'
    },
    {
        image: 'assets/Product card (8).png',
        name: 'Dal Makhani',
        price: '₹160',
        rating: 4.4,
        time: '30-40 min',
        discount: '40%'
    },
    {
        image: 'assets/Product card (9).png',
        name: 'Butter Chicken',
        price: '₹240',
        rating: 4.8,
        time: '40-55 min',
        discount: '35%'
    },
    {
        image: 'assets/Product card (10).png',
        name: 'Veg Thali',
        price: '₹200',
        rating: 4.5,
        time: '35-50 min',
        discount: '45%'
    },
    {
        image: 'assets/Product card (11).png',
        name: 'Non-Veg Thali',
        price: '₹280',
        rating: 4.7,
        time: '40-55 min',
        discount: '30%'
    }
];

const popularItems = [
    {
        image: 'assets/Product card (1).png',
        name: 'Home made pizza',
        price: '₹190',
        rating: 4.7,
        time: '50-79 min'
    },
    {
        image: 'assets/Product card (2).png',
        name: 'Tandoori Chicken',
        price: '₹184',
        rating: 4.3,
        time: '15-29 min'
    },
    {
        image: 'assets/Product card (3).png',
        name: 'Chilli Chicken',
        price: '₹116',
        rating: 4.1,
        time: '30-40 min'
    }
];

// Populate Home Kitchen Grid
const foodGrid = document.querySelector('.food-grid');
foodItems.forEach(item => {
    const foodCard = createFoodCard(item);
    foodGrid.appendChild(foodCard);
});

// Populate Popular Items Carousel
const carousel = document.querySelector('.carousel-items');
popularItems.forEach(item => {
    const foodCard = createFoodCard(item);
    carousel.appendChild(foodCard);
});

// Create Food Card Function
function createFoodCard(item) {
    const foodCard = document.createElement('div');
    foodCard.className = 'food-card';
    
    // const imageContainer = document.createElement('div');
    // imageContainer.className = 'food-image-container';
    
    let html = `
        ${item.discount ? `<div class="discount">${item.discount}</div>` : ''}
        <div class="food-image-container">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <h3>${item.name}</h3>
        <div class="food-info">
            <div class="rating">
                <span class="stars">★</span>
                <span>${item.rating}</span>
            </div>
            <span class="time">${item.time}</span>
            <span class="price">${item.price}</span>
            <button class="add-btn">+</button>
        </div>
    `;
    
    foodCard.innerHTML = html;
    return foodCard;
}

// Carousel Functionality
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');
let currentPosition = 0;
const itemWidth = 320;

// Swap arrow positions
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.insertBefore(nextBtn, carouselContainer.firstChild);
carouselContainer.appendChild(prevBtn);

function moveCarousel(direction) {
    const maxPosition = -(popularItems.length - 3) * itemWidth;
    
    if (direction === 'next' && currentPosition > maxPosition) {
        currentPosition -= itemWidth;
    } else if (direction === 'prev' && currentPosition < 0) {
        currentPosition += itemWidth;
    }
    
    carousel.style.transform = `translateX(${currentPosition}px)`;
}

prevBtn.addEventListener('click', () => moveCarousel('prev'));
nextBtn.addEventListener('click', () => moveCarousel('next'));

// Video Functionality
const video = document.getElementById('mainVideo');
const playPauseBtn = document.querySelector('.play-pause-btn');
playPauseBtn.classList.add('green-play-btn');

function toggleVideo() {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.add('playing');
    } else {
        video.pause();
        playPauseBtn.classList.remove('playing');
    }
}

video.addEventListener('click', toggleVideo);
playPauseBtn.addEventListener('click', toggleVideo);

// Modal Functionality
const cartModal = document.getElementById('cartModal');
const requestModal = document.getElementById('requestDishModal');
const cartIcon = document.getElementById('cartIcon');
const requestDishBtn = document.querySelector('.request-dish-btn');

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

cartIcon.addEventListener('click', () => openModal(cartModal));
document.querySelector('.back-to-menu').addEventListener('click', () => closeModal(cartModal));

requestDishBtn.addEventListener('click', () => openModal(requestModal));
document.querySelector('.cancel-btn').addEventListener('click', () => closeModal(requestModal));
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(requestModal);
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) closeModal(cartModal);
    if (e.target === requestModal) closeModal(requestModal);
});