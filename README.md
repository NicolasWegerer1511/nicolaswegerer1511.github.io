# Nicolas Wegerer Visuals Studio Website

Website-Stand: **V18.6 Pro Workflow**

## Plattformen
- macOS
- iPhone
- iPad
- WidgetKit Widgets

## Veröffentlichung
- Kein öffentlicher Direktdownload über die Website
- Keine öffentliche DMG-/PKG- oder TestFlight-Verteilung
- Spätere Veröffentlichung ausschließlich über den Apple App Store und Mac App Store

## V18.6
- Creator Workflow: Import → Studio Editor → Lightroom → Caption → Preview → Planen / Veröffentlichen
- **Studio Editor** als einheitliche Bezeichnung auf iPhone, iPad, Mac und Website
- Instagram Activity Center mit automatischer Aktualisierung und Wischgesten
- **Canon Quick Connect** als wichtiges Startseiten-Tool mit zwei klaren Schritten: Verbinden → Importieren
- DJI Media Center für DJI Fly, DJI GO 4, DJI GO und DJI Mimo Workflows
- Visuals Studio Widgets mit größenabhängigem Inhalt in Small, Medium und Large sowie Sperrbildschirm-Varianten
- Cloud Sync Test direkt in der App für iPhone ↔ iPad
- iCloud / CloudKit für private Studio-Synchronisierung
- App Groups für gemeinsamen Datenstand zwischen App und Widget
- APNs / Push Notifications technisch vorbereitet
- Mac Studio, iPhone, iPad und Website auf gemeinsamer V18.6 Versionslinie
- alte sichtbare V17-/Release-Candidate-Hinweise werden auf der Website bereinigt

## Apple Developer / Connected Studio
Visuals Studio wird über das **Apple Developer Program** entwickelt. Dadurch können Apple-Technologien wie CloudKit, App Groups, WidgetKit und APNs für die App eingesetzt werden.

Visuals Studio ist ein unabhängiges Projekt und wird nicht von Apple, Canon, DJI, Meta oder Adobe betrieben oder unterstützt.

## Cloud Sync testen
1. Auf dem iPhone einen eigenen Preset-Look speichern oder einen Planer-Eintrag anlegen.
2. In **Konto & iCloud** → **Test hochladen**.
3. Auf dem iPad mit derselben Apple-ID/iCloud Visuals Studio öffnen.
4. In **Konto & iCloud** → **Test laden**.
5. Wenn Preset oder Planer-Eintrag erscheint, funktioniert CloudKit.

## Datenschutz / externe Abhängigkeiten
- Kein eigener Visuals-Studio-Datenspeicher-Server für reguläre Studio-Daten
- iCloud-/CloudKit-Daten liegen in der privaten iCloud-Datenbank des jeweiligen Apple-Accounts
- Instagram-Funktionen hängen von den verfügbaren Meta-API-/Webhook-Rechten ab
- Echte Instagram-Pushs benötigen zusätzlich die Serverkette Meta Webhook → HTTPS → APNs
- Canon- und DJI-Funktionen hängen von Modell, Firmware sowie den verfügbaren Hersteller-Apps/APIs/SDKs ab
