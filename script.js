function luckySearch() {
    const query = document.querySelector('input[name="q"]').value;
    
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    };
};

async function fetchCountry() {
    try {
        const response = await fetch('https://api.my-ip.io/v2/ip.json');

        if (!response.ok) {
            throw new Error('Failed to fetch country');
        };

        const data = await response.json();
        const country = data.country.name;

        document.getElementById('country').textContent = `${country}`;
    } catch (error) {
        document.getElementById('country').textContent = 'Could not detect your location.';
        console.error(error);
    };
};

fetchCountry();

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Theme: dark';
            logo.src = 'logo-dark.png';
            logo.alt = 'Google dark mode';
        } else {
            themeToggle.textContent = 'Theme: light';
            logo.src = 'logo-light.png';
            logo.alt = 'Google light mode';
        };
    });
});