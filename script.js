function langselect() {
  var langpageselector = document.getElementById('langselector');
  var langpage = langpageselector.value;
  var infoElement = document.getElementById('B2');

  if (langpage === "pl") {
      document.getElementById('L1').textContent = "O nas";
      document.getElementById('L2').textContent = "Rynek";
      document.getElementById('L3').textContent = "Wartość petów";
      document.getElementById('L4').textContent = "Moja Gra";
      document.getElementById('K1').textContent = "KONKURS";
      document.getElementById('K2').textContent = "Do wygrania:";
      document.getElementById('K3').textContent = "1000x RB Potion Poodle";
      document.getElementById('K4').textContent = "O wartości 20,000 gemów";
      document.getElementById('K5').textContent = "Dołącz";
      document.getElementById('I1').textContent = "Witajcie";
      document.getElementById('I2').textContent = "Hej, hej! Witaj na mojej niezwykłej stronie poświęconej fascynującemu światu gry Pet Simulator 99!";
      document.getElementById('I3').innerHTML = `
          Witajcie na <strong>Zmcpl.github.io</strong>, miejscu, gdzie pasja do PetSimulator99 nabiera nowego wymiaru. 
          Zapraszam Was do odkrywania trzech unikalnych kategorii, które z pewnością rozpalą wasze zainteresowanie:
          
              <br><br>🛍️  Market petów z PetSimulator99 – dostępne za gemy, tańsze niż ich rzeczywista wartość RAP (od -5 do -10%).
              <br><br>🌟  Świeże informacje prosto ze świata gry Pet Simulator 99, które sprawią, że zawsze będziecie na bieżąco.
              <br><br>🚀  Zakładka poświęcona mojej własnej grze, Box Click – zanurzcie się w fascynującym świecie własnych kreatywnych projektów.
          
          
      `;
      infoElement.innerHTML = `
      <h2>Informacja</h2>
      <p>Strona internetowa oraz jej treść są własnością Ziorbka. Wszelkie próby kopiowania lub reprodukowania treści bez zezwolenia właściciela są naruszeniem praw autorskich.</p>
    `;
  } else if (langpage === "eng") {
      document.getElementById('L1').textContent = "About Us";
      document.getElementById('L2').textContent = "Market";
      document.getElementById('L3').textContent = "Pet Value";
      document.getElementById('L4').textContent = "My Game";
      document.getElementById('K1').textContent = "GIVEAWAY";
      document.getElementById('K2').textContent = "To win:";
      document.getElementById('K3').textContent = "1000x RB Potion Poodle";
      document.getElementById('K4').textContent = "Valued at 20,000 gems";
      document.getElementById('K5').textContent = "Join";
      document.getElementById('I1').textContent = "Welcome";
      document.getElementById('I2').textContent = "Hey, hey! Welcome to my extraordinary website dedicated to the fascinating world of Pet Simulator 99!";
      document.getElementById('I3').innerHTML = `
          Welcome to <strong>Zmcpl.github.io</strong>, the place where passion for PetSimulator99 takes on a new dimension.
          I invite you to explore three unique categories that will surely ignite your interest:
              <br><br>🛍️Martket pets from PetSimulator99 – available for gems, cheaper than their actual RAP value (from -5 to -10%).
              <br><br>🌟Fresh information straight from the world of Pet Simulator 99, keeping you always up-to-date.
              <br><br>🚀A section dedicated to my own game, Box Click – dive into the fascinating world of your own creative projects.
          
      `;
      infoElement.innerHTML = `
      <h2>Information</h2>
      <p>The website and its content are the property of Ziorbek. Any attempts to copy or reproduce the content without the owner's permission are a violation of copyright.</p>
    `;
  }
}

setInterval(function() {
    langselect()
}, 500);

const endDate = new Date('2024-01-31T00:00:00');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = endDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    const languageSelector = document.getElementById('langselector');
    const language = languageSelector.value;

    if (language === 'pl') {
      document.getElementById('countdown').innerHTML = `Do końca ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
    } else if (language === 'eng') {
      document.getElementById('countdown').innerHTML = `To end: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  } else {
    const languageSelector = document.getElementById('langselector');
    const language = languageSelector.value;

    if (language === 'pl') {
      document.getElementById('countdown').innerHTML = 'Czas minął!';
    } else if (language === 'eng') {
      document.getElementById('countdown').innerHTML = 'Time has expired!';
    }
  }
}

// Aktualizuj odliczanie co sekundę
setInterval(updateCountdown, 1000);

// Wywołaj funkcję aktualizacji odliczania przy załadowaniu strony
updateCountdown();
