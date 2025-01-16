<h1>CS50 Project 0 - Google Search</h1>

<p>Custom design made for CS50's Web Programming with Python and JavaScript course, which is a simple clone of Google Search, Google Image and Google Advanced Search page consisting of HTML, CSS, JS and external code provided using CDN.</p>

<h2>Youtube Video</h2>

<p>A short video where I go through the required specifications of the project:<a href="https://www.youtube.com/watch?v=6F4eALwBmpM">https://www.youtube.com/watch?v=6F4eALwBmpM</a></p>

<h2>Project Requirements</h2>

<h3>Website Structure</h3>

<p>Your site must include a minimum of three distinct pages:</p>

<ol>
    <li>A page dedicated to standard Google Search functionality.</li>
    <li>A page for Google Image Search.</li>
    <li>A page for Google Advanced Search.</li>
</ol>

<p>
  The Google Search page should feature navigation links in the upper-right corner 
  that direct users to either the Image Search or Advanced Search pages. Similarly, 
  both the Image Search and Advanced Search pages should provide a link in the same 
  position to return to the main Google Search page.
</p>

<h3>Search Functionality</h3>
<ol>
    <li>
        <strong>Standard Search:</strong>
        <ul>
            <li>The Google Search page must allow users to input a search query.</li>
            <li>Upon clicking a "Search" button, users should be redirected to the appropriate Google results page.</li>
            <li>The search bar should be centered on the page, have rounded corners, and the search button should appear directly below the search bar.</li>
        </ul>
    </li>
    <li>
        <strong>Image Search:</strong>
        <ul>
            <li>The Image Search page should enable users to enter a query and perform a search by clicking a designated button.</li>
            <li>This action should redirect users to Google Image results relevant to their query.</li>
        </ul>
    </li>
    <li>
        <strong>Advanced Search:</strong>
        <ul>
            <li>The Advanced Search page must include input fields corresponding to the following criteria:</li>
            <ul>
                <li>Pages containing <em>all</em> specified words.</li>
                <li>Pages containing an <em>exact phrase</em>.</li>
                <li>Pages containing <em>any</em> of the specified words.</li>
                <li>Pages excluding specified words.</li>
            </ul>
            <li>The layout should arrange these input fields vertically, with the fields left-aligned.</li>
            <li>The "Advanced Search" button should appear styled with a blue background and white text, and clicking it should direct users to search results tailored to the provided inputs.</li>
        </ul>
    </li>
</ol>

<h3>Additional Features</h3>

<ol>
    <li>
        <strong>“I’m Feeling Lucky” Button:</strong>
        <ul>
            <li>Include this button on the primary Google Search page. When clicked, it should bypass the search results page and navigate directly to the first result for the given query.</li>
        </ul>
    </li>
    <li>
        <strong>Design Consistency:</strong>
        <ul>
            <li>The overall design and style (CSS) of your site should emulate Google's aesthetic as closely as possible, ensuring a familiar user experience.</li>
        </ul>
    </li>
    <li>
        <strong>Localization:</strong>
        <ul>
            <li>Text displaying the country from which your visit is supported.</li>
        </ul>
    </li>
    <li>
        <strong>Virtual Keyboard:</strong>
        <ul>
            <li>A virtual keyboard through which you can type search phrases without having a physical keyboard.</li>
        </ul>
    </li>
    <li>
        <strong>Voice Search:</strong>
        <ul>
            <li>Voice search through which you can use your voice to enter the phrases you need to search.</li>
        </ul>
    </li>
    <li>
        <strong>Google Lens:</strong>
        <ul>
            <li>This button allows you to perform a query using an image in the Google Lens service. Just wke the link to the image so the user will be redirected.</li>
        </ul>
    </li>
</ol>