document.addEventListener('DOMContentLoaded', function() {

    /**
     * Custom function to display a temporary, non-blocking message box
     * instead of using the forbidden window.alert().
     * @param {string} message The message to display to the user.
     */
    function showMessage(message) {
        // 1. Create the message container element
        const messageBox = document.createElement('div');
        messageBox.textContent = message;

        // 2. Apply basic styling for visibility and appearance
        messageBox.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            background-color: #2D3748; /* Dark background */
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            pointer-events: none; /* Allows clicks to pass through */
        `;

        // 3. Append to body and fade in
        document.body.appendChild(messageBox);

        // A small delay to ensure the element is in the DOM before transitioning
        setTimeout(() => {
            messageBox.style.opacity = '1';
        }, 10);

        // 4. Set timeout to fade out and remove after 3 seconds
        setTimeout(() => {
            messageBox.style.opacity = '0';
            // Remove element after transition completes
            setTimeout(() => {
                messageBox.remove();
            }, 500);
        }, 3000); // Display for 3 seconds
    }

    // --- Original Event Listeners, now using showMessage ---

    // Search functionality
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-bar input');
            const searchTerm = searchInput ? searchInput.value : '';
            if (searchTerm.trim() !== '') {
                // Replaced alert()
                showMessage(`Searching new arrivals for: ${searchTerm}`);
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
            // Replaced alert()
            showMessage(`Sorting by: ${sortType}`);
            // Implement sorting logic here
        });
    });

    // Add to cart functionality
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.closest('.product-card') ? this.closest('.product-card').querySelector('h4').textContent : 'Product';
            // Replaced alert()
            showMessage(`${productName} added to cart!`);
        });
    });

    // Pagination
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === 'Previous' || this.textContent === 'Next') {
                // Replaced alert()
                showMessage(`Navigating to ${this.textContent} page`);
            } else {
                pageBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                // Replaced alert()
                showMessage(`Viewing page ${this.textContent}`);
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
