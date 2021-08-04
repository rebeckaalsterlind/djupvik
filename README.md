Sajten ska byggas upp med HTML-filer och 1-2 stilmallar och 1-2 JavaScript filer för väderhanteringen. 

Samtliga sidor i sajten ska valideras med grönt ljus (HTML5 och CSS).

Sajten ska driftsättas (egen server, eget webbhotell eller via konto från skolan) och adressen till den driftsatta sajten ska bifogas inlämningen.

Sajten ska fungera bra för viewport med bredd på 1024px (innehållet ska vara synligt och lättläst utan att kräva scrollning i sidled eller behöva zooma in). Design, layout, val av färger och typografi ska vara genomtänkt och passa för ämne och målgrupp.

Designspecifikation har fyllts på med information för punkt 2 och 3 inkl. motiveringen till ditt val.

Du ska redovisa muntligen din design och layout med förklaring till vad som ligger till grund för dina val.

 

Krav HTML:

Du ska ha en logisk struktur på HTML-filerna och använda dig av organisatoriska element som kommit med HTML5 (så långt det är möjligt).
Du ska använda semantiskt korrekta element och skriva dem enligt syntaxen start-tagg och sluttagg. Det hela ska vara enligt W3C-standarden: https://www.w3.org/TR/html5/ (Länkar till en externa sida.)
Du ska för bilderna se till att det finns beskrivande alt-texter.
Krav CSS:

Du har skapat en stilmall som används för alla sidor på hela sajten
Du använder en global reset eller nomalisering i din stilmall (läggs in i din stilmall eller länkas till från varje html-sida).
Sajten (design, layout) fungerar bra för viewport med bredd på 1024px
Sajten ska ha en övergripande design (färger, typografi, layout) som är genomtänkt och passar för ämne och målgrupp
Du ska skriva korrekta stilregler, göra bra val av selektorer och slå ihop dem där så är lämpligt och arbeta med arv och genvägar (shorthands).
Krav JavaScript:

Väderdata skall hämtas ifrån SMHI’s API:
På en sida skall den aktuella temperaturen för Djupviks hamn (platsen ligga på latitud: 57.3081 och longitud: 18.1489) redovisas.
Generell dokumentation:  http://opendata.smhi.se/apidocs/metfcst/index.html (Länkar till en externa sida.)
Exempel adress för att hämta väder-prognos för en specifik plats: https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json (Länkar till en externa sida.)
Exempelvis kan det stå (redovisa temperatur för närmaste timme du har data för):
I Djupvikshamn är det under nästkommande timme 24 grader varmt.

Men du har fria händer vad gäller utseende och text, bara temperaturen går att utläsa för användaren. OBS! siffran 24 i exemplet ovan behöver naturligtvis bytas ut dynamiskt mot aktuell temperatur hämtad ifrån SMHI.

Koden skall finnas i .js filer, ifall du delar upp koden i flera filer skall detta ske med hjälp av moduler (import / export). Alltså skall endast en .js script-tag skall finnas i html koden.
Krav tillgänglighet:

Du ska testa tillgängligheten enligt riktlinjerna med verktygen som kan laddas hem och via onlinetester (se anvisningar på kurssidan) och korrigera koden så att din sajt uppfyller kraven för WCAG 2.1 nivå AA.

 

Krav som ska uppfyllas för betyget Väl Godkänd


Elementet picture används med 2-3 olika bildstorlekar

Tabell och formulär byggs upp för att klara responsiviteten
Krav CSS:

CSS ska byggas upp så att sajten ser bra ut och fungerar för tre olika storlekar genom att tre (3) olika layouter skapas (mobil, surfplatta och större skärm).

Sajten ska vara responsiv så att den ser bra ut och är användbar i olika bredder mellan 320px och 2560px

Krav JavaScript:

Väderdata utökas så att användaren kan se vädret vid 3 specifika klockslag (klockan 6, 12 och 18 svensk tid ) för aktuell dag samt morgondagen.
Det som skall visas är alltså (platsen är: Latitud: 57.3081 Longitud: 18.1489):

Dagens och morgondagens väder (de är rubriker)
Klockslag (6, 12 och 18 svensk tid ( just dessa klockslag skall visas) )     
Temperatur       
Vindriktning (i exemplet ovan är detta pilen)   
Vindstyrka
Beskrivning av molnigheten
I HTML koden får det endast finnas tre element rörande din JS lösning:

Det element din lösning behöver för att visas. Exempelvis:
<div id=”smhi-widget”></div>
Script taggen för att ladda in din start JS fil.
Link taggen för att ladda in din CSS fil rörande din JS lösning. (CSS’en för väder widgeten bör alltså vara skild ifrån resterande CSS på din sajt)