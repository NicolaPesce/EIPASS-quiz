
import { Question } from './types';

// Data extracted from the provided EIPASS PDF content.
// Enhanced with Hints and Explanations.

export const QUESTION_DATABASE: Question[] = [
  // --- Existing Questions (1-30) ---
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

  // --- Questions (31-130) ---
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

  // --- Extended Questions (131-300) ---
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
  
  // --- New Questions (301-400) ---
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
  
  // --- New Questions (401-500) ---
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
  }
];
