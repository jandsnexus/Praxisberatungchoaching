/* =========================================================
   ZENTRALE KONFIGURATION
   ---------------------------------------------------------
   Das ist die EINZIGE Datei, die du bearbeiten musst, um die
   Website + das Admin-Dashboard "scharf" zu schalten.
   ========================================================= */

window.APP_CONFIG = {

  /* 1) Zugangscode fürs Admin-Dashboard (admin.html).
        Bitte in etwas Eigenes ändern. */
  accessCode: "1234",


  /* 2) Firebase-Anbindung.
        --------------------------------------------------
        Bleibt "null"  => DEMO-MODUS:
        Buchungen werden nur im jeweiligen Browser gespeichert.
        Gut zum Ansehen/Testen, NICHT für echte Kundenbuchungen.

        Für ECHTE, geräteübergreifende Buchungen:
        1. Kostenloses Projekt auf https://console.firebase.google.com anlegen
        2. Firestore-Datenbank aktivieren
        3. Web-App hinzufügen und die angezeigte Config hierher kopieren
        4. Das "null" unten durch das Config-Objekt ersetzen, z. B.:

        firebase: {
          apiKey: "AIza....",
          authDomain: "dein-projekt.firebaseapp.com",
          projectId: "dein-projekt",
          storageBucket: "dein-projekt.appspot.com",
          messagingSenderId: "1234567890",
          appId: "1:1234567890:web:abcdef"
        }
     -------------------------------------------------- */
  firebase: null

};
