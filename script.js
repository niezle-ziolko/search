// Funkcja do ładowania plików HTML
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML:', error));
};

// Ładowanie nagłówka i stopki
loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');

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

// Call the function on page load
fetchCountry();