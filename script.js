function luckySearch() {
    // Get the search query value from the input field with name="q"
    const query = document.querySelector('input[name="q"]').value;
    
    // If the query is not empty, redirect to Google's "I'm Feeling Lucky" search
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    };
};

async function fetchCountry() {
    try {
        // Fetch the user's IP-based location data from the API
        const response = await fetch('https://api.my-ip.io/v2/ip.json');

        // If the fetch fails, throw an error
        if (!response.ok) {
            throw new Error('Failed to fetch country');
        };

        // Parse the response as JSON and extract the country name
        const data = await response.json();
        const country = data.country.name;

        // Update the content of the "country" element with the detected country
        document.getElementById('country').textContent = `${country}`;
    } catch (error) {
        // If an error occurs, display a fallback message and log the error
        document.getElementById('country').textContent = 'Could not detect your location.';
        console.error(error);
    };
};

// Immediately call the fetchCountry function to fetch location on page load
fetchCountry();

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the theme toggle button, body element, and logo element
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');

    // Add a click event listener to toggle between dark and light themes
    themeToggle.addEventListener('click', function () {
        // Toggle the "dark-theme" class on the body element
        body.classList.toggle('dark-theme');
        
        // Update the theme toggle text and logo based on the current theme
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Theme: dark'; // Set the text to "Theme: dark"
            logo.src = 'logo-dark.png';             // Switch to the dark mode logo
            logo.alt = 'Google dark mode';          // Update the logo's alt text
        } else {
            themeToggle.textContent = 'Theme: light'; // Set the text to "Theme: light"
            logo.src = 'logo-light.png';             // Switch to the light mode logo
            logo.alt = 'Google light mode';          // Update the logo's alt text
        };
    });
});