function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard!');
    });
}

function openScreenshot(url) {
    window.open(url, '_blank');
}