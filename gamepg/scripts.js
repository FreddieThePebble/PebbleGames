function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard!');
    });
}

function openScreenshot(url) {
    window.open(url, '_blank');
}

// Wait for the page to fully load before checking for screen size
window.onload = function() {
    if (window.innerWidth <= 768) {
      // Only show the popup if it's a mobile screen size
      document.getElementById("mobile-popup").style.display = "block";
    }
  };
  
