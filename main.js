// Function to change content dynamically
function updateContent() {
    const newContent = `
        <h2>Special Announcement</h2>
        <p>Stay tuned for our upcoming live event featuring exclusive game releases and developer Q&A!</p>
    `;
    document.querySelector('main').innerHTML += newContent;
}

// Function to start a simple image slideshow
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.gallery img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex-1].style.display = 'block';  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to initialize interactive elements
function initialize() {
    const contentButton = document.createElement('button');
    contentButton.textContent = 'Show Special Announcement';
    contentButton.onclick = updateContent;
    document.querySelector('main').insertBefore(contentButton, document.querySelector('main').firstChild);

    // Start the slideshow
    showSlides();
}

// Run the initialization function when the document is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
