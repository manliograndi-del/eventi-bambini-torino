/* Approfondimento manuale del 12 ottobre 2026: pagine, calendari, tariffari e moduli. */
const deepChecks = {
 'cipidillo': {
  description:'Un piccolo grillo parte alla ricerca di qualcosa che renda felice il mondo e incontra altri esseri diversi da lui. Due interpreti costruiscono il racconto con un filo bianco che diventa oggetti e paesaggi: un invito a immaginare insieme e a superare i giudizi sulle differenze.',
  costLabel:'Under 14: 7 € · adulti: 13 € + commissione online',
  booking:'Biglietteria online: intero 13 €, convenzioni 11 €, 14–25 anni 8 €, under 14 7 €. Prevendita indicata 0 €; commissione finale di servizio non quantificata nella schermata. Vendita online fino a 30 minuti prima dello spettacolo.',
  deepSources:[['Biglietteria e dettaglio tariffe','https://piemonteitalia.tm.bestunion.com/biglietteria/pub/buyseats/scegliSettorePub.do?idEvento=140073']],
  researchNote:'Aperta la replica del 17 ottobre e il pulsante Dettaglio: tariffe lette senza selezionare posti.'
 },
 'much-crimine': {
  description:'I bambini indagano su una scena del crimine: confrontano impronte, analizzano sostanze misteriose e mettono alla prova gli indizi. Il laboratorio usa piccoli esperimenti di chimica e scienza forense per ricostruire il caso e cercare il colpevole.',
  durationLabel:'60 minuti',costLabel:'Bambino 9 € + 0,20 € servizio · accompagnatore gratuito',costBand:'low',
  url:'https://www.mu-ch.it/evento/il-museo-del-crimine-17-ottobre-2026-much/',
  booking:'Numero chiuso, prenotazione anticipata fortemente consigliata. Paga chi svolge il laboratorio; accompagnatori esclusi dal pagamento. Il biglietto non comprende il percorso espositivo del museo.',
  deepSources:[['Biglietti laboratorio e selezione data','https://biglietteria.my-ticket.it/biglietti?store=museochimica&cat=2913']],
  researchNote:'Letti calendario MU-CH e biglietteria; aperti il 17 ottobre e il selettore orari 10:30 / 16:30. Il calendario conferma gli stessi turni il 18.'
 },
 'much-cucine': {
  description:'Uno show scientifico con un cuoco inesperto alle prese con ricette imprevedibili: gli ingredienti della cucina diventano protagonisti di reazioni chimiche ed esplosioni dimostrative. Si assiste allo spettacolo; non è il laboratorio individuale del Museo del Crimine.',
  durationLabel:'Circa 60 minuti',costLabel:'5 € per spettatore dai 5 anni · 0–4 anni gratuiti',costBand:'low',
  url:'https://www.mu-ch.it/evento/cucine-esplosive-17-ottobre-2026-much/',
  booking:'Prenotazione anticipata consigliata. Pagano anche gli adulti che assistono allo show; sotto i 12 anni occorre almeno un adulto accompagnatore. Percorso espositivo escluso. Eventuali ulteriori commissioni non determinate senza procedere all’acquisto.',
  deepSources:[['Biglietteria show scientifici','https://biglietteria.my-ticket.it/biglietti?store=museochimica&cat=2914']],
  researchNote:'Seguito PRENOTA ONLINE dalla scheda dello show; letti prezzo, durata e regole per gli accompagnatori.'
 },
 'ogr-fantasia': {
  description:'Una lettura animata online per salutare la giornata: Elisa Lombardi alterna racconto, interpretazioni e suoni, spiegando parole difficili e passaggi importanti della storia. Bambini e adulti ascoltano insieme prima della buonanotte.',
  booking:'Attività gratuita online; la pagina richiede prenotazione tramite email. Recapito specifico non recuperato dal pulsante: usare il canale indicato nella pagina OGR.',
  researchNote:'Letta la presentazione completa e controllato il richiamo alla prenotazione email; nessun modulo compilato.'
 },
 'ogr-tempo': {
  description:'Con Bricks 4 Kidz i bambini costruiscono un orologio motorizzato usando mattoncini, parti tecniche e ingranaggi. Osservano il movimento delle lancette e scoprono come si misurano secondi, minuti e ore.',
  availabilityLabel:'15:00 esaurito · 17:00 solo lista d’attesa',
  booking:'Al controllo del 12 ottobre, il modulo indica nessun posto alle 15 e lista d’attesa alle 17. Il modulo riporta Spazio Dinamo, mentre la scheda dice Aula didattica: verificare la sala nella conferma. Massimo 3 adulti e 5 minorenni per richiesta.',
  deepSources:[['Prenotazioni e disponibilità','https://prenotazioni.ogrtorino.it/eventi/Reservation/RequestReservation?eventId=191']],
  researchNote:'Aperto il modulo effettivo: il generico pulsante “prenotazioni disponibili” della scheda non corrisponde a posti liberi.'
 },
 'ogr-mondo': {
  description:'Una caccia al tesoro nell’architettura delle OGR: si cercano indizi usando il corpo, i cinque sensi e il lavoro di squadra. Arteco accompagna i bambini a immaginare e scoprire il Mondo Perduto.',
  availabilityLabel:'Esaurito, anche la lista d’attesa',
  booking:'Al controllo del 12 ottobre il modulo non accetta più iscrizioni né in lista d’attesa. Consultare il collegamento per eventuali cambiamenti.',
  deepSources:[['Stato delle prenotazioni','https://prenotazioni.ogrtorino.it/eventi/Reservation/RequestReservation?eventId=192']],
  researchNote:'Letti presentazione e modulo con avviso di esaurimento dei posti e della lista d’attesa.'
 },
 'ogr-pizza': {
  description:'Una chef pasticciona introduce il laboratorio con gag e piccoli momenti teatrali. Con cartoncini, forbici e colori ogni partecipante costruisce una pizza pop-up da portare a casa: è una creazione di carta, non un laboratorio di cucina.',
  availabilityLabel:'Posti completi · solo lista d’attesa',
  booking:'Lista d’attesa disponibile al controllo del 12 ottobre. Massimo 3 adulti e 5 minorenni per richiesta. Sede: complesso ATC, corso Farini 32; non la sede OGR.',
  deepSources:[['Richiesta lista d’attesa','https://prenotazioni.ogrtorino.it/eventi/Reservation/RequestReservation?eventId=199']],
  researchNote:'Letti descrizione completa e modulo della lista d’attesa.'
 },
 'ateliebebe': {
  description:'Su un grande tappeto i musicisti dialogano con i piccolissimi attraverso voce, ritmi, sguardi, mimica e movimento. Brani brevi senza parole invitano ciascun bambino ad ascoltare e rispondere con i propri tempi, insieme all’accompagnatore.',
  venue:'Collegio San Giuseppe · Aula Polivalente 2, Torino',
  costLabel:'10 € bambino + 1 adulto · secondo adulto 5 €',costBand:'mid',
  availabilityLabel:'Vendita dal 13 ottobre alle 10:30',
  booking:'Massimo due accompagnatori per bambino. Il secondo adulto paga 5 € in loco. Portare calze antiscivolo per bambino e adulto e abiti comodi. Non è consentito entrare a laboratorio iniziato.',
  deepSources:[['Sede indicata dall’organizzatore','https://unionemusicale.it/sala/collegio-san-giuseppe-aula-polivalente-2/']],
  researchNote:'Aperto il popup “Scopri tutte le tariffe”. Corretta la precedente sede Teatro Vittoria. Vendita non ancora iniziata alla data del controllo.'
 },
 'rosaluna': {
  description:'Rosaluna vive in un paese dove è vietato distinguersi, ma comincia a cantare. La sua voce richiama i lupi e la conduce fuori dal mondo conosciuto. Attori, maschere, un pupazzo e musiche originali raccontano coraggio, paura e libertà di essere sé stessi.',
  durationLabel:'50 minuti',costLabel:'8 € a persona + diritti di prevendita',costBand:'low',
  booking:'Tariffa della rassegna Domeniche a teatro in famiglia: 8 € + diritti di prevendita. Sotto i 3 anni ingresso gratuito se si condivide il posto dell’adulto. Importo dei diritti non recuperato: la biglietteria Vivaticket non ha caricato il contenuto utilizzabile.',
  priceSource:'https://www.suoneriasettimo.it/biglietteria/',
  deepSources:[['Presentazione e due repliche','https://www.suoneriasettimo.it/date/rosaluna-e-i-lupi/'],['Biglietteria collegata dall’organizzatore','https://www.vivaticket.com/it/ticket/rosaluna-e-i-lupi-accademia-perduta-romagna-teatri/315757']],
  researchNote:'Letti sito del teatro, durata e tariffario della rassegna; Vivaticket restituisce solo la schermata VIVABOT.'
 },
 'ruolando': {
  description:'Una sessione singola di Call of Cthulhu, gioco di ruolo ispirato all’orrore cosmico di Lovecraft. Si può partecipare anche senza esperienza: il requisito è la voglia di avventura. La biblioteca la rivolge a ragazzi, giovani e adulti, non ai bambini piccoli.',
  booking:'Prenotazione entro il 13 ottobre, fino a esaurimento posti: 01101139780 oppure puntobibliotecario.negarville@comune.torino.it. Età minima numerica non dichiarata.',
  researchNote:'Letta la pagina completa: il secondo appuntamento del 31 ottobre riguarda Mothership ed è fuori dalla settimana del catalogo.'
 },
 'toro-picasso': {
  description:'Laboratorio artistico con Suzanne Piana dedicato a osservare, scoprire e rielaborare, prendendo spunto dal toro di Picasso. Fa parte dei Sabati Giocondi, attività creative per sperimentare insieme alla Casa del Quartiere Barrito.',
  ageMinMonths:36,ageMaxMonths:84,ageLabel:'Circa 3–7 anni',durationLabel:'90 minuti · 16:30–18:00',costLabel:'Gratuito',costBand:'free',
  availabilityLabel:'Prenotazioni non ancora aperte al controllo',
  booking:'Prenotazione obbligatoria su Eventbrite, soltanto per i piccoli partecipanti. Il profilo ufficiale dell’organizzatore indica gratuito e non ancora in vendita al controllo del 12 ottobre.',
  deepSources:[['Scheda Eventbrite del laboratorio','https://www.eventbrite.it/e/i-sabati-giocondi-toro-alla-picasso-tickets-2003282868988']],
  researchNote:'Seguito il link dal Barrito al profilo Eventbrite e aperta la scheda del singolo laboratorio: confermati età, durata e modalità.'
 },
 'lingotto-nuvole': {
  description:'Si osservano i cieli e i canali veneziani dipinti da Canaletto e si cercano montagne e nuvole dalla Pista 500. Letture ed esplorazioni multisensoriali trasformano gli elementi del paesaggio in giochi per i piccolissimi e i loro accompagnatori.',
  durationLabel:'60 minuti',booking:'5 € a bambino più ingresso ridotto dell’adulto, il cui importo non è specificato nella scheda. Prenotazione tramite modulo, valida con conferma email. Il collegamento generale alla vendita museale segnala vendita online sospesa e acquisto al museo; non significa annullamento del laboratorio.',
  deepSources:[['Modulo di prenotazione','https://docs.google.com/forms/d/e/1FAIpQLSccDaqT0f4wYmE2eyxtCkigD_WjgsLD7_sD1GUQHCvwyLKDrA/viewform']],
  researchNote:'Letta descrizione completa. Biglietteria generale consultata: vendita online sospesa; tariffa adulto non recuperata.'
 },
 'luogo-luogo': {
  description:'Un viaggio tra la Venezia di Canaletto e la Dresda di Bellotto, osservando le opere e raccontando luoghi e storie. Il Family Tour alterna esplorazione del museo, dialogo e attività interattive negli spazi espositivi.',
  durationLabel:'90 minuti',booking:'5 € a bambino più ingresso ridotto dell’adulto, di importo non specificato nella scheda. Compilare il modulo e attendere conferma. Il modulo, aperto per controllo, richiede accesso Google; non è stato compilato.',
  deepSources:[['Modulo di prenotazione','https://docs.google.com/forms/d/e/1FAIpQLSex3iXw6Mytr1r5Ud2hZznW-OHU-zNvYgSD1-AfVu_EZ37UKw/viewform']],
  researchNote:'Letto il Family Tour completo e seguito il modulo. Biglietteria generale con avviso di vendita online sospesa; l’iscrizione al laboratorio resta un percorso distinto.'
 },
 'mao-india': {
  booking:'Data e titolo confermati. Orario, prezzo e descrizione estesa ancora da chiedere al museo: 0114436932. La pagina non ha caricato il corpo dell’evento anche dopo la gestione dei cookie; l’immagine allegata è una fotografia senza testo informativo.',
  researchNote:'Aperti pagina evento, immagine originale e menu Servizi Educativi. Nessun prezzo o dettaglio ulteriore recuperabile; non trasferiti automaticamente quelli degli aggregatori.',
  researchStatus:'dettagli_parziali'
 },
 'disney-mauto': {
  description:'Un artista Disney mostra come nasce un personaggio e invita grandi e piccoli a provarci con matite e colori. Workshop gratuito in collaborazione con Giunti Editore, dalle 10:30 alle 12:30 nella Piazza del MAUTO.',
  durationLabel:'Finestra attività: 2 ore',booking:'La scheda non indica una prenotazione specifica né un’età minima numerica. Il workshop è gratuito; non è dichiarato che includa la visita al museo.',
  researchNote:'Letta la pagina completa: nessun collegamento a una prenotazione specifica del workshop.'
 },
 'miradolo-spazio': {
  description:'Nella mostra di Grazia Toderi i bambini scoprono come una sequenza di disegni può creare movimento. Un laboratorio sui principi dell’animazione che prende spunto dalle opere e dagli spazi del Castello di Miradolo.',
  costLabel:'Online bambino: 5 € + 1 € · ingresso adulto a parte',
  booking:'La scheda dichiara laboratorio 5 € e attività adulto inclusa nel suo ingresso. Clappit, selezionato il 18 ottobre, mostra Junior Web 5 € + 1 € e Intero Adulto Web 16,28 € + 1,19 €. Tariffa ordinaria in sede adulto 15 €, con riduzioni e gratuità. Occorre includere anche i biglietti d’ingresso necessari, compreso l’omaggio bambino 0–11 anni. Per dubbi: 0121502761.',
  priceSource:'https://www.fondazionecosso.com/contatti/orari-e-costi/',
  deepSources:[['Calendario Clappit: selezionare 18 ottobre','https://www.clappit.com/biglietti-fondazione-cosso/homePage.html']],
  researchNote:'Aperti tariffario e calendario Clappit, selezionato il giorno 18: lette tutte le componenti di prezzo senza aggiungere al carrello.'
 },
 'gisella': {
  researchNote:'Riaperto il calendario e ricaricata la pagina: in questa sessione mostra mese ed età ma non carica gli appuntamenti. Restano i dati già letti nel precedente controllo del giorno 13; nessuna nuova descrizione dettagliata attribuita all’originale.',
  researchStatus:'dettagli_parziali'
 },
 'helix-esploratori': {
  description:'La missione L’arte della ricerca insegna a osservare il bosco per settori e a riconoscere tracce, impronte e specie arboree. I giovani esploratori cercano indizi per capire chi abita l’ambiente e imparano a seguire le tracce con attenzione.',
  durationLabel:'2 ore e mezza',booking:'Sono ammesse anche singole giornate, ma il prezzo di quella del 18 ottobre non è indicato. Abbonamento all’intero percorso: 100 €, utilizzabile in due anni. Posti limitati; contatti: 3792473813, nelboscoconhelix@gmail.com.',
  researchNote:'Letto direttamente il programma delle missioni. Non esteso al 18 ottobre il prezzo di 25 € indicato soltanto per alcune uscite di settembre.'
 },
 'san-giorgio': {
  description:'Un solo attore racconta la leggenda da tre punti di vista: Giorgio, la Principessa e il Drago. Maschere della Commedia dell’Arte, burattini e comicità ribaltano la storia conosciuta; il pubblico decide a quale versione credere.',
  durationLabel:'50–60 minuti',booking:'Prenotazioni via email segreteria.casabit@gmail.com o WhatsApp 3284640092. 8 € a persona, soci 7 €, sotto i 3 anni gratuito. È previsto uno sconto famiglia da 4 persone, ma l’importo non è pubblicato.',
  researchNote:'Letti direttamente programma, due repliche e condizioni; la prenotazione avviene tramite contatto, non tramite una biglietteria online.'
 },
 'mrsn-visite': {
  description:'Una guida accompagna il pubblico nelle sale espositive, attraverso il Museo Storico di Zoologia, l’Arca e la Sala delle Meraviglie. La visita dura un’ora ed è rivolta al pubblico generico, senza età minima indicata.',
  durationLabel:'60 minuti',costLabel:'Guida 5 € + ingresso: intero 5 €, ridotto 3 €',
  booking:'Prenotazione obbligatoria dal modulo, fino a esaurimento posti. La visita guidata costa 5 € a persona, oltre all’ingresso. FAQ: ridotto 3 € dai 10 ai 18 anni; gratuito 0–10 anni e titolari delle agevolazioni elencate. La sovrapposizione al compimento dei 10 anni va chiarita in biglietteria. Le gratuità d’ingresso non implicano gratuità della guida.',
  priceSource:'https://mrsntorino.it/it/info-utili/',
  deepSources:[['Modulo indicato per la visita','https://forms.gle/SDXhbUcUp8Rf1oHv6']],
  researchNote:'Letti evento e FAQ, espandendo il costo del biglietto; separate tariffa guida e tariffa ingresso.'
 },
 'ogr-faro': {
  description:'Gianduja sale in scena in uno spettacolo di burattini della Fondazione Marionette Grilli, sulla terrazza dell’Hospice FARO affacciata su Torino. Durante l’evento è offerta cioccolata calda ai partecipanti.',
  availabilityLabel:'Posti completi · solo lista d’attesa',
  booking:'Al controllo del 12 ottobre il modulo accetta richieste di lista d’attesa. Attività gratuita. Sede Hospice FARO, via San Vito Revigliasco 34; non la sede OGR.',
  deepSources:[['Lista d’attesa FARO','https://prenotazioni.ogrtorino.it/eventi/Reservation/RequestReservation?eventId=198']],
  researchNote:'Aperti scheda completa e modulo: posti al completo, lista d’attesa disponibile.'
 },
 'aperi-cielo': {
  description:'Breve camminata da Ponte Verde a Cascina Prato Pascolo cercando gli uccelli in volo, seguita da un’introduzione alle migrazioni e da un’apericena alla Locanda della Mandria. Consigliati binocolo personale e scarpe comode.',
  url:'https://www.parchireali.it/events/le-grandi-migrazioni-apericena/',costLabel:'Apericena 15 € a persona',costBand:'mid',
  venue:'Ritrovo Ingresso Ponte Verde, ore 18:45 · Parco La Mandria',
  booking:'Prenotazione obbligatoria, massimo 30 posti: info@parcomandria.it, 0114320977. Apericena con stuzzichini, caffè e una bevanda. Segnalare allergie o intolleranze alla prenotazione. Uscita finale soltanto da Ponte Verde con accompagnamento. Nessuna tariffa bambini o età minima pubblicata; cani non ammessi.',
  researchNote:'Dal calendario aperta la scheda completa: recuperati prezzo, punto di ritrovo e modalità di uscita dal parco.'
 },
 'mandria-express': {
  description:'Un giro notturno in trenino nel Parco La Mandria dopo la chiusura al pubblico. Una guida naturalistica racconta la storia del parco, la vegetazione e i grandi alberi lungo il percorso.',
  durationLabel:'2 ore',booking:'25 € a persona; nessuna diversa tariffa bambini indicata. Prenotazione obbligatoria: 0114320977, info@parcomandria.it (punto informativo chiuso il lunedì). Ritrovo Cascina Brero, via Scodeggio 197/A. Abiti comodi e caldi adatti alla sera.',
  researchNote:'Aperta la scheda originale completa: confermati ritrovo, durata, costo e vestiario.'
 },
 'pugnetto': {
  description:'Visita guidata alle cavità naturali di Pugnetto, gestite dal Gruppo Speleologico Explora del CAI di Lanzo. La Borna Maggiore si sviluppa nei calcescisti e ospita fauna tutelata: l’accesso avviene con accompagnamento.',
  url:'https://www.parchireali.it/events/visite-alle-grotte-di-pugnetto-15/',
  booking:'Prenotare con il Gruppo Speleologico Explora al 3663189933, preferibilmente WhatsApp. Orario, prezzo e attrezzatura per il 18 ottobre non indicati nelle pagine originali lette. Turismo Torino, nella scheda 2026, indica minimo 8 anni e adulto per 8–16: requisito da confermare al gestore.',
  deepSources:[['Gestore CAI Lanzo','https://www.cailanzo.it/index.php/le-commissioni/speleologica/grotte-di-pugnetto'],['Informazione integrativa Turismo Torino 2026','https://turismotorino.org/it/visita/eventi/visite-alle-grotte-di-pugnetto-2026']],
  researchNote:'Seguita la catena calendario Parchi Reali → scheda specifica → Comune di Mezzenile → gestore CAI. “00:00” non assunto come orario reale.',researchStatus:'dettagli_parziali'
 },
 'odrigh': {
  description:'Valeria De Cubellis racconta le storie del drago Odrigh usando tecniche narrative diverse e coinvolge i bambini in una piccola rappresentazione scenica. Un incontro per ascoltare, immaginare e scoprire come si costruisce una storia.',
  ageMinMonths:36,ageMaxMonths:72,ageLabel:'3–6 anni',costLabel:'Gratuito',costBand:'free',
  venue:'Biblioteca Arduino · Piccolo Anfiteatro Millecolori, via Cavour 31, Moncalieri',
  booking:'Informazioni e prenotazioni: 0116401600. Consigliate calze antiscivolo. Orario annunciato 17:30–19.',
  researchNote:'Letta integralmente la comunicazione comunale: recuperati fascia d’età, gratuità, spazio esatto e indicazioni pratiche.'
 }
};
for(const e of DATA.verifiedEvents){
 const detail=deepChecks[e.id];if(!detail)throw new Error('Approfondimento mancante: '+e.id);
 Object.assign(e,detail,{deepCheckedAt:'2026-10-12'});
 if(!['mao-india','gisella'].includes(e.id))e.verificationMethod='Pagina originale letta direttamente; approfondimento del 12 ottobre 2026: '+detail.researchNote;
 e.relatedSources=[...(e.relatedSources||[]),...(detail.deepSources||[]).map(([label,url])=>({label,url}))];
}
