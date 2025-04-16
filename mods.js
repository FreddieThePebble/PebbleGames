const csvUrl = "https://raw.githubusercontent.com/FreddieThePebble/PebbleGames/refs/heads/main/data/games.csv";

fetch(csvUrl)
  .then(response => response.text())
  .then(csv => {
    const lines = csv.trim().split("\n");
    const entries = lines.map(line => {
      const [thumb, url, dateStr] = line.split(",");
      const [month, day, year] = dateStr.trim().split("/");
      const date = new Date(`${year}-${month}-${day}`);
      return { thumb, url, date };
    });

    entries.sort((a, b) => b.date - a.date);

    const gallery = document.getElementById("gallery");
    const gameCount = document.getElementById("gameCount");

    entries.forEach(entry => {
      const img = document.createElement("img");
      img.src = entry.thumb;
      img.alt = "Game Thumbnail";
      img.onclick = () => window.open(entry.url, "_blank");
      gallery.appendChild(img);
    });

    gameCount.textContent = entries.length;
  })
  .catch(error => {
    console.error("Error loading CSV:", error);
  });
