import { Question } from './types';

export const CUSTOM_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "A cosa serve il tasto Invio sulla tastiera?",
    correctAnswer: "Per andare a capo o confermare",
    wrongAnswers: ["Per aprire il menu Start", "Per salvare il file", "Per cancellare il testo"],
    hint: "Questo tasto viene spesso utilizzato per confermare azioni o creare nuove righe.",
    explanation: "Il tasto Invio (Enter) serve principalmente per andare a capo durante la digitazione o per confermare comandi e azioni nei programmi."
  },
  {
    id: 2,
    question: "Cosa significa 'incollare' un file?",
    correctAnswer: "Inserire un file copiato o tagliato in una posizione",
    wrongAnswers: ["Eliminare un file", "Comprimere un file", "Aprire un file"],
    hint: "È l'operazione che segue 'copia' o 'taglia'.",
    explanation: "Incollare significa inserire un contenuto precedentemente copiato o tagliato nella posizione corrente del cursore o in una cartella selezionata."
  },
  {
    id: 3,
    question: "Cosa succede cliccando su 'Nuovo > Cartella' con il tasto destro?",
    correctAnswer: "Si crea una nuova cartella",
    wrongAnswers: ["Si apre una cartella", "Si cancella la cartella", "Si rinomina una cartella"],
    hint: "È un'opzione che appare nel menu contestuale.",
    explanation: "Cliccando con il tasto destro in uno spazio vuoto di una cartella o del desktop e selezionando 'Nuovo > Cartella', si crea una nuova cartella con nome modificabile."
  },
  {
    id: 4,
    question: "Cosa rappresenta l'icona della forbice in un menu contestuale?",
    correctAnswer: "Taglia",
    wrongAnswers: ["Incolla", "Elimina", "Copia"],
    hint: "Le forbici tagliano, non copiano.",
    explanation: "L'icona delle forbice rappresenta l'azione 'Taglia', che rimuove l'elemento selezionato per poterlo incollare altrove."
  },
  {
    id: 5,
    question: "Dove si clicca per vedere i file salvati nel computer?",
    correctAnswer: "Esplora file",
    wrongAnswers: ["Browser", "Gmail", "Word"],
    hint: "Si tratta di un'applicazione che mostra tutte le cartelle e i file del sistema.",
    explanation: "L'Esplora file (o File Explorer su Windows) è il programma che permette di navigare tra tutte le cartelle e i file memorizzati nel computer."
  },
  {
    id: 6,
    question: "Quale combinazione di tasti consente di incollare un elemento?",
    correctAnswer: "CTRL + V",
    wrongAnswers: ["CTRL + X", "CTRL + Z", "CTRL + B"],
    hint: "La V sta per 'paste' in inglese.",
    explanation: "CTRL+V è la combinazione universale per incollare contenuti precedentemente copiati o tagliati."
  },
  {
    id: 7,
    question: "A cosa serve il tasto 'Spazio'?",
    correctAnswer: "Per aggiungere uno spazio tra parole",
    wrongAnswers: ["Per inviare un'email", "Per stampare", "Per cancellare parole"],
    hint: "È il tasto più lungo sulla tastiera.",
    explanation: "Il tasto spazio inserisce uno spazio tra caratteri o parole durante la digitazione."
  },
  {
    id: 8,
    question: "Come si collega un computer a una rete Wi-Fi?",
    correctAnswer: "Cliccando sull'icona del Wi-Fi e scegliendo la rete",
    wrongAnswers: ["Aggiungendo un file", "Aprendo la calcolatrice", "Accedendo a Gmail"],
    hint: "L'icona del Wi-Fi si trova solitamente nell'angolo in basso a destra dello schermo.",
    explanation: "Per connettersi a una rete Wi-Fi, si clicca sull'icona della connessione di rete, si sceglie la rete desiderata e si inserisce la password se richiesta."
  },
  {
    id: 9,
    question: "Dove si trovano i file scaricati da internet?",
    correctAnswer: "Nella cartella Download",
    wrongAnswers: ["Nel desktop", "In Documenti", "In Cestino"],
    hint: "La cartella ha un nome inglese che significa 'scaricare'.",
    explanation: "Per impostazione predefinita, i browser salvano i file scaricati dalla rete nella cartella 'Download' del computer."
  },
  {
    id: 10,
    question: "Come si sposta un file con il mouse?",
    correctAnswer: "Trascinandolo",
    wrongAnswers: ["Premendo ALT + F4", "Cliccando due volte", "Premendo Esc"],
    hint: "Si tiene premuto il tasto sinistro del mouse mentre si muove il file.",
    explanation: "Per spostare un file con il mouse, si clicca su di esso tenendo premuto il tasto sinistro e lo si trascina nella destinazione desiderata."
  },
  {
    id: 11,
    question: "Qual è la funzione di un browser?",
    correctAnswer: "Permettere la navigazione su internet",
    wrongAnswers: ["Installare programmi", "Scrivere email", "Modificare foto"],
    hint: "Programmi come Chrome, Firefox e Safari sono esempi di browser.",
    explanation: "Un browser web è un software che consente di visualizzare pagine web e navigare su internet."
  },
  {
    id: 12,
    question: "Che cos'è un motore di ricerca?",
    correctAnswer: "Un sito che trova informazioni sul web",
    wrongAnswers: ["Un programma antivirus", "Un'app di messaggistica", "Un tipo di computer"],
    hint: "Google è il più famoso esempio di questo strumento.",
    explanation: "Un motore di ricerca è un sito web che permette di cercare informazioni nel vasto archivio di pagine web presenti su internet."
  },
  {
    id: 13,
    question: "Dove si scrive un indirizzo internet?",
    correctAnswer: "Nella barra degli indirizzi",
    wrongAnswers: ["Nel desktop", "Nel motore di ricerca", "Nella posta elettronica"],
    hint: "Si trova nella parte superiore del browser.",
    explanation: "La barra degli indirizzi (o URL bar) è lo spazio in cima al browser dove si inseriscono gli indirizzi dei siti web da visitare."
  },
  {
    id: 14,
    question: "Cosa fa un motore di ricerca quando scrivi una parola?",
    correctAnswer: "Mostra siti pertinenti a quella parola",
    wrongAnswers: ["Manda un'email", "Cancella la cronologia", "Installa applicazioni"],
    hint: "Analizza milioni di pagine web per trovare quelle più rilevanti.",
    explanation: "I motori di ricerca analizzano il loro indice di pagine web per trovare e mostrare i risultati più pertinenti rispetto alle parole chiave inserite."
  },
  {
    id: 15,
    question: "Cosa indica il lucchetto accanto a un URL?",
    correctAnswer: "Che la connessione è sicura (HTTPS)",
    wrongAnswers: ["Che è protetto da password", "Che il sito è offline", "Che è un sito vietato"],
    hint: "Il lucchetto indica che i dati scambiati sono crittografati.",
    explanation: "Il simbolo del lucchetto indica che la connessione al sito è protetta con HTTPS, il che significa che i dati scambiati sono crittografati e più sicuri."
  },
  {
    id: 16,
    question: "Qual è un esempio di motore di ricerca?",
    correctAnswer: "Google",
    wrongAnswers: ["Chrome", "Word", "Firefox"],
    hint: "È il motore di ricerca più utilizzato al mondo.",
    explanation: "Google è il motore di ricerca più popolare, ma esistono anche altri come Bing, Yahoo e DuckDuckGo."
  },
  {
    id: 17,
    question: "Come riconosci un link (collegamento ipertestuale)?",
    correctAnswer: "È spesso sottolineato e di colore blu",
    wrongAnswers: ["È sempre una parola lunga", "È evidenziato in rosso", "È scritto in grassetto"],
    hint: "Cambia aspetto quando ci passi sopra con il mouse.",
    explanation: "I collegamenti ipertestuali sono solitamente visualizzati in blu e sottolineati per distinguerli dal testo normale, e cambiano colore dopo essere stati cliccati."
  },
  {
    id: 18,
    question: "Cos'è un cookie?",
    correctAnswer: "Un file che memorizza le preferenze di navigazione",
    wrongAnswers: ["Un errore di sistema", "Un'applicazione", "Un backup del computer"],
    hint: "Non è un biscotto, ma un piccolo file di testo.",
    explanation: "I cookie sono piccoli file di testo che i siti web salvano sul tuo computer per ricordare preferenze, login e altre informazioni sulla tua navigazione."
  },
  {
    id: 19,
    question: "Come si effettua una ricerca di immagini su internet?",
    correctAnswer: "Andando su Google Immagini e scrivendo l'argomento",
    wrongAnswers: ["Aprendo il desktop", "Premendo CTRL + I", "Scrivendo su Word"],
    hint: "Google ha una sezione specifica per la ricerca di immagini.",
    explanation: "Per cercare immagini su internet, si può visitare Google Immagini (images.google.com) e inserire le parole chiave relative all'immagine desiderata."
  },
  {
    id: 20,
    question: "Cosa si intende per misinformazione?",
    correctAnswer: "Informazione errata diffusa per errore",
    wrongAnswers: ["Messaggio automatico", "Informazione falsa deliberata", "Notizia ufficiale"],
    hint: "Si distingue dalla disinformazione, che è intenzionale.",
    explanation: "La misinformazione è la diffusione non intenzionale di informazioni false o inaccurate, a differenza della disinformazione che è deliberata."
  },
  {
    id: 21,
    question: "Cos'è un account Google?",
    correctAnswer: "Un profilo che dà accesso a diversi servizi Google",
    wrongAnswers: ["Un programma da installare", "Un file", "Un antivirus"],
    hint: "Serve per accedere a Gmail, YouTube, Drive e altri servizi.",
    explanation: "Un account Google è un profilo utente che permette di accedere a tutti i servizi Google con un'unica email e password."
  },
  {
    id: 22,
    question: "Come si accede a Gmail?",
    correctAnswer: "Visitando gmail.com e inserendo le credenziali",
    wrongAnswers: ["Cliccando su Word", "Accedendo a Google Maps", "Premendo ESC"],
    hint: "È un servizio di posta elettronica gratuito di Google.",
    explanation: "Per accedere a Gmail si visita il sito gmail.com e si inserisce l'email e la password del proprio account Google."
  },
  {
    id: 23,
    question: "Cosa contiene la cartella 'Spam'?",
    correctAnswer: "Email indesiderate o potenzialmente pericolose",
    wrongAnswers: ["Contatti", "Bozze", "Email inviate"],
    hint: "Viene anche chiamata 'posta indesiderata'.",
    explanation: "La cartella Spam contiene email che il sistema di posta ha identificato come indesiderate, pubblicitarie o potenzialmente pericolose."
  },
  {
    id: 24,
    question: "Cosa si scrive nel campo 'A' in una nuova email?",
    correctAnswer: "L'indirizzo email del destinatario",
    wrongAnswers: ["Il testo del messaggio", "La firma", "Il mittente"],
    hint: "È il campo dove inserire a chi inviare l'email.",
    explanation: "Il campo 'A' (To in inglese) è dove si inserisce l'indirizzo email della persona a cui si vuole inviare il messaggio."
  },
  {
    id: 25,
    question: "Cosa si scrive nel campo 'Oggetto'?",
    correctAnswer: "Un breve riassunto del contenuto dell'email",
    wrongAnswers: ["La firma", "Il testo intero", "Il nome del file"],
    hint: "Aiuta il destinatario a capire di cosa tratta l'email prima di aprirla.",
    explanation: "L'oggetto dell'email è una breve descrizione che permette al destinatario di capire rapidamente il contenuto del messaggio."
  },
  {
    id: 26,
    question: "Cosa fa il pulsante 'Scrivi' in Gmail?",
    correctAnswer: "Apre una finestra per comporre una nuova email",
    wrongAnswers: ["Stampa una email", "Salva la posta", "Cerca nei messaggi"],
    hint: "Di solito si trova in alto a sinistra nell'interfaccia di Gmail.",
    explanation: "Il pulsante 'Scrivi' (o 'Componi') apre una nuova finestra dove scrivere e inviare un'email."
  },
  {
    id: 27,
    question: "A cosa serve il campo CCN?",
    correctAnswer: "Per inviare copie nascoste ad altri destinatari",
    wrongAnswers: ["Per inviare SMS", "Per stampare", "Per ricevere email"],
    hint: "CCN sta per 'Copia Conoscenza Nascosta'.",
    explanation: "Il campo CCN (o BCC in inglese) permette di inviare una copia dell'email a destinatari aggiuntivi senza che gli altri destinatari possano vederli."
  },
  {
    id: 28,
    question: "Come si allega un file a una email?",
    correctAnswer: "Cliccando sull'icona della graffetta",
    wrongAnswers: ["Con il tasto F12", "Scrivendolo nel testo", "Trascinandolo su Google"],
    hint: "L'icona rappresenta una graffetta per attaccare documenti.",
    explanation: "Per allegare un file a un'email, si clicca sull'icona a forma di graffetta e si seleziona il file dal computer."
  },
  {
    id: 29,
    question: "Dove trovi le email che stai ancora scrivendo ma non hai inviato?",
    correctAnswer: "In Bozze",
    wrongAnswers: ["In Posta inviata", "In Archivio", "In Spam"],
    hint: "Vengono salvate automaticamente mentre le scrivi.",
    explanation: "Le email non completate e salvate automaticamente o manualmente si trovano nella cartella 'Bozze' (Drafts in inglese)."
  },
  {
    id: 30,
    question: "Cosa fa la funzione 'Rispondi'?",
    correctAnswer: "Permette di scrivere una risposta al mittente",
    wrongAnswers: ["Inoltra la mail", "Invia una copia", "Chiude Gmail"],
    hint: "Si usa per rispondere direttamente alla persona che ti ha scritto.",
    explanation: "La funzione 'Rispondi' apre una nuova email precompilata con l'indirizzo del mittente originale, permettendo di rispondere direttamente al messaggio ricevuto."
  },
  {
    id: 31,
    question: "Cosa permette di fare Google Traduttore?",
    correctAnswer: "Tradurre testi, parole, frasi e documenti",
    wrongAnswers: ["Telefonare", "Modificare PDF", "Salvare musica"],
    hint: "Supporta centinaia di lingue diverse.",
    explanation: "Google Traduttore è uno strumento gratuito che traduce testo, frasi, documenti e pagine web tra più di 100 lingue."
  },
  {
    id: 32,
    question: "Come si accede a Google Traduttore?",
    correctAnswer: "Visitando translate.google.com",
    wrongAnswers: ["Cercando in Word", "Accedendo a Gmail", "Usando Excel"],
    hint: "Puoi anche cercare 'Google Traduttore' su un motore di ricerca.",
    explanation: "Google Traduttore è accessibile visitando il sito translate.google.com o tramite l'app mobile disponibile per iOS e Android."
  },
  {
    id: 33,
    question: "Cosa fa la funzione 'modalità conversazione' nell'app Google Traduttore?",
    correctAnswer: "Traduce due lingue in tempo reale durante un dialogo",
    wrongAnswers: ["Scrive email", "Ripete parole", "Converte file audio"],
    hint: "È utile per conversazioni faccia a faccia con persone che parlano lingue diverse.",
    explanation: "La modalità conversazione di Google Traduttore ascolta e traduce automaticamente il parlato tra due lingue, facilitando la comunicazione in tempo reale."
  },
  {
    id: 34,
    question: "Cosa si può fare con la fotocamera nell'app Google Traduttore?",
    correctAnswer: "Tradurre il testo inquadrato",
    wrongAnswers: ["Fare video", "Creare mappe", "Scattare foto per Gmail"],
    hint: "Utile per tradurre cartelli, menu o documenti stampati.",
    explanation: "La funzione fotocamera di Google Traduttore permette di inquadrare testo stampato e vederne la traduzione sovrapposta in tempo reale."
  },
  {
    id: 35,
    question: "A cosa serve il microfono in Google Traduttore?",
    correctAnswer: "Per tradurre un discorso orale",
    wrongAnswers: ["Per fare videochiamate", "Per registrare lezioni", "Per ascoltare musica"],
    hint: "Converte la voce in testo e poi lo traduce.",
    explanation: "Il microfono in Google Traduttore permette di parlare nella lingua di partenza e ottenere immediatamente la traduzione scritta o parlata nella lingua di arrivo."
  },
  {
    id: 36,
    question: "Come tradurre un documento in Google Traduttore?",
    correctAnswer: "Caricandolo nella sezione 'Documenti' del sito",
    wrongAnswers: ["Aprendolo con Word", "Trascinandolo nel desktop", "Scrivendolo a mano"],
    hint: "Supporta documenti in vari formati come .docx, .pdf e .txt.",
    explanation: "Per tradurre un intero documento, si può caricare il file nella sezione 'Documenti' di Google Traduttore, che manterrà la formattazione originale il più possibile."
  },
  {
    id: 37,
    question: "Cosa permette la funzione 'Traduzione offline' Google Traduttore?",
    correctAnswer: "Usare il traduttore senza internet",
    wrongAnswers: ["Scrivere email", "Scaricare video", "Modificare file audio"],
    hint: "Bisogna scaricare prima le lingue necessarie quando si ha connessione.",
    explanation: "La traduzione offline permette di usare Google Traduttore anche senza connessione internet, dopo aver scaricato i pacchetti linguistici necessari."
  },
  {
    id: 38,
    question: "Quale lingua viene riconosciuta automaticamente da Google Traduttore?",
    correctAnswer: "La lingua scritta nel testo incollato",
    wrongAnswers: ["L'inglese", "La lingua del computer", "Quella selezionata in Gmail"],
    hint: "Rileva automaticamente la lingua di origine del testo inserito.",
    explanation: "Google Traduttore riconosce automaticamente la lingua del testo inserito, ma è possibile anche specificarla manualmente se necessario."
  },
  {
    id: 39,
    question: "Dove si trovano le traduzioni salvate di Google Traduttore?",
    correctAnswer: "Nel proprio account Google",
    wrongAnswers: ["Nel desktop", "In Google Meet", "Nella calcolatrice"],
    hint: "Se accedi con il tuo account, puoi salvare le traduzioni per consultarle successivamente.",
    explanation: "Le traduzioni salvate in Google Traduttore vengono memorizzate nel proprio account Google e sono accessibili da qualsiasi dispositivo con lo stesso account."
  },
  {
    id: 40,
    question: "Cosa accade se clicchi l'icona dell'altoparlante su Google Traduttore?",
    correctAnswer: "Ascolti la pronuncia del testo",
    wrongAnswers: ["Lo traduci in PDF", "Lo copi", "Lo stampi"],
    hint: "Utile per imparare la corretta pronuncia delle parole.",
    explanation: "Cliccando sull'icona dell'altoparlante si attiva la sintesi vocale che legge ad alta voce il testo tradotto, aiutando a imparare la pronuncia corretta."
  },
  {
    id: 41,
    question: "A cosa serve Google Meet?",
    correctAnswer: "Per effettuare videochiamate",
    wrongAnswers: ["Per tradurre testi", "Per leggere email", "Per creare grafici"],
    hint: "È l'alternativa di Google a Zoom o Skype.",
    explanation: "Google Meet è un servizio di videoconferenza che permette di effettuare videochiamate individuali o di gruppo, con funzionalità per riunioni e lezioni online."
  },
  {
    id: 42,
    question: "Cosa si inserisce per partecipare a una riunione in Google Meet?",
    correctAnswer: "Il codice della riunione o il link",
    wrongAnswers: ["Il nome del browser", "La password email", "Il numero di telefono"],
    hint: "L'organizzatore della riunione condivide questo codice o link con i partecipanti.",
    explanation: "Per unirsi a una riunione Google Meet, è necessario inserire il codice o il link univoco fornito dall'organizzatore della riunione."
  },
  {
    id: 43,
    question: "Cosa permette la funzione 'Presenta' in Google Meet?",
    correctAnswer: "Condividere lo schermo con gli altri partecipanti",
    wrongAnswers: ["Bloccare utenti", "Registrare audio", "Aumentare il volume"],
    hint: "Utile per mostrare presentazioni, documenti o applicazioni durante la riunione.",
    explanation: "La funzione 'Presenta' permette di condividere l'intero schermo, una finestra specifica o una scheda del browser con tutti i partecipanti alla riunione."
  },
  {
    id: 44,
    question: "Dove puoi scrivere messaggi durante una riunione in Google Meet?",
    correctAnswer: "Nella chat di Google Meet",
    wrongAnswers: ["Nella barra indirizzi", "In Gmail", "Nel campo Oggetto"],
    hint: "Permette di comunicare tramite testo senza interrompere chi parla.",
    explanation: "Google Meet include una chat testuale dove i partecipanti possono scrivere messaggi, condividere link e comunicare senza interrompere la conversazione principale."
  },
  {
    id: 45,
    question: "Cosa accade cliccando su 'Termina chiamata' in Google Meet?",
    correctAnswer: "Esci dalla videochiamata",
    wrongAnswers: ["Attivi la registrazione", "Blocchi il microfono", "Chiudi il documento"],
    hint: "È il pulsante rosso che interrompe la tua partecipazione alla riunione.",
    explanation: "Cliccando su 'Termina chiamata' si esce dalla riunione Google Meet, interrompendo la propria partecipazione alla videochiamata."
  },
  {
    id: 46,
    question: "Come si avvia Microsoft Word?",
    correctAnswer: "Cercando 'Word' dal menu Start",
    wrongAnswers: ["Dal browser", "Accedendo a Gmail", "Aprendo PowerPoint"],
    hint: "Su Windows, si può cercare nel menu Start o nella barra di ricerca.",
    explanation: "Microsoft Word si avvia cercandolo nel menu Start di Windows, dalla barra delle applicazioni se è aggiunto, o facendo doppio clic su un documento Word esistente."
  },
  {
    id: 47,
    question: "Cosa fa il correttore ortografico in Word?",
    correctAnswer: "Segnala parole con errori",
    wrongAnswers: ["Traduce frasi", "Modifica la grammatica", "Aggiunge sinonimi"],
    hint: "Sottolinea in rosso le parole che non riconosce.",
    explanation: "Il correttore ortografico di Word identifica e segnala le parole scritte in modo errato sottolineandole in rosso, suggerendo anche correzioni."
  },
  {
    id: 48,
    question: "Come si cambia il colore del testo in Word?",
    correctAnswer: "Cliccando sull'icona 'A' con barra colorata",
    wrongAnswers: ["Usando il tasto ESC", "Scrivendo in grassetto", "Premendo Backspace"],
    hint: "L'icona si trova nella scheda Home, nella sezione Carattere.",
    explanation: "Per cambiare il colore del testo in Word, si seleziona il testo e si clicca sull'icona a forma di 'A' con una barra colorata sotto, scegliendo poi il colore desiderato."
  },
  {
    id: 49,
    question: "Dove trovi il comando 'Grassetto' in Word?",
    correctAnswer: "Nella scheda Home",
    wrongAnswers: ["Nella barra degli indirizzi", "In File > Salva", "In Inserisci > Tabella"],
    hint: "È rappresentato da una 'B' maiuscola in grassetto.",
    explanation: "Il comando Grassetto (rappresentato dalla lettera 'B' in grassetto) si trova nella scheda Home di Word, nella sezione dedicata alla formattazione del carattere."
  },
  {
    id: 50,
    question: "A cosa serve la funzione 'Salva con nome' in Word?",
    correctAnswer: "Per salvare il file con un nuovo nome o formato",
    wrongAnswers: ["Per stampare il documento", "Per inviarlo via email", "Per chiudere Word"],
    hint: "Utile quando vuoi creare una copia del documento senza sovrascrivere l'originale.",
    explanation: "'Salva con nome' permette di salvare un documento con un nome diverso, in una posizione diversa o in un formato diverso, preservando l'originale."
  },
  {
    id: 51,
    question: "Come si inserisce un'immagine in un documento Word?",
    correctAnswer: "Tramite la scheda Inserisci",
    wrongAnswers: ["Tramite la scheda Home", "Usando il menu File", "Usando il tasto destro del mouse"],
    hint: "Cerca l'opzione 'Immagini' o 'Foto' in questa scheda.",
    explanation: "Per inserire un'immagine in Word, si va nella scheda Inserisci e si clicca su 'Immagini' per selezionare un file dal computer o su 'Immagini online' per cercare nel web."
  },
  {
    id: 52,
    question: "Quale formato file usa Word per impostazione predefinita?",
    correctAnswer: ".docx",
    wrongAnswers: [".txt", ".pdf", ".xlsx"],
    hint: "È un formato introdotto con Office 2007.",
    explanation: "Word salva i documenti per impostazione predefinita nel formato .docx, che è un formato XML compresso che supporta funzionalità avanzate."
  },
  {
    id: 53,
    question: "Come si crea un elenco puntato in Word?",
    correctAnswer: "Scheda Home > Elenchi puntati",
    wrongAnswers: ["Scheda Inserisci > Elenco puntato", "Scheda Layout > Elenco puntato", "Scheda Revisione > Elenco puntato"],
    hint: "Cerca l'icona con i puntini o i numeri nella scheda Home.",
    explanation: "Per creare un elenco puntato in Word, si seleziona il testo e si clicca sull'icona degli elenchi puntati nella scheda Home, nella sezione Paragrafo."
  },
  {
    id: 54,
    question: "Come si apre la modalità revisione per tracciare modifiche in Word?",
    correctAnswer: "Scheda Revisione > Traccia modifiche",
    wrongAnswers: ["Scheda Home > Modifica", "Scheda Visualizza > Revisione", "Scheda File > Opzioni"],
    hint: "Utile per collaborare e vedere chi ha fatto quali modifiche.",
    explanation: "La funzione 'Traccia modifiche' si attiva dalla scheda Revisione e permette di vedere tutte le modifiche apportate al documento, mostrando chi le ha fatte e quando."
  },
  {
    id: 55,
    question: "Come si aggiunge un'intestazione a tutte le pagine in Word?",
    correctAnswer: "Scheda Inserisci > Intestazione",
    wrongAnswers: ["Scheda Layout > Intestazione", "Scheda Revisione > Intestazione", "Scheda Home > Intestazione"],
    hint: "Le intestazioni appaiono nella parte superiore di ogni pagina.",
    explanation: "Per aggiungere un'intestazione che appare su tutte le pagine, si va nella scheda Inserisci e si clicca su 'Intestazione', scegliendo uno stile o creandone una personalizzata."
  },
  {
    id: 56,
    question: "Come si inserisce una tabella nel documento in Word?",
    correctAnswer: "Scheda Inserisci > Tabella",
    wrongAnswers: ["Scheda Home > Tabella", "Scheda Layout > Tabella", "Scheda Revisione > Tabella"],
    hint: "Puoi scegliere il numero di righe e colonne con una griglia.",
    explanation: "Per inserire una tabella in Word, si va nella scheda Inserisci, si clicca su 'Tabella' e si seleziona il numero di righe e colonne desiderato dalla griglia."
  },
  {
    id: 57,
    question: "Come si stampa un documento Word?",
    correctAnswer: "Scheda File > Stampa",
    wrongAnswers: ["Scheda Home > Stampa", "Scheda Revisione > Stampa", "Scheda Inserisci > Stampa"],
    hint: "Da qui puoi anche vedere l'anteprima di stampa.",
    explanation: "Per stampare un documento Word, si clicca sulla scheda File e si seleziona 'Stampa', dove si possono impostare le opzioni di stampa e vedere l'anteprima."
  },
  {
    id: 58,
    question: "Come si cambia l'allineamento del testo in Word?",
    correctAnswer: "Scheda Home > Paragrafo",
    wrongAnswers: ["Scheda Layout > Allineamento", "Scheda Inserisci > Allineamento", "Scheda Revisione > Paragrafo"],
    hint: "Cerca le icone con le linee allineate a sinistra, centro, destra o giustificate.",
    explanation: "Per allineare il testo in Word, si seleziona il testo e si usano i pulsanti di allineamento (sinistra, centro, destra, giustificato) nella scheda Home, sezione Paragrafo."
  },
  {
    id: 59,
    question: "Cosa fa la funzione 'Trova e sostituisci' in Word?",
    correctAnswer: "Trova parole e le modifica automaticamente",
    wrongAnswers: ["Trova errori grammaticali", "Trova immagini", "Trova file nel computer"],
    hint: "Utile per correggere errori ripetuti o cambiare termini in tutto il documento.",
    explanation: "'Trova e sostituisci' permette di cercare una parola o frase specifica nel documento e sostituirla automaticamente con un'altra, in tutto il documento o solo in parti selezionate."
  },
  {
    id: 60,
    question: "Como si aggiunge un commento a una selezione di testo in Word?",
    correctAnswer: "Scheda Revisione > Nuovo commento",
    wrongAnswers: ["Scheda Inserisci > Commento", "Scheda Home > Commento", "Scheda Layout > Commento"],
    hint: "I commenti appaiono a margine del documento.",
    explanation: "Per aggiungere un commento in Word, si seleziona il testo a cui si riferisce il commento e si clicca su 'Nuovo commento' nella scheda Revisione."
  },
  {
    id: 61,
    question: "Cosa significa 'aggiornare' un programma?",
    correctAnswer: "Installare una versione più recente",
    wrongAnswers: ["Cambiare il colore dello sfondo", "Eliminare il programma", "Riavviare il computer"],
    hint: "Gli aggiornamenti spesso correggono bug e aggiungono nuove funzionalità.",
    explanation: "Aggiornare un programma significa installare una versione più recente che tipicamente include correzioni di bug, miglioramenti di sicurezza e nuove funzionalità."
  },
  {
    id: 62,
    question: "Cosa fa il tasto 'ESC' sulla tastiera?",
    correctAnswer: "Annulla o chiude un'azione",
    wrongAnswers: ["Apre un file", "Copia un testo", "Aumenta il volume"],
    hint: "È l'abbreviazione di 'Escape' (fuga).",
    explanation: "Il tasto ESC (Escape) viene comunemente usato per annullare un'operazione, chiudere un menu o uscire da una modalità a schermo intero."
  },
  {
    id: 63,
    question: "Cosa succede svuotando il Cestino del computer?",
    correctAnswer: "I file vengono eliminati definitivamente",
    wrongAnswers: ["I file vengono spostati in Documenti", "I file vengono archiviati", "I file vengono compressi"],
    hint: "Dopo questa operazione, i file sono difficili da recuperare.",
    explanation: "Svuotare il Cestino elimina definitivamente i file in esso contenuti, liberando spazio sul disco. Questa operazione è generalmente irreversibile senza software speciali."
  },
  {
    id: 64,
    question: "Quale di questi è un sistema operativo?",
    correctAnswer: "Windows",
    wrongAnswers: ["Microsoft Word", "Google Chrome", "Gmail"],
    hint: "È il software fondamentale che gestisce l'hardware del computer.",
    explanation: "Windows è un sistema operativo, mentre Word, Chrome e Gmail sono applicazioni che funzionano su un sistema operativo."
  },
  {
    id: 65,
    question: "A cosa serve la barra delle applicazioni?",
    correctAnswer: "A mostrare i programmi aperti",
    wrongAnswers: ["A scrivere testi", "A collegarsi a internet", "A cancellare file"],
    hint: "Di solito si trova nella parte inferiore dello schermo.",
    explanation: "La barra delle applicazioni (taskbar) mostra i programmi attualmente aperti e fornisce accesso rapido ad applicazioni, menu Start e area di notifica."
  },
  {
    id: 66,
    question: "Cosa indica un'icona sul desktop?",
    correctAnswer: "Un collegamento a un programma o file",
    wrongAnswers: ["Un'immagine decorativa", "Un virus", "Una finestra aperta"],
    hint: "Facendo doppio clic sull'icona si avvia il programma o si apre il file.",
    explanation: "Le icone sul desktop rappresentano generalmente collegamenti (shortcut) a programmi, file o cartelle, permettendo un accesso rapido."
  },
  {
    id: 67,
    question: "Cosa significa 'scaricare' un file da internet?",
    correctAnswer: "Salvare una copia sul proprio dispositivo",
    wrongAnswers: ["Creare un file", "Eliminare un file online", "Inviare un'email"],
    hint: "Il file viene trasferito da un server remoto al tuo computer.",
    explanation: "Scaricare (download) significa trasferire un file da un server su internet al proprio computer o dispositivo mobile per poterlo usare localmente."
  },
  {
    id: 68,
    question: "Che cos'è un allegato?",
    correctAnswer: "Un file inviato insieme a un'email",
    wrongAnswers: ["Una cartella di sistema", "Un'immagine di sfondo", "Un link internet"],
    hint: "Può essere un documento, una foto, un video o qualsiasi altro tipo di file.",
    explanation: "Un allegato (attachment) è un file che viene inviato insieme a un'email, permettendo di condividere documenti, immagini e altri file."
  },
  {
    id: 69,
    question: "Cosa indica l'icona del cestino pieno?",
    correctAnswer: "Ci sono file eliminati al suo interno",
    wrongAnswers: ["Il cestino è vuoto", "Il computer è spento", "Il disco è pieno"],
    hint: "Quando è pieno, di solito l'icona mostra dei fogli di carta al suo interno.",
    explanation: "L'icona del Cestino pieno indica che contiene file eliminati che occupano spazio sul disco e possono essere recuperati o eliminati definitivamente."
  },
  {
    id: 70,
    question: "Come si ingrandisce una finestra sullo schermo?",
    correctAnswer: "Cliccando il quadrato in alto a destra",
    wrongAnswers: ["Premendo CTRL + S", "Usando il tasto Invio", "Cliccando col tasto destro"],
    hint: "Il quadrato si trova tra il trattino e la X.",
    explanation: "Per ingrandire una finestra a schermo intero, si clicca sul pulsante del quadrato (o due quadrati sovrapposti) nell'angolo in alto a destra della finestra."
  },
  {
    id: 71,
    question: "Cosa indica l'estensione di un file (.docx, .jpg, .pdf)?",
    correctAnswer: "Il tipo di file",
    wrongAnswers: ["Il nome dell'autore", "La data di creazione", "La posizione nel computer"],
    hint: "Le estensioni di solito hanno 3 o 4 lettere dopo il punto.",
    explanation: "L'estensione di un file (le lettere dopo il punto) indica il formato o tipo di file, determinando quale programma può aprirlo e come i dati sono organizzati al suo interno."
  },
  {
    id: 72,
    question: "Qual è la funzione del tasto 'CTRL + Z'?",
    correctAnswer: "Annullare l'ultima azione",
    wrongAnswers: ["Ripetere un'azione", "Salvare il documento", "Stampare"],
    hint: "È la combinazione universale per 'annulla' nella maggior parte dei programmi.",
    explanation: "CTRL+Z è la combinazione di tasti universale per annullare l'ultima operazione eseguita, permettendo di correggere errori rapidamente."
  },
  {
    id: 73,
    question: "Come si chiude un programma in uso?",
    correctAnswer: "Premendo ALT + F4",
    wrongAnswers: ["Premendo CTRL + V", "Cliccando col tasto destro", "Premendo F5"],
    hint: "Questa combinazione chiude la finestra attiva.",
    explanation: "ALT+F4 è la combinazione di tasti per chiudere la finestra attiva o il programma corrente su sistemi Windows."
  },
  {
    id: 74,
    question: "Cosa indica una password forte?",
    correctAnswer: "Una combinazione di lettere, numeri e simboli",
    wrongAnswers: ["Solo lettere minuscole", "Nome e cognome dell'utente", "Una parola semplice"],
    hint: "Più è complessa e lunga, più è sicura.",
    explanation: "Una password forte combina lettere maiuscole e minuscole, numeri e simboli speciali, ed è sufficientemente lunga per resistere a tentativi di violazione."
  },
  {
    id: 75,
    question: "Cosa significa 'login'?",
    correctAnswer: "Accedere a un account",
    wrongAnswers: ["Creare un file", "Stampare una pagina", "Spegnere il computer"],
    hint: "Di solito richiede nome utente e password.",
    explanation: "Il login (o accesso) è il processo di identificazione che permette a un utente di accedere a un account o sistema inserendo credenziali come nome utente e password."
  },
  {
    id: 76,
    question: "Come si chiama la pagina iniziale di un sito web?",
    correctAnswer: "Home page",
    wrongAnswers: ["Footer", "Barra laterale", "Menu file"],
    hint: "È la pagina principale a cui si arriva digitando solo il nome del sito.",
    explanation: "La home page è la pagina principale di un sito web, che tipicamente fornisce un'introduzione al sito e collegamenti alle sue diverse sezioni."
  },
  {
    id: 77,
    question: "Cosa fa la funzione 'Aggiorna' del browser?",
    correctAnswer: "Ricarica la pagina",
    wrongAnswers: ["Chiude il sito", "Cancella la cronologia", "Apre una nuova finestra"],
    hint: "L'icona è di solito una freccia circolare.",
    explanation: "La funzione 'Aggiorna' (o 'Ricarica') del browser ricarica la pagina web corrente, aggiornando il contenuto e risolvendo a volte problemi di visualizzazione."
  },
  {
    id: 78,
    question: "Cosa si intende per 'cloud'?",
    correctAnswer: "Un sistema di archiviazione online",
    wrongAnswers: ["Un tipo di connessione Wi-Fi", "Un antivirus", "Un'app di messaggistica"],
    hint: "I tuoi file sono memorizzati su server remoti accessibili via internet.",
    explanation: "Il cloud (nuvola) si riferisce a servizi di archiviazione e elaborazione dati online, dove i file sono memorizzati su server remoti invece che localmente sul proprio dispositivo."
  },
  {
    id: 79,
    question: "Cosa indica la barra di avanzamento durante un download?",
    correctAnswer: "Lo stato di completamento del download",
    wrongAnswers: ["Il tempo di inattività", "Il numero di file aperti", "La qualità del file"],
    hint: "Mostra quanto del file è già stato scaricato.",
    explanation: "La barra di avanzamento durante un download mostra visivamente la percentuale di completamento del trasferimento del file dal server al proprio dispositivo."
  },
  {
    id: 80,
    question: "Cosa succede se clicchi su un link con il tasto destro?",
    correctAnswer: "Si apre un menu con diverse opzioni",
    wrongAnswers: ["Si apre il sito web", "Si chiude il browser", "Si copia automaticamente il link"],
    hint: "Il menu contestuale offre opzioni come 'Apri in nuova scheda' o 'Copia indirizzo'.",
    explanation: "Cliccando su un link con il tasto destro del mouse si apre un menu contestuale con varie opzioni, come aprire il link in una nuova scheda, copiare l'indirizzo o salvare il collegamento."
  },
  {
    id: 81,
    question: "Che cos'è un file PDF?",
    correctAnswer: "Un formato di documento leggibile ma non facilmente modificabile",
    wrongAnswers: ["Un'immagine modificabile", "Un programma di calcolo", "Un video"],
    hint: "Mantiene la formattazione originale su qualsiasi dispositivo.",
    explanation: "PDF (Portable Document Format) è un formato di file che mantiene la formattazione originale di un documento rendendolo leggibile su qualsiasi dispositivo, ma non facilmente modificabile senza software specifico."
  },
  {
    id: 82,
    question: "Come si fa uno screenshot in Windows?",
    correctAnswer: "Premendo il tasto Stamp",
    wrongAnswers: ["Premendo F1", "Premendo CTRL + C", "Premendo ALT + TAB"],
    hint: "Poi si incolla in un programma come Paint o Word.",
    explanation: "Premendo il tasto Stamp (o Print Screen) su Windows si cattura un'immagine dello schermo che può poi essere incollata in un programma di grafica o di elaborazione testi."
  },
  {
    id: 83,
    question: "Cosa succede cliccando su un link sospetto?",
    correctAnswer: "Potresti accedere a un sito pericoloso",
    wrongAnswers: ["Si apre una pagina sicura", "Si apre Word", "Si installa un aggiornamento"],
    hint: "Potrebbe portare a phishing, malware o truffe.",
    explanation: "Cliccare su link sospetti può portare a siti pericolosi che tentano di rubare informazioni personali, installare malware o truffare gli utenti."
  },
  {
    id: 84,
    question: "Cosa serve un antivirus?",
    correctAnswer: "A proteggere da software dannosi",
    wrongAnswers: ["A velocizzare il computer", "A installare giochi", "A cancellare la cronologia"],
    hint: "Scansiona i file alla ricerca di virus, malware e altre minacce.",
    explanation: "Un software antivirus protegge il computer rilevando, prevenendo e rimuovendo software dannosi come virus, malware, spyware e ransomware."
  },
  {
    id: 85,
    question: "Come si chiama la barra in basso in Word che mostra le pagine e il conteggio parole?",
    correctAnswer: "Barra di stato",
    wrongAnswers: ["Barra delle applicazioni", "Barra degli strumenti", "Barra del titolo"],
    hint: "Mostra anche la lingua e lo zoom della pagina.",
    explanation: "La barra di stato in Word si trova nella parte inferiore della finestra e mostra informazioni come il numero di pagina, il conteggio delle parole, la lingua e il livello di zoom."
  },
  {
    id: 86,
    question: "Cosa si fa con il tasto destro del mouse?",
    correctAnswer: "Si apre un menu contestuale",
    wrongAnswers: ["Si seleziona testo", "Si avvia un programma", "Si spegne il computer"],
    hint: "Il menu cambia a seconda di dove si clicca.",
    explanation: "Il tasto destro del mouse apre un menu contestuale con opzioni specifiche per l'elemento cliccato, come file, testo o area del desktop."
  },
  {
    id: 87,
    question: "Qual è il simbolo di un collegamento internet sicuro?",
    correctAnswer: "Lucchetto chiuso",
    wrongAnswers: ["Triangolo giallo", "Punto esclamativo", "Freccia blu"],
    hint: "Di solito appare accanto all'URL nella barra degli indirizzi.",
    explanation: "Il lucchetto chiuso nella barra degli indirizzi del browser indica che la connessione al sito è sicura e crittografata (HTTPS)."
  },
  {
    id: 88,
    question: "Dove si trovano i file eliminati di recente?",
    correctAnswer: "Nel Cestino",
    wrongAnswers: ["Nella cartella Download", "In Documenti", "Nella barra delle applicazioni"],
    hint: "È un'area di transizione prima dell'eliminazione definitiva.",
    explanation: "I file eliminati di recente vengono spostati nel Cestino, dove rimangono fino a quando non vengono ripristinati o eliminati definitivamente svuotando il Cestino."
  },
  {
    id: 89,
    question: "Cosa fa la combinazione CTRL + P?",
    correctAnswer: "Stampa il documento",
    wrongAnswers: ["Copia testo", "Annulla un'azione", "Incolla testo"],
    hint: "Apre la finestra di dialogo per la stampa.",
    explanation: "CTRL+P è la combinazione di tasti universale per aprire la finestra di dialogo di stampa nella maggior parte dei programmi."
  },
  {
    id: 90,
    question: "Cosa indica una connessione Wi-Fi con poche tacche?",
    correctAnswer: "Segnale debole",
    wrongAnswers: ["Segnale ottimo", "Nessuna connessione", "Batteria scarica"],
    hint: "Meno tacche ci sono, più debole è il segnale.",
    explanation: "Le tacche dell'icona Wi-Fi indicano la forza del segnale: poche tacche significano segnale debole, che può causare connessione lenta o instabile."
  }
];