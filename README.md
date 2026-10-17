# SarrDigital

Sito vetrina per **SarrDigital** — servizi digitali per strutture ricettive e piccole imprese:

- Siti web per strutture ricettive (hotel, B&B, affittacamere)
- Sistemi di prenotazione diretti (booking engine senza commissioni OTA)
- Gestionali personalizzati
- Traduzione e localizzazione
- Branding e identità visiva
- Consulenza e supporto

Il posizionamento è orientato a far risparmiare ai gestori le commissioni delle OTA, spostando le prenotazioni sul canale diretto.

## Struttura

```
index.html       # landing page completa
css/style.css    # stile (palette: prugna #502D55 / malva #935073 / pesca #F6DBC0 / crema #F8F4E9, font Sora + Inter)
js/main.js       # menu mobile, calcolatore commissioni OTA, reveal on scroll, form contatti
```

## Uso in locale

Nessuna build necessaria: aprire `index.html` nel browser oppure

```bash
python3 -m http.server 8000
# poi visita http://localhost:8000
```

Il form contatti è currently lato client (validazione + conferma): collegarlo a un servizio di invio email (es. Formspree, Resend) prima della pubblicazione.

## Personalizzazione

- Dati reali (email, P.IVA, telefono) da inserire in `index.html` (sezione contatti e footer)
- Le sezioni sono indipendenti: si possono riordinare o rimuovere senza toccare il CSS
