# Pagina Personale Accademica (GitHub Pages)

Questa cartella contiene la pagina accademica personale, pronta per essere pubblicata su GitHub Pages. Il layout e lo stile sono progettati appositamente per **Lorenzo Abatescianni**, dottorando al 1° anno presso il **Computational Intelligence Laboratory (CILAB)**, Dipartimento di Informatica, Università degli Studi di Bari Aldo Moro.

---

## 🌟 Caratteristiche Principali

- **Design Accademico Moderno & Pulito**: Layout a griglia su desktop (sidebar sticky a sinistra, contenuti a destra) e responsive per smartphone e tablet.
- **Tema Chiaro & Scuro (Dark Mode)**: Selettore del tema con icona Sole/Luna, persistenza automatica della preferenza in `localStorage` e nessuna transizione sgradevole al caricamento.
- **Profilo & Social Icone**:
  - Foto avatar circolare con bordatura delicata
  - Nome: **Lorenzo Abatescianni**
  - Ruolo: *Ph.D. Student in Computer Science and Mathematics*
  - Laboratorio: *Computational Intelligence Lab (CILAB)* (link a `http://cilab.di.uniba.it`)
  - Affiliazione: *University of Bari Aldo Moro* (link a `uniba.it`)
  - Email: `l.abatescianni@phd.uniba.it`
  - Icone social e professionali (GitHub, LinkedIn, selettore tema Chiaro/Scuro)
- **Timeline Notizie (News)**:
  - Inizio del Dottorato di Ricerca al CILAB (1 Ottobre 2026)
  - Laurea Magistrale in Computer Science (AI) (Settembre 2026)
  - Laurea Triennale in ITPS (Luglio 2024)
  - Pulsante automatico *"Show more / Show less"*
- **Ricerca, Dottorato & Tesi (Research & Projects)**:
  - **Progetto di Dottorato (2026–2029)**: *"Knowledge-Driven Neuro-Symbolic AI for Data Integration and Diagnostics in Railway Systems"* (Iniziato il 1 Ottobre 2026; Tutor: Prof.ssa Giovanna Castellano, Prof. Gennaro Vessio, Dott. Pasquale De Marinis) con diagramma architetturale, abstract e BibTeX.
  - **Tesi di Laurea Magistrale**: *"Computer Vision Techniques for Flower Phenotyping"* (Settembre 2026, Relatori: Prof. Gennaro Vessio, Dott. Pasquale De Marinis) con diagramma e abstract.
  - **Tesi di Laurea Triennale**: *"Un algoritmo di change-detection basato sulla decomposizione di Tucker"* (Luglio 2024, Relatrice: Prof.ssa Antonella Falini) con diagramma e abstract.
  - Box informativo per future pubblicazioni.
- **Formazione (Education)**:
  - Dottorato in Informatica e Matematica (2026–2029, 1° Anno), CILAB - Università di Bari
  - Laurea Magistrale in Computer Science (Artificial Intelligence) (2024–2026, Conclusa a Settembre 2026)
  - Laurea Triennale in Informatica e Tecnologie per la Produzione del Software (ITPS) (2021–2024, Conclusa a Luglio 2024)
- **Nessuna dipendenza da build o Ruby/Jekyll complessi**: Funziona direttamente come HTML/CSS/JS statico su GitHub Pages (basta fare push sul repository!).

---

## 📁 Struttura della Cartella

```text
.
├── index.html                   # Pagina principale (HTML semantico e SEO-ready)
├── README.md                    # Questa guida
└── assets/
    ├── css/
    │   ├── style.css            # Stili base, layout a griglia, sidebar, news timeline, dark mode
    │   └── publications.css     # Stili pubblicazioni, teaser, badge, BibTeX, carosello
    ├── js/
    │   ├── theme.js             # Gestore dark/light mode con persistenza
    │   ├── news.js              # Espansione e compressione dinamica delle notizie
    │   ├── pubs-carousel.js     # Navigazione carosello orizzontale
    │   └── main.js              # Accordion BibTeX e copia negli appunti
    ├── img/
    │   ├── avatar.png           # Foto profilo (sostituibile con la tua foto)
    │   ├── avatar_alt.png       # Avatar alternativo
    │   ├── favicon.svg          # Favicon vettoriale per tema chiaro
    │   ├── favicon-dark.svg     # Favicon vettoriale per tema scuro
    │   ├── phd_railway.png      # Diagramma scientifico: Progetto di Dottorato (Neuro-Symbolic Railway AI)
    │   ├── flower_phenotyping.png # Diagramma scientifico: Tesi Magistrale (Flower Phenotyping)
    │   └── tucker_tensor.png    # Diagramma scientifico: Tesi Triennale (Tucker Decomposition)
    └── files/               # Documenti e file allegati
```

---

## ✏️ Come Personalizzare i Contenuti

Tutti i testi e i link si modificano direttamente aprendo `index.html`:

1. **Dati di Contatto**:
   - `l.abatescianni@phd.uniba.it` (già impostata).
2. **Foto Profilo**:
   - Aggiorna `assets/img/avatar.png` con una tua nuova foto se desideri cambiarla in futuro.
3. **Link ai Social / Profili Accademici**:
   - I link reali sono già configurati nella sezione `.social-icons`:
     - GitHub (`https://github.com/DaCrow13`)
     - LinkedIn (`https://www.linkedin.com/in/lorenzo-abatescianni-912995317`)
5. **Sezioni "About Me", "Research Interests", "News", "Publications"**:
   - Modifica i paragrafi e le liste secondo i tuoi progetti, articoli e interessi di ricerca.

---

## 🚀 Come Pubblicare la Pagina su GitHub Pages

Per avere l'indirizzo pubblico **`https://<tuo-username>.github.io`**:

1. Accedi a [GitHub.com](https://github.com) e crea un nuovo repository pubblico chiamato esattamente:
   ```text
   <tuo-username>.github.io
   ```
   *(Sostituisci `<tuo-username>` con il tuo vero nome utente GitHub)*.

2. Carica tutti i file di questa cartella (`index.html`, la cartella `assets/` e il `README.md`) nel repository appena creato.
   - Puoi usare **GitHub Desktop**, **VS Code**, oppure trascinarli direttamente dal browser cliccando su **"Add file" -> "Upload files"**.

3. Nel repository su GitHub:
   - Vai in **Settings** (in alto a destra).
   - Nel menu laterale a sinistra, clicca su **Pages**.
   - Sotto la sezione **"Build and deployment"**, assicurati che:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` (o `master`) e cartella `/ (root)`
   - Clicca su **Save**.

4. Entro pochi minuti la pagina sarà visibile all'indirizzo:
   `https://<tuo-username>.github.io/`

---

## 💻 Come Visualizzare la Pagina in Locale

Puoi visualizzare la pagina sul tuo computer in due modi:

1. **Doppio Click**:
   Fai semplicemente doppio click sul file `index.html` per aprirlo in Google Chrome, Microsoft Edge o Firefox.

2. **Server Locale (Consigliato)**:
   Apri il terminale in questa cartella e avvia il server Python con:
   ```bash
   python -m http.server 8000
   ```
   Poi apri il browser all'indirizzo: [http://localhost:8000](http://localhost:8000).
