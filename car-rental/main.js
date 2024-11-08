let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}

//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


const productButton = document.querySelectorAll(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Add click event listeners to each productbutton
productButton.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default action of anchor tag
        // Get the index from the data-index attribute of the button
        const index = button.getAttribute("data-index");
        
        payment.style.display = "flex";
    });
});
close.addEventListener("click", () => {
payment.style.display = "none";
});


//blog slider

let currentSlide = 0;
        let slidesToShow = 3; // Default number of slides to show

        function updateSlider() {
            const wrapper = document.querySelector('.blog-wrapper');
            const totalSlides = document.querySelectorAll('.boxx').length;
            const slideWidth = document.querySelector('.boxx').offsetWidth;

            // Calculate the max offset
            const maxOffset = Math.max(0, (totalSlides - slidesToShow) * slideWidth);

            // Update the slider position
            wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        function nextSlide() {
            const wrapper = document.querySelector('.blog-wrapper');
            const totalSlides = document.querySelectorAll('.boxx').length;
            const slideWidth = document.querySelector('.boxx').offsetWidth;

            if (currentSlide < totalSlides - slidesToShow) {
                currentSlide++;
            } else {
                currentSlide = 0; // Loop back to the first slide
            }
            updateSlider();
        }

        function prevSlide() {
            const totalSlides = document.querySelectorAll('.boxx').length;

            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = totalSlides - slidesToShow; // Loop back to the last slide group
            }
            updateSlider();
        }

        // Adjust the slidesToShow based on screen width
        function adjustSlidesToShow() {
            const width = window.innerWidth;

            if (width <= 768) {
                slidesToShow = 1; // Mobile devices
            } else if (width <= 1024) {
                slidesToShow = 2; // Tablets
            } else {
                slidesToShow = 3; // Desktops
            }

            currentSlide = 0; // Reset to the first slide
            updateSlider();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            adjustSlidesToShow();
        });

        // Listen for window resize
        window.addEventListener('resize', adjustSlidesToShow);

        //search
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('search');
            const carBoxes = document.querySelectorAll('.car-box'); // Adjust this selector to match your actual car boxes
        
            searchInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent default form submission behavior if any
        
                    const searchTerm = searchInput.value.toLowerCase();
                    let found = false;
        
                    carBoxes.forEach(box => {
                        const title = box.querySelector('h3').textContent.toLowerCase();
                        if (title.includes(searchTerm)) {
                            box.style.display = ''; // Show the box
                            if (!found) {
                                // Scroll into view and highlight the first matched box
                                box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                found = true;
                            }
                        } else {
                            box.style.display = 'none'; // Hide non-matching boxes
                        }
                    });
        
                    if (!found) {
                        // If no matches are found, show all boxes (or you can choose to keep them hidden)
                        carBoxes.forEach(box => {
                            box.style.display = '';
                        });
                    }
        
                    // Clear the search input field
                    searchInput.value = '';
                }
            });
        
            function resetCarBoxes() {
                const carBoxes = document.querySelectorAll('.car-box');
                carBoxes.forEach(box => {
                    box.style.display = '';
                });
            }
            
            // Reset car boxes when navigating to a different section
            document.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function(event) {
                    // Example: Reset on link click
                    resetCarBoxes();
                });
            });
        
            // Optionally, you might want to reset car boxes on page load if a page reload happens
            window.addEventListener('load', function() {
                resetCarBoxes();
            });
        });

   