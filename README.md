# CS50 Project 0 - Google Search

Custom design made for CS50's Web Programming with Python and JavaScript course, which is a simple clone of Google Search, Google Image, and Google Advanced Search pages consisting of HTML, CSS, JS, and external code provided using CDN.

## Demo

Demo site: [https://search-cs50.vercel.app](https://search-cs50.vercel.app)

A short video where I go through the required specifications of the project: [https://youtu.be/sLuKh2eZEbg](https://youtu.be/sLuKh2eZEbg)

---

## Project Requirements

### Website Structure

Your site must include a minimum of three distinct pages:

1. A page dedicated to standard Google Search functionality.
2. A page for Google Image Search.
3. A page for Google Advanced Search.

The Google Search page should feature navigation links in the upper-right corner that direct users to either the Image Search or Advanced Search pages. Similarly, both the Image Search and Advanced Search pages should provide a link in the same position to return to the main Google Search page.

---

### Search Functionality

1. **Standard Search**:
   - The Google Search page must allow users to input a search query.
   - Upon clicking a "Search" button, users should be redirected to the appropriate Google results page.
   - The search bar should:
     - Be centered on the page.
     - Have rounded corners.
     - Include the search button directly below it.

2. **Image Search**:
   - The Image Search page should enable users to enter a query and perform a search by clicking a designated button.
   - This action should redirect users to Google Image results relevant to their query.

3. **Advanced Search**:
   - The Advanced Search page must include input fields for the following criteria:
     - Pages containing **all** specified words.
     - Pages containing an **exact phrase**.
     - Pages containing **any** of the specified words.
     - Pages excluding specified words.
   - The layout should:
     - Arrange these input fields vertically.
     - Left-align the fields.
   - The "Advanced Search" button should:
     - Be styled with a blue background and white text.
     - Redirect users to search results tailored to the provided inputs.

---

### Additional Features

1. **“I’m Feeling Lucky” Button**:
   - Include this button on the primary Google Search page.
   - When clicked, it should bypass the search results page and navigate directly to the first result for the given query.

2. **Design Consistency**:
   - The overall design and style (CSS) of your site should emulate Google's aesthetic as closely as possible, ensuring a familiar user experience.

3. **Localization**:
   - Display text indicating the country from which the visit is supported.

4. **Virtual Keyboard**:
   - Provide a virtual keyboard to type search phrases without using a physical keyboard.

5. **Voice Search**:
   - Implement voice search functionality, allowing users to input search phrases using their voice.

6. **Google Lens**:
   - Include a button that allows users to perform a query using an image in the Google Lens service.
   - Redirect users to the linked image for Google Lens processing.