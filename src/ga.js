// src/ga.js
export function initGA(router) {
  if(!window.dataLayer) {
    window.dataLayer = [];
  }

  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-2NHQFXQYVB', { send_page_view: false });

  // envoyer un page_view à chaque changement de route
  router.afterEach((to) => {
    gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title
    });
  });
}
