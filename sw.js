self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
});

self.addEventListener('fetch', (event) => {
  console.log('Requisitando:', event.request.url);
});