# Treningslogg — installasjon (engangsjobb, ~10 min)

1. Opprett konto på github.com (gratis) om du ikke har.
2. Klikk "+" → **New repository** → navn f.eks. `treningslogg` → Public → Create.
3. **Add file → Upload files** → dra inn ALLE filene i denne mappen
   (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, apple-touch-icon.png) → Commit.
4. **Settings → Pages** → Source: "Deploy from a branch" → Branch: main, / (root) → Save.
5. Vent 1–2 min. URL: https://DITTBRUKERNAVN.github.io/treningslogg/
6. Åpne URL-en i **Safari** på iPhone → Del-knappen → **Legg til på Hjem-skjerm**.

Appen kjører nå frittstående, offline, med varig lagring (localStorage) på telefonen.
Ta "Eksporter" innimellom som backup (lagres som .json i Filer).

Endre programmet senere: rediger PROGRAMS-objektet øverst i index.html direkte på GitHub → Commit → appen oppdateres ved neste åpning.
