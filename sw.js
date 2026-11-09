// Minimaler Service Worker, damit Chrome die Startseite als App installieren kann.
// Es wird nichts zwischengespeichert – das Formular läuft immer live über Google.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
