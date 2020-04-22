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

#### 1. Replace images

Dit was de eerste en ook meteen ingewikkeldste hack die we hebben gemaakt.

---

Jamaro Mooibroek & Joël Kuijper ©
