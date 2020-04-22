# Heax

Haex staat voor Hacker Extension. Wanneer je op de extensie klikt 'hackt' deze extensie de site. Het is geen echte hack en doet geen schade aan de site en is dus onschuldig.
Haex is gemaakt door Jamaro Mooibroek en Joël Kuijpers. Het is in opdracht van H. Prins voor informatica.

## In den beginne

We waren eerst van plan om een loginsysteem te maken met een gezichtsherkenning (code staat in https://github.com/Joehoel/loginzicht), maar dat was te hoog gegrepen (in programmeertaal betekent dat, dat we er te weinig tijd voor hadden). We kregen problemen met het opslaan van afbeeldingen. En de code werd voor ons te ingewikkeld. Daarna had Joël het idee om een chrome extensie te maken. Toen kreeg ik het idee om in de extensie een visje te maken die over het scherm 'zwemt', maar dat was onmogelijk om te maken vanwege Javascript. We wilden niet voor de derde keer switchen van project, dus bleven we bij een extensie. Dit keer wel mogelijk en niet te hoog gegrepen.
Daarom hebben we Heax gemaakt. Een duidelijk programma met verschillende functies. Door deze functie-lijst kunnen we de te hoog gegrepen en onmogelijke functie-ideeën verwijderen uit het programma, en doorgaan met de werkende ideeën. Dit geeft ons iets meer ruimte om mee te spelen.

## Functies

- Font van website veranderen.
- Tekst op website bewerken.
- Een laadbalk popup op het scherm zetten.
- Alle afbeelding van een website naar een afbeelding naar keuze veranderen.

## Hoe te installeren

1. Open Chrome/**Brave** (of andere Chromium browser).
2. Ga naar `chrome://extensions`
3. Zet rechts bovenaan **Developer Mode** aan.
4. Klik op **Load unpacked**
5. Open de root folder van **haex**

Als het geinstalleerd is zie je als het goed is rechtsbovenaan een nieuw icoontje verschijnen met het officiële **haex** logo. Als je daar op klikt komt er een popup tevoorschijn waarmee je je browser kan "hacken".

## Documentatie

Als het installeren gelukt is kan je nu de browser gaan "hacken". Het icoontje die je rechtsboven wordt ingesteld door een verwijzing het `manifest.json` bestand, in het `manifest.json` bestand worden meerdere dingen van te voor klaar gezet voor de extensie waardoor de browser bijvoorbeeld weet welke versie van de extensie het is, wie de auteurs zijn en welke permissies de extensie allemaal heeft in de browser.

Wanneer je op het icoontje klikt dan krijg je dit te zien:

![Popup](https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/popup.png)

Dit is het belangrijkste gedeelte van de extensie, hier kan je alle hacks zien die we gemaakt hebben:

### Replace images

Dit was de eerste en ook meteen ingewikkeldste hack die we hebben gemaakt. Het maakt gebruikt meerdere javascript bestanden. De eerste is `options.js` Dit is het bestand dat gelinkt is met de `options` pagina van de extensie, hier kan je een link van een afbeelding / GIF in zetten die dan vervolgens gebruikt wordt in de hack. Dit maakt gebruik van de gegeven functie en methodes van chrome.

Het tweede bestand is `image.js` hier selecteren we alle afbeeldingen op de pagina en veranderen we de `src atribute` van alle afbeeldingen naar het ingestelde linkje.

(Je kan bij de options pagina komen door in de popup op **Options** te klikken)
![Options](https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/options.png)

Als je vervolgens op **Replace images** klikt vervangt de extensie alle afbeelding op de momenteel geopende webpagina naar de afbeelding de je van de voren hebt ingesteld of de standaard afbeelding.
![Image hack](https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/image-hack.png)

### Change Font

Deze hack veranderd het font op de momenteel geopende webpagina naar het `Oxanium (cursive)` font. Als we nog wat meer tijd hadden gehad hadden we nog een optie kunnen toevoegen dat je zelf een font kon uitkiezen.

Dit was de makkelijkste hack om te maken hoewel we er wel moeite mee hebben gehad. Het plan was om de font steeds te veranderen en dan weer terug te veranderen maar dat kregen we niet aan het werk omdat de pagina dan crashte.

<img src="https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/before.png" alt="after" width="380"/><img src="https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/after.png" alt="after" width="380"/>

### Loading bar

De loading bar is een verplaatsbare gif. Het lijkt alsof er een programma'tje openstaat die de site hackt.

<img src="https://media.giphy.com/media/oVvhEYvWDvE1G/200.gif" alt="Laadprogramma">

### Edit page

Dit is een leuke en ook heel erg handige hack. Met deze hack kan je alle text op **elke** webpagina veranderen zonder element inspecteren te gebruiken.
![Edit](https://raw.githubusercontent.com/Joehoel/haex/master/src/assets/documentation/edit.png)

Als je de hack activeert komt er een popup link bovenin waarmee je op kan klikken als je klaar bent met bewerken. Helaas gaat het wel weg als je de pagina ververst. (zulke goede hackers zijn we ook niet)

---

Jamaro Mooibroek & Joël Kuijper ©
