function fetchActivePlayers() {
  const apiUrl = "https://api.mcsrvstat.us/3/craftmc.pl";

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const graczeElement = document.getElementById("gracze-online");

      if (!graczeElement) {
        console.error("Brakuje elementu o ID 'gracze-online' w HTML.");
        return;
      }

      if (data.online) {
        const liczbaGraczy = data.players?.online ?? 0;
        graczeElement.textContent = `${liczbaGraczy}`;
      } else {
        graczeElement.textContent = "Serwer jest offline";
      }
    })
    .catch(error => {
      console.error("Błąd podczas pobierania statusu serwera:", error);
      const graczeElement = document.getElementById("gracze-online");
      if (graczeElement) {
        graczeElement.textContent = "Błąd podczas pobierania statusu serwera";
      }
    });
}

fetchActivePlayers();

setInterval(fetchActivePlayers, 60000);

function otworz() {
  const widoczny = document.getElementById('nav');
  if (widoczny) {
    widoczny.style.transform = 'translateX(5%)';
  }
}

function zamknij() {
  const tak = document.getElementById('nav');
  if (tak) {
    tak.style.transform = 'translateX(-100%)';
  }
}
