function changeLanguage() {
    var languageSelector = document.getElementById("languageSelector");
    var selectedValue = languageSelector.value;

    var linksHelp = document.getElementById("links-help");
    var links = linksHelp.getElementsByTagName("a");

    var petSimulatorTextpl = `
    <span>
        Witaj na <b>Crux Market</b> - Twoim jednostopniowym przystanku dla fascynującej przygody w świecie Pet Simulator 99!

        <h2>🐾 Odkryj Magię Pet Simulator 99:</h2>
        Zanurz się w fantastycznym świecie, gdzie marzenia o posiadanym wymarzonym zwierzaku stają się rzeczywistością.<br> 
        Pet Simulator 99 to nie tylko gra, to podróż pełna przygód, niesamowitych stworzeń i emocji.

        <h2>🌟 Twój Kodeks Pet Owcy:</h2>
        Na Crux Market nie tylko oferujemy wyjątkowe zwierzaki, ale także wspieramy społeczność Pet Simulator 99.<br>
        Sprawdź nasze ekskluzywne dodatki, skiny i bonusy, które uczynią Twoją przygodę jeszcze bardziej niezapomnianą.

        <h2>🛍️ Ekskluzywne Produkty, Ekskluzywne Doświadczenia:</h2>
        Przeglądaj naszą kolekcję ekskluzywnych produktów, stworzonych specjalnie dla miłośników Pet Simulator 99.<br>
        Od unikalnych karm i zabawek po niezwykłe akcesoria, Crux Market dostarcza wszystko, czego potrzebuje prawdziwy pet owca.

        <h2>🤝 Nasza Społeczność, Twój Dom:</h2>
        Dołącz do naszej rosnącej społeczności entuzjastów Pet Simulator 99. Na Crux Market nie tylko handlujemy, ale także dzielimy się wrażeniami, wiedzą i pasją.<br>
        To miejsce, gdzie każdy pet owca znajdzie swoje miejsce.

        <h2>🌐 Crux Market - Twój Klucz do Świata Pet Simulator 99:</h2>
        Nie trać czasu na szukanie - z Crux Market masz pewność, że zdobędziesz najwyższej jakości produkty dla swojego wirtualnego pupila.<br> 
        Odkryj teraz naszą ofertę i przygotuj się na niezapomnianą podróż z Pet Simulator 99!

        <h3>🚀 Rozpocznij Przygodę Teraz!</h3>
    </span>
`;

var petSimulatorTexteng = `
    <span>
        Welcome to <b>Crux Market</b> - Your one-stop destination for an exciting adventure in the world of Pet Simulator 99!

        <h2>🐾 Discover the Magic of Pet Simulator 99:</h2>
        Immerse yourself in a fantastic world where dreams of owning your ideal pet become a reality. <br> 
        Pet Simulator 99 is not just a game; it's a journey full of adventures, incredible creatures, and emotions.

        <h2>🌟 Your Code of Pet Ownership:</h2>
        At Crux Market, we not only offer unique pets but also support the Pet Simulator 99 community. <br>
        Check out our exclusive add-ons, skins, and bonuses that will make your adventure even more unforgettable.

        <h2>🛍️ Exclusive Products, Exclusive Experiences:</h2>
        Browse through our collection of exclusive products, specially created for Pet Simulator 99 enthusiasts. <br>
        From unique food and toys to extraordinary accessories, Crux Market provides everything a true pet owner needs.

        <h2>🤝 Our Community, Your Home:</h2>
        Join our growing community of Pet Simulator 99 enthusiasts. At Crux Market, we don't just trade; we also share experiences, knowledge, and passion. <br>
        It's a place where every pet owner will find their home.

        <h2>🌐 Crux Market - Your Key to the World of Pet Simulator 99:</h2>
        Don't waste time searching - with Crux Market, you can be sure to get the highest quality products for your virtual companion. <br> 
        Explore our offerings now and get ready for an unforgettable journey with Pet Simulator 99!

        <h3>🚀 Start Your Adventure Now!</h3>
    </span>
`;


    if (selectedValue === "jezyk-polski") {
        links[0].innerText = "O Nas";
        document.getElementById('d-goal').textContent = "PS99 Cel Donate";
        document.getElementById('goal').textContent = "2,500 / 200,000 gemów";
        document.getElementById('n-block-one').textContent = "Rynek";
        document.getElementById('n-block-two').textContent = "Jak zarabiać dużo gemów";
        document.getElementById('n-block-three').textContent = "Nowości w Pet Simulator 99";
        document.getElementById('petSimulatorText').innerHTML = petSimulatorTextpl;
        document.getElementById('loading-text').textContent = "Ładowanie strony crux-market.ovh";
        }
        else if (selectedValue === "jezyk-angielski") {
        links[0].innerText = "About Us";
        document.getElementById('d-goal').textContent = "PS99 Donation Goal";
        document.getElementById('goal').textContent = "2,500 / 200,000 gems";
        document.getElementById('n-block-one').textContent = "Market";
        document.getElementById('n-block-two').textContent = "How earn alot of gems";
        document.getElementById('n-block-three').textContent = "News in Pet Simulator 99";
        document.getElementById('petSimulatorText').innerHTML = petSimulatorTexteng;
    }
}
setInterval(function()  {
    changeLanguage()
}, 500);


document.addEventListener("DOMContentLoaded", function () {
    var loadingScreen = document.getElementById("loading-screen");

    
    setTimeout(function () {
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 500);
    }, 2000); 

    
    var progress = 0;
    var progressBar = document.getElementById("loading-progress");

    function updateProgressBar() {
        progress += 100;
        progressBar.style.width = progress + "%";
    }

    var loadingInterval = setInterval(updateProgressBar, 10);
});