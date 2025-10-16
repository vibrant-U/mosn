document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-bar input');
            const searchTerm = searchInput ? searchInput.value : '';
            if (searchTerm.trim() !== '') {
                alert(`Searching new arrivals for: ${searchTerm}`);
            }
        });
    }

    // Filter and sort functionality
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sortBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const sortType = this.dataset.sort;
            alert(`Sorting by: ${sortType}`);
            // Implement sorting logic here
        });
    });

    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.closest('.product-card') ? this.closest('.product-card').querySelector('h4').textContent : 'Product';
            alert(`${productName} added to cart!`);
        });
    });

    // Pagination
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === 'Previous' || this.textContent === 'Next') {
                alert(`Navigating to ${this.textContent} page`);
            } else {
                pageBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                alert(`Viewing page ${this.textContent}`);
            }
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        closeBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });

        // Close menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});
