// Function to toggle between light and dark mode
function toggleMode() {
    // Select the body element
    const body = document.body;

    // Check the current background color
    const currentColor = window.getComputedStyle(body).backgroundColor;

    // Define light and dark mode colors
    const lightModeColor = '#ffffff';  // White background
    const darkModeColor = '#333333';   // Dark gray background

    // Toggle between light and dark mode
    if (currentColor === lightModeColor) {
        body.style.backgroundColor = darkModeColor;
    } else {
        body.style.backgroundColor = lightModeColor;
    }
}

// Example of toggling mode when a button is clicked
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleMode);
