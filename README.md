# Nicolas Wegerer Visuals Studio Website

Website-Stand: **V18.2 Connected Studio**

## Plattformen
- macOS
- iPhone
- iPad
- WidgetKit Widgets

## V18.2
- Creator Workflow: Import → Bearbeiten → Lightroom → Caption → Preview → Planen / Veröffentlichen
- Visual Editor Pro+ mit Smart Enhance, Favoriten, eigenen Presets, Format-Crops und Exportqualität
- Instagram Activity Center mit automatischer Aktualisierung und Wischgesten
- Canon Camera Center für geführte EOS-Verbindungs- und Import-Workflows
- DJI Media Center für DJI Fly, DJI GO 4, DJI GO und DJI Mimo Workflows
- Visuals Studio Widgets in Small, Medium, Large und Sperrbildschirm-Variante
- iCloud / CloudKit für private Studio-Synchronisierung
- App Groups für gemeinsamen Datenstand zwischen App und Widget
- APNs / Push Notifications technisch vorbereitet
- Mac Studio, iPhone, iPad und Website auf gemeinsamer V18.2 Versionslinie

## Apple Developer / Connected Studio
Visuals Studio wird über das **Apple Developer Program** entwickelt. Dadurch können Apple-Technologien wie CloudKit, App Groups, WidgetKit und APNs für die App eingesetzt werden.

Visuals Studio ist ein unabhängiges Projekt und wird nicht von Apple, Canon, DJI, Meta oder Adobe betrieben oder unterstützt.

## Datenschutz / externe Abhängigkeiten
- Kein eigener Visuals-Studio-Datenspeicher-Server für reguläre Studio-Daten
- iCloud-/CloudKit-Daten liegen in der privaten iCloud-Datenbank des jeweiligen Apple-Accounts
- Instagram-Funktionen hängen von den verfügbaren Meta-API-/Webhook-Rechten ab
- Echte Instagram-Pushs benötigen zusätzlich die Serverkette Meta Webhook → HTTPS → APNs
- Canon- und DJI-Funktionen hängen von Modell, Firmware sowie den verfügbaren Hersteller-Apps/APIs/SDKs ab
