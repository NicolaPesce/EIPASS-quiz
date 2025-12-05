import { Question } from './types';
export const QUESTION_DATABASE: Question[] = [
  {
    id: 1,
    question: "A che tipo di file si riferisce l’estensione .avi?",
    correctAnswer: "A un file video",
    wrongAnswers: ["A un file audio", "A un file di testo", "A un file immagine"],
    hint: "È un formato contenitore multimediale introdotto da Microsoft, spesso associato ai filmati.",
    explanation: "L'estensione .avi (Audio Video Interleave) è un formato standard per i file video su sistemi Windows."
  },
  {
    id: 2,
    question: "A che tipo di file si riferisce l’estensione .exe?",
    correctAnswer: "A un file eseguibile, con cui installare un’applicazione sul computer",
    wrongAnswers: ["A un file di sistema protetto", "A un documento di Excel", "A un archivio compresso"],
    hint: "Quando fai doppio clic su questo file, si avvia un programma o un'installazione.",
    explanation: "L'estensione .exe sta per 'executable' (eseguibile) ed è il formato standard per i programmi su Windows."
  },
  {
    id: 3,
    question: "A cosa serve il comando Annulla?",
    correctAnswer: "Ad annullare le operazioni compiute precedentemente",
    wrongAnswers: ["A cancellare il file definitivamente", "A chiudere il programma", "A spegnere il computer"],
    hint: "È il comando associato alla scorciatoia Ctrl+Z.",
    explanation: "Il comando Annulla permette di tornare indietro di un passo, revocando l'ultima azione eseguita."
  },
  {
    id: 4,
    question: "A quale categoria appartengono gli organigrammi?",
    correctAnswer: "Elementi grafici SmartArt",
    wrongAnswers: ["Grafici a torta", "Immagini clip-art", "Forme geometriche semplici"],
    hint: "In Office, sono schemi grafici complessi usati per rappresentare gerarchie o processi.",
    explanation: "Gli organigrammi sono rappresentazioni visuali delle gerarchie e fanno parte della raccolta SmartArt di Office."
  },
  {
    id: 5,
    question: "Ai sensi di quanto disposto dal GDPR, il dato personale è:",
    correctAnswer: "una qualsiasi informazione che riguarda una persona fisica",
    wrongAnswers: ["solo il codice fiscale", "qualsiasi dato aziendale", "un dato cifrato in un database"],
    hint: "La legge protegge le persone 'identificate o identificabili'.",
    explanation: "Il GDPR definisce dato personale qualsiasi informazione che permetta l'identificazione, diretta o indiretta, di una persona fisica."
  },
  {
    id: 6,
    question: "Che cos’è il Cloud Storage?",
    correctAnswer: "Un servizio che permette di archiviare e condividere file con altre persone",
    wrongAnswers: ["Un tipo di memoria RAM veloce", "Un antivirus online", "Un programma per meteo"],
    hint: "Pensalo come un disco rigido che si trova su Internet (es. Google Drive, OneDrive).",
    explanation: "Il Cloud Storage è un modello di conservazione dati in cui i dati digitali sono salvati in pool logici su server remoti."
  },
  {
    id: 7,
    question: "Che cos’è il Phishing?",
    correctAnswer: "La tecnica fraudolenta che si basa sull’invio di email ingannevoli",
    wrongAnswers: ["Un virus che cancella i dati", "Un software per la pesca digitale", "Un errore del sistema operativo"],
    hint: "Il termine deriva dall'inglese 'fishing' (pescare), perché si cerca di far abboccare la vittima.",
    explanation: "Il phishing utilizza email contraffatte che sembrano provenire da enti legittimi per rubare dati sensibili come password."
  },
  {
    id: 8,
    question: "Che cos’è un Ransomware?",
    correctAnswer: "Un malware che blocca i dispositivi e chiede un riscatto",
    wrongAnswers: ["Un software gratuito", "Un firewall di rete", "Un aggiornamento di Windows"],
    hint: "La parola contiene 'Ransom', che in inglese significa riscatto.",
    explanation: "Il ransomware cifra i dati dell'utente e richiede un pagamento (riscatto) per fornire la chiave di decifrazione."
  },
  {
    id: 9,
    question: "Cos’è la CPU?",
    correctAnswer: "Il processore, l'unità centrale di elaborazione",
    wrongAnswers: ["La scheda video", "L'unità di memoria di massa", "La scheda madre"],
    hint: "È considerata il 'cervello' del computer.",
    explanation: "CPU sta per Central Processing Unit. È il componente che esegue le istruzioni dei programmi."
  },
  {
    id: 10,
    question: "In Excel, qual è il simbolo per le divisioni?",
    correctAnswer: "/",
    wrongAnswers: [":", "÷", "\\"],
    hint: "Non è il simbolo usato in matematica classica (i due punti), ma la barra obliqua.",
    explanation: "In informatica e in Excel, l'operatore aritmetico per la divisione è lo slash (/). "
  },
  {
    id: 11,
    question: "Cosa indica il protocollo HTTPS?",
    correctAnswer: "È il modo più sicuro per crittografare i dati durante la navigazione",
    wrongAnswers: ["È un protocollo per il trasferimento di file", "Indica un sito non sicuro", "È la velocità di connessione"],
    hint: "La 'S' finale sta per Secure.",
    explanation: "HTTPS (HyperText Transfer Protocol Secure) cripta la comunicazione tra browser e sito web, proteggendo i dati."
  },
  {
    id: 12,
    question: "Cosa sono le 'Fake News'?",
    correctAnswer: "Articoli contenenti informazioni inventate, ingannevoli o distorte",
    wrongAnswers: ["Notizie vecchie ma vere", "Errori di stampa nei giornali", "Notizie confermate da fonti ufficiali"],
    hint: "Tradotto letteralmente significa 'notizie false'.",
    explanation: "Le Fake News sono create deliberatamente per disinformare o ingannare il lettore, spesso per scopi politici o di lucro."
  },
  {
    id: 13,
    question: "Quale combinazione di tasti permette di copiare?",
    correctAnswer: "Ctrl + C",
    wrongAnswers: ["Ctrl + V", "Ctrl + X", "Ctrl + P"],
    hint: "Pensa all'iniziale della parola 'Copy'.",
    explanation: "Ctrl + C è la scorciatoia universale per copiare il contenuto selezionato negli appunti."
  },
  {
    id: 14,
    question: "Quale combinazione di tasti permette di incollare?",
    correctAnswer: "Ctrl + V",
    wrongAnswers: ["Ctrl + C", "Ctrl + Z", "Alt + F4"],
    hint: "È il tasto vicino alla C sulla tastiera, ricorda la forma di un inserto.",
    explanation: "Ctrl + V è la scorciatoia universale per incollare il contenuto presente negli appunti."
  },
  {
    id: 15,
    question: "Cosa si intende per 'Open Source'?",
    correctAnswer: "Software il cui codice sorgente è liberamente utilizzabile e modificabile",
    wrongAnswers: ["Software a pagamento", "Software che richiede una chiave hardware", "Software protetto da copyright chiuso"],
    hint: "Significa 'Sorgente Aperta'.",
    explanation: "L'Open Source permette a chiunque di studiare, modificare e ridistribuire il codice del software (es. Linux)."
  },
  {
    id: 16,
    question: "In Windows 11, cosa fa la combinazione Alt + Tab?",
    correctAnswer: "Permette di passare da una finestra aperta all'altra",
    wrongAnswers: ["Chiude tutte le finestre", "Apre il menu Start", "Spegne il computer"],
    hint: "È utile per lavorare in multitasking e cambiare rapidamente applicazione.",
    explanation: "Alt + Tab apre il commutatore di attività, permettendo di selezionare rapidamente un'altra finestra attiva."
  },
  {
    id: 17,
    question: "Cos'è un Browser?",
    correctAnswer: "Un'applicazione per navigare in Internet",
    wrongAnswers: ["Un motore di ricerca", "Un server web", "Un cavo di rete"],
    hint: "Chrome, Edge e Firefox sono esempi di questo tipo di software.",
    explanation: "Il browser (navigatore) è il software che interpreta il codice HTML delle pagine web e le mostra all'utente."
  },
  {
    id: 18,
    question: "A cosa serve la RAM?",
    correctAnswer: "A memorizzare temporaneamente i dati da elaborare",
    wrongAnswers: ["A archiviare i dati in modo permanente", "A raffreddare il computer", "A collegarsi a internet"],
    hint: "È una memoria 'volatile': si svuota quando spegni il PC.",
    explanation: "La RAM (Random Access Memory) serve alla CPU per accedere velocemente ai dati dei programmi in esecuzione."
  },
  {
    id: 19,
    question: "Che cos'è l'autenticazione a due fattori?",
    correctAnswer: "Un metodo che richiede due prove di identità (es. password + codice SMS)",
    wrongAnswers: ["Inserire la password due volte", "Avere due account diversi", "Usare due computer contemporaneamente"],
    hint: "Spesso richiede qualcosa che 'sai' (password) e qualcosa che 'hai' (telefono).",
    explanation: "L'autenticazione a due fattori (2FA) aumenta la sicurezza richiedendo un secondo passaggio di verifica oltre alla password."
  },
  {
    id: 20,
    question: "Cos'è una VPN?",
    correctAnswer: "Una rete privata virtuale che crea un tunnel sicuro su Internet",
    wrongAnswers: ["Un programma per vedere video", "Un tipo di virus", "Un social network"],
    hint: "Virtual Private Network.",
    explanation: "La VPN cifra la connessione internet, proteggendo la privacy e permettendo di accedere alla rete come se ci si trovasse altrove."
  },
  {
    id: 21,
    question: "In Excel, cosa succede se una cella mostra '####'?",
    correctAnswer: "La colonna non è abbastanza larga per mostrare il contenuto",
    wrongAnswers: ["C'è un errore nella formula", "Il file è corrotto", "La cella è bloccata"],
    hint: "Succede spesso con le date o numeri grandi. Prova ad allargare la colonna.",
    explanation: "Excel mostra i cancelletti quando il numero o la data non entrano nella larghezza della cella. Basta allargare la colonna per risolvere."
  },
  {
    id: 22,
    question: "Qual è l'estensione tipica dei file di Word?",
    correctAnswer: ".docx",
    wrongAnswers: [".xlsx", ".pptx", ".txt"],
    hint: "Word crea documenti.",
    explanation: ".docx è il formato standard per i documenti Microsoft Word (dalla versione 2007 in poi)."
  },
  {
    id: 23,
    question: "Cosa indica il termine 'Multitasking'?",
    correctAnswer: "La capacità di eseguire più applicazioni contemporaneamente",
    wrongAnswers: ["Un computer con più tastiere", "Un sistema lento", "La capacità di connettersi a più reti Wi-Fi"],
    hint: "Fare più compiti (task) nello stesso momento.",
    explanation: "I sistemi operativi moderni sono multitasking perché permettono all'utente di tenere aperti e usare più programmi insieme."
  },
  {
    id: 24,
    question: "Quale dispositivo è sia di Input che di Output?",
    correctAnswer: "Schermo Touchscreen",
    wrongAnswers: ["Mouse", "Stampante", "Altoparlanti"],
    hint: "Puoi sia vedere le informazioni che inviare comandi toccandolo.",
    explanation: "Il Touchscreen mostra l'output (video) e riceve l'input (tocco), quindi è una periferica di I/O."
  },
  {
    id: 25,
    question: "Cosa significa 'Backup'?",
    correctAnswer: "Creare una copia di sicurezza dei dati",
    wrongAnswers: ["Tornare indietro nel browser", "Formattare il computer", "Aggiornare il software"],
    hint: "Serve per non perdere i file se il computer si rompe.",
    explanation: "Il backup è la procedura di copia dei dati su un supporto esterno o cloud per prevenire la perdita definitiva."
  },
  {
    id: 26,
    question: "In PowerPoint, cos'è una transizione?",
    correctAnswer: "L'effetto visivo nel passaggio da una diapositiva all'altra",
    wrongAnswers: ["Il movimento di un oggetto nella diapositiva", "Il suono di sottofondo", "Il layout della pagina"],
    hint: "Avviene 'tra' due slide, non dentro la slide.",
    explanation: "Le transizioni gestiscono come una diapositiva scompare per lasciare posto alla successiva."
  },
  {
    id: 27,
    question: "Cosa serve per collegarsi a una rete Wi-Fi protetta?",
    correctAnswer: "La password di accesso (chiave di sicurezza)",
    wrongAnswers: ["Il codice fiscale", "L'indirizzo IP", "Un cavo Ethernet"],
    hint: "Viene richiesta quando selezioni la rete con il lucchetto.",
    explanation: "Le reti Wi-Fi protette (WPA2/WPA3) richiedono una chiave di sicurezza per criptare il traffico e autorizzare l'accesso."
  },
  {
    id: 28,
    question: "Qual è la funzione del Cestino?",
    correctAnswer: "Conservare temporaneamente i file eliminati prima della cancellazione definitiva",
    wrongAnswers: ["Eliminare i virus", "Pulire lo schermo", "Organizzare le email"],
    hint: "Ti dà una seconda possibilità se hai cancellato qualcosa per errore.",
    explanation: "Il Cestino è una cartella speciale dove i file restano recuperabili finché non viene svuotato."
  },
  {
    id: 29,
    question: "Che cos'è un URL?",
    correctAnswer: "L'indirizzo web univoco di una risorsa su Internet",
    wrongAnswers: ["Un codice di errore", "Un tipo di file video", "Un comando di Excel"],
    hint: "È quello che scrivi nella barra in alto del browser (es. www.google.it).",
    explanation: "URL sta per Uniform Resource Locator ed è l'indirizzo specifico che localizza una risorsa (pagina, immagine) sul web."
  },
  {
    id: 30,
    question: "Cosa significa SSD?",
    correctAnswer: "Solid State Drive (Unità a stato solido)",
    wrongAnswers: ["Super Speed Data", "System Security Disk", "Screen Saver Display"],
    hint: "È il successore veloce del vecchio Hard Disk meccanico.",
    explanation: "Gli SSD sono memorie di massa veloci che usano chip di memoria flash invece di dischi magnetici rotanti."
  },
  {
    id: 31,
    question: "A che tipo di file si riferisce l’estensione .jpg?",
    correctAnswer: "A un file immagine",
    wrongAnswers: ["A un file video", "A un file eseguibile", "A un documento di testo"],
    hint: "È il formato più comune per le fotografie digitali.",
    explanation: ".jpg (o .jpeg) è uno standard di compressione per immagini fotografiche."
  },
  {
    id: 32,
    question: "A che tipo di file si riferisce l’estensione .zip?",
    correctAnswer: "A un file compresso",
    wrongAnswers: ["A un file di sistema", "A un'immagine vettoriale", "A un file audio"],
    hint: "Viene usato per ridurre le dimensioni dei file o raggrupparli.",
    explanation: ".zip è un formato di archivio che supporta la compressione dei dati senza perdita di informazioni."
  },
  {
    id: 33,
    question: "A cosa ci si riferisce quando viene indicata la dimensione di uno schermo?",
    correctAnswer: "Alla lunghezza della sua diagonale",
    wrongAnswers: ["Alla larghezza della base", "All'altezza dello schermo", "All'area totale dello schermo"],
    hint: "Si misura solitamente in pollici, da un angolo a quello opposto.",
    explanation: "La dimensione dei monitor e delle TV si misura calcolando la distanza tra due angoli opposti (la diagonale)."
  },
  {
    id: 34,
    question: "A cosa serve il comando Sostituisci?",
    correctAnswer: "A trovare una parola nel documento per sostituirla automaticamente con un’altra",
    wrongAnswers: ["A cancellare tutto il testo", "A cambiare il colore del testo", "A copiare il testo in un altro file"],
    hint: "Utile se hai scritto un nome sbagliato 100 volte e vuoi correggerlo ovunque in un colpo solo.",
    explanation: "Il comando Sostituisci automatizza la correzione del testo cercando una stringa specifica e cambiandola con un'altra."
  },
  {
    id: 35,
    question: "A cosa serve il corsivo?",
    correctAnswer: "A evidenziare parole straniere, citazioni, ecc",
    wrongAnswers: ["A rendere il testo più scuro", "A sottolineare il testo", "A cancellare il testo"],
    hint: "Il testo appare inclinato verso destra.",
    explanation: "Il corsivo (Italic) è uno stile di formattazione usato convenzionalmente per titoli, termini stranieri o enfasi leggera."
  },
  {
    id: 36,
    question: "A cosa serve il grassetto?",
    correctAnswer: "A dare maggiore visibilità ed enfasi ad una parola o parte di una frase",
    wrongAnswers: ["A inclinare il testo", "A rendere il testo trasparente", "A ridurre la dimensione del testo"],
    hint: "Rende i caratteri più spessi e scuri.",
    explanation: "Il grassetto (Bold) aumenta lo spessore del tratto del carattere per attirare l'attenzione del lettore."
  },
  {
    id: 37,
    question: "A cosa serve la porta HDMI?",
    correctAnswer: "A trasferire segnali audio e video ad alta definizione",
    wrongAnswers: ["A collegare il mouse", "A collegare la stampante", "A ricaricare la batteria velocemente"],
    hint: "È il cavo standard per collegare PC a TV o proiettori moderni.",
    explanation: "HDMI (High-Definition Multimedia Interface) trasmette dati video non compressi e dati audio digitale compressi o non compressi."
  },
  {
    id: 38,
    question: "A cosa serve la raccolta “Preferiti” di un browser?",
    correctAnswer: "Memorizzare gli indirizzi web di nostro interesse",
    wrongAnswers: ["Cancellare la cronologia", "Salvare le password", "Scaricare file automaticamente"],
    hint: "Ti evita di dover digitare l'indirizzo di un sito che visiti spesso.",
    explanation: "I Preferiti (o Segnalibri) salvano l'URL di una pagina web per permettere un accesso rapido in futuro."
  },
  {
    id: 39,
    question: "A cosa serve la “quarantena” degli antivirus?",
    correctAnswer: "Ad isolare i file infetti in una cartella separata dal resto del sistema",
    wrongAnswers: ["A cancellare immediatamente i file", "A riparare i file danneggiati", "A inviare i file alla polizia"],
    hint: "Come in medicina, si isola il 'malato' perché non contagi gli altri.",
    explanation: "La quarantena blocca l'accesso al file infetto, impedendo che il virus si esegua o si propaghi, in attesa di decisione dell'utente."
  },
  {
    id: 40,
    question: "A cosa serve lo zoom?",
    correctAnswer: "A ingrandire o rimpicciolire le dimensioni con cui visualizzare sullo schermo i fogli di lavoro",
    wrongAnswers: ["A modificare la risoluzione di stampa", "A cambiare la grandezza del carattere stampato", "A ruotare lo schermo"],
    hint: "Modifica solo la visualizzazione a video, non la stampa.",
    explanation: "Lo zoom permette di vedere i dettagli o una panoramica del documento senza modificare le dimensioni reali del file o della stampa."
  },
  {
    id: 41,
    question: "A cosa servono le applicazioni come Winzip e Winrar?",
    correctAnswer: "A comprimere file e cartelle in modo che occupino meno spazio",
    wrongAnswers: ["A proteggere il computer dai virus", "A navigare su internet", "A modificare le foto"],
    hint: "Creano archivi .zip o .rar.",
    explanation: "Questi software utilizzano algoritmi per ridurre la dimensione dei dati, facilitando l'archiviazione o l'invio via email."
  },
  {
    id: 42,
    question: "A quale tipo di stampante si riferisce il termine “inkjet”?",
    correctAnswer: "A una stampante a getto di inchiostro",
    wrongAnswers: ["A una stampante laser", "A una stampante 3D", "A una stampante ad aghi"],
    hint: "'Ink' significa inchiostro e 'Jet' getto.",
    explanation: "Le stampanti inkjet spruzzano microscopiche gocce d'inchiostro sulla carta."
  },
  {
    id: 43,
    question: "All’interno della tabella, quale combinazione ti permette di tornare nella cella precedente?",
    correctAnswer: "Maiusc + Tab",
    wrongAnswers: ["Ctrl + Tab", "Alt + Tab", "Invio"],
    hint: "Tab va avanti, aggiungendo Maiusc si inverte la direzione.",
    explanation: "Mentre il tasto Tab sposta il cursore alla cella successiva, la combinazione Maiusc + Tab lo sposta a quella precedente."
  },
  {
    id: 44,
    question: "All’interno di una funzione, dove va inserito il punto e virgola (;)?",
    correctAnswer: "Tra un argomento e l’altro",
    wrongAnswers: ["Alla fine della funzione", "All'inizio della funzione", "Dopo il nome della funzione"],
    hint: "Serve a separare i diversi pezzi di dati che la funzione deve elaborare.",
    explanation: "In Excel (versione italiana), il punto e virgola è il separatore standard per distinguere gli argomenti all'interno di una funzione."
  },
  {
    id: 45,
    question: "Android e Chrome sono entrambi di proprietà dell’azienda:",
    correctAnswer: "Google",
    wrongAnswers: ["Microsoft", "Apple", "Samsung"],
    hint: "L'azienda del motore di ricerca più famoso.",
    explanation: "Google sviluppa sia il sistema operativo mobile Android che il browser Chrome."
  },
  {
    id: 46,
    question: "CCleaner è:",
    correctAnswer: "un software con cui possiamo cancellare dal nostro computer tutti i file che non sono più utili",
    wrongAnswers: ["un antivirus", "un programma di grafica", "un sistema operativo"],
    hint: "Il nome suggerisce 'pulizia' (cleaner).",
    explanation: "CCleaner è una utility per la pulizia del sistema che rimuove file temporanei, cookie e chiavi di registro non valide."
  },
  {
    id: 47,
    question: "Che cosa accade quando i testi superano la larghezza delle celle Excel?",
    correctAnswer: "I caratteri eccedenti vengono riportati al di sopra della cella subito a destra (se vuota)",
    wrongAnswers: ["Il testo viene cancellato", "La cella si allarga automaticamente sempre", "Excel dà un errore"],
    hint: "Il testo 'sborda' visivamente, ma è contenuto tutto nella prima cella.",
    explanation: "Se la cella adiacente è vuota, Excel visualizza il testo che sborda. Se la cella adiacente è piena, il testo appare troncato."
  },
  {
    id: 48,
    question: "Che cosa devi fare per eliminare un’intera frase da una diapositiva?",
    correctAnswer: "Selezionare il testo da eliminare, dopodiché premere il tasto Canc",
    wrongAnswers: ["Premere Invio", "Fare clic con il tasto destro e scegliere 'Nascondi'", "Premere Ctrl+Z"],
    hint: "Prima evidenzi ciò che non vuoi, poi usi il tasto di cancellazione.",
    explanation: "La selezione indica al computer su cosa agire, e il tasto Canc (o Backspace) rimuove il contenuto selezionato."
  },
  {
    id: 49,
    question: "Che cosa indica il simbolo ¶?",
    correctAnswer: "La fine di un paragrafo",
    wrongAnswers: ["Un errore grammaticale", "Un commento", "Un'interruzione di pagina"],
    hint: "È un carattere nascosto che appare quando premi Invio.",
    explanation: "Il simbolo ¶ (piede di mosca) è un marcatore di formattazione non stampabile che indica dove è stato premuto Invio."
  },
  {
    id: 50,
    question: "Che cosa rappresenta la combinazione \"$A$1\" in Excel?",
    correctAnswer: "Un riferimento assoluto",
    wrongAnswers: ["Un riferimento relativo", "Un errore di formula", "Una valuta"],
    hint: "I dollari 'bloccano' la cella.",
    explanation: "Il simbolo $ blocca sia la colonna (A) che la riga (1), impedendo che il riferimento cambi quando si copia la formula."
  },
  {
    id: 51,
    question: "Che cosa significa quando un software viene rilasciato con licenza d’uso proprietaria?",
    correctAnswer: "Che è necessario pagare per usufruire del software",
    wrongAnswers: ["Che è gratis per tutti", "Che si può modificare il codice", "Che è una versione di prova"],
    hint: "È l'opposto del software libero o open source.",
    explanation: "Il software proprietario impone restrizioni sull'uso e spesso richiede l'acquisto di una licenza a pagamento."
  },
  {
    id: 52,
    question: "Che cosa significa salvare un file “in locale”?",
    correctAnswer: "Che il file verrà archiviato sul disco rigido del proprio computer",
    wrongAnswers: ["Che verrà salvato sul Cloud", "Che verrà inviato via email", "Che verrà stampato"],
    hint: "I dati restano fisicamente sulla tua macchina, non su internet.",
    explanation: "Salvare in locale significa memorizzare i dati sul dispositivo fisico che si sta utilizzando, contrapposto al salvataggio in cloud o su rete."
  },
  {
    id: 53,
    question: "Che cosa sono gli effetti di animazione?",
    correctAnswer: "Sono effetti visivi che vengono applicati sugli oggetti nelle diapositive",
    wrongAnswers: ["Sono i passaggi tra una slide e l'altra", "Sono i suoni di sottofondo", "Sono i video inseriti"],
    hint: "Fanno muovere testi o immagini *dentro* la diapositiva.",
    explanation: "Le animazioni in PowerPoint riguardano i singoli elementi (testo, immagini) all'interno di una slide, diversamente dalle transizioni che riguardano l'intera slide."
  },
  {
    id: 54,
    question: "Che cosa sono i numeri sul lato sinistro dei fogli di lavoro di Excel?",
    correctAnswer: "Le intestazioni di riga",
    wrongAnswers: ["Le intestazioni di colonna", "I numeri di pagina", "I codici delle celle"],
    hint: "Le righe sono orizzontali e numerate.",
    explanation: "Excel identifica le righe con numeri sequenziali (1, 2, 3...) posti sul bordo sinistro."
  },
  {
    id: 55,
    question: "Che cosa sono le etichette dati di un grafico?",
    correctAnswer: "Sono i valori numerici o percentuali che vengono rappresentati",
    wrongAnswers: ["Sono i titoli del grafico", "Sono i colori dello sfondo", "Sono le linee della griglia"],
    hint: "Scrivono il valore esatto sopra la barra o la fetta della torta.",
    explanation: "Le etichette dati rendono il grafico più leggibile mostrando il valore preciso di ogni serie di dati direttamente sull'elemento grafico."
  },
  {
    id: 56,
    question: "Che cosa sono le funzioni in Excel?",
    correctAnswer: "Sono programmi che una volta inseriti nelle formule permettono di eseguire calcoli",
    wrongAnswers: ["Sono pulsanti per chiudere il programma", "Sono i menu in alto", "Sono tipi di grafici"],
    hint: "Esempi sono SOMMA, MEDIA, SE.",
    explanation: "Le funzioni sono formule predefinite che eseguono calcoli utilizzando valori specifici, chiamati argomenti."
  },
  {
    id: 57,
    question: "Che cosa sono le lettere maiuscole al di sopra dei fogli di lavoro di Excel?",
    correctAnswer: "Le intestazioni di colonna",
    wrongAnswers: ["Le intestazioni di riga", "I nomi dei fogli", "Le formule"],
    hint: "Le colonne sono verticali e identificate da lettere.",
    explanation: "Excel identifica le colonne con lettere (A, B, C...) poste sul bordo superiore della griglia."
  },
  {
    id: 58,
    question: "Che cosa sono le memorie di massa?",
    correctAnswer: "Supporti in cui memorizzare i dati",
    wrongAnswers: ["La memoria RAM", "Il processore", "La scheda video"],
    hint: "Hard Disk, SSD, Pen drive USB.",
    explanation: "Le memorie di massa conservano i dati in modo permanente, a differenza della RAM che è volatile."
  },
  {
    id: 59,
    question: "Che cos’è Cortana?",
    correctAnswer: "È l’assistente personale di Windows 11",
    wrongAnswers: ["Un antivirus", "Un browser web", "Un programma di scrittura"],
    hint: "È simile a Siri o Alexa, ma per Windows.",
    explanation: "Cortana è l'assistente virtuale sviluppato da Microsoft per aiutare l'utente nelle ricerche e nell'esecuzione di compiti."
  },
  {
    id: 60,
    question: "Che cos’è il Modem/router?",
    correctAnswer: "Un apparecchio che consente ai dispositivi di collegarsi a Internet",
    wrongAnswers: ["Un tipo di stampante", "Un programma per disegnare", "Una memoria esterna"],
    hint: "È la 'scatola' con le luci che ti porta internet a casa.",
    explanation: "Il modem modula/demodula il segnale della linea internet, mentre il router smista il traffico ai vari dispositivi di casa."
  },
  {
    id: 61,
    question: "Che cos’è il servizio “Exchange” di Microsoft?",
    correctAnswer: "È un servizio aziendale per la gestione della posta elettronica",
    wrongAnswers: ["Un servizio per scambiare file via bluetooth", "Un convertitore di valuta", "Un negozio online"],
    hint: "Usato dalle aziende per email, calendari e contatti condivisi.",
    explanation: "Microsoft Exchange è un server di posta elettronica e calendari progettato per ambienti aziendali."
  },
  {
    id: 62,
    question: "Che cos’è il “Worm”?",
    correctAnswer: "È un programma che crea malfunzionamenti del dispositivo e attiva operazioni inutili",
    wrongAnswers: ["Un componente hardware", "Un tipo di cavo", "Un aggiornamento software"],
    hint: "Significa 'verme' e si auto-replica.",
    explanation: "Un Worm è un malware capace di replicarsi autonomamente e diffondersi in una rete senza bisogno di un file ospite."
  },
  {
    id: 63,
    question: "Che cos’è la cronologia del browser?",
    correctAnswer: "È la lista di tutte le pagine web visitate in Internet che il browser salva",
    wrongAnswers: ["La lista dei preferiti", "Le password salvate", "I download effettuati"],
    hint: "Ti permette di ritrovare un sito che hai visto ieri.",
    explanation: "La cronologia è un registro temporale delle pagine visitate, utile per tornare su contenuti visti in precedenza."
  },
  {
    id: 64,
    question: "Che cos’è la frequenza di clock?",
    correctAnswer: "La velocità con cui i processori eseguono i calcoli",
    wrongAnswers: ["La velocità di internet", "La luminosità dello schermo", "La capacità dell'hard disk"],
    hint: "Si misura in Hertz (GHz).",
    explanation: "La frequenza di clock indica quanti cicli di istruzioni la CPU può eseguire in un secondo."
  },
  {
    id: 65,
    question: "Che cos’è la parte software di un computer?",
    correctAnswer: "L’insieme delle istruzioni con cui far funzionare ogni componente hardware",
    wrongAnswers: ["I componenti fisici", "Il case del computer", "I cavi di collegamento"],
    hint: "È la parte impalpabile (programmi, app, sistema operativo).",
    explanation: "Il software è la componente logica del computer, costituita dai programmi che istruiscono l'hardware su cosa fare."
  },
  {
    id: 66,
    question: "Che cos’è l’hardware?",
    correctAnswer: "È l’insieme delle parti elettriche, elettroniche e meccaniche del computer",
    wrongAnswers: ["I programmi installati", "Il sistema operativo", "I dati salvati"],
    hint: "È tutto ciò che puoi toccare fisicamente.",
    explanation: "Hardware (ferramenta) indica tutte le componenti fisiche del computer: monitor, tastiera, chip, cavi."
  },
  {
    id: 67,
    question: "Che cos’è OneDrive?",
    correctAnswer: "Lo spazio di archiviazione della Microsoft",
    wrongAnswers: ["Il nuovo nome di Windows", "Un browser web", "Un antivirus"],
    hint: "Il cloud storage integrato in Windows.",
    explanation: "OneDrive è il servizio di cloud storage di Microsoft che permette di salvare file online e sincronizzarli tra dispositivi."
  },
  {
    id: 68,
    question: "Che cos’è un Font?",
    correctAnswer: "Il tipo di carattere",
    wrongAnswers: ["Un colore", "Un'immagine", "Uno sfondo"],
    hint: "Arial, Times New Roman, Calibri sono esempi.",
    explanation: "In tipografia digitale, il font definisce lo stile grafico dei caratteri del testo."
  },
  {
    id: 69,
    question: "Che cos’è un hotspot?",
    correctAnswer: "È un punto di accesso ad Internet aperto, raggiungibile tramite Wi-Fi",
    wrongAnswers: ["Un punto molto caldo del computer", "Un virus", "Un tasto della tastiera"],
    hint: "Spesso lo attivi sul cellulare per dare internet al PC.",
    explanation: "Un hotspot è un luogo fisico dove le persone possono accedere a Internet, tipicamente usando il Wi-Fi, tramite una rete locale wireless."
  },
  {
    id: 70,
    question: "Che cos’è un paragrafo?",
    correctAnswer: "Una porzione di testo che inizia con la maiuscola e finisce quando si va a capo",
    wrongAnswers: ["Una singola parola", "Una pagina intera", "Un titolo"],
    hint: "Si crea premendo il tasto Invio.",
    explanation: "Per un elaboratore di testi come Word, un paragrafo è tutto il testo compreso tra due pressioni del tasto Invio."
  },
  {
    id: 71,
    question: "Che tipologia di accesso occorre selezionare se vogliamo che il file condiviso possa essere modificato?",
    correctAnswer: "Editor",
    wrongAnswers: ["Visualizzatore", "Commentatore", "Lettore"],
    hint: "Deve poter 'editare' il file.",
    explanation: "Il ruolo di 'Editor' concede i permessi completi di modifica sul file condiviso."
  },
  {
    id: 72,
    question: "Chi sono gli spammer?",
    correctAnswer: "Hacker che compiono attività di spam per appropriarsi di dati personali",
    wrongAnswers: ["Utenti che inviano molte email utili", "Amministratori di rete", "Programmatori esperti"],
    hint: "Inviano posta indesiderata in massa.",
    explanation: "Gli spammer inviano messaggi pubblicitari o fraudolenti non richiesti a un gran numero di utenti."
  },
  {
    id: 73,
    question: "Come chiamiamo la procedura con cui inseriamo il nome utente e la password?",
    correctAnswer: "Login",
    wrongAnswers: ["Logout", "Download", "Upload"],
    hint: "O anche 'Accesso'.",
    explanation: "Il Login (o autenticazione) è la procedura di identificazione per accedere a un sistema informatico."
  },
  {
    id: 74,
    question: "Come prevenire il furto di identità?",
    correctAnswer: "Non memorizzare PIN, password e installare antivirus e firewall",
    wrongAnswers: ["Scrivere le password su un foglietto", "Usare sempre la stessa password", "Disattivare l'antivirus"],
    hint: "Bisogna essere prudenti con i propri dati e proteggere il dispositivo.",
    explanation: "Proteggere le credenziali e usare software di sicurezza riduce il rischio che malintenzionati accedano ai tuoi dati personali."
  },
  {
    id: 75,
    question: "Come si chiama il menu che si apre dopo aver fatto clic con il tasto destro del mouse?",
    correctAnswer: "Menu contestuale o di scelta rapida",
    wrongAnswers: ["Menu Start", "Menu principale", "Barra delle applicazioni"],
    hint: "Contiene comandi relativi all'oggetto su cui hai cliccato (il contesto).",
    explanation: "Si chiama 'contestuale' perché le opzioni mostrate cambiano in base a dove si fa clic."
  },
  {
    id: 76,
    question: "Come si chiama l’app store del sistema operativo Android?",
    correctAnswer: "Play Store",
    wrongAnswers: ["App Store", "Microsoft Store", "Amazon Store"],
    hint: "Gestito da Google.",
    explanation: "Google Play Store è il negozio digitale ufficiale per le app sui dispositivi Android."
  },
  {
    id: 77,
    question: "Come si chiama l’app store del sistema operativo iOS?",
    correctAnswer: "Apple App Store",
    wrongAnswers: ["Google Play", "Windows Store", "iStore"],
    hint: "Per iPhone e iPad.",
    explanation: "L'App Store è l'unica fonte ufficiale per scaricare applicazioni sui dispositivi mobili Apple."
  },
  {
    id: 78,
    question: "Come si chiama l’applicazione di Windows 11 per gestire la posta elettronica?",
    correctAnswer: "Posta",
    wrongAnswers: ["Outlook Express", "Gmail", "Thunderbird"],
    hint: "Ha un nome molto semplice e diretto in italiano.",
    explanation: "L'app preinstallata in Windows 10 e 11 per le email si chiama semplicemente 'Posta'."
  },
  {
    id: 79,
    question: "Come si chiama l’applicazione di Windows 11 per navigare in Internet?",
    correctAnswer: "Edge",
    wrongAnswers: ["Explorer", "Safari", "Navigator"],
    hint: "L'icona è una 'e' stilizzata a forma di onda blu.",
    explanation: "Microsoft Edge è il browser predefinito dei sistemi operativi Windows moderni, successore di Internet Explorer."
  },
  {
    id: 80,
    question: "Come si chiama l’elenco a cui inviare il documento realizzato con la stampa unione?",
    correctAnswer: "Lista di distribuzione",
    wrongAnswers: ["Rubrica telefonica", "Elenco puntato", "Lista della spesa"],
    hint: "Contiene i dati (nomi, indirizzi) dei destinatari.",
    explanation: "La lista di distribuzione è la sorgente dati che Word usa per compilare i campi variabili nella stampa unione."
  },
  {
    id: 81,
    question: "Come si indica la velocità di trasmissione dei dati?",
    correctAnswer: "Bit-rate",
    wrongAnswers: ["Byte-rate", "Hertz", "Pixel"],
    hint: "Si misura in bit per secondo (bps).",
    explanation: "Il Bit-rate indica la quantità di informazioni digitali trasmesse in un dato intervallo di tempo."
  },
  {
    id: 82,
    question: "Come vengono chiamati i computer fissi?",
    correctAnswer: "Desktop",
    wrongAnswers: ["Laptop", "Tablet", "Server"],
    hint: "Stanno 'sopra la scrivania'.",
    explanation: "I computer Desktop sono progettati per restare in una postazione fissa, a differenza dei portatili."
  },
  {
    id: 83,
    question: "Come vengono chiamati i computer portatili?",
    correctAnswer: "Laptop",
    wrongAnswers: ["Desktop", "Tower", "Mainframe"],
    hint: "Si possono tenere 'sopra le ginocchia' (Lap).",
    explanation: "Laptop (o Notebook) indica un computer portatile compatto con schermo e tastiera integrati."
  },
  {
    id: 84,
    question: "Con la crittografia end-to-end:",
    correctAnswer: "ogni messaggio viene criptato appena inviato e decriptato solo dal destinatario",
    wrongAnswers: ["il messaggio è leggibile da tutti", "il server può leggere il messaggio", "non serve la password"],
    hint: "Usata da WhatsApp: nessuno nel mezzo può leggere.",
    explanation: "La crittografia end-to-end garantisce che solo mittente e destinatario possiedano le chiavi per leggere il messaggio."
  },
  {
    id: 85,
    question: "Con la Modalità Focus in Word è possibile:",
    correctAnswer: "eliminare l’interfaccia e visualizzare solo il documento",
    wrongAnswers: ["ingrandire il testo", "chiudere il documento", "salvare automaticamente"],
    hint: "Ti aiuta a concentrarti togliendo le distrazioni.",
    explanation: "La Modalità Focus nasconde barre degli strumenti e menu per lasciare tutto lo spazio allo scrivere."
  },
  {
    id: 86,
    question: "Con quale app è possibile eseguire videochiamate per meeting?",
    correctAnswer: "Google Meet",
    wrongAnswers: ["Google Maps", "Google Drive", "Google Chrome"],
    hint: "Meet significa 'incontrare'.",
    explanation: "Google Meet è la piattaforma di videoconferenza di Google pensata per riunioni professionali e didattica."
  },
  {
    id: 87,
    question: "Con “l’autenticazione” è possibile:",
    correctAnswer: "verificare l’identità di un utente",
    wrongAnswers: ["cancellare un utente", "creare un virus", "aumentare la velocità internet"],
    hint: "Risponde alla domanda: 'Sei chi dici di essere?'.",
    explanation: "L'autenticazione è il processo di sicurezza che verifica le credenziali (es. password) di chi tenta l'accesso."
  },
  {
    id: 88,
    question: "Cosa significa Formattare un testo?",
    correctAnswer: "Decidere il suo aspetto",
    wrongAnswers: ["Cancellarlo", "Salvarlo", "Copiarlo"],
    hint: "Cambiare font, colore, dimensione, grassetto...",
    explanation: "La formattazione riguarda la presentazione visiva del contenuto, non il contenuto stesso."
  },
  {
    id: 89,
    question: "Cosa sono gli Screenshot?",
    correctAnswer: "Le immagini che mostrano ciò che visualizzi in quel momento sullo schermo",
    wrongAnswers: ["Le foto fatte con la webcam", "Gli sfondi del desktop", "Le icone delle app"],
    hint: "Foto dello schermo.",
    explanation: "Uno screenshot (cattura schermo) è un'immagine statica che registra esattamente ciò che è mostrato sul display."
  },
  {
    id: 90,
    question: "Cosa sono i Server?",
    correctAnswer: "Sono computer in cui conservare materialmente ogni elemento di un sito Internet",
    wrongAnswers: ["Sono cavi di rete", "Sono modem speciali", "Sono schermi ad alta definizione"],
    hint: "Computer potenti che 'servono' dati agli altri.",
    explanation: "I server sono computer sempre accesi e connessi che ospitano siti web e servizi, rispondendo alle richieste dei client."
  },
  {
    id: 91,
    question: "Cosa sono i social network?",
    correctAnswer: "Mezzi di comunicazione online per condividere contenuti e relazioni",
    wrongAnswers: ["Giochi offline", "Programmi di lavoro", "Virus informatici"],
    hint: "Facebook, Instagram, LinkedIn.",
    explanation: "Le reti sociali online permettono alle persone di connettersi, creare profili e scambiare messaggi o media."
  },
  {
    id: 92,
    question: "Cosa sono i webinar?",
    correctAnswer: "Eventi formativi o informativi che si tengono online",
    wrongAnswers: ["Pagine web statiche", "Email pubblicitarie", "Virus"],
    hint: "Web + Seminar.",
    explanation: "I webinar sono seminari condotti via internet che permettono interazione tra relatori e partecipanti remoti."
  },
  {
    id: 93,
    question: "Cosa sono i “motori di ricerca”?",
    correctAnswer: "Applicazioni che agevolano la ricerca di informazioni sul web",
    wrongAnswers: ["Motori meccanici", "Programmi per creare siti", "Antivirus"],
    hint: "Google, Bing, Yahoo.",
    explanation: "I motori di ricerca indicizzano i contenuti del web e permettono agli utenti di trovarli tramite parole chiave."
  },
  {
    id: 94,
    question: "Cosa sono le patch?",
    correctAnswer: "Importanti aggiornamenti con cui rendere un sistema sempre più sicuro",
    wrongAnswers: ["Virus", "Giochi", "Immagini"],
    hint: "In inglese significa 'toppa', per chiudere i buchi.",
    explanation: "Le patch sono aggiornamenti software rilasciati per correggere bug o vulnerabilità di sicurezza (i 'buchi')."
  },
  {
    id: 95,
    question: "Cosa sono le WordArt?",
    correctAnswer: "Caselle di testo per scritte con stile inedito e inusuale",
    wrongAnswers: ["Grafici statistici", "Tabelle di dati", "Immagini normali"],
    hint: "Testo artistico decorativo in Office.",
    explanation: "WordArt permette di creare titoli con effetti speciali come ombre, riflessi e distorsioni."
  },
  {
    id: 96,
    question: "Cosa sono le “macro”?",
    correctAnswer: "Piccoli programmi scritti in linguaggio VBA",
    wrongAnswers: ["File di grandi dimensioni", "Immagini giganti", "Virus"],
    hint: "Automatizzano compiti ripetitivi.",
    explanation: "Le macro registrano sequenze di comandi per eseguirli automaticamente. Sono scritte in Visual Basic for Applications."
  },
  {
    id: 97,
    question: "Cos’è il PIN?",
    correctAnswer: "Una combinazione di numeri per poter accedere al proprio dispositivo",
    wrongAnswers: ["Un codice per internet", "Il nome utente", "Un tipo di file"],
    hint: "Personal Identification Number.",
    explanation: "Il PIN è un codice numerico segreto usato per autenticare l'utente, simile a quello del Bancomat."
  },
  {
    id: 98,
    question: "Cos’è lo “Smishing”?",
    correctAnswer: "Il furto dei dati personali che avviene tramite SMS",
    wrongAnswers: ["Il furto via email", "Una tecnica di pesca", "Un errore del telefono"],
    hint: "SMS + Phishing.",
    explanation: "Lo Smishing è una variante del phishing che utilizza messaggi di testo (SMS) ingannevoli invece delle email."
  },
  {
    id: 99,
    question: "Cos’è lo “Spyware”?",
    correctAnswer: "Programma che si installa automaticamente per rubare dati e infettare",
    wrongAnswers: ["Un antivirus", "Un gioco di spie", "Un software utile"],
    hint: "Software spia.",
    explanation: "Lo spyware raccoglie informazioni sull'utente (password, abitudini) senza il suo consenso e le invia a terzi."
  },
  {
    id: 100,
    question: "Cos’è l’IT security?",
    correctAnswer: "L’insieme delle tecnologie per proteggere reti e dati da accessi non autorizzati",
    wrongAnswers: ["La sicurezza fisica degli edifici", "La polizia postale", "Un antivirus specifico"],
    hint: "Sicurezza Informatica.",
    explanation: "L'IT Security riguarda tutte le misure (software e hardware) per difendere i sistemi informatici dalle minacce."
  },
  {
    id: 101,
    question: "Da chi è gestita normalmente una rete informatica?",
    correctAnswer: "Amministratore (IT manager)",
    wrongAnswers: ["Dal direttore marketing", "Da qualsiasi utente", "Da un robot"],
    hint: "È la persona con i permessi più alti.",
    explanation: "L'amministratore di rete configura, gestisce e mantiene sicura l'infrastruttura di rete aziendale."
  },
  {
    id: 102,
    question: "Da quanti Byte è composto un Gigabyte?",
    correctAnswer: "Un miliardo",
    wrongAnswers: ["Mille", "Un milione", "Mille miliardi"],
    hint: "Giga = 10 alla nona.",
    explanation: "Nel sistema decimale, un Gigabyte corrisponde a 1.000.000.000 di byte (anche se in informatica binaria spesso si usa 1024^3)."
  },
  {
    id: 103,
    question: "Quale procedura permette di bloccare la riga superiore in Excel?",
    correctAnswer: "Visualizza > Blocca riquadri > Blocca riga superiore",
    wrongAnswers: ["Home > Blocca", "Dati > Blocca", "Inserisci > Blocca"],
    hint: "Serve per tenere visibili le intestazioni mentre scorri.",
    explanation: "Il comando si trova nella scheda Visualizza e serve a mantenere fissa la prima riga durante lo scorrimento dei dati."
  },
  {
    id: 104,
    question: "Dalla finestra di dialogo “Intestazioni e piè di pagina” è possibile inserire:",
    correctAnswer: "La Data e ora",
    wrongAnswers: ["Un video", "Un file audio", "Un programma"],
    hint: "Informazioni che si ripetono su ogni pagina stampata.",
    explanation: "Le intestazioni spesso contengono numeri di pagina, data, ora o nome del file."
  },
  {
    id: 105,
    question: "L’app “Find My Device” consente di:",
    correctAnswer: "localizzare a distanza tutti i dispositivi associati al proprio account Google",
    wrongAnswers: ["Trovare nuovi amici", "Cercare file nel computer", "Trovare reti Wi-Fi"],
    hint: "Utile se perdi il telefono.",
    explanation: "Questo servizio permette di vedere su una mappa dove si trova il dispositivo, farlo squillare o bloccarlo."
  },
  {
    id: 106,
    question: "Dopo aver inserito un grafico, quali schede si aggiungono?",
    correctAnswer: "Struttura grafico e Formato",
    wrongAnswers: ["Grafico e Colori", "Dati e Visualizza", "Inserisci e Home"],
    hint: "Sono schede 'contestuali' verdi che appaiono solo quando selezioni il grafico.",
    explanation: "Queste schede contengono strumenti specifici per modificare il design e l'aspetto del grafico selezionato."
  },
  {
    id: 107,
    question: "Dopo aver inserito un modello 3D, quale scheda compare?",
    correctAnswer: "Modello 3D",
    wrongAnswers: ["Immagine 3D", "Formato Forma", "Struttura"],
    hint: "Porta il nome dell'oggetto stesso.",
    explanation: "In PowerPoint, selezionando un oggetto 3D appare una scheda specifica per gestirne le viste e le proprietà."
  },
  {
    id: 108,
    question: "Il pulsante “Riempimento Forma” consente di scegliere:",
    correctAnswer: "il colore interno della forma",
    wrongAnswers: ["il colore del bordo", "l'ombra della forma", "la dimensione della forma"],
    hint: "È il secchiello di vernice.",
    explanation: "Il riempimento colora l'area interna di una forma chiusa, distinguendosi dal contorno."
  },
  {
    id: 109,
    question: "Il pulsante Inserisci a destra in una tabella:",
    correctAnswer: "inserisce una nuova colonna a destra",
    wrongAnswers: ["inserisce una riga sotto", "cancella la colonna", "unisce le celle"],
    hint: "Se inserisci a destra o sinistra, stai lavorando sulle colonne.",
    explanation: "Questo comando aggiunge una colonna verticale vuota alla destra di quella attualmente selezionata."
  },
  {
    id: 110,
    question: "Il pulsante Inserisci sopra in una tabella:",
    correctAnswer: "aggiunge una nuova riga sopra la riga selezionata",
    wrongAnswers: ["aggiunge una colonna a sinistra", "cancella la riga", "divide la cella"],
    hint: "Se inserisci sopra o sotto, stai lavorando sulle righe.",
    explanation: "Questo comando aggiunge una riga orizzontale vuota sopra quella in cui si trova il cursore."
  },
  {
    id: 111,
    question: "Dopo aver selezionato “Disegna casella di testo”, il cursore diventa:",
    correctAnswer: "una croce rovesciata",
    wrongAnswers: ["una freccia", "una mano", "un cerchio"],
    hint: "Indica che puoi cliccare e trascinare per disegnare.",
    explanation: "Il cursore a forma di croce (+) o croce rovesciata indica la modalità di disegno attivo per definire la dimensione dell'oggetto."
  },
  {
    id: 112,
    question: "Quanti controlli ha il riquadro di selezione di un oggetto?",
    correctAnswer: "8 (4 agli angoli e 4 ai lati)",
    wrongAnswers: ["4", "6", "10"],
    hint: "Conta i pallini bianchi intorno all'immagine selezionata.",
    explanation: "Ci sono 8 maniglie di ridimensionamento: 4 agli angoli (per mantenere le proporzioni) e 4 sui lati medi."
  },
  {
    id: 113,
    question: "Quale tasto premi per spostarti nella cella a destra?",
    correctAnswer: "Tab",
    wrongAnswers: ["Invio", "Esc", "Ctrl"],
    hint: "Si trova sopra il blocco maiuscole.",
    explanation: "Il tasto Tabulatore (Tab) sposta la selezione alla cella successiva nella stessa riga."
  },
  {
    id: 114,
    question: "Si definiscono ISP (Internet service provider):",
    correctAnswer: "quelle società che offrono la possibilità di navigare in Internet",
    wrongAnswers: ["i creatori di siti web", "i motori di ricerca", "i produttori di computer"],
    hint: "TIM, Vodafone, Fastweb sono esempi.",
    explanation: "ISP sta per Fornitore di Servizi Internet. Sono le compagnie che ti vendono la connessione."
  },
  {
    id: 115,
    question: "La fibra ottica permette di:",
    correctAnswer: "raggiungere velocità di trasmissione dati elevatissime (Gbps)",
    wrongAnswers: ["connettersi solo via cavo telefonico", "navigare lentamente", "usare solo il Wi-Fi"],
    hint: "Trasmette luce invece di elettricità.",
    explanation: "I cavi in fibra ottica trasportano dati tramite segnali luminosi, permettendo velocità e distanze molto superiori al rame."
  },
  {
    id: 116,
    question: "La firma digitale:",
    correctAnswer: "acquisisce valore legale in qualsiasi documento informatico",
    wrongAnswers: ["è una foto della firma", "non ha valore legale", "serve solo per le email"],
    hint: "È l'equivalente digitale della firma autografa.",
    explanation: "La firma digitale garantisce autenticità, integrità e non ripudio del documento, con pieno valore legale."
  },
  {
    id: 117,
    question: "La legenda di un grafico:",
    correctAnswer: "spiega la serie di dati rappresentati nel grafico",
    wrongAnswers: ["è il titolo del grafico", "sono i numeri sugli assi", "è lo sfondo"],
    hint: "Dice quale colore corrisponde a quale dato.",
    explanation: "La legenda è la chiave di lettura che associa i colori o i retini del grafico alle categorie di dati."
  },
  {
    id: 118,
    question: "La messaggistica istantanea (IM) consente di:",
    correctAnswer: "inviare e ricevere messaggi in tempo reale",
    wrongAnswers: ["inviare lettere cartacee", "fare solo chiamate vocali", "inviare pacchi"],
    hint: "WhatsApp, Telegram, Messenger.",
    explanation: "IM (Instant Messaging) permette conversazioni scritte immediate (chat) tra due o più persone."
  },
  {
    id: 119,
    question: "La OTP (One- Time password) è:",
    correctAnswer: "una password valida solo per un accesso o una transazione",
    wrongAnswers: ["una password che dura per sempre", "la password di Windows", "il codice fiscale"],
    hint: "Password 'usa e getta'.",
    explanation: "Il codice OTP viene generato al momento ed è valido per una sola volta e per breve tempo, aumentando la sicurezza."
  },
  {
    id: 120,
    question: "La parola inglese “Mailing list” si riferisce:",
    correctAnswer: "ad un gruppo di contatti a cui è possibile inviare lo stesso messaggio",
    wrongAnswers: ["alla lista della spesa", "all'elenco delle email ricevute", "allo spam"],
    hint: "Lista di distribuzione.",
    explanation: "Una mailing list permette di inviare una singola email a molti destinatari iscritti contemporaneamente."
  },
  {
    id: 121,
    question: "La rete WAN:",
    correctAnswer: "include decine di migliaia di reti più piccole (rete geografica)",
    wrongAnswers: ["è una rete domestica", "è una rete aziendale locale", "è il bluetooth"],
    hint: "Wide Area Network. Internet è la WAN più grande.",
    explanation: "Una WAN copre grandi distanze geografiche (nazioni, continenti), collegando tra loro più reti locali (LAN)."
  },
  {
    id: 122,
    question: "La rete wireless è:",
    correctAnswer: "una rete senza fili",
    wrongAnswers: ["una rete via cavo", "una rete in fibra ottica", "una rete telefonica"],
    hint: "Senza cavi.",
    explanation: "Wireless significa letteralmente 'senza filo'. Usa onde radio per la trasmissione dati."
  },
  {
    id: 123,
    question: "La scheda di rete è:",
    correctAnswer: "l’interfaccia che permette al computer di trasmettere e ricevere dati dalla rete",
    wrongAnswers: ["la scheda video", "la scheda madre", "la memoria RAM"],
    hint: "Senza di questa non puoi connetterti a Internet.",
    explanation: "La scheda di rete (NIC) è il componente hardware fisico che gestisce la connessione alla rete (cavo o Wi-Fi)."
  },
  {
    id: 124,
    question: "La scheda Vai (Trova) ti permette di:",
    correctAnswer: "raggiungere immediatamente la pagina di interesse",
    wrongAnswers: ["andare su internet", "chiudere il documento", "salvare il file"],
    hint: "Utile in documenti molto lunghi.",
    explanation: "Il comando Vai a (Go To) permette di saltare direttamente a una pagina, sezione, riga o commento specifico."
  },
  {
    id: 125,
    question: "La sigla LMS (Learning Management System) indica:",
    correctAnswer: "i sistemi informatici con cui gestire l’attività didattica a distanza",
    wrongAnswers: ["i sistemi di pagamento online", "i giochi educativi", "i social network"],
    hint: "Piattaforme come Moodle o Classroom.",
    explanation: "LMS è un software per l'amministrazione, documentazione, tracciamento e distribuzione di corsi e-learning."
  },
  {
    id: 126,
    question: "La tecnologia P2P (Peer to Peer) consente di:",
    correctAnswer: "condividere file direttamente tra computer senza un server centrale",
    wrongAnswers: ["connettersi solo al server", "navigare in incognito", "bloccare i virus"],
    hint: "Tutti sono 'pari' (peers).",
    explanation: "Nel P2P, ogni computer funge sia da client che da server, condividendo risorse direttamente con gli altri nodi."
  },
  {
    id: 127,
    question: "La WiMax è:",
    correctAnswer: "una connessione senza fili con ampio raggio di azione e alta velocità",
    wrongAnswers: ["un nuovo tipo di mouse", "una marca di computer", "un antivirus"],
    hint: "Simile al Wi-Fi ma copre chilometri.",
    explanation: "WiMax è una tecnologia di trasmissione wireless a banda larga per lunghe distanze."
  },
  {
    id: 128,
    question: "La “confidenzialità” dei dati prevede che:",
    correctAnswer: "solo le persone autorizzate possano accedere ai dati",
    wrongAnswers: ["tutti possano vedere i dati", "i dati siano pubblici", "i dati siano cancellati"],
    hint: "Riservatezza.",
    explanation: "La confidenzialità garantisce che le informazioni non siano divulgate a persone, enti o processi non autorizzati."
  },
  {
    id: 129,
    question: "La “disponibilità” dei dati prevede che:",
    correctAnswer: "le persone autorizzate possano sempre accedere ai servizi e risorse",
    wrongAnswers: ["i dati siano disponibili a tutti", "i dati siano gratis", "i servizi siano offline"],
    hint: "Il sistema deve funzionare quando serve.",
    explanation: "La disponibilità assicura che i sistemi e i dati siano accessibili e utilizzabili su richiesta dagli utenti autorizzati."
  },
  {
    id: 130,
    question: "La “doppia autenticazione tramite applicazione” consente di:",
    correctAnswer: "creare un codice temporaneo (OTP) tramite app per l'accesso",
    wrongAnswers: ["usare due password uguali", "accedere senza password", "inviare una lettera"],
    hint: "App come Google Authenticator.",
    explanation: "L'app genera codici che cambiano ogni 30 secondi, da usare come secondo fattore di accesso."
  },
  {
    id: 131,
    question: "A cosa serve la finestra Esplora file di Windows 11?",
    correctAnswer: "Permette di accedere ai file racchiusi nelle singole unità del computer",
    wrongAnswers: ["Permette di navigare su internet", "Serve solo per trovare immagini", "È un antivirus di sistema"],
    hint: "L'icona è una cartella gialla.",
    explanation: "Esplora File (File Explorer) è l'applicazione di gestione file di Windows per navigare tra cartelle e documenti."
  },
  {
    id: 132,
    question: "In una diapositiva, se selezioniamo un oggetto e scegliamo 'Porta in primo piano', dove viene spostato?",
    correctAnswer: "Sul livello 1 (il più alto)",
    wrongAnswers: ["Sul livello di fondo", "Viene nascosto", "Viene cancellato"],
    hint: "Davanti a tutti gli altri oggetti.",
    explanation: "Portare in primo piano mette l'oggetto visivamente sopra tutti gli altri elementi che potrebbero sovrapporsi."
  },
  {
    id: 133,
    question: "All’interno di un intervallo Excel, la cella con lo sfondo bianco è:",
    correctAnswer: "la cella da cui ha avuto inizio la selezione",
    wrongAnswers: ["la cella attiva vuota", "una cella protetta", "una cella con errore"],
    hint: "Anche se selezionata, la prima cella rimane bianca.",
    explanation: "In una selezione multipla, la cella attiva (quella da cui parte la selezione o dove si scriverà) appare bianca, le altre grigie."
  },
  {
    id: 134,
    question: "L'opzione 'Immagini online' in Word permette di:",
    correctAnswer: "cercare immagini da aggiungere al documento direttamente dal Web",
    wrongAnswers: ["modificare le immagini del PC", "creare disegni a mano libera", "cercare foto solo su OneDrive"],
    hint: "Usa il motore di ricerca Bing.",
    explanation: "Questa funzione apre una finestra di ricerca per trovare e inserire immagini da Internet senza uscire da Word."
  },
  {
    id: 135,
    question: "Che cosa accade se applichi a un numero il formato Percentuale in Excel?",
    correctAnswer: "Excel moltiplica per cento il numero e aggiunge il simbolo %",
    wrongAnswers: ["Excel divide per cento il numero", "Il numero diventa rosso", "Aggiunge solo il simbolo senza calcoli"],
    hint: "0,5 diventa 50%.",
    explanation: "Il formato percentuale visualizza il valore della cella moltiplicato per 100 con il simbolo %. (Es. 1 = 100%)."
  },
  {
    id: 136,
    question: "Come aggiungere altro testo in una diapositiva PowerPoint?",
    correctAnswer: "Fai clic nel punto di inserimento e digita i nuovi caratteri",
    wrongAnswers: ["Devi creare una nuova diapositiva", "Usi il comando 'Nuovo Testo' dal menu file", "Non si può aggiungere testo dopo la creazione"],
    hint: "Basta cliccare dentro la casella di testo.",
    explanation: "Le diapositive usano segnaposto di testo; cliccandoci dentro attivi il cursore per scrivere."
  },
  {
    id: 137,
    question: "Che cosa mostra il pannello diapositive in PowerPoint?",
    correctAnswer: "Le miniature delle diapositive che compongono la presentazione",
    wrongAnswers: ["Solo il testo delle slide", "Le note del relatore", "I commenti dei revisori"],
    hint: "È la colonna a sinistra.",
    explanation: "Il pannello a sinistra mostra le anteprime (miniature) di tutte le slide per permettere di riordinarle o selezionarle."
  },
  {
    id: 138,
    question: "Cosa sono i “software di produttività personale”?",
    correctAnswer: "Programmi per soddisfare le più comuni necessità di lavoro d'ufficio (es. Office)",
    wrongAnswers: ["Videogiochi", "Sistemi operativi server", "Driver hardware"],
    hint: "Word, Excel, PowerPoint.",
    explanation: "Sono software applicativi usati per produrre informazioni (documenti, fogli di calcolo, presentazioni)."
  },
  {
    id: 139,
    question: "L'opzione 'Stampa fogli attivi' in Excel permette di:",
    correctAnswer: "stampare soltanto il foglio di lavoro selezionato in quel momento",
    wrongAnswers: ["stampare tutti i fogli della cartella", "stampare solo l'area selezionata", "stampare un grafico"],
    hint: "È l'opzione predefinita di stampa.",
    explanation: "Excel stampa di default solo il foglio che stai visualizzando (attivo), non l'intera cartella di lavoro."
  },
  {
    id: 140,
    question: "Che cos’è il Wi-Fi?",
    correctAnswer: "Tecnologia per connettere dispositivi in rete locale senza cavi",
    wrongAnswers: ["Un tipo di cavo Ethernet", "Un software antivirus", "Un marchio di computer"],
    hint: "Wireless Fidelity.",
    explanation: "Il Wi-Fi è una tecnologia che permette ai dispositivi di collegarsi a una rete locale (WLAN) tramite onde radio."
  },
  {
    id: 141,
    question: "Che cos’è il “Social network poisoning”?",
    correctAnswer: "Una minaccia volta a creare profili artefatti e relazioni inesistenti sui social",
    wrongAnswers: ["Un virus che spegne il PC", "Un errore di connessione", "Una tecnica di pulizia del profilo"],
    hint: "Avvelenamento della rete sociale.",
    explanation: "Consiste nell'inserire dati falsi o profili bot nei social network per manipolare la reputazione o ingannare gli utenti."
  },
  {
    id: 142,
    question: "Che cos’è l’interlinea?",
    correctAnswer: "È la distanza verticale tra una riga di testo e la successiva",
    wrongAnswers: ["La distanza tra le parole", "Lo spazio tra i caratteri", "I margini della pagina"],
    hint: "Spazio tra le righe.",
    explanation: "L'interlinea determina quanto spazio bianco verticale c'è tra una riga di testo e quella sotto di essa."
  },
  {
    id: 143,
    question: "Che cos’è l’Uniform Resource Locator (URL)?",
    correctAnswer: "La combinazione di caratteri che identifica una risorsa web",
    wrongAnswers: ["Un codice segreto", "Il nome del provider", "Un indirizzo email"],
    hint: "L'indirizzo del sito.",
    explanation: "URL è il termine tecnico per l'indirizzo web completo (es. https://www.google.com)."
  },
  {
    id: 144,
    question: "Che cos’è un account?",
    correctAnswer: "È un ambiente online personalizzato a cui si accede con credenziali",
    wrongAnswers: ["Un documento di testo", "Una cartella del PC", "Un tipo di computer"],
    hint: "Richiede Nome Utente e Password.",
    explanation: "Un account è l'insieme di credenziali e dati che definisce un utente autorizzato all'interno di un sistema."
  },
  {
    id: 145,
    question: "Che cos’è “Internet”?",
    correctAnswer: "La rete informatica mondiale che collega dispositivi per lo scambio di informazioni",
    wrongAnswers: ["Un programma di Google", "Un sistema operativo", "Un cavo sottomarino"],
    hint: "La rete delle reti.",
    explanation: "Internet è l'infrastruttura globale di reti interconnesse che comunica tramite protocolli standard (TCP/IP)."
  },
  {
    id: 146,
    question: "Come si chiama il documento base della stampa unione?",
    correctAnswer: "Testo principale",
    wrongAnswers: ["Origine dati", "Documento finale", "Anteprima di stampa"],
    hint: "Contiene il testo fisso che non cambia.",
    explanation: "Il testo principale è il documento (es. lettera) che contiene il corpo del messaggio uguale per tutti i destinatari."
  },
  {
    id: 147,
    question: "Per eliminare un account Google, il primo passo è:",
    correctAnswer: "Accedere all’Account Google e selezionare Dati e Privacy",
    wrongAnswers: ["Disinstallare Chrome", "Formattare il PC", "Inviare una mail a Google"],
    hint: "Bisogna andare nelle impostazioni dell'account.",
    explanation: "L'opzione di eliminazione si trova nella sezione 'Dati e privacy' della gestione dell'account Google."
  },
  {
    id: 148,
    question: "Il riempimento automatico in Excel può generare sequenze di date?",
    correctAnswer: "Vero, digitandone anche solo la prima",
    wrongAnswers: ["Falso, serve una formula", "Solo se sono numeri", "Solo nei giorni feriali"],
    hint: "Trascina l'angolino in basso a destra.",
    explanation: "Excel riconosce le date e, trascinando la maniglia di riempimento, crea automaticamente la sequenza cronologica."
  },
  {
    id: 149,
    question: "La licenza d’uso dei software concede a terzi:",
    correctAnswer: "il permesso di utilizzare il software (non la proprietà)",
    wrongAnswers: ["la proprietà del codice", "il diritto di rivenderlo", "il copyright completo"],
    hint: "È come un affitto, non un acquisto della casa.",
    explanation: "La licenza EULA concede all'utente solo il diritto di usare il programma, mantenendo la proprietà intellettuale al produttore."
  },
  {
    id: 150,
    question: "La licenza Open Source concede:",
    correctAnswer: "la possibilità di studiare, modificare e distribuire il software",
    wrongAnswers: ["solo l'uso gratuito", "nessun diritto", "solo la lettura del manuale"],
    hint: "Codice aperto.",
    explanation: "Le licenze Open Source garantiscono le libertà fondamentali di accesso al codice sorgente e modifica."
  },
  {
    id: 151,
    question: "La sincronizzazione dei dati permette di:",
    correctAnswer: "rendere i dati disponibili su tutti i dispositivi collegati allo stesso account",
    wrongAnswers: ["cancellare i dati vecchi", "fare un backup su CD", "criptare i dati"],
    hint: "Se salvi sul PC, lo vedi sul telefono.",
    explanation: "La sincronizzazione aggiorna automaticamente i file su tutti i device connessi al cloud, mantenendoli identici."
  },
  {
    id: 152,
    question: "È possibile usare Google Chrome su un dispositivo Apple?",
    correctAnswer: "Sì, scaricandolo e installandolo",
    wrongAnswers: ["No, solo Safari funziona", "Sì, ma a pagamento", "No, è incompatibile"],
    hint: "I browser sono multipiattaforma.",
    explanation: "Chrome è disponibile per quasi tutti i sistemi operativi, inclusi macOS e iOS di Apple."
  },
  {
    id: 153,
    question: "Selezionando il pulsante Zoom in Word:",
    correctAnswer: "Si apre una finestra per scegliere la percentuale di ingrandimento",
    wrongAnswers: ["Si chiude il documento", "Si stampa la pagina", "Si attiva la lettura vocale"],
    hint: "Si trova nella scheda Visualizza o nella barra di stato.",
    explanation: "Il pulsante Zoom apre una finestra di dialogo per impostare un livello di ingrandimento specifico o predefinito."
  },
  {
    id: 154,
    question: "Cosa mostra la “Barra del Titolo”?",
    correctAnswer: "Il nome del documento aperto e del programma",
    wrongAnswers: ["I menu del programma", "La barra di stato", "Le icone di avvio rapido"],
    hint: "È la barra in cima alla finestra.",
    explanation: "La barra del titolo visualizza il nome del file corrente e il nome dell'applicazione in uso."
  },
  {
    id: 155,
    question: "Cosa sono gli “antivirus”?",
    correctAnswer: "Programmi specifici che rilevano ed eliminano i malware",
    wrongAnswers: ["Virus benefici", "Programmi per disegnare", "Sistemi operativi"],
    hint: "Difendono il PC.",
    explanation: "Gli antivirus scansionano i file cercando firme di virus noti o comportamenti sospetti per proteggere il sistema."
  },
  {
    id: 156,
    question: "Cosa sono gli “Organigrammi”?",
    correctAnswer: "Grafici per rappresentare strutture logiche e organizzative (es. aziendali)",
    wrongAnswers: ["Disegni a mano libera", "Foto di organi", "Tabelle numeriche"],
    hint: "Mostrano chi è il capo e chi sono i dipendenti.",
    explanation: "L'organigramma è la rappresentazione grafica della struttura gerarchica di un'organizzazione."
  },
  {
    id: 157,
    question: "Cosa sono i malware?",
    correctAnswer: "Software dannosi creati per sottrarre dati o danneggiare sistemi",
    wrongAnswers: ["Hardware difettosi", "Errori dell'utente", "Programmi antivirus"],
    hint: "Malicious Software.",
    explanation: "Malware è il termine generico che include virus, worm, trojan, spyware e ransomware."
  },
  {
    id: 158,
    question: "Cosa sono i popup?",
    correctAnswer: "Finestre che compaiono automaticamente durante la navigazione",
    wrongAnswers: ["Menu a tendina", "Icone del desktop", "Tasti della tastiera"],
    hint: "Spesso sono pubblicità fastidiose.",
    explanation: "I pop-up sono finestre del browser che si aprono sopra la pagina corrente senza l'intervento diretto dell'utente."
  },
  {
    id: 159,
    question: "Cosa sono le app store?",
    correctAnswer: "Negozi virtuali per scaricare applicazioni (gratis o a pagamento)",
    wrongAnswers: ["Negozi di computer fisici", "Archivi di documenti", "Cartelle di sistema"],
    hint: "Come il Play Store o l'App Store.",
    explanation: "Gli app store sono piattaforme di distribuzione digitale gestite dai produttori dei sistemi operativi."
  },
  {
    id: 160,
    question: "Cosa sono le scorciatoie (link)?",
    correctAnswer: "Collegamenti rapidi per raggiungere file, cartelle o siti web",
    wrongAnswers: ["Errori di sistema", "File cancellati", "Programmi lenti"],
    hint: "Icone con una freccetta nell'angolo.",
    explanation: "Una scorciatoia è un file che punta a un altro file o risorsa, permettendo di aprirlo velocemente da una posizione diversa."
  },
  {
    id: 161,
    question: "Cosa sono le SmartArt?",
    correctAnswer: "Elementi grafici predefiniti per creare elenchi, diagrammi e processi",
    wrongAnswers: ["Disegni intelligenti artificiali", "Foto ad alta risoluzione", "Video incorporati"],
    hint: "In Office, servono per fare schemi belli visivamente.",
    explanation: "SmartArt è uno strumento di Office per trasformare elenchi puntati in grafica visiva professionale (processi, cicli, gerarchie)."
  },
  {
    id: 162,
    question: "Cosa succede ai file in quarantena?",
    correctAnswer: "Vengono isolati in una sezione speciale per non infettare il sistema",
    wrongAnswers: ["Vengono cancellati subito", "Vengono inviati a Microsoft", "Diventano file di testo"],
    hint: "Non possono essere aperti o eseguiti.",
    explanation: "La quarantena rende il file inoffensivo bloccandone l'accesso, permettendo all'utente di decidere se eliminarlo o ripristinarlo."
  },
  {
    id: 163,
    question: "La Stampa Unione serve a:",
    correctAnswer: "Creare documenti personalizzati per ogni destinatario di una lista",
    wrongAnswers: ["Stampare più pagine in una", "Unire due stampanti", "Stampare foto"],
    hint: "Una lettera uguale per tutti, ma cambia il nome 'Gentile Mario', 'Gentile Anna'.",
    explanation: "La Stampa Unione fonde un documento principale con una lista di dati per generare copie multiple personalizzate."
  },
  {
    id: 164,
    question: "Cos’è il segno grafico (gesto) su mobile?",
    correctAnswer: "Un movimento da compiere sullo schermo per sbloccare il dispositivo",
    wrongAnswers: ["Un disegno fatto con la penna", "Un'emoji", "Un errore grafico"],
    hint: "Unire i puntini.",
    explanation: "Il segno (pattern) è un metodo di sblocco Android che richiede di tracciare un percorso specifico su una griglia di punti."
  },
  {
    id: 165,
    question: "Cos’è un account utente?",
    correctAnswer: "Un profilo personale che consente l'accesso a un sistema o servizio",
    wrongAnswers: ["Un conto bancario", "Un file di testo", "Una cartella condivisa"],
    hint: "Definisce chi sei per il computer.",
    explanation: "L'account utente contiene le preferenze, i file personali e i permessi di accesso di una specifica persona."
  },
  {
    id: 166,
    question: "Cos’è un ambiente di apprendimento online?",
    correctAnswer: "Una piattaforma telematica per la didattica a distanza (es. Moodle)",
    wrongAnswers: ["Una scuola fisica", "Un libro digitale", "Un video su YouTube"],
    hint: "VLE (Virtual Learning Environment).",
    explanation: "È uno spazio web dedicato dove studenti e docenti interagiscono, condividono materiali e svolgono attività didattiche."
  },
  {
    id: 167,
    question: "Creare un collegamento ipertestuale significa:",
    correctAnswer: "collegare un oggetto/testo a una pagina Web o un altro file",
    wrongAnswers: ["copiare il testo", "sottolineare il testo", "cancellare il link"],
    hint: "Rendere il testo cliccabile.",
    explanation: "Il collegamento ipertestuale (link) permette di saltare da un punto all'altro del documento o verso risorse esterne con un clic."
  },
  {
    id: 168,
    question: "Da cosa dipende principalmente la qualità di una rete?",
    correctAnswer: "Dalla velocità di trasmissione dei dati e dalla stabilità",
    wrongAnswers: ["Dal colore dei cavi", "Dalla marca del router", "Dal numero di tasti"],
    hint: "Più veloce e stabile è, meglio è.",
    explanation: "Le prestazioni di rete si misurano in larghezza di banda (velocità) e affidabilità (assenza di interruzioni)."
  },
  {
    id: 169,
    question: "Da quale scheda di Excel si apre una cartella di lavoro?",
    correctAnswer: "File",
    wrongAnswers: ["Home", "Inserisci", "Dati"],
    hint: "È la prima scheda a sinistra, che porta alla visualizzazione Backstage.",
    explanation: "La scheda File contiene i comandi di gestione del file come Nuovo, Apri, Salva e Stampa."
  },
  {
    id: 170,
    question: "Quale scheda gestisce lo stile dei caratteri in Office?",
    correctAnswer: "Home",
    wrongAnswers: ["File", "Layout", "Visualizza"],
    hint: "È la scheda principale dove trovi grassetto, colore e font.",
    explanation: "La scheda Home raggruppa i comandi di formattazione più comuni e utilizzati."
  },
  {
    id: 171,
    question: "Quale azione NON puoi fare dal pulsante Elementi Grafico in Excel?",
    correctAnswer: "Aggiungere un nuovo grafico (crearlo da zero)",
    wrongAnswers: ["Aggiungere titoli degli assi", "Aggiungere etichette dati", "Aggiungere legenda"],
    hint: "Il pulsante '+' vicino al grafico serve per modificare elementi *esistenti*, non per crearne uno nuovo.",
    explanation: "Il pulsante '+' (Elementi grafico) modifica le parti di un grafico già creato. Per crearne uno nuovo devi usare la scheda Inserisci."
  },
  {
    id: 172,
    question: "Come si imposta lo zoom in Excel dalla barra multifunzione?",
    correctAnswer: "Scheda Visualizza > Gruppo Zoom > Pulsante Zoom",
    wrongAnswers: ["Scheda Home > Zoom", "Scheda Dati > Zoom", "Tasto destro > Zoom"],
    hint: "Cerca nella scheda che riguarda la 'vista'.",
    explanation: "Tutti i comandi relativi a come vedi il foglio (senza modificarne il contenuto) sono nella scheda Visualizza."
  },
  {
    id: 173,
    question: "Come formattare le celle dalla barra multifunzione?",
    correctAnswer: "Scheda Home > Gruppo Celle > Formato",
    wrongAnswers: ["Scheda Inserisci > Formato", "Scheda Dati > Formato", "Menu File > Formatta"],
    hint: "È nella scheda principale, a destra.",
    explanation: "Il menu Formato nel gruppo Celle permette di modificare altezza righe, larghezza colonne e protezione celle."
  },
  {
    id: 174,
    question: "Quale pulsante attiva la ricerca (Trova) in Excel?",
    correctAnswer: "Trova e seleziona (nella scheda Home)",
    wrongAnswers: ["Cerca (nella scheda Dati)", "Lente (nella barra di stato)", "Menu File > Cerca"],
    hint: "Icona a forma di lente d'ingrandimento o binocolo all'estrema destra della Home.",
    explanation: "Il comando Trova e seleziona si trova nel gruppo Modifica della scheda Home."
  },
  {
    id: 175,
    question: "La scheda File permette di:",
    correctAnswer: "accedere ai comandi base (Nuovo, Apri, Salva, Stampa)",
    wrongAnswers: ["modificare il testo", "inserire immagini", "cambiare il layout"],
    hint: "Gestisce il file nel suo complesso, non il contenuto.",
    explanation: "La scheda File apre la visualizzazione Backstage per gestire le operazioni sui file."
  },
  {
    id: 176,
    question: "Come nascondere la barra di accesso rapido?",
    correctAnswer: "Opzioni visualizzazione barra multifunzione > Nascondi barra di accesso rapido",
    wrongAnswers: ["Non si può nascondere", "Tasto Canc", "Chiudendo Word"],
    hint: "Dal menu a discesa delle opzioni barra.",
    explanation: "La barra di accesso rapido può essere nascosta o spostata sotto la barra multifunzione tramite le sue opzioni."
  },
  {
    id: 177,
    question: "Da cosa dipende l’aspetto visivo dei dati (formattazione)?",
    correctAnswer: "Dalle impostazioni di carattere, colore, bordo e riempimento",
    wrongAnswers: ["Solo dal contenuto", "Dalla velocità del PC", "Dal nome del file"],
    hint: "È 'come' appare, non 'cosa' c'è scritto.",
    explanation: "La formattazione modifica l'estetica (font, colore, bordi) senza alterare il valore reale contenuto nella cella."
  },
  {
    id: 178,
    question: "La funzione 'Trova il mio dispositivo' serve a:",
    correctAnswer: "localizzare geograficamente i dispositivi associati all'account",
    wrongAnswers: ["trovare file persi", "cercare su Google", "trovare driver mancanti"],
    hint: "Usa il GPS.",
    explanation: "Permette di rintracciare smartphone o tablet smarriti su una mappa."
  },
  {
    id: 179,
    question: "Come rinominare un calendario in Google Calendar?",
    correctAnswer: "Impostazioni e condivisione del calendario specifico",
    wrongAnswers: ["Doppio clic sul calendario", "Tasto destro > Rinomina", "Non si può rinominare"],
    hint: "Devi entrare nelle impostazioni specifiche di quel calendario.",
    explanation: "Il nome del calendario si modifica nel campo 'Nome' all'interno delle sue impostazioni specifiche."
  },
  {
    id: 180,
    question: "Quale tasto conferma l'inserimento dati in una cella Excel?",
    correctAnswer: "Invio",
    wrongAnswers: ["Esc", "Backspace", "Space"],
    hint: "Sposta anche la selezione alla cella sotto.",
    explanation: "Il tasto Invio conferma il dato digitato e sposta il cursore nella cella successiva (di solito sotto)."
  },
  {
    id: 181,
    question: "Come creare un nuovo calendario in Google?",
    correctAnswer: "Clic sul '+' accanto ad Altri calendari > Crea nuovo calendario",
    wrongAnswers: ["Menu File > Nuovo", "Tasto destro sul giorno", "Non è possibile"],
    hint: "Cerca il segno più nella colonna di sinistra.",
    explanation: "L'opzione per aggiungere calendari secondari si trova nella barra laterale sinistra."
  },
  {
    id: 182,
    question: "Quale gruppo comandi permette di formattare il titolo di un grafico?",
    correctAnswer: "Carattere (nella scheda Home o menu contestuale)",
    wrongAnswers: ["Paragrafo", "Stili", "Modifica"],
    hint: "Trattalo come se fosse testo normale.",
    explanation: "Il titolo del grafico è un elemento testuale, quindi si formatta usando i normali comandi Carattere (font, dimensione, colore)."
  },
  {
    id: 183,
    question: "Cosa accade inserendo un grafico in PowerPoint?",
    correctAnswer: "Si apre un foglio Excel per l'inserimento dei dati",
    wrongAnswers: ["Si apre Paint", "Si apre Word", "Si apre una pagina web"],
    hint: "PowerPoint ha bisogno di una tabella dati per disegnare il grafico.",
    explanation: "PowerPoint utilizza il motore di Excel per gestire i dati numerici dei grafici, aprendo una mini-finestra Excel."
  },
  {
    id: 184,
    question: "Quale scheda appare selezionando una forma?",
    correctAnswer: "Formato forma",
    wrongAnswers: ["Struttura tabella", "Progettazione", "Visualizza"],
    hint: "Appare solo quando la forma è selezionata.",
    explanation: "È una scheda contestuale che contiene strumenti per modificare riempimento, contorno ed effetti della forma."
  },
  {
    id: 185,
    question: "L'effetto 'Ombreggiatura' fa parte di:",
    correctAnswer: "Effetti forma",
    wrongAnswers: ["Contorno forma", "Riempimento forma", "Layout pagina"],
    hint: "Non è un colore, è un effetto visivo.",
    explanation: "Gli effetti forma includono ombre, riflessi, aloni e rotazioni 3D."
  },
  {
    id: 186,
    question: "Per disegnare un cerchio perfetto con lo strumento Ovale:",
    correctAnswer: "Tieni premuto il tasto Maiusc mentre trascini",
    wrongAnswers: ["Tieni premuto Ctrl", "Tieni premuto Alt", "Fai doppio clic"],
    hint: "Il tasto Maiusc vincola le proporzioni.",
    explanation: "Tenere premuto Maiusc durante il disegno costringe la forma a mantenere altezza e larghezza uguali (da ovale a cerchio)."
  },
  {
    id: 187,
    question: "Per ridimensionare la larghezza di un oggetto, usi le maniglie:",
    correctAnswer: "sui lati destro e sinistro",
    wrongAnswers: ["sui lati superiore e inferiore", "agli angoli", "al centro"],
    hint: "Le maniglie laterali allargano o stringono.",
    explanation: "Le maniglie poste a metà dei lati verticali modificano solo la larghezza orizzontale."
  },
  {
    id: 188,
    question: "Per ridimensionare l'altezza di un oggetto, usi le maniglie:",
    correctAnswer: "sui lati superiore e inferiore",
    wrongAnswers: ["sui lati destro e sinistro", "agli angoli", "al centro"],
    hint: "Le maniglie sopra e sotto allungano o accorciano.",
    explanation: "Le maniglie poste a metà dei lati orizzontali modificano solo l'altezza verticale."
  },
  {
    id: 189,
    question: "Per ridimensionare proporzionalmente un oggetto, usi le maniglie:",
    correctAnswer: "ai quattro angoli",
    wrongAnswers: ["ai lati", "al centro", "in alto"],
    hint: "Gli angoli modificano altezza e larghezza insieme.",
    explanation: "Trascinando le maniglie d'angolo si ridimensiona l'oggetto mantenendo (solitamente) il rapporto d'aspetto."
  },
  {
    id: 190,
    question: "Si può eliminare un grafico con il tasto Canc?",
    correctAnswer: "Sì, selezionandolo e premendo Canc",
    wrongAnswers: ["No, serve il tasto destro", "No, bisogna usare la gomma", "Solo se è vuoto"],
    hint: "Basta selezionarlo tutto (clic sul bordo).",
    explanation: "Il tasto Canc elimina qualsiasi oggetto selezionato, inclusi i grafici."
  },
  {
    id: 191,
    question: "Per spostarsi alla cella a destra si usa:",
    correctAnswer: "Tab",
    wrongAnswers: ["Invio", "Maiusc", "Alt"],
    hint: "Tasto tabulatore.",
    explanation: "In Excel, Tab sposta la selezione a destra, mentre Invio la sposta in basso."
  },
  {
    id: 192,
    question: "Il comando 'Sostituisci tutto':",
    correctAnswer: "sostituisce tutte le occorrenze trovate in una volta sola",
    wrongAnswers: ["sostituisce una alla volta", "chiede conferma per ogni parola", "cancella tutto"],
    hint: "Fa tutto automaticamente senza chiedere conferma.",
    explanation: "Sostituisci tutto cambia ogni istanza del testo cercato in tutto il documento istantaneamente."
  },
  {
    id: 193,
    question: "Dove viene inserita un'immagine nel documento?",
    correctAnswer: "Nel punto in cui lampeggia il cursore (punto di inserimento)",
    wrongAnswers: ["Sempre all'inizio", "Sempre alla fine", "Al centro della pagina"],
    hint: "L'immagine appare dove stai scrivendo.",
    explanation: "Word inserisce gli oggetti nella posizione attuale del cursore, spostando il testo se necessario."
  },
  {
    id: 194,
    question: "Dove sono ospitati fisicamente i siti web?",
    correctAnswer: "Sui Server (presso un ISP o Data Center)",
    wrongAnswers: ["Nel cloud (che non esiste fisicamente)", "Sui router", "Sui cavi"],
    hint: "Computer potenti sempre connessi.",
    explanation: "I file dei siti web risiedono su dischi rigidi di server web, gestiti da provider di hosting."
  },
  {
    id: 195,
    question: "La finestra 'Conteggio Parole' si apre dalla:",
    correctAnswer: "Barra di stato (cliccando sul numero parole) o scheda Revisione",
    wrongAnswers: ["Scheda Home", "Scheda Inserisci", "Menu File"],
    hint: "In basso a sinistra vedi quante parole hai scritto; cliccaci.",
    explanation: "Cliccando sul conteggio parole nella barra di stato si aprono le statistiche dettagliate (caratteri, righe, paragrafi)."
  },
  {
    id: 196,
    question: "Dropbox è un esempio di:",
    correctAnswer: "Servizio di Cloud Storage",
    wrongAnswers: ["Social Network", "Browser", "Sistema Operativo"],
    hint: "Come Google Drive o OneDrive.",
    explanation: "Dropbox è stato uno dei primi servizi popolari per archiviare e sincronizzare file online."
  },
  {
    id: 197,
    question: "Per andare a capo in un elenco senza nuovo punto elenco:",
    correctAnswer: "Maiusc + Invio",
    wrongAnswers: ["Ctrl + Invio", "Alt + Invio", "Tab"],
    hint: "Si chiama 'interruzione di riga manuale'.",
    explanation: "Maiusc + Invio manda il testo a capo rimanendo nello stesso paragrafo (e quindi nello stesso punto elenco)."
  },
  {
    id: 198,
    question: "Si possono personalizzare i singoli documenti nella stampa unione?",
    correctAnswer: "Sì, con 'Modifica singole lettere'",
    wrongAnswers: ["No, sono tutti uguali", "Solo il primo", "Solo l'ultimo"],
    hint: "Questa opzione crea un nuovo file Word con tutte le lettere generate.",
    explanation: "L'opzione 'Modifica singole lettere' genera un documento finale contenente tutte le copie, che possono essere modificate individualmente prima della stampa."
  },
  {
    id: 199,
    question: "È consigliato usare molte icone nei testi formali?",
    correctAnswer: "Falso, meglio limitarne l'uso",
    wrongAnswers: ["Vero, rendono il testo allegro", "Dipende dal colore", "Sempre"],
    hint: "I testi formali devono essere sobri.",
    explanation: "Nei documenti professionali o formali, l'uso eccessivo di elementi grafici decorativi è sconsigliato."
  },
  {
    id: 200,
    question: "Bisogna controllare la privacy sui social?",
    correctAnswer: "Vero, periodicamente",
    wrongAnswers: ["Falso, è automatica", "Solo all'iscrizione", "Non serve a nulla"],
    hint: "Le impostazioni possono cambiare.",
    explanation: "È buona norma rivedere chi può vedere i tuoi post e dati, poiché le piattaforme aggiornano spesso le policy."
  },
  {
    id: 201,
    question: "Le risorse condivise in rete sono accessibili:",
    correctAnswer: "da qualsiasi luogo (se connesse a Internet)",
    wrongAnswers: ["solo dall'ufficio", "solo se il PC è acceso", "solo via cavo"],
    hint: "Il vantaggio del cloud.",
    explanation: "Se i file sono in cloud o su una rete accessibile dall'esterno, puoi lavorarci da casa, ufficio o in mobilità."
  },
  {
    id: 202,
    question: "Si possono applicare più animazioni allo stesso oggetto?",
    correctAnswer: "Sì (es. entrata, enfasi, uscita)",
    wrongAnswers: ["No, solo una", "Solo due", "Dipende dalla versione"],
    hint: "Devi usare 'Aggiungi animazione'.",
    explanation: "È possibile concatenare più effetti sullo stesso oggetto (es. appare, poi ruota, poi scompare)."
  },
  {
    id: 203,
    question: "Si può cambiare il layout di una sola diapositiva?",
    correctAnswer: "Sì, dal pulsante Layout",
    wrongAnswers: ["No, cambia per tutte", "Solo creando una nuova presentazione", "Bisogna cancellarla"],
    hint: "Puoi avere una slide 'Titolo' e una 'Confronto'.",
    explanation: "Il layout si applica alla singola diapositiva selezionata, senza influenzare le altre."
  },
  {
    id: 204,
    question: "Si può connettere un dispositivo a Internet senza Wi-Fi?",
    correctAnswer: "Sì, tramite rete mobile (dati) o cavo Ethernet",
    wrongAnswers: ["No, serve per forza il Wi-Fi", "Solo col Bluetooth", "Solo via satellite"],
    hint: "Cavo o 4G/5G.",
    explanation: "Il Wi-Fi è solo uno dei modi. I PC usano spesso cavi Ethernet, i telefoni la rete dati cellulare."
  },
  {
    id: 205,
    question: "Si possono creare cartelle nella posta elettronica?",
    correctAnswer: "Vero, per organizzare i messaggi",
    wrongAnswers: ["Falso", "Solo in Gmail", "Solo su Outlook"],
    hint: "Spesso si chiamano anche 'Etichette' (in Gmail).",
    explanation: "Organizzare le email in cartelle o etichette aiuta a tenere ordinata la posta e ritrovare i messaggi."
  },
  {
    id: 206,
    question: "Si può eliminare un contatto dalla rubrica email?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo se bloccato", "Solo se non ha mai scritto"],
    hint: "Se non ti serve più, puoi cancellarlo.",
    explanation: "La rubrica contatti è completamente gestibile dall'utente, che può aggiungere, modificare o eliminare voci."
  },
  {
    id: 207,
    question: "Si possono inserire modelli 3D in PowerPoint?",
    correctAnswer: "Sì, dalla scheda Inserisci > Modelli 3D",
    wrongAnswers: ["No, solo immagini 2D", "Solo video", "Serve un plugin"],
    hint: "Funzione disponibile nelle versioni recenti.",
    explanation: "PowerPoint supporta oggetti 3D che possono essere ruotati e animati in tutte le direzioni."
  },
  {
    id: 208,
    question: "La data nel piè di pagina può aggiornarsi da sola?",
    correctAnswer: "Sì, scegliendo l'opzione 'Aggiorna automaticamente'",
    wrongAnswers: ["No, va scritta a mano ogni volta", "Solo se il PC è online", "Dipende dalla stampante"],
    hint: "Mostrerà sempre la data di oggi ogni volta che apri il file.",
    explanation: "Inserendo la data come campo dinamico, essa rifletterà la data di sistema corrente al momento dell'apertura o stampa."
  },
  {
    id: 209,
    question: "Per inserire un'immagine in una diapositiva:",
    correctAnswer: "Il file deve essere disponibile (disco o online)",
    wrongAnswers: ["Bisogna disegnarla", "Serve una webcam", "Deve essere in formato BMP"],
    hint: "Devi avere il file sorgente.",
    explanation: "Per inserire un'immagine, devi selezionare un file esistente sul computer o cercarlo sul web."
  },
  {
    id: 210,
    question: "Si può cambiare il Tema dopo aver creato la presentazione?",
    correctAnswer: "Sì, dalla scheda Progettazione",
    wrongAnswers: ["No, bisogna rifarla", "Solo i colori, non i font", "Solo nella prima slide"],
    hint: "Cambierà l'aspetto di tutte le slide esistenti.",
    explanation: "Applicando un nuovo tema, PowerPoint aggiorna automaticamente sfondo, font e colori di tutte le diapositive."
  },
  {
    id: 211,
    question: "Si possono modificare le dimensioni di un grafico?",
    correctAnswer: "Vero, trascinando le maniglie",
    wrongAnswers: ["Falso, sono fisse", "Solo la larghezza", "Solo l'altezza"],
    hint: "Come per le immagini.",
    explanation: "I grafici sono oggetti ridimensionabili a piacere tramite le maniglie di selezione."
  },
  {
    id: 212,
    question: "Si può personalizzare la barra di accesso rapido?",
    correctAnswer: "Sì, aggiungendo i comandi più usati",
    wrongAnswers: ["No, è fissa", "Solo il colore", "Solo in Excel"],
    hint: "La barra piccola in alto a sinistra.",
    explanation: "L'utente può aggiungere qualsiasi comando alla barra di accesso rapido per averlo sempre a portata di mano."
  },
  {
    id: 213,
    question: "Come fare il backup di Windows?",
    correctAnswer: "Pannello di controllo > Sistema e Sicurezza > Backup e ripristino",
    wrongAnswers: ["Copia e Incolla tutto", "Non esiste il backup", "Solo con programmi esterni"],
    hint: "Usa lo strumento integrato.",
    explanation: "Windows include uno strumento nativo per creare copie di backup dei file e immagini di sistema."
  },
  {
    id: 214,
    question: "Per salvare su OneDrive serve:",
    correctAnswer: "Aver effettuato il login all'account Microsoft",
    wrongAnswers: ["Un abbonamento a pagamento", "Un cavo USB", "Essere amministratori"],
    hint: "Devi essere riconosciuto dal sistema.",
    explanation: "L'accesso a OneDrive richiede l'autenticazione con un account Microsoft per collegare lo spazio cloud."
  },
  {
    id: 215,
    question: "Dove finiscono i file scaricati dal web?",
    correctAnswer: "Nella cartella Download (modificabile nelle impostazioni)",
    wrongAnswers: ["Sul Desktop", "In Documenti", "Vengono cancellati"],
    hint: "Cartella predefinita 'Scaricati'.",
    explanation: "I browser salvano di default nella cartella di sistema 'Download', ma l'utente può cambiare percorso."
  },
  {
    id: 216,
    question: "Come inserire una tabella?",
    correctAnswer: "Scheda Inserisci > Tabella > Specifica righe e colonne",
    wrongAnswers: ["Scrivi i numeri e fai Tab", "Disegna con la matita", "Non si può"],
    hint: "Usa la griglia per scegliere la grandezza.",
    explanation: "Il menu Tabella permette di definire visivamente o numericamente la dimensione della griglia da creare."
  },
  {
    id: 217,
    question: "Come spostare il punto di inserimento?",
    correctAnswer: "Cliccando con il mouse o usando le frecce",
    wrongAnswers: ["Urlando al computer", "Muovendo il monitor", "Solo con il Tab"],
    hint: "Il cursore lampeggiante.",
    explanation: "Il punto di inserimento si sposta dove clicchi con il mouse o usando i tasti direzionali della tastiera."
  },
  {
    id: 218,
    question: "Si può trasformare un elenco in testo normale?",
    correctAnswer: "Sì, disattivando l'elenco puntato/numerato",
    wrongAnswers: ["No, rimane elenco per sempre", "Bisogna cancellarlo", "Solo copiando su Blocco Note"],
    hint: "Riclicca sul pulsante dell'elenco.",
    explanation: "Cliccando nuovamente sul pulsante Elenco Puntato/Numerato attivo, la formattazione viene rimossa."
  },
  {
    id: 219,
    question: "Il riempimento automatico funziona con i giorni?",
    correctAnswer: "Sì (Lunedì, Martedì...)",
    wrongAnswers: ["No, solo numeri", "Solo mesi", "Solo anni"],
    hint: "Excel conosce i giorni della settimana.",
    explanation: "Excel ha elenchi personalizzati integrati per giorni e mesi, permettendo di completarli automaticamente."
  },
  {
    id: 220,
    question: "Google Tasks serve a:",
    correctAnswer: "Gestire le attività (to-do list)",
    wrongAnswers: ["Gestire le email", "Gestire le foto", "Navigare"],
    hint: "Cose da fare.",
    explanation: "Tasks è lo strumento di Google per creare liste di compiti, scadenze e promemoria."
  },
  {
    id: 221,
    question: "Il logout è importante per la sicurezza?",
    correctAnswer: "Vero, evita accessi non autorizzati",
    wrongAnswers: ["Falso, è inutile", "Solo se si usa una VPN", "Rallenta il PC"],
    hint: "Soprattutto su computer pubblici.",
    explanation: "Disconnettersi (logout) impedisce che chi usa il computer dopo di te acceda ai tuoi dati."
  },
  {
    id: 222,
    question: "Excel gestisce le date come numeri seriali?",
    correctAnswer: "Vero (partendo dal 1900)",
    wrongAnswers: ["Falso, sono testo", "Solo le date future", "Solo le date passate"],
    hint: "Il giorno 1 è il 1 Gennaio 1900.",
    explanation: "Per Excel ogni data è un numero progressivo (es. 10/10/2023 è circa 45209), permettendo i calcoli matematici."
  },
  {
    id: 223,
    question: "Excel usa la notazione scientifica per grandi numeri?",
    correctAnswer: "Vero (es. 1.E+10)",
    wrongAnswers: ["Falso", "Solo per i decimali", "Dà errore"],
    hint: "Quando il numero è troppo lungo.",
    explanation: "Se un numero è troppo grande per la cella o molto esteso, Excel lo converte in formato esponenziale (scientifico)."
  },
  {
    id: 224,
    question: "Freeware significa:",
    correctAnswer: "Software gratuito",
    wrongAnswers: ["Software libero modificabile", "Software a pagamento", "Hardware gratuito"],
    hint: "Free = Gratis.",
    explanation: "Il software Freeware è distribuito gratuitamente, ma il codice sorgente rimane chiuso (non è Open Source)."
  },
  {
    id: 225,
    question: "Gli argomenti delle funzioni vanno tra:",
    correctAnswer: "Parentesi tonde ( )",
    wrongAnswers: ["Parentesi quadre [ ]", "Graffe { }", "Virgolette"],
    hint: "=SOMMA(A1:A10)",
    explanation: "La sintassi standard di Excel richiede che gli argomenti della funzione siano racchiusi tra parentesi tonde."
  },
  {
    id: 226,
    question: "Gli elenchi puntati usano:",
    correctAnswer: "Simboli grafici (pallini, quadrati...)",
    wrongAnswers: ["Numeri", "Lettere", "Numeri romani"],
    hint: "Non c'è un ordine sequenziale.",
    explanation: "A differenza degli elenchi numerati (1, 2, 3), quelli puntati usano simboli per liste senza ordine di priorità."
  },
  {
    id: 227,
    question: "Smartphone moderni:",
    correctAnswer: "Uniscono funzioni di telefono e computer",
    wrongAnswers: ["Servono solo per chiamare", "Sono solo computer", "Non vanno su internet"],
    hint: "Sono mini-computer tascabili.",
    explanation: "Gli smartphone combinano la telefonia con capacità di calcolo, navigazione e app tipiche dei computer."
  },
  {
    id: 228,
    question: "I margini di pagina sono:",
    correctAnswer: "Gli spazi vuoti ai bordi del foglio",
    wrongAnswers: ["Le righe del testo", "I numeri di pagina", "Le note"],
    hint: "Dove non si scrive.",
    explanation: "I margini definiscono l'area bianca tra il bordo della carta e l'inizio del testo."
  },
  {
    id: 229,
    question: "Stampa 'Più diapositive per pagina' serve a:",
    correctAnswer: "Stampare stampati (handout) per il pubblico",
    wrongAnswers: ["Risparmiare inchiostro e basta", "Stampare poster", "Non esiste"],
    hint: "Utile per dare appunti agli spettatori.",
    explanation: "Questa opzione crea dispense cartacee che permettono al pubblico di seguire e prendere note."
  },
  {
    id: 230,
    question: "Eventi accidentali (sicurezza):",
    correctAnswer: "Situazioni non previste e casuali (guasti, incendi)",
    wrongAnswers: ["Attacchi hacker", "Furti mirati", "Sabotaggi"],
    hint: "Non c'è intenzione cattiva.",
    explanation: "Gli eventi accidentali sono minacce non dolose, come disastri naturali, blackout o errori umani."
  },
  {
    id: 231,
    question: "Eventi indesiderati (sicurezza):",
    correctAnswer: "Azioni dolose umane (attacchi, furti)",
    wrongAnswers: ["Terremoti", "Alluvioni", "Cortocircuiti"],
    hint: "C'è qualcuno che vuole fare danno.",
    explanation: "Gli eventi indesiderati sono attacchi intenzionali mirati a sottrarre dati o danneggiare il sistema."
  },
  {
    id: 232,
    question: "Google Authenticator è:",
    correctAnswer: "App per l'autenticazione a due fattori (2FA)",
    wrongAnswers: ["Un browser", "Un social", "Un antivirus"],
    hint: "Genera codici a 6 cifre.",
    explanation: "È un'app che genera codici OTP temporanei per accedere in sicurezza agli account protetti da 2FA."
  },
  {
    id: 233,
    question: "Salvare le password nel browser è sicuro?",
    correctAnswer: "Sì, se il dispositivo è protetto, ma comporta rischi se condiviso",
    wrongAnswers: ["Mai", "Sempre sicuro al 100%", "Impossibile farlo"],
    hint: "Comodo ma rischioso se non metti il blocco schermo.",
    explanation: "I gestori password dei browser sono criptati, ma se qualcuno accede al tuo PC sbloccato può vederle."
  },
  {
    id: 234,
    question: "I segnalibri (o preferiti) servono a:",
    correctAnswer: "Salvare indirizzi web per tornarci facilmente",
    wrongAnswers: ["Segnare dove si è arrivati a leggere", "Evidenziare testo", "Bloccare siti"],
    hint: "Bookmark.",
    explanation: "Permettono di memorizzare l'URL di una pagina per non doverlo digitare o cercare di nuovo."
  },
  {
    id: 235,
    question: "I caratteri Serif (con grazie) hanno:",
    correctAnswer: "Allungamenti alle estremità (migliorano leggibilità su carta)",
    wrongAnswers: ["Forme geometriche semplici", "Nessuna decorazione", "Sono solo in corsivo"],
    hint: "Times New Roman.",
    explanation: "Le 'grazie' sono i piccoli tratti decorativi alle estremità delle lettere, tipici dei libri stampati."
  },
  {
    id: 236,
    question: "I caratteri Sans Serif (bastoni) sono:",
    correctAnswer: "Senza allungamenti, lineari (buoni per schermi)",
    wrongAnswers: ["Decorati", "Manoscritti", "Gotici"],
    hint: "Arial, Helvetica. 'Sans' significa senza.",
    explanation: "I caratteri senza grazie (Sans Serif) hanno un design pulito e moderno, più leggibile a video."
  },
  {
    id: 237,
    question: "I link servono a:",
    correctAnswer: "Navigare tra pagine o risorse diverse",
    wrongAnswers: ["Bloccare la pagina", "Colorare il testo", "Stampare"],
    hint: "Il web è fatto di link.",
    explanation: "I collegamenti ipertestuali (link) sono la base del Web, permettendo di saltare da un contenuto all'altro."
  },
  {
    id: 238,
    question: "Il browser predefinito di Windows è:",
    correctAnswer: "Edge",
    wrongAnswers: ["Chrome", "Firefox", "Opera"],
    hint: "Sostituisce Internet Explorer.",
    explanation: "Microsoft Edge è il browser integrato in Windows 10 e 11."
  },
  {
    id: 239,
    question: "I cookie di terze parti:",
    correctAnswer: "Provengono da siti diversi da quello visitato (es. banner pubblicitari)",
    wrongAnswers: ["Sono biscotti", "Sono virus", "Sono file di sistema"],
    hint: "Ti tracciano per la pubblicità.",
    explanation: "Sono creati da domini esterni (come inserzionisti) per tracciare il comportamento dell'utente su più siti."
  },
  {
    id: 240,
    question: "I dati biometrici (impronta, viso) sono:",
    correctAnswer: "Metodi sicuri per l'identificazione personale",
    wrongAnswers: ["Dati pubblici", "Facili da copiare", "Non usati nei telefoni"],
    hint: "Sono unici per ogni persona.",
    explanation: "La biometria usa caratteristiche fisiche uniche per autenticare l'utente in modo sicuro."
  },
  {
    id: 241,
    question: "Bluetooth richiede:",
    correctAnswer: "Vicinanza fisica tra i dispositivi",
    wrongAnswers: ["Cavi", "Connessione internet", "Abbonamento"],
    hint: "Raggio corto (circa 10 metri).",
    explanation: "Bluetooth è una tecnologia a corto raggio per connettere dispositivi vicini (cuffie, mouse, telefoni)."
  },
  {
    id: 242,
    question: "Il firewall analizza il traffico?",
    correctAnswer: "Sì, blocca connessioni non autorizzate",
    wrongAnswers: ["No, fa solo da antivirus", "Solo in uscita", "Solo in entrata"],
    hint: "È un 'muro di fuoco' tra te e internet.",
    explanation: "Il firewall controlla i pacchetti dati in entrata e uscita, decidendo cosa far passare in base a regole di sicurezza."
  },
  {
    id: 243,
    question: "I grafici servono a:",
    correctAnswer: "Rappresentare visivamente i dati numerici",
    wrongAnswers: ["Scrivere testi lunghi", "Fare disegni", "Inserire video"],
    hint: "Un'immagine vale più di mille numeri.",
    explanation: "I grafici trasformano tabelle di numeri in visualizzazioni intuitive per facilitare l'analisi dei dati."
  },
  {
    id: 244,
    question: "Layout diapositiva definisce:",
    correctAnswer: "La posizione dei segnaposto (titolo, testo, oggetti)",
    wrongAnswers: ["Lo sfondo", "L'animazione", "La transizione"],
    hint: "Es. 'Titolo e contenuto', 'Due contenuti'.",
    explanation: "Il layout determina la struttura predefinita della slide e dove andranno inseriti i contenuti."
  },
  {
    id: 245,
    question: "I messaggi non letti sono solitamente:",
    correctAnswer: "In grassetto o evidenziati",
    wrongAnswers: ["Cancellati", "Nascosti", "In rosso"],
    hint: "Risaltano rispetto a quelli già aperti.",
    explanation: "I client di posta evidenziano visivamente i nuovi messaggi per distinguerli da quelli già letti."
  },
  {
    id: 246,
    question: "I MOOC sono:",
    correctAnswer: "Corsi online aperti su larga scala (Massive Open Online Courses)",
    wrongAnswers: ["Giochi di ruolo", "Social network", "Programmi di chat"],
    hint: "Corsi universitari accessibili a tutti via web.",
    explanation: "I MOOC sono corsi e-learning pensati per un numero illimitato di partecipanti, accessibili via web."
  },
  {
    id: 247,
    question: "Riferimento assoluto in Excel:",
    correctAnswer: "Blocca la cella nella formula (es. $A$1)",
    wrongAnswers: ["Cambia copiando la formula", "È un errore", "Non esiste"],
    hint: "Usa i dollari $.",
    explanation: "Il riferimento assoluto impedisce che l'indirizzo della cella cambi quando si trascina o copia la formula."
  },
  {
    id: 248,
    question: "Servizi di collaborazione online permettono:",
    correctAnswer: "Lavoro simultaneo sullo stesso documento",
    wrongAnswers: ["Solo invio email", "Solo download", "Niente"],
    hint: "Più persone scrivono insieme (es. Google Docs).",
    explanation: "Il co-authoring in tempo reale permette a più utenti di modificare lo stesso file contemporaneamente vedendo le modifiche altrui."
  },
  {
    id: 249,
    question: "Shareware è:",
    correctAnswer: "Software in prova gratuita per un periodo limitato",
    wrongAnswers: ["Software libero", "Software pirata", "Hardware"],
    hint: "Try before you buy.",
    explanation: "Shareware è un software proprietario distribuito gratuitamente in prova, ma che richiede pagamento dopo un certo periodo o per sbloccare funzioni."
  },
  {
    id: 250,
    question: "Il Tablet ha la SIM?",
    correctAnswer: "Alcuni modelli sì (per dati mobili 4G/5G)",
    wrongAnswers: ["Tutti", "Nessuno", "Solo per chiamate voce"],
    hint: "Quelli 'Cellular' o 'LTE'.",
    explanation: "I tablet esistono in versione solo Wi-Fi o Wi-Fi + Cellular (con slot SIM per internet in mobilità)."
  },
  {
    id: 251,
    question: "Jamming è:",
    correctAnswer: "Disturbo delle comunicazioni radio/wireless",
    wrongAnswers: ["Marmellata", "Musica", "Un virus"],
    hint: "Blocca il segnale.",
    explanation: "Il jamming consiste nell'emettere rumore elettronico per impedire la comunicazione wireless (es. bloccare allarmi o Wi-Fi)."
  },
  {
    id: 252,
    question: "Il simbolo @ nelle email separa:",
    correctAnswer: "Nome utente e nome dominio",
    wrongAnswers: ["Nome e Cognome", "Password e Login", "Niente"],
    hint: "utente@provider.com",
    explanation: "La chiocciola (@) significa 'presso' (at) e divide chi è l'utente da chi fornisce il servizio."
  },
  {
    id: 253,
    question: "Maiuscole/Minuscole (comando) serve a:",
    correctAnswer: "Cambiare il caso del testo selezionato",
    wrongAnswers: ["Ingrandire il font", "Cambiare colore", "Cancellare"],
    hint: "TUTTO MAIUSCOLO o tutto minuscolo.",
    explanation: "Questo comando converte il testo esistente senza doverlo riscrivere (es. da 'ciao' a 'CIAO')."
  },
  {
    id: 254,
    question: "Controllo ortografico segna errori con:",
    correctAnswer: "Ondulatura rossa",
    wrongAnswers: ["Ondulatura blu", "Evidenziatore giallo", "Cancellando la parola"],
    hint: "Sottolineatura rossa ondulata.",
    explanation: "Word sottolinea in rosso le parole non presenti nel dizionario (possibili errori di spelling)."
  },
  {
    id: 255,
    question: "Desktop è:",
    correctAnswer: "La scrivania virtuale (schermata principale)",
    wrongAnswers: ["Il mouse", "La tastiera", "La stampante"],
    hint: "Dove vedi lo sfondo e le icone appena accendi.",
    explanation: "Il Desktop è l'area di lavoro principale dell'interfaccia grafica di Windows."
  },
  {
    id: 256,
    question: "CSV sta per:",
    correctAnswer: "Comma Separated Values (valori separati da virgola)",
    wrongAnswers: ["Computer Super Veloce", "Cartella Senza Virus", "Codice Segreto"],
    hint: "File di testo semplice per tabelle.",
    explanation: "CSV è un formato file semplice per scambiare dati tabellari, dove ogni campo è separato da una virgola o punto e virgola."
  },
  {
    id: 257,
    question: "Formato Speciale in Excel serve per:",
    correctAnswer: "CAP, Codici Fiscali, Telefono",
    wrongAnswers: ["Testo colorato", "Formule magiche", "Grafici"],
    hint: "Dati con formati specifici standard.",
    explanation: "Excel offre formati predefiniti per tipi di dati comuni come numeri di telefono o codici postali."
  },
  {
    id: 258,
    question: "Ingegneria sociale (Social Engineering) è:",
    correctAnswer: "Manipolazione psicologica per ottenere dati riservati",
    wrongAnswers: ["Costruire ponti", "Programmare social network", "Riparare PC"],
    hint: "L'hacker inganna la persona, non il computer.",
    explanation: "Sfrutta la fiducia o l'ingenuità umana per farsi consegnare password o accessi, invece di usare attacchi tecnici."
  },
  {
    id: 259,
    question: "GDPR protegge:",
    correctAnswer: "I dati personali dei cittadini UE",
    wrongAnswers: ["I diritti d'autore", "I brevetti industriali", "I computer"],
    hint: "Regolamento Europeo sulla Privacy.",
    explanation: "Il General Data Protection Regulation è la normativa europea per la protezione dei dati e la privacy."
  },
  {
    id: 260,
    question: "Istogramma usa:",
    correctAnswer: "Colonne verticali per confrontare dati",
    wrongAnswers: ["Linee", "Punti", "Torte"],
    hint: "Grafico a barre verticali.",
    explanation: "L'istogramma è ideale per confrontare valori tra diverse categorie usando barre verticali."
  },
  {
    id: 261,
    question: "Errore #DIV/0!:",
    correctAnswer: "Divisione per zero o cella vuota",
    wrongAnswers: ["Errore di nome", "Errore di valore", "Tutto ok"],
    hint: "Non si può dividere per zero in matematica.",
    explanation: "Excel segnala che stai tentando di dividere un numero per 0 o per una cella vuota."
  },
  {
    id: 262,
    question: "Errore #NOME?:",
    correctAnswer: "Excel non riconosce il testo nella formula (es. nome funzione errato)",
    wrongAnswers: ["Cella vuota", "Divisione per zero", "Riferimento circolare"],
    hint: "Hai scritto male il nome della funzione (es. SOMAA invece di SOMMA).",
    explanation: "Appare quando Excel non riesce a identificare un nome usato nella formula, spesso per errori di battitura."
  },
  {
    id: 263,
    question: "Errore #RIF!:",
    correctAnswer: "Riferimento di cella non valido (es. cella eliminata)",
    wrongAnswers: ["Formula troppo lunga", "Numero troppo grande", "Errore di stampa"],
    hint: "La cella originale non esiste più.",
    explanation: "Appare quando una formula fa riferimento a una cella che è stata eliminata."
  },
  {
    id: 264,
    question: "Il pedice scrive:",
    correctAnswer: "Più in basso e più piccolo (es. H2O)",
    wrongAnswers: ["Più in alto", "Grassetto", "Sottolineato"],
    hint: "Sotto la riga.",
    explanation: "Il pedice posiziona il carattere leggermente sotto la linea di base del testo (usato in chimica)."
  },
  {
    id: 265,
    question: "L'apice scrive:",
    correctAnswer: "Più in alto e più piccolo (es. m2)",
    wrongAnswers: ["Più in basso", "Corsivo", "Barrato"],
    hint: "Sopra la riga (es. metri quadrati).",
    explanation: "L'apice posiziona il carattere leggermente sopra la linea del testo (usato per potenze o note)."
  },
  {
    id: 266,
    question: "Protocollo HTTPS vs HTTP:",
    correctAnswer: "HTTPS è criptato (sicuro), HTTP no",
    wrongAnswers: ["Sono uguali", "HTTP è più veloce", "HTTPS è per i video"],
    hint: "Guarda il lucchetto nel browser.",
    explanation: "HTTPS usa la crittografia SSL/TLS per proteggere i dati scambiati, fondamentale per home banking ed e-commerce."
  },
  {
    id: 267,
    question: "WPA2/WPA3 sono:",
    correctAnswer: "Protocolli di sicurezza per il Wi-Fi",
    wrongAnswers: ["Tipi di router", "Marche di antenne", "Virus"],
    hint: "Proteggono la tua rete wireless.",
    explanation: "Sono standard di crittografia che proteggono le reti Wi-Fi da accessi non autorizzati."
  },
  {
    id: 268,
    question: "Visualizzazione 'Struttura' in PowerPoint:",
    correctAnswer: "Mostra solo i titoli e il testo delle diapositive",
    wrongAnswers: ["Mostra le immagini", "Mostra l'anteprima", "Mostra i video"],
    hint: "Utile per controllare il flusso del testo.",
    explanation: "Questa vista si concentra sul contenuto testuale, nascondendo grafica e immagini."
  },
  {
    id: 269,
    question: "Tasto Stamp (Print Screen):",
    correctAnswer: "Copia l'immagine dello schermo negli appunti",
    wrongAnswers: ["Stampa su carta", "Spegne il monitor", "Apre la posta"],
    hint: "Fa uno screenshot.",
    explanation: "Cattura l'intera schermata corrente e la salva nella memoria temporanea (appunti) per incollarla altrove."
  },
  {
    id: 270,
    question: "VoIP consente:",
    correctAnswer: "Chiamate vocali tramite Internet",
    wrongAnswers: ["Solo chat", "Solo email", "Spedizione pacchi"],
    hint: "Voice over IP (es. Skype, WhatsApp chiamate).",
    explanation: "VoIP trasmette la voce come dati digitali su rete IP invece che sulle linee telefoniche tradizionali."
  },
  {
    id: 271,
    question: "Bordo pagina personalizzato:",
    correctAnswer: "Può essere applicato a tutto il documento o sezioni",
    wrongAnswers: ["Solo alla prima pagina", "Non esiste", "Solo rosso"],
    hint: "Cornice decorativa.",
    explanation: "Word permette di aggiungere bordi artistici o lineari alle pagine, scegliendo dove applicarli."
  },
  {
    id: 272,
    question: "Network Hijacking è:",
    correctAnswer: "Dirottamento della connessione verso siti malevoli",
    wrongAnswers: ["Rubare il cavo di rete", "Navigare veloce", "Social network"],
    hint: "Rapimento della rete.",
    explanation: "L'attaccante intercetta o reindirizza il traffico di rete dell'utente verso destinazioni controllate dall'hacker."
  },
  {
    id: 273,
    question: "Non ripudio significa:",
    correctAnswer: "Impossibilità di negare di aver compiuto un'azione (es. invio PEC)",
    wrongAnswers: ["Non accettare email", "Rifiutare un file", "Bloccare un utente"],
    hint: "Non puoi dire 'non sono stato io'.",
    explanation: "Nella sicurezza informatica, garantisce che il mittente non possa negare di aver inviato un messaggio (es. firma digitale)."
  },
  {
    id: 274,
    question: "Ripristino sistema serve a:",
    correctAnswer: "Riportare il computer a uno stato precedente funzionante",
    wrongAnswers: ["Formattare tutto", "Comprare un PC nuovo", "Cancellare i virus"],
    hint: "Torna indietro nel tempo.",
    explanation: "Annulla le modifiche recenti al sistema (driver, installazioni) senza toccare i file personali, per risolvere malfunzionamenti."
  },
  {
    id: 275,
    question: "Le immagini comunicano:",
    correctAnswer: "Spesso più efficacemente del testo",
    wrongAnswers: ["Sempre meno del testo", "Niente", "Solo colori"],
    hint: "Impatto visivo.",
    explanation: "Nelle presentazioni, le immagini catturano l'attenzione e spiegano concetti complessi meglio di muri di testo."
  },
  {
    id: 276,
    question: "Copia/Incolla tra fogli Excel:",
    correctAnswer: "Possibile",
    wrongAnswers: ["Impossibile", "Solo valori numerici", "Solo testo"],
    hint: "Funziona come nello stesso foglio.",
    explanation: "Puoi copiare dati da un foglio e incollarli in un altro, anche in cartelle di lavoro diverse."
  },
  {
    id: 277,
    question: "Selezionare righe non adiacenti:",
    correctAnswer: "Ctrl + Clic",
    wrongAnswers: ["Maiusc + Clic", "Alt + Clic", "Non si può"],
    hint: "Tasto Control per selezioni multiple separate.",
    explanation: "Tenendo premuto Ctrl puoi selezionare elementi sparsi (righe, celle, file) non vicini tra loro."
  },
  {
    id: 278,
    question: "Aggiungere un foglio Excel:",
    correctAnswer: "Pulsante + in basso",
    wrongAnswers: ["Menu File > Nuovo Foglio", "Non si può", "Solo con macro"],
    hint: "Accanto ai nomi dei fogli esistenti.",
    explanation: "Il pulsante '+' nella barra delle schede dei fogli crea immediatamente un nuovo foglio di lavoro vuoto."
  },
  {
    id: 279,
    question: "Icona ingranaggio (Gmail/Windows):",
    correctAnswer: "Impostazioni",
    wrongAnswers: ["Aiuto", "Profilo", "Esci"],
    hint: "Simbolo universale per le opzioni.",
    explanation: "L'ingranaggio rappresenta il menu di configurazione e impostazioni in quasi tutte le app moderne."
  },
  {
    id: 280,
    question: "Spam è:",
    correctAnswer: "Posta indesiderata / Pubblicità aggressiva",
    wrongAnswers: ["Posta importante", "Virus", "Chat"],
    hint: "Email spazzatura.",
    explanation: "Lo spam è l'invio massiccio di messaggi non richiesti, solitamente commerciali o truffaldini."
  },
  {
    id: 281,
    question: "Ccn (Copia Conoscenza Nascosta):",
    correctAnswer: "I destinatari non vedono gli altri indirizzi in Ccn",
    wrongAnswers: ["Tutti vedono tutto", "È uguale a Cc", "Copia per conoscenza normale"],
    hint: "Blind Carbon Copy (Bcc).",
    explanation: "Usare Ccn protegge la privacy dei destinatari, nascondendo i loro indirizzi agli altri riceventi."
  },
  {
    id: 282,
    question: "Cestino (Posta):",
    correctAnswer: "Dove vanno le mail eliminate (recuperabili per un po')",
    wrongAnswers: ["Dove vanno le mail inviate", "Dove vanno le bozze", "Eliminazione definitiva immediata"],
    hint: "Non vengono cancellate subito per sempre.",
    explanation: "Le email cancellate restano nel Cestino (solitamente per 30 giorni) prima di essere rimosse definitivamente."
  },
  {
    id: 283,
    question: "Firma automatica email:",
    correctAnswer: "Testo aggiunto in fondo a ogni mail inviata",
    wrongAnswers: ["Firma digitale legale", "Un allegato", "Un virus"],
    hint: "Saluti, Nome, Telefono.",
    explanation: "È un blocco di testo personalizzato (contatti, saluti) che il client di posta appende automaticamente ai messaggi."
  },
  {
    id: 284,
    question: "Risposta automatica (Fuori sede):",
    correctAnswer: "Invia una risposta preimpostata a chi ci scrive",
    wrongAnswers: ["Risponde a caso", "Cancella le mail", "Inoltra tutto"],
    hint: "Utile quando vai in ferie.",
    explanation: "Informa automaticamente chi ti scrive che non sei disponibile e quando tornerai."
  },
  {
    id: 285,
    question: "Allegato (Attachment):",
    correctAnswer: "File inviato insieme alla mail",
    wrongAnswers: ["Il testo della mail", "L'oggetto", "La firma"],
    hint: "Icona graffetta.",
    explanation: "Un allegato è un file (doc, pdf, jpg) spedito insieme al messaggio di posta elettronica."
  },
  {
    id: 286,
    question: "Sincronizzazione Chrome:",
    correctAnswer: "Salva preferiti, password e cronologia sull'account Google",
    wrongAnswers: ["Rallenta il browser", "Cancella tutto", "Non serve a nulla"],
    hint: "Per ritrovare tutto su un altro PC.",
    explanation: "La sincronizzazione permette di avere gli stessi dati di navigazione su tutti i dispositivi dove accedi con Chrome."
  },
  {
    id: 287,
    question: "Navigazione in incognito:",
    correctAnswer: "Non salva cronologia e cookie sul dispositivo locale",
    wrongAnswers: ["Ti rende invisibile ai siti", "Nasconde l'IP", "È una VPN"],
    hint: "Non lascia tracce SUL TUO computer.",
    explanation: "In incognito, il browser non memorizza cronologia, cookie o dati dei moduli, ma non ti rende anonimo ai siti o al provider."
  },
  {
    id: 288,
    question: "Pagina iniziale browser:",
    correctAnswer: "La pagina che si apre all'avvio",
    wrongAnswers: ["L'ultima visitata", "Google per forza", "Una pagina vuota"],
    hint: "Home page.",
    explanation: "È l'URL impostato per caricarsi automaticamente ogni volta che apri il browser."
  },
  {
    id: 289,
    question: "Scaricare allegati:",
    correctAnswer: "Icona freccia verso il basso o 'Scarica'",
    wrongAnswers: ["Icona cestino", "Icona stampa", "Non si possono scaricare"],
    hint: "Download.",
    explanation: "Per salvare un file ricevuto via mail sul tuo computer devi usare la funzione di download (scarica)."
  },
  {
    id: 290,
    question: "Google Meet Layout 'Mosaico':",
    correctAnswer: "Mostra tanti partecipanti in una griglia",
    wrongAnswers: ["Mostra solo chi parla", "Mostra solo lo schermo", "Nero"],
    hint: "Tante facce insieme.",
    explanation: "La vista a mosaico (Tile view) permette di vedere contemporaneamente i video di molti partecipanti."
  },
  {
    id: 291,
    question: "Licenze Creative Commons:",
    correctAnswer: "Permettono l'uso di opere a certe condizioni (es. citare fonte)",
    wrongAnswers: ["Vietano tutto", "Tutto libero senza regole", "Solo a pagamento"],
    hint: "Alcuni diritti riservati.",
    explanation: "Sono licenze flessibili che permettono agli autori di condividere le opere definendo come possono essere usate (es. attribuzione richiesta)."
  },
  {
    id: 292,
    question: "Contrasto schermo (Accessibilità):",
    correctAnswer: "Aiuta chi ha problemi di vista",
    wrongAnswers: ["Consuma più batteria", "Serve per i giochi", "Non serve"],
    hint: "Contrasto elevato.",
    explanation: "Le opzioni di contrasto elevato rendono testo e bordi più distinti per facilitare la lettura a chi ha disabilità visive."
  },
  {
    id: 293,
    question: "Screen Reader:",
    correctAnswer: "Legge ad alta voce il contenuto dello schermo (per non vedenti)",
    wrongAnswers: ["Registra lo schermo", "Pulisce lo schermo", "Legge i libri cartacei"],
    hint: "Lettore schermo.",
    explanation: "Software assistivo che trasforma il testo e gli elementi dell'interfaccia in sintesi vocale o output Braille."
  },
  {
    id: 294,
    question: "Compressione file (ZIP):",
    correctAnswer: "Riduce la dimensione e raggruppa file",
    wrongAnswers: ["Cancella i file", "Protegge con password per forza", "Rovina la qualità"],
    hint: "Come una valigia pressata.",
    explanation: "La compressione riduce lo spazio occupato su disco e facilita l'invio di più file come un unico archivio."
  },
  {
    id: 295,
    question: "Barra delle applicazioni (Taskbar):",
    correctAnswer: "Barra in basso con Start e icone programmi",
    wrongAnswers: ["La barra del titolo", "La barra dei menu", "Il desktop"],
    hint: "Dove vedi l'orologio e le app aperte.",
    explanation: "È l'elemento fondamentale dell'interfaccia Windows per lanciare programmi e passare da una finestra all'altra."
  },
  {
    id: 296,
    question: "Selezionare tutto (shortcut):",
    correctAnswer: "Ctrl + A",
    wrongAnswers: ["Ctrl + S", "Ctrl + T", "Ctrl + Z"],
    hint: "A = All (Tutto).",
    explanation: "Ctrl + A seleziona l'intero contenuto della cartella o del documento attivo."
  },
  {
    id: 297,
    question: "Annulla (shortcut):",
    correctAnswer: "Ctrl + Z",
    wrongAnswers: ["Ctrl + Y", "Ctrl + A", "Ctrl + C"],
    hint: "Torna indietro.",
    explanation: "Ctrl + Z annulla l'ultima azione eseguita (scrittura, cancellazione, spostamento)."
  },
  {
    id: 298,
    question: "Ripeti/Ripristina (shortcut):",
    correctAnswer: "Ctrl + Y",
    wrongAnswers: ["Ctrl + Z", "Ctrl + R", "Ctrl + P"],
    hint: "Opposto di Annulla.",
    explanation: "Ctrl + Y ripete l'azione annullata con Ctrl + Z."
  },
  {
    id: 299,
    question: "Chiudere finestra attiva (shortcut):",
    correctAnswer: "Alt + F4",
    wrongAnswers: ["Ctrl + F4", "Esc", "Invio"],
    hint: "Chiude il programma.",
    explanation: "Alt + F4 è il comando standard di Windows per chiudere l'applicazione corrente."
  },
  {
    id: 300,
    question: "Bloccare il computer (shortcut):",
    correctAnswer: "Win + L",
    wrongAnswers: ["Ctrl + Alt + Canc", "Win + B", "Esc"],
    hint: "L = Lock (Blocca).",
    explanation: "Tasto Windows + L blocca immediatamente la sessione, richiedendo la password per rientrare."
  },
  {
    id: 301,
    question: "A cosa serve la finestra Esplora file di Windows 11?",
    correctAnswer: "Permette di accedere ai file racchiusi nelle singole unità del computer",
    wrongAnswers: ["Permette di navigare su internet", "Serve solo per trovare immagini", "È un antivirus di sistema"],
    hint: "Cartella gialla sulla barra applicazioni.",
    explanation: "Esplora File gestisce la navigazione tra cartelle, dischi e file del sistema operativo."
  },
  {
    id: 302,
    question: "In una diapositiva, se selezioniamo un oggetto e scegliamo 'Porta in primo piano', dove viene spostato?",
    correctAnswer: "Sul livello 1",
    wrongAnswers: ["Sul livello di fondo", "Viene nascosto", "Viene cancellato"],
    hint: "Davanti a tutto.",
    explanation: "L'ordine di sovrapposizione (Z-order) determina quale oggetto copre gli altri; il primo piano è il livello più alto."
  },
  {
    id: 303,
    question: "All’interno di un intervallo Excel, la cella con lo sfondo bianco è:",
    correctAnswer: "la cella da cui ha avuto inizio la selezione",
    wrongAnswers: ["la cella attiva vuota", "una cella protetta", "una cella con errore"],
    hint: "La cella attiva nella selezione.",
    explanation: "Quando selezioni più celle, quella da cui sei partito rimane bianca per indicare che è quella attiva per l'inserimento dati."
  },
  {
    id: 304,
    question: "L'opzione 'Immagini online' in Word permette di:",
    correctAnswer: "cercare immagini da aggiungere al documento direttamente dal Web",
    wrongAnswers: ["modificare le immagini del PC", "creare disegni a mano libera", "cercare foto solo su OneDrive"],
    hint: "Ricerca Bing integrata.",
    explanation: "Permette di trovare immagini con licenza Creative Commons direttamente dall'interfaccia di Word."
  },
  {
    id: 305,
    question: "Che cosa accade se applichi a un numero il formato Percentuale in Excel?",
    correctAnswer: "Excel moltiplica per cento il numero e aggiunge il simbolo %",
    wrongAnswers: ["Excel divide per cento il numero", "Il numero diventa rosso", "Aggiunge solo il simbolo senza calcoli"],
    hint: "Moltiplica per 100.",
    explanation: "La formattazione percentuale converte il decimale (es. 0.1) in percentuale (10%)."
  },
  {
    id: 306,
    question: "Come aggiungere altro testo in una diapositiva PowerPoint?",
    correctAnswer: "Fai clic nel punto di inserimento e digita i nuovi caratteri",
    wrongAnswers: ["Devi creare una nuova diapositiva", "Usi il comando 'Nuovo Testo' dal menu file", "Non si può aggiungere testo dopo la creazione"],
    hint: "Clicca e scrivi.",
    explanation: "Le caselle di testo in PowerPoint sono editabili cliccandoci sopra."
  },
  {
    id: 307,
    question: "Che cosa mostra il pannello diapositive in PowerPoint?",
    correctAnswer: "Le miniature delle diapositive che compongono la presentazione",
    wrongAnswers: ["Solo il testo delle slide", "Le note del relatore", "I commenti dei revisori"],
    hint: "Colonna di sinistra.",
    explanation: "Serve per navigare tra le slide e riordinarle trascinandole."
  },
  {
    id: 308,
    question: "Cosa sono i “software di produttività personale”?",
    correctAnswer: "Programmi per soddisfare le più comuni necessità di lavoro d'ufficio",
    wrongAnswers: ["Videogiochi", "Sistemi operativi server", "Driver hardware"],
    hint: "Office suite.",
    explanation: "Software come elaboratori di testo, fogli di calcolo e presentazioni."
  },
  {
    id: 309,
    question: "L'opzione 'Stampa fogli attivi' in Excel permette di:",
    correctAnswer: "stampare soltanto il foglio di lavoro selezionato in quel momento",
    wrongAnswers: ["stampare tutti i fogli della cartella", "stampare solo l'area selezionata", "stampare un grafico"],
    hint: "Non stampa gli altri fogli nascosti o non selezionati.",
    explanation: "È l'impostazione predefinita per evitare di stampare intere cartelle di lavoro piene di dati non necessari."
  },
  {
    id: 310,
    question: "Che cos’è il Wi-Fi?",
    correctAnswer: "Tecnologia per connettere dispositivi in rete locale senza cavi",
    wrongAnswers: ["Un tipo di cavo Ethernet", "Un software antivirus", "Un marchio di computer"],
    hint: "Onde radio.",
    explanation: "Standard per la comunicazione wireless di reti locali (WLAN)."
  },
  {
    id: 311,
    question: "Che cos’è il “Social network poisoning”?",
    correctAnswer: "Una minaccia volta a creare profili artefatti e relazioni inesistenti sui social",
    wrongAnswers: ["Un virus che spegne il PC", "Un errore di connessione", "Una tecnica di pulizia del profilo"],
    hint: "Avvelenamento dei dati sociali.",
    explanation: "Tecnica usata per manipolare algoritmi o reputazione creando account falsi."
  },
  {
    id: 312,
    question: "Che cos’è l’interlinea?",
    correctAnswer: "È la distanza tra una riga di testo e la successiva",
    wrongAnswers: ["La distanza tra le parole", "Lo spazio tra i caratteri", "I margini della pagina"],
    hint: "Spazio verticale.",
    explanation: "Determina l'ariosità del paragrafo; interlinea singola, 1.5 o doppia sono comuni."
  },
  {
    id: 313,
    question: "Che cos’è l’Uniform Resource Locator (URL)?",
    correctAnswer: "La combinazione di caratteri che identifica una risorsa web",
    wrongAnswers: ["Un codice segreto", "Il nome del provider", "Un indirizzo email"],
    hint: "Indirizzo web.",
    explanation: "È la stringa univoca che permette di trovare un sito o un file su internet."
  },
  {
    id: 314,
    question: "Che cos’è un account?",
    correctAnswer: "È un ambiente online personalizzato",
    wrongAnswers: ["Un documento di testo", "Una cartella del PC", "Un tipo di computer"],
    hint: "La tua area privata.",
    explanation: "L'account permette l'accesso autenticato a servizi e configurazioni personali."
  },
  {
    id: 315,
    question: "Che cos’è “Internet”?",
    correctAnswer: "La rete informatica mondiale che collega dispositivi",
    wrongAnswers: ["Un programma di Google", "Un sistema operativo", "Un cavo sottomarino"],
    hint: "World Wide Web è una parte di esso.",
    explanation: "Internet è l'infrastruttura globale di reti che connette computer in tutto il mondo."
  },
  {
    id: 316,
    question: "Come si chiama il documento base della stampa unione?",
    correctAnswer: "Testo principale",
    wrongAnswers: ["Origine dati", "Documento finale", "Anteprima di stampa"],
    hint: "Il modello della lettera.",
    explanation: "È il documento che contiene le parti fisse e i campi unione che verranno sostituiti dai dati."
  },
  {
    id: 317,
    question: "Per eliminare un account Google, il primo passo è:",
    correctAnswer: "Accedere all’Account Google e selezionare Dati e Privacy",
    wrongAnswers: ["Disinstallare Chrome", "Formattare il PC", "Inviare una mail a Google"],
    hint: "Gestione Account.",
    explanation: "Le opzioni di cancellazione si trovano nelle impostazioni della privacy dell'account."
  },
  {
    id: 318,
    question: "Il riempimento automatico in Excel può generare sequenze di date?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo se sono numeri", "Solo nei giorni feriali"],
    hint: "Serie cronologiche.",
    explanation: "Excel incrementa automaticamente le date trascinando la maniglia di riempimento."
  },
  {
    id: 319,
    question: "La licenza d’uso dei software concede a terzi:",
    correctAnswer: "il permesso di utilizzare il software",
    wrongAnswers: ["la proprietà del codice", "il diritto di rivenderlo", "il copyright completo"],
    hint: "Licenza d'uso, non vendita.",
    explanation: "L'utente acquista il diritto di usare il software, non il software stesso."
  },
  {
    id: 320,
    question: "La licenza Open Source concede:",
    correctAnswer: "la possibilità di studiare, modificare e distribuire il software",
    wrongAnswers: ["solo l'uso gratuito", "nessun diritto", "solo la lettura del manuale"],
    hint: "Libertà software.",
    explanation: "Permette l'accesso al codice sorgente per migliorarlo o adattarlo."
  },
  {
    id: 321,
    question: "La sincronizzazione dei dati permette di:",
    correctAnswer: "rendere i dati disponibili su tutti i dispositivi collegati allo stesso account",
    wrongAnswers: ["cancellare i dati vecchi", "fare un backup su CD", "criptare i dati"],
    hint: "Cloud sync.",
    explanation: "Mantiene i file aggiornati ovunque, indipendentemente dal dispositivo usato."
  },
  {
    id: 322,
    question: "È possibile usare Google Chrome su un dispositivo Apple?",
    correctAnswer: "Sì, scaricandolo e installandolo",
    wrongAnswers: ["No, solo Safari funziona", "Sì, ma a pagamento", "No, è incompatibile"],
    hint: "È compatibile con iOS e macOS.",
    explanation: "Chrome è disponibile su App Store e sito Google per dispositivi Apple."
  },
  {
    id: 323,
    question: "Selezionando il pulsante Zoom in Word:",
    correctAnswer: "Si apre una finestra per scegliere la percentuale di ingrandimento",
    wrongAnswers: ["Si chiude il documento", "Si stampa la pagina", "Si attiva la lettura vocale"],
    hint: "Impostazione ingrandimento.",
    explanation: "Permette di impostare un valore preciso di zoom diverso dallo slider."
  },
  {
    id: 324,
    question: "Cosa mostra la “Barra del Titolo”?",
    correctAnswer: "Il titolo che è stato dato al documento",
    wrongAnswers: ["I menu del programma", "La barra di stato", "Le icone di avvio rapido"],
    hint: "In alto al centro.",
    explanation: "Visualizza il nome del file corrente."
  },
  {
    id: 325,
    question: "Cosa sono gli “antivirus”?",
    correctAnswer: "Programmi specifici che rilevano ed eliminano i malware",
    wrongAnswers: ["Virus benefici", "Programmi per disegnare", "Sistemi operativi"],
    hint: "Sicurezza PC.",
    explanation: "Software progettati per prevenire, rilevare e rimuovere software malevolo."
  },
  {
    id: 326,
    question: "Cosa sono gli “Organigrammi”?",
    correctAnswer: "Grafici per rappresentare strutture logiche e organizzative",
    wrongAnswers: ["Disegni a mano libera", "Foto di organi", "Tabelle numeriche"],
    hint: "Alberi gerarchici.",
    explanation: "Rappresentano visivamente le relazioni gerarchiche in un'azienda o ente."
  },
  {
    id: 327,
    question: "Cosa sono i malware?",
    correctAnswer: "Software dannosi creati per sottrarre dati o danneggiare sistemi",
    wrongAnswers: ["Hardware difettosi", "Errori dell'utente", "Programmi antivirus"],
    hint: "Virus, Trojan, Spyware.",
    explanation: "Termine ombrello per qualsiasi software progettato per causare danni."
  },
  {
    id: 328,
    question: "Cosa sono i popup?",
    correctAnswer: "Finestre che compaiono automaticamente durante la navigazione",
    wrongAnswers: ["Menu a tendina", "Icone del desktop", "Tasti della tastiera"],
    hint: "Finestre a comparsa.",
    explanation: "Spesso usati per pubblicità o avvisi, si aprono sopra la finestra principale."
  },
  {
    id: 329,
    question: "Cosa sono le app store?",
    correctAnswer: "Negozi virtuali per scaricare applicazioni",
    wrongAnswers: ["Negozi di computer fisici", "Archivi di documenti", "Cartelle di sistema"],
    hint: "Marketplace digitale.",
    explanation: "Piattaforme centralizzate per la distribuzione di software mobile e desktop."
  },
  {
    id: 330,
    question: "Cosa sono le scorciatoie (link)?",
    correctAnswer: "Collegamenti rapidi per raggiungere file o siti web",
    wrongAnswers: ["Errori di sistema", "File cancellati", "Programmi lenti"],
    hint: "Icone con freccia.",
    explanation: "Puntatori che rimandano a file o posizioni originali."
  },
  {
    id: 331,
    question: "Cosa sono le SmartArt?",
    correctAnswer: "Elementi grafici predefiniti per creare elenchi e diagrammi",
    wrongAnswers: ["Disegni intelligenti artificiali", "Foto ad alta risoluzione", "Video incorporati"],
    hint: "Grafica aziendale Office.",
    explanation: "Strumento per creare grafici di processi, cicli e liste visivamente accattivanti."
  },
  {
    id: 332,
    question: "Cosa succede ai file in quarantena?",
    correctAnswer: "Vengono isolati in una sezione speciale",
    wrongAnswers: ["Vengono cancellati subito", "Vengono inviati a Microsoft", "Diventano file di testo"],
    hint: "Bloccati.",
    explanation: "L'antivirus impedisce l'esecuzione di questi file per proteggere il sistema."
  },
  {
    id: 333,
    question: "La Stampa Unione serve a:",
    correctAnswer: "Creare documenti personalizzati per ogni destinatario",
    wrongAnswers: ["Stampare più pagine in una", "Unire due stampanti", "Stampare foto"],
    hint: "Lettere di massa.",
    explanation: "Combina un documento standard con una lista di dati variabili."
  },
  {
    id: 334,
    question: "Cos’è il segno grafico (gesto) su mobile?",
    correctAnswer: "Un movimento da compiere sullo schermo per sbloccare il dispositivo",
    wrongAnswers: ["Un disegno fatto con la penna", "Un'emoji", "Un errore grafico"],
    hint: "Pattern di sblocco.",
    explanation: "Tracciare una sequenza di linee tra punti predefiniti per autenticarsi."
  },
  {
    id: 335,
    question: "Cos’è un account utente?",
    correctAnswer: "Un profilo personale che consente l'accesso a un sistema",
    wrongAnswers: ["Un conto bancario", "Un file di testo", "Una cartella condivisa"],
    hint: "Login personale.",
    explanation: "Identità digitale che racchiude permessi e impostazioni dell'utente."
  },
  {
    id: 336,
    question: "Cos’è un ambiente di apprendimento online?",
    correctAnswer: "Una piattaforma telematica per la didattica a distanza",
    wrongAnswers: ["Una scuola fisica", "Un libro digitale", "Un video su YouTube"],
    hint: "E-learning.",
    explanation: "Software che gestisce corsi, studenti e materiali didattici via web."
  },
  {
    id: 337,
    question: "Creare un collegamento ipertestuale significa:",
    correctAnswer: "collegare un oggetto/testo a una pagina Web o un altro file",
    wrongAnswers: ["copiare il testo", "sottolineare il testo", "cancellare il link"],
    hint: "Inserire link.",
    explanation: "Rende un elemento cliccabile per navigare verso un'altra destinazione."
  },
  {
    id: 338,
    question: "Da cosa dipende principalmente la qualità di una rete?",
    correctAnswer: "Dalla velocità di trasmissione dei dati e dalla stabilità",
    wrongAnswers: ["Dal colore dei cavi", "Dalla marca del router", "Dal numero di tasti"],
    hint: "Bandwidth e uptime.",
    explanation: "Fattori chiave sono la larghezza di banda e l'affidabilità della connessione."
  },
  {
    id: 339,
    question: "Da quale scheda di Excel si apre una cartella di lavoro?",
    correctAnswer: "File",
    wrongAnswers: ["Home", "Inserisci", "Dati"],
    hint: "Menu principale.",
    explanation: "La scheda File (Backstage) gestisce apertura, salvataggio e stampa."
  },
  {
    id: 340,
    question: "Quale scheda gestisce lo stile dei caratteri in Office?",
    correctAnswer: "Home",
    wrongAnswers: ["File", "Layout", "Visualizza"],
    hint: "Scheda di base.",
    explanation: "Contiene i comandi di formattazione più frequenti come Font e Paragrafo."
  },
  {
    id: 341,
    question: "Quale azione NON puoi fare dal pulsante Elementi Grafico in Excel?",
    correctAnswer: "Aggiungere un nuovo grafico",
    wrongAnswers: ["Aggiungere titoli degli assi", "Aggiungere etichette dati", "Aggiungere legenda"],
    hint: "Modifica solo l'esistente.",
    explanation: "Il pulsante '+' sul grafico serve a mostrare/nascondere elementi interni, non per crearne uno nuovo."
  },
  {
    id: 342,
    question: "Come si imposta lo zoom in Excel dalla barra multifunzione?",
    correctAnswer: "Scheda Visualizza > Gruppo Zoom > Pulsante Zoom",
    wrongAnswers: ["Scheda Home > Zoom", "Scheda Dati > Zoom", "Tasto destro > Zoom"],
    hint: "Vista foglio.",
    explanation: "I controlli di visualizzazione sono raggruppati nella scheda Visualizza."
  },
  {
    id: 343,
    question: "Come formattare le celle dalla barra multifunzione?",
    correctAnswer: "Scheda Home > Gruppo Celle > Formato",
    wrongAnswers: ["Scheda Inserisci > Formato", "Scheda Dati > Formato", "Menu File > Formatta"],
    hint: "Gestione dimensioni e protezione.",
    explanation: "Il menu Formato permette di regolare righe, colonne e proprietà delle celle."
  },
  {
    id: 344,
    question: "Quale pulsante attiva la ricerca (Trova) in Excel?",
    correctAnswer: "Trova e seleziona",
    wrongAnswers: ["Cerca", "Lente", "Menu File > Cerca"],
    hint: "Binocolo/Lente in Home.",
    explanation: "Comando per cercare testo o numeri nel foglio."
  },
  {
    id: 345,
    question: "La scheda File permette di:",
    correctAnswer: "accedere ai comandi base (Nuovo, Apri, Salva)",
    wrongAnswers: ["modificare il testo", "inserire immagini", "cambiare il layout"],
    hint: "Operazioni sul file.",
    explanation: "Gestisce il ciclo di vita del documento."
  },
  {
    id: 346,
    question: "Come nascondere la barra di accesso rapido?",
    correctAnswer: "Opzioni visualizzazione barra multifunzione > Nascondi barra di accesso rapido",
    wrongAnswers: ["Non si può nascondere", "Tasto Canc", "Chiudendo Word"],
    hint: "Dal menu a tendina.",
    explanation: "È possibile personalizzare la visibilità della Quick Access Toolbar."
  },
  {
    id: 347,
    question: "Da cosa dipende l’aspetto visivo dei dati (formattazione)?",
    correctAnswer: "Dalle impostazioni di carattere, colore, bordo e riempimento",
    wrongAnswers: ["Solo dal contenuto", "Dalla velocità del PC", "Dal nome del file"],
    hint: "Stile cella.",
    explanation: "La formattazione cambia come i dati appaiono, non il loro valore."
  },
  {
    id: 348,
    question: "La funzione 'Trova il mio dispositivo' serve a:",
    correctAnswer: "localizzare geograficamente i dispositivi",
    wrongAnswers: ["trovare file persi", "cercare su Google", "trovare driver mancanti"],
    hint: "Anti-smarrimento.",
    explanation: "Servizio per rintracciare hardware smarrito o rubato."
  },
  {
    id: 349,
    question: "Come rinominare un calendario in Google Calendar?",
    correctAnswer: "Impostazioni e condivisione",
    wrongAnswers: ["Doppio clic sul calendario", "Tasto destro > Rinomina", "Non si può rinominare"],
    hint: "Menu impostazioni calendario.",
    explanation: "Il nome si modifica nei dettagli delle impostazioni del singolo calendario."
  },
  {
    id: 350,
    question: "Quale tasto conferma l'inserimento dati in una cella Excel?",
    correctAnswer: "Invio",
    wrongAnswers: ["Esc", "Backspace", "Space"],
    hint: "Enter.",
    explanation: "Conferma il valore e sposta la selezione."
  },
  {
    id: 351,
    question: "Come creare un nuovo calendario in Google?",
    correctAnswer: "Clic sul '+' accanto ad Altri calendari",
    wrongAnswers: ["Menu File > Nuovo", "Tasto destro sul giorno", "Non è possibile"],
    hint: "Aggiungi calendario.",
    explanation: "Pulsante specifico nella barra laterale per creare calendari secondari."
  },
  {
    id: 352,
    question: "Quale gruppo comandi permette di formattare il titolo di un grafico?",
    correctAnswer: "Carattere",
    wrongAnswers: ["Paragrafo", "Stili", "Modifica"],
    hint: "È testo.",
    explanation: "Si usano i normali strumenti di formattazione testo."
  },
  {
    id: 353,
    question: "Cosa accade inserendo un grafico in PowerPoint?",
    correctAnswer: "Si apre un foglio Excel",
    wrongAnswers: ["Si apre Paint", "Si apre Word", "Si apre una pagina web"],
    hint: "Per i dati.",
    explanation: "PowerPoint usa Excel per gestire i dati numerici del grafico."
  },
  {
    id: 354,
    question: "Quale scheda appare selezionando una forma?",
    correctAnswer: "Formato forma",
    wrongAnswers: ["Struttura tabella", "Progettazione", "Visualizza"],
    hint: "Scheda contestuale.",
    explanation: "Contiene strumenti specifici per l'oggetto selezionato."
  },
  {
    id: 355,
    question: "L'effetto 'Ombreggiatura' fa parte di:",
    correctAnswer: "Effetti forma",
    wrongAnswers: ["Contorno forma", "Riempimento forma", "Layout pagina"],
    hint: "Non è riempimento.",
    explanation: "È un effetto visivo applicato alla forma."
  },
  {
    id: 356,
    question: "Per disegnare un cerchio perfetto con lo strumento Ovale:",
    correctAnswer: "Tieni premuto il tasto Maiusc",
    wrongAnswers: ["Tieni premuto Ctrl", "Tieni premuto Alt", "Fai doppio clic"],
    hint: "Vincola proporzioni.",
    explanation: "Maiusc forza altezza e larghezza uguali."
  },
  {
    id: 357,
    question: "Per ridimensionare la larghezza di un oggetto, usi le maniglie:",
    correctAnswer: "sui lati destro e sinistro",
    wrongAnswers: ["sui lati superiore e inferiore", "agli angoli", "al centro"],
    hint: "Maniglie orizzontali.",
    explanation: "Modificano solo la dimensione orizzontale."
  },
  {
    id: 358,
    question: "Per ridimensionare l'altezza di un oggetto, usi le maniglie:",
    correctAnswer: "sui lati superiore e inferiore",
    wrongAnswers: ["sui lati destro e sinistro", "agli angoli", "al centro"],
    hint: "Maniglie verticali.",
    explanation: "Modificano solo la dimensione verticale."
  },
  {
    id: 359,
    question: "Per ridimensionare proporzionalmente un oggetto, usi le maniglie:",
    correctAnswer: "ai quattro angoli",
    wrongAnswers: ["ai lati", "al centro", "in alto"],
    hint: "Angolari.",
    explanation: "Permettono di scalare l'oggetto mantenendo l'aspetto."
  },
  {
    id: 360,
    question: "Si può eliminare un grafico con il tasto Canc?",
    correctAnswer: "Sì, è possibile",
    wrongAnswers: ["No, serve il tasto destro", "No, bisogna usare la gomma", "Solo se è vuoto"],
    hint: "Tasto Delete.",
    explanation: "Il tasto Canc rimuove l'oggetto selezionato."
  },
  {
    id: 361,
    question: "Per spostarsi alla cella a destra si usa:",
    correctAnswer: "Tab",
    wrongAnswers: ["Invio", "Maiusc", "Alt"],
    hint: "Tabulazione.",
    explanation: "Tab sposta il focus orizzontalmente."
  },
  {
    id: 362,
    question: "Il comando 'Sostituisci tutto':",
    correctAnswer: "sostituisce tutte le occorrenze trovate",
    wrongAnswers: ["sostituisce una alla volta", "chiede conferma per ogni parola", "cancella tutto"],
    hint: "Sostituzione massiva.",
    explanation: "Cambia tutte le istanze del testo cercato in un colpo solo."
  },
  {
    id: 363,
    question: "Dove viene inserita un'immagine nel documento?",
    correctAnswer: "Nel punto di inserimento",
    wrongAnswers: ["Sempre all'inizio", "Sempre alla fine", "Al centro della pagina"],
    hint: "Dove c'è il cursore.",
    explanation: "L'immagine appare nella posizione attuale del cursore."
  },
  {
    id: 364,
    question: "Dove sono ospitati fisicamente i siti web?",
    correctAnswer: "Presso un ISP (Internet Service Provider)",
    wrongAnswers: ["Nel cloud", "Sui router", "Sui cavi"],
    hint: "Server farm.",
    explanation: "Su server gestiti da provider di hosting."
  },
  {
    id: 365,
    question: "La finestra 'Conteggio Parole' si apre dalla:",
    correctAnswer: "Barra di stato",
    wrongAnswers: ["Scheda Home", "Scheda Inserisci", "Menu File"],
    hint: "Clicca sul numero parole in basso.",
    explanation: "Accesso rapido alle statistiche del documento."
  },
  {
    id: 366,
    question: "Dropbox è un esempio di:",
    correctAnswer: "Cloud Storage",
    wrongAnswers: ["Social Network", "Browser", "Sistema Operativo"],
    hint: "Archiviazione online.",
    explanation: "Servizio per salvare e sincronizzare file nel cloud."
  },
  {
    id: 367,
    question: "Per andare a capo in un elenco senza nuovo punto elenco:",
    correctAnswer: "Maiusc + Invio",
    wrongAnswers: ["Ctrl + Invio", "Alt + Invio", "Tab"],
    hint: "A capo manuale.",
    explanation: "Crea una nuova riga nello stesso paragrafo/punto elenco."
  },
  {
    id: 368,
    question: "Si possono personalizzare i singoli documenti nella stampa unione?",
    correctAnswer: "Sì, selezionando Modifica singole lettere",
    wrongAnswers: ["No, sono tutti uguali", "Solo il primo", "Solo l'ultimo"],
    hint: "Genera documento finale.",
    explanation: "Crea un documento Word con tutte le lettere che possono essere editate."
  },
  {
    id: 369,
    question: "È consigliato usare molte icone nei testi formali?",
    correctAnswer: "Falso",
    wrongAnswers: ["Vero", "Dipende dal colore", "Sempre"],
    hint: "Sobrietà.",
    explanation: "I documenti formali richiedono uno stile professionale e pulito."
  },
  {
    id: 370,
    question: "Bisogna controllare la privacy sui social?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso, è automatica", "Solo all'iscrizione", "Non serve a nulla"],
    hint: "Gestione dati.",
    explanation: "È importante verificare chi può vedere i tuoi contenuti."
  },
  {
    id: 371,
    question: "Le risorse condivise in rete sono accessibili:",
    correctAnswer: "da qualsiasi luogo",
    wrongAnswers: ["solo dall'ufficio", "solo se il PC è acceso", "solo via cavo"],
    hint: "Accesso remoto.",
    explanation: "Se connesse a internet, le risorse cloud sono accessibili ovunque."
  },
  {
    id: 372,
    question: "Si possono applicare più animazioni allo stesso oggetto?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, solo una", "Solo due", "Dipende dalla versione"],
    hint: "Aggiungi animazione.",
    explanation: "È possibile combinare più effetti su un singolo elemento."
  },
  {
    id: 373,
    question: "Si può cambiare il layout di una sola diapositiva?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, cambia per tutte", "Solo creando una nuova presentazione", "Bisogna cancellarla"],
    hint: "Layout individuale.",
    explanation: "Ogni diapositiva può avere un layout diverso dalle altre."
  },
  {
    id: 374,
    question: "Si può connettere un dispositivo a Internet senza Wi-Fi?",
    correctAnswer: "Sì, tramite rete mobile",
    wrongAnswers: ["No, serve per forza il Wi-Fi", "Solo col Bluetooth", "Solo via satellite"],
    hint: "Dati cellulare.",
    explanation: "Usando la rete 4G/5G o cavo Ethernet."
  },
  {
    id: 375,
    question: "Si possono creare cartelle nella posta elettronica?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo in Gmail", "Solo su Outlook"],
    hint: "Organizzazione.",
    explanation: "Per archiviare le email in modo ordinato."
  },
  {
    id: 376,
    question: "Si può eliminare un contatto dalla rubrica email?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo se bloccato", "Solo se non ha mai scritto"],
    hint: "Gestione contatti.",
    explanation: "La rubrica è completamente modificabile dall'utente."
  },
  {
    id: 377,
    question: "Si possono inserire modelli 3D in PowerPoint?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, solo immagini 2D", "Solo video", "Serve un plugin"],
    hint: "Oggetti tridimensionali.",
    explanation: "Supporto nativo per modelli 3D ruotabili."
  },
  {
    id: 378,
    question: "La data nel piè di pagina può aggiornarsi da sola?",
    correctAnswer: "Sì, è possibile",
    wrongAnswers: ["No, va scritta a mano ogni volta", "Solo se il PC è online", "Dipende dalla stampante"],
    hint: "Aggiorna automaticamente.",
    explanation: "Inserendo il campo data dinamico."
  },
  {
    id: 379,
    question: "Per inserire un'immagine in una diapositiva:",
    correctAnswer: "Il file deve essere disponibile",
    wrongAnswers: ["Bisogna disegnarla", "Serve una webcam", "Deve essere in formato BMP"],
    hint: "Sorgente file.",
    explanation: "Bisogna avere accesso al file immagine da inserire."
  },
  {
    id: 380,
    question: "Si può cambiare il Tema dopo aver creato la presentazione?",
    correctAnswer: "Sì, tramite Progettazione",
    wrongAnswers: ["No, bisogna rifarla", "Solo i colori, non i font", "Solo nella prima slide"],
    hint: "Cambio stile.",
    explanation: "Il tema può essere cambiato in qualsiasi momento aggiornando tutte le slide."
  },
  {
    id: 381,
    question: "Si possono modificare le dimensioni di un grafico?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo la larghezza", "Solo l'altezza"],
    hint: "Ridimensionamento.",
    explanation: "I grafici sono oggetti ridimensionabili."
  },
  {
    id: 382,
    question: "Si può personalizzare la barra di accesso rapido?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, è fissa", "Solo il colore", "Solo in Excel"],
    hint: "Aggiungi comandi.",
    explanation: "Per avere i comandi preferiti sempre visibili."
  },
  {
    id: 383,
    question: "Come fare il backup di Windows?",
    correctAnswer: "Pannello di controllo > Backup e ripristino",
    wrongAnswers: ["Copia e Incolla tutto", "Non esiste il backup", "Solo con programmi esterni"],
    hint: "Strumento di sistema.",
    explanation: "Funzione integrata per la copia di sicurezza."
  },
  {
    id: 384,
    question: "Per salvare su OneDrive serve:",
    correctAnswer: "Essere loggati all'account Microsoft",
    wrongAnswers: ["Un abbonamento a pagamento", "Un cavo USB", "Essere amministratori"],
    hint: "Autenticazione.",
    explanation: "Necessario per collegare il cloud al PC."
  },
  {
    id: 385,
    question: "Dove finiscono i file scaricati dal web?",
    correctAnswer: "Nella cartella Download",
    wrongAnswers: ["Sul Desktop", "In Documenti", "Vengono cancellati"],
    hint: "Cartella predefinita.",
    explanation: "Posizione standard per i file scaricati dal browser."
  },
  {
    id: 386,
    question: "Come inserire una tabella?",
    correctAnswer: "Inserisci > Tabella",
    wrongAnswers: ["Scrivi i numeri e fai Tab", "Disegna con la matita", "Non si può"],
    hint: "Menu Inserisci.",
    explanation: "Comando specifico per creare griglie."
  },
  {
    id: 387,
    question: "Come spostare il punto di inserimento?",
    correctAnswer: "Cliccando con il mouse",
    wrongAnswers: ["Urlando al computer", "Muovendo il monitor", "Solo con il Tab"],
    hint: "Posiziona cursore.",
    explanation: "Basta cliccare nel punto desiderato del testo."
  },
  {
    id: 388,
    question: "Si può trasformare un elenco in testo normale?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, rimane elenco per sempre", "Bisogna cancellarlo", "Solo copiando su Blocco Note"],
    hint: "Disattiva elenco.",
    explanation: "Rimuovendo la formattazione elenco torna testo semplice."
  },
  {
    id: 389,
    question: "Il riempimento automatico funziona con i giorni?",
    correctAnswer: "Sì",
    wrongAnswers: ["No, solo numeri", "Solo mesi", "Solo anni"],
    hint: "Liste personalizzate.",
    explanation: "Excel riconosce i giorni della settimana."
  },
  {
    id: 390,
    question: "Google Tasks serve a:",
    correctAnswer: "Gestire le attività",
    wrongAnswers: ["Gestire le email", "Gestire le foto", "Navigare"],
    hint: "To-do list.",
    explanation: "Strumento per liste di cose da fare."
  },
  {
    id: 391,
    question: "Il logout è importante per la sicurezza?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso, è inutile", "Solo se si usa una VPN", "Rallenta il PC"],
    hint: "Chiusura sessione.",
    explanation: "Previene accessi non autorizzati dopo l'uso."
  },
  {
    id: 392,
    question: "Excel gestisce le date come numeri seriali?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso, sono testo", "Solo le date future", "Solo le date passate"],
    hint: "Numeri progressivi.",
    explanation: "Permette di fare calcoli matematici sulle date."
  },
  {
    id: 393,
    question: "Excel usa la notazione scientifica per grandi numeri?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso", "Solo per i decimali", "Dà errore"],
    hint: "Esponenziale.",
    explanation: "Per visualizzare numeri molto grandi in celle piccole."
  },
  {
    id: 394,
    question: "Freeware significa:",
    correctAnswer: "Software gratuito",
    wrongAnswers: ["Software libero modificabile", "Software a pagamento", "Hardware gratuito"],
    hint: "Gratis ma proprietario.",
    explanation: "Uso gratuito ma codice chiuso."
  },
  {
    id: 395,
    question: "Gli argomenti delle funzioni vanno tra:",
    correctAnswer: "Parentesi tonde",
    wrongAnswers: ["Parentesi quadre", "Graffe", "Virgolette"],
    hint: "()",
    explanation: "Sintassi standard delle funzioni Excel."
  },
  {
    id: 396,
    question: "Gli elenchi puntati usano:",
    correctAnswer: "Segni grafici",
    wrongAnswers: ["Numeri", "Lettere", "Numeri romani"],
    hint: "Simboli.",
    explanation: "Pallini, quadrati o altre icone per liste non ordinate."
  },
  {
    id: 397,
    question: "Smartphones moderni:",
    correctAnswer: "Uniscono telefono e computer",
    wrongAnswers: ["Servono solo per chiamare", "Sono solo computer", "Non vanno su internet"],
    hint: "Dispositivi ibridi.",
    explanation: "Computer tascabili con funzioni telefoniche."
  },
  {
    id: 398,
    question: "I margini di pagina sono:",
    correctAnswer: "Gli spazi vuoti ai bordi",
    wrongAnswers: ["Le righe del testo", "I numeri di pagina", "Le note"],
    hint: "Area bianca.",
    explanation: "Distanza tra il bordo del foglio e il testo."
  },
  {
    id: 399,
    question: "Stampa 'Più diapositive per pagina' serve a:",
    correctAnswer: "Stampare stampati",
    wrongAnswers: ["Risparmiare inchiostro e basta", "Stampare poster", "Non esiste"],
    hint: "Handouts.",
    explanation: "Per distribuire copie della presentazione al pubblico."
  },
  {
    id: 400,
    question: "Eventi accidentali (sicurezza):",
    correctAnswer: "Situazioni non ponderabili",
    wrongAnswers: ["Attacchi hacker", "Furti mirati", "Sabotaggi"],
    hint: "Non intenzionali.",
    explanation: "Guasti o disastri naturali non causati da malizia."
  },
  {
    id: 401,
    question: "Il grafico ad albero permette:",
    correctAnswer: "una visualizzazione gerarchica dei dati",
    wrongAnswers: ["un confronto temporale", "una mappa geografica", "un elenco puntato"],
    hint: "Struttura a blocchi annidati.",
    explanation: "Il grafico ad albero visualizza i dati in rettangoli annidati, ideale per mostrare gerarchie."
  },
  {
    id: 402,
    question: "Il protocollo WPA ha due modalità principali:",
    correctAnswer: "Personal e Enterprise",
    wrongAnswers: ["Home e Office", "Public e Private", "Fast e Slow"],
    hint: "Una per casa, una per aziende.",
    explanation: "WPA-Personal usa una password condivisa, WPA-Enterprise richiede un server di autenticazione."
  },
  {
    id: 403,
    question: "Il pulsante 'Nuova diapositiva' riproduce la prima diapositiva della presentazione?",
    correctAnswer: "Falso",
    wrongAnswers: ["Vero", "Solo se selezionata", "Dipende dal tema"],
    hint: "Crea una slide vuota o con layout standard.",
    explanation: "Inserisce una nuova diapositiva basata sul layout selezionato, non duplica la prima."
  },
  {
    id: 404,
    question: "Il pulsante 'Aumenta rientro' serve a:",
    correctAnswer: "allontanare il paragrafo dal margine sinistro",
    wrongAnswers: ["avvicinare il paragrafo", "cancellare il testo", "cambiare colore"],
    hint: "Sposta verso destra.",
    explanation: "Aumenta la distanza tra l'inizio del testo e il margine sinistro della pagina."
  },
  {
    id: 405,
    question: "Il pulsante 'Riduci rientro' serve a:",
    correctAnswer: "avvicinare il paragrafo al margine sinistro",
    wrongAnswers: ["allontanare il paragrafo", "aumentare lo zoom", "diminuire il font"],
    hint: "Sposta verso sinistra.",
    explanation: "Diminuisce il rientro, riportando il testo verso il margine sinistro."
  },
  {
    id: 406,
    question: "Il pulsante 'Rispondi a tutti' invia la risposta:",
    correctAnswer: "al mittente e a tutti gli altri destinatari in copia",
    wrongAnswers: ["solo al mittente", "solo ai destinatari nascosti", "a nessuno"],
    hint: "Coinvolge tutti i partecipanti.",
    explanation: "Usa questa opzione per mantenere tutti i destinatari originali nella conversazione."
  },
  {
    id: 407,
    question: "In Excel, il quadratino di riempimento si trova:",
    correctAnswer: "nell'angolo in basso a destra della cella selezionata",
    wrongAnswers: ["in alto a sinistra", "al centro", "nel menu File"],
    hint: "Piccolo quadrato verde o nero.",
    explanation: "Trascinando questo quadratino si copiano dati o formule nelle celle adiacenti."
  },
  {
    id: 408,
    question: "Il Rientro Sporgente (o speciale) agisce su:",
    correctAnswer: "tutte le righe del paragrafo tranne la prima",
    wrongAnswers: ["solo la prima riga", "tutto il documento", "solo l'ultima riga"],
    hint: "Tipico degli elenchi bibliografici.",
    explanation: "La prima riga inizia al margine, le successive sono rientrate."
  },
  {
    id: 409,
    question: "Un indirizzo email è composto da:",
    correctAnswer: "Nome utente, simbolo @ e Nome dominio",
    wrongAnswers: ["Nome, Cognome e Telefono", "Indirizzo IP e Porta", "Protocollo e URL"],
    hint: "Formato standard.",
    explanation: "La struttura è sempre utente@provider.estensione."
  },
  {
    id: 410,
    question: "Il servizio Google Meet permette di:",
    correctAnswer: "organizzare riunioni e lezioni online",
    wrongAnswers: ["scrivere documenti", "fare calcoli", "creare presentazioni"],
    hint: "Videoconferenza.",
    explanation: "Piattaforma di comunicazione video per meeting virtuali."
  },
  {
    id: 411,
    question: "La sigla 'www' sta per:",
    correctAnswer: "World Wide Web",
    wrongAnswers: ["World Web Wide", "Web World Wide", "Wide World Web"],
    hint: "Ragnatela mondiale.",
    explanation: "Sistema di documenti ipertestuali interconnessi consultabili via internet."
  },
  {
    id: 412,
    question: "In Word, per selezionare l'intero documento si usa:",
    correctAnswer: "Ctrl + A (o Seleziona tutto)",
    wrongAnswers: ["Ctrl + S", "Alt + F4", "Maiusc + Invio"],
    hint: "A = All.",
    explanation: "Comando rapido per evidenziare tutto il contenuto."
  },
  {
    id: 413,
    question: "Qual è il formato di file standard per le pagine web?",
    correctAnswer: ".html",
    wrongAnswers: [".exe", ".mp3", ".xls"],
    hint: "HyperText Markup Language.",
    explanation: "HTML è il linguaggio di marcatura usato per creare pagine web."
  },
  {
    id: 414,
    question: "In Excel, le colonne sono identificate da:",
    correctAnswer: "Lettere",
    wrongAnswers: ["Numeri", "Simboli", "Colori"],
    hint: "A, B, C...",
    explanation: "Le intestazioni di colonna usano lettere dell'alfabeto."
  },
  {
    id: 415,
    question: "In Excel, le righe sono identificate da:",
    correctAnswer: "Numeri",
    wrongAnswers: ["Lettere", "Simboli", "Date"],
    hint: "1, 2, 3...",
    explanation: "Le intestazioni di riga usano numeri sequenziali."
  },
  {
    id: 416,
    question: "Cosa indica l'estensione .pdf?",
    correctAnswer: "Portable Document Format",
    wrongAnswers: ["Picture Data File", "Personal Document File", "Public Data Format"],
    hint: "Formato Adobe universale.",
    explanation: "Formato standard per documenti che mantengono la formattazione su qualsiasi dispositivo."
  },
  {
    id: 417,
    question: "Cos'è la 'Defrag' (Deframmentazione)?",
    correctAnswer: "Un'operazione per ottimizzare l'archiviazione dati sul disco",
    wrongAnswers: ["La cancellazione dei virus", "La pulizia dello schermo", "L'installazione di driver"],
    hint: "Riordina i pezzi dei file.",
    explanation: "Riunisce i frammenti di file sparsi sul disco rigido per velocizzare l'accesso."
  },
  {
    id: 418,
    question: "In PowerPoint, la visualizzazione 'Sequenza diapositive' serve a:",
    correctAnswer: "riorganizzare facilmente l'ordine delle slide",
    wrongAnswers: ["scrivere il testo", "aggiungere animazioni", "presentare al pubblico"],
    hint: "Vedi tante miniature insieme.",
    explanation: "Permette di spostare le diapositive trascinandole nella posizione desiderata."
  },
  {
    id: 419,
    question: "Quale combinazione di tasti chiude la finestra attiva in Windows?",
    correctAnswer: "Alt + F4",
    wrongAnswers: ["Ctrl + C", "Esc", "Invio"],
    hint: "Chiude programma.",
    explanation: "Comando universale Windows per chiudere l'applicazione in primo piano."
  },
  {
    id: 420,
    question: "Per rinominare un file selezionato, quale tasto funzione si usa?",
    correctAnswer: "F2",
    wrongAnswers: ["F1", "F5", "F12"],
    hint: "Edita nome.",
    explanation: "F2 attiva la modalità di modifica del nome del file o cartella selezionata."
  },
  {
    id: 421,
    question: "Cos'è un 'Hyperlink'?",
    correctAnswer: "Un collegamento a un'altra risorsa web o punto del documento",
    wrongAnswers: ["Un testo in grassetto", "Un errore di stampa", "Un virus"],
    hint: "Link cliccabile.",
    explanation: "Permette la navigazione non lineare tra documenti o pagine."
  },
  {
    id: 422,
    question: "Il 'Drag and Drop' consiste nel:",
    correctAnswer: "trascinare e rilasciare file o oggetti",
    wrongAnswers: ["cancellare e ripristinare", "copiare e incollare con tastiera", "fare doppio clic"],
    hint: "Trascina e rilascia.",
    explanation: "Metodo intuitivo per spostare o copiare elementi usando il mouse."
  },
  {
    id: 423,
    question: "Cos'è la 'Barra di stato'?",
    correctAnswer: "La barra in fondo alla finestra che mostra informazioni",
    wrongAnswers: ["La barra del titolo", "Il menu Start", "La barra degli indirizzi"],
    hint: "Info documento (pag, parole, zoom).",
    explanation: "Fornisce dettagli sullo stato attuale del documento o dell'applicazione."
  },
  {
    id: 424,
    question: "In Excel, la funzione MEDIA calcola:",
    correctAnswer: "la media aritmetica dei valori",
    wrongAnswers: ["la somma", "il valore massimo", "il valore minimo"],
    hint: "Somma diviso numero elementi.",
    explanation: "Restituisce il valore medio di un intervallo di numeri."
  },
  {
    id: 425,
    question: "In Excel, la funzione CONTA.NUMERI conta:",
    correctAnswer: "le celle che contengono numeri in un intervallo",
    wrongAnswers: ["tutte le celle piene", "le celle vuote", "le celle con testo"],
    hint: "Solo valori numerici.",
    explanation: "Ignora testo e celle vuote, contando solo i dati numerici."
  },
  {
    id: 426,
    question: "In Excel, la funzione OGGI restituisce:",
    correctAnswer: "la data corrente",
    wrongAnswers: ["l'ora corrente", "la data di ieri", "il nome del giorno"],
    hint: "Senza orario.",
    explanation: "Inserisce la data di sistema aggiornata automaticamente."
  },
  {
    id: 427,
    question: "Cosa significa 'Scaricare' (Download) un file?",
    correctAnswer: "Trasferirlo dalla rete al proprio computer",
    wrongAnswers: ["Inviarlo a qualcuno", "Cancellarlo", "Stamparlo"],
    hint: "Giù dalla rete.",
    explanation: "Copia di dati da un server remoto al dispositivo locale."
  },
  {
    id: 428,
    question: "Cosa significa 'Caricare' (Upload) un file?",
    correctAnswer: "Trasferirlo dal proprio computer alla rete",
    wrongAnswers: ["Scaricarlo", "Aprirlo", "Leggerlo"],
    hint: "Su nella rete.",
    explanation: "Invio di dati dal dispositivo locale a un server remoto (es. cloud)."
  },
  {
    id: 429,
    question: "In Word, il 'Copia formato' (pennello) serve a:",
    correctAnswer: "copiare lo stile del testo (colore, font) su altro testo",
    wrongAnswers: ["copiare il contenuto", "cancellare il formato", "inserire un'immagine"],
    hint: "Replica l'aspetto.",
    explanation: "Applica rapidamente la stessa formattazione di una selezione ad un'altra."
  },
  {
    id: 430,
    question: "Cos'è un 'Driver'?",
    correctAnswer: "Un software che permette al sistema operativo di comunicare con l'hardware",
    wrongAnswers: ["Un autista", "Un virus", "Un gioco di guida"],
    hint: "Pilota la periferica.",
    explanation: "Senza driver, componenti come stampanti o schede video non funzionerebbero."
  },
  {
    id: 431,
    question: "Quale dispositivo è indispensabile per la connessione a Internet?",
    correctAnswer: "Modem/Router",
    wrongAnswers: ["Stampante", "Scanner", "Microfono"],
    hint: "Interfaccia con la linea dati.",
    explanation: "Gestisce il segnale e l'instradamento dei dati verso la rete esterna."
  },
  {
    id: 432,
    question: "Cosa indica l'acronimo LAN?",
    correctAnswer: "Local Area Network",
    wrongAnswers: ["Long Area Network", "Live Area Network", "Local Access Node"],
    hint: "Rete locale.",
    explanation: "Rete di computer limitata a un'area circoscritta (casa, ufficio)."
  },
  {
    id: 433,
    question: "Cosa indica l'acronimo WAN?",
    correctAnswer: "Wide Area Network",
    wrongAnswers: ["World Area Network", "Web Area Network", "Wireless Area Node"],
    hint: "Rete geografica.",
    explanation: "Rete che copre grandi distanze (città, nazioni)."
  },
  {
    id: 434,
    question: "La 'Banda larga' indica:",
    correctAnswer: "una connessione internet ad alta velocità",
    wrongAnswers: ["una banda musicale", "un cavo molto largo", "una connessione lenta"],
    hint: "ADSL, Fibra.",
    explanation: "Capacità di trasmettere grandi quantità di dati velocemente."
  },
  {
    id: 435,
    question: "In un browser, la 'Cronologia' serve a:",
    correctAnswer: "visualizzare l'elenco dei siti visitati in passato",
    wrongAnswers: ["cancellare i file", "salvare le password", "scaricare video"],
    hint: "Memoria di navigazione.",
    explanation: "Registro temporale delle pagine web aperte dall'utente."
  },
  {
    id: 436,
    question: "In un browser, i 'Cookie' sono:",
    correctAnswer: "piccoli file di testo salvati dai siti sul computer dell'utente",
    wrongAnswers: ["dolci", "virus", "programmi"],
    hint: "Memorizzano preferenze.",
    explanation: "Usati per mantenere sessioni attive e tracciare preferenze."
  },
  {
    id: 437,
    question: "La navigazione 'In incognito' impedisce:",
    correctAnswer: "il salvataggio della cronologia sul computer locale",
    wrongAnswers: ["il tracciamento da parte dei siti", "l'identificazione dell'IP", "i virus"],
    hint: "Privacy locale.",
    explanation: "Non lascia tracce sul dispositivo, ma non rende anonimi in rete."
  },
  {
    id: 438,
    question: "Un 'Motore di ricerca' serve a:",
    correctAnswer: "trovare informazioni sul web tramite parole chiave",
    wrongAnswers: ["accendere il computer", "creare siti web", "inviare email"],
    hint: "Google, Bing.",
    explanation: "Indicizza il web per permettere il reperimento di contenuti."
  },
  {
    id: 439,
    question: "La 'Barra degli indirizzi' del browser serve a:",
    correctAnswer: "digitare l'URL del sito da visitare",
    wrongAnswers: ["scrivere email", "cercare file nel PC", "chattare"],
    hint: "In alto nella finestra.",
    explanation: "Campo di testo per inserire l'indirizzo web diretto."
  },
  {
    id: 440,
    question: "Cos'è la PEC?",
    correctAnswer: "Posta Elettronica Certificata con valore legale",
    wrongAnswers: ["Posta Elettronica Comune", "Un programma di chat", "Un virus"],
    hint: "Come una raccomandata.",
    explanation: "Garantisce legalmente l'invio e la ricezione del messaggio."
  },
  {
    id: 441,
    question: "Cos'è lo SPID?",
    correctAnswer: "Sistema Pubblico di Identità Digitale",
    wrongAnswers: ["Un antivirus", "Un browser", "Un social network"],
    hint: "Accesso PA.",
    explanation: "Chiave unica di accesso ai servizi online della Pubblica Amministrazione."
  },
  {
    id: 442,
    question: "La 'Firma Digitale' garantisce:",
    correctAnswer: "autenticità e integrità del documento",
    wrongAnswers: ["che il documento sia bello", "che sia stampato", "niente"],
    hint: "Valore legale.",
    explanation: "Assicura chi ha firmato e che il contenuto non sia stato modificato."
  },
  {
    id: 443,
    question: "Il 'Cyberbullismo' è:",
    correctAnswer: "un atto aggressivo intenzionale condotto tramite strumenti elettronici",
    wrongAnswers: ["un gioco online", "un virus", "un errore di sistema"],
    hint: "Bullismo online.",
    explanation: "Molestie o minacce perpetrate attraverso internet e social media."
  },
  {
    id: 444,
    question: "La 'Netiquette' è:",
    correctAnswer: "l'insieme delle regole di buon comportamento in rete",
    wrongAnswers: ["una legge dello stato", "un antivirus", "un tipo di connessione"],
    hint: "Galateo di Internet.",
    explanation: "Norme non scritte di educazione e rispetto nelle comunicazioni online."
  },
  {
    id: 445,
    question: "Scrivere un messaggio tutto in MAIUSCOLO in chat equivale a:",
    correctAnswer: "urlare",
    wrongAnswers: ["sussurrare", "essere educati", "essere formali"],
    hint: "È scortese.",
    explanation: "Nella comunicazione online, il maiuscolo è percepito come tono di voce alto/aggressivo."
  },
  {
    id: 446,
    question: "Il 'Diritto all'oblio' è:",
    correctAnswer: "il diritto a vedere cancellati i propri dati personali obsoleti dal web",
    wrongAnswers: ["il diritto di ricordare tutto", "il diritto di navigare gratis", "non esiste"],
    hint: "Essere dimenticati.",
    explanation: "Permette di rimuovere link a informazioni personali non più rilevanti o pregiudizievoli."
  },
  {
    id: 447,
    question: "Una 'Violazione dei dati' (Data Breach) comporta:",
    correctAnswer: "l'accesso non autorizzato o il furto di dati sensibili",
    wrongAnswers: ["la rottura del monitor", "la fine di internet", "un aggiornamento"],
    hint: "Fuga di dati.",
    explanation: "Incidente di sicurezza che compromette la riservatezza dei dati."
  },
  {
    id: 448,
    question: "Un 'Keylogger' è un malware che:",
    correctAnswer: "registra tutto ciò che viene digitato sulla tastiera",
    wrongAnswers: ["blocca lo schermo", "cancella i file", "rallenta il PC"],
    hint: "Ruba password.",
    explanation: "Software spia che cattura le digitazioni per rubare credenziali."
  },
  {
    id: 449,
    question: "Una 'Botnet' è:",
    correctAnswer: "una rete di computer infetti controllati da remoto",
    wrongAnswers: ["una rete di robot domestici", "un antivirus", "un social network"],
    hint: "Computer zombie.",
    explanation: "Insieme di dispositivi compromessi usati per attacchi informatici massivi (es. DDoS)."
  },
  {
    id: 450,
    question: "Il 'Pharming' è una tecnica che:",
    correctAnswer: "reindirizza l'utente su siti web falsi",
    wrongAnswers: ["invia email di spam", "blocca il PC", "ruba il mouse"],
    hint: "Deviazione traffico.",
    explanation: "Manipolazione del DNS o file host per portare l'utente su siti fraudolenti."
  },
  {
    id: 451,
    question: "In PowerPoint, lo 'Schema diapositiva' permette di:",
    correctAnswer: "modificare il layout e lo stile di tutte le diapositive in una volta sola",
    wrongAnswers: ["cancellare tutto", "stampare", "salvare"],
    hint: "Master Slide.",
    explanation: "Definisce la struttura e formattazione comune dell'intera presentazione."
  },
  {
    id: 452,
    question: "In Word, l'allineamento 'Giustificato' allinea il testo:",
    correctAnswer: "sia al margine sinistro che a quello destro",
    wrongAnswers: ["solo a sinistra", "solo a destra", "al centro"],
    hint: "Blocco ordinato.",
    explanation: "Distribuisce gli spazi tra le parole per riempire l'intera riga."
  },
  {
    id: 453,
    question: "Per inserire un'interruzione di pagina manuale in Word si usa:",
    correctAnswer: "Ctrl + Invio",
    wrongAnswers: ["Invio", "Maiusc + Invio", "Alt + Invio"],
    hint: "Salta a pagina nuova.",
    explanation: "Forza l'inizio di una nuova pagina nel punto del cursore."
  },
  {
    id: 454,
    question: "Il comando 'Trova' (Ctrl+F) serve a:",
    correctAnswer: "cercare una parola o frase nel documento",
    wrongAnswers: ["sostituire testo", "cancellare testo", "salvare"],
    hint: "Find.",
    explanation: "Localizza rapidamente occorrenze di testo nel file."
  },
  {
    id: 455,
    question: "In Excel, il simbolo per la moltiplicazione è:",
    correctAnswer: "L'asterisco (*)",
    wrongAnswers: ["La x", "Il punto", "Il più"],
    hint: "Star.",
    explanation: "Operatore matematico standard per il prodotto."
  },
  {
    id: 456,
    question: "In Excel, il simbolo per la sottrazione è:",
    correctAnswer: "Il trattino (-)",
    wrongAnswers: ["L'underscore", "Il meno lungo", "Lo slash"],
    hint: "Meno.",
    explanation: "Operatore matematico standard per la differenza."
  },
  {
    id: 457,
    question: "In Excel, per iniziare una formula bisogna digitare:",
    correctAnswer: "Il simbolo uguale (=)",
    wrongAnswers: ["Il più", "Il meno", "Niente"],
    hint: "Sempre all'inizio.",
    explanation: "Indica ad Excel che il contenuto della cella è una formula da calcolare."
  },
  {
    id: 458,
    question: "Una 'Cella' in Excel è:",
    correctAnswer: "l'intersezione di una riga e una colonna",
    wrongAnswers: ["una tabella intera", "un foglio", "un file"],
    hint: "Unità base.",
    explanation: "Lo spazio rettangolare dove si inseriscono i dati."
  },
  {
    id: 459,
    question: "Un 'Intervallo' in Excel è:",
    correctAnswer: "un gruppo di celle selezionate",
    wrongAnswers: ["una singola cella", "una formula", "un errore"],
    hint: "Range.",
    explanation: "Insieme di due o più celle (es. A1:B10)."
  },
  {
    id: 460,
    question: "Per unire più celle in una sola in Excel si usa il comando:",
    correctAnswer: "Unisci e allinea al centro",
    wrongAnswers: ["Dividi celle", "Formatta celle", "Somma"],
    hint: "Fusione.",
    explanation: "Combina le celle selezionate in un'unica grande cella."
  },
  {
    id: 461,
    question: "In PowerPoint, il tasto F5 serve a:",
    correctAnswer: "avviare la presentazione dall'inizio",
    wrongAnswers: ["salvare", "chiudere", "aprire aiuto"],
    hint: "Start Show.",
    explanation: "Comando rapido per lanciare lo slideshow dalla prima diapositiva."
  },
  {
    id: 462,
    question: "Per uscire dalla modalità presentazione in PowerPoint si preme:",
    correctAnswer: "Esc",
    wrongAnswers: ["Invio", "Spazio", "Ctrl"],
    hint: "Escape.",
    explanation: "Termina lo slideshow e torna alla modalità modifica."
  },
  {
    id: 463,
    question: "Le 'Note del relatore' in PowerPoint sono visibili:",
    correctAnswer: "solo a chi presenta (nella visualizzazione relatore)",
    wrongAnswers: ["al pubblico", "a nessuno", "in stampa sempre"],
    hint: "Suggerimenti nascosti.",
    explanation: "Aiutano il presentatore ricordando punti chiave senza mostrarli al pubblico."
  },
  {
    id: 464,
    question: "Per duplicare una diapositiva rapidamente si può usare:",
    correctAnswer: "Tasto destro > Duplica diapositiva",
    wrongAnswers: ["Ctrl + N", "Alt + F4", "Non si può"],
    hint: "Copia identica.",
    explanation: "Crea una copia esatta della slide selezionata."
  },
  {
    id: 465,
    question: "L'estensione .pptx indica un file di:",
    correctAnswer: "PowerPoint",
    wrongAnswers: ["Excel", "Word", "Paint"],
    hint: "Presentazione.",
    explanation: "Formato file standard per le presentazioni Microsoft."
  },
  {
    id: 466,
    question: "L'estensione .xlsx indica un file di:",
    correctAnswer: "Excel",
    wrongAnswers: ["PowerPoint", "Word", "Access"],
    hint: "Foglio di calcolo.",
    explanation: "Formato file standard per i fogli di calcolo Microsoft."
  },
  {
    id: 467,
    question: "L'estensione .docx indica un file di:",
    correctAnswer: "Word",
    wrongAnswers: ["Excel", "PowerPoint", "Notepad"],
    hint: "Documento.",
    explanation: "Formato file standard per i documenti di testo Microsoft."
  },
  {
    id: 468,
    question: "L'estensione .txt indica un file di:",
    correctAnswer: "Testo semplice (senza formattazione)",
    wrongAnswers: ["Video", "Audio", "Immagine"],
    hint: "Blocco note.",
    explanation: "File di testo puro compatibile con ogni editor."
  },
  {
    id: 469,
    question: "Cos'è lo 'Streaming'?",
    correctAnswer: "La fruizione di contenuti audio/video in tempo reale senza download completo",
    wrongAnswers: ["Scaricare file", "Masterizzare CD", "Stampare"],
    hint: "Netflix, YouTube.",
    explanation: "Riproduzione progressiva dei dati mentre vengono ricevuti dalla rete."
  },
  {
    id: 470,
    question: "Cos'è un 'Podcast'?",
    correctAnswer: "Un file audio digitale distribuito via internet a episodi",
    wrongAnswers: ["Un video musicale", "Un documento pdf", "Un virus"],
    hint: "Radio on demand.",
    explanation: "Programmi audio scaricabili o ascoltabili in streaming su argomenti specifici."
  },
  {
    id: 471,
    question: "In Windows, il 'Cestino' serve a:",
    correctAnswer: "conservare i file eliminati prima della cancellazione definitiva",
    wrongAnswers: ["cancellare subito", "archiviare virus", "organizzare desktop"],
    hint: "Area di recupero.",
    explanation: "Permette di ripristinare file cancellati per errore."
  },
  {
    id: 472,
    question: "Per recuperare un file dal Cestino bisogna:",
    correctAnswer: "Selezionarlo e scegliere 'Ripristina'",
    wrongAnswers: ["Trascinarlo fuori", "Copiarlo", "Non si può"],
    hint: "Restore.",
    explanation: "Riporta il file nella sua posizione originale."
  },
  {
    id: 473,
    question: "La combinazione Ctrl + X serve a:",
    correctAnswer: "Tagliare l'elemento selezionato",
    wrongAnswers: ["Copiare", "Incollare", "Cancellare"],
    hint: "Forbici.",
    explanation: "Rimuove l'elemento e lo mette negli appunti per spostarlo."
  },
  {
    id: 474,
    question: "La combinazione Ctrl + S (o Ctrl + B in italiano) serve a:",
    correctAnswer: "Salvare il documento",
    wrongAnswers: ["Stampare", "Sottolineare", "Chiudere"],
    hint: "Save/Blocco.",
    explanation: "Comando rapido per salvare le modifiche."
  },
  {
    id: 475,
    question: "La combinazione Ctrl + P serve a:",
    correctAnswer: "Aprire la finestra di stampa",
    wrongAnswers: ["Incollare", "Pagina nuova", "Grassetto"],
    hint: "Print.",
    explanation: "Avvia la procedura di stampa del documento."
  },
  {
    id: 476,
    question: "In Windows, Alt + Tab serve a:",
    correctAnswer: "passare da una finestra aperta all'altra",
    wrongAnswers: ["chiudere tutto", "aprire menu start", "spegnere"],
    hint: "Switch.",
    explanation: "Commutatore rapido di attività (Task Switcher)."
  },
  {
    id: 477,
    question: "In Windows, il tasto 'Stamp' (Print Screen) serve a:",
    correctAnswer: "catturare l'immagine dello schermo",
    wrongAnswers: ["stampare su carta", "inviare mail", "bloccare pc"],
    hint: "Screenshot.",
    explanation: "Copia la schermata attuale negli appunti."
  },
  {
    id: 478,
    question: "Per bloccare rapidamente il computer (Windows) si usa:",
    correctAnswer: "Tasto Windows + L",
    wrongAnswers: ["Ctrl + Alt + Canc", "Win + B", "Esc"],
    hint: "L = Lock (Blocca).",
    explanation: "Tasto Windows + L blocca immediatamente la sessione, richiedendo la password per rientrare."
  },
  {
  id: 479,
  question: "A cosa serve il seguente riquadro? Digita qui il testo • [Testo] • [Testo] • [Testo] Organigramma...",
  correctAnswer: "A inserire il testo nelle singole forme di un organigramma",
  wrongAnswers: ["A creare un elenco puntato", "A disegnare forme geometriche", "A inserire un grafico"],
  hint: "È tipico degli strumenti di SmartArt in Office.",
  explanation: "Questo riquadro compare quando si inserisce una SmartArt di tipo organigramma e permette di digitare il testo per ogni elemento della gerarchia."
},
{
  id: 480,
  question: "Che cosa indica la seguente figura? (Immagine della sezione impostazioni Wi-Fi)",
  correctAnswer: "La sezione dell'app Impostazioni di Windows 11, dalla quale scegliere la rete WLAN a cui collegarsi",
  wrongAnswers: ["Il pannello di controllo audio", "Le impostazioni della stampante", "La gestione dei dispositivi Bluetooth"],
  hint: "Mostra l'elenco delle reti wireless disponibili.",
  explanation: "Questa schermata fa parte delle Impostazioni di Windows 11 > Rete e Internet > Wi-Fi, dove si visualizzano le reti wireless rilevate."
},
{
  id: 481,
  question: "Che cosa mostra il pannello diapositive?",
  correctAnswer: "Le miniature delle diapositive che compongono la presentazione",
  wrongAnswers: ["Le note del relatore", "Le animazioni applicate", "I commenti dei revisori"],
  hint: "Di solito si trova sul lato sinistro dell'interfaccia di PowerPoint.",
  explanation: "Il pannello diapositive (Slide Pane) mostra le anteprime di tutte le slide per una navigazione e riorganizzazione rapida."
},
{
  id: 482,
  question: "Cosa indica questo simbolo ¶?",
  correctAnswer: "La fine di un paragrafo",
  wrongAnswers: ["Un errore di ortografia", "Un collegamento ipertestuale", "Un commento inserito"],
  hint: "Appare quando si attiva la visualizzazione dei caratteri non stampabili.",
  explanation: "Il simbolo ¶ (segno di paragrafo) indica dove è stato premuto Invio e inizia un nuovo paragrafo."
},
{
  id: 483,
  question: "Che cos'è Cortana?",
  correctAnswer: "È l'assistente personale di Windows 11, che può aiutare l'utente a ottenere le informazioni che desidera",
  wrongAnswers: ["Un antivirus Microsoft", "Un browser web", "Un programma di grafica"],
  hint: "Risponde a comandi vocali come 'Hey Cortana'.",
  explanation: "Cortana è l'assistente virtuale di Microsoft integrato in Windows, simile a Siri o Google Assistant."
},
{
  id: 484,
  question: "Che cos'è il Wi-Fi?",
  correctAnswer: "È la tecnologia che permette ai dispositivi di connettersi tra loro in una rete locale, senza l'utilizzo di cavi",
  wrongAnswers: ["Un tipo di cavo di rete", "Un software antivirus", "Un protocollo di posta elettronica"],
  hint: "Wireless Fidelity.",
  explanation: "Il Wi-Fi utilizza onde radio per creare reti locali wireless (WLAN), permettendo la connessione internet e lo scambio dati senza fili."
},
{
  id: 485,
  question: "Che cos'è la frequenza di clock?",
  correctAnswer: "La velocità con cui i processori eseguono i calcoli",
  wrongAnswers: ["La velocità di internet", "La frequenza di aggiornamento dello schermo", "La velocità della memoria RAM"],
  hint: "Si misura in GHz (Gigahertz).",
  explanation: "La frequenza di clock indica quanti cicli di operazioni la CPU può eseguire in un secondo. Più è alta, più veloce è il processore."
},
{
  id: 486,
  question: "Che cos'è l'interlinea?",
  correctAnswer: "È la distanza tra una riga di testo e la successiva",
  wrongAnswers: ["La distanza tra due paragrafi", "Lo spazio tra le parole", "Il margine della pagina"],
  hint: "In Word si regola dal gruppo Paragrafo > Interlinea.",
  explanation: "L'interlinea determina lo spazio verticale tra le righe di testo, influenzando la leggibilità del documento."
},
{
  id: 487,
  question: "Che cos'è un Font?",
  correctAnswer: "Il tipo di carattere",
  wrongAnswers: ["La dimensione del testo", "Il colore del carattere", "Lo stile del paragrafo"],
  hint: "Esempi: Arial, Times New Roman, Calibri.",
  explanation: "Il font (o tipo di carattere) definisce l'aspetto stilistico delle lettere, numeri e simboli in un testo."
},
{
  id: 488,
  question: "Che cos'è un hotspot?",
  correctAnswer: "È un qualsiasi punto di accesso ad Internet aperto a chi si trova nelle vicinanze, raggiungibile tramite il collegamento Wi-Fi",
  wrongAnswers: ["Un punto caldo del computer", "Un virus informatico", "Un tipo di cavo di rete"],
  hint: "Spesso disponibili in bar, aeroporti, hotel.",
  explanation: "Un hotspot Wi-Fi è una zona dove è disponibile una connessione internet wireless, spesso pubblica o commerciale."
},
{
  id: 489,
  question: "Che cos'è un'unità di memoria a stato solido o SSD (Solid-State Drive)?",
  correctAnswer: "È un hard-disk che funziona senza utilizzare componenti meccanici",
  wrongAnswers: ["Un tipo di RAM più veloce", "Un'unità di backup su nastro", "Un disco ottico come il DVD"],
  hint: "Non ha parti mobili, a differenza degli HDD tradizionali.",
  explanation: "Gli SSD utilizzano memoria flash (simile alle pendrive) invece di dischi magnetici rotanti, risultando più veloci, silenziosi e resistenti agli urti."
},
{
  id: 490,
  question: "Che formato utilizza Excel per mostrare le date nelle celle?",
  correctAnswer: "hh.mm",
  wrongAnswers: ["gg/mm/aaaa", "aaaa-mm-gg", "mm/gg/aaaa"],
  hint: "Solo per l'orario, non per la data completa.",
  explanation: "Excel può formattare le ore nel formato 'hh.mm' (es. 14.30), ma le date complete hanno altri formati standard."
},
{
  id: 491,
  question: "Chi sono gli spammer?",
  correctAnswer: "Hacker che compiono attività di spam, cercando quindi di appropriarsi di dati personali degli utenti",
  wrongAnswers: ["Tecnici che riparano computer", "Sviluppatori di software", "Amministratori di rete"],
  hint: "Inviano email o messaggi indesiderati in massa.",
  explanation: "Gli spammer inviano comunicazioni non richieste (spam) spesso per scopi fraudolenti, phishing o pubblicitari."
},
{
  id: 492,
  question: "Cliccando sull'icona evidenziata in giallo, i partecipanti alla riunione possono:",
  correctAnswer: "condividere l'intero schermo, una finestra o una scheda",
  wrongAnswers: ["Spegnere il microfono", "Abbandonare la riunione", "Cambiare lo sfondo virtuale"],
  hint: "Icona di condivisione schermo in app come Teams o Meet.",
  explanation: "Questa funzione permette di mostrare il proprio desktop, una specifica applicazione o una scheda del browser agli altri partecipanti."
},
{
  id: 493,
  question: "Come prevenire il furto di identità?",
  correctAnswer: "Non memorizzare PIN, password e installare antivirus e firewall",
  wrongAnswers: ["Condividere le password con amici", "Usare sempre la stessa password", "Disattivare gli aggiornamenti di sicurezza"],
  hint: "Bisogna proteggere le credenziali e il dispositivo.",
  explanation: "Proteggere i dati di accesso e usare software di sicurezza riduce il rischio che malintenzionati rubino la tua identità digitale."
},
{
  id: 494,
  question: "Come si chiama la memoria in cui i computer memorizzano temporaneamente i dati da elaborare?",
  correctAnswer: "RAM",
  wrongAnswers: ["ROM", "HDD", "SSD"],
  hint: "Random Access Memory.",
  explanation: "La RAM è memoria volatile ad alta velocità dove il computer carica i dati dei programmi in esecuzione."
},
{
  id: 495,
  question: "Completa la procedura per eliminare un account Google.",
  correctAnswer: "(1) Accedi all'Account Google, (2) seleziona Gestisci il tuo Account, (3) nel menù a destra seleziona Dati e Privacy (4) Altre opzioni (5) Elimina il tuo Account Google",
  wrongAnswers: [
    "Basta disinstallare Chrome",
    "Inviare una email a Google",
    "Formattare il dispositivo"
  ],
  hint: "La cancellazione si fa dalle impostazioni dell'account, non dal dispositivo.",
  explanation: "Google richiede di passare attraverso le impostazioni dell'account per confermare l'identità e procedere con l'eliminazione definitiva."
},
{
  id: 496,
  question: "Con il riempimento automatico è possibile generare automaticamente una sequenza di date digitandone soltanto la prima.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso", "Solo con numeri", "Solo con testo"],
  hint: "Trascina il quadratino di riempimento in Excel.",
  explanation: "Excel riconosce pattern come date, giorni della settimana, mesi e numeri seriali, completandoli automaticamente."
},
{
  id: 497,
  question: "Con la crittografia end-to-end:",
  correctAnswer: "ogni messaggio viene criptato appena inviato e decriptato quando viene ricevuto, tramite una chiave che possiede solo il destinatario",
  wrongAnswers: [
    "Il messaggio è visibile ai server intermedi",
    "Solo il mittente può leggerlo",
    "Non richiede alcuna chiave"
  ],
  hint: "Usata da WhatsApp, Signal per la privacy.",
  explanation: "La crittografia end-to-end garantisce che solo mittente e destinatario possano leggere i messaggi, nemmeno il fornitore del servizio può decifrarli."
},
{
  id: 498,
  question: "Con la licenza Open source il titolare del copyright concede:",
  correctAnswer: "a terzi la possibilità di utilizzare, studiare, modificare e distribuire sia il software che il suo codice sorgente",
  wrongAnswers: [
    "Solo l'uso gratuito ma non la modifica",
    "La proprietà del software",
    "Il diritto di rivenderlo come proprio"
  ],
  hint: "Codice sorgente disponibile e modificabile.",
  explanation: "Le licenze open source (es. GPL, MIT) garantono le quattro libertà fondamentali: usare, studiare, modificare e ridistribuire il software."
},
{
  id: 499,
  question: "Con la Modalità Focus è possibile:",
  correctAnswer: "eliminare l'interfaccia di Word e visualizzare solo il documento",
  wrongAnswers: [
    "Ingrandire il testo",
    "Attivare la dettatura vocale",
    "Bloccare la modifica del documento"
  ],
  hint: "Nasconde barre degli strumenti e menu.",
  explanation: "La Modalità Focus in Word rimuove tutti gli elementi di interfaccia per ridurre le distrazioni e concentrarsi sulla scrittura."
},
{
  id: 500,
  question: "Con la sincronizzazione dei dati un utente ha la possibilità di:",
  correctAnswer: "memorizzare i dati in un account, rendendoli disponibili anche in altri dispositivi, sempre utilizzando lo stesso browser dove è stato attivato l'account",
  wrongAnswers: [
    "Cancellare i dati da tutti i dispositivi",
    "Bloccare l'accesso ai dati",
    "Condividere automaticamente i dati su social network"
  ],
  hint: "Esempio: segnalibri e password sincronizzati su Chrome.",
  explanation: "La sincronizzazione mantiene i dati (preferiti, cronologia, password) coerenti su tutti i dispositivi dove si accede con lo stesso account."
},
{
  id: 501,
  question: "Con un dispositivo Apple è possibile usare il browser Google Chrome?",
  correctAnswer: "Sì, bisogna collegarsi alla pagina del sito da cui scaricare il file di installazione del browser, e poi eseguire il file.",
  wrongAnswers: [
    "No, su Apple funziona solo Safari",
    "Sì, ma solo a pagamento",
    "No, Chrome è solo per Windows"
  ],
  hint: "Chrome è multipiattaforma.",
  explanation: "Google Chrome è disponibile per macOS e iOS attraverso l'App Store o il sito ufficiale, come su altre piattaforme."
},
{
  id: 502,
  question: "Cosa accade una volta selezionato il pulsante Zoom nell'omonimo gruppo comandi della scheda Visualizza?",
  correctAnswer: "Si apre la finestra di dialogo da cui ingrandire o ridurre le dimensioni del documento secondo un valore percentuale",
  wrongAnswers: [
    "Il documento viene stampato",
    "Si attiva la modalità schermo intero",
    "Il testo diventa più grande in modo permanente"
  ],
  hint: "Permette di impostare una percentuale precisa (es. 150%).",
  explanation: "Il pulsante Zoom apre una finestra di dialogo per impostare un livello di ingrandimento specifico, diverso dallo slider nella barra di stato."
},
{
  id: 503,
  question: "Cosa indica la seguente figura? INTERNET",
  correctAnswer: "Lo schema di una rete WLAN",
  wrongAnswers: [
    "Un diagramma di flusso",
    "Lo schema di un computer",
    "Un organigramma aziendale"
  ],
  hint: "Mostra dispositivi collegati tramite un router a Internet.",
  explanation: "La figura rappresenta tipicamente una rete locale wireless (WLAN) con dispositivi connessi a un router/modem che fornisce accesso a Internet."
},
{
  id: 504,
  question: "Cosa significa Formattare un testo?",
  correctAnswer: "Decidere il suo aspetto",
  wrongAnswers: [
    "Cancellarlo",
    "Copiarlo",
    "Salvarlo"
  ],
  hint: "Cambiare font, colore, dimensione, grassetto...",
  explanation: "La formattazione riguarda l'aspetto visivo del testo (carattere, stile, allineamento) senza modificarne il contenuto."
},
{
  id: 505,
  question: "Cosa sono gli Screenshot?",
  correctAnswer: "Le immagini che mostrano ciò che visualizzi in quel momento sullo schermo del tuo computer",
  wrongAnswers: [
    "Video registrati dallo schermo",
    "File audio catturati dal microfono",
    "Documenti di testo salvati"
  ],
  hint: "Foto dello schermo.",
  explanation: "Uno screenshot (cattura schermo) è un'immagine statica che registra esattamente ciò che viene visualizzato sul display in un determinato istante."
},
{
  id: 506,
  question: "Cosa sono i popup?",
  correctAnswer: "Sono finestre che compaiono automaticamente sullo schermo durante la navigazione in Rete",
  wrongAnswers: [
    "Programmi antivirus",
    "Tipi di carattere",
    "Estensioni dei file"
  ],
  hint: "Spesso pubblicità o avvisi che 'sprigionano' (pop up).",
  explanation: "I pop-up sono finestre del browser che si aprono automaticamente, spesso per pubblicità, richieste di iscrizione o avvisi."
},
{
  id: 507,
  question: "Cosa sono i webinar?",
  correctAnswer: "Eventi formativi o informativi che si tengono online",
  wrongAnswers: [
    "Social network",
    "Programmi di editing video",
    "Tipi di virus informatici"
  ],
  hint: "Web + Seminar.",
  explanation: "I webinar sono seminari condotti via internet in tempo reale, con interazione tra relatore e partecipanti (domande, sondaggi)."
},
{
  id: 508,
  question: "Cosa sono le patch?",
  correctAnswer: "Sono importanti aggiornamenti con cui rendere un sistema sempre più sicuro",
  wrongAnswers: [
    "Programmi per disegnare",
    "File musicali",
    "Tipi di carattere decorativi"
  ],
  hint: "Correggono 'buchi' di sicurezza.",
  explanation: "Le patch sono aggiornamenti software rilasciati per correggere vulnerabilità, bug o aggiungere piccole funzionalità."
},
{
  id: 509,
  question: "Cosa sono le SmartArt?",
  correctAnswer: "Elementi grafici di grande impatto visivo con cui creare elenchi, diagrammi e organigrammi",
  wrongAnswers: [
    "Immagini ad alta risoluzione",
    "Video incorporati",
    "File audio"
  ],
  hint: "In Office, si trovano nella scheda Inserisci.",
  explanation: "Le SmartArt sono modelli grafici predefiniti in Microsoft Office per rappresentare visivamente concetti, processi o gerarchie."
},
{
  id: 510,
  question: "Cosa sono le 'Fake News'?",
  correctAnswer: "Articoli, o più in generale pubblicazioni, che contengono informazioni inventate, ingannevoli o distorte",
  wrongAnswers: [
    "Notizie verificate da più fonti",
    "Annunci pubblicitari legali",
    "Comunicati stampa ufficiali"
  ],
  hint: "Notizie false create per disinformare.",
  explanation: "Le fake news sono informazioni deliberatamente false o fuorvianti create per influenzare l'opinione pubblica, fare clickbait o danneggiare qualcuno."
},
{
  id: 511,
  question: "Cosa sono le 'macro' nei file Word ed Excel?",
  correctAnswer: "Piccoli programmi scritti secondo il linguaggio VBA (Visual Basic Applications)",
  wrongAnswers: [
    "Immagini di grandi dimensioni",
    "File compressi",
    "Caratteri speciali"
  ],
  hint: "Automatizzano azioni ripetitive.",
  explanation: "Le macro registrano sequenze di comandi o sono scritte in VBA per automatizzare compiti ripetitivi in documenti Office."
},
{
  id: 512,
  question: "Cosa ti permette di fare la stampa unione?",
  correctAnswer: "Creare documenti personalizzati per ogni destinatario",
  wrongAnswers: [
    "Stampare più copie identiche",
    "Unire più file PDF in uno",
    "Stampare fronte/retro automaticamente"
  ],
  hint: "Utile per lettere, buste, etichette personalizzate.",
  explanation: "La stampa unione combina un documento principale con un elenco di dati (nomi, indirizzi) per generare versioni personalizzate in massa."
},
{
  id: 513,
  question: "Cos'è il PIN?",
  correctAnswer: "Una combinazione di numeri per poter accedere al proprio dispositivo",
  wrongAnswers: [
    "Un codice alfanumerico lungo",
    "Una firma digitale",
    "Un token hardware"
  ],
  hint: "Personal Identification Number (es. come al bancomat).",
  explanation: "Il PIN è un codice numerico segreto (solitamente 4-6 cifre) usato per autenticare l'utente su dispositivi o servizi."
},
{
  id: 514,
  question: "Cos'è il segno grafico?",
  correctAnswer: "Una sequenza di movimento da compiere con il dito sullo schermo del dispositivo mobile prima di accedervi",
  wrongAnswers: [
    "Una password testuale",
    "Un'impronta digitale",
    "Un riconoscimento facciale"
  ],
  hint: "Pattern di sblocco su Android.",
  explanation: "Il pattern (segno grafico) è un metodo di sblocco per dispositivi Android che richiede di tracciare un percorso specifico su una griglia di punti."
},
{
  id: 515,
  question: "Cos'è la password?",
  correctAnswer: "Una combinazione alfanumerica da digitare per poter accedere al proprio dispositivo mobile",
  wrongAnswers: [
    "Un codice solo numerico",
    "Un'impronta digitale",
    "Una sequenza di movimenti"
  ],
  hint: "Può contenere lettere, numeri, simboli.",
  explanation: "La password è una stringa segreta di caratteri (alfanumerici e simboli) usata per autenticare l'identità dell'utente."
},
{
  id: 516,
  question: "Cos'è lo 'Smishing'?",
  correctAnswer: "Il furto dei dati personali che avviene tramite SMS",
  wrongAnswers: [
    "Un attacco via email",
    "Un virus che infetta i file",
    "Un tipo di phishing vocale"
  ],
  hint: "SMS + Phishing.",
  explanation: "Lo smishing è una variante del phishing che utilizza messaggi di testo (SMS) per ingannare le vittime e rubare dati sensibili."
},
{
  id: 517,
  question: "Cos'è lo 'Spyware'?",
  correctAnswer: "È un piccolo programma, che si installa automaticamente sui nostri dispositivi, quando raggiungiamo siti web che possono infettarci",
  wrongAnswers: [
    "Un antivirus",
    "Un programma di pulizia del PC",
    "Un firewall"
  ],
  hint: "Software spia.",
  explanation: "Lo spyware è un malware che si installa spesso senza consenso per monitorare l'attività dell'utente e rubare informazioni."
},
{
  id: 518,
  question: "Cos'è ITT security?",
  correctAnswer: "È l'insieme delle tecnologie con cui proteggere reti informatiche, sistemi operativi, programmi e dati da possibili accessi non autorizzati",
  wrongAnswers: [
    "Un tipo di hardware",
    "Un software per la grafica",
    "Un protocollo di rete"
  ],
  hint: "Sicurezza informatica.",
  explanation: "IT security comprende tutte le misure (tecniche, organizzative) per proteggere sistemi, reti e dati da attacchi, danni o accessi non autorizzati."
},
{
  id: 519,
  question: "Cos'è un account utente?",
  correctAnswer: "È uno spazio personale dal quale un utente può accedere a servizi che il sito mette a disposizione",
  wrongAnswers: [
    "Un file di sistema",
    "Un tipo di computer",
    "Un programma antivirus"
  ],
  hint: "Richiede registrazione con username e password.",
  explanation: "Un account utente è un profilo personale che memorizza preferenze, dati e autorizzazioni per accedere a servizi online o sistemi."
},
{
  id: 520,
  question: "Cos'è un ambiente di apprendimento online?",
  correctAnswer: "Una piattaforma telematica in cui sono sempre disponibili strumenti didattici, collaborativi e di contatto con gli altri partecipanti alla formazione",
  wrongAnswers: [
    "Un'aula fisica con computer",
    "Un libro digitale",
    "Un video su YouTube"
  ],
  hint: "Esempi: Moodle, Google Classroom, piattaforme e-learning.",
  explanation: "Ambiente virtuale che supporta l'erogazione di corsi, la condivisione di materiali, la comunicazione e la valutazione a distanza."
},
{
  id: 521,
  question: "Cos'è un 'hotspot Wi-Fi'?",
  correctAnswer: "È un qualsiasi punto di accesso ad Internet aperto a chi si trova nelle sue vicinanze, raggiungibile tramite il collegamento Wi-Fi",
  wrongAnswers: [
    "Un router domestico protetto",
    "Un cavo Ethernet",
    "Un modem ADSL"
  ],
  hint: "Spesso pubblico e gratuito.",
  explanation: "Un hotspot Wi-Fi è un luogo fisico dove viene offerta connettività internet wireless, spesso in spazi pubblici o commerciali."
},
{
  id: 522,
  question: "Creare un collegamento ipertestuale in una diapositiva significa:",
  correctAnswer: "collegare la presentazione a pagine Web o file esterni",
  wrongAnswers: [
    "Copiare il testo",
    "Inserire un'immagine",
    "Aggiungere un'animazione"
  ],
  hint: "Rende un elemento cliccabile per navigare altrove.",
  explanation: "Un collegamento ipertestuale (link) in PowerPoint permette di saltare a una pagina web, un'altra slide o un file esterno durante la presentazione."
},
{
  id: 523,
  question: "Da cosa dipende la qualità di una rete?",
  correctAnswer: "Principalmente dalla velocità di trasmissione dei dati che vengono scambiati sulla rete stessa",
  wrongAnswers: [
    "Dal colore dei cavi",
    "Dalla marca del router",
    "Dal sistema operativo usato"
  ],
  hint: "Bandwidth e latenza.",
  explanation: "La qualità di una rete si misura in termini di velocità (larghezza di banda), stabilità, latenza e affidabilità della connessione."
},
{
  id: 524,
  question: "Dal pulsante Elementi Grafico, quale delle seguenti azioni NON è possibile effettuare?",
  correctAnswer: "Aggiungere un nuovo grafico",
  wrongAnswers: [
    "Aggiungere titoli degli assi",
    "Aggiungere etichette dati",
    "Aggiungere legenda"
  ],
  hint: "Il pulsante '+' sul grafico modifica elementi esistenti.",
  explanation: "Il pulsante 'Elementi grafico' (icona +) permette di mostrare/nascondere parti di un grafico già creato, ma non di crearne uno nuovo da zero."
},
{
  id: 525,
  question: "Dalla barra multifunzione di Excel, quale procedura permette di eseguire lo zoom del foglio, in modo che l'intervallo di celle selezionato occupi l'intera finestra di Excel?",
  correctAnswer: "Apri la scheda Visualizza, e nel gruppo comandi Zoom, seleziona il pulsante Zoom selezione",
  wrongAnswers: [
    "Usa la rotellina del mouse",
    "Doppio clic sul foglio",
    "Menu File > Zoom"
  ],
  hint: "Zoom per adattare la selezione alla finestra.",
  explanation: "Il comando 'Zoom selezione' adatta il livello di zoom per far entrare esattamente l'intervallo di celle selezionato nell'area visibile della finestra."
},
{
  id: 526,
  question: "Dalla barra multifunzione di Excel, quale procedura ti permette di Formattare le celle?",
  correctAnswer: "Apri la scheda Home e nel gruppo comandi Celle fai clic su Formato e nel menù che si apre scegli l'opzione Formato celle",
  wrongAnswers: [
    "Scheda Inserisci > Formato celle",
    "Tasto destro > Formato",
    "Menu File > Formatta celle"
  ],
  hint: "Il menu Formato contiene 'Formato celle'.",
  explanation: "La finestra 'Formato celle' (Ctrl+1) si apre dal menu Formato nel gruppo Celle della scheda Home e permette di definire numero, allineamento, carattere, bordo, riempimento e protezione."
},
{
  id: 527,
  question: "Dalla barra multifunzione di PowerPoint, tramite il pulsante 'Inserisci' è possibile inserire del testo nel piè di pagina delle diapositive di una presentazione.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "Piè di pagina si inserisce dalla scheda Inserisci > Intestazione e piè di pagina.",
  explanation: "Sì, il piè di pagina (che può contenere data, numero slide, testo personalizzato) si aggiunge tramite Inserisci > Intestazione e piè di pagina."
},
{
  id: 528,
  question: "Dalla barra multifunzione, quale delle seguenti procedure ti permette di nascondere la barra di accesso rapido?",
  correctAnswer: "Fai clic sul pulsante Opzioni visualizzazione barra multifunzione, e nel menu che si apre, seleziona l'opzione Nascondi barra di accesso rapido",
  wrongAnswers: [
    "Tasto destro sulla barra > Nascondi",
    "Menu File > Opzioni > Nascondi barra",
    "Non si può nascondere"
  ],
  hint: "Il menu a discesa accanto alla barra di accesso rapido.",
  explanation: "La barra di accesso rapido (in alto a sinistra) può essere nascosta o spostata sotto la barra multifunzione dalle opzioni di visualizzazione."
},
{
  id: 529,
  question: "Dalla finestra di dialogo 'Intestazioni e piè di pagina' è possibile:",
  correctAnswer: "Impostare la Data e ora",
  wrongAnswers: [
    "Inserire un video",
    "Aggiungere un grafico",
    "Modificare il tema"
  ],
  hint: "In Word, Inserisci > Intestazione e piè di pagina.",
  explanation: "La finestra Intestazione e piè di pagina permette di aggiungere testo, numeri di pagina, data/ora (fissa o aggiornata automaticamente) in testa o a pie' di pagina."
},
{
  id: 530,
  question: "Dalla formattazione dipende:",
  correctAnswer: "l'aspetto visivo dei dati e delle celle",
  wrongAnswers: [
    "il contenuto dei dati",
    "la formula di calcolo",
    "la protezione del foglio"
  ],
  hint: "Come appaiono i dati, non cosa sono.",
  explanation: "La formattazione cambia l'estetica (font, colore, bordi, allineamento) senza alterare i valori o le formule sottostanti."
},
{
  id: 531,
  question: "Dalla scheda 'Trova il mio dispositivo' è possibile localizzare, bloccare e resettare il proprio dispositivo.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "Servizio di Google e Apple per dispositivi persi.",
  explanation: "Servizi come 'Trova il mio dispositivo' (Google) o 'Trova il mio iPhone' (Apple) permettono di localizzare, bloccare o cancellare da remoto un dispositivo smarrito."
},
{
  id: 532,
  question: "Dopo aver creato un nuovo calendario, come posso modificarne il nome?",
  correctAnswer: "Nella sezione 'I miei calendari', accanto al nome del calendario, fai clic sul pulsante Opzioni e seleziona 'Impostazioni e condivisione' e inserisci il nuovo nome",
  wrongAnswers: [
    "Doppio clic sul nome del calendario",
    "Tasto destro > Rinomina",
    "Menu File > Rinomina calendario"
  ],
  hint: "Si modifica dalle impostazioni specifiche del calendario.",
  explanation: "In Google Calendar, il nome del calendario si cambia nelle impostazioni di quel particolare calendario (Impostazioni e condivisione)."
},
{
  id: 533,
  question: "Dopo aver digitato i dati, quale pulsante devi premere per completarne l'inserimento nella cella attiva?",
  correctAnswer: "Invio",
  wrongAnswers: ["Esc", "Tab", "Spazio"],
  hint: "Conferma e sposta alla cella sottostante.",
  explanation: "Il tasto Invio (Enter) conferma l'inserimento nella cella e di default sposta la selezione alla cella sottostante."
},
{
  id: 534,
  question: "Dopo aver effettuato il log in nell'account Google Chrome, qual è il primo step per creare un nuovo calendario?",
  correctAnswer: "Nel menù a sinistra, fai clic sul pulsante contrassegnato dal segno più (+) in corrispondenza di Altri calendari",
  wrongAnswers: [
    "Menu File > Nuovo calendario",
    "Tasto destro sul giorno > Nuovo calendario",
    "Non si può creare da Chrome"
  ],
  hint: "Il + accanto a 'Altri calendari' nella barra laterale.",
  explanation: "In Google Calendar, il pulsante '+' accanto alla voce 'Altri calendari' nel pannello sinistro permette di creare un nuovo calendario secondario."
},
{
  id: 535,
  question: "Dopo aver inserito il titolo in un grafico, è possibile formattarlo. Quale gruppo di comandi ti permettere di svolgere questa operazione?",
  correctAnswer: "Gruppo comandi Carattere della scheda Home",
  wrongAnswers: [
    "Gruppo Stili della scheda Progettazione",
    "Gruppo Dati della scheda Dati",
    "Gruppo Layout della scheda Layout"
  ],
  hint: "Il titolo è testo, quindi si formatta come qualsiasi testo.",
  explanation: "Selezionando il titolo del grafico, si possono usare i normali comandi di formattazione del carattere (font, dimensione, colore) dalla scheda Home."
},
{
  id: 536,
  question: "Dopo aver inserito o selezionato un grafico, quali schede si aggiungono nella barra multifunzione di PowerPoint?",
  correctAnswer: "Struttura grafico e Formato",
  wrongAnswers: [
    "Dati e Revisione",
    "Animazioni e Transizioni",
    "Progettazione e Visualizza"
  ],
  hint: "Schede contestuali verdi.",
  explanation: "Quando si seleziona un grafico in PowerPoint, appaiono due schede contestuali: 'Struttura grafico' (per modificare dati e tipo) e 'Formato' (per stile e aspetto)."
},
{
  id: 537,
  question: "Dopo aver inserito un grafico, che cosa compare nella diapositiva insieme al grafico?",
  correctAnswer: "Un foglio di lavoro di Excel in cui inserire i dati da rappresentare nel grafico",
  wrongAnswers: [
    "Un'immagine di sfondo",
    "Una tabella Word",
    "Un file di testo"
  ],
  hint: "Una mini-finestra Excel per i dati.",
  explanation: "PowerPoint utilizza il motore di Excel per gestire i dati dei grafici. Inserendo un grafico, si apre una piccola finestra Excel per inserire/modificare i valori."
},
{
  id: 538,
  question: "Dopo aver inserito un modello 3D, quale scheda compare nella barra multifunzione di PowerPoint?",
  correctAnswer: "Modello 3D",
  wrongAnswers: [
    "Formato forma",
    "Animazioni",
    "Visualizza"
  ],
  hint: "Scheda contestuale specifica per oggetti 3D.",
  explanation: "Selezionando un oggetto 3D, appare la scheda contestuale 'Modello 3D' con strumenti per ruotare, allineare, animare il modello."
},
{
  id: 539,
  question: "Dopo aver inserito una forma è possibile modificarne il colore interno?",
  correctAnswer: "Sì, tramite il pulsante 'Riempimento Forma'",
  wrongAnswers: [
    "No, il colore è fisso",
    "Solo tramite codice VBA",
    "Solo se la forma è un cerchio"
  ],
  hint: "Secchiello di vernice.",
  explanation: "Il pulsante 'Riempimento forma' nella scheda Formato permette di cambiare il colore di riempimento interno di una forma."
},
{
  id: 540,
  question: "Dopo aver inserito una forma in una diapositiva, quale scheda si aggiunge alla barra multifunzione di PowerPoint?",
  correctAnswer: "Formato forma",
  wrongAnswers: [
    "Struttura tabella",
    "Progettazione",
    "Animazioni"
  ],
  hint: "Scheda contestuale per le forme.",
  explanation: "Selezionando una forma, appare la scheda contestuale 'Formato forma' con strumenti per riempimento, contorno, effetti e dimensioni."
},
{
  id: 541,
  question: "Dopo aver inserito una forma nella diapositiva, il pulsante 'Effetti forma' consente di scegliere:",
  correctAnswer: "l'effetto visivo da applicare alla forma, come l'ombreggiatura",
  wrongAnswers: [
    "il colore di riempimento",
    "lo spessore del bordo",
    "il tipo di forma"
  ],
  hint: "Ombre, riflessi, bagliori, bordi morbidi.",
  explanation: "Gli 'Effetti forma' includono ombre, riflessi, aloni, smussi, rotazioni 3D e altri effetti visivi per rendere la forma più dinamica."
},
{
  id: 542,
  question: "Dopo aver inserito una forma nella diapositiva, il pulsante 'Riempimento forma' consente di scegliere:",
  correctAnswer: "il colore che preferisci dalla tavolozza",
  wrongAnswers: [
    "l'effetto di ombreggiatura",
    "lo spessore della linea",
    "il tipo di carattere del testo"
  ],
  hint: "Colore solido, sfumatura, texture, immagine.",
  explanation: "Il riempimento forma può essere un colore uniforme, una sfumatura, una trama, un'immagine o uno sfondo predefinito."
},
{
  id: 543,
  question: "Dopo aver inserito una tabella, il pulsante Inserisci a destra, che trovi nella scheda di Layout permette di:",
  correctAnswer: "inserire una nuova colonna a destra della colonna selezionata",
  wrongAnswers: [
    "inserire una riga sopra",
    "inserire una riga sotto",
    "inserire una colonna a sinistra"
  ],
  hint: "Se si parla di 'destra', riguarda le colonne.",
  explanation: "Nella scheda Layout di una tabella, 'Inserisci a destra' aggiunge una colonna vuota alla destra della colonna in cui si trova il cursore."
},
{
  id: 544,
  question: "Dopo aver inserito una tabella, il pulsante Inserisci sopra, che trovi nella scheda di Layout permette di:",
  correctAnswer: "aggiungere una nuova riga sopra la riga selezionata",
  wrongAnswers: [
    "aggiungere una colonna a sinistra",
    "aggiungere una riga sotto",
    "aggiungere una colonna a destra"
  ],
  hint: "Se si parla di 'sopra', riguarda le righe.",
  explanation: "'Inserisci sopra' aggiunge una riga vuota sopra la riga in cui si trova il cursore nella tabella."
},
{
  id: 545,
  question: "Dopo aver selezionato il pulsante 'Disegna casella di testo', il cursore assume la forma di:",
  correctAnswer: "una croce rovesciata",
  wrongAnswers: [
    "una freccia",
    "una mano",
    "una lente d'ingrandimento"
  ],
  hint: "Indica che puoi disegnare un rettangolo per la casella di testo.",
  explanation: "Il cursore a forma di croce (+) o croce rovesciata permette di cliccare e trascinare per definire le dimensioni della casella di testo da creare."
},
{
  id: 546,
  question: "Dopo aver selezionato il pulsante 'Forme' del gruppo comandi 'Illustrazioni', ed aver inserito la forma 'Ovale', per disegnare un cerchio perfetto:",
  correctAnswer: "tieni premuto il tasto 'Maiusc' insieme al pulsante sinistro del mouse e trascini il cursore",
  wrongAnswers: [
    "tieni premuto il tasto 'Ctrl'",
    "tieni premuto il tasto 'Alt'",
    "fai doppio clic"
  ],
  hint: "Maiusc vincola le proporzioni.",
  explanation: "Tenendo premuto Maiusc durante il disegno di un ovale, si costringe la forma a mantenere altezza e larghezza uguali, ottenendo un cerchio perfetto."
},
{
  id: 547,
  question: "Dopo aver selezionato l'oggetto da ridimensionare, per modificarne la larghezza, i controlli da utilizzare sono:",
  correctAnswer: "sui lati destro e sinistro",
  wrongAnswers: [
    "sui lati superiori e inferiori",
    "ai quattro angoli",
    "al centro"
  ],
  hint: "Maniglie laterali (orizzontali).",
  explanation: "Trascinando le maniglie poste a metà dei lati destro o sinistro, si modifica solo la larghezza dell'oggetto, mantenendo l'altezza invariata."
},
{
  id: 548,
  question: "Dopo aver selezionato l'oggetto da ridimensionare, per modificarne l'altezza, i controlli da utilizzare sono:",
  correctAnswer: "sui lati superiori e inferiori",
  wrongAnswers: [
    "sui lati destro e sinistro",
    "ai quattro angoli",
    "al centro"
  ],
  hint: "Maniglie superiori/inferiori (verticali).",
  explanation: "Trascinando le maniglie poste a metà dei lati superiore o inferiore, si modifica solo l'altezza dell'oggetto, mantenendo la larghezza invariata."
},
{
  id: 549,
  question: "Dopo aver selezionato l'oggetto da ridimensionare, per modificarne sia la larghezza che l'altezza, i controlli da utilizzare sono:",
  correctAnswer: "ai quattro angoli",
  wrongAnswers: [
    "sui lati destro e sinistro",
    "sui lati superiori e inferiori",
    "al centro"
  ],
  hint: "Maniglie d'angolo.",
  explanation: "Trascinando le maniglie poste agli angoli, si ridimensiona proporzionalmente sia l'altezza che la larghezza (mantenendo solitamente le proporzioni originali)."
},
{
  id: 550,
  question: "Dopo aver selezionato un grafico, è possibile eliminarlo utilizzando il pulsante 'Canc' della tastiera?",
  correctAnswer: "Sì, è possibile",
  wrongAnswers: ["No, bisogna usare il menu contestuale", "No, bisogna usare il tasto Backspace", "Solo se è vuoto"],
  hint: "Delete rimuove l'oggetto selezionato.",
  explanation: "Selezionando un grafico (cliccando sul suo bordo) e premendo il tasto Canc (Delete) sulla tastiera, l'oggetto viene eliminato."
},
{
  id: 551,
  question: "Dopo aver selezionato un oggetto compare il riquadro di selezione. Quanti controlli ha il riquadro di selezione lungo i bordi?",
  correctAnswer: "4 su ogni angolo del riquadro e 4 su ogni lato",
  wrongAnswers: [
    "Solo 4 angoli",
    "6 controlli totali",
    "8 controlli totali"
  ],
  hint: "8 maniglie totali: 4 angolari e 4 laterali.",
  explanation: "Il riquadro di selezione di un oggetto ha 8 maniglie: 4 agli angoli (per ridimensionamento proporzionale) e 4 a metà di ciascun lato (per ridimensionamento in una sola direzione)."
},
{
  id: 552,
  question: "Dopo aver selezionato una cella del tuo foglio di lavoro, quale pulsante premi per spostarti nella prima cella a destra?",
  correctAnswer: "Tab",
  wrongAnswers: ["Invio", "Spazio", "Freccia destra"],
  hint: "Tabulatore.",
  explanation: "Il tasto Tab sposta la selezione orizzontalmente verso destra nella stessa riga. Invio sposta verso il basso."
},
{
  id: 553,
  question: "Dopo aver trovato la parola e/o frase in un documento, il comando 'Sostituisci tutto':",
  correctAnswer: "sostituisce tutte le parole o frasi trovate nel documento con il nuovo testo",
  wrongAnswers: [
    "sostituisce solo la prima occorrenza",
    "chiede conferma per ogni sostituzione",
    "cancella tutte le occorrenze"
  ],
  hint: "Cambia automaticamente tutte le corrispondenze.",
  explanation: "'Sostituisci tutto' esegue una sostituzione globale di tutte le occorrenze del testo cercato senza chiedere conferma per ciascuna."
},
{
  id: 554,
  question: "Dove compare l'immagine che inserisci nel documento?",
  correctAnswer: "Nella posizione in cui si trova il punto di inserimento",
  wrongAnswers: [
    "Sempre all'inizio del documento",
    "Sempre al centro della pagina",
    "In una nuova pagina"
  ],
  hint: "Dove lampeggia il cursore.",
  explanation: "Word inserisce l'immagine nel punto del documento dove si trova il cursore (punto di inserimento) al momento del comando."
},
{
  id: 555,
  question: "Dove possiamo conservare materialmente le componenti di un sito?",
  correctAnswer: "Presso un ISP (Internet Service Provider)",
  wrongAnswers: [
    "Sul proprio computer",
    "Su una chiavetta USB",
    "Sul cloud personale"
  ],
  hint: "Server di hosting.",
  explanation: "I file di un sito web risiedono su server web gestiti da provider di hosting (ISP), che li rendono accessibili 24/7 via internet."
},
{
  id: 556,
  question: "Dove si trova la finestra di dialogo Conteggio Parole?",
  correctAnswer: "Nella barra di stato",
  wrongAnswers: [
    "Nel menu File",
    "Nella scheda Revisione",
    "Nella scheda Visualizza"
  ],
  hint: "Clicca sul conteggio parole in basso a sinistra.",
  explanation: "Cliccando sul conteggio parole nella barra di stato di Word, si apre una finestra di dialogo con statistiche dettagliate (parole, caratteri, righe, paragrafi)."
},
{
  id: 557,
  question: "Dropbox è un servizio di:",
  correctAnswer: "Cloud storage",
  wrongAnswers: [
    "Social network",
    "Antivirus",
    "Browser web"
  ],
  hint: "Archiviazione e sincronizzazione file online.",
  explanation: "Dropbox è un servizio di cloud storage che permette di salvare file su server remoti e sincronizzarli tra dispositivi."
},
{
  id: 558,
  question: "Dropbox, Microsoft One Drive, iCloud sono:",
  correctAnswer: "servizi di Cloud storage",
  wrongAnswers: [
    "sistemi operativi",
    "programmi antivirus",
    "browser web"
  ],
  hint: "Archiviazione online.",
  explanation: "Sono tutti servizi che offrono spazio di archiviazione su server remoti (cloud) per backup, sincronizzazione e condivisione file."
},
{
  id: 559,
  question: "Durante la composizione di un elenco, quale combinazione di tasti utilizzi per andare a capo senza creare una nuova voce dell'elenco?",
  correctAnswer: "Maiusc + Invio",
  wrongAnswers: [
    "Ctrl + Invio",
    "Alt + Invio",
    "Solo Invio"
  ],
  hint: "Interruzione di riga manuale (soft return).",
  explanation: "Maiusc + Invio inserisce un'interruzione di riga all'interno dello stesso paragrafo, evitando di creare un nuovo punto elenco."
},
{
  id: 560,
  question: "Durante la procedura guidata per la stampa unione, prima di stampare è possibile personalizzare i singoli documenti?",
  correctAnswer: "Sì, selezionando il pulsante Modifica singole lettere",
  wrongAnswers: [
    "No, sono tutti uguali",
    "Solo il primo",
    "Solo l'ultimo"
  ],
  hint: "Genera un documento Word con tutte le copie.",
  explanation: "L'opzione 'Modifica singole lettere' crea un nuovo documento contenente tutte le versioni personalizzate, che possono essere modificate singolarmente prima della stampa."
},
{
  id: 561,
  question: "È consigliato usare le icone nei testi formali",
  correctAnswer: "Falso",
  wrongAnswers: ["Vero"],
  hint: "I documenti formali richiedono sobrietà.",
  explanation: "Nei documenti formali (relazioni, lettere ufficiali) è preferibile evitare elementi grafici decorativi come icone, per mantenere un aspetto professionale."
},
{
  id: 562,
  question: "È importante riesaminare periodicamente le proprie impostazioni sulla privacy sui social.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "Le piattaforme aggiornano spesso policy e impostazioni.",
  explanation: "Controllare regolarmente le impostazioni privacy sui social network permette di gestire chi vede i propri contenuti e proteggere i dati personali."
},
{
  id: 563,
  question: "È possibile accedere alla Modalità di lettura, Layout stampa e Layout Web anche dalla:",
  correctAnswer: "barra di stato",
  wrongAnswers: [
    "barra del titolo",
    "barra di accesso rapido",
    "barra degli strumenti"
  ],
  hint: "Icone in basso a destra in Word.",
  explanation: "Nella barra di stato di Word (in basso) ci sono le icone per passare rapidamente tra le diverse modalità di visualizzazione: Layout di stampa, Layout Web, Modalità di lettura."
},
{
  id: 564,
  question: "È possibile accedere alle risorse condivise da ogni parte del mondo?",
  correctAnswer: "Sì, non ci sono limiti di accesso in base alla posizione geografica",
  wrongAnswers: [
    "No, solo dalla stessa rete locale",
    "Solo dallo stesso paese",
    "Solo se il proprietario è online"
  ],
  hint: "Il cloud è accessibile ovunque ci sia internet.",
  explanation: "Risorse cloud condivise (es. file su OneDrive, Google Drive) sono accessibili da qualsiasi luogo con connessione internet, a meno di restrizioni esplicite impostate dal proprietario."
},
{
  id: 565,
  question: "È possibile applicare più effetti di animazione sullo stesso oggetto?",
  correctAnswer: "Sì, un effetto in entrata, uno per enfatizzarlo, e uno per l'uscita",
  wrongAnswers: [
    "No, solo un effetto per oggetto",
    "Solo due effetti",
    "Solo se sono dello stesso tipo"
  ],
  hint: "Si possono concatenare animazioni.",
  explanation: "In PowerPoint, è possibile aggiungere più effetti di animazione a un oggetto (es. appare, si muove, scompare) usando 'Aggiungi animazione'."
},
{
  id: 566,
  question: "È possibile cambiare il layout di una singola diapositiva?",
  correctAnswer: "Sì, tramite il pulsante Layout nel gruppo comandi Diapositive",
  wrongAnswers: [
    "No, cambia per tutta la presentazione",
    "Solo all'inizio della creazione",
    "Solo se la slide è vuota"
  ],
  hint: "Layout individuale.",
  explanation: "Ogni diapositiva può avere un layout diverso (Titolo e contenuto, Due contenuti, etc.) selezionandola e cliccando su Layout nella scheda Home."
},
{
  id: 567,
  question: "È possibile connettere il dispositivo alla rete Internet in assenza di Wi-Fi?",
  correctAnswer: "Sì, tramite una rete mobile",
  wrongAnswers: [
    "No, serve per forza il Wi-Fi",
    "Solo con il Bluetooth",
    "Solo via satellite"
  ],
  hint: "Dati cellulari 4G/5G.",
  explanation: "Oltre al Wi-Fi, si può usare la rete dati mobile (con SIM) o una connessione cablata Ethernet per accedere a internet."
},
{
  id: 568,
  question: "È possibile creare delle cartelle all'interno delle app di posta elettronica.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "Per organizzare le email.",
  explanation: "I client di posta (Gmail, Outlook) permettono di creare cartelle (o etichette in Gmail) per classificare e archiviare i messaggi."
},
{
  id: 569,
  question: "È possibile eliminare e/o modificare un contatto dalla lista dei contatti email.",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "La rubrica è gestibile dall'utente.",
  explanation: "La rubrica contatti è completamente modificabile: si possono aggiungere, modificare o eliminare contatti a piacimento."
},
{
  id: 570,
  question: "È possibile inserire modelli 3D nella presentazione PowerPoint?",
  correctAnswer: "Sì, tramite la scheda 'inserisci' e nel gruppo comandi 'Illustrazioni'",
  wrongAnswers: [
    "No, solo immagini 2D",
    "Solo con plugin di terze parti",
    "Solo nella versione a pagamento"
  ],
  hint: "Funzione disponibile nelle versioni recenti di Office.",
  explanation: "PowerPoint supporta l'inserimento di modelli 3D (file .glb, .obj, etc.) che possono essere ruotati e animati."
},
{
  id: 571,
  question: "È possibile inserire nel piè di pagina delle diapositive una data che si aggiorni automaticamente?",
  correctAnswer: "Sì, è possibile",
  wrongAnswers: ["No, deve essere inserita manualmente", "Solo se il PC è connesso a internet", "Solo nelle presentazioni online"],
  hint: "Inserisci > Intestazione e piè di pagina > Data e ora > Aggiorna automaticamente.",
  explanation: "Inserendo il campo data dinamico, la data si aggiornerà ogni volta che la presentazione viene aperta o stampata, riflettendo la data corrente."
},
{
  id: 572,
  question: "È possibile inserire un'immagine in una diapositiva?",
  correctAnswer: "Sì, ma il file dell'immagine deve trovarsi sul disco rigido del computer o su un altro dispositivo removibile ad esso collegato",
  wrongAnswers: [
    "No, solo clipart",
    "Solo immagini da internet",
    "Solo se la presentazione è online"
  ],
  hint: "Bisogna avere il file sorgente.",
  explanation: "PowerPoint richiede l'accesso al file immagine (locale, rete o online) per inserirlo. Una volta inserito, l'immagine viene incorporata nel file .pptx."
},
{
  id: 573,
  question: "È possibile modificare il Tema della presentazione anche dopo averla creata?",
  correctAnswer: "Sì, tramite la scheda Progettazione",
  wrongAnswers: [
    "No, bisogna rifare la presentazione",
    "Solo i colori, non i font",
    "Solo nella prima slide"
  ],
  hint: "Cambia aspetto di tutte le slide.",
  explanation: "Applicando un nuovo tema dalla scheda Progettazione, PowerPoint aggiorna automaticamente colori, font e sfondi di tutte le diapositive."
},
{
  id: 574,
  question: "È possibile modificare le dimensioni di un grafico?",
  correctAnswer: "Vero",
  wrongAnswers: ["Falso"],
  hint: "Maniglie di ridimensionamento.",
  explanation: "I grafici sono oggetti ridimensionabili: selezionando il grafico, si possono trascinare le maniglie ai bordi per modificarne le dimensioni."
},
{
  id: 575,
  question: "È possibile personalizzare la barra di accesso rapido?",
  correctAnswer: "Sì, è possibile scegliere i comandi da aggiungere o nascondere",
  wrongAnswers: [
    "No, è fissa",
    "Solo il colore",
    "Solo in Excel"
  ],
  hint: "Menu a discesa accanto alla barra.",
  explanation: "Cliccando la freccia in basso a destra della barra di accesso rapido (in alto a sinistra), si possono aggiungere/rimuovere comandi rapidi."
},
{
  id: 576,
  question: "È possibile personalizzare la barra di stato di Word?",
  correctAnswer: "Sì, è possibile scegliere i comandi da aggiungere o nascondere",
  wrongAnswers: [
    "No, è fissa",
    "Solo il colore",
    "Solo in modalità schermo intero"
  ],
  hint: "Tasto destro sulla barra di stato.",
  explanation: "Cliccando con il tasto destro sulla barra di stato, si apre un menu per selezionare quali informazioni visualizzare (es. numero pagina, conteggio parole, lingua)."
},
{
  id: 577,
  question: "È possibile pianificare il backup dei dati nel sistema operativo Windows?",
  correctAnswer: "Sì, dalla sezione Sistema e Sicurezza del Pannello di controllo > Backup e ripristino",
  wrongAnswers: [
    "No, non esiste backup in Windows",
    "Solo con software di terze parti",
    "Solo per i file di sistema"
  ],
  hint: "Strumento integrato di backup.",
  explanation: "Windows include uno strumento di backup che permette di pianificare copie periodiche dei file su un'unità esterna o di rete."
},
{
  id: 578,
  question: "È possibile salvare un documento Excel su OneDrive?",
  correctAnswer: "Sì, bisogna accertarsi di aver effettuato il log in nel proprio account Microsoft",
  wrongAnswers: [
    "No, OneDrive è solo per file Word",
    "Solo se si ha un abbonamento a pagamento",
    "Solo da browser web"
  ],
  hint: "Salva con nome > OneDrive.",
  explanation: "Dopo aver eseguito l'accesso con l'account Microsoft, si può salvare qualsiasi file di Office su OneDrive tramite 'Salva con nome' > OneDrive."
},
{
    id: 579,
    question: "Che cos’è lo “Shoulder Surfing”?",
    correctAnswer: "La tecnica con cui il pirata informatico spia la vittima per rubarle i dati (es. guardando il PIN al bancomat)",
    wrongAnswers: ["Navigare in internet stando in piedi", "Un tipo di sport acquatico", "Un virus che colpisce le spalle"],
    hint: "Significa letteralmente 'fare surf sulle spalle' di qualcuno.",
    explanation: "È una tecnica di ingegneria sociale fisica: l'hacker osserva fisicamente l'utente mentre digita password o PIN."
  },
  {
    id: 580,
    question: "Che cos’è l’“Eavesdropping”?",
    correctAnswer: "La tecnica di intercettazione non autorizzata delle conversazioni private altrui",
    wrongAnswers: ["Un software per la musica", "L'invio di email a pioggia", "Un blocco del sistema"],
    hint: "In italiano si traduce come 'origliare'.",
    explanation: "Nell'ambito della sicurezza, indica l'intercettazione segreta di comunicazioni (dati, voce) in tempo reale."
  },
  {
    id: 581,
    question: "Lo standard ISO/27001 è:",
    correctAnswer: "una norma internazionale per gestire la sicurezza delle informazioni",
    wrongAnswers: ["uno standard per la produzione di video", "una regola per costruire computer", "un formato di file compresso"],
    hint: "Riguarda la gestione della sicurezza aziendale (ISMS).",
    explanation: "Definisce i requisiti per impostare, implementare, mantenere e migliorare un sistema di gestione della sicurezza delle informazioni."
  },
  {
    id: 582,
    question: "In Windows 11, qual è la sequenza per scegliere il colore di sfondo del desktop?",
    correctAnswer: "Impostazioni > Personalizzazione > Sfondo > Tinta unita",
    wrongAnswers: ["Start > Colori", "Pannello di controllo > Schermo", "Esplora file > Colore"],
    hint: "Devi andare nella sezione che gestisce l'aspetto grafico.",
    explanation: "In Windows 11, tutte le modifiche estetiche (temi, sfondi, colori) sono raggruppate nella sezione 'Personalizzazione' delle Impostazioni."
  },
  {
    id: 583,
    question: "Quale tra le seguenti applicazioni di Windows 11 consente di realizzare “screenshot”?",
    correctAnswer: "Strumento di cattura",
    wrongAnswers: ["Paint 3D", "Blocco Note", "Windows Media Player"],
    hint: "L'icona è spesso una forbice o una macchina fotografica.",
    explanation: "Lo Strumento di cattura è l'app nativa di Windows per fotografare porzioni o l'intero schermo."
  },
  {
    id: 584,
    question: "In Windows 11, per disinstallare un’applicazione, occorre andare su:",
    correctAnswer: "Impostazioni > App > App e funzionalità",
    wrongAnswers: ["Cestino", "Esplora File > Programmi", "Start > Spegni"],
    hint: "Cerca la gestione delle Applicazioni.",
    explanation: "Il metodo moderno per rimuovere software in Windows 11 è attraverso il menu Impostazioni dedicato alle App."
  },
  {
    id: 585,
    question: "Quale unità di misura indica la risoluzione di stampa di una stampante?",
    correctAnswer: "DPI (Dots Per Inch)",
    wrongAnswers: ["PPM (Pagine Per Minuto)", "CPU", "RAM"],
    hint: "Punti per pollice.",
    explanation: "I DPI indicano quanti punti di inchiostro la stampante può posizionare in un pollice lineare; più alto è il numero, migliore è la qualità."
  },
  {
    id: 586,
    question: "Quale unità di misura indica la velocità di stampa di una stampante?",
    correctAnswer: "PPM (Pages Per Minute)",
    wrongAnswers: ["DPI", "GHz", "GB"],
    hint: "Quante pagine fa in 60 secondi.",
    explanation: "PPM misura la velocità meccanica della stampante nel produrre pagine standard."
  },
  {
    id: 587,
    question: "In Word, qual è la procedura per aggiungere i bordi ai paragrafi?",
    correctAnswer: "Scheda Home > Gruppo Paragrafo > Pulsante Bordi",
    wrongAnswers: ["Scheda Inserisci > Bordi", "Scheda Layout > Margini", "Scheda Visualizza > Riquadri"],
    hint: "L'icona sembra un quadratino diviso in 4.",
    explanation: "Il menu Bordi permette di aggiungere linee sopra, sotto, ai lati o intorno al testo selezionato."
  },
  {
    id: 588,
    question: "Quale tra le seguenti è l'unità di misura per definire la dimensione dei caratteri?",
    correctAnswer: "Punto tipografico (pt)",
    wrongAnswers: ["Centimetri", "Pixel", "Millimetri"],
    hint: "Quando scegli '12' in Word, sono 12...",
    explanation: "La dimensione del font si misura tradizionalmente in punti (1 punto ≈ 1/72 di pollice)."
  },
  {
    id: 589,
    question: "In Excel, qual è la sintassi corretta della funzione logica SE?",
    correctAnswer: "=SE(Test; [se_vero]; [se_falso])",
    wrongAnswers: ["=SE([se_vero]; [se_falso])", "=SE(Test : Risultato)", "=SE(Test + Vero + Falso)"],
    hint: "Prima la condizione, poi cosa fare se sì, poi cosa fare se no.",
    explanation: "La funzione richiede tre parti: il test logico da verificare, il valore da restituire se vero, e il valore se falso."
  },
  {
    id: 590,
    question: "In Excel, il messaggio di errore #VALORE! indica che:",
    correctAnswer: "è stato utilizzato un tipo di argomento errato (es. testo al posto di numeri)",
    wrongAnswers: ["la cella è troppo piccola", "la formula è scritta bene ma il risultato è zero", "manca il riferimento"],
    hint: "Stai cercando di sommare 'Mele' + 5.",
    explanation: "Excel restituisce #VALORE! quando la formula si aspetta un numero ma trova del testo o un altro tipo di dato incompatibile."
  },
  {
    id: 591,
    question: "Quale tipo di grafico è preferibile per mostrare l'andamento dei dati in un arco di tempo?",
    correctAnswer: "Grafico a linee",
    wrongAnswers: ["Grafico a torta", "Grafico a dispersione", "Grafico a mappa"],
    hint: "Collega i punti nel tempo.",
    explanation: "I grafici a linee sono ideali per visualizzare trend e cambiamenti continui su una scala temporale."
  },
  {
    id: 592,
    question: "Quale tipo di grafico utilizza colonne verticali per rappresentare i dati?",
    correctAnswer: "Istogramma",
    wrongAnswers: ["Grafico a barre (orizzontali)", "Grafico a torta", "Grafico azionario"],
    hint: "Le barre vanno dal basso verso l'alto.",
    explanation: "L'istogramma è il classico grafico a colonne verticali usato per confrontare categorie di dati."
  },
  {
    id: 593,
    question: "In PowerPoint, la visualizzazione 'Pagina note' serve a:",
    correctAnswer: "mostrare la diapositiva e le relative note del relatore in un layout di stampa",
    wrongAnswers: ["vedere solo le immagini", "modificare il video", "presentare al pubblico"],
    hint: "Utile per stampare un copione.",
    explanation: "Questa visualizzazione permette di vedere come verranno stampate le slide insieme alle note scritte sotto di esse."
  },
  {
    id: 594,
    question: "In PowerPoint, per avviare la presentazione dalla diapositiva corrente si usa:",
    correctAnswer: "Maiusc + F5",
    wrongAnswers: ["F5", "Alt + F5", "Ctrl + F5"],
    hint: "F5 parte dall'inizio, aggiungi Maiusc per partire da qui.",
    explanation: "Mentre F5 avvia la presentazione dalla prima slide, Maiusc+F5 la avvia da quella attualmente visualizzata."
  },
  {
    id: 595,
    question: "Che cos'è un 'Worm' informatico?",
    correctAnswer: "Un malware che si replica e diffonde autonomamente senza bisogno di un file ospite",
    wrongAnswers: ["Un virus che cancella solo file Word", "Un errore hardware", "Un programma di grafica"],
    hint: "Striscia da solo nella rete.",
    explanation: "A differenza dei virus che infettano altri file, i Worm sono programmi indipendenti che si propagano sfruttando le vulnerabilità di rete."
  },
  {
    id: 596,
    question: "Quale licenza permette di utilizzare le immagini liberamente menzionando l'autore?",
    correctAnswer: "Creative Commons (spesso CC BY)",
    wrongAnswers: ["Copyright totale", "Marchio registrato", "Brevetto"],
    hint: "Permette la condivisione creativa.",
    explanation: "Le licenze Creative Commons offrono un modo standard per concedere permessi di diritto d'autore; la clausola BY richiede l'attribuzione."
  },
  {
    id: 597,
    question: "In Google Drive, l'opzione 'Condividi tramite link' permette di:",
    correctAnswer: "generare un URL per far accedere altri utenti al file",
    wrongAnswers: ["inviare il file via fax", "stampare il file", "proteggere il file con password biometrica"],
    hint: "Chiunque abbia il link può accedere.",
    explanation: "Crea un collegamento web che può essere inviato a chiunque per dare accesso al documento senza dover inserire ogni email."
  },
  {
    id: 598,
    question: "In Google Calendar, l'opzione 'Visibilità predefinita' serve a:",
    correctAnswer: "scegliere se rendere l'evento Pubblico o Privato",
    wrongAnswers: ["cambiare il colore dell'evento", "cancellare l'evento", "invitare persone"],
    hint: "Decide chi può vedere i dettagli.",
    explanation: "Permette di stabilire se i dettagli dell'evento sono visibili a chi ha accesso al tuo calendario o se devono rimanere nascosti (Privato)."
  },
  {
    id: 599,
    question: "Quale combinazione di tasti permette di passare rapidamente tra le app aperte in Windows?",
    correctAnswer: "Alt + Tab",
    wrongAnswers: ["Ctrl + Tab", "Maiusc + Tab", "Win + D"],
    hint: "Mostra le miniature delle finestre.",
    explanation: "Alt + Tab apre il task switcher per selezionare un'altra finestra attiva."
  },
  {
    id: 600,
    question: "In Windows 11, la combinazione 'Win + V' apre:",
    correctAnswer: "la cronologia degli Appunti",
    wrongAnswers: ["il menu Start", "le impostazioni", "il volume"],
    hint: "Dove trovi le cose copiate in precedenza.",
    explanation: "Apre un pannello che mostra gli ultimi elementi copiati (testo, immagini) permettendo di incollarli nuovamente."
  },
  {
    id: 601,
    question: "Cosa significa 'Deframmentare' un disco rigido?",
    correctAnswer: "Riordinare i dati frammentati per migliorare le prestazioni",
    wrongAnswers: ["Cancellare tutti i dati", "Formattare il disco", "Rompere il disco"],
    hint: "Mettere in ordine i pezzi.",
    explanation: "La deframmentazione riunisce le parti di file sparse sul disco, rendendo la lettura più veloce (utile su HDD meccanici)."
  },
  {
    id: 602,
    question: "Quale porta collega solitamente il computer a una rete locale LAN via cavo?",
    correctAnswer: "Ethernet (RJ-45)",
    wrongAnswers: ["HDMI", "USB", "VGA"],
    hint: "Sembra una presa del telefono ma più grande.",
    explanation: "La porta Ethernet permette il collegamento cablato alla rete per una connessione stabile e veloce."
  },
  {
    id: 603,
    question: "In Excel, il quadratino di riempimento permette di:",
    correctAnswer: "copiare formule o completare serie di dati trascinandolo",
    wrongAnswers: ["chiudere il programma", "cancellare la cella", "spostare la finestra"],
    hint: "L'angolo in basso a destra della cella.",
    explanation: "Trascinando il quadratino, Excel copia il contenuto o estende una serie logica (es. lunedì, martedì...) alle celle adiacenti."
  },
  {
    id: 604,
    question: "Quale formato di file conserva le animazioni di PowerPoint ma si apre direttamente come presentazione?",
    correctAnswer: ".ppsx (PowerPoint Show)",
    wrongAnswers: [".pptx", ".doc", ".pdf"],
    hint: "Show, non presentazione editabile.",
    explanation: "I file .ppsx si avviano immediatamente in modalità presentazione a schermo intero invece di aprire l'interfaccia di modifica."
  },
  {
    id: 605,
    question: "In Word, per interrompere una pagina e iniziarne una nuova si usa:",
    correctAnswer: "Interruzione di pagina (Ctrl + Invio)",
    wrongAnswers: ["Premere Invio tante volte", "Interruzione di colonna", "Barra spaziatrice"],
    hint: "Non usare Invio ripetutamente!",
    explanation: "L'interruzione di pagina forza il testo successivo all'inizio della pagina seguente in modo pulito."
  },
  {
    id: 606,
    question: "Cosa sono i 'Cookie'?",
    correctAnswer: "Piccoli file di testo salvati dai siti web sul dispositivo dell'utente",
    wrongAnswers: ["Virus pericolosi", "Programmi di grafica", "Biscotti reali"],
    hint: "Memorizzano preferenze e sessioni.",
    explanation: "I cookie servono a ricordare le preferenze dell'utente, il carrello della spesa o lo stato di login."
  },
  {
    id: 607,
    question: "La 'Navigazione in incognito' impedisce:",
    correctAnswer: "al browser di salvare la cronologia e i cookie sul computer",
    wrongAnswers: ["al provider di vedere cosa fai", "ai siti di tracciarti", "ai virus di entrare"],
    hint: "Protegge la privacy locale.",
    explanation: "Evita che il browser memorizzi dati di navigazione sul dispositivo locale, ma non rende invisibili all'esterno (ISP, siti)."
  },
  {
    id: 608,
    question: "In un indirizzo email, cosa c'è dopo il simbolo @?",
    correctAnswer: "Il nome del dominio (es. gmail.com)",
    wrongAnswers: ["Il nome utente", "La password", "Il protocollo"],
    hint: "Chi fornisce il servizio.",
    explanation: "La parte dopo la chiocciola identifica il server di posta o l'organizzazione che gestisce l'indirizzo."
  },
  {
    id: 609,
    question: "Quale tra i seguenti è un sistema operativo Open Source?",
    correctAnswer: "Linux",
    wrongAnswers: ["Windows", "macOS", "iOS"],
    hint: "Il pinguino.",
    explanation: "Linux è il più famoso sistema operativo a codice aperto, liberamente modificabile e distribuibile."
  },
  {
    id: 610,
    question: "Il 'Pharming' è una tecnica fraudolenta che:",
    correctAnswer: "reindirizza l'utente su un sito web falso anche se digita l'indirizzo corretto",
    wrongAnswers: ["invia email di spam", "blocca il computer", "ruba il mouse"],
    hint: "Manipola il DNS.",
    explanation: "A differenza del phishing (che usa link), il pharming corrompe il sistema di risoluzione dei nomi per deviare il traffico."
  },
  {
    id: 611,
    question: "In Excel, la funzione MEDIA calcola:",
    correctAnswer: "la media aritmetica dei valori nell'intervallo",
    wrongAnswers: ["la somma dei valori", "il valore più alto", "il valore centrale"],
    hint: "Somma diviso numero.",
    explanation: "Restituisce il valore medio sommando tutti i numeri e dividendoli per il loro conteggio."
  },
  {
    id: 612,
    question: "In Excel, la funzione CONTA.NUMERI serve a:",
    correctAnswer: "contare quante celle in un intervallo contengono numeri",
    wrongAnswers: ["sommare i numeri", "contare le celle vuote", "contare le celle con testo"],
    hint: "Ignora il testo.",
    explanation: "Conta solo le celle che hanno valori numerici, ignorando testo o celle vuote."
  },
  {
    id: 613,
    question: "Qual è il vantaggio dell'uso degli 'Stili' in Word?",
    correctAnswer: "Permettono di formattare rapidamente il documento e creare sommari automatici",
    wrongAnswers: ["Colorano solo il testo", "Non servono a nulla", "Servono solo per stampare"],
    hint: "Titolo 1, Titolo 2...",
    explanation: "L'uso degli stili garantisce coerenza grafica e permette a Word di generare automaticamente l'indice dei contenuti."
  },
  {
    id: 614,
    question: "Cosa permette di fare la 'Visualizzazione Struttura' in Word?",
    correctAnswer: "Gestire la struttura del documento spostando interi capitoli o paragrafi",
    wrongAnswers: ["Vedere le immagini", "Stampare il documento", "Leggere a schermo intero"],
    hint: "Lavora sui livelli dei titoli.",
    explanation: "Questa vista nasconde la formattazione e permette di riorganizzare facilmente la gerarchia del testo."
  },
  {
    id: 615,
    question: "In PowerPoint, per inserire un grafico da zero si usa:",
    correctAnswer: "Scheda Inserisci > Grafico",
    wrongAnswers: ["Scheda Disegno > Grafico", "Copia e incolla da Paint", "Non si può"],
    hint: "Apre una finestra Excel per i dati.",
    explanation: "È il comando standard per creare visualizzazioni dati all'interno della presentazione."
  },
  {
    id: 616,
    question: "La 'Modalità relatore' in PowerPoint serve a:",
    correctAnswer: "mostrare al presentatore le note e la slide successiva, mentre il pubblico vede solo la slide corrente",
    wrongAnswers: ["mostrare tutto al pubblico", "nascondere la presentazione", "modificare le slide in diretta"],
    hint: "Richiede due schermi (es. PC e proiettore).",
    explanation: "È uno strumento fondamentale per chi presenta, offrendo controllo e supporto visivo privato."
  },
  {
    id: 617,
    question: "Quale protocollo viene usato per inviare la posta elettronica?",
    correctAnswer: "SMTP (Simple Mail Transfer Protocol)",
    wrongAnswers: ["POP3", "IMAP", "HTTP"],
    hint: "S per 'Send' (inviare - mnemonico).",
    explanation: "SMTP è il protocollo standard per l'invio di email verso i server, mentre POP3 e IMAP servono per riceverla."
  },
  {
    id: 618,
    question: "Quale protocollo serve per ricevere la posta mantenendola sul server?",
    correctAnswer: "IMAP",
    wrongAnswers: ["POP3", "SMTP", "FTP"],
    hint: "Sincronizza più dispositivi.",
    explanation: "IMAP permette di gestire la posta direttamente sul server, ideale per chi usa più dispositivi (PC, smartphone)."
  },
  {
    id: 619,
    question: "In Windows 11, cosa sono i 'Widget'?",
    correctAnswer: "Schede dinamiche che mostrano notizie, meteo e informazioni personalizzate",
    wrongAnswers: ["Virus", "Programmi di installazione", "File di sistema"],
    hint: "Pannello a comparsa laterale.",
    explanation: "I widget offrono accesso rapido a informazioni in tempo reale senza dover aprire le relative app."
  },
  {
    id: 620,
    question: "Cosa fa la funzione 'Blocca riquadri' in Excel?",
    correctAnswer: "Mantiene visibili righe o colonne specifiche mentre si scorre il foglio",
    wrongAnswers: ["Impedisce la modifica dei dati", "Blocca il computer", "Chiude il file"],
    hint: "Utile per non perdere le intestazioni.",
    explanation: "Permette di 'congelare' le intestazioni di riga o colonna in modo che siano sempre visibili durante lo scorrimento dei dati."
  },
  {
    id: 621,
    question: "In Word, il 'Pedice' posiziona il testo:",
    correctAnswer: "più in basso e più piccolo rispetto alla riga (es. H2O)",
    wrongAnswers: ["più in alto", "al centro", "barrato"],
    hint: "Sotto la linea.",
    explanation: "Usato tipicamente nelle formule chimiche per scrivere i numeri in basso."
  },
  {
    id: 622,
    question: "In Word, l'Apice posiziona il testo:",
    correctAnswer: "più in alto e più piccolo rispetto alla riga (es. km2)",
    wrongAnswers: ["più in basso", "sottolineato", "in grassetto"],
    hint: "Sopra la linea.",
    explanation: "Usato per note a piè di pagina o esponenti matematici."
  },
  {
    id: 623,
    question: "Che cos'è un 'Keylogger'?",
    correctAnswer: "Un malware che registra i tasti premuti sulla tastiera per rubare password",
    wrongAnswers: ["Un programma per pulire la tastiera", "Un driver", "Un tipo di mouse"],
    hint: "Key (tasto) + Log (registra).",
    explanation: "È uno strumento di spionaggio che cattura tutto ciò che l'utente digita, incluse credenziali sensibili."
  },
  {
    id: 624,
    question: "In Excel, per selezionare colonne non adiacenti si usa:",
    correctAnswer: "Tasto Ctrl + clic sulle intestazioni delle colonne",
    wrongAnswers: ["Tasto Maiusc", "Tasto Alt", "Tasto Invio"],
    hint: "Ctrl permette selezioni multiple separate.",
    explanation: "Tenendo premuto Ctrl è possibile selezionare elementi (celle, righe, colonne) distanti tra loro."
  },
  {
    id: 625,
    question: "Cosa indica l'estensione .pdf?",
    correctAnswer: "Portable Document Format",
    wrongAnswers: ["Public Data File", "Personal Document Format", "Picture Data File"],
    hint: "Formato Adobe universale.",
    explanation: "È un formato standard per documenti che mantiene la formattazione originale indipendentemente dal dispositivo usato per visualizzarli."
  },
  {
    id: 626,
    question: "In PowerPoint, lo 'Schema diapositiva' permette di:",
    correctAnswer: "modificare il layout e la formattazione di tutte le slide in un colpo solo",
    wrongAnswers: ["vedere la struttura del testo", "stampare le slide", "cancellare tutto"],
    hint: "È il 'master' che comanda il design.",
    explanation: "Le modifiche fatte allo schema diapositiva (es. inserire un logo) si riflettono automaticamente su tutte le diapositive della presentazione."
  },
  {
    id: 627,
    question: "Che cos'è la 'Banda larga'?",
    correctAnswer: "Una connessione internet ad alta velocità che permette il trasferimento di molti dati",
    wrongAnswers: ["Un cavo molto spesso", "Una banda musicale", "Una connessione lenta"],
    hint: "ADSL, Fibra.",
    explanation: "Si riferisce a tecnologie di trasmissione dati (come la fibra ottica) capaci di trasportare segnali multipli e grandi volumi di dati simultaneamente."
  },
  {
    id: 628,
    question: "Quale pulsante della tastiera permette di catturare l'immagine dello schermo?",
    correctAnswer: "Stamp (o Print Screen)",
    wrongAnswers: ["Canc", "Esc", "Tab"],
    hint: "Copia lo schermo negli appunti.",
    explanation: "Premendo Stamp, l'immagine attuale dello schermo viene copiata nella memoria temporanea e può essere incollata."
  },
  {
    id: 629,
    question: "In Excel, la formattazione condizionale serve a:",
    correctAnswer: "formattare le celle automaticamente in base al loro valore (es. colorare se > 10)",
    wrongAnswers: ["fare calcoli", "creare grafici", "proteggere il foglio"],
    hint: "Se succede X, colora di Y.",
    explanation: "Permette di evidenziare visivamente trend o eccezioni nei dati applicando colori o icone basati su regole specifiche."
  },
  {
    id: 630,
    question: "Che cos'è un 'Browser'?",
    correctAnswer: "Un'applicazione per navigare nel World Wide Web",
    wrongAnswers: ["Un motore di ricerca", "Un sito web", "Un modem"],
    hint: "Chrome, Edge, Firefox.",
    explanation: "È il software che interpreta il codice HTML delle pagine web e le mostra all'utente."
  },
  {
    id: 631,
    question: "La 'Barra degli indirizzi' serve a:",
    correctAnswer: "digitare l'URL del sito che si vuole visitare",
    wrongAnswers: ["scrivere le email", "cercare file nel computer", "chattare"],
    hint: "Si trova in alto nel browser.",
    explanation: "È il campo dove si inserisce l'indirizzo web (es. www.google.com) o le parole chiave per la ricerca."
  },
  {
    id: 632,
    question: "Cosa significa 'Drag and Drop'?",
    correctAnswer: "Trascinare e rilasciare (es. spostare un file con il mouse)",
    wrongAnswers: ["Copiare e incollare", "Tagliare e cucire", "Aprire e chiudere"],
    hint: "Trascina...",
    explanation: "È l'azione di cliccare su un oggetto, trascinarlo tenendo premuto e rilasciarlo in una nuova posizione."
  },
  {
    id: 633,
    question: "In Word, per annullare l'ultima operazione si usa la combinazione:",
    correctAnswer: "Ctrl + Z",
    wrongAnswers: ["Ctrl + Y", "Ctrl + X", "Ctrl + C"],
    hint: "Undo.",
    explanation: "Ctrl+Z è la scorciatoia universale per annullare l'ultima azione eseguita."
  },
  {
    id: 634,
    question: "In Word, per ripetere l'ultima operazione annullata si usa:",
    correctAnswer: "Ctrl + Y",
    wrongAnswers: ["Ctrl + Z", "Ctrl + R", "Ctrl + P"],
    hint: "Redo.",
    explanation: "Ctrl+Y ripristina l'azione che era stata appena annullata con Ctrl+Z."
  },
  {
    id: 635,
    question: "Quale tra le seguenti è una periferica di Input?",
    correctAnswer: "Scanner",
    wrongAnswers: ["Stampante", "Monitor", "Casse acustiche"],
    hint: "Manda dati DENTRO il computer.",
    explanation: "Lo scanner digitalizza immagini o documenti cartacei inviandoli al computer, quindi è un dispositivo di ingresso."
  },
  {
    id: 636,
    question: "Quale tra le seguenti è una periferica di Output?",
    correctAnswer: "Altoparlanti",
    wrongAnswers: ["Microfono", "Tastiera", "Mouse"],
    hint: "Fa uscire i dati (suono).",
    explanation: "Gli altoparlanti riproducono il suono elaborato dal computer verso l'esterno."
  },
  {
    id: 637,
    question: "Cosa si intende per 'Multitasking'?",
    correctAnswer: "La capacità di un sistema operativo di eseguire più programmi contemporaneamente",
    wrongAnswers: ["Avere più tastiere", "Usare più monitor", "Avere un computer veloce"],
    hint: "Fare più cose insieme.",
    explanation: "I moderni sistemi operativi permettono di tenere aperti e attivi più processi software nello stesso momento."
  },
  {
    id: 638,
    question: "In Excel, per inserire una nuova riga bisogna:",
    correctAnswer: "Fare clic destro sul numero della riga e scegliere 'Inserisci'",
    wrongAnswers: ["Premere Invio", "Usare la gomma", "Fare doppio clic"],
    hint: "Menu contestuale sull'intestazione.",
    explanation: "Questo comando sposta le righe esistenti verso il basso per fare spazio a quella nuova."
  },
  {
    id: 639,
    question: "Che cos'è un 'Backup'?",
    correctAnswer: "Una copia di sicurezza dei dati per prevenire perdite accidentali",
    wrongAnswers: ["Un virus", "Un programma di pulizia", "Un aggiornamento"],
    hint: "Copiare per sicurezza.",
    explanation: "Il backup consiste nel duplicare i dati su un supporto diverso per poterli recuperare in caso di guasto o cancellazione."
  },
  {
    id: 640,
    question: "Quale tasto permette di uscire dalla modalità presentazione in PowerPoint?",
    correctAnswer: "Esc",
    wrongAnswers: ["Invio", "Fine", "Canc"],
    hint: "Escape.",
    explanation: "Il tasto Esc interrompe lo slideshow e riporta alla visualizzazione di modifica."
  },
  {
    id: 641,
    question: "Cos'è un 'Hyperlink'?",
    correctAnswer: "Un collegamento ipertestuale che rimanda a un'altra unità informativa (web o file)",
    wrongAnswers: ["Un testo in grassetto", "Un errore", "Un'immagine"],
    hint: "Link.",
    explanation: "È l'elemento fondamentale del web che permette di navigare da un documento all'altro con un clic."
  },
  {
    id: 642,
    question: "In Google Chrome, la 'Barra dei preferiti' serve a:",
    correctAnswer: "avere accesso rapido ai siti salvati sotto la barra degli indirizzi",
    wrongAnswers: ["cercare su Google", "vedere la cronologia", "scaricare file"],
    hint: "I siti che usi di più sempre visibili.",
    explanation: "È una barra orizzontale dove l'utente può fissare i collegamenti ai siti più frequentati."
  },
  {
    id: 643,
    question: "Cos'è un file con estensione .exe?",
    correctAnswer: "Un file eseguibile (programma) per Windows",
    wrongAnswers: ["Un documento di testo", "Un'immagine", "Un file audio"],
    hint: "Installa o avvia applicazioni.",
    explanation: "È il formato standard per i file che contengono programmi o script eseguibili in ambiente Windows."
  },
  {
    id: 644,
    question: "Cosa indica l'icona del lucchetto nella barra degli indirizzi del browser?",
    correctAnswer: "Che la connessione al sito è sicura (HTTPS)",
    wrongAnswers: ["Che il sito è bloccato", "Che serve una password", "Che il sito è chiuso"],
    hint: "Sicurezza.",
    explanation: "Indica che il traffico tra il tuo browser e il sito è crittografato e il certificato di sicurezza è valido."
  },
  {
    id: 645,
    question: "In Excel, per sommare automaticamente una colonna di numeri si usa:",
    correctAnswer: "Somma automatica (Σ)",
    wrongAnswers: ["Media", "Conta numeri", "Copia e incolla"],
    hint: "Il simbolo Sigma greco.",
    explanation: "Il pulsante Somma Automatica inserisce rapidamente la funzione =SOMMA() per l'intervallo di celle adiacenti."
  },
  {
    id: 646,
    question: "In Word, il 'Rientro sporgente' (o speciale) viene usato spesso per:",
    correctAnswer: "gli elenchi bibliografici o numerati",
    wrongAnswers: ["i titoli", "i piè di pagina", "le immagini"],
    hint: "La prima riga sporge a sinistra rispetto alle altre.",
    explanation: "Nel rientro sporgente, la prima riga del paragrafo inizia al margine, mentre le successive sono rientrate verso destra."
  },
  {
    id: 647,
    question: "Che cos'è la 'Banda' di una rete?",
    correctAnswer: "La quantità di dati che possono essere trasmessi in un dato periodo di tempo",
    wrongAnswers: ["La lunghezza del cavo", "Il numero di computer collegati", "Il costo della connessione"],
    hint: "Misurata in bit al secondo (Mbps, Gbps).",
    explanation: "La larghezza di banda determina la velocità potenziale della connessione internet o di rete."
  },
  {
    id: 648,
    question: "Il 'Phishing' si basa su:",
    correctAnswer: "l'invio di email ingannevoli che sembrano provenire da enti legittimi",
    wrongAnswers: ["attacchi virus diretti", "furto fisico del PC", "intercettazione telefonica"],
    hint: "Pescare dati.",
    explanation: "L'obiettivo è ingannare la vittima per farle rivelare password o dati bancari."
  },
  {
    id: 649,
    question: "Cos'è un 'Captcha'?",
    correctAnswer: "Un test per distinguere i computer dagli esseri umani",
    wrongAnswers: ["Un virus", "Un gioco", "Un tipo di foto"],
    hint: "Seleziona tutti i semafori.",
    explanation: "Serve a prevenire che bot automatici compilino moduli o facciano accessi abusivi."
  },
  {
    id: 650,
    question: "In PowerPoint, l'opzione 'Transizione' si applica:",
    correctAnswer: "al passaggio tra una diapositiva e l'altra",
    wrongAnswers: ["al singolo testo", "all'immagine", "al grafico"],
    hint: "Effetto cambio pagina.",
    explanation: "Le transizioni sono effetti visivi che avvengono nel momento in cui si cambia slide."
  },
  {
    id: 651,
    question: "Quale tra i seguenti è un servizio di Webmail?",
    correctAnswer: "Gmail",
    wrongAnswers: ["Microsoft Word", "Adobe Reader", "VLC"],
    hint: "Posta via browser.",
    explanation: "La webmail permette di gestire la posta elettronica direttamente tramite browser internet senza installare client."
  },
  {
    id: 652,
    question: "Cosa significa 'Zippare' un file?",
    correctAnswer: "Comprimerlo in un archivio per ridurne le dimensioni",
    wrongAnswers: ["Cancellarlo", "Spostarlo", "Rinominarlo"],
    hint: "Come una cerniera lampo che stringe.",
    explanation: "Creare un archivio .zip riduce lo spazio occupato dai file e li raggruppa in un unico contenitore."
  },
  {
    id: 653,
    question: "In Excel, le colonne sono identificate da:",
    correctAnswer: "Lettere (A, B, C...)",
    wrongAnswers: ["Numeri", "Simboli", "Colori"],
    hint: "Intestazioni in alto.",
    explanation: "Le colonne verticali in Excel sono marcate con lettere progressive."
  },
  {
    id: 654,
    question: "In Excel, le righe sono identificate da:",
    correctAnswer: "Numeri (1, 2, 3...)",
    wrongAnswers: ["Lettere", "Simboli", "Date"],
    hint: "Intestazioni a sinistra.",
    explanation: "Le righe orizzontali in Excel sono marcate con numeri progressivi."
  },
  {
    id: 655,
    question: "Il tasto 'Stamp' (Print Screen) serve a:",
    correctAnswer: "copiare l'immagine dello schermo negli appunti",
    wrongAnswers: ["stampare su carta", "spegnere il monitor", "aprire la posta"],
    hint: "Cattura schermata.",
    explanation: "Permette di incollare successivamente l'immagine di ciò che si vedeva a video."
  },
  {
    id: 656,
    question: "Cosa indica l'estensione .html?",
    correctAnswer: "Una pagina web",
    wrongAnswers: ["Un documento Word", "Un foglio di calcolo", "Un'immagine"],
    hint: "Linguaggio del web.",
    explanation: "HyperText Markup Language è il formato standard per creare pagine internet."
  },
  {
    id: 657,
    question: "Quale combinazione di tasti serve per 'Incollare'?",
    correctAnswer: "Ctrl + V",
    wrongAnswers: ["Ctrl + C", "Ctrl + X", "Ctrl + P"],
    hint: "V come Vinavil (incolla).",
    explanation: "Standard universale per inserire il contenuto degli appunti."
  },
  {
    id: 658,
    question: "Quale combinazione di tasti serve per 'Copiare'?",
    correctAnswer: "Ctrl + C",
    wrongAnswers: ["Ctrl + V", "Ctrl + X", "Ctrl + A"],
    hint: "C come Copia.",
    explanation: "Copia la selezione negli appunti senza rimuoverla."
  },
  {
    id: 659,
    question: "Quale combinazione di tasti serve per 'Tagliare'?",
    correctAnswer: "Ctrl + X",
    wrongAnswers: ["Ctrl + C", "Ctrl + V", "Ctrl + T"],
    hint: "X come forbici.",
    explanation: "Rimuove la selezione e la mette negli appunti per spostarla."
  },
  {
    id: 660,
    question: "Cosa significa 'Ransomware'?",
    correctAnswer: "Un malware che blocca i dati e chiede un riscatto",
    wrongAnswers: ["Un software gratuito", "Un antivirus", "Un gioco"],
    hint: "Ransom = Riscatto.",
    explanation: "Cifra i file dell'utente rendendoli inaccessibili finché non viene pagata una somma di denaro."
  },
  {
    id: 661,
    question: "La 'Barra delle applicazioni' in Windows si trova solitamente:",
    correctAnswer: "in basso allo schermo",
    wrongAnswers: ["in alto", "al centro", "non esiste"],
    hint: "Dove c'è il pulsante Start.",
    explanation: "Contiene il menu Start, le icone dei programmi aperti e l'area di notifica."
  },
  {
    id: 662,
    question: "Cos'è un 'Pixel'?",
    correctAnswer: "Il più piccolo elemento che costituisce un'immagine digitale",
    wrongAnswers: ["Un cavo", "Un tipo di file", "Un virus"],
    hint: "Puntino luminoso.",
    explanation: "Milioni di pixel compongono l'immagine sullo schermo o nelle foto."
  },
  {
    id: 663,
    question: "In Word, per selezionare tutto il testo si usa:",
    correctAnswer: "Ctrl + A",
    wrongAnswers: ["Ctrl + S", "Ctrl + T", "Invio"],
    hint: "A = All (Tutto).",
    explanation: "Seleziona l'intero contenuto del documento corrente."
  },
  {
    id: 664,
    question: "Cosa fa il tasto 'Bloc Maiusc' (Caps Lock)?",
    correctAnswer: "Attiva la scrittura in lettere maiuscole",
    wrongAnswers: ["Blocca il computer", "Cancella il testo", "Attiva i numeri"],
    hint: "Lucchetto con la A.",
    explanation: "Mantiene attive le maiuscole finché non viene premuto di nuovo."
  },
  {
    id: 665,
    question: "Quale dispositivo è sia di Input che di Output?",
    correctAnswer: "Touchscreen",
    wrongAnswers: ["Mouse", "Stampante", "Tastiera"],
    hint: "Vedi e tocchi.",
    explanation: "Lo schermo tattile mostra le immagini (output) e riceve i comandi dal dito (input)."
  },
  {
    id: 666,
    question: "Cos'è la 'RAM'?",
    correctAnswer: "Memoria volatile di lavoro del computer",
    wrongAnswers: ["Memoria permanente", "Disco rigido", "Processore"],
    hint: "Si svuota se spegni.",
    explanation: "Memorizza temporaneamente i dati dei programmi in uso per un accesso rapido da parte della CPU."
  },
  {
    id: 667,
    question: "Cosa significa 'URL'?",
    correctAnswer: "Uniform Resource Locator (indirizzo web)",
    wrongAnswers: ["Unità Rete Locale", "User Registry List", "Universal Radio Link"],
    hint: "Quello che scrivi per andare su un sito.",
    explanation: "È l'indirizzo univoco che identifica una risorsa su Internet."
  },
  {
    id: 668,
    question: "In PowerPoint, per inserire un nuovo layout diapositiva si va su:",
    correctAnswer: "Home > Layout",
    wrongAnswers: ["Inserisci > Layout", "Visualizza > Layout", "File > Layout"],
    hint: "Cambia la struttura della slide.",
    explanation: "Permette di scegliere come disporre titoli e contenuti nella diapositiva selezionata."
  },
  {
    id: 669,
    question: "Cosa sono le 'Note a piè di pagina' in Word?",
    correctAnswer: "Note esplicative posizionate in fondo alla pagina corrente",
    wrongAnswers: ["Note alla fine del documento", "Intestazioni", "Numeri di pagina"],
    hint: "Riferimenti bibliografici o spiegazioni.",
    explanation: "Servono per aggiungere commenti o citazioni senza interrompere il flusso del testo principale."
  },
  {
    id: 670,
    question: "In Excel, il simbolo '$' in un riferimento di cella (es. $A$1) serve a:",
    correctAnswer: "bloccare il riferimento (riferimento assoluto)",
    wrongAnswers: ["indicare una valuta", "fare una somma", "cancellare la cella"],
    hint: "Non cambia se copi la formula.",
    explanation: "Il dollaro rende il riferimento assoluto, impedendo che cambi quando la formula viene trascinata o copiata."
  },
  {
    id: 671,
    question: "Cosa è un 'ISP'?",
    correctAnswer: "Internet Service Provider (fornitore di accesso a Internet)",
    wrongAnswers: ["Internet Security Protocol", "Internal System Port", "Intelligent Service Pack"],
    hint: "TIM, Vodafone, Fastweb...",
    explanation: "È l'azienda che ti vende la connessione a Internet."
  },
  {
    id: 672,
    question: "In Excel, per unire più celle in una sola si usa:",
    correctAnswer: "Unisci e allinea al centro",
    wrongAnswers: ["Somma", "Raggruppa", "Concatena"],
    hint: "Crea una cella grande.",
    explanation: "Combina le celle selezionate in un'unica cella, spesso usato per i titoli delle tabelle."
  },
  {
    id: 673,
    question: "Cosa significa 'Open Source'?",
    correctAnswer: "Software il cui codice sorgente è aperto e modificabile",
    wrongAnswers: ["Software a pagamento", "Software chiuso", "Software pirata"],
    hint: "Codice aperto.",
    explanation: "L'autore rende disponibile il codice affinché la comunità possa studiarlo e migliorarlo."
  },
  {
    id: 674,
    question: "Il tasto 'F5' nel browser serve solitamente a:",
    correctAnswer: "aggiornare (ricaricare) la pagina corrente",
    wrongAnswers: ["chiudere la pagina", "aprire la guida", "salvare la pagina"],
    hint: "Refresh.",
    explanation: "Ricarica il contenuto della pagina web per mostrare eventuali aggiornamenti."
  },
  {
    id: 675,
    question: "Cos'è un 'Motore di ricerca'?",
    correctAnswer: "Un sistema per trovare informazioni sul web tramite parole chiave",
    wrongAnswers: ["Un browser", "Un sistema operativo", "Un antivirus"],
    hint: "Google, Bing.",
    explanation: "Indicizza i siti web e restituisce risultati pertinenti alle query dell'utente."
  },
  {
    id: 676,
    question: "In Word, per rendere il testo inclinato si usa:",
    correctAnswer: "Corsivo (I o C)",
    wrongAnswers: ["Grassetto", "Sottolineato", "Barrato"],
    hint: "Italic.",
    explanation: "Il corsivo inclina il testo verso destra, usato per enfasi o termini stranieri."
  },
  {
    id: 677,
    question: "Cosa indica l'icona 'Cestino' sul desktop?",
    correctAnswer: "La cartella dove finiscono i file eliminati temporaneamente",
    wrongAnswers: ["Una cartella di spam", "Un programma inutile", "Lo spegnimento del PC"],
    hint: "Recupero file cancellati.",
    explanation: "Permette di ripristinare file cancellati per errore prima che vengano rimossi definitivamente."
  },
  {
    id: 678,
    question: "In PowerPoint, cosa sono le 'Animazioni'?",
    correctAnswer: "Effetti visivi applicati ai singoli oggetti all'interno di una diapositiva",
    wrongAnswers: ["Effetti tra una slide e l'altra", "Video youtube", "Suoni di sistema"],
    hint: "Fanno muovere il testo o le immagini.",
    explanation: "A differenza delle transizioni (tra slide), le animazioni agiscono su testo, immagini e forme dentro la slide."
  },
  {
    id: 679,
    question: "Che cos’è il “Vishing”?",
    correctAnswer: "Una truffa che avviene tramite telefonate, dove l'hacker finge di essere un operatore (es. banca)",
    wrongAnswers: ["Un virus per la scheda video", "Il furto di dati via SMS", "Un programma di grafica"],
    hint: "Voice + Phishing.",
    explanation: "Il Vishing (Voice Phishing) manipola le vittime telefonicamente per ottenere dati riservati."
  },
  {
    id: 680,
    question: "Che cos’è “SafeSearch” in Google?",
    correctAnswer: "Un filtro per escludere dalle ricerche contenuti espliciti o inappropriati",
    wrongAnswers: ["Un antivirus per Chrome", "Una modalità di navigazione veloce", "Un sistema per salvare le password"],
    hint: "Ricerca Sicura.",
    explanation: "SafeSearch aiuta a bloccare immagini, video e siti web con contenuti sessualmente espliciti nei risultati di ricerca."
  },
  {
    id: 681,
    question: "Che cos’è l’attacco “Man in the Middle” (MITM)?",
    correctAnswer: "Un attacco dove l'hacker si inserisce segretamente nella comunicazione tra due parti per intercettare dati",
    wrongAnswers: ["Un virus che colpisce il processore", "Un blocco del server centrale", "Un errore del cavo di rete"],
    hint: "Uomo nel mezzo.",
    explanation: "L'attaccante intercetta e potenzialmente altera le comunicazioni tra due utenti senza che essi se ne accorgano."
  },
  {
    id: 682,
    question: "Quale codice occorre fornire al gestore telefonico per bloccare un dispositivo smarrito?",
    correctAnswer: "Codice IMEI",
    wrongAnswers: ["Codice PIN", "Codice PUK", "Indirizzo IP"],
    hint: "È il numero di serie unico del telefono.",
    explanation: "L'IMEI (International Mobile Equipment Identity) identifica univocamente il dispositivo mobile e serve per inserirlo nella blacklist."
  },
  {
    id: 683,
    question: "In quale unità si misura la frequenza di clock dei processori?",
    correctAnswer: "Hertz (solitamente GHz)",
    wrongAnswers: ["Byte", "Pixel", "Bit per secondo"],
    hint: "Cicli al secondo.",
    explanation: "La velocità della CPU si misura in Gigahertz (miliardi di cicli al secondo)."
  },
  {
    id: 684,
    question: "In un grafico a torta, i dati vengono rappresentati come:",
    correctAnswer: "parti di un insieme (percentuali)",
    wrongAnswers: ["colonne verticali", "punti dispersi", "linee temporali"],
    hint: "Come fette di una torta.",
    explanation: "Questo grafico è ideale per mostrare le proporzioni dei singoli elementi rispetto al totale."
  },
  {
    id: 685,
    question: "La sillabazione automatica in Word serve a:",
    correctAnswer: "dividere le parole a fine riga con un trattino per migliorare la distribuzione del testo",
    wrongAnswers: ["correggere gli errori grammaticali", "tradurre il testo", "contare le sillabe"],
    hint: "Evita spazi vuoti eccessivi.",
    explanation: "Attivandola (Layout > Sillabazione), Word spezza le parole lunghe a fine riga, rendendo il testo giustificato più omogeneo."
  },
  {
    id: 686,
    question: "Per avviare una “Ricerca avanzata” su Google bisogna:",
    correctAnswer: "Andare su Impostazioni (in basso a destra o in alto) > Ricerca avanzata",
    wrongAnswers: ["Scrivere 'Avanzata' nella barra", "Pagare un abbonamento", "Usare un altro browser"],
    hint: "Permette di filtrare per lingua, data, tipo di file.",
    explanation: "La maschera di ricerca avanzata offre campi specifici per affinare i risultati senza dover usare operatori booleani manuali."
  },
  {
    id: 687,
    question: "Nell’app Posta di Windows, quale icona indica la “Priorità alta” di una mail?",
    correctAnswer: "Il punto esclamativo (!)",
    wrongAnswers: ["La freccia rossa", "La stella", "Il lucchetto"],
    hint: "Indica urgenza.",
    explanation: "Il punto esclamativo rosso segnala al destinatario che il messaggio è importante o urgente."
  },
  {
    id: 688,
    question: "In Word, quale scheda permette di controllare errori ortografici e grammaticali?",
    correctAnswer: "Revisione",
    wrongAnswers: ["Riferimenti", "Layout", "Visualizza"],
    hint: "Dove trovi 'Controllo ortografia'.",
    explanation: "La scheda Revisione contiene tutti gli strumenti di correzione, commento e tracciamento modifiche."
  },
  {
    id: 689,
    question: "Qual è la procedura per creare un collegamento a un file sul desktop?",
    correctAnswer: "Tasto destro sul desktop > Nuovo > Collegamento",
    wrongAnswers: ["Tasto destro > Incolla", "Doppio clic sullo sfondo", "Menu Start > Collegamento"],
    hint: "Crea un'icona con la freccetta.",
    explanation: "Questa procedura avvia una procedura guidata per selezionare il file o programma a cui puntare."
  },
  {
    id: 690,
    question: "In Excel, quale icona attiva il comando “Testo a capo”?",
    correctAnswer: "L'icona con una freccina che va a capo (ab ->)",
    wrongAnswers: ["La G di grassetto", "Il secchiello", "Le forbici"],
    hint: "Dispone il testo su più righe nella stessa cella.",
    explanation: "Il comando 'Testo a capo' permette di visualizzare tutto il contenuto di una cella mandandolo su più righe verticali."
  },
  {
    id: 691,
    question: "Si parla di “tethering” quando:",
    correctAnswer: "sfruttiamo un dispositivo mobile come hotspot per far accedere altri dispositivi a Internet",
    wrongAnswers: ["il telefono è spento", "colleghiamo il telefono alla TV", "usiamo il GPS"],
    hint: "Condivisione connessione dati.",
    explanation: "Il tethering trasforma lo smartphone in un modem/router per PC o tablet."
  },
  {
    id: 692,
    question: "Che cos’è lo “Sniffing”?",
    correctAnswer: "L’attività di intercettazione passiva dei dati che transitano in una rete",
    wrongAnswers: ["L'invio di virus", "Il blocco dello schermo", "La pulizia del disco"],
    hint: "Annusare il traffico.",
    explanation: "Gli hacker usano software 'sniffer' per catturare pacchetti dati non criptati che viaggiano sulla rete."
  },
  {
    id: 693,
    question: "L’Accountability (responsabilità) prevede che:",
    correctAnswer: "chi gestisce un sistema possa tracciare e monitorare le attività degli utenti",
    wrongAnswers: ["nessuno sia responsabile", "i dati siano cancellati", "tutti siano anonimi"],
    hint: "Rendere conto delle azioni.",
    explanation: "È il principio secondo cui ogni azione a sistema deve poter essere attribuita univocamente a un utente responsabile."
  },
  {
    id: 694,
    question: "L’“integrità dei dati” garantisce che:",
    correctAnswer: "i dati non siano stati modificati o alterati in modo non autorizzato",
    wrongAnswers: ["i dati siano segreti", "i dati siano cancellati", "i dati siano veloci"],
    hint: "Il dato è integro, intatto.",
    explanation: "Assicura che l'informazione ricevuta sia esattamente quella inviata, senza manomissioni."
  },
  {
    id: 695,
    question: "Quale simbolo indica la Tabulazione allineata al centro?",
    correctAnswer: "Una T rovesciata (⊥)",
    wrongAnswers: ["Una L", "Una L rovesciata", "Un punto"],
    hint: "Sul righello di Word.",
    explanation: "Il simbolo a T rovesciata sul righello indica che il testo verrà centrato rispetto a quel punto di tabulazione."
  },
  {
    id: 696,
    question: "Quale simbolo indica la Tabulazione decimale?",
    correctAnswer: "Una T rovesciata con un punto (⊥.)",
    wrongAnswers: ["Una L", "Una barra verticale", "Un cerchio"],
    hint: "Allinea i numeri alla virgola.",
    explanation: "Serve per incolonnare correttamente le cifre decimali, allineandole sul separatore (virgola/punto)."
  },
  {
    id: 697,
    question: "In Excel, quale pulsante ordina i dati dal più alto al più basso (Z-A)?",
    correctAnswer: "Icona Z-A (Freccia giù)",
    wrongAnswers: ["Icona A-Z", "Icona Filtro", "Icona Somma"],
    hint: "Ordine decrescente.",
    explanation: "Ordina i valori in modo decrescente (numeri dal maggiore al minore, testo dalla Z alla A)."
  },
  {
    id: 698,
    question: "Quale tipo di grafico serve per visualizzare dati geografici?",
    correctAnswer: "Grafico a mappa",
    wrongAnswers: ["Istogramma", "Grafico a torta", "Grafico a dispersione"],
    hint: "Mappa del mondo o regioni.",
    explanation: "Excel permette di creare mappe coropletiche per confrontare valori tra stati o regioni geografiche."
  },
  {
    id: 699,
    question: "Quale combinazione di tasti apre Gestione attività (Task Manager)?",
    correctAnswer: "Ctrl + Maiusc + Esc",
    wrongAnswers: ["Alt + F4", "Ctrl + C", "Win + T"],
    hint: "Apertura diretta senza menu intermedio.",
    explanation: "È la scorciatoia diretta per aprire il Task Manager e gestire i processi in esecuzione."
  },
  {
    id: 700,
    question: "Quale struttura rappresenta l'organizzazione dei file nel computer?",
    correctAnswer: "Gerarchica (ad albero)",
    wrongAnswers: ["Lineare", "Circolare", "Casuale"],
    hint: "Cartelle dentro cartelle.",
    explanation: "Il file system è organizzato come un albero rovesciato, con la radice (root) e le ramificazioni (cartelle/sottocartelle)."
  },
  {
    id: 701,
    question: "In Word, dove si trova il comando per cambiare l'orientamento della pagina?",
    correctAnswer: "Scheda Layout > Orientamento",
    wrongAnswers: ["Scheda Home > Orientamento", "Scheda Visualizza > Pagina", "Menu File > Stampa"],
    hint: "Verticale o Orizzontale.",
    explanation: "Permette di ruotare il foglio da Verticale (Portrait) a Orizzontale (Landscape)."
  },
  {
    id: 702,
    question: "Qual è il simbolo del Copyright?",
    correctAnswer: "©",
    wrongAnswers: ["®", "™", "@"],
    hint: "C cerchiata.",
    explanation: "Indica che l'opera è protetta dal diritto d'autore."
  },
  {
    id: 703,
    question: "Qual è il simbolo del Marchio Registrato?",
    correctAnswer: "®",
    wrongAnswers: ["©", "™", "#"],
    hint: "R cerchiata.",
    explanation: "Indica un marchio registrato ufficialmente presso l'ufficio brevetti e marchi."
  },
  {
    id: 704,
    question: "Quale carattere NON è possibile usare nel nome di un file Windows?",
    correctAnswer: "Il punto interrogativo (?)",
    wrongAnswers: ["Il trattino (-)", "L'underscore (_)", "Lo spazio"],
    hint: "Anche / \ : * < > | sono vietati.",
    explanation: "Questi caratteri sono riservati dal sistema operativo per funzioni specifiche e non possono essere usati nei nomi."
  },
  {
    id: 705,
    question: "Come si configura l'aggiornamento automatico delle app su Android?",
    correctAnswer: "Play Store > Icona Profilo > Impostazioni > Preferenze di rete",
    wrongAnswers: ["Impostazioni telefono > Schermo", "Non si può fare", "Solo collegando al PC"],
    hint: "Menu del Play Store.",
    explanation: "Da qui si può scegliere se aggiornare le app solo tramite Wi-Fi o anche con rete dati."
  },
  {
    id: 706,
    question: "Quale è una regola per creare password sicure?",
    correctAnswer: "Evitare dati personali (date nascita, nomi) e usare caratteri misti",
    wrongAnswers: ["Usare '123456'", "Usare il proprio nome", "Scriverla sul monitor"],
    hint: "Deve essere complessa.",
    explanation: "Una password robusta contiene maiuscole, minuscole, numeri, simboli ed è lunga almeno 8-12 caratteri."
  },
  {
    id: 707,
    question: "L'opzione di incollaggio 'Mantieni solo il testo' in Word:",
    correctAnswer: "incolla il contenuto senza alcuna formattazione originale",
    wrongAnswers: ["mantiene colori e grassetti", "inserisce un'immagine", "unisce gli stili"],
    hint: "Icona con la lettera A.",
    explanation: "Utile per uniformare il testo copiato da internet allo stile del documento di destinazione."
  },
  {
    id: 708,
    question: "L'opzione di incollaggio 'Unisci formattazione' in Word:",
    correctAnswer: "combina la formattazione originale con quella del documento di destinazione",
    wrongAnswers: ["cancella il testo", "mantiene tutto originale", "trasforma in tabella"],
    hint: "Cerca di adattarsi.",
    explanation: "Adatta il testo copiato allo stile del paragrafo corrente mantenendo però enfasi come grassetto o corsivo."
  },
  {
    id: 709,
    question: "L'opzione di incollaggio 'Mantieni formattazione originale' in Word:",
    correctAnswer: "incolla il testo conservando esattamente l'aspetto che aveva in origine",
    wrongAnswers: ["lo rende testo semplice", "cambia il font", "rimuove i link"],
    hint: "Copia fedele.",
    explanation: "Mantiene font, colori, link e stili esattamente come nella fonte da cui è stato copiato."
  },
  {
    id: 710,
    question: "Cos'è Windows Defender?",
    correctAnswer: "L'antivirus integrato nel sistema operativo Windows",
    wrongAnswers: ["Un gioco", "Un browser", "Un editor di testo"],
    hint: "Difende il PC.",
    explanation: "Fornisce protezione in tempo reale contro virus, malware e spyware senza bisogno di installare software terzi."
  },
  {
    id: 711,
    question: "Cosa riportano le etichette dati in un istogramma?",
    correctAnswer: "I valori numerici esatti che le colonne rappresentano",
    wrongAnswers: ["Il nome del file", "La data di creazione", "Il colore della colonna"],
    hint: "Numeri sopra le barre.",
    explanation: "Aiutano a leggere il valore preciso della barra senza dover seguire la linea fino all'asse verticale."
  },
  {
    id: 712,
    question: "In Google Drive, il pulsante 'Scarica' serve a:",
    correctAnswer: "salvare file dal cloud al proprio dispositivo locale",
    wrongAnswers: ["caricare file online", "cancellare file", "condividere file"],
    hint: "Download.",
    explanation: "Trasferisce una copia del file dai server di Google al disco rigido del computer."
  },
  {
    id: 713,
    question: "In Google Drive, la barra di ricerca permette di:",
    correctAnswer: "trovare file e cartelle nel proprio spazio cloud",
    wrongAnswers: ["cercare su tutto internet", "cercare nel computer locale", "cercare persone"],
    hint: "Cerca in Drive.",
    explanation: "Filtra i contenuti archiviati nel Drive in base al nome, tipo di file o contenuto."
  },
  {
    id: 714,
    question: "Dove viene visualizzato il file appena scaricato in Chrome (versioni recenti)?",
    correctAnswer: "In un'icona nella barra degli strumenti in alto a destra (o in basso a sinistra nelle versioni vecchie)",
    wrongAnswers: ["Nel cestino", "Sul desktop direttamente", "Non si vede"],
    hint: "Icona freccia in giù.",
    explanation: "Nelle versioni più recenti di Chrome, i download appaiono in un menu a discesa in alto a destra, accanto alla barra indirizzi."
  },
  {
    id: 715,
    question: "Quale comando NON è presente nella scheda Progettazione di Word?",
    correctAnswer: "Taglia, Copia e Incolla",
    wrongAnswers: ["Sfondo pagina", "Temi", "Filigrana"],
    hint: "Quelli sono in Home.",
    explanation: "La scheda Progettazione gestisce lo stile globale, i temi e gli sfondi; i comandi di editing base sono nella scheda Home."
  },
  {
    id: 716,
    question: "Cosa si intende per 'Accessi concorrenti'?",
    correctAnswer: "Più persone possono visualizzare o modificare lo stesso file contemporaneamente",
    wrongAnswers: ["Accessi vietati", "Accessi con password sbagliata", "Accessi lenti"],
    hint: "Collaborazione in tempo reale.",
    explanation: "Tipico del cloud computing, permette il co-authoring simultaneo su documenti condivisi."
  },
  {
    id: 717,
    question: "Cosa sono i 'crimini informatici'?",
    correctAnswer: "Tutte le azioni illegali compiute tramite tecnologie informatiche",
    wrongAnswers: ["Errori del computer", "Rottura dell'hardware", "Giochi violenti"],
    hint: "Reati digitali.",
    explanation: "Includono frodi, accessi abusivi, diffusione di malware, cyberbullismo, etc."
  },
  {
    id: 718,
    question: "Qual è la differenza tra Copia/Incolla e Taglia/Incolla?",
    correctAnswer: "Copia duplica l'oggetto, Taglia lo sposta dalla posizione originale",
    wrongAnswers: ["Sono uguali", "Taglia cancella per sempre", "Copia sposta l'oggetto"],
    hint: "Duplicare vs Spostare.",
    explanation: "Il comando Taglia rimuove l'elemento dalla sorgente per incollarlo altrove; Copia lo lascia dov'è e ne crea un duplicato."
  },
  {
    id: 719,
    question: "Quale tra i seguenti è un aspetto unico utilizzabile per il riconoscimento biometrico?",
    correctAnswer: "Impronta digitale (o iride, viso)",
    wrongAnswers: ["Colore dei capelli", "Peso corporeo", "Numero di scarpe"],
    hint: "Non cambia e identifica te solo.",
    explanation: "Le caratteristiche biometriche sono tratti fisici unici e immutabili usati per l'autenticazione sicura."
  },
  {
    id: 720,
    question: "Quale formato è appropriato per rappresentare valori monetari in Excel?",
    correctAnswer: "Valuta (o Contabilità)",
    wrongAnswers: ["Testo", "Scientifico", "Data"],
    hint: "Aggiunge il simbolo €.",
    explanation: "Il formato Valuta aggiunge il simbolo della moneta, i decimali e il separatore delle migliaia."
  },
  {
    id: 721,
    question: "Il formato Scientifico in Excel serve a:",
    correctAnswer: "visualizzare numeri molto grandi o molto piccoli usando le potenze di 10",
    wrongAnswers: ["fare calcoli di chimica", "scrivere testi scientifici", "inserire date"],
    hint: "Notazione esponenziale (es. 1,2E+05).",
    explanation: "Compatta la visualizzazione di numeri che non entrerebbero nella cella (es. 1.000.000.000 diventa 1E+09)."
  },
  {
    id: 722,
    question: "In Windows Defender, l'Analisi veloce controlla:",
    correctAnswer: "solo le cartelle di sistema e i processi attivi dove i virus si nascondono più spesso",
    wrongAnswers: ["tutto il disco rigido", "solo la chiavetta USB", "solo le email"],
    hint: "È rapida.",
    explanation: "Esegue un controllo mirato sulle aree critiche del sistema, impiegando pochi minuti."
  },
  {
    id: 723,
    question: "In Windows Defender, l'Analisi completa controlla:",
    correctAnswer: "tutti i file e programmi sul disco rigido (richiede molto tempo)",
    wrongAnswers: ["solo la RAM", "solo il desktop", "solo i download"],
    hint: "Scansiona tutto.",
    explanation: "Verifica ogni singolo file presente nel sistema, garantendo la massima sicurezza ma impiegando ore."
  },
  {
    id: 724,
    question: "In PowerPoint, cos'è un 'Tema'?",
    correctAnswer: "Un insieme predefinito di colori, tipi di carattere ed effetti visivi",
    wrongAnswers: ["Un'immagine di sfondo", "Un argomento della presentazione", "Un video"],
    hint: "Design coordinato.",
    explanation: "Il tema garantisce coerenza stilistica applicando lo stesso look and feel a tutte le diapositive."
  },
  {
    id: 725,
    question: "In Excel, qual è l'ordine di esecuzione delle operazioni?",
    correctAnswer: "Prima moltiplicazioni e divisioni, poi addizioni e sottrazioni",
    wrongAnswers: ["Prima addizioni, poi moltiplicazioni", "Tutto da sinistra a destra", "Prima sottrazioni"],
    hint: "Come in matematica (PEMDAS).",
    explanation: "Excel rispetta la precedenza degli operatori matematici standard."
  },
  {
    id: 726,
    question: "In un indirizzo web, il dominio di secondo livello è:",
    correctAnswer: "Il nome del sito scelto (es. 'google' in google.com)",
    wrongAnswers: ["La sigla finale (.com)", "Il protocollo (http)", "La pagina specifica"],
    hint: "Il nome dell'azienda.",
    explanation: "È la parte centrale dell'URL che identifica l'entità proprietaria del sito."
  },
  {
    id: 727,
    question: "In un indirizzo web, il dominio di primo livello (TLD) è:",
    correctAnswer: "La sigla finale (es. .com, .it, .org)",
    wrongAnswers: ["Il nome del sito", "Il protocollo", "Www"],
    hint: "Estensione geografica o generica.",
    explanation: "Indica la categoria o la nazione del sito (Top Level Domain)."
  },
  {
    id: 728,
    question: "Come inserire più colonne contemporaneamente in Excel?",
    correctAnswer: "Selezionare il numero di colonne desiderato e scegliere Inserisci",
    wrongAnswers: ["Inserire una alla volta", "Non si può", "Usare la barra spaziatrice"],
    hint: "Se selezioni 3 colonne e fai Inserisci, ne crea 3.",
    explanation: "Excel inserisce tante colonne nuove quante sono quelle selezionate al momento del comando."
  },
  {
    id: 729,
    question: "L'opzione 'Apportare modifiche agli eventi' nella condivisione calendario permette agli altri di:",
    correctAnswer: "modificare, aggiungere o cancellare appuntamenti nel tuo calendario",
    wrongAnswers: ["solo vedere gli eventi", "solo cambiare il colore", "nulla"],
    hint: "Permessi di scrittura.",
    explanation: "Concede pieni diritti di gestione sul calendario condiviso."
  },
  {
    id: 730,
    question: "Durante la Stampa Unione, l'opzione 'Usa elenco esistente' serve a:",
    correctAnswer: "scegliere un file (es. Excel) che contiene già i dati dei destinatari",
    wrongAnswers: ["scrivere i nomi a mano", "creare una tabella vuota", "stampare subito"],
    hint: "Collega una rubrica già pronta.",
    explanation: "Permette di importare i contatti da una fonte esterna già compilata."
  },
  {
    id: 731,
    question: "Durante la Stampa Unione, l'opzione 'Crea un nuovo elenco' serve a:",
    correctAnswer: "creare e compilare al momento una nuova lista di destinatari",
    wrongAnswers: ["usare un file Excel", "scaricare da internet", "copiare da Word"],
    hint: "Se non hai ancora i dati.",
    explanation: "Apre una maschera per inserire manualmente i dati dei contatti da salvare in un nuovo file database."
  },
  {
    id: 732,
    question: "Cosa si intende per 'Dipendenza dal provider' nel Cloud?",
    correctAnswer: "La difficoltà di cambiare fornitore di servizi cloud (Vendor Lock-in)",
    wrongAnswers: ["La dipendenza da internet", "La dipendenza dai social", "Un costo fisso"],
    hint: "Restare bloccati con un fornitore.",
    explanation: "Rischio legato alla difficoltà tecnica o contrattuale di migrare dati e servizi da un cloud provider all'altro."
  },
  {
    id: 733,
    question: "Quali sono esempi di applicazioni 'elaboratori di testo'?",
    correctAnswer: "Microsoft Word, Writer, Google Docs",
    wrongAnswers: ["Excel, Calc", "PowerPoint, Impress", "Outlook, Thunderbird"],
    hint: "Servono a scrivere.",
    explanation: "Software dedicati alla creazione, formattazione e stampa di documenti testuali."
  },
  {
    id: 734,
    question: "Quale rischio comporta la collaborazione in Rete?",
    correctAnswer: "Interruzione del servizio di connessione che impedisce l'accesso ai file",
    wrongAnswers: ["Virus trasmessi col pensiero", "Rottura dello schermo", "Cancellazione automatica"],
    hint: "Se manca internet...",
    explanation: "Lavorare online richiede una connessione stabile; senza di essa, l'accesso ai dati condivisi può essere compromesso."
  },
  {
    id: 735,
    question: "Chi è l'Amministratore di rete?",
    correctAnswer: "Il tecnico che gestisce l'infrastruttura, i permessi e la sicurezza della rete",
    wrongAnswers: ["Chi usa il computer", "Chi scrive le email", "Il direttore dell'azienda"],
    hint: "IT Manager.",
    explanation: "Figura professionale responsabile del funzionamento e della sicurezza della rete informatica."
  },
  {
    id: 736,
    question: "Il comando 'Salva con nome' permette di:",
    correctAnswer: "salvare il file con un nuovo nome, in una nuova posizione o in un altro formato",
    wrongAnswers: ["salvare solo le modifiche sullo stesso file", "chiudere il file", "stampare"],
    hint: "Crea una copia diversa.",
    explanation: "A differenza di 'Salva', crea un nuovo file lasciando intatto l'originale."
  },
  {
    id: 737,
    question: "Quale modalità di visualizzazione NON esiste in PowerPoint?",
    correctAnswer: "Layout Web",
    wrongAnswers: ["Normale", "Sequenza diapositive", "Visualizzazione di lettura"],
    hint: "Tipica di Word, non di PPT.",
    explanation: "PowerPoint non crea pagine web, quindi non ha questa vista (presente invece in Word)."
  },
  {
    id: 738,
    question: "Quale impostazione di Zoom in Word adatta la pagina allo schermo?",
    correctAnswer: "Una pagina (o Larghezza pagina)",
    wrongAnswers: ["10%", "500%", "Miniatura"],
    hint: "Vedi tutto il foglio.",
    explanation: "Regola lo zoom automaticamente per mostrare l'intera pagina o la sua larghezza completa nella finestra."
  },
  {
    id: 739,
    question: "Quale combinazione di tasti apre l'app Impostazioni in Windows?",
    correctAnswer: "Win + I",
    wrongAnswers: ["Win + S", "Ctrl + I", "Alt + I"],
    hint: "I come Impostazioni.",
    explanation: "Scorciatoia rapida per accedere al pannello di configurazione del sistema."
  },
  {
    id: 740,
    question: "L'applicazione 'Film e TV' di Windows 11 serve a:",
    correctAnswer: "acquistare, noleggiare e riprodurre contenuti video",
    wrongAnswers: ["modificare video", "registrare dallo schermo", "navigare in internet"],
    hint: "Player video.",
    explanation: "È il lettore multimediale predefinito per i file video e lo store per contenuti d'intrattenimento."
  },
  {
    id: 741,
    question: "Che cos'è una 'Backdoor'?",
    correctAnswer: "Una porta di servizio segreta creata da hacker per accedere al sistema aggirando la sicurezza",
    wrongAnswers: ["La porta sul retro del PC", "Un tasto della tastiera", "Un programma di backup"],
    hint: "Entrata posteriore nascosta.",
    explanation: "Metodo per riottenere l'accesso a un sistema compromesso evitando i controlli di autenticazione normali."
  },
  {
    id: 742,
    question: "Il grafico azionario viene usato per:",
    correctAnswer: "mostrare la fluttuazione dei prezzi di azioni o dati scientifici simili",
    wrongAnswers: ["fare torte", "confrontare vendite", "fare mappe"],
    hint: "Borsa valori.",
    explanation: "Richiede dati specifici come apertura, chiusura, massimo e minimo per rappresentare andamenti finanziari."
  },
  {
    id: 743,
    question: "Quale operazione NON influisce sull'aspetto grafico del documento?",
    correctAnswer: "Personalizzare i comandi dell'interfaccia (Barra multifunzione)",
    wrongAnswers: ["Cambiare il font", "Cambiare i margini", "Inserire immagini"],
    hint: "Modifica il programma, non il file.",
    explanation: "Cambiare i menu o i pulsanti di Word modifica l'ambiente di lavoro dell'utente, non il contenuto o la stampa del documento."
  },
  {
    id: 744,
    question: "In Excel, l'icona 'Allinea in alto' serve a:",
    correctAnswer: "disporre il testo nella parte superiore della cella",
    wrongAnswers: ["mettere il testo in grassetto", "spostare la cella in alto", "cancellare la riga"],
    hint: "Allineamento verticale.",
    explanation: "Gestisce la posizione verticale del contenuto all'interno della cella (Alto, Centro, Basso)."
  },
  {
    id: 745,
    question: "Il layout 'Vuoto' in PowerPoint:",
    correctAnswer: "è privo di segnaposto predefiniti",
    wrongAnswers: ["ha solo il titolo", "è tutto nero", "non si può usare"],
    hint: "Foglio bianco.",
    explanation: "Utile per disegnare liberamente o inserire elementi senza vincoli di struttura."
  },
  {
    id: 746,
    question: "Quale unità di misura indica la risoluzione dello schermo?",
    correctAnswer: "Pixel (es. 1920x1080)",
    wrongAnswers: ["Pollici", "Hertz", "Byte"],
    hint: "Punti luminosi.",
    explanation: "La risoluzione è data dal numero di pixel orizzontali per quelli verticali."
  },
  {
    id: 747,
    question: "WPA3 è:",
    correctAnswer: "l'ultimo e più sicuro protocollo di sicurezza per reti Wi-Fi",
    wrongAnswers: ["un tipo di router", "un virus", "una password"],
    hint: "Successore di WPA2.",
    explanation: "Offre una crittografia più robusta per proteggere le comunicazioni wireless."
  },
  {
    id: 748,
    question: "La 'Wi-Fi Alliance' è:",
    correctAnswer: "l'organizzazione che certifica i dispositivi Wi-Fi e definisce gli standard",
    wrongAnswers: ["un operatore telefonico", "un negozio", "un antivirus"],
    hint: "Alleanza per il Wi-Fi.",
    explanation: "Ente che promuove la tecnologia Wi-Fi e ne garantisce l'interoperabilità."
  },
  {
    id: 749,
    question: "Come si inserisce un carattere speciale (es. € o ©) se non è sulla tastiera?",
    correctAnswer: "Scheda Inserisci > Simbolo",
    wrongAnswers: ["Scheda Home > Font", "Disegnandolo col mouse", "Non si può"],
    hint: "Menu Simboli.",
    explanation: "Apre una mappa di caratteri con tutti i simboli disponibili nel font corrente."
  },
  {
    id: 750,
    question: "Nelle reti Client/Server:",
    correctAnswer: "i computer (client) richiedono servizi a un computer centrale (server)",
    wrongAnswers: ["tutti i computer sono uguali", "non c'è connessione", "serve solo il Wi-Fi"],
    hint: "Uno serve, gli altri chiedono.",
    explanation: "Modello di architettura di rete centralizzata contrapposto al Peer-to-Peer."
  },
  {
    id: 751,
    question: "L'opzione 'Fascicola' nella stampa serve a:",
    correctAnswer: "stampare le copie ordinate del documento (1,2,3 - 1,2,3)",
    wrongAnswers: ["stampare tutte le pagine 1, poi tutte le 2", "stampare fronte retro", "mettere la spillatrice"],
    hint: "Fascicoli pronti.",
    explanation: "Se disattivata, stampa p.1, p.1, p.1... poi p.2, p.2, p.2... Se attiva, crea set completi."
  },
  {
    id: 752,
    question: "La velocità di connessione Wi-Fi si misura in:",
    correctAnswer: "Mbps (Megabit per secondo) o Gbps",
    wrongAnswers: ["Megabyte", "Hertz", "Pixel"],
    hint: "Bit, non Byte.",
    explanation: "Indica la quantità di dati trasmessi al secondo."
  },
  {
    id: 753,
    question: "In una funzione Excel, qual è la sintassi corretta?",
    correctAnswer: "=NOMEFUNZIONE(Argomento1; Argomento2)",
    wrongAnswers: ["NOMEFUNZIONE=Argomento", "(Argomento)NOMEFUNZIONE", "=Argomento(NOMEFUNZIONE)"],
    hint: "Uguale, Nome, Parentesi.",
    explanation: "Ogni funzione inizia con l'uguale, seguito dal nome e dagli argomenti tra parentesi."
  },
  {
    id: 754,
    question: "Nella funzione SE(Test; Vero; Falso), l'argomento 'Test' è:",
    correctAnswer: "la condizione logica da verificare (es. A1>10)",
    wrongAnswers: ["il risultato se vero", "un numero casuale", "il nome della cella"],
    hint: "La domanda da porsi.",
    explanation: "È il criterio che Excel valuta; se soddisfatto esegue il secondo argomento, altrimenti il terzo."
  },
  {
    id: 755,
    question: "In Excel, le parentesi nelle formule devono essere:",
    correctAnswer: "Solo tonde (che possono essere annidate)",
    wrongAnswers: ["Quadre e graffe", "Solo quadre", "Non servono parentesi"],
    hint: "(( ))",
    explanation: "Excel usa solo parentesi tonde per le funzioni e l'ordine delle operazioni; le quadre si usano per riferimenti a file esterni."
  },
  {
    id: 756,
    question: "Per ridimensionare una finestra di Windows in entrambe le direzioni (altezza e larghezza) contemporaneamente, si trascina:",
    correctAnswer: "Uno dei quattro angoli della finestra",
    wrongAnswers: ["Il bordo superiore", "La barra del titolo", "Il centro della finestra"],
    hint: "Angolo.",
    explanation: "Il cursore diagonale agli angoli permette il ridimensionamento libero su due assi."
  },
  {
    id: 757,
    question: "Cosa indica il 'Protocollo' in un URL?",
    correctAnswer: "La prima parte dell'indirizzo (es. http:// o https://)",
    wrongAnswers: ["La fine (.com)", "Il nome del sito", "La password"],
    hint: "Regole di comunicazione.",
    explanation: "Definisce come il browser deve comunicare con il server."
  },
  {
    id: 758,
    question: "Il termine 'Il Web' si riferisce a:",
    correctAnswer: "l’insieme delle informazioni e documenti ipertestuali navigabili su Internet",
    wrongAnswers: ["i cavi fisici", "il modem", "il sistema operativo"],
    hint: "WWW.",
    explanation: "È un servizio di Internet basato su pagine collegate, non l'infrastruttura fisica."
  },
  {
    id: 759,
    question: "Perché il titolo di un grafico è importante?",
    correctAnswer: "Perché comunica immediatamente il significato dei dati rappresentati",
    wrongAnswers: ["Perché colora il grafico", "Non è importante", "Serve a salvare il file"],
    hint: "Spiega cosa stiamo guardando.",
    explanation: "Fornisce il contesto necessario per interpretare correttamente la visualizzazione."
  },
  {
    id: 760,
    question: "AIDC è l'acronimo per indicare:",
    correctAnswer: "Sistemi di identificazione automatica e acquisizione dati (es. biometrici, barcode)",
    wrongAnswers: ["Un partito politico", "Un formato audio", "Un tipo di schermo"],
    hint: "Riconoscimento automatico.",
    explanation: "Automatic Identification and Data Capture include tecnologie come codici a barre, RFID e biometria."
  },
  {
    id: 761,
    question: "La geolocalizzazione consente di:",
    correctAnswer: "identificare la posizione geografica del dispositivo e migliorare i servizi basati sulla posizione",
    wrongAnswers: ["velocizzare il processore", "pulire lo schermo", "inviare email"],
    hint: "Mappe e GPS.",
    explanation: "Usa GPS, Wi-Fi e celle telefoniche per localizzare l'utente."
  },
  {
    id: 762,
    question: "Per applicare un colore di sfumatura allo sfondo di una cella Excel, si usa:",
    correctAnswer: "Finestra Formato celle > Scheda Riempimento > Effetti di riempimento",
    wrongAnswers: ["Pulsante Grassetto", "Pulsante Bordi", "Barra della formula"],
    hint: "Non colore solido, ma gradiente.",
    explanation: "Le opzioni avanzate di riempimento (sfumature) si trovano nella finestra di dialogo completa, non nel secchiello rapido."
  },
  {
    id: 763,
    question: "In PowerPoint, gli strumenti 'Panoramica e Zoom' nella scheda Modello 3D servono a:",
    correctAnswer: "ingrandire o rimpicciolire il modello 3D all'interno della sua cornice",
    wrongAnswers: ["cambiare diapositiva", "zoomare il testo", "chiudere il programma"],
    hint: "Come una telecamera sull'oggetto.",
    explanation: "Permette di regolare l'inquadratura dell'oggetto 3D senza ridimensionare l'oggetto stesso nella slide."
  },
  {
    id: 764,
    question: "Il Moodle è:",
    correctAnswer: "Un LMS (Learning Management System)",
    wrongAnswers: ["Un social network", "Un videogioco", "Un tipo di pasta"],
    hint: "Piattaforma didattica.",
    explanation: "È una delle piattaforme open source più diffuse per l'e-learning."
  },
  {
    id: 765,
    question: "Applicare il formato 'Testo' a un numero in Excel:",
    correctAnswer: "fa sì che Excel tratti il numero come una stringa di caratteri (non calcolabile)",
    wrongAnswers: ["lo cancella", "lo colora di rosso", "lo trasforma in data"],
    hint: "Allineato a sinistra.",
    explanation: "Utile per codici che iniziano con zero o numeri che non devono essere sommati."
  },
  {
    id: 766,
    question: "Con il ruolo 'Visualizzatore' in un file condiviso, l'utente può:",
    correctAnswer: "solo visualizzare il file, senza modificarlo o commentarlo",
    wrongAnswers: ["modificare tutto", "cancellare il file", "aggiungere commenti"],
    hint: "Solo guardare.",
    explanation: "È il livello di permesso più restrittivo nella condivisione."
  },
  {
    id: 767,
    question: "Per avviare il controllo ortografico in PowerPoint si va nella scheda:",
    correctAnswer: "Revisione",
    wrongAnswers: ["Home", "Inserisci", "Progettazione"],
    hint: "Dove si revisiona.",
    explanation: "Contiene il pulsante 'Controllo ortografia'."
  },
  {
    id: 768,
    question: "Il 'Cloud Computing' permette di:",
    correctAnswer: "usufruire di risorse (hardware/software) tramite internet on-demand",
    wrongAnswers: ["usare il computer senza elettricità", "navigare offline", "stampare senza stampante"],
    hint: "La nuvola.",
    explanation: "Sposta l'elaborazione e l'archiviazione dal PC locale ai server remoti."
  },
  {
    id: 769,
    question: "I modelli predefiniti (template) in Excel:",
    correctAnswer: "sono fogli di lavoro già impostati con formattazione e formule pronte all'uso",
    wrongAnswers: ["sono file vuoti", "sono virus", "sono immagini"],
    hint: "Es. Fattura, Calendario.",
    explanation: "Forniscono una base di partenza per documenti comuni risparmiando tempo."
  },
  {
    id: 770,
    question: "Gli elenchi numerati sono più adatti per:",
    correctAnswer: "riordinare contenuti secondo un senso logico, sequenziale o temporale",
    wrongAnswers: ["liste della spesa casuali", "disegnare", "scrivere poesie"],
    hint: "C'è un primo, un secondo, un terzo...",
    explanation: "Indicano una priorità o una sequenza di passi (step 1, step 2)."
  },
  {
    id: 771,
    question: "Come si elimina un account dall'app Posta di Windows?",
    correctAnswer: "Impostazioni (ingranaggio) > Gestisci account > Seleziona account > Elimina",
    wrongAnswers: ["Tasto Canc", "Trascinandolo nel cestino", "Non si può"],
    hint: "Dalle impostazioni dell'app.",
    explanation: "Rimuove la sincronizzazione di quella casella email dal computer."
  },
  {
    id: 772,
    question: "Hotmail è un servizio di:",
    correctAnswer: "Webmail (posta elettronica)",
    wrongAnswers: ["Messaggistica istantanea", "Social network", "Motore di ricerca"],
    hint: "Ora Outlook.com.",
    explanation: "È uno storico provider di email, non un'app di chat come WhatsApp."
  },
  {
    id: 773,
    question: "Mozilla Firefox NON è:",
    correctAnswer: "un motore di ricerca (è un browser)",
    wrongAnswers: ["un programma per navigare", "un software open source", "un'applicazione"],
    hint: "Il motore è Google/Bing, Firefox è l'auto.",
    explanation: "Firefox è il software per navigare, che può usare vari motori di ricerca al suo interno."
  },
  {
    id: 774,
    question: "L'icona 'Aa' in Word serve a:",
    correctAnswer: "cambiare le maiuscole/minuscole del testo selezionato",
    wrongAnswers: ["cambiare il colore", "aumentare lo zoom", "inserire una tabella"],
    hint: "Cambia caso.",
    explanation: "Apre il menu per scegliere Tutto maiuscole, Tutto minuscole, Iniziali maiuscole, etc."
  },
  {
    id: 775,
    question: "La 'Sincronizzazione bidirezionale' significa che:",
    correctAnswer: "le modifiche fatte sul cloud si riflettono sul PC e viceversa",
    wrongAnswers: ["i dati vanno solo in una direzione", "non funziona mai", "serve per la stampa"],
    hint: "Specchio.",
    explanation: "Mantiene allineate le versioni dei file tra due posizioni."
  },
  {
    id: 776,
    question: "Le 'Notifiche Push' su mobile:",
    correctAnswer: "avvisano l'utente di nuovi messaggi o eventi anche se l'app è chiusa",
    wrongAnswers: ["spengono il telefono", "cancellano i dati", "aprono la fotocamera"],
    hint: "Messaggi a schermo.",
    explanation: "Permettono alle app di inviare informazioni in tempo reale all'utente."
  },
  {
    id: 777,
    question: "In Excel, cosa succede se una cella contiene '#####'?",
    correctAnswer: "La colonna è troppo stretta per visualizzare il contenuto (numerico/data)",
    wrongAnswers: ["C'è un errore di formula", "Il file è corrotto", "È una password nascosta"],
    hint: "Allarga la colonna.",
    explanation: "Visualizzazione standard per indicare che il numero non entra nello spazio disponibile."
  },
  {
    id: 778,
    question: "Cos'è la 'Cache' del browser?",
    correctAnswer: "Una memoria temporanea che salva elementi delle pagine web per caricarle più velocemente in futuro",
    wrongAnswers: ["La cronologia dei siti", "Un virus", "Il portafoglio digitale"],
    hint: "Velocizza la navigazione.",
    explanation: "Memorizza immagini e script localmente per non doverli riscaricare ogni volta che si visita lo stesso sito."
  },
  {
    id: 779,
    question: "In Gmail, il pulsante “Mostra opzioni di ricerca” serve a:",
    correctAnswer: "configurare una ricerca avanzata",
    wrongAnswers: ["cercare solo nello spam", "ordinare le mail per data", "cancellare la cronologia"],
    hint: "Si trova nella barra di ricerca.",
    explanation: "Permette di filtrare le mail per mittente, oggetto, dimensioni o data[cite: 79]."
  },
  {
    id: 780,
    question: "In Gmail, l’“Oggetto” di una mail:",
    correctAnswer: "comunica al destinatario il motivo o contenuto del messaggio",
    wrongAnswers: ["è il nome del mittente", "è la firma digitale", "è un allegato obbligatorio"],
    hint: "È il titolo della mail.",
    explanation: "L'oggetto è una breve descrizione che anticipa il contenuto del messaggio[cite: 79]."
  },
  {
    id: 781,
    question: "In Gmail, quale icona permette di contrassegnare un messaggio come “Speciale”?",
    correctAnswer: "La stella (☆)",
    wrongAnswers: ["Il punto esclamativo", "La bandierina rossa", "Il lucchetto"],
    hint: "Si trova accanto al mittente.",
    explanation: "Cliccando sulla stella, il messaggio viene inserito nella lista dei messaggi speciali per ritrovarlo facilmente[cite: 81]."
  },
  {
    id: 782,
    question: "In Gmail, se una mail contiene più allegati, quale pulsante permette di scaricarli tutti insieme?",
    correctAnswer: "Scarica tutti gli allegati (icona freccia verso il basso su drive)",
    wrongAnswers: ["Salva con nome", "Copia incoll", "Non è possibile"],
    hint: "Crea uno zip.",
    explanation: "Gmail offre un'opzione per scaricare simultaneamente tutti i file allegati in un unico archivio compresso[cite: 85]."
  },
  {
    id: 783,
    question: "In Google Calendar, per creare un appuntamento in modo rapido bisogna:",
    correctAnswer: "fare clic direttamente sulla cella del calendario in corrispondenza del giorno e orario desiderati",
    wrongAnswers: ["inviare una mail a se stessi", "usare il tasto destro sul desktop", "aprire un foglio Excel"],
    hint: "Basta un clic sulla griglia.",
    explanation: "Cliccando sulla griglia oraria si apre un pop-up veloce per inserire titolo e orario dell'evento[cite: 93]."
  },
  {
    id: 784,
    question: "In Google Chrome, qual è la sequenza per cancellare la cronologia?",
    correctAnswer: "Personalizza e controlla Google Chrome > Cronologia > Cancella dati di navigazione",
    wrongAnswers: ["File > Elimina", "Visualizza > Rimuovi", "Tasto destro sulla pagina > Cancella"],
    hint: "Menu con tre puntini.",
    explanation: "Questa procedura apre il pannello per eliminare cronologia, cookie e cache[cite: 141]."
  },
  {
    id: 785,
    question: "In Google Chrome, è possibile cambiare la pagina web iniziale?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso"],
    hint: "Impostazioni > All'avvio.",
    explanation: "L'utente può impostare una pagina specifica o un insieme di pagine da aprire all'avvio del browser[cite: 115]."
  },
  {
    id: 786,
    question: "In Google Chrome, è possibile eliminare un segnalibro?",
    correctAnswer: "Sì, tramite la gestione preferiti o tasto destro sulla barra",
    wrongAnswers: ["No, sono permanenti", "Solo se si formatta il PC", "Solo pagando"],
    hint: "Gestione preferiti.",
    explanation: "I segnalibri possono essere rimossi o modificati in qualsiasi momento dall'utente[cite: 116]."
  },
  {
    id: 787,
    question: "In Google Chrome, l'opzione “Usa pagine correnti” nelle impostazioni all'avvio:",
    correctAnswer: "configura il browser affinché mostri al suo avvio le pagine web visualizzate in quel momento",
    wrongAnswers: ["apre sempre Google", "apre una pagina vuota", "cancella la cronologia"],
    hint: "Salva la sessione attuale come home.",
    explanation: "Questa funzione imposta automaticamente le schede attualmente aperte come set di pagine iniziali[cite: 139]."
  },
  {
    id: 788,
    question: "In Google Chrome, quali dati è possibile memorizzare con la “Compilazione Automatica”?",
    correctAnswer: "Password, metodi di pagamento, indirizzi",
    wrongAnswers: ["Solo i preferiti", "Solo la cronologia", "I video guardati"],
    hint: "Aiuta a riempire i moduli.",
    explanation: "Chrome salva questi dati per compilare velocemente i form online futuri[cite: 167]."
  },
  {
    id: 789,
    question: "In Google Meet, per disattivare il microfono si può usare la combinazione:",
    correctAnswer: "Ctrl + D",
    wrongAnswers: ["Ctrl + M", "Alt + A", "Shift + S"],
    hint: "Scorciatoia rapida.",
    explanation: "Ctrl+D è lo shortcut predefinito in Meet per il mute/unmute del microfono[cite: 202]."
  },
  {
    id: 790,
    question: "In Google Meet, per disattivare la videocamera si può usare la combinazione:",
    correctAnswer: "Ctrl + E",
    wrongAnswers: ["Ctrl + V", "Alt + V", "Esc"],
    hint: "Scorciatoia rapida.",
    explanation: "Ctrl+E è lo shortcut predefinito in Meet per accendere o spegnere la webcam[cite: 204]."
  },
  {
    id: 791,
    question: "In Google Meet, selezionando il layout “Barra laterale”:",
    correctAnswer: "la finestra principale mostra il relatore, gli altri partecipanti sono in riquadri a lato",
    wrongAnswers: ["tutti sono della stessa grandezza", "si vede solo il relatore", "lo schermo diventa nero"],
    hint: "Uno grande e tanti piccoli.",
    explanation: "Questo layout evidenzia chi sta parlando o presentando, mantenendo visibili gli altri in una colonna laterale[cite: 210]."
  },
  {
    id: 792,
    question: "In Google Meet, selezionando il layout “In evidenza”:",
    correctAnswer: "il relatore è l'unico partecipante visualizzato sullo schermo",
    wrongAnswers: ["si vedono tutti a mosaico", "si vede la barra laterale", "non si vede nessuno"],
    hint: "Focus su una persona.",
    explanation: "Questa modalità massimizza il video del relatore o della presentazione, nascondendo gli altri[cite: 211]."
  },
  {
    id: 793,
    question: "In informatica, cosa sono le “Reti”?",
    correctAnswer: "Speciali sistemi con cui far comunicare diversi dispositivi elettronici per sfruttare risorse comuni",
    wrongAnswers: ["Insieme di cavi elettrici", "Sistemi di pesca", "Programmi antivirus"],
    hint: "Connessione tra computer.",
    explanation: "Una rete è un insieme di dispositivi interconnessi che condividono dati e periferiche[cite: 219]."
  },
  {
    id: 794,
    question: "In merito alla scelta del colore per le diapositive, quale regola è corretta?",
    correctAnswer: "Quando lo sfondo è chiaro, è meglio usare un colore scuro per i testi (e viceversa)",
    wrongAnswers: ["Usare sempre testo giallo su sfondo bianco", "Usare colori simili per sfondo e testo", "Non usare mai il nero"],
    hint: "Contrasto.",
    explanation: "Il contrasto elevato tra testo e sfondo è fondamentale per la leggibilità della presentazione[cite: 221]."
  },
  {
    id: 795,
    question: "In PowerPoint, la visualizzazione “Sequenza diapositive” mostra:",
    correctAnswer: "le miniature di tutte le diapositive per riordinarle facilmente",
    wrongAnswers: ["una sola diapositiva grande", "solo il testo senza immagini", "le note del relatore"],
    hint: "Tante slide piccole.",
    explanation: "È la modalità ideale per avere una panoramica e modificare l'ordine delle slide[cite: 383]."
  },
  {
    id: 796,
    question: "In PowerPoint, è possibile inserire un’immagine?",
    correctAnswer: "Sì, ma il file deve trovarsi sul disco rigido o dispositivo collegato (o online)",
    wrongAnswers: ["No, solo testo", "Solo se è disegnata a mano", "Solo in formato PDF"],
    hint: "Menu Inserisci.",
    explanation: "PowerPoint permette l'inserimento di file immagine (jpg, png, ecc.) memorizzati localmente o in rete[cite: 209]."
  },
  {
    id: 797,
    question: "In PowerPoint, le note nelle diapositive:",
    correctAnswer: "aiutano il relatore e non compaiono sulle diapositive proiettate",
    wrongAnswers: ["vengono proiettate sullo schermo", "sono visibili al pubblico", "non si possono stampare"],
    hint: "Area note in basso.",
    explanation: "Le note servono come promemoria per chi presenta e sono visibili solo in modalità Relatore o stampa note[cite: 221]."
  },
  {
    id: 798,
    question: "In PowerPoint, quale opzione di stampa consente di avere le note su carta?",
    correctAnswer: "Pagine note",
    wrongAnswers: ["Diapositive a pagina intera", "Struttura", "Non fascicolare"],
    hint: "Stampa slide + testo sotto.",
    explanation: "L'opzione 'Pagine note' stampa la diapositiva nella metà superiore e le note relative in quella inferiore[cite: 221]."
  },
  {
    id: 799,
    question: "In quale scheda di Excel si trova il pulsante “Elimina” (celle/righe)?",
    correctAnswer: "Home",
    wrongAnswers: ["Dati", "Inserisci", "Formule"],
    hint: "Gruppo Celle.",
    explanation: "I comandi per inserire o eliminare celle, righe e colonne si trovano nella scheda principale Home[cite: 221]."
  },
  {
    id: 800,
    question: "In quale scheda di PowerPoint si trovano i pulsanti per le diverse visualizzazioni?",
    correctAnswer: "Visualizza",
    wrongAnswers: ["Home", "Progettazione", "Transizioni"],
    hint: "Riguarda come 'vedi' le slide.",
    explanation: "La scheda Visualizza contiene i comandi per Normale, Sequenza, Pagina note e Schema diapositiva[cite: 221]."
  },
  {
    id: 801,
    question: "In quale scheda troviamo il pulsante per selezionare il colore di sfondo della slide?",
    correctAnswer: "Progettazione (formato sfondo)",
    wrongAnswers: ["Inserisci", "Animazioni", "Revisione"],
    hint: "Design.",
    explanation: "Nella scheda Progettazione è possibile gestire i temi e formattare lo sfondo delle diapositive[cite: 223]."
  },
  {
    id: 802,
    question: "In quale sezione dell'account Google si trova l'opzione per eliminare l'account?",
    correctAnswer: "Dati e privacy",
    wrongAnswers: ["Sicurezza", "Informazioni personali", "Pagamenti"],
    hint: "Gestione dati.",
    explanation: "La cancellazione dell'account è una gestione dei propri dati personali, quindi si trova in Dati e privacy[cite: 223]."
  },
  {
    id: 803,
    question: "In quale sezione di Windows si trova la barra delle applicazioni?",
    correctAnswer: "Nella parte inferiore del desktop (di default)",
    wrongAnswers: ["In alto a destra", "Al centro", "Non esiste"],
    hint: "Dove c'è Start.",
    explanation: "La barra che contiene Start e le icone dei programmi è ancorata per default al bordo inferiore[cite: 223]."
  },
  {
    id: 804,
    question: "In Windows 11, per modificare data e ora bisogna:",
    correctAnswer: "Fare clic destro sull'orologio nella barra delle applicazioni > Modifica data e ora",
    wrongAnswers: ["Aprire Word", "Premere F1", "Spegnere il PC"],
    hint: "Menu contestuale sull'ora.",
    explanation: "È la scorciatoia più rapida per accedere alle impostazioni di data e ora[cite: 300]."
  },
  {
    id: 805,
    question: "In Windows 11, per spostare una finestra:",
    correctAnswer: "Trascinare la barra del titolo tenendo premuto il tasto sinistro",
    wrongAnswers: ["Trascinare l'angolo", "Premere Esc", "Usare la rotellina"],
    hint: "Parte alta della finestra.",
    explanation: "La barra del titolo è l'area designata per agganciare e muovere le finestre sul desktop[cite: 300]."
  },
  {
    id: 806,
    question: "In Windows 11, per selezionare file “non adiacenti” si usa:",
    correctAnswer: "Tasto Ctrl + clic sui singoli file",
    wrongAnswers: ["Tasto Maiusc", "Tasto Alt", "Tasto Invio"],
    hint: "Selezione multipla sparsa.",
    explanation: "Il tasto Ctrl permette di aggiungere singoli elementi alla selezione senza deselezionare gli altri[cite: 304]."
  },
  {
    id: 807,
    question: "In Windows 11, per selezionare file “adiacenti” si usa:",
    correctAnswer: "Clic sul primo, poi Maiusc + clic sull'ultimo",
    wrongAnswers: ["Ctrl + clic", "Alt + clic", "Doppio clic"],
    hint: "Selezione intervallo.",
    explanation: "Il tasto Maiusc (Shift) seleziona tutto ciò che si trova tra il primo e l'ultimo elemento cliccato[cite: 304]."
  },
  {
    id: 808,
    question: "In Word, per selezionare un'intera riga di testo:",
    correctAnswer: "Fare clic sul margine sinistro della pagina in corrispondenza della riga",
    wrongAnswers: ["Doppio clic sulla parola", "Ctrl + A", "Triplo clic"],
    hint: "Il cursore diventa una freccia bianca rivolta a destra.",
    explanation: "Cliccando nella zona del margine sinistro, Word seleziona l'intera riga adiacente[cite: 419]."
  },
  {
    id: 809,
    question: "In Word, per selezionare un intero paragrafo:",
    correctAnswer: "Fare triplo clic all'interno del paragrafo (o doppio clic nel margine sinistro)",
    wrongAnswers: ["Un clic", "Premere Invio", "Usare la gomma"],
    hint: "Tre clic veloci.",
    explanation: "Il triplo clic è una scorciatoia standard per selezionare l'intero blocco di testo del paragrafo[cite: 419]."
  },
  {
    id: 810,
    question: "La combinazione Ctrl + X serve a:",
    correctAnswer: "tagliare i dati selezionati",
    wrongAnswers: ["copiare", "incollare", "stampare"],
    hint: "Forbici.",
    explanation: "Rimuove l'elemento dalla posizione corrente e lo salva negli appunti[cite: 306]."
  },
  {
    id: 811,
    question: "La cronologia del browser è:",
    correctAnswer: "la lista delle pagine web visitate",
    wrongAnswers: ["l'elenco dei file scaricati", "la lista dei preferiti", "le password salvate"],
    hint: "Memoria del passato.",
    explanation: "Il browser memorizza gli URL visitati per permettere all'utente di ritrovarli in seguito[cite: 141]."
  },
  {
    id: 812,
    question: "La fibra ottica permette di raggiungere velocità nell'ordine dei:",
    correctAnswer: "Gbps (Gigabit per secondo)",
    wrongAnswers: ["Kbps", "Hertz", "Byte"],
    hint: "Molto veloce.",
    explanation: "La tecnologia in fibra supporta larghezze di banda elevatissime, superiori alle connessioni in rame[cite: 308]."
  },
  {
    id: 813,
    question: "La modalità “Schermo intero” in PowerPoint:",
    correctAnswer: "ingrandisce la finestra nascondendo barra multifunzione e barra di stato",
    wrongAnswers: ["mostra le note", "spegne il monitor", "chiude il file"],
    hint: "Massimizza l'area di lavoro.",
    explanation: "Permette di visualizzare la presentazione o l'area di lavoro sfruttando tutto lo spazio disponibile[cite: 308]."
  },
  {
    id: 814,
    question: "La parola Internet nasce da:",
    correctAnswer: "Interconnected Network (Reti interconnesse)",
    wrongAnswers: ["International Net", "Internal Network", "Intelligent Net"],
    hint: "Rete tra reti.",
    explanation: "Il termine deriva dalla contrazione di Interconnected Networks[cite: 308]."
  },
  {
    id: 815,
    question: "La procedura di Logout serve a:",
    correctAnswer: "uscire dal proprio account per proteggere i dati",
    wrongAnswers: ["entrare nell'account", "cancellare l'account", "spegnere il PC"],
    hint: "Disconnessione.",
    explanation: "Chiudere la sessione impedisce accessi non autorizzati successivi[cite: 308]."
  },
  {
    id: 816,
    question: "La scheda Guida (Help) serve a:",
    correctAnswer: "cercare informazioni e istruzioni sul programma",
    wrongAnswers: ["chiudere il programma", "inviare email", "giocare"],
    hint: "Punto interrogativo.",
    explanation: "Fornisce supporto e documentazione sull'uso del software[cite: 308]."
  },
  {
    id: 817,
    question: "La scheda Layout in una tabella (Word/PPT) serve a:",
    correctAnswer: "gestire il formato della tabella (righe, colonne, dimensioni)",
    wrongAnswers: ["cambiare colore testo", "inserire grafici", "salvare il file"],
    hint: "Struttura della tabella.",
    explanation: "Contiene comandi per aggiungere/rimuovere celle, unire celle e modificare le dimensioni[cite: 308]."
  },
  {
    id: 818,
    question: "La velocità di una rete wireless dipende:",
    correctAnswer: "dallo standard che utilizza (es. 802.11n, ac, ax)",
    wrongAnswers: ["dal numero di tasti del PC", "dalla marca del monitor", "dal colore del router"],
    hint: "Classe Wi-Fi.",
    explanation: "Protocolli più recenti (come Wi-Fi 6) supportano velocità maggiori rispetto a quelli vecchi[cite: 340]."
  },
  {
    id: 819,
    question: "Le “animazioni” in PowerPoint sono:",
    correctAnswer: "effetti visivi applicati ai singoli elementi (testo, immagini) della diapositiva",
    wrongAnswers: ["effetti tra una diapositiva e l'altra", "video scaricati", "suoni di sistema"],
    hint: "Oggetti che si muovono.",
    explanation: "Differiscono dalle transizioni perché agiscono sul contenuto della slide, non sulla slide stessa[cite: 346]."
  },
  {
    id: 820,
    question: "Le intestazioni di colonna in Excel sono indicate da:",
    correctAnswer: "Lettere maiuscole (A, B, C...)",
    wrongAnswers: ["Numeri", "Simboli", "Colori"],
    hint: "Bordo superiore.",
    explanation: "Le colonne sono identificate alfabeticamente[cite: 346]."
  },
  {
    id: 821,
    question: "Le reti LAN (Local Area Network):",
    correctAnswer: "permettono a dispositivi vicini di comunicare (es. stesso ufficio)",
    wrongAnswers: ["collegano città diverse", "sono reti mondiali", "non usano cavi"],
    hint: "Rete locale.",
    explanation: "Coprono un'area geografica limitata come una casa o un edificio[cite: 346]."
  },
  {
    id: 822,
    question: "Le reti VPN sfruttano Internet per:",
    correctAnswer: "creare reti private e sicure (Virtual Private Network)",
    wrongAnswers: ["navigare più velocemente", "creare siti web", "inviare virus"],
    hint: "Tunnel sicuro.",
    explanation: "Permettono connessioni sicure su reti pubbliche cifrando il traffico[cite: 346]."
  },
  {
    id: 823,
    question: "Lo standard ISO/27001 riguarda:",
    correctAnswer: "la gestione della sicurezza delle informazioni",
    wrongAnswers: ["la qualità dei monitor", "la velocità di stampa", "il formato della carta"],
    hint: "Sicurezza dati.",
    explanation: "È la norma internazionale per i sistemi di gestione della sicurezza delle informazioni[cite: 356]."
  },
  {
    id: 824,
    question: "Lo zoom interviene sulla stampa?",
    correctAnswer: "Falso, modifica solo la visualizzazione a video",
    wrongAnswers: ["Vero, stampa più grande", "Dipende dalla stampante", "Solo se è al 200%"],
    hint: "È solo una lente d'ingrandimento per lo schermo.",
    explanation: "Lo zoom cambia l'ingrandimento sul monitor ma non le dimensioni reali del documento stampato[cite: 359]."
  },
  {
    id: 825,
    question: "L’allineamento “Giustificato”:",
    correctAnswer: "allinea il testo sia al margine sinistro che a quello destro",
    wrongAnswers: ["solo a sinistra", "solo a destra", "al centro"],
    hint: "Blocco squadrato.",
    explanation: "Distribuisce gli spazi per rendere le righe di uguale lunghezza[cite: 375]."
  },
  {
    id: 826,
    question: "L’app “Find My Device” (Trova il mio dispositivo) serve a:",
    correctAnswer: "localizzare i dispositivi persi associati all'account",
    wrongAnswers: ["cercare file", "trovare amici", "trovare Wi-Fi"],
    hint: "Anti-furto.",
    explanation: "Permette di rintracciare smartphone o tablet su una mappa[cite: 375]."
  },
  {
    id: 827,
    question: "L’estensione dei file serve a:",
    correctAnswer: "capire quale programma utilizzare per aprire il file",
    wrongAnswers: ["capire quanto è grande", "sapere chi l'ha creato", "proteggerlo"],
    hint: ".docx, .pdf, .jpg.",
    explanation: "Il sistema operativo associa l'estensione all'applicazione predefinita[cite: 375]."
  },
  {
    id: 828,
    question: "L’opzione “Ccn” (Copia Conoscenza Nascosta) in una mail:",
    correctAnswer: "invia il messaggio a destinatari che non saranno visibili agli altri",
    wrongAnswers: ["invia copie cartacee", "rende il messaggio anonimo", "non invia nulla"],
    hint: "Blind Carbon Copy.",
    explanation: "Protegge la privacy nascondendo la lista dei destinatari inseriti in questo campo[cite: 79]."
  },
  {
    id: 829,
    question: "L’opzione “Mantieni solo il testo” (Incolla):",
    correctAnswer: "incolla il testo perdendo la formattazione originale",
    wrongAnswers: ["mantiene i colori", "mantiene i link", "incolla come immagine"],
    hint: "Testo puro.",
    explanation: "Rimuove stili, font e link, adattando il testo alla destinazione[cite: 375]."
  },
  {
    id: 830,
    question: "Nel browser, l'icona del lucchetto indica:",
    correctAnswer: "che la connessione è sicura (HTTPS) e il certificato è valido",
    wrongAnswers: ["che il sito è bloccato", "che serve una password", "che il sito è chiuso"],
    hint: "Sicurezza.",
    explanation: "Garantisce che la comunicazione col sito sia cifrata[cite: 441]."
  },
  {
    id: 831,
    question: "Nella app Posta di Windows, la cartella “Posta in uscita” contiene:",
    correctAnswer: "le mail che non sono state ancora inviate (es. per mancanza di connessione)",
    wrongAnswers: ["le mail inviate", "le mail ricevute", "lo spam"],
    hint: "In attesa di partire.",
    explanation: "I messaggi restano qui finché il server non li accetta o la connessione non torna disponibile[cite: 381]."
  },
  {
    id: 832,
    question: "Nella barra multifunzione, la scheda “File” apre:",
    correctAnswer: "la visualizzazione Backstage (salva, apri, stampa)",
    wrongAnswers: ["la formattazione testo", "le immagini", "i grafici"],
    hint: "Gestione file.",
    explanation: "Dà accesso alle opzioni generali del documento e del programma[cite: 169]."
  },
  {
    id: 833,
    question: "Nella funzione =SOMMA(A1:A10), i due punti (:) indicano:",
    correctAnswer: "un intervallo di celle (da A1 a A10)",
    wrongAnswers: ["una divisione", "una somma", "due celle separate"],
    hint: "Range continuo.",
    explanation: "I due punti definiscono l'inizio e la fine di un intervallo contiguo di celle[cite: 306]."
  },
  {
    id: 834,
    question: "Nelle diapositive, i “Layout” contengono:",
    correctAnswer: "i segnaposto per testo, titoli e oggetti",
    wrongAnswers: ["i colori", "le animazioni", "i suoni"],
    hint: "Struttura della slide.",
    explanation: "Il layout definisce dove posizionare i contenuti nella diapositiva[cite: 72]."
  },
  {
    id: 835,
    question: "OneDrive è:",
    correctAnswer: "il servizio di cloud storage di Microsoft",
    wrongAnswers: ["un tipo di hard disk", "un antivirus", "un social network"],
    hint: "Nuvola Microsoft.",
    explanation: "Integrato in Windows, permette di salvare e sincronizzare file online[cite: 67]."
  },
  {
    id: 836,
    question: "Per aggiungere una nuova diapositiva con lo stesso layout:",
    correctAnswer: "Home > Nuova diapositiva",
    wrongAnswers: ["Inserisci > Foto", "File > Nuovo", "Visualizza > Nuova"],
    hint: "Pulsante nella scheda Home.",
    explanation: "Aggiunge una slide successiva alla corrente[cite: 417]."
  },
  {
    id: 837,
    question: "Per avviare la presentazione dalla prima diapositiva:",
    correctAnswer: "Scheda Presentazione > Dall'inizio (o F5)",
    wrongAnswers: ["Dalla diapositiva corrente", "Shift + F5", "Esc"],
    hint: "Inizio show.",
    explanation: "Comando per far partire lo slideshow dal principio[cite: 415]."
  },
  {
    id: 838,
    question: "Per creare una cartella in Windows 11:",
    correctAnswer: "Pulsante Nuovo nella barra > Cartella (o Tasto destro > Nuovo > Cartella)",
    wrongAnswers: ["Tasto destro > Elimina", "Doppio clic", "Menu Start"],
    hint: "Crea contenitore.",
    explanation: "Metodo standard per organizzare i file in directory[cite: 304]."
  },
  {
    id: 839,
    question: "Per disegnare una forma perfetta (es. cerchio):",
    correctAnswer: "tenere premuto il tasto Maiusc mentre si trascina",
    wrongAnswers: ["premere Ctrl", "premere Alt", "fare doppio clic"],
    hint: "Vincolo proporzioni.",
    explanation: "Maiusc costringe la forma a mantenere larghezza e altezza uguali[cite: 65]."
  },
  {
    id: 840,
    question: "Per eliminare una diapositiva selezionata:",
    correctAnswer: "Premere il tasto Canc",
    wrongAnswers: ["Premere Invio", "Premere Spazio", "Premere Tab"],
    hint: "Cancellazione.",
    explanation: "Rimuove la slide dalla presentazione[cite: 417]."
  },
  {
    id: 841,
    question: "Per inserire un grafico in PowerPoint:",
    correctAnswer: "Scheda Inserisci > Grafico",
    wrongAnswers: ["Scheda Home > Disegno", "Tasto destro > Grafico", "Non si può"],
    hint: "Menu inserimento.",
    explanation: "Apre la finestra per scegliere il tipo di grafico e inserire i dati Excel[cite: 556]."
  },
  {
    id: 842,
    question: "Per modificare il nome di un foglio Excel:",
    correctAnswer: "Tasto destro sulla scheda del foglio > Rinomina (o doppio clic)",
    wrongAnswers: ["Menu File > Rinomina", "Tasto Canc", "Non si può"],
    hint: "Etichetta in basso.",
    explanation: "Permette di assegnare un nome significativo alla scheda del foglio di lavoro[cite: 415]."
  },
  {
    id: 843,
    question: "Per spostarsi nella cella precedente (a sinistra) in una tabella:",
    correctAnswer: "Maiusc + Tab",
    wrongAnswers: ["Tab", "Invio", "Alt"],
    hint: "Indietro.",
    explanation: "Mentre Tab va avanti, Maiusc+Tab inverte la direzione di navigazione[cite: 43]."
  },
  {
    id: 844,
    question: "Qual è il formato predefinito di Excel?",
    correctAnswer: ".xlsx",
    wrongAnswers: [".docx", ".pptx", ".txt"],
    hint: "Cartella di lavoro.",
    explanation: "Estensione standard per i file Excel moderni[cite: 421]."
  },
  {
    id: 845,
    question: "Qual è il formato predefinito di Word?",
    correctAnswer: ".docx",
    wrongAnswers: [".xlsx", ".pdf", ".exe"],
    hint: "Documento.",
    explanation: "Estensione standard per i documenti di testo Word[cite: 421]."
  },
  {
    id: 846,
    question: "Qual è la funzione del tasto Tab in un testo?",
    correctAnswer: "Spostare il cursore verso destra di una lunghezza predefinita (tabulazione)",
    wrongAnswers: ["Cancellare", "Andare a capo", "Salvare"],
    hint: "Incolonnamento.",
    explanation: "Crea uno spazio fisso utile per allineare il testo[cite: 423]."
  },
  {
    id: 847,
    question: "Quale combinazione di tasti serve per 'Salvare'?",
    correctAnswer: "Ctrl + S (o Ctrl + B in italiano)",
    wrongAnswers: ["Ctrl + P", "Ctrl + C", "Ctrl + V"],
    hint: "Save.",
    explanation: "Scorciatoia rapida per salvare il lavoro corrente[cite: 423]."
  },
  {
    id: 848,
    question: "Quale dispositivo è di Input?",
    correctAnswer: "Mouse",
    wrongAnswers: ["Stampante", "Monitor", "Casse"],
    hint: "Comanda il PC.",
    explanation: "Invia comandi di puntamento al computer[cite: 75]."
  },
  {
    id: 849,
    question: "Quale simbolo precede sempre una formula in Excel?",
    correctAnswer: "=",
    wrongAnswers: ["#", "+", "-"],
    hint: "Uguale.",
    explanation: "Indica ad Excel che il contenuto della cella va calcolato[cite: 417]."
  },
  {
    id: 850,
    question: "Quale tasto cancella il carattere a sinistra del cursore?",
    correctAnswer: "Backspace",
    wrongAnswers: ["Canc", "Invio", "Shift"],
    hint: "Freccia indietro sopra Invio.",
    explanation: "Cancella all'indietro, mentre Canc cancella in avanti[cite: 423]."
  },
  {
    id: 851,
    question: "Quale tasto cancella il carattere a destra del cursore?",
    correctAnswer: "Canc (Delete)",
    wrongAnswers: ["Backspace", "Invio", "Tab"],
    hint: "Cancella in avanti.",
    explanation: "Elimina il carattere che segue il punto di inserimento[cite: 423]."
  },
  {
    id: 852,
    question: "Quale tra i seguenti è un sistema operativo mobile?",
    correctAnswer: "Android",
    wrongAnswers: ["Windows 11 (desktop)", "MacOS", "Linux"],
    hint: "Smartphone.",
    explanation: "Sistema operativo sviluppato da Google per dispositivi mobili[cite: 45]."
  },
  {
    id: 853,
    question: "Quale tra le seguenti è una minaccia 'ingegneria sociale'?",
    correctAnswer: "Phishing",
    wrongAnswers: ["Rottura disco", "Blackout", "Errore software"],
    hint: "Manipolazione umana.",
    explanation: "Sfrutta la psicologia per ingannare l'utente piuttosto che attaccare tecnicamente il sistema[cite: 7]."
  },
  {
    id: 854,
    question: "Quando si elimina un file in Windows, dove va?",
    correctAnswer: "Nel Cestino",
    wrongAnswers: ["Viene distrutto subito", "Nel cloud", "Nella cartella documenti"],
    hint: "Recuperabile.",
    explanation: "Spostato in un'area temporanea da cui può essere ripristinato[cite: 300]."
  },
  {
    id: 855,
    question: "Se il testo in una cella Excel appare come '####', significa:",
    correctAnswer: "che la colonna è troppo stretta per mostrare il contenuto",
    wrongAnswers: ["che è un errore di calcolo", "che è una password", "che è cancellato"],
    hint: "Allarga la colonna.",
    explanation: "Excel nasconde i numeri o le date che non entrano nello spazio disponibile[cite: 47]."
  },
  {
    id: 856,
    question: "Un file con estensione .exe è:",
    correctAnswer: "un file eseguibile (programma)",
    wrongAnswers: ["un documento", "un video", "una foto"],
    hint: "App.",
    explanation: "Avvia l'installazione o l'esecuzione di un software[cite: 21]."
  },
  {
    id: 857,
    question: "Un firewall serve a:",
    correctAnswer: "controllare e proteggere il traffico di rete",
    wrongAnswers: ["cancellare virus", "velocizzare il PC", "stampare"],
    hint: "Muro di fuoco.",
    explanation: "Filtra le connessioni in entrata e uscita per bloccare accessi non autorizzati[cite: 72]."
  },
  {
    id: 858,
    question: "Una rete VPN (Virtual Private Network):",
    correctAnswer: "crea un tunnel sicuro su Internet per trasmettere dati",
    wrongAnswers: ["è una rete pubblica aperta", "è un virus", "è un social"],
    hint: "Privacy.",
    explanation: "Cifra la connessione permettendo di navigare in sicurezza e privacy[cite: 346]."
  },
  {
    id: 859,
    question: "Una volta inserita una tabella in Word, è possibile aggiungere righe?",
    correctAnswer: "Sì, tramite la scheda Layout o tasto destro",
    wrongAnswers: ["No, dimensione fissa", "Solo cancellando tutto", "Solo colonne"],
    hint: "Modificabile.",
    explanation: "Le tabelle sono dinamiche e permettono l'inserimento di nuove righe e colonne in qualsiasi momento[cite: 65]."
  },
  {
    id: 860,
    question: "Windows Defender è:",
    correctAnswer: "l'antivirus incluso in Windows",
    wrongAnswers: ["un gioco", "un browser", "un editor"],
    hint: "Protezione.",
    explanation: "Software di sicurezza nativo di Microsoft[cite: 300]."
  },
  {
    id: 861,
    question: "“Cc” in una mail significa:",
    correctAnswer: "Copia Conoscenza (destinatari visibili)",
    wrongAnswers: ["Copia Nascosta", "Cancella Copia", "Computer Control"],
    hint: "Per info.",
    explanation: "Invia la mail a destinatari secondari rendendo i loro indirizzi visibili a tutti[cite: 79]."
  },
  {
    id: 862,
    question: "“Phishing” è:",
    correctAnswer: "una truffa via email per rubare dati sensibili",
    wrongAnswers: ["un virus", "un guasto", "un programma utile"],
    hint: "Pesca dati.",
    explanation: "Tecnica fraudolenta basata sull'inganno tramite messaggi contraffatti[cite: 7]."
  },
  {
    id: 863,
    question: "Il comando “Annulla” (Ctrl+Z):",
    correctAnswer: "revoca l'ultima operazione eseguita",
    wrongAnswers: ["cancellare tutto", "salva", "chiude"],
    hint: "Torna indietro.",
    explanation: "Permette di correggere l'ultimo errore commesso[cite: 25]."
  },
  {
    id: 864,
    question: "Il formato .zip indica:",
    correctAnswer: "un file compresso",
    wrongAnswers: ["un video", "un'immagine", "un testo"],
    hint: "Archivio.",
    explanation: "Riduce la dimensione dei file contenuti per facilitarne l'invio o l'archiviazione[cite: 23]."
  },
  {
    id: 865,
    question: "In Excel, per selezionare tutto il foglio:",
    correctAnswer: "Clic sul triangolo in alto a sinistra (o Ctrl+A)",
    wrongAnswers: ["Clic su A1", "Doppio clic", "Non si può"],
    hint: "Intersezione intestazioni.",
    explanation: "Seleziona tutte le celle del foglio di lavoro attivo[cite: 235]."
  },
  {
    id: 866,
    question: "L’estensione .jpg si riferisce a:",
    correctAnswer: "un file immagine",
    wrongAnswers: ["un video", "un audio", "un programma"],
    hint: "Foto.",
    explanation: "Formato standard per fotografie digitali compresse[cite: 22]."
  },
  {
    id: 867,
    question: "Un “Browser” serve per:",
    correctAnswer: "navigare in Internet",
    wrongAnswers: ["scrivere testi", "fare calcoli", "disegnare"],
    hint: "Chrome, Edge.",
    explanation: "Applicazione per visualizzare pagine web[cite: 54]."
  },
  {
    id: 868,
    question: "Un “Motore di ricerca”:",
    correctAnswer: "agevola la ricerca di informazioni sul web (es. Google)",
    wrongAnswers: ["è un browser", "è un computer", "è un modem"],
    hint: "Cerca informazioni.",
    explanation: "Sistema che indicizza il web e risponde alle query degli utenti[cite: 61]."
  },
  {
    id: 869,
    question: "Una “Rete LAN”:",
    correctAnswer: "collega dispositivi in un'area limitata (es. casa, ufficio)",
    wrongAnswers: ["collega tutto il mondo", "non usa cavi", "è solo per telefoni"],
    hint: "Locale.",
    explanation: "Local Area Network, rete a corto raggio[cite: 72]."
  },
  {
    id: 870,
    question: "Windows 11 è un:",
    correctAnswer: "Sistema Operativo",
    wrongAnswers: ["Browser", "Antivirus", "Programma di scrittura"],
    hint: "Software di base.",
    explanation: "Gestisce l'hardware e permette l'esecuzione delle applicazioni[cite: 605]."
  },
  {
    id: 871,
    question: "“HTTPS” garantisce:",
    correctAnswer: "una connessione sicura e crittografata",
    wrongAnswers: ["velocità maggiore", "accesso gratis", "niente"],
    hint: "S = Secure.",
    explanation: "Protocollo web che protegge i dati scambiati tra browser e server[cite: 75]."
  },
  {
    id: 872,
    question: "“URL” significa:",
    correctAnswer: "Uniform Resource Locator (indirizzo web)",
    wrongAnswers: ["Unità Rete", "User List", "Universal Link"],
    hint: "Indirizzo sito.",
    explanation: "Stringa che identifica univocamente una risorsa online[cite: 55]."
  },
  {
    id: 873,
    question: "In Excel, il simbolo “/” serve per:",
    correctAnswer: "la divisione",
    wrongAnswers: ["la somma", "il testo", "la data"],
    hint: "Operatore matematico.",
    explanation: "Carattere usato nelle formule per dividere numeri[cite: 221]."
  },
  {
    id: 874,
    question: "In Excel, il simbolo “*” serve per:",
    correctAnswer: "la moltiplicazione",
    wrongAnswers: ["la sottrazione", "il commento", "l'errore"],
    hint: "Asterisco.",
    explanation: "Operatore matematico per moltiplicare valori[cite: 417]."
  },
  {
    id: 875,
    question: "Il “Ransomware” è un malware che:",
    correctAnswer: "chiede un riscatto per sbloccare i dati",
    wrongAnswers: ["ruba password", "rallenta il pc", "mostra pubblicità"],
    hint: "Riscatto.",
    explanation: "Cifra i file dell'utente rendendoli inaccessibili fino al pagamento[cite: 73]."
  },
  {
    id: 876,
    question: "La “RAM” è una memoria:",
    correctAnswer: "volatile (si cancella allo spegnimento)",
    wrongAnswers: ["permanente", "lenta", "esterna"],
    hint: "Memoria di lavoro.",
    explanation: "Mantiene i dati solo finché il computer è acceso[cite: 57]."
  },
  {
    id: 877,
    question: "Un “Server” è:",
    correctAnswer: "un computer che fornisce servizi o dati ad altri computer",
    wrongAnswers: ["un cavo", "un programma", "un utente"],
    hint: "Servitore.",
    explanation: "Ospita siti web, file o applicazioni accessibili via rete[cite: 61]."
  },
  {
    id: 878,
    question: "“Open Source” significa:",
    correctAnswer: "software con codice sorgente aperto e modificabile",
    wrongAnswers: ["a pagamento", "chiuso", "pirata"],
    hint: "Codice libero.",
    explanation: "Permette agli utenti di studiare e migliorare il programma[cite: 58]."
  },
  {
    id: 879,
    question: "Che cos’è l’“Ingegneria sociale” (Social Engineering)?",
    correctAnswer: "Una manipolazione psicologica che induce la vittima a rivelare informazioni personali senza rendersene conto",
    wrongAnswers: ["Un corso di laurea", "La progettazione di social network", "Un tipo di software"],
    hint: "Hackerare le persone, non i computer.",
    explanation: "Sfrutta le debolezze umane (fiducia, paura, curiosità) per ottenere accessi o dati riservati."
  },
  {
    id: 880,
    question: "Virtu, ProtonMail e Lockbin sono esempi di:",
    correctAnswer: "servizi online per crittografare i messaggi di posta elettronica",
    wrongAnswers: ["virus informatici", "social network", "motori di ricerca"],
    hint: "Email sicure.",
    explanation: "Sono servizi focalizzati sulla privacy che offrono crittografia end-to-end per le email."
  },
  {
    id: 881,
    question: "Una volta selezionato il testo, quale combinazione di tasti applica il corsivo?",
    correctAnswer: "Ctrl + I",
    wrongAnswers: ["Ctrl + C", "Ctrl + G", "Ctrl + S"],
    hint: "I come Italic (o Inclinato).",
    explanation: "Ctrl+I è la scorciatoia standard per applicare o rimuovere la formattazione corsiva."
  },
  {
    id: 882,
    question: "Una volta selezionato il testo, quale combinazione di tasti applica il grassetto?",
    correctAnswer: "Ctrl + G",
    wrongAnswers: ["Ctrl + B", "Ctrl + I", "Ctrl + U"],
    hint: "G come Grassetto.",
    explanation: "Ctrl+G (o Ctrl+B in inglese) rende il testo marcato e più spesso."
  },
  {
    id: 883,
    question: "In Windows, l’icona “Nuvoletta” nella colonna stato di OneDrive indica che:",
    correctAnswer: "il file è disponibile solo online (non occupa spazio sul disco)",
    wrongAnswers: ["il file è danneggiato", "il file sta piovendo", "il file è un virus"],
    hint: "È nel cloud.",
    explanation: "Indica che il file è salvato nel cloud e verrà scaricato solo quando proverai ad aprirlo."
  },
  {
    id: 884,
    question: "Nel comando Trova e Sostituisci, l’opzione “Confronta Intero contenuto della cella”:",
    correctAnswer: "trova solo le celle che contengono ESATTAMENTE e SOLO il testo cercato",
    wrongAnswers: ["trova il testo anche se è parte di una parola", "cerca in tutto il foglio", "sostituisce tutto"],
    hint: "Corrispondenza esatta.",
    explanation: "Se cerchi 'Marco', non troverà 'San Marco' o 'Marco Polo', ma solo la cella che contiene 'Marco'."
  },
  {
    id: 885,
    question: "Una volta eliminato un file da Google Drive, è possibile ripristinarlo?",
    correctAnswer: "Sì, accedendo alla cartella Cestino (entro 30 giorni)",
    wrongAnswers: ["No, è perso per sempre", "Solo pagando", "Solo se l'hai condiviso"],
    hint: "Non si cancella subito.",
    explanation: "I file rimangono nel cestino per un periodo limitato prima dell'eliminazione definitiva."
  },
  {
    id: 886,
    question: "Una volta copiati o tagliati, dove vengono salvati temporaneamente gli elementi?",
    correctAnswer: "Negli Appunti (Clipboard)",
    wrongAnswers: ["Nel Cestino", "Sul Desktop", "Nella RAM permanente"],
    hint: "Memoria temporanea.",
    explanation: "Gli appunti sono un'area di memoria che ospita l'ultimo elemento copiato pronto per essere incollato."
  },
  {
    id: 887,
    question: "Una cartella di lavoro di Excel è:",
    correctAnswer: "un file che contiene uno o più fogli di lavoro",
    wrongAnswers: ["una singola pagina", "un database", "un grafico"],
    hint: "È il file .xlsx intero.",
    explanation: "Il file Excel è il contenitore (cartella) che al suo interno ha le varie pagine (fogli)."
  },
  {
    id: 888,
    question: "Un disco rigido da 1TB è più veloce di un processore da 3GHz?",
    correctAnswer: "Non possono essere paragonati (sono unità di misura diverse)",
    wrongAnswers: ["Sì, 1TB è enorme", "No, 3GHz è più veloce", "Dipende dalla marca"],
    hint: "Mele con pere.",
    explanation: "TB misura la capacità di archiviazione, GHz misura la velocità di elaborazione."
  },
  {
    id: 889,
    question: "Trattenendo il cursore su un comando della barra multifunzione, cosa appare?",
    correctAnswer: "Una descrizione del comando (Screen Tip)",
    wrongAnswers: ["Un virus", "Il formato immagine", "Un errore"],
    hint: "Suggerimento a schermo.",
    explanation: "Mostra il nome del comando, la scorciatoia da tastiera e una breve spiegazione."
  },
  {
    id: 890,
    question: "Tramite la scheda “Carta” (o Layout) in Word è possibile:",
    correctAnswer: "scegliere il formato della pagina (A4, A3, Lettera...)",
    wrongAnswers: ["scegliere il tipo di carta per la stampante", "disegnare sulla carta", "comprare carta online"],
    hint: "Dimensioni foglio.",
    explanation: "Permette di definire le dimensioni fisiche del foglio su cui si andrà a stampare."
  },
  {
    id: 891,
    question: "Se, lavorando al PC, manca improvvisamente la corrente:",
    correctAnswer: "i dati non salvati presenti nella RAM vengono persi",
    wrongAnswers: ["il computer esplode", "i dati si salvano da soli", "non succede nulla"],
    hint: "La RAM è volatile.",
    explanation: "La memoria RAM ha bisogno di alimentazione per conservare i dati; senza corrente si svuota."
  },
  {
    id: 892,
    question: "Se non viene inserito il simbolo “=” all’inizio, Excel considera il contenuto della cella come:",
    correctAnswer: "Testo (o numero semplice)",
    wrongAnswers: ["Una formula", "Un errore", "Un grafico"],
    hint: "Niente calcoli.",
    explanation: "Senza l'uguale, Excel non interpreta il contenuto come un'operazione matematica."
  },
  {
    id: 893,
    question: "In Excel, inserendo riferimenti di cella (es. A1+B1) invece di numeri fissi (5+10):",
    correctAnswer: "il risultato si aggiorna automaticamente se cambiano i valori nelle celle",
    wrongAnswers: ["il calcolo è più lento", "non si può fare", "è un errore"],
    hint: "Dinamicità.",
    explanation: "Usare i riferimenti rende il foglio di calcolo dinamico e ricalcolabile al variare dei dati."
  },
  {
    id: 894,
    question: "Se durante la Stampa Unione selezioni “Crea un nuovo elenco”:",
    correctAnswer: "potrai inserire manualmente i dati dei destinatari in una nuova tabella",
    wrongAnswers: ["devi usare un file Excel esistente", "non puoi fare nulla", "stampi subito"],
    hint: "Creazione database.",
    explanation: "Ti permette di digitare nomi e indirizzi al momento, salvandoli in un nuovo file dati."
  },
  {
    id: 895,
    question: "Se a fianco del puntatore compare un cerchietto blu che gira:",
    correctAnswer: "il computer sta elaborando dati (è occupato)",
    wrongAnswers: ["il sistema è bloccato per sempre", "c'è un virus", "devi spegnere"],
    hint: "Attendi.",
    explanation: "Indica che un processo è in corso in background e il sistema potrebbe non rispondere immediatamente."
  },
  {
    id: 896,
    question: "Quanti sono i margini di pagina in un documento?",
    correctAnswer: "4 (Superiore, Inferiore, Sinistro, Destro)",
    wrongAnswers: ["2", "6", "8"],
    hint: "I lati del foglio.",
    explanation: "Ogni pagina ha quattro bordi che definiscono l'area di testo."
  },
  {
    id: 897,
    question: "Quali tasti permettono di spostarsi tra le celle in Excel?",
    correctAnswer: "I quattro tasti freccia (su, giù, destra, sinistra)",
    wrongAnswers: ["Barra spaziatrice", "Alt", "Esc"],
    hint: "Navigazione.",
    explanation: "Le frecce direzionali muovono la selezione di una cella alla volta nella direzione scelta."
  },
  {
    id: 898,
    question: "Quali sono le opzioni di allineamento del testo in Word?",
    correctAnswer: "A sinistra, Al centro, A destra, Giustificato",
    wrongAnswers: ["Sopra, Sotto", "Obliquo", "Circolare"],
    hint: "Come si dispone il paragrafo.",
    explanation: "Sono le quattro modalità standard per allineare il testo rispetto ai margini laterali."
  },
  {
    id: 899,
    question: "Quali sono i principali rischi del Cloud Computing?",
    correctAnswer: "Sicurezza dei dati e dipendenza dalla connessione internet",
    wrongAnswers: ["Rottura del monitor", "Virus hardware", "Peso del computer"],
    hint: "Se non hai internet o ti rubano la password.",
    explanation: "Affidare i dati a terzi comporta rischi di privacy e accessibilità in caso di disservizi."
  },
  {
    id: 900,
    question: "Come si visualizza il certificato di sicurezza di un sito?",
    correctAnswer: "Clic sul lucchetto nella barra indirizzi > La connessione è sicura > Il certificato è valido",
    wrongAnswers: ["Tasto destro > Ispeziona", "Menu File > Certificato", "Non si può"],
    hint: "Dettagli lucchetto.",
    explanation: "Questa procedura mostra i dettagli dell'ente che ha emesso il certificato SSL."
  },
  {
    id: 901,
    question: "Quali sono gli elementi necessari per la Stampa Unione?",
    correctAnswer: "Il testo principale (documento) e la lista di distribuzione (dati)",
    wrongAnswers: ["Due stampanti", "Internet veloce", "Un PDF"],
    hint: "Scheletro + Dati.",
    explanation: "Il processo fonde un documento statico con una sorgente dati variabile."
  },
  {
    id: 902,
    question: "Quale opzione di Word ingrandisce la finestra a tutto schermo?",
    correctAnswer: "Modalità schermo intero (o Modalità lettura)",
    wrongAnswers: ["Zoom 100%", "Layout web", "Bozza"],
    hint: "Nasconde i menu.",
    explanation: "Massimizza l'area di visualizzazione del documento nascondendo l'interfaccia."
  },
  {
    id: 903,
    question: "Quale combinazione di tasti si usa per 'Tagliare'?",
    correctAnswer: "Ctrl + X",
    wrongAnswers: ["Ctrl + C", "Ctrl + V", "Ctrl + T"],
    hint: "Forbici.",
    explanation: "X ricorda la forma delle forbici aperte."
  },
  {
    id: 904,
    question: "Quale tra i seguenti NON è un servizio di messaggistica istantanea?",
    correctAnswer: "Google Calendar",
    wrongAnswers: ["WhatsApp", "Telegram", "Messenger"],
    hint: "È un calendario.",
    explanation: "Calendar serve per gestire appuntamenti, non per chat in tempo reale."
  },
  {
    id: 905,
    question: "Quale tra i seguenti NON è un motore di ricerca?",
    correctAnswer: "Mozilla Firefox (è un browser)",
    wrongAnswers: ["Google", "Bing", "Yahoo"],
    hint: "Navigatore vs Ricercatore.",
    explanation: "Firefox è il programma per navigare, Google è il sito che cerca."
  },
  {
    id: 906,
    question: "Quale componente hardware non serve per collegarsi a una rete Wi-Fi?",
    correctAnswer: "La stampante",
    wrongAnswers: ["La scheda di rete wireless", "Il router", "L'antenna"],
    hint: "È una periferica di output.",
    explanation: "La stampante non è necessaria per stabilire la connessione, anche se può usarla."
  },
  {
    id: 907,
    question: "Quale tra le seguenti è una formula errata in Excel?",
    correctAnswer: "(10+5)/2 (Manca l'uguale iniziale)",
    wrongAnswers: ["=10+5", "=SOMMA(A1:A2)", "=A1*B1"],
    hint: "Manca il simbolo magico.",
    explanation: "Senza l'uguale (=) iniziale, Excel interpreta l'input come testo, non come calcolo."
  },
  {
    id: 908,
    question: "Quale tra le seguenti icone permette di 'Copia formato' (pennello)?",
    correctAnswer: "L'icona a forma di pennello",
    wrongAnswers: ["La forbice", "I due fogli", "Il secchiello"],
    hint: "Copia lo stile.",
    explanation: "Lo strumento Copia Formato applica lo stile di un oggetto a un altro."
  },
  {
    id: 909,
    question: "Windows Update è:",
    correctAnswer: "il sistema che controlla e installa gli aggiornamenti di Windows",
    wrongAnswers: ["un antivirus", "un browser", "un programma di scrittura"],
    hint: "Aggiornamenti.",
    explanation: "Mantiene il sistema operativo aggiornato con le ultime patch di sicurezza e funzionalità."
  },
  {
    id: 910,
    question: "Quale tasto interrompe un'operazione in corso (es. una presentazione)?",
    correctAnswer: "Esc",
    wrongAnswers: ["Invio", "Alt", "Ctrl"],
    hint: "Escape (Fuga).",
    explanation: "Il tasto Esc è universalmente usato per uscire da modalità a schermo intero o annullare comandi."
  },
  {
    id: 911,
    question: "Quale pulsante della tastiera apre il menu Start?",
    correctAnswer: "Tasto Windows (Win)",
    wrongAnswers: ["Alt", "Ctrl", "Maiusc"],
    hint: "Bandierina.",
    explanation: "Il tasto con il logo Windows apre il menu principale del sistema."
  },
  {
    id: 912,
    question: "Quale pulsante consente di inoltrare una mail ad altri?",
    correctAnswer: "Inoltra (Forward)",
    wrongAnswers: ["Rispondi", "Rispondi a tutti", "Elimina"],
    hint: "Passa parola.",
    explanation: "Invia una copia del messaggio ricevuto a un nuovo destinatario."
  },
  {
    id: 913,
    question: "Quale procedura converte le iniziali in maiuscolo in Word?",
    correctAnswer: "Home > Carattere > Maiuscole/Minuscole > Tutte iniziali maiuscole",
    wrongAnswers: ["Cancellare e riscrivere", "Usare il grassetto", "Cambiare font"],
    hint: "Icona Aa.",
    explanation: "Automatizza la correzione del testo rendendo maiuscola la prima lettera di ogni parola selezionata."
  },
  {
    id: 914,
    question: "Per aggiungere una nuova riga in una tabella Word:",
    correctAnswer: "Scheda Layout > Inserisci sopra/sotto",
    wrongAnswers: ["Disegna riga", "Premi Invio", "Non si può"],
    hint: "Aggiungi riga.",
    explanation: "Inserisce una riga vuota adiacente a quella selezionata."
  },
  {
    id: 915,
    question: "Quale porta collega il PC alla rete LAN?",
    correctAnswer: "Ethernet (RJ45)",
    wrongAnswers: ["USB", "HDMI", "VGA"],
    hint: "Cavo di rete.",
    explanation: "L'interfaccia Ethernet è lo standard per le connessioni cablate di rete."
  },
  {
    id: 916,
    question: "Quale messaggio di errore indica che il riferimento di cella non è valido?",
    correctAnswer: "#RIF!",
    wrongAnswers: ["#VALORE!", "#NOME?", "#DIV/0!"],
    hint: "Riferimento perso.",
    explanation: "Succede spesso quando si elimina una cella che era parte di una formula."
  },
  {
    id: 917,
    question: "Quale messaggio di errore indica che una cella è vuota o divisa per zero?",
    correctAnswer: "#DIV/0!",
    wrongAnswers: ["#NULL!", "#NUM!", "#N/D"],
    hint: "Impossibile dividere.",
    explanation: "Matematicamente la divisione per zero è impossibile, quindi Excel dà errore."
  },
  {
    id: 918,
    question: "Quale lettera è assegnata al disco rigido principale?",
    correctAnswer: "C:",
    wrongAnswers: ["A:", "B:", "D:"],
    hint: "Disco di sistema.",
    explanation: "Per convenzione storica, C: è l'unità dove è installato il sistema operativo Windows."
  },
  {
    id: 919,
    question: "In Excel, per stampare solo una parte del foglio si usa:",
    correctAnswer: "File > Stampa > Stampa selezione",
    wrongAnswers: ["Stampa tutto", "Stampa fogli attivi", "Stampa cartella"],
    hint: "Solo quello che hai evidenziato.",
    explanation: "Limita l'area di stampa alle sole celle che sono state selezionate prima di dare il comando."
  },
  {
    id: 920,
    question: "Quale icona indica che un sito è sicuro (HTTPS)?",
    correctAnswer: "Un lucchetto chiuso",
    wrongAnswers: ["Un triangolo rosso", "Un punto esclamativo", "Un cerchio"],
    hint: "Barra indirizzi.",
    explanation: "Il lucchetto certifica la crittografia della connessione."
  },
  {
    id: 921,
    question: "Quale simbolo indica un errore grammaticale in Word?",
    correctAnswer: "Doppia linea blu (o ondulata blu)",
    wrongAnswers: ["Ondulata rossa", "Ondulata verde", "Tratteggiata"],
    hint: "Non è ortografia (rossa).",
    explanation: "Segnala possibili errori di grammatica o stile, diversi dagli errori di spelling (rossi)."
  },
  {
    id: 922,
    question: "Quale scheda di Excel serve per creare grafici?",
    correctAnswer: "Inserisci",
    wrongAnswers: ["Home", "Dati", "Formule"],
    hint: "Aggiungi elemento.",
    explanation: "Contiene la galleria di tutti i tipi di grafici disponibili."
  },
  {
    id: 923,
    question: "Quale pulsante permette di cercare parole in Word?",
    correctAnswer: "Trova (Home > Modifica)",
    wrongAnswers: ["Cerca (File)", "Vai (Layout)", "Zoom"],
    hint: "Binocolo o Lente.",
    explanation: "Apre il pannello di navigazione per cercare testo nel documento."
  },
  {
    id: 924,
    question: "Quale procedura attiva la sincronizzazione su Android?",
    correctAnswer: "Impostazioni > Account > Sincronizza dati automaticamente",
    wrongAnswers: ["Non si può", "Scaricando un'app", "Spegnendo il telefono"],
    hint: "Menu Account.",
    explanation: "Mantiene aggiornati rubrica, mail e calendario con il cloud."
  },
  {
    id: 925,
    question: "Quale pulsante permette di annullare l'ultima azione?",
    correctAnswer: "Freccia curva verso sinistra (Annulla)",
    wrongAnswers: ["Freccia destra", "X rossa", "Gomma"],
    hint: "Ctrl+Z.",
    explanation: "Il pulsante Annulla nella barra di accesso rapido revoca l'ultimo comando."
  },
  {
    id: 926,
    question: "Quale opzione permette di incollare mantenendo il tema di destinazione?",
    correctAnswer: "Unisci formattazione (o Usa tema destinazione)",
    wrongAnswers: ["Mantieni formattazione originale", "Incolla immagine", "Solo testo"],
    hint: "Si adatta.",
    explanation: "Adatta lo stile del testo incollato a quello del documento in cui si trova."
  },
  {
    id: 927,
    question: "Quale icona permette di evidenziare il testo?",
    correctAnswer: "L'icona con il pennarello/evidenziatore (ab)",
    wrongAnswers: ["La A colorata", "Il secchiello", "La penna"],
    hint: "Come un evidenziatore giallo.",
    explanation: "Applica un colore di sfondo al testo simile a un evidenziatore cartaceo."
  },
  {
    id: 928,
    question: "Quale icona indica l'App Store di Apple?",
    correctAnswer: "Una 'A' stilizzata bianca su fondo azzurro",
    wrongAnswers: ["Un triangolo colorato", "Una finestra", "Un robot"],
    hint: "A di Apple/App.",
    explanation: "È il logo ufficiale del negozio digitale iOS."
  },
  {
    id: 929,
    question: "Quale icona indica il Play Store di Google?",
    correctAnswer: "Un triangolo colorato (freccia play)",
    wrongAnswers: ["Una mela", "Una finestra", "Un carrello"],
    hint: "Play.",
    explanation: "È il logo ufficiale del negozio digitale Android."
  },
  {
    id: 930,
    question: "Quale icona apre il menu Start in Windows 11?",
    correctAnswer: "Il logo di Windows (quattro quadrati azzurri)",
    wrongAnswers: ["La lente d'ingrandimento", "La cartella gialla", "Il cerchio"],
    hint: "Sulla barra in basso.",
    explanation: "È il pulsante principale per accedere a tutte le app e impostazioni."
  },
  {
    id: 931,
    question: "Quale icona apre Esplora File?",
    correctAnswer: "La cartella gialla",
    wrongAnswers: ["Il cestino", "Il documento bianco", "Il disco"],
    hint: "Gestione file.",
    explanation: "Apre il file manager di Windows."
  },
  {
    id: 932,
    question: "Quale pulsante permette di aggiungere una diapositiva?",
    correctAnswer: "Nuova diapositiva",
    wrongAnswers: ["Nuovo file", "Aggiungi pagina", "Inserisci foto"],
    hint: "Scheda Home.",
    explanation: "Crea una nuova slide vuota o con layout dopo quella corrente."
  },
  {
    id: 933,
    question: "Quale icona serve per il 'grassetto'?",
    correctAnswer: "G (o B in inglese)",
    wrongAnswers: ["C", "S", "U"],
    hint: "Bold.",
    explanation: "Rende il testo più marcato."
  },
  {
    id: 934,
    question: "Quale icona serve per il 'corsivo'?",
    correctAnswer: "C (o I in inglese)",
    wrongAnswers: ["G", "S", "A"],
    hint: "Italic (inclinato).",
    explanation: "Inclina il testo."
  },
  {
    id: 935,
    question: "Quale icona serve per 'sottolineato'?",
    correctAnswer: "S (o U in inglese)",
    wrongAnswers: ["G", "C", "A"],
    hint: "Underline.",
    explanation: "Aggiunge una linea sotto il testo."
  },
  {
    id: 936,
    question: "Quale pulsante permette di tagliare?",
    correctAnswer: "L'icona delle forbici",
    wrongAnswers: ["I due fogli", "La cartellina", "La gomma"],
    hint: "Cut.",
    explanation: "Rimuove la selezione."
  },
  {
    id: 937,
    question: "Quale pulsante permette di copiare?",
    correctAnswer: "L'icona dei due fogli sovrapposti",
    wrongAnswers: ["Le forbici", "La cartellina", "La stampante"],
    hint: "Duplica.",
    explanation: "Copia la selezione."
  },
  {
    id: 938,
    question: "Quale applicazione di Windows permette di catturare lo schermo?",
    correctAnswer: "Strumento di cattura",
    wrongAnswers: ["Paint", "Blocco note", "Foto"],
    hint: "Screenshot.",
    explanation: "Utility di sistema per fare screenshot parziali o totali."
  },
  {
    id: 939,
    question: "Quale applicazione NON è di produttività personale?",
    correctAnswer: "Skype (è comunicazione)",
    wrongAnswers: ["Word", "Excel", "PowerPoint"],
    hint: "Non crea documenti.",
    explanation: "Skype serve per chiamare e chattare, non per produrre documenti."
  },
  {
    id: 940,
    question: "Quale combinazione apre Gestione Attività?",
    correctAnswer: "Ctrl + Maiusc + Esc",
    wrongAnswers: ["Alt + F4", "Ctrl + C", "Win + X"],
    hint: "Task Manager diretto.",
    explanation: "Apre subito la finestra per gestire i processi."
  },
  {
    id: 941,
    question: "Come inserire un modello 3D in Word?",
    correctAnswer: "Inserisci > Modelli 3D",
    wrongAnswers: ["Inserisci > Immagine", "Layout > 3D", "Visualizza > 3D"],
    hint: "Menu illustrazioni.",
    explanation: "Permette di importare oggetti tridimensionali."
  },
  {
    id: 942,
    question: "Quale estensione indica un file audio?",
    correctAnswer: ".mp3",
    wrongAnswers: [".jpg", ".avi", ".docx"],
    hint: "Musica.",
    explanation: "Formato compresso standard per l'audio."
  },
  {
    id: 943,
    question: "Quale formula somma le celle A1, A2, A3?",
    correctAnswer: "=A1+A2+A3 (o =SOMMA(A1:A3))",
    wrongAnswers: ["A1+A2+A3", "=A1*A2*A3", "SUM(A1-A3)"],
    hint: "Addizione.",
    explanation: "Somma i valori delle singole celle specificate."
  },
  {
    id: 944,
    question: "In Windows 11, è possibile recuperare oggetti dal Cestino?",
    correctAnswer: "Sì, finché non viene svuotato",
    wrongAnswers: ["No, mai", "Solo se paghi", "Solo se sono immagini"],
    hint: "Ripristina.",
    explanation: "I file nel cestino non sono persi definitivamente."
  },
  {
    id: 945,
    question: "In Windows 11, è possibile pianificare la scansione antivirus?",
    correctAnswer: "Sì, tramite Utilità di pianificazione o impostazioni sicurezza",
    wrongAnswers: ["No, è solo manuale", "Solo di notte", "Non esiste antivirus"],
    hint: "Automazione.",
    explanation: "Si possono impostare scansioni periodiche automatiche."
  },
  {
    id: 946,
    question: "In Windows 11, lo 'Screen Reader' serve a:",
    correctAnswer: "leggere ad alta voce il testo sullo schermo per non vedenti",
    wrongAnswers: ["registrare lo schermo", "pulire lo schermo", "cambiare colori"],
    hint: "Accessibilità.",
    explanation: "Strumento assistivo (Assistente vocale) per l'accessibilità."
  },
  {
    id: 947,
    question: "In Windows 11, come si disinstalla un'app?",
    correctAnswer: "Impostazioni > App > App e funzionalità > Disinstalla",
    wrongAnswers: ["Cancellando l'icona", "Premendo Canc", "Svuotando il cestino"],
    hint: "Menu impostazioni.",
    explanation: "Procedura corretta per rimuovere il software e i suoi file."
  },
  {
    id: 948,
    question: "In una presentazione, quale layout usare per un grafico?",
    correctAnswer: "Titolo e contenuto",
    wrongAnswers: ["Titolo", "Vuoto", "Confronto"],
    hint: "Standard.",
    explanation: "Offre un grande riquadro centrale ideale per grafici o tabelle."
  },
  {
    id: 949,
    question: "In PowerPoint, è possibile inserire audio tra le slide?",
    correctAnswer: "Sì, come effetto di transizione",
    wrongAnswers: ["No", "Solo se hai un microfono", "Solo musica rock"],
    hint: "Suono al cambio pagina.",
    explanation: "Si può associare un suono (es. clic, applauso) alla transizione."
  },
  {
    id: 950,
    question: "In una formula Excel, cosa si esegue prima?",
    correctAnswer: "Moltiplicazioni e Divisioni",
    wrongAnswers: ["Addizioni e Sottrazioni", "Tutto uguale", "Il numero più grande"],
    hint: "Priorità matematica.",
    explanation: "Excel segue l'ordine standard delle operazioni (PEMDAS)."
  },
  {
    id: 951,
    question: "In Excel, è possibile eliminare più colonne insieme?",
    correctAnswer: "Sì, selezionandole e premendo Elimina",
    wrongAnswers: ["No, una alla volta", "Solo se vuote", "Solo righe"],
    hint: "Selezione multipla.",
    explanation: "Permette di rimuovere blocchi di colonne in un colpo solo."
  },
  {
    id: 952,
    question: "In Excel, cosa fa l'icona 'Copia formato'?",
    correctAnswer: "Copia lo stile (colore, font) di una cella su un'altra",
    wrongAnswers: ["Copia il contenuto", "Cancella la cella", "Crea un grafico"],
    hint: "Pennello.",
    explanation: "Replica l'aspetto estetico senza copiare il valore."
  },
  {
    id: 953,
    question: "In un indirizzo web, cosa sono i domini di primo livello?",
    correctAnswer: "Le estensioni finali (es. .com, .it)",
    wrongAnswers: ["Il nome del sito", "Il protocollo", "La pagina"],
    hint: "TLD.",
    explanation: "Identificano la nazionalità o il tipo di organizzazione."
  },
  {
    id: 954,
    question: "Il formato .pptx si riferisce a:",
    correctAnswer: "Presentazioni PowerPoint",
    wrongAnswers: ["Fogli Excel", "Documenti Word", "Immagini"],
    hint: "PowerPoint.",
    explanation: "Estensione file standard per le presentazioni."
  },
  {
    id: 955,
    question: "L'allineamento 'A sinistra' è:",
    correctAnswer: "lo standard per il testo occidentale",
    wrongAnswers: ["per i titoli", "per i numeri", "non esiste"],
    hint: "Parte da sinistra.",
    explanation: "Il testo è allineato al margine sinistro e irregolare a destra."
  },
  {
    id: 956,
    question: "Per selezionare una parola in Word:",
    correctAnswer: "Doppio clic sulla parola",
    wrongAnswers: ["Un clic", "Triplo clic", "Tasto destro"],
    hint: "Due volte.",
    explanation: "Seleziona la parola intera ma non lo spazio successivo."
  },
  {
    id: 957,
    question: "Per selezionare un paragrafo in Word:",
    correctAnswer: "Triplo clic nel paragrafo",
    wrongAnswers: ["Doppio clic", "Un clic", "Invio"],
    hint: "Tre volte.",
    explanation: "Seleziona tutto il blocco di testo fino all'a capo."
  },
  {
    id: 958,
    question: "Per ridimensionare un oggetto mantenendo le proporzioni:",
    correctAnswer: "Trascinare le maniglie d'angolo",
    wrongAnswers: ["Trascinare i lati", "Usare le forbici", "Non si può"],
    hint: "Angoli.",
    explanation: "Le maniglie angolari scalano altezza e larghezza simultaneamente."
  },
  {
    id: 959,
    question: "Il pulsante 'Disegna casella di testo' fa apparire un cursore a:",
    correctAnswer: "Croce (o croce rovesciata)",
    wrongAnswers: ["Freccia", "Mano", "Clessidra"],
    hint: "Per disegnare.",
    explanation: "Indica la modalità di disegno attiva."
  },
  {
    id: 960,
    question: "In PowerPoint, 'Inserisci a destra' in una tabella:",
    correctAnswer: "aggiunge una colonna a destra",
    wrongAnswers: ["aggiunge una riga sotto", "cancella", "unisce"],
    hint: "Lato destro.",
    explanation: "Espande la tabella lateralmente."
  },
  {
    id: 961,
    question: "In PowerPoint, 'Inserisci sopra' in una tabella:",
    correctAnswer: "aggiunge una riga sopra",
    wrongAnswers: ["aggiunge una colonna", "cancella", "divide"],
    hint: "Lato superiore.",
    explanation: "Aggiunge una riga in cima alla selezione."
  },
  {
    id: 962,
    question: "La scheda 'Formato forma' appare quando:",
    correctAnswer: "si seleziona una forma o oggetto grafico",
    wrongAnswers: ["sempre", "mai", "quando si stampa"],
    hint: "Contestuale.",
    explanation: "Contiene i comandi specifici per modificare l'oggetto selezionato."
  },
  {
    id: 963,
    question: "Il pulsante 'Effetti forma' permette di aggiungere:",
    correctAnswer: "ombreggiature, riflessi, aloni",
    wrongAnswers: ["suoni", "video", "testo"],
    hint: "Estetica 3D.",
    explanation: "Migliora l'aspetto grafico della forma."
  },
  {
    id: 964,
    question: "Il pulsante 'Riempimento forma' serve a:",
    correctAnswer: "cambiare il colore interno della forma",
    wrongAnswers: ["cambiare il bordo", "cambiare il testo", "cancellare"],
    hint: "Colore dentro.",
    explanation: "Modifica il colore o la trama dell'area interna."
  },
  {
    id: 965,
    question: "Per rinominare un calendario Google:",
    correctAnswer: "Impostazioni e condivisione del calendario",
    wrongAnswers: ["Doppio clic", "Tasto destro", "Non si può"],
    hint: "Menu impostazioni.",
    explanation: "Il nome si cambia nelle opzioni specifiche del calendario."
  },
  {
    id: 966,
    question: "Il tasto Invio in Excel:",
    correctAnswer: "conferma il dato e scende alla cella sotto",
    wrongAnswers: ["cancella", "sale su", "non fa nulla"],
    hint: "Enter.",
    explanation: "Standard per l'inserimento dati."
  },
  {
    id: 967,
    question: "Per creare un nuovo calendario secondario in Google:",
    correctAnswer: "Clic sul + accanto ad Altri calendari",
    wrongAnswers: ["File > Nuovo", "Non si può", "Tasto destro"],
    hint: "Aggiungi.",
    explanation: "Permette di gestire calendari multipli (es. Lavoro, Casa)."
  },
  {
    id: 968,
    question: "Per formattare il titolo di un grafico:",
    correctAnswer: "Usare i comandi Carattere (Home o Formato)",
    wrongAnswers: ["Usare formule", "Usare dati", "Non si può"],
    hint: "È un testo.",
    explanation: "Si formatta come qualsiasi altra casella di testo."
  },
  {
    id: 969,
    question: "Inserendo un grafico in PowerPoint si apre:",
    correctAnswer: "Un foglio Excel per i dati",
    wrongAnswers: ["Word", "Paint", "Nulla"],
    hint: "Motore dati.",
    explanation: "PowerPoint si appoggia a Excel per gestire i numeri del grafico."
  },
  {
    id: 970,
    question: "La funzione 'Trova il mio dispositivo' permette di:",
    correctAnswer: "localizzare, bloccare o resettare il dispositivo perso",
    wrongAnswers: ["trovare file", "trovare wifi", "chiamare gratis"],
    hint: "Sicurezza.",
    explanation: "Strumento essenziale in caso di furto o smarrimento."
  },
  {
    id: 971,
    question: "La formattazione dei dati influenza:",
    correctAnswer: "l'aspetto visivo (colore, bordo) non il valore",
    wrongAnswers: ["il calcolo", "il risultato", "la formula"],
    hint: "Estetica.",
    explanation: "Cambia come si vede, non cosa è."
  },
  {
    id: 972,
    question: "Per nascondere la barra di accesso rapido:",
    correctAnswer: "Menu opzioni barra > Nascondi",
    wrongAnswers: ["Cancella", "Chiudi Word", "Non si può"],
    hint: "Opzioni visualizzazione.",
    explanation: "Si può scegliere di non visualizzarla."
  },
  {
    id: 973,
    question: "Il pulsante 'Trova e seleziona' in Excel serve a:",
    correctAnswer: "cercare dati specifici nel foglio",
    wrongAnswers: ["fare calcoli", "stampare", "salvare"],
    hint: "Binocolo.",
    explanation: "Trova celle contenenti determinati valori o testi."
  },
  {
    id: 974,
    question: "Per formattare le celle in Excel si usa:",
    correctAnswer: "Home > Formato > Formato celle",
    wrongAnswers: ["Inserisci > Celle", "Dati > Celle", "Visualizza"],
    hint: "Menu completo.",
    explanation: "Apre la finestra con tutte le opzioni di formattazione."
  },
  {
    id: 975,
    question: "Per fare zoom su una selezione in Excel:",
    correctAnswer: "Visualizza > Zoom selezione",
    wrongAnswers: ["Home > Zoom", "Non si può", "Stampa"],
    hint: "Ingrandisci questo.",
    explanation: "Adatta l'ingrandimento per mostrare solo le celle scelte."
  },
  {
    id: 976,
    question: "Il pulsante 'Elementi grafico' (+) permette di:",
    correctAnswer: "aggiungere/rimuovere titoli, legende, etichette",
    wrongAnswers: ["creare nuovo grafico", "cancellare grafico", "cambiare colori"],
    hint: "Parti del grafico.",
    explanation: "Gestisce la visibilità dei componenti interni del grafico."
  },
  {
    id: 977,
    question: "La qualità di una rete dipende da:",
    correctAnswer: "velocità di trasmissione e stabilità",
    wrongAnswers: ["colore cavi", "marca PC", "prezzo"],
    hint: "Prestazioni.",
    explanation: "Bandwidth e uptime sono i fattori chiave."
  },
  {
    id: 978,
    question: "Creare un collegamento ipertestuale significa:",
    correctAnswer: "collegare un oggetto a una pagina web o file",
    wrongAnswers: ["copiare", "colorare", "cancellare"],
    hint: "Link.",
    explanation: "Rende l'oggetto cliccabile per la navigazione."
  },
  {
    id: 979,
    question: "Una volta completato il Download in Google Chrome (versioni classiche), dove viene visualizzato il file?",
    correctAnswer: "Nell'angolo inferiore sinistro della finestra di Google Chrome",
    wrongAnswers: ["Al centro dello schermo", "Non viene visualizzato", "Nella barra degli indirizzi"],
    hint: "Appare una barra in basso.",
    explanation: "Nelle versioni standard precedenti all'ultimo aggiornamento grafico, Chrome mostrava i download in una barra persistente in basso a sinistra."
  },
  {
    id: 980,
    question: "In Google Drive, qual è la procedura per aggiungere una nuova cartella caricandola dal PC?",
    correctAnswer: "Pulsante Nuovo (in alto a sinistra) > Caricamento Cartella",
    wrongAnswers: ["Tasto destro > Crea file", "Doppio clic sullo sfondo", "Menu Visualizza > Cartella"],
    hint: "Il pulsante con il + colorato.",
    explanation: "Questa opzione permette di selezionare un'intera directory dal computer e replicarla nel cloud."
    
  },
  {
    id: 981,
    question: "Una volta inseriti elementi nella cartella OneDrive del PC, l'icona “Nuvoletta” nella colonna Stato indica che:",
    correctAnswer: "il file è disponibile solo online (non occupa spazio sul disco locale)",
    wrongAnswers: ["il file è danneggiato", "il file è in condivisione", "il file è stato cancellato"],
    hint: "Files On-Demand.",
    explanation: "Il file è visibile in Esplora File ma il contenuto reale è nel cloud; viene scaricato solo se lo apri."
    
  },
  {
    id: 982,
    question: "Nel comando Trova e Sostituisci di Excel, l'opzione “Confronta intero contenuto della cella” serve a:",
    correctAnswer: "circoscrivere la ricerca solo ai valori che corrispondono esattamente e interamente al dato cercato",
    wrongAnswers: ["cercare parti di testo", "sostituire tutto il foglio", "trovare celle vuote"],
    hint: "Niente corrispondenze parziali.",
    explanation: "Evita di trovare '100' se stai cercando '10', o 'Mario Rossi' se cerchi solo 'Mario'."
    
  },
  {
    id: 983,
    question: "Una volta inserito un grafico in Excel, quali schede vengono aggiunte alla barra multifunzione?",
    correctAnswer: "Struttura grafico e Formato",
    wrongAnswers: ["Dati e Revisione", "Inserisci e Home", "Visualizza e Layout"],
    hint: "Schede verdi contestuali.",
    explanation: "Sono schede speciali che appaiono solo quando il grafico è selezionato per modificarne design e stile."
    
  },
  {
    id: 984,
    question: "Quale combinazione di tasti permette di applicare il grassetto al testo selezionato?",
    correctAnswer: "Ctrl + G",
    wrongAnswers: ["Ctrl + C", "Ctrl + S", "Ctrl + P"],
    hint: "G come Grassetto.",
    explanation: "È la scorciatoia standard (in inglese è Ctrl+B per Bold, in italiano G)."
    
  },
  {
    id: 985,
    question: "Quale combinazione di tasti permette di applicare il corsivo al testo selezionato?",
    correctAnswer: "Ctrl + I",
    wrongAnswers: ["Ctrl + C", "Ctrl + A", "Ctrl + V"],
    hint: "I come Italic (o Inclinato).",
    explanation: "Applica lo stile corsivo al testo evidenziato."
    
  },
  {
    id: 986,
    question: "Virtu, ProtonMail e Lockbin sono esempi di:",
    correctAnswer: "servizi online per crittografare i messaggi di posta elettronica",
    wrongAnswers: ["virus informatici", "social network", "motori di ricerca"],
    hint: "Privacy email.",
    explanation: "Offrono crittografia end-to-end per garantire la massima riservatezza delle comunicazioni."
    
  },
  {
    id: 987,
    question: "Windows Update è:",
    correctAnswer: "un sistema che consente di controllare e installare nuovi aggiornamenti del sistema operativo",
    wrongAnswers: ["un antivirus", "un browser", "un programma di grafica"],
    hint: "Aggiorna Windows.",
    explanation: "È il servizio Microsoft essenziale per mantenere il PC sicuro e aggiornato."
    
  },
  {
    id: 988,
    question: "L'“Accountability” (responsabilità) è un processo secondo cui:",
    correctAnswer: "chi gestisce un sistema può tracciare e monitorare le attività degli utenti che vi hanno fatto accesso",
    wrongAnswers: ["nessuno è responsabile", "i dati sono anonimi", "si cancellano le tracce"],
    hint: "Rendere conto.",
    explanation: "Garantisce che ogni azione critica possa essere attribuita in modo inequivocabile a un utente."
    
  },
  {
    id: 989,
    question: "L'“Ingegneria sociale” è:",
    correctAnswer: "una manipolazione psicologica che induce la vittima a rivelare informazioni personali senza rendersene conto",
    wrongAnswers: ["un corso di studi", "la costruzione di ponti", "un software antivirus"],
    hint: "Hackerare la mente umana.",
    explanation: "Sfrutta la fiducia o la paura delle persone per ottenere dati riservati."
    
  },
  {
    id: 990,
    question: "L'“Integrità dei dati” garantisce che:",
    correctAnswer: "i dati siano effettivamente quelli che le parti in causa sono convinte che siano (non alterati)",
    wrongAnswers: ["i dati siano segreti", "i dati siano cancellati", "i dati siano veloci"],
    hint: "Non manomessi.",
    explanation: "Assicura che l'informazione non abbia subito modifiche non autorizzate durante la trasmissione o conservazione."
    
  },
  {
    id: 991,
    question: "Si definiscono ISP (Internet Service Provider):",
    correctAnswer: "quelle società che offrono ai loro abbonati la possibilità di navigare in Internet",
    wrongAnswers: ["i motori di ricerca", "i creatori di siti", "i browser"],
    hint: "TIM, Vodafone, ecc.",
    explanation: "Forniscono l'accesso fisico alla rete globale."
    
  },
  {
    id: 992,
    question: "Si parla di “Accessi concorrenti” quando:",
    correctAnswer: "più persone possono visualizzare lo stesso documento contemporaneamente",
    wrongAnswers: ["non si riesce ad accedere", "la password è sbagliata", "si usa un solo PC"],
    hint: "Collaborazione real-time.",
    explanation: "Tipico del cloud computing, permette a più utenti di lavorare sullo stesso file nello stesso momento."
    
  },
  {
    id: 993,
    question: "Si parla di “Tethering” quando:",
    correctAnswer: "sfruttiamo un dispositivo mobile come hotspot per accedere a Internet",
    wrongAnswers: ["il telefono è spento", "colleghiamo il mouse", "usiamo il bluetooth per la musica"],
    hint: "Cellulare come modem.",
    explanation: "Condivisione della connessione dati cellulare con altri dispositivi (PC, tablet) via Wi-Fi, USB o Bluetooth."
    
  },
  {
    id: 994,
    question: "Tramite la scheda “Carta” (o Layout) in Word è possibile:",
    correctAnswer: "scegliere il formato della pagina del documento (A4, A3, ecc.)",
    wrongAnswers: ["cambiare il colore del foglio", "inserire un'immagine", "stampare"],
    hint: "Dimensioni foglio.",
    explanation: "Permette di impostare le dimensioni fisiche del foglio di stampa."
    
  },
  {
    id: 995,
    question: "Un disco rigido di 1TB è più veloce di un processore di 3GHz?",
    correctAnswer: "I TB e i GHz sono due unità differenti, pertanto non possono essere paragonati",
    wrongAnswers: ["Sì, 1TB è molto veloce", "No, 3GHz è meglio", "Dipende dalla marca"],
    hint: "Spazio vs Velocità.",
    explanation: "TB misura la capacità di archiviazione, GHz la velocità di calcolo della CPU."
    
  },
  {
    id: 996,
    question: "Un file con estensione .xlsx è:",
    correctAnswer: "una cartella di lavoro di Excel",
    wrongAnswers: ["un documento Word", "una presentazione", "un database Access"],
    hint: "XLS + X.",
    explanation: "È il formato standard per i file creati con le versioni recenti di Microsoft Excel."
    
  },
  {
    id: 997,
    question: "Un “Hacker immorale” (Black Hat) è:",
    correctAnswer: "un programmatore che compie crimini informatici per un suo tornaconto",
    wrongAnswers: ["un esperto di sicurezza", "un amministratore di rete", "un utente normale"],
    hint: "Criminale informatico.",
    explanation: "Agisce con intenti malevoli per profitto personale o danno altrui, a differenza degli hacker etici."
    
  },
  {
    id: 998,
    question: "Un indirizzo di posta elettronica è formato da:",
    correctAnswer: "nome utente, simbolo @, nome del dominio",
    wrongAnswers: ["nome utente e password", "www e nome sito", "protocollo e indirizzo"],
    hint: "user@domain.com",
    explanation: "Struttura standard che identifica l'utente presso un server di posta specifico."
    
  },
  {
    id: 999,
    question: "Un software “Freeware” è:",
    correctAnswer: "un'applicazione proprietaria il cui utilizzo è concesso a titolo gratuito",
    wrongAnswers: ["un software a pagamento", "un software open source", "un virus"],
    hint: "Free = Gratis.",
    explanation: "Può essere usato gratuitamente ma il codice sorgente non è disponibile (non è Open Source)."
    
  },
  {
    id: 1000,
    question: "Una “LAN” indica:",
    correctAnswer: "una rete di grandezza limitata (Local Area Network)",
    wrongAnswers: ["una rete mondiale", "una rete senza fili", "un tipo di computer"],
    hint: "Di solito in un singolo edificio.",
    explanation: "Collega computer in un'area circoscritta come una casa, una scuola o un ufficio."
    
  },
  {
    id: 1001,
    question: "Una volta aggiunta un'immagine nel documento, è possibile ridimensionarla?",
    correctAnswer: "Sì, selezionandola e agendo sulla cornice che visualizzi",
    wrongAnswers: ["No, la dimensione è fissa", "Solo se è in bianco e nero", "Solo cancellandola"],
    hint: "Maniglie ai bordi.",
    explanation: "Cliccando sull'immagine appaiono dei punti di controllo (maniglie) per modificarne larghezza e altezza."
    
  },
  {
    id: 1002,
    question: "Una volta che gli elementi del testo vengono copiati o tagliati, dove vengono salvati?",
    correctAnswer: "Negli Appunti",
    wrongAnswers: ["Nel Cestino", "Sul Desktop", "In una cartella"],
    hint: "Memoria temporanea.",
    explanation: "Gli appunti (clipboard) sono un'area di memoria temporanea del sistema operativo."
    
  },
  {
    id: 1003,
    question: "Quando trattieni il cursore su un comando della barra multifunzione, cosa visualizzi?",
    correctAnswer: "Nome del comando, combinazione di tasti e breve descrizione (ScreenTip)",
    wrongAnswers: ["Il codice sorgente", "Un video tutorial", "Nulla"],
    hint: "Suggerimento a schermo.",
    explanation: "Office mostra un piccolo riquadro informativo per aiutare l'utente a capire la funzione del pulsante."
    
  },
  {
    id: 1004,
    question: "Quanti sono i margini di pagina in un documento Word?",
    correctAnswer: "4 (Alto, Basso, Sinistra, Destra)",
    wrongAnswers: ["2", "6", "8"],
    hint: "I lati del foglio.",
    explanation: "Ogni pagina rettangolare ha quattro margini modificabili."
    
  },
  {
    id: 1005,
    question: "SafeSearch è:",
    correctAnswer: "un filtro attivabile sull'account Google per escludere contenuti inappropriati",
    wrongAnswers: ["un antivirus", "un browser", "un firewall"],
    hint: "Ricerca sicura.",
    explanation: "Protegge l'utente (spesso minori) da risultati di ricerca espliciti o violenti."
    
  },
  {
    id: 1006,
    question: "Salvare un documento significa:",
    correctAnswer: "creare un file in cui memorizzarlo in modo permanente",
    wrongAnswers: ["cancellarlo", "stamparlo", "chiuderlo"],
    hint: "Scrivere su disco.",
    explanation: "Il salvataggio trasferisce i dati dalla RAM (volatile) alla memoria di massa (disco)."
    
  },
  {
    id: 1007,
    question: "Se a fianco del puntatore compare un piccolo disco in rotazione:",
    correctAnswer: "il computer sta elaborando dati ed è occupato",
    wrongAnswers: ["il mouse è rotto", "c'è un virus", "il pc è spento"],
    hint: "Attendi.",
    explanation: "Indica che il sistema è impegnato in un'operazione e potrebbe non rispondere immediatamente."
    
  },
  {
    id: 1008,
    question: "Se condividiamo un calendario con l'opzione “Apportare modifiche agli eventi”, l'altro utente può:",
    correctAnswer: "vedere tutti i dettagli e modificare gli appuntamenti",
    wrongAnswers: ["solo vedere", "non fare nulla", "cancellare il tuo account"],
    hint: "Permessi di scrittura.",
    explanation: "Concede il diritto di gestire gli eventi del calendario condiviso."
    
  },
  {
    id: 1009,
    question: "Se desideri calcolare la somma delle celle da C2 a C5, cosa scrivi?",
    correctAnswer: "=SOMMA(C2:C5)",
    wrongAnswers: ["SUM(C2-C5)", "=TOTALE(C2:C5)", "C2+C5"],
    hint: "Funzione Somma.",
    explanation: "È la sintassi corretta per sommare un intervallo contiguo di celle."
    
  },
  {
    id: 1010,
    question: "Se disponiamo di più account email, è possibile configurarli nell'app Posta di Windows?",
    correctAnswer: "Sì, per gestirli contemporaneamente",
    wrongAnswers: ["No, solo uno", "Solo se sono Microsoft", "Solo a pagamento"],
    hint: "Multi-account.",
    explanation: "L'app Posta supporta la gestione unificata di più provider (Outlook, Gmail, Yahoo, ecc.)."
    
  },
  {
    id: 1011,
    question: "Se Excel smette di funzionare, è possibile recuperare i file non salvati?",
    correctAnswer: "Sì, grazie al salvataggio automatico (AutoRecover)",
    wrongAnswers: ["No, mai", "Solo se li hai stampati", "Solo pagando"],
    hint: "Ripristino automatico.",
    explanation: "Excel salva periodicamente copie temporanee per prevenire la perdita di dati in caso di crash."
    
  },
  {
    id: 1012,
    question: "Se il mittente di una mail è una banca, è bene:",
    correctAnswer: "verificare con attenzione se è autentica (possibile phishing)",
    wrongAnswers: ["fidarsi ciecamente", "rispondere con la password", "cliccare su tutti i link"],
    hint: "Attenzione alle truffe.",
    explanation: "Le banche raramente chiedono dati sensibili via email; spesso si tratta di tentativi di frode."
    
  },
  {
    id: 1013,
    question: "Se mentre disegni una tabella vuoi cancellare un bordo per unire le celle, usi:",
    correctAnswer: "lo strumento Gomma",
    wrongAnswers: ["la matita", "il secchiello", "il tasto Canc"],
    hint: "Cancella linee.",
    explanation: "Nei tool di disegno tabella, la gomma rimuove le linee di separazione unendo le celle adiacenti."
    
  },
  {
    id: 1014,
    question: "Se non inserisci il simbolo “=” all'inizio di una cella Excel:",
    correctAnswer: "Excel considera il contenuto come un comune testo (o numero)",
    wrongAnswers: ["Dà errore", "Calcola comunque", "Cancella la cella"],
    hint: "Niente formula.",
    explanation: "L'uguale è il marcatore indispensabile per attivare il motore di calcolo."
    
  },
  {
    id: 1015,
    question: "Se durante la stampa unione selezioni “Crea un nuovo elenco”:",
    correctAnswer: "potrai inserire manualmente i dati dei destinatari",
    wrongAnswers: ["devi usare un file esistente", "non puoi fare nulla", "stampi subito"],
    hint: "Database nuovo.",
    explanation: "Permette di costruire da zero la lista di indirizzi all'interno di Word."
    
  },
  {
    id: 1016,
    question: "Se durante la stampa unione selezioni “Usa elenco esistente”:",
    correctAnswer: "potrai scegliere un file (es. Excel) da cui estrarre i dati",
    wrongAnswers: ["devi scrivere a mano", "crei un nuovo file", "cancelli i dati"],
    hint: "Database esterno.",
    explanation: "Collega il documento a una sorgente dati già pronta."
    
  },
  {
    id: 1017,
    question: "Se manca la corrente mentre lavori al PC:",
    correctAnswer: "i dati presenti nella RAM (non salvati) verranno cancellati",
    wrongAnswers: ["i dati si salvano da soli", "il disco fisso si cancella", "non succede nulla"],
    hint: "Volatile.",
    explanation: "La RAM richiede alimentazione costante per mantenere le informazioni."
    
  },
  {
    id: 1018,
    question: "Selezionando il layout “Gerarchie” nelle SmartArt è possibile:",
    correctAnswer: "creare organigrammi",
    wrongAnswers: ["creare grafici a torta", "scrivere una lettera", "fare calcoli"],
    hint: "Albero genealogico o aziendale.",
    explanation: "È il layout specifico per rappresentare strutture ad albero e relazioni gerarchiche."
  },
  {
    id: 1019,
    question: "Quale tra le seguenti icone permette di “Ordinare i dati dal valore più alto al più basso”?",
    correctAnswer: "L'icona Z-A (Freccia verso il basso)",
    wrongAnswers: ["A-Z", "Imbuto", "Somma"],
    hint: "Decrescente.",
    explanation: "Ordina i dati in senso decrescente (dal maggiore al minore o dalla Z alla A)."
    
  },
  {
    id: 1020,
    question: "Quale icona permette di “Ordinare i dati dal valore più basso al più alto”?",
    correctAnswer: "L'icona A-Z (Freccia verso l'alto)",
    wrongAnswers: ["Z-A", "Taglia", "Copia"],
    hint: "Crescente.",
    explanation: "Ordina i dati in senso crescente (dal minore al maggiore o dalla A alla Z)."
    
  },
  {
    id: 1021,
    question: "Quale icona permette di “Ridurre la dimensione del carattere”?",
    correctAnswer: "La A più piccola (o A con freccia in giù)",
    wrongAnswers: ["La A grande", "Il pennello", "Il grassetto"],
    hint: "Rimpicciolisci.",
    explanation: "Diminuisce la grandezza del font di un passo alla volta."
    
  },
  {
    id: 1022,
    question: "Quale icona permette di “Sottolineare” il testo?",
    correctAnswer: "S (o U sottolineata)",
    wrongAnswers: ["G", "C", "A"],
    hint: "Underline.",
    explanation: "Aggiunge una linea sotto il testo selezionato."
    
  },
  {
    id: 1023,
    question: "Quale icona permette di “Unire e centrare” le celle?",
    correctAnswer: "Icona con frecce che uniscono celle e testo centrato",
    wrongAnswers: ["Taglia", "Copia", "Bordi"],
    hint: "Unisce più celle in una.",
    explanation: "Combina le celle selezionate e centra il contenuto nella nuova cella unita."
    
  },
  {
    id: 1024,
    question: "Quale impostazione Zoom visualizza l'intera pagina nella finestra?",
    correctAnswer: "Una pagina",
    wrongAnswers: ["100%", "Larghezza pagina", "Più pagine"],
    hint: "Tutto il foglio.",
    explanation: "Adatta lo zoom per mostrare il foglio intero senza dover scorrere."
    
  },
  {
    id: 1025,
    question: "Quale lettera indica la funzione “Preferiti” in Chrome?",
    correctAnswer: "La stella (solitamente a destra della barra indirizzi)",
    wrongAnswers: ["Il lucchetto", "La freccia", "La casa"],
    hint: "Salva sito.",
    explanation: "Cliccando la stella si aggiunge la pagina corrente ai segnalibri."
    
  },
  {
    id: 1026,
    question: "Quale icona permette di “Salvare” le cartelle di lavoro?",
    correctAnswer: "Il dischetto (Floppy Disk)",
    wrongAnswers: ["La stampante", "La cartella", "La forbice"],
    hint: "Icona classica di salvataggio.",
    explanation: "Salva le modifiche al file corrente."
    
  },
  {
    id: 1027,
    question: "Quale scheda permette di applicare effetti di animazione in PowerPoint?",
    correctAnswer: "Animazioni",
    wrongAnswers: ["Transizioni", "Inserisci", "Home"],
    hint: "Movimento oggetti.",
    explanation: "Contiene la galleria degli effetti per far muovere testo e immagini."
    
  },
  {
    id: 1028,
    question: "Quale sigla indica il processore?",
    correctAnswer: "CPU",
    wrongAnswers: ["RAM", "SSD", "USB"],
    hint: "Central Processing Unit.",
    explanation: "È il cervello del computer che esegue i calcoli."
    
  },
  {
    id: 1029,
    question: "Quale tra le seguenti NON è un'applicazione Client di posta?",
    correctAnswer: "Gmail (versione web)",
    wrongAnswers: ["Outlook", "Thunderbird", "Apple Mail"],
    hint: "Si usa nel browser.",
    explanation: "Gmail è nativamente una webmail, mentre Outlook è un software client installato (anche se esiste la versione web)."
    
  },
  {
    id: 1030,
    question: "Quale icona indica la “Navigazione in incognito”?",
    correctAnswer: "Omino con cappello e occhiali (o maschera)",
    wrongAnswers: ["Lucchetto", "Mappamondo", "Chiave"],
    hint: "Spia/Detective.",
    explanation: "Simbolo standard di Chrome/Firefox per la modalità privata."
    
  },
  {
    id: 1031,
    question: "Per scegliere password sicure è meglio:",
    correctAnswer: "Evitare dati personali (date nascita) e usare caratteri misti",
    wrongAnswers: ["Usare 123456", "Usare il proprio nome", "Scriverle sul monitor"],
    hint: "Complessità.",
    explanation: "Le password devono essere difficili da indovinare per proteggere l'account."
    
  },
  {
    id: 1032,
    question: "Quale icona apre il menu per convertire il testo in MAIUSCOLO?",
    correctAnswer: "Aa (Cambia maiuscole/minuscole)",
    wrongAnswers: ["A colorata", "G", "S"],
    hint: "Gestione caso.",
    explanation: "Permette di passare da minuscolo a maiuscolo e viceversa."
    
  },
  {
    id: 1033,
    question: "Quale icona indica il Wi-Fi?",
    correctAnswer: "Le onde radio concentriche (ventaglio)",
    wrongAnswers: ["Il monitor", "Il cavo", "Il bluetooth"],
    hint: "Segnale wireless.",
    explanation: "Simbolo universale della connessione senza fili."
    
  },
  {
    id: 1034,
    question: "Quali comandi usi per duplicare il testo?",
    correctAnswer: "Copia e Incolla",
    wrongAnswers: ["Taglia e Incolla", "Cancella e Riscrivi", "Salva"],
    hint: "Crea un doppione.",
    explanation: "Copia mantiene l'originale e ne crea una copia."
    
  },
  {
    id: 1035,
    question: "Quali comandi usi per spostare il testo?",
    correctAnswer: "Taglia e Incolla",
    wrongAnswers: ["Copia e Incolla", "Cancella", "Stampa"],
    hint: "Muove.",
    explanation: "Taglia rimuove l'originale per posizionarlo altrove."
    
  },
  {
    id: 1036,
    question: "Esempio di carattere Sans Serif (senza grazie):",
    correctAnswer: "Arial",
    wrongAnswers: ["Times New Roman", "Courier", "Garamond"],
    hint: "Lineare.",
    explanation: "Carattere a bastoni, moderno e pulito."
    
  },
  {
    id: 1037,
    question: "Esempio di carattere Serif (con grazie):",
    correctAnswer: "Times New Roman",
    wrongAnswers: ["Arial", "Calibri", "Verdana"],
    hint: "Classico.",
    explanation: "Ha i piedini (grazie) alle estremità delle lettere."
    
  },
  {
    id: 1038,
    question: "Quali dati servono per il Login?",
    correctAnswer: "Username e Password",
    wrongAnswers: ["Nome e Cognome", "Indirizzo e CAP", "Codice Fiscale"],
    hint: "Credenziali.",
    explanation: "Sono le chiavi di accesso standard per un account."
    
  },
  {
    id: 1039,
    question: "Quale simbolo indica la Tabulazione allineata al centro?",
    correctAnswer: "T rovesciata",
    wrongAnswers: ["L", "L rovesciata", "Barra"],
    hint: "Centra il testo.",
    explanation: "Sul righello di Word indica l'allineamento centrale."
    
  },
  {
    id: 1040,
    question: "Quale simbolo indica la Tabulazione decimale?",
    correctAnswer: "T rovesciata con un punto",
    wrongAnswers: ["L", "T semplice", "Barra"],
    hint: "Per i numeri con virgola.",
    explanation: "Allinea i numeri rispetto al separatore decimale."
    
  },
  {
    id: 1041,
    question: "Quale icona permette di annullare l'ultima azione?",
    correctAnswer: "Freccia curva verso sinistra",
    wrongAnswers: ["Freccia destra", "X", "V"],
    hint: "Undo.",
    explanation: "Comando per revocare l'ultimo inserimento o modifica."
    
  },
  {
    id: 1042,
    question: "Quale icona formatta i valori come valuta (Euro/Dollari)?",
    correctAnswer: "Icona con banconote/monete (o simbolo €)",
    wrongAnswers: ["%", "00", "Testo"],
    hint: "Soldi.",
    explanation: "Applica il formato contabilità ai numeri selezionati."
    
  },
  {
    id: 1043,
    question: "Quale opzione della barra multifunzione ingrandisce la finestra di Word?",
    correctAnswer: "Modalità schermo intero",
    wrongAnswers: ["Zoom", "Layout Web", "Normale"],
    hint: "Massimizza.",
    explanation: "Nasconde l'interfaccia per dedicare tutto lo spazio al documento."
    
  },
  {
    id: 1044,
    question: "Quali sono i malware più comuni?",
    correctAnswer: "Virus",
    wrongAnswers: ["Hardware", "Cookie", "File di testo"],
    hint: "Software dannoso.",
    explanation: "Termine generico spesso usato per indicare codice malevolo che infetta i PC."
    
  },
  {
    id: 1045,
    question: "Per visualizzare solo le schede della barra multifunzione:",
    correctAnswer: "Opzioni visualizzazione barra multifunzione > Mostra solo schede",
    wrongAnswers: ["Chiudi Word", "Cancella barra", "Non si può"],
    hint: "Riduce l'ingombro.",
    explanation: "Nasconde i comandi lasciando visibili solo i titoli delle schede (Home, Inserisci...)."
    
  },
  {
    id: 1046,
    question: "Quale icona indica il Bluetooth?",
    correctAnswer: "B stilizzata (runica) su sfondo blu",
    wrongAnswers: ["W", "Antenna", "Cavo"],
    hint: "Dente blu.",
    explanation: "Logo standard della tecnologia wireless a corto raggio."
    
  },
  {
    id: 1047,
    question: "Quale non è un motore di ricerca?",
    correctAnswer: "Mozilla (è un'organizzazione/browser)",
    wrongAnswers: ["Google", "Bing", "Yahoo"],
    hint: "Firefox è il browser.",
    explanation: "Mozilla sviluppa Firefox, ma non è un motore di ricerca come Google."
    
  },
  {
    id: 1048,
    question: "Quale non è un servizio di messaggistica istantanea?",
    correctAnswer: "Hotmail (è email)",
    wrongAnswers: ["WhatsApp", "Messenger", "Telegram"],
    hint: "Posta vs Chat.",
    explanation: "Hotmail è un provider di posta elettronica."
    
  },
  {
    id: 1049,
    question: "Quale pulsante permette di salvare un documento?",
    correctAnswer: "Icona Dischetto",
    wrongAnswers: ["Icona Cartella", "Icona Stampante", "Icona Lente"],
    hint: "Salva.",
    explanation: "Comando per scrivere le modifiche su disco."
    
  },
  {
    id: 1050,
    question: "Le immagini possono essere inserite in un documento Word?",
    correctAnswer: "Vero",
    wrongAnswers: ["Falso"],
    hint: "Menu Inserisci.",
    explanation: "Word supporta l'inserimento di foto, grafici e clipart."
    
  },
  {
    id: 1051,
    question: "Quali sono applicazioni 'elaboratori di testo'?",
    correctAnswer: "Writer (OpenOffice/LibreOffice) e Word",
    wrongAnswers: ["Excel", "PowerPoint", "Access"],
    hint: "Scrittura.",
    explanation: "Software dedicati alla redazione di testi."
    
  },
  {
    id: 1052,
    question: "Quale opzione incolla mantenendo gli attributi d'origine?",
    correctAnswer: "Mantieni formattazione originale",
    wrongAnswers: ["Solo testo", "Unisci formattazione", "Immagine"],
    hint: "Uguale all'originale.",
    explanation: "Incolla il contenuto esattamente come era stato copiato."
    
  },
  {
    id: 1053,
    question: "Quale informazione NON è nella barra di stato?",
    correctAnswer: "Il pulsante Chiudi (X)",
    wrongAnswers: ["Numero pagina", "Conteggio parole", "Zoom"],
    hint: "La X è in alto.",
    explanation: "Il pulsante di chiusura è nella barra del titolo, non in quella di stato (in basso)."
    
  },
  {
    id: 1054,
    question: "Skype NON è:",
    correctAnswer: "un corso MOOC",
    wrongAnswers: ["un programma VoIP", "un software di comunicazione", "un'app di chat"],
    hint: "Non è una scuola.",
    explanation: "Skype è uno strumento di comunicazione, non un corso online massivo."
    
  },
  {
    id: 1055,
    question: "Quando crei un grafico in PowerPoint:",
    correctAnswer: "i dati vengono inseriti e modificati tramite una finestra Excel",
    wrongAnswers: ["disegni a mano", "usi Word", "scrivi sulla slide"],
    hint: "Integrazione.",
    explanation: "PowerPoint sfrutta il motore di Excel per la gestione numerica dei grafici."
    
  },
  {
    id: 1056,
    question: "In Google Calendar, l'opzione 'Visibilità predefinita' serve a:",
    correctAnswer: "rendere l'invito Pubblico o Privato",
    wrongAnswers: ["cancellare l'evento", "cambiare colore", "invitare persone"],
    hint: "Privacy evento.",
    explanation: "Decide chi può vedere i dettagli dell'appuntamento."
    
  },
  {
    id: 1057,
    question: "Quando è stata introdotta l'ADSL?",
    correctAnswer: "Intorno al 2000",
    wrongAnswers: ["1950", "2020", "1980"],
    hint: "Inizio millennio.",
    explanation: "La tecnologia a banda larga su doppino telefonico si è diffusa a cavallo del millennio."
    
  },
  {
    id: 1058,
    question: "Quando interrompi il backup di una cartella OneDrive:",
    correctAnswer: "i file restano su OneDrive ma non vengono più visualizzati nella cartella del PC",
    wrongAnswers: ["si cancellano ovunque", "tornano sul PC", "si corrompono"],
    hint: "Stop sincronizzazione.",
    explanation: "Interrompendo il backup, si scollega la cartella locale da quella cloud."
    
  },
  {
    id: 1059,
    question: "Cosa sono le 'autorizzazioni' delle app?",
    correctAnswer: "Permessi che forniamo all'app per funzionare (es. uso fotocamera)",
    wrongAnswers: ["Password", "Codici sconto", "Aggiornamenti"],
    hint: "Privacy.",
    explanation: "Consentono all'applicazione di accedere a specifiche funzioni hardware o dati personali."
    
  },
  {
    id: 1060,
    question: "L'icona 'Imbuto' in Excel serve a:",
    correctAnswer: "Filtrare i dati",
    wrongAnswers: ["Ordinare", "Sommare", "Cancellare"],
    hint: "Seleziona solo alcuni dati.",
    explanation: "Attiva i filtri automatici per mostrare solo le righe che soddisfano certi criteri."
    
  },
  {
    id: 1061,
    question: "Quale pulsante permette di inserire un Istogramma?",
    correctAnswer: "L'icona con le barre verticali",
    wrongAnswers: ["L'icona a torta", "L'icona a linee", "L'icona a mappa"],
    hint: "Grafico a colonne.",
    explanation: "Inserisce un grafico statistico a barre verticali."
    
  },
  {
    id: 1062,
    question: "Quale pulsante permette di inserire un Grafico a linee?",
    correctAnswer: "L'icona con la linea spezzata",
    wrongAnswers: ["L'icona a barre", "L'icona a torta", "L'icona a bolle"],
    hint: "Andamento temporale.",
    explanation: "Inserisce un grafico adatto a mostrare trend continui."
    
  },
  {
    id: 1063,
    question: "In Windows 11, quale icona permette di 'Rinominare' un file?",
    correctAnswer: "L'icona con la 'A' e il cursore (o etichetta)",
    wrongAnswers: ["La forbice", "Il cestino", "La cartella"],
    hint: "Cambia nome.",
    explanation: "Nel nuovo menu contestuale di Windows 11, rinomina è rappresentato da un'icona specifica."
  },
  {
    id: 1064,
    question: "In Windows 11, quale icona permette di 'Condividere' un file?",
    correctAnswer: "L'icona con il quadrato e la freccia che esce",
    wrongAnswers: ["Il cestino", "La forbice", "La copia"],
    hint: "Share.",
    explanation: "Apre il pannello di condivisione per inviare il file via mail o app."
    
  },
  {
    id: 1065,
    question: "Quale icona permette di 'Ridurre a icona' una finestra?",
    correctAnswer: "Il trattino orizzontale (-)",
    wrongAnswers: ["La X", "Il quadrato", "Il cerchio"],
    hint: "Minimizza.",
    explanation: "Nasconde la finestra nella barra delle applicazioni senza chiuderla."
    
  },
  {
    id: 1066,
    question: "Quale icona permette di 'Ingrandire' una finestra?",
    correctAnswer: "Il quadrato (o due quadrati se già ingrandita)",
    wrongAnswers: ["Il trattino", "La X", "La freccia"],
    hint: "Massimizza.",
    explanation: "Espande la finestra a tutto schermo."
    
  },
  {
    id: 1067,
    question: "Quale icona permette di 'Chiudere' una finestra?",
    correctAnswer: "La X",
    wrongAnswers: ["Il trattino", "Il quadrato", "Il cerchio"],
    hint: "Exit.",
    explanation: "Termina l'applicazione o chiude la cartella."
  },
  {
    id: 1068,
    question: "Quale icona indica un file PDF?",
    correctAnswer: "Un'icona rossa (spesso con logo Adobe o Edge)",
    wrongAnswers: ["Icona blu (Word)", "Icona verde (Excel)", "Icona gialla"],
    hint: "Documento portatile.",
    explanation: "Identifica i file in formato Portable Document Format."
    
  },
  {
    id: 1069,
    question: "Quale icona indica un file di Word?",
    correctAnswer: "Icona blu con la W",
    wrongAnswers: ["Icona verde con la X", "Icona rossa con la P", "Icona gialla"],
    hint: "Documento testo.",
    explanation: "Identifica i file .docx."
    
  },
  {
    id: 1070,
    question: "Quale icona indica un file di Excel?",
    correctAnswer: "Icona verde con la X",
    wrongAnswers: ["Icona blu con la W", "Icona arancione", "Icona rossa"],
    hint: "Foglio di calcolo.",
    explanation: "Identifica i file .xlsx."
    
  },
  {
    id: 1071,
    question: "Quale icona indica un file di PowerPoint?",
    correctAnswer: "Icona arancione/rossa con la P",
    wrongAnswers: ["Icona verde", "Icona blu", "Icona viola"],
    hint: "Presentazione.",
    explanation: "Identifica i file .pptx."
    
  },
  {
    id: 1072,
    question: "Quale icona nella barra di stato permette di passare alla 'Visualizzazione Struttura'?",
    correctAnswer: "Non c'è nella barra di stato (si trova nella scheda Visualizza)",
    wrongAnswers: ["L'icona del libro", "L'icona del foglio", "L'icona web"],
    hint: "Non è una vista comune.",
    explanation: "Le icone rapide in basso sono solitamente: Modalità lettura, Layout stampa, Layout web."
  },
  {
    id: 1073,
    question: "La 'Barra di scorrimento' serve a:",
    correctAnswer: "spostare il documento in alto/basso o destra/sinistra",
    wrongAnswers: ["cancellare il testo", "chiudere il programma", "salvare"],
    hint: "Scroll bar.",
    explanation: "Permette di navigare nelle parti del documento non visibili a schermo."

  },
  {
    id: 1074,
    question: "Quale pulsante permette di 'Incollare'?",
    correctAnswer: "Icona Cartellina (Clipboard) con foglio",
    wrongAnswers: ["Forbice", "Due fogli", "Pennello"],
    hint: "Paste.",
    explanation: "Inserisce il contenuto degli appunti."
    
  },
  {
    id: 1075,
    question: "Quale icona indica 'Taglia'?",
    correctAnswer: "Forbici",
    wrongAnswers: ["Fogli", "Cartellina", "Gomma"],
    hint: "Cut.",
    explanation: "Rimuove la selezione per spostarla."
    
  },
  {
    id: 1076,
    question: "Quale icona indica 'Copia'?",
    correctAnswer: "Due fogli sovrapposti",
    wrongAnswers: ["Forbici", "Cartellina", "Stampante"],
    hint: "Duplica.",
    explanation: "Copia la selezione negli appunti."
    
  },
  {
    id: 1077,
    question: "In Excel, per aumentare i decimali visibili si usa:",
    correctAnswer: "Icona con zeri e freccia verso sinistra (.00 -> .000)",
    wrongAnswers: ["Icona euro", "Icona percentuale", "Icona gomma"],
    hint: "Più precisione.",
    explanation: "Aumenta il numero di cifre decimali mostrate nella cella."
    
  },
  {
    id: 1078,
    question: "In Excel, per diminuire i decimali visibili si usa:",
    correctAnswer: "Icona con zeri e freccia verso destra (.000 -> .00)",
    wrongAnswers: ["Icona euro", "Icona somma", "Icona testo"],
    hint: "Meno precisione.",
    explanation: "Riduce il numero di cifre decimali mostrate, arrotondando il valore visualizzato."
  },
  {
    id: 1079,
    question: "Una volta completato il Download in Google Chrome, dove viene visualizzato il file (nelle versioni classiche)?",
    correctAnswer: "Nell'angolo inferiore sinistro della finestra del browser (o in alto a destra nelle nuove versioni)",
    wrongAnswers: ["Al centro dello schermo", "Non viene visualizzato", "Nella barra degli indirizzi"],
    hint: "Appare una barra in basso o un'icona in alto.",
    explanation: "Chrome notifica il completamento del download tramite una barra di stato o un menu a discesa dedicato."
  },
  {
    id: 1080,
    question: "In Google Drive, qual è la procedura per caricare una cartella dal PC?",
    correctAnswer: "Pulsante Nuovo > Caricamento cartella",
    wrongAnswers: ["Tasto destro > Crea file", "Doppio clic sullo sfondo", "Menu Visualizza > Cartella"],
    hint: "Il pulsante con il + colorato.",
    explanation: "Questa opzione permette di selezionare un'intera directory dal computer e replicarla nel cloud."
  },
  {
    id: 1081,
    question: "In OneDrive, l'icona “Nuvoletta” accanto a un file indica che:",
    correctAnswer: "il file è disponibile solo online e non occupa spazio sul disco locale",
    wrongAnswers: ["il file è danneggiato", "il file è in condivisione", "il file è stato cancellato"],
    hint: "Files On-Demand.",
    explanation: "Il file è visibile in Esplora File ma il contenuto reale è nel cloud; viene scaricato solo se lo apri."
  },
  {
    id: 1082,
    question: "In Excel, l'opzione “Confronta intero contenuto della cella” nel comando Trova serve a:",
    correctAnswer: "trovare solo le celle che contengono esattamente e unicamente il testo cercato",
    wrongAnswers: ["cercare parti di testo", "sostituire tutto il foglio", "trovare celle vuote"],
    hint: "Nessuna corrispondenza parziale.",
    explanation: "Evita di trovare '100' se stai cercando '10', o 'Mario Rossi' se cerchi solo 'Mario'."
  },
  {
    id: 1083,
    question: "Dopo aver inserito un grafico in Excel, quali schede appaiono?",
    correctAnswer: "Struttura grafico e Formato",
    wrongAnswers: ["Dati e Revisione", "Inserisci e Home", "Visualizza e Layout"],
    hint: "Schede verdi contestuali.",
    explanation: "Sono schede speciali che appaiono solo quando il grafico è selezionato per modificarne design e stile."
  },
  {
    id: 1084,
    question: "Quale scorciatoia da tastiera applica il Grassetto?",
    correctAnswer: "Ctrl + G (o Ctrl + B)",
    wrongAnswers: ["Ctrl + C", "Ctrl + S", "Ctrl + P"],
    hint: "G come Grassetto.",
    explanation: "È la scorciatoia standard per rendere il testo marcato."
  },
  {
    id: 1085,
    question: "Quale scorciatoia da tastiera applica il Corsivo?",
    correctAnswer: "Ctrl + I",
    wrongAnswers: ["Ctrl + C", "Ctrl + A", "Ctrl + V"],
    hint: "I come Italic (o Inclinato).",
    explanation: "Applica lo stile corsivo al testo evidenziato."
  },
  {
    id: 1086,
    question: "Virtu, ProtonMail e Lockbin sono:",
    correctAnswer: "servizi di email cifrata per la massima privacy",
    wrongAnswers: ["virus informatici", "social network", "motori di ricerca"],
    hint: "Privacy email.",
    explanation: "Offrono crittografia end-to-end per garantire la riservatezza delle comunicazioni."
  },
  {
    id: 1087,
    question: "A cosa serve Windows Update?",
    correctAnswer: "A scaricare e installare gli aggiornamenti di sicurezza e funzionalità del sistema",
    wrongAnswers: ["A pulire il disco", "A navigare su internet", "A scrivere documenti"],
    hint: "Aggiorna Windows.",
    explanation: "È il servizio Microsoft essenziale per mantenere il PC sicuro e aggiornato."
  },
  {
    id: 1088,
    question: "L'“Accountability” (responsabilità) informatica prevede che:",
    correctAnswer: "le azioni degli utenti nel sistema siano tracciabili e monitorabili",
    wrongAnswers: ["nessuno sia responsabile", "i dati siano anonimi", "si cancellino le tracce"],
    hint: "Rendere conto.",
    explanation: "Garantisce che ogni azione critica possa essere attribuita in modo inequivocabile a un utente."
  },
  {
    id: 1089,
    question: "L'“Ingegneria sociale” sfrutta:",
    correctAnswer: "la manipolazione psicologica per ottenere dati riservati dalle vittime",
    wrongAnswers: ["bug del software", "rottura dell'hardware", "virus automatici"],
    hint: "Hackerare la mente umana.",
    explanation: "L'attaccante inganna la persona (es. fingendosi un tecnico) per farsi dare le password."
  },
  {
    id: 1090,
    question: "L'“Integrità dei dati” assicura che:",
    correctAnswer: "i dati non siano stati alterati o modificati in modo non autorizzato",
    wrongAnswers: ["i dati siano segreti", "i dati siano cancellati", "i dati siano veloci"],
    hint: "Non manomessi.",
    explanation: "Garantisce che l'informazione ricevuta sia identica a quella creata o inviata."
  },
  {
    id: 1091,
    question: "Cosa sono gli ISP (Internet Service Provider)?",
    correctAnswer: "Aziende che forniscono l'accesso a Internet (es. TIM, Vodafone)",
    wrongAnswers: ["Motori di ricerca", "Siti web", "Browser"],
    hint: "Fornitori di connessione.",
    explanation: "Gestiscono l'infrastruttura fisica che porta internet nelle case e uffici."
  },
  {
    id: 1092,
    question: "Si parla di “Accessi concorrenti” quando:",
    correctAnswer: "più utenti lavorano sullo stesso file contemporaneamente (es. Google Docs)",
    wrongAnswers: ["non si riesce ad accedere", "la password è sbagliata", "si usa un solo PC"],
    hint: "Collaborazione real-time.",
    explanation: "Tipico del cloud, permette la modifica simultanea di documenti condivisi."
  },
  {
    id: 1093,
    question: "Il “Tethering” consiste nel:",
    correctAnswer: "usare lo smartphone come modem per connettere altri dispositivi a Internet",
    wrongAnswers: ["spegnere il telefono", "collegare il mouse", "ascoltare musica"],
    hint: "Hotspot personale.",
    explanation: "Condivide la connessione dati 4G/5G del cellulare via Wi-Fi, USB o Bluetooth."
  },
  {
    id: 1094,
    question: "La scheda “Carta” (o Layout) in Word serve a:",
    correctAnswer: "impostare le dimensioni del foglio (A4, A3, ecc.)",
    wrongAnswers: ["cambiare colore", "inserire foto", "stampare"],
    hint: "Dimensioni foglio.",
    explanation: "Definisce la grandezza fisica della pagina per la stampa."
  },
  {
    id: 1095,
    question: "È corretto confrontare 1TB di disco con 3GHz di processore?",
    correctAnswer: "No, sono unità di misura per componenti diversi (spazio vs velocità)",
    wrongAnswers: ["Sì, 1TB è meglio", "Sì, 3GHz è meglio", "Dipende dalla marca"],
    hint: "Mele con pere.",
    explanation: "TB misura la capacità di archiviazione, GHz la frequenza di calcolo della CPU."
  },
  {
    id: 1096,
    question: "L'estensione .xlsx identifica:",
    correctAnswer: "una cartella di lavoro Excel",
    wrongAnswers: ["un documento Word", "una presentazione PPT", "un database"],
    hint: "File di calcolo.",
    explanation: "È il formato standard per i file Excel nelle versioni recenti di Office."
  },
  {
    id: 1097,
    question: "Un “Hacker Black Hat” (immorale) è:",
    correctAnswer: "un criminale informatico che agisce per profitto o danno",
    wrongAnswers: ["un esperto di sicurezza etico", "un amministratore di rete", "un utente"],
    hint: "Cappello nero = Cattivo.",
    explanation: "Viola i sistemi informatici con intenti malevoli, a differenza degli hacker etici (White Hat)."
  },
  {
    id: 1098,
    question: "La struttura di un indirizzo email è:",
    correctAnswer: "nomeutente@dominio.estensione",
    wrongAnswers: ["www.sito.com", "nome.cognome", "http://indirizzo"],
    hint: "C'è la chiocciola.",
    explanation: "Identifica univocamente una casella di posta su un server mail."
  },
  {
    id: 1099,
    question: "Un software “Freeware”:",
    correctAnswer: "è gratuito ma non necessariamente open source",
    wrongAnswers: ["è a pagamento", "è modificabile da tutti", "è un virus"],
    hint: "Gratis ma chiuso.",
    explanation: "L'autore concede l'uso gratuito, ma mantiene il controllo sul codice sorgente."
  },
  {
    id: 1100,
    question: "Una rete LAN (Local Area Network):",
    correctAnswer: "copre un'area geografica limitata (casa, ufficio)",
    wrongAnswers: ["copre tutto il mondo", "non usa cavi", "è solo per telefoni"],
    hint: "Rete locale.",
    explanation: "Collega computer vicini tra loro, solitamente nello stesso edificio."
  },
  {
    id: 1101,
    question: "È possibile ridimensionare un'immagine in Word?",
    correctAnswer: "Sì, trascinando le maniglie sulla cornice dell'immagine",
    wrongAnswers: ["No, è fissa", "Solo se è in bianco e nero", "Solo cancellandola"],
    hint: "Punti ai bordi.",
    explanation: "Cliccando sull'immagine appaiono i punti di controllo per modificarne le dimensioni."
  },
  {
    id: 1102,
    question: "Dove finiscono gli elementi copiati o tagliati?",
    correctAnswer: "Negli Appunti (Clipboard)",
    wrongAnswers: ["Nel Cestino", "Sul Desktop", "Nella cartella Documenti"],
    hint: "Memoria temporanea.",
    explanation: "Gli appunti sono un'area di memoria del sistema che conserva l'ultimo elemento copiato."
  },
  {
    id: 1103,
    question: "Cosa mostra lo “ScreenTip” (descrizione comando)?",
    correctAnswer: "Il nome del comando e una breve descrizione quando ci passi sopra col mouse",
    wrongAnswers: ["Il codice del programma", "Un video", "Nulla"],
    hint: "Suggerimento a schermo.",
    explanation: "Aiuta l'utente a capire la funzione di un pulsante senza cliccarlo."
  },
  {
    id: 1104,
    question: "Quanti margini ha una pagina Word?",
    correctAnswer: "4 (Superiore, Inferiore, Sinistro, Destro)",
    wrongAnswers: ["2", "6", "8"],
    hint: "I lati del foglio.",
    explanation: "Ogni pagina rettangolare ha quattro margini modificabili."
  },
  {
    id: 1105,
    question: "SafeSearch di Google serve a:",
    correctAnswer: "filtrare i risultati per escludere contenuti espliciti (es. per bambini)",
    wrongAnswers: ["cercare virus", "cercare file sicuri", "navigare anonimi"],
    hint: "Filtro famiglia.",
    explanation: "Blocca immagini e siti inappropriati dai risultati di ricerca."
  },
  {
    id: 1106,
    question: "Salvare un file significa:",
    correctAnswer: "scrivere i dati dalla RAM al disco fisso per conservarli",
    wrongAnswers: ["cancellarli", "stamparli", "chiuderli"],
    hint: "Rendere persistente.",
    explanation: "Trasferisce il lavoro dalla memoria volatile a quella permanente."
  },
  {
    id: 1107,
    question: "Cosa indica il cursore a forma di cerchietto blu rotante?",
    correctAnswer: "Che il computer sta elaborando ed è occupato",
    wrongAnswers: ["Che il mouse è rotto", "Che c'è un virus", "Che è spento"],
    hint: "Attesa.",
    explanation: "Sostituisce la clessidra nelle versioni recenti di Windows, indicando attività in background."
  },
  {
    id: 1108,
    question: "Se condividi un calendario con permessi di modifica:",
    correctAnswer: "l'altra persona può aggiungere, modificare o eliminare eventi",
    wrongAnswers: ["può solo vedere", "non può fare nulla", "ti ruba l'account"],
    hint: "Controllo totale.",
    explanation: "Concede diritti di scrittura sul calendario condiviso."
  },
  {
    id: 1109,
    question: "La sintassi corretta per sommare da C2 a C5 è:",
    correctAnswer: "=SOMMA(C2:C5)",
    wrongAnswers: ["SUM(C2-C5)", "=TOTALE(C2:C5)", "C2+C5"],
    hint: "Funzione Somma.",
    explanation: "Richiede l'uguale, il nome della funzione e l'intervallo tra parentesi."
  },
  {
    id: 1110,
    question: "L'app Posta di Windows supporta più account?",
    correctAnswer: "Sì, puoi gestire Gmail, Outlook e altri insieme",
    wrongAnswers: ["No, solo uno", "Solo Microsoft", "Solo a pagamento"],
    hint: "Multi-account.",
    explanation: "È un client di posta universale che aggrega diverse caselle email."
  },
  {
    id: 1111,
    question: "Il salvataggio automatico (AutoRecover) in Excel:",
    correctAnswer: "salva copie temporanee per recuperare il lavoro in caso di crash",
    wrongAnswers: ["non esiste", "cancella i file", "stampa da solo"],
    hint: "Salva la vita.",
    explanation: "Protegge dalla perdita di dati in caso di chiusura imprevista del programma."
  },
  {
    id: 1112,
    question: "Se ricevi una mail dalla tua banca che chiede la password:",
    correctAnswer: "È probabilmente Phishing, non rispondere e non cliccare",
    wrongAnswers: ["Rispondi subito", "Clicca sul link", "Chiama la polizia"],
    hint: "Le banche non chiedono password via mail.",
    explanation: "È un segnale tipico di truffa informatica."
  },
  {
    id: 1113,
    question: "Lo strumento Gomma nelle tabelle Word serve a:",
    correctAnswer: "rimuovere i bordi per unire le celle",
    wrongAnswers: ["cancellare il testo", "cancellare la pagina", "fare disegni"],
    hint: "Unisce cancellando la linea.",
    explanation: "Permette di eliminare le linee di separazione tra celle adiacenti."
  },
  {
    id: 1114,
    question: "Senza il simbolo “=” una cella Excel contiene:",
    correctAnswer: "semplice testo o numeri (nessun calcolo)",
    wrongAnswers: ["una formula", "un errore", "un grafico"],
    hint: "Dato statico.",
    explanation: "Excel interpreta l'input come valore costante se non inizia con l'operatore di formula."
  },
  {
    id: 1115,
    question: "L'opzione “Crea nuovo elenco” nella Stampa Unione:",
    correctAnswer: "ti fa digitare manualmente i dati dei destinatari in una tabella",
    wrongAnswers: ["usa un file esistente", "non fa nulla", "stampa subito"],
    hint: "Database da zero.",
    explanation: "Crea un nuovo file database (MDB) con i dati inseriti al momento."
  },
  {
    id: 1116,
    question: "L'opzione “Usa elenco esistente” nella Stampa Unione:",
    correctAnswer: "collega un file dati (es. Excel) al documento Word",
    wrongAnswers: ["ti fa scrivere a mano", "cancella i dati", "crea un PDF"],
    hint: "Fonte esterna.",
    explanation: "Utilizza una rubrica o tabella già pronta come sorgente dati."
  },
  {
    id: 1117,
    question: "Cosa succede alla RAM se manca la corrente?",
    correctAnswer: "Si svuota completamente (i dati non salvati sono persi)",
    wrongAnswers: ["I dati restano", "Si rompe", "Si riempie"],
    hint: "Memoria volatile.",
    explanation: "È una memoria che necessita di alimentazione elettrica per conservare le informazioni."
  },
  {
    id: 1118,
    question: "Il layout “Gerarchie” delle SmartArt serve per:",
    correctAnswer: "creare organigrammi e alberi decisionali",
    wrongAnswers: ["fare elenchi puntati", "fare grafici a torta", "scrivere lettere"],
    hint: "Struttura ad albero.",
    explanation: "Rappresenta relazioni di potere o strutturali (capo-sottoposto)."
  },
  {
    id: 1119,
    question: "In Excel, l'icona “Z-A” (freccia giù) serve a:",
    correctAnswer: "ordinare i dati in modo decrescente",
    wrongAnswers: ["ordinare crescente", "filtrare", "sommare"],
    hint: "Dall'ultimo al primo.",
    explanation: "Mette i numeri dal più grande al più piccolo o il testo dalla Z alla A."
  },
  {
    id: 1120,
    question: "In Excel, l'icona “A-Z” (freccia su) serve a:",
    correctAnswer: "ordinare i dati in modo crescente",
    wrongAnswers: ["ordinare decrescente", "tagliare", "incollare"],
    hint: "Dal primo all'ultimo.",
    explanation: "Mette i numeri dal più piccolo al più grande o il testo dalla A alla Z."
  },
  {
    id: 1121,
    question: "In Word, l'icona “A” piccola (o freccia giù) serve a:",
    correctAnswer: "diminuire la dimensione del carattere",
    wrongAnswers: ["aumentarla", "cambiare colore", "rendere grassetto"],
    hint: "Rimpicciolisci.",
    explanation: "Riduce il font di un livello nella scala delle dimensioni."
  },
  {
    id: 1122,
    question: "L'icona “S” (o U) nella formattazione serve a:",
    correctAnswer: "sottolineare il testo",
    wrongAnswers: ["salvare", "scrivere", "selezionare"],
    hint: "Linea sotto.",
    explanation: "Applica una linea orizzontale sotto i caratteri selezionati."
  },
  {
    id: 1123,
    question: "L'icona “Unisci e allinea al centro” in Excel:",
    correctAnswer: "fuesce le celle selezionate in una sola e centra il testo",
    wrongAnswers: ["divide le celle", "copia le celle", "cancella le celle"],
    hint: "Crea un'etichetta grande.",
    explanation: "Strumento comune per creare titoli sopra tabelle di dati."
  },
  {
    id: 1124,
    question: "Lo zoom “Una pagina” in Word:",
    correctAnswer: "adatta la visualizzazione per mostrare l'intero foglio nello schermo",
    wrongAnswers: ["mostra solo il testo", "mostra 100 pagine", "stampa una pagina"],
    hint: "Visione d'insieme.",
    explanation: "Permette di vedere il layout completo della pagina corrente."
  },
  {
    id: 1125,
    question: "La “Stella” nella barra degli indirizzi di Chrome serve a:",
    correctAnswer: "aggiungere la pagina ai Preferiti",
    wrongAnswers: ["dare un voto al sito", "chiudere il sito", "cercare"],
    hint: "Bookmark.",
    explanation: "Salva l'URL corrente per un accesso rapido futuro."
  },
  {
    id: 1126,
    question: "L'icona “Dischetto” serve a:",
    correctAnswer: "salvare il file corrente",
    wrongAnswers: ["cancellare", "aprire", "stampare"],
    hint: "Floppy disk.",
    explanation: "Icona universale per il comando Salva."
  },
  {
    id: 1127,
    question: "La scheda “Animazioni” in PowerPoint gestisce:",
    correctAnswer: "gli effetti di movimento di testo e oggetti nella slide",
    wrongAnswers: ["il cambio pagina", "i colori", "la stampa"],
    hint: "Non transizioni.",
    explanation: "Configura come gli elementi entrano, escono o si muovono nella diapositiva."
  },
  {
    id: 1128,
    question: "CPU sta per:",
    correctAnswer: "Central Processing Unit (Processore)",
    wrongAnswers: ["Central Power Unit", "Computer Personal Unit", "Control Panel Utility"],
    hint: "Cervello del PC.",
    explanation: "È il componente hardware che esegue le istruzioni dei programmi."
  },
  {
    id: 1129,
    question: "Quale NON è un client di posta installato?",
    correctAnswer: "Gmail (è webmail)",
    wrongAnswers: ["Outlook", "Thunderbird", "Apple Mail"],
    hint: "Si usa nel browser.",
    explanation: "Gmail nasce come servizio web, anche se può essere configurato in client esterni."
  },
  {
    id: 1130,
    question: "L'icona “Omino con cappello/occhiali” nel browser indica:",
    correctAnswer: "la modalità di navigazione in incognito",
    wrongAnswers: ["un virus", "un hacker", "l'amministratore"],
    hint: "Navigazione privata.",
    explanation: "Segnala che la cronologia e i cookie non verranno salvati."
  },
  {
    id: 1131,
    question: "Per una password sicura bisogna:",
    correctAnswer: "usare lettere, numeri, simboli e non dati personali",
    wrongAnswers: ["usare il proprio nome", "usare 12345", "scriverla su un post-it"],
    hint: "Complessità.",
    explanation: "Le password complesse sono più difficili da indovinare o forzare."
  },
  {
    id: 1132,
    question: "L'icona “Aa” in Word permette di:",
    correctAnswer: "cambiare le maiuscole/minuscole del testo",
    wrongAnswers: ["cambiare colore", "cambiare font", "cancellare"],
    hint: "Caso del testo.",
    explanation: "Offre opzioni come Tutto maiuscole, Tutto minuscole, Inverti maiuscole."
  },
  {
    id: 1133,
    question: "L'icona delle “Onde radio” indica:",
    correctAnswer: "il Wi-Fi",
    wrongAnswers: ["il volume", "la batteria", "il bluetooth"],
    hint: "Segnale.",
    explanation: "Simbolo standard per la connettività wireless."
  },
  {
    id: 1134,
    question: "“Copia e Incolla” serve a:",
    correctAnswer: "duplicare un elemento in un'altra posizione",
    wrongAnswers: ["spostare", "cancellare", "salvare"],
    hint: "Lascia l'originale.",
    explanation: "Crea una copia identica mantenendo l'originale al suo posto."
  },
  {
    id: 1135,
    question: "“Taglia e Incolla” serve a:",
    correctAnswer: "spostare un elemento in un'altra posizione",
    wrongAnswers: ["duplicare", "copiare", "stampare"],
    hint: "Rimuove l'originale.",
    explanation: "Sposta l'elemento rimuovendolo dalla posizione di partenza."
  },
  {
    id: 1136,
    question: "Il carattere “Arial” è un esempio di:",
    correctAnswer: "Sans Serif (senza grazie)",
    wrongAnswers: ["Serif", "Corsivo", "Gotico"],
    hint: "Bastoni.",
    explanation: "Carattere lineare privo di decorazioni terminali."
  },
  {
    id: 1137,
    question: "Il carattere “Times New Roman” è un esempio di:",
    correctAnswer: "Serif (con grazie)",
    wrongAnswers: ["Sans Serif", "Monospazio", "Simbolo"],
    hint: "Classico.",
    explanation: "Carattere con terminazioni decorative (grazie) che facilitano la lettura su carta."
  },
  {
    id: 1138,
    question: "Il login richiede solitamente:",
    correctAnswer: "Username e Password",
    wrongAnswers: ["Nome e Cognome", "Indirizzo", "Carta di credito"],
    hint: "Credenziali.",
    explanation: "Sono i dati standard per l'autenticazione a un sistema."
  },
  {
    id: 1139,
    question: "La tabulazione “Centrata” è indicata da:",
    correctAnswer: "una T rovesciata sul righello",
    wrongAnswers: ["una L", "un punto", "una barra"],
    hint: "Allinea al centro.",
    explanation: "Simbolo che definisce un punto di allineamento centrale per il testo tabulato."
  },
  {
    id: 1140,
    question: "La tabulazione “Decimale” è indicata da:",
    correctAnswer: "una T rovesciata con un puntino",
    wrongAnswers: ["una L", "una T", "una barra"],
    hint: "Per i numeri.",
    explanation: "Allinea i numeri in colonna rispettando la posizione della virgola decimale."
  },
  {
    id: 1141,
    question: "L'icona “Freccia curva a sinistra” serve a:",
    correctAnswer: "annullare l'ultima operazione (Undo)",
    wrongAnswers: ["andare avanti", "cancellare", "salvare"],
    hint: "Oops.",
    explanation: "Revoca l'ultima azione eseguita."
  },
  {
    id: 1142,
    question: "L'icona “Banconote/Monete” in Excel:",
    correctAnswer: "applica il formato Valuta (o Contabilità)",
    wrongAnswers: ["conta i soldi", "fa una somma", "cancella i numeri"],
    hint: "Formatta come soldi.",
    explanation: "Aggiunge il simbolo della valuta e i decimali ai numeri."
  },
  {
    id: 1143,
    question: "La “Modalità schermo intero” in Word:",
    correctAnswer: "nasconde la barra multifunzione per massimizzare il documento",
    wrongAnswers: ["chiude il file", "stampa", "cancella tutto"],
    hint: "Più spazio.",
    explanation: "Ottimizza l'area di lavoro nascondendo i menu."
  },
  {
    id: 1144,
    question: "I “Virus” sono:",
    correctAnswer: "programmi malevoli che si replicano infettando altri file",
    wrongAnswers: ["errori del pc", "polvere nel case", "file di testo"],
    hint: "Malware.",
    explanation: "Categoria principale di software dannoso."
  },
  {
    id: 1145,
    question: "L'opzione “Mostra solo schede” serve a:",
    correctAnswer: "nascondere i comandi della barra multifunzione lasciando solo i titoli",
    wrongAnswers: ["nascondere tutto", "chiudere word", "cancellare i menu"],
    hint: "Più spazio verticale.",
    explanation: "Riduce l'ingombro dell'interfaccia."
  },
  {
    id: 1146,
    question: "L'icona del “Bluetooth” è:",
    correctAnswer: "una B stilizzata su sfondo blu",
    wrongAnswers: ["una W", "un'antenna", "un cavo"],
    hint: "Runica.",
    explanation: "Logo internazionale della tecnologia."
  },
  {
    id: 1147,
    question: "Mozilla Firefox è:",
    correctAnswer: "un browser web",
    wrongAnswers: ["un motore di ricerca", "un antivirus", "un sistema operativo"],
    hint: "Navigatore.",
    explanation: "Software per accedere a internet."
  },
  {
    id: 1148,
    question: "Hotmail è:",
    correctAnswer: "un servizio di posta elettronica (webmail)",
    wrongAnswers: ["una chat", "un social", "un browser"],
    hint: "Email.",
    explanation: "Storico provider di email Microsoft (ora Outlook.com)."
  },
  {
    id: 1149,
    question: "Il pulsante “Dischetto” serve a:",
    correctAnswer: "salvare le modifiche al file",
    wrongAnswers: ["stampare", "cancellare", "inviare"],
    hint: "Save.",
    explanation: "Comando rapido per il salvataggio."
  },
  {
    id: 1150,
    question: "È possibile inserire foto in Word?",
    correctAnswer: "Sì, tramite il menu Inserisci > Immagini",
    wrongAnswers: ["No, solo testo", "Solo disegni", "Solo tabelle"],
    hint: "Multimedia.",
    explanation: "Word supporta l'impaginazione di immagini e grafica."
  },
  {
    id: 1151,
    question: "Writer e Word sono:",
    correctAnswer: "software di elaborazione testi (Word processor)",
    wrongAnswers: ["fogli di calcolo", "browser", "giochi"],
    hint: "Scrittura.",
    explanation: "Applicazioni per creare e formattare documenti testuali."
  },
  {
    id: 1152,
    question: "L'opzione “Mantieni formattazione originale” nell'incollare:",
    correctAnswer: "conserva lo stile del testo copiato",
    wrongAnswers: ["lo trasforma in testo semplice", "cambia colore", "cancella tutto"],
    hint: "Uguale alla fonte.",
    explanation: "Mantiene l'aspetto visivo originale del contenuto incollato."
  },
  {
    id: 1153,
    question: "Il pulsante “Chiudi” (X) si trova:",
    correctAnswer: "nella barra del titolo (in alto a destra)",
    wrongAnswers: ["nella barra di stato", "nel menu start", "non esiste"],
    hint: "Chiude la finestra.",
    explanation: "Standard dell'interfaccia Windows per chiudere le applicazioni."
  },
  {
    id: 1154,
    question: "Skype è un programma di:",
    correctAnswer: "comunicazione VoIP e messaggistica",
    wrongAnswers: ["scrittura", "calcolo", "disegno"],
    hint: "Chiamate online.",
    explanation: "Permette chiamate vocali e video tramite internet."
  },
  {
    id: 1155,
    question: "I grafici di PowerPoint usano i dati di:",
    correctAnswer: "Excel",
    wrongAnswers: ["Word", "Notepad", "Paint"],
    hint: "Integrazione Office.",
    explanation: "Si apre una finestra Excel per gestire la tabella numerica del grafico."
  },
  {
    id: 1156,
    question: "L'opzione “Visibilità” in Calendar serve a:",
    correctAnswer: "decidere chi può vedere i dettagli dell'evento (Pubblico/Privato)",
    wrongAnswers: ["cancellare l'evento", "colorarlo", "spostarlo"],
    hint: "Privacy.",
    explanation: "Protegge i dettagli degli appuntamenti personali."
  },
  {
    id: 1157,
    question: "Quando si è diffusa l'ADSL?",
    correctAnswer: "Intorno all'anno 2000",
    wrongAnswers: ["1980", "2020", "1950"],
    hint: "Banda larga.",
    explanation: "Tecnologia che ha sostituito i modem 56k."
  },
  {
    id: 1158,
    question: "Interrompere il backup di OneDrive:",
    correctAnswer: "ferma la sincronizzazione delle cartelle scelte",
    wrongAnswers: ["cancella i file", "rompe il pc", "spegne internet"],
    hint: "Stop sync.",
    explanation: "Le cartelle locali non vengono più caricate sul cloud."
  },
  {
    id: 1159,
    question: "Le “Autorizzazioni” delle app sono:",
    correctAnswer: "i permessi per accedere a funzioni del telefono (camera, GPS, contatti)",
    wrongAnswers: ["password", "codici", "virus"],
    hint: "Privacy mobile.",
    explanation: "L'utente deve concedere esplicitamente l'accesso ai dati sensibili."
  },
  {
    id: 1160,
    question: "L'icona “Imbuto” in Excel:",
    correctAnswer: "attiva i Filtri",
    wrongAnswers: ["ordina", "somma", "cancella"],
    hint: "Sceglie cosa mostrare.",
    explanation: "Permette di nascondere le righe che non soddisfano certi criteri."
  },
  {
    id: 1161,
    question: "L'icona “Barre verticali” inserisce un:",
    correctAnswer: "Istogramma",
    wrongAnswers: ["Grafico a torta", "Grafico a linee", "Mappa"],
    hint: "Colonne.",
    explanation: "Grafico statistico a colonne."
  },
  {
    id: 1162,
    question: "L'icona “Linea spezzata” inserisce un:",
    correctAnswer: "Grafico a linee",
    wrongAnswers: ["Istogramma", "Torta", "Dispersione"],
    hint: "Trend.",
    explanation: "Grafico per mostrare andamenti nel tempo."
  },
  {
    id: 1163,
    question: "In Windows 11, l'icona “A con cursore” serve a:",
    correctAnswer: "Rinominare un file",
    wrongAnswers: ["Copiare", "Cancellare", "Condividere"],
    hint: "Cambia nome.",
    explanation: "Nuova icona nel menu contestuale per la rinomina."
  },
  {
    id: 1164,
    question: "In Windows 11, l'icona “Quadrato con freccia in uscita” serve a:",
    correctAnswer: "Condividere il file",
    wrongAnswers: ["Rinominare", "Cancellare", "Copiare"],
    hint: "Share.",
    explanation: "Apre il menu di condivisione di sistema."
  },
  {
    id: 1165,
    question: "Il trattino “-” nella finestra serve a:",
    correctAnswer: "Ridurre a icona",
    wrongAnswers: ["Chiudere", "Ingrandire", "Spostare"],
    hint: "Minimizza.",
    explanation: "Nasconde la finestra nella barra delle applicazioni."
  },
  {
    id: 1166,
    question: "Il “Quadrato” nella finestra serve a:",
    correctAnswer: "Ingrandire a tutto schermo (Massimizzare)",
    wrongAnswers: ["Chiudere", "Ridurre", "Spostare"],
    hint: "Full screen.",
    explanation: "Espande la finestra per occupare tutto il desktop."
  },
  {
    id: 1167,
    question: "La “X” nella finestra serve a:",
    correctAnswer: "Chiudere l'applicazione",
    wrongAnswers: ["Ridurre", "Ingrandire", "Salvare"],
    hint: "Close.",
    explanation: "Termina il programma."
  },
  {
    id: 1168,
    question: "L'icona rossa (spesso Adobe) indica un file:",
    correctAnswer: "PDF",
    wrongAnswers: ["Word", "Excel", "PPT"],
    hint: "Documento portatile.",
    explanation: "Formato standard per documenti non modificabili."
  },
  {
    id: 1169,
    question: "L'icona blu con la W indica un file:",
    correctAnswer: "Word",
    wrongAnswers: ["Excel", "PDF", "PPT"],
    hint: "Scrittura.",
    explanation: "Documento di testo Microsoft Word."
  },
  {
    id: 1170,
    question: "L'icona verde con la X indica un file:",
    correctAnswer: "Excel",
    wrongAnswers: ["Word", "PPT", "PDF"],
    hint: "Fogli di calcolo.",
    explanation: "Cartella di lavoro Microsoft Excel."
  },
  {
    id: 1171,
    question: "L'icona arancione con la P indica un file:",
    correctAnswer: "PowerPoint",
    wrongAnswers: ["Excel", "Word", "PDF"],
    hint: "Presentazione.",
    explanation: "Presentazione Microsoft PowerPoint."
  },
  {
    id: 1172,
    question: "L'icona per passare alla Visualizzazione Struttura:",
    correctAnswer: "Si trova nella scheda Visualizza (non nella barra di stato)",
    wrongAnswers: ["È nella barra di stato", "È nel menu File", "Non esiste"],
    hint: "Vista avanzata.",
    explanation: "Non è tra le scorciatoie rapide in basso a destra."
  },
  {
    id: 1173,
    question: "La barra di scorrimento serve a:",
    correctAnswer: "navigare nel documento visualizzando le parti nascoste",
    wrongAnswers: ["cancellare", "scrivere", "salvare"],
    hint: "Su e giù.",
    explanation: "Permette lo scroll verticale o orizzontale."
  },
  {
    id: 1174,
    question: "L'icona “Cartellina con foglio” serve a:",
    correctAnswer: "Incollare",
    wrongAnswers: ["Copiare", "Tagliare", "Stampare"],
    hint: "Paste.",
    explanation: "Inserisce il contenuto della clipboard."
  },
  {
    id: 1175,
    question: "L'icona “Forbici” serve a:",
    correctAnswer: "Tagliare",
    wrongAnswers: ["Copiare", "Incollare", "Cancellare"],
    hint: "Cut.",
    explanation: "Rimuove e copia negli appunti."
  },
  {
    id: 1176,
    question: "L'icona “Due fogli” serve a:",
    correctAnswer: "Copiare",
    wrongAnswers: ["Tagliare", "Incollare", "Stampare"],
    hint: "Duplicate.",
    explanation: "Copia la selezione negli appunti."
  },
  {
    id: 1177,
    question: "L'icona con zeri e freccia a sinistra in Excel:",
    correctAnswer: "Aumenta i decimali visibili",
    wrongAnswers: ["Diminuisce decimali", "Formatta valuta", "Cancella"],
    hint: "Più precisione.",
    explanation: "Aggiunge cifre dopo la virgola."
  },
  {
    id: 1178,
    question: "L'icona con zeri e freccia a destra in Excel:",
    correctAnswer: "Diminuisce i decimali visibili",
    wrongAnswers: ["Aumenta decimali", "Formatta data", "Cancella"],
    hint: "Meno precisione.",
    explanation: "Riduce le cifre dopo la virgola arrotondando."
  },
  {
    id: 1179,
    question: "Quali delle seguenti lettere indica il 'Rientro prima riga' sul righello di Word?",
    correctAnswer: "Il triangolo rovesciato in alto",
    wrongAnswers: ["Il rettangolo in basso", "Il triangolo in basso", "La clessidra intera"],
    hint: "Sposta solo l'inizio del paragrafo.",
    explanation: "Il marcatore superiore sul righello controlla il rientro della sola prima riga del paragrafo selezionato."
    
  },
  {
    id: 1180,
    question: "Quali delle seguenti lettere indica il 'Rientro sinistro' sul righello di Word?",
    correctAnswer: "Il rettangolino in basso",
    wrongAnswers: ["Il triangolo in alto", "Il margine destro", "Il tabulatore"],
    hint: "Sposta tutto il paragrafo.",
    explanation: "Muovendo il rettangolo inferiore si sposta l'intero allineamento sinistro del paragrafo."
    
  },
  {
    id: 1181,
    question: "Quale opzione di allineamento NON compare nel menu Verticale della finestra Formato Celle?",
    correctAnswer: "Riempi",
    wrongAnswers: ["In alto", "Al centro", "In basso"],
    hint: "Riempi è orizzontale.",
    explanation: "L'opzione 'Riempi' (che ripete il carattere fino a riempire la cella) è disponibile solo per l'allineamento orizzontale."
    
  },
  {
    id: 1182,
    question: "Quale opzione di blocco schermo NON assicura alcuna protezione del dispositivo?",
    correctAnswer: "Trascinamento",
    wrongAnswers: ["PIN", "Segno", "Password"],
    hint: "Basta scorrere il dito.",
    explanation: "Il trascinamento sblocca lo schermo senza richiedere alcuna autenticazione, lasciando i dati esposti."
    
  },
  {
    id: 1183,
    question: "Quale opzione permette di eliminare le etichette dati presenti in un grafico Excel?",
    correctAnswer: "Nessuna (dal menu Elementi grafico > Etichette dati)",
    wrongAnswers: ["Cancella tutto", "Formato > Elimina", "Non si possono togliere"],
    hint: "Impostale su 'Nessuna'.",
    explanation: "Nel menu degli elementi del grafico, deselezionando 'Etichette dati' o scegliendo 'Nessuna', i valori scompaiono."
    
  },
  {
    id: 1184,
    question: "Quale tra i seguenti componenti fisici NON serve per collegarsi a una rete?",
    correctAnswer: "Tastiera",
    wrongAnswers: ["Scheda di rete", "Cavo Ethernet", "Router"],
    hint: "È una periferica di input.",
    explanation: "La tastiera serve per l'input dell'utente, non per la trasmissione dei dati sulla rete."
    
  },
  {
    id: 1185,
    question: "Quale tra i seguenti NON è un compito di un amministratore di rete?",
    correctAnswer: "Creare presentazioni PowerPoint per lo staff",
    wrongAnswers: ["Gestire gli account utente", "Configurare la sicurezza", "Monitorare il traffico"],
    hint: "Non è un compito tecnico.",
    explanation: "L'amministratore si occupa dell'infrastruttura IT, non della creazione di documenti d'ufficio."
    
  },
  {
    id: 1186,
    question: "Quale tra i seguenti caratteri speciali NON può essere usato nei nomi dei file Windows?",
    correctAnswer: "? (Punto interrogativo)",
    wrongAnswers: ["- (Trattino)", "_ (Underscore)", "Space"],
    hint: "Carattere riservato.",
    explanation: "I caratteri come ? / \ : * < > | sono riservati dal sistema e non possono essere usati nei nomi file."
    
  },
  {
    id: 1187,
    question: "Quale tra le seguenti è l'icona del pulsante 'Incolla'?",
    correctAnswer: "La cartellina con il foglio davanti",
    wrongAnswers: ["Le forbici", "I due fogli", "Il pennello"],
    hint: "Paste.",
    explanation: "Rappresenta la clipboard (appunti) da cui viene prelevato il contenuto."
    
  },
  {
    id: 1188,
    question: "In Windows 11, è possibile configurare una successione di immagini come sfondo?",
    correctAnswer: "Sì, scegliendo l'opzione 'Presentazione'",
    wrongAnswers: ["No, solo una", "Solo se sono online", "Serve un'app esterna"],
    hint: "Cambia automaticamente.",
    explanation: "L'opzione Presentazione (Slideshow) fa ruotare le immagini di una cartella scelta come sfondo del desktop."
    
  },
  {
    id: 1189,
    question: "In Windows 11, la sezione Accessibilità serve a:",
    correctAnswer: "agevolare l'uso del PC per persone con disabilità (visiva, uditiva, motoria)",
    wrongAnswers: ["accedere a internet", "proteggere dai virus", "velocizzare il PC"],
    hint: "Inclusività.",
    explanation: "Contiene strumenti come Lente d'ingrandimento, Assistente vocale, Contrasto elevato e Sottotitoli."
    
  },
  {
    id: 1190,
    question: "In Excel, qual è il simbolo per l'elevamento a potenza?",
    correctAnswer: "^ (Accento circonflesso)",
    wrongAnswers: ["*", "x", "#"],
    hint: "Cappellino.",
    explanation: "L'operatore ^ si usa per le potenze (es. =2^3 restituisce 8)."
    
  },
  {
    id: 1191,
    question: "In PowerPoint, quale opzione di stampa mette ogni slide su un foglio separato?",
    correctAnswer: "Diapositive a pagina intera",
    wrongAnswers: ["Stampati", "Struttura", "Note"],
    hint: "Una per pagina.",
    explanation: "Stampa una diapositiva per ogni foglio A4, occupando tutto lo spazio."
    
  },
  {
    id: 1192,
    question: "In Windows 11, l'opzione 'Svuota cestino':",
    correctAnswer: "elimina definitivamente tutti i file contenuti nel Cestino",
    wrongAnswers: ["li sposta in Documenti", "li comprime", "li nasconde"],
    hint: "Irreversibile.",
    explanation: "Una volta svuotato il Cestino, i file non possono più essere recuperati con metodi standard."
    
  },
  {
    id: 1193,
    question: "In Windows 11, per modificare data e ora manualmente:",
    correctAnswer: "Tasto destro sull'orologio > Modifica data e ora",
    wrongAnswers: ["Doppio clic sull'orologio", "Tasto Canc", "Menu Start > Calendario"],
    hint: "Menu contestuale.",
    explanation: "Apre direttamente le impostazioni di sistema relative al tempo."
    
  },
  {
    id: 1194,
    question: "In Windows 11, per decomprimere un file .zip:",
    correctAnswer: "Tasto destro > Estrai tutto",
    wrongAnswers: ["Doppio clic e basta", "Cancella estensione", "Rinomina"],
    hint: "Tira fuori i file.",
    explanation: "Il comando Estrai tutto scompatta l'archivio in una cartella normale."
    
  },
  {
    id: 1195,
    question: "In Windows 11, per 'duplicare' un file si usano i comandi:",
    correctAnswer: "Copia e Incolla",
    wrongAnswers: ["Taglia e Incolla", "Cancella e Rifai", "Apri e Chiudi"],
    hint: "Crea un clone.",
    explanation: "Copia mantiene l'originale, Incolla crea il duplicato."
    
  },
  {
    id: 1196,
    question: "In Windows 11, per 'spostare' un file si usano i comandi:",
    correctAnswer: "Taglia e Incolla",
    wrongAnswers: ["Copia e Incolla", "Elimina e Recupera", "Trascina nel cestino"],
    hint: "Cambia posizione.",
    explanation: "Taglia rimuove l'originale dalla posizione di partenza."
    
  },
  {
    id: 1197,
    question: "In Windows 11, la scorciatoia Alt + Tab serve a:",
    correctAnswer: "passare rapidamente da una finestra aperta all'altra",
    wrongAnswers: ["chiudere tutto", "aprire il menu start", "spegnere il pc"],
    hint: "Switch.",
    explanation: "Apre il commutatore di attività per cambiare applicazione."
  },
  {
    id: 1198,
    question: "In Word, per selezionare l'intera tabella:",
    correctAnswer: "Clic sul quadratino con le frecce nell'angolo in alto a sinistra della tabella",
    wrongAnswers: ["Clic al centro", "Ctrl + T", "Doppio clic"],
    hint: "Maniglia di spostamento.",
    explanation: "L'icona a croce nell'angolo della tabella permette di selezionarla interamente con un clic."
    
  },
  {
    id: 1199,
    question: "La combinazione di tasti Maiusc + Fine serve a:",
    correctAnswer: "selezionare il testo dalla posizione del cursore fino alla fine della riga",
    wrongAnswers: ["andare a fine documento", "cancellare la riga", "selezionare tutto"],
    hint: "Selezione orizzontale.",
    explanation: "Estende la selezione corrente fino al terminatore di riga."
    
  },
  {
    id: 1200,
    question: "La connessione ADSL utilizza:",
    correctAnswer: "il doppino telefonico tradizionale",
    wrongAnswers: ["la fibra di vetro", "l'antenna parabolica", "il cavo elettrico"],
    hint: "Linea del telefono.",
    explanation: "Sfrutta le frequenze alte della linea telefonica in rame esistente."
    
  },
  {
    id: 1201,
    question: "La 'One Button Authentication' (notifica push) chiede di:",
    correctAnswer: "confermare l'accesso toccando 'Sì' o 'Approva' sullo smartphone",
    wrongAnswers: ["inserire un codice lungo", "scansionare un documento", "chiamare un numero"],
    hint: "Un tocco.",
    explanation: "Metodo di 2FA semplice che richiede solo la conferma su un dispositivo affidabile."
    
  },
  {
    id: 1202,
    question: "Le organizzazioni CERT si occupano di:",
    correctAnswer: "raccogliere segnalazioni di incidenti e vulnerabilità informatiche",
    wrongAnswers: ["vendere computer", "certificare siti web", "creare virus"],
    hint: "Computer Emergency Response Team.",
    explanation: "Gestiscono le emergenze di sicurezza e diffondono avvisi sulle minacce."
    
  },
  {
    id: 1203,
    question: "Le stampanti laser usano:",
    correctAnswer: "Toner (polvere)",
    wrongAnswers: ["Cartucce a inchiostro liquido", "Nastri", "Cera"],
    hint: "Non inchiostro.",
    explanation: "Il toner è una polvere fine che viene fusa sulla carta tramite calore."
    
  },
  {
    id: 1204,
    question: "Le tabulazioni servono a:",
    correctAnswer: "incolonnare il testo in posizioni precise sulla riga",
    wrongAnswers: ["andare a capo", "cambiare pagina", "fare elenchi puntati"],
    hint: "Allineamento verticale.",
    explanation: "Definiscono i punti di arresto del cursore quando si preme il tasto Tab."
    
  },
  {
    id: 1205,
    question: "Lo scanner serve a:",
    correctAnswer: "digitalizzare documenti cartacei o foto",
    wrongAnswers: ["stampare", "ascoltare musica", "proiettare video"],
    hint: "Da carta a file.",
    explanation: "Converte l'immagine fisica in un file digitale (es. JPG, PDF)."
    
  },
  {
    id: 1206,
    question: "L'AGID (Agenzia per l'Italia Digitale) si occupa di:",
    correctAnswer: "coordinare la trasformazione digitale della Pubblica Amministrazione italiana",
    wrongAnswers: ["vendere software", "riparare computer", "gestire i social network"],
    hint: "Digitale statale.",
    explanation: "Ente tecnico che vigila e promuove l'innovazione digitale nel settore pubblico."
    
  },
  {
    id: 1207,
    question: "L'opzione 'Riavvicinato' (Wrap Text) in Word serve a:",
    correctAnswer: "far scorrere il testo intorno all'immagine seguendone i contorni",
    wrongAnswers: ["mettere il testo sopra l'immagine", "nascondere l'immagine", "mettere l'immagine in fondo"],
    hint: "Testo avvolgente.",
    explanation: "Adatta il testo alla forma dell'immagine per un layout più integrato."
    
  },
  {
    id: 1208,
    question: "MacOS è il sistema operativo dei computer:",
    correctAnswer: "Macintosh (Apple)",
    wrongAnswers: ["Dell", "HP", "Lenovo"],
    hint: "Mela.",
    explanation: "Sistema operativo proprietario installato sui computer Apple Mac."
    
  },
  {
    id: 1209,
    question: "Mentre la presentazione è in corso, per andare avanti si può:",
    correctAnswer: "Cliccare col tasto sinistro del mouse (o premere Spazio/Freccia destra)",
    wrongAnswers: ["Premere Esc", "Premere F1", "Spegnere il monitor"],
    hint: "Avanza.",
    explanation: "Comando base per procedere alla slide o animazione successiva."
    
  },
  {
    id: 1210,
    question: "Molti contenuti sul web sono protetti da:",
    correctAnswer: "Copyright (Diritto d'autore)",
    wrongAnswers: ["Password segrete", "Virus", "Niente"],
    hint: "Proprietà intellettuale.",
    explanation: "Non tutto ciò che è online è liberamente utilizzabile senza permesso."
    
  },
  {
    id: 1211,
    question: "Nel gruppo 'Regola' di Formato Immagine, 'Correzioni' serve a:",
    correctAnswer: "modificare nitidezza, luminosità e contrasto",
    wrongAnswers: ["tagliare l'immagine", "ruotare l'immagine", "mettere una cornice"],
    hint: "Migliora la foto.",
    explanation: "Permette di aggiustare la qualità visiva dell'immagine."
    
  },
  {
    id: 1212,
    question: "La pagina SERP di Google è:",
    correctAnswer: "la pagina dei risultati della ricerca (Search Engine Results Page)",
    wrongAnswers: ["la home page", "la pagina di login", "la pagina delle impostazioni"],
    hint: "L'elenco dei link.",
    explanation: "È la pagina che appare dopo aver premuto Invio su una ricerca."
    
  },
  {
    id: 1213,
    question: "In Android, la sezione 'Aggiornamenti disponibili' nel Play Store mostra:",
    correctAnswer: "le app che hanno una nuova versione pronta per l'installazione",
    wrongAnswers: ["le notizie del giorno", "i nuovi telefoni in vendita", "i messaggi ricevuti"],
    hint: "Update.",
    explanation: "Elenca le applicazioni che richiedono un aggiornamento."
    
  },
  {
    id: 1214,
    question: "Nell'app Posta, 'Invia risposte solo ai contatti' (Risposte automatiche) serve a:",
    correctAnswer: "evitare di rispondere automaticamente a spam o sconosciuti",
    wrongAnswers: ["rispondere a tutti", "non rispondere a nessuno", "cancellare le mail"],
    hint: "Privacy fuori sede.",
    explanation: "Limita la risposta automatica alla sola rubrica per sicurezza."
    
  },
  {
    id: 1215,
    question: "In Word, l'opzione 'Riga totale' nelle tabelle:",
    correctAnswer: "aggiunge una riga in fondo con formattazione speciale (spesso per totali)",
    wrongAnswers: ["cancella la tabella", "evidenzia la prima riga", "ordina i dati"],
    hint: "Piede della tabella.",
    explanation: "Attivabile dagli strumenti tabella per evidenziare i risultati finali."
    
  },
  {
    id: 1216,
    question: "In Excel, per aggiungere una nuova colonna tra la L e la M:",
    correctAnswer: "Seleziona la colonna M e clicca Inserisci",
    wrongAnswers: ["Seleziona la L e clicca Inserisci", "Clicca tra le lettere", "Non si può"],
    hint: "Inserisce a sinistra.",
    explanation: "Excel inserisce sempre a sinistra della selezione."
    
  },
  {
    id: 1217,
    question: "Per eliminare una forma da un organigramma:",
    correctAnswer: "Selezionala (bordo) e premi Canc",
    wrongAnswers: ["Usa la gomma", "Scrivici sopra", "Chiudi il file"],
    hint: "Delete.",
    explanation: "Rimuove il riquadro selezionato dalla struttura."
    
  },
  {
    id: 1218,
    question: "Per modificare i dati in una cella Excel:",
    correctAnswer: "Fai doppio clic sulla cella o premi F2",
    wrongAnswers: ["Premi Canc", "Premi Esc", "Fai un solo clic"],
    hint: "Modalità modifica.",
    explanation: "Permette di editare il contenuto senza sovrascriverlo."
    
  },
  {
    id: 1219,
    question: "Per selezionare più celle NON adiacenti in Excel:",
    correctAnswer: "Tieni premuto Ctrl mentre clicchi",
    wrongAnswers: ["Tieni premuto Maiusc", "Tieni premuto Alt", "Usa le frecce"],
    hint: "Selezione sparsa.",
    explanation: "Ctrl permette di aggiungere singole celle alla selezione."
    
  },
  {
    id: 1220,
    question: "Per spostarsi nella cella superiore in Excel:",
    correctAnswer: "Maiusc + Invio",
    wrongAnswers: ["Invio", "Tab", "Maiusc + Tab"],
    hint: "Su.",
    explanation: "Inverte la direzione standard di Invio (che va giù)."
    
  },
  {
    id: 1221,
    question: "Per verificare se un sito è autentico, si controlla:",
    correctAnswer: "Il certificato di sicurezza (lucchetto)",
    wrongAnswers: ["Il colore del sito", "Le immagini", "Il numero di pagine"],
    hint: "HTTPS.",
    explanation: "Il certificato garantisce l'identità del server."
    
  },
  {
    id: 1222,
    question: "Qual è il tasto per cancellare il carattere dopo il cursore?",
    correctAnswer: "Canc (Delete)",
    wrongAnswers: ["Backspace", "Invio", "Shift"],
    hint: "Cancella a destra.",
    explanation: "Rimuove il carattere successivo."
    
  },
  {
    id: 1223,
    question: "Quale combinazione di tasti SALVA il file?",
    correctAnswer: "Ctrl + S (o Ctrl + B in italiano)",
    wrongAnswers: ["Ctrl + C", "Ctrl + V", "Ctrl + P"],
    hint: "Save.",
    explanation: "Comando universale di salvataggio."
  },
  {
    id: 1224,
    question: "Quale pulsante interrompe un'operazione (es. presentazione)?",
    correctAnswer: "Esc",
    wrongAnswers: ["Invio", "Alt", "F1"],
    hint: "Escape.",
    explanation: "Esce dalla modalità corrente o annulla il comando."
    
  },
  {
    id: 1225,
    question: "In Word, l'errore ortografico è segnato con:",
    correctAnswer: "una linea ondulata rossa",
    wrongAnswers: ["una linea blu", "una linea verde", "un cerchio"],
    hint: "Spelling.",
    explanation: "Indica una parola non trovata nel dizionario."
    
  },
  {
    id: 1226,
    question: "Quale stile è meglio usare per parole straniere?",
    correctAnswer: "Corsivo",
    wrongAnswers: ["Grassetto", "Sottolineato", "Barrato"],
    hint: "Italic.",
    explanation: "Convenzione tipografica standard per i forestierismi."
    
  },
  {
    id: 1227,
    question: "Quale grafico usa barre verticali?",
    correctAnswer: "Istogramma",
    wrongAnswers: ["Torta", "Linee", "Dispersione"],
    hint: "Colonne.",
    explanation: "Rappresenta i dati con rettangoli verticali."
    
  },
  {
    id: 1228,
    question: "Quale dispositivo è di OUTPUT?",
    correctAnswer: "Stampante",
    wrongAnswers: ["Scanner", "Tastiera", "Mouse"],
    hint: "Produce risultato.",
    explanation: "Emette i dati dal computer su carta."
    
  },
  {
    id: 1229,
    question: "Linux è un sistema operativo:",
    correctAnswer: "Open Source",
    wrongAnswers: ["Proprietario", "A pagamento", "Chiuso"],
    hint: "Codice libero.",
    explanation: "Il codice sorgente è liberamente accessibile e modificabile."
    
  },
  {
    id: 1230,
    question: "Cosa permette di riconoscere il tipo di file?",
    correctAnswer: "L'estensione (es. .docx)",
    wrongAnswers: ["Il nome", "La dimensione", "La data"],
    hint: "Suffisso.",
    explanation: "Indica al sistema quale programma usare per aprirlo."
    
  },
  {
    id: 1231,
    question: "Per aggiungere un nuovo foglio in Excel:",
    correctAnswer: "Clicca sul pulsante + in basso",
    wrongAnswers: ["File > Nuovo", "Non si può", "Tasto destro > Elimina"],
    hint: "Accanto alle schede.",
    explanation: "Crea immediatamente un foglio vuoto."
    
  },
  {
    id: 1232,
    question: "È possibile eliminare un'intera colonna in Excel?",
    correctAnswer: "Sì, sempre",
    wrongAnswers: ["No", "Solo se vuota", "Solo le righe"],
    hint: "Tasto destro > Elimina.",
    explanation: "Rimuove la colonna e sposta le altre a sinistra."
    
  },
  {
    id: 1233,
    question: "In Gmail, il pulsante Ccn serve a:",
    correctAnswer: "inviare una copia nascosta (gli altri non vedono l'indirizzo)",
    wrongAnswers: ["inviare a tutti visibilmente", "cancellare la mail", "salvare in bozze"],
    hint: "Privacy destinatari.",
    explanation: "Nasconde l'elenco dei riceventi in questo campo."
    
  },
  {
    id: 1234,
    question: "In Gmail, la posta eliminata va nel:",
    correctAnswer: "Cestino",
    wrongAnswers: ["Spam", "Bozze", "Posta inviata"],
    hint: "Recuperabile per 30 giorni.",
    explanation: "Area temporanea per i messaggi cancellati."
    
  },
  {
    id: 1235,
    question: "Per chiudere una scheda in Chrome:",
    correctAnswer: "Clicca sulla X della scheda",
    wrongAnswers: ["Clicca sulla pagina", "Premi Invio", "Spegni il monitor"],
    hint: "Chiudi tab.",
    explanation: "Chiude la singola pagina web aperta."
    
  },
  {
    id: 1236,
    question: "I pulsanti Avanti e Indietro nel browser servono a:",
    correctAnswer: "navigare tra le pagine visitate recentemente",
    wrongAnswers: ["cambiare sito", "cancellare cronologia", "stampare"],
    hint: "Frecce.",
    explanation: "Spostano nella cronologia della scheda corrente."
    
  },
  {
    id: 1237,
    question: "In Google Meet, per cambiare layout:",
    correctAnswer: "Altre opzioni (tre puntini) > Modifica layout",
    wrongAnswers: ["Chiudi chiamata", "Spegni microfono", "Non si può"],
    hint: "Mosaico, Barra laterale.",
    explanation: "Permette di scegliere come vedere i partecipanti."
    
  },
  {
    id: 1238,
    question: "In Word, per proteggere il file:",
    correctAnswer: "File > Informazioni > Proteggi documento > Crittografia con password",
    wrongAnswers: ["Mettere il PC in cassaforte", "Nascondere il file", "Rinomina"],
    hint: "Password di apertura.",
    explanation: "Impedisce l'apertura del file senza la parola chiave."
    
  },
  {
    id: 1239,
    question: "In PowerPoint, è possibile mettere un suono al cambio slide?",
    correctAnswer: "Sì, nella scheda Transizioni > Suono",
    wrongAnswers: ["No", "Solo musica intera", "Solo video"],
    hint: "Effetto audio.",
    explanation: "Associa un breve suono (clic, vento, ecc.) alla transizione."
    
  },
  {
    id: 1240,
    question: "In Windows 11, i dischi rigidi sono indicati con:",
    correctAnswer: "Lettere dell'alfabeto (C:, D:)",
    wrongAnswers: ["Numeri", "Colori", "Nomi di città"],
    hint: "C: è il principale.",
    explanation: "Convenzione di denominazione delle unità di memoria."
    
  },
  {
    id: 1241,
    question: "In Windows 11, l'analisi personalizzata antivirus:",
    correctAnswer: "permette di scegliere quali cartelle controllare",
    wrongAnswers: ["controlla tutto a caso", "non fa nulla", "cancella tutto"],
    hint: "Scelta utente.",
    explanation: "Scansione mirata su file o directory specifici."
    
  },
  {
    id: 1242,
    question: "La diapositiva Titolo ha:",
    correctAnswer: "due segnaposto (Titolo e Sottotitolo)",
    wrongAnswers: ["nessun segnaposto", "solo immagini", "10 caselle"],
    hint: "Copertina.",
    explanation: "Layout standard per la prima slide della presentazione."
    
  }
];
