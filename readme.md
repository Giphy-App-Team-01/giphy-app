# Giphy SPA App

A simple and interactive Giphy-powered SPA (Single Page Application) that allows users to browse trending GIFs, search for specific GIFs, upload their own, manage favorites, and more.

## Features

- **Trending View** – Displays the most popular GIFs trending on Giphy.
- **Search Functionality** – Users can search for GIFs by keywords.
- **Upload a GIF** – Allows users to upload GIFs to Giphy.
- **View Uploaded GIFs** – Users can see the GIFs they have uploaded.
- **Favorites** – Save and manage favorite GIFs.
- **Copy Link to Clipboard** – Easily copy the link of a GIF.
- **Single GIF View** – Open and view GIFs in a dedicated view with more details.

## Technologies Used

- JavaScript (ES6+)
- HTML5 & CSS3
- Giphy API
- Fetch API
- Local Storage (for favorites management)
- Node.js (for local development and API handling, if applicable)

## Installation & Usage

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Giphy-App-Team-01/giphy-app
   cd giphy-app
   ```

2. **Install dependencies (if using a package manager like npm):**

   ```sh
   npm install
   ```

3. **Run the app locally:**

   ```sh
   npm start
   ```

   or if it’s a purely static app, just open `index.html` in a browser.

4. **Environment Variables (Optional, if required):**
   Create a `.env` file and set up your Giphy API key:

   ```env
   VITE_GIPHY_API_KEY=your_api_key_here
   ```

5. **Deploying the App:**
   - The app can be deployed on GitHub Pages, Netlify, or Vercel for free static hosting.

## Contributors

- **Dimitar Srabski**
- **Plamen Yordanov**

## License

This project is open-source and available under the [MIT License](LICENSE).
