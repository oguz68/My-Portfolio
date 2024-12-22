// Select the toggle switch
const toggleSwitch = document.getElementById('theme-toggle');

// Function to switch theme
function switchTheme(event) {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', switchTheme);

// Initialize theme on page load
loadTheme();
