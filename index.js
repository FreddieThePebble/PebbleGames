window.onload = function () {
    const favicon = document.getElementById("favicon");
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    if (month === 12 && day <= 25) {
      favicon.href = "https://github.com/FreddieThePebble/PebbleGames/raw/refs/heads/main/icons/favicons/christmas.ico";
    }
  };

  function copyToClipboard() {
    const link = "https://freddiethepebble.github.io/PebbleGames";
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied to clipboard!");
    });
  }