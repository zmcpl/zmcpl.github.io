const serverData = {
    "ip": "49.13.3.248",
    "port": 25565,
    "debug": {
      "ping": false,
      "query": false,
      "srv": false,
      "querymismatch": false,
      "ipinsrv": false,
      "cnameinsrv": false,
      "animatedmotd": false,
      "cachehit": false,
      "cachetime": 1707271376,
      "cacheexpire": 1707271436,
      "apiversion": 3,
      "error": {
        "ping": "No address to query.",
        "query": "Could not create socket: php_network_getaddresses: getaddrinfo for  failed: Name or service not known"
      }
    },
    "online": false
  };

  function fetchActivePlayers() {
    const apiUrl = `https://api.mcsrvstat.us/2/${serverData.ip}:${serverData.port}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.online) {
          document.getElementById('gracze-online').textContent = ` ${data.players.online}`;
        } else {
          document.getElementById('gracze-online').textContent = 'Serwer jest offline';
        }
      })
      .catch(error => {
        console.error('Error fetching server status:', error);
        document.getElementById('activePlayers').textContent = 'Error fetching server status';
      });
  }

  fetchActivePlayers();

  setInterval(fetchActivePlayers, 1000);


function otworz() {
    var widoczny = document.getElementById('nav');
    widoczny.style.transform = 'translateX(5%)';
}

function zamknij() {
    var tak = document.getElementById('nav');
    tak.style.transform = 'translateX(-100%)';
}