/* App ADM: busca a versão nova (espera até 4 s); sem internet ou internet lenta, usa a última salva. */
const CACHE = "adm-v4";
const BASE = ["./", "index.html", "dados.js", "config.js", "explicacoes.js", "regras.js", "manifest.json", "icone-192.png", "icone-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  const chave = u.origin + u.pathname;            // guarda sem o ?t=... (não enche o celular)
  e.respondWith((async () => {
    const ca = await caches.open(CACHE);
    const rede = fetch(e.request).then(r => { if (r.ok) ca.put(chave, r.clone()); return r; });
    const salvo = await ca.match(chave);
    if (!salvo) return rede.catch(() => new Response("Sem internet", { status: 503 }));
    const lento = new Promise(res => setTimeout(() => res(salvo), 4000));
    return Promise.race([rede.catch(() => salvo), lento]);
  })());
});
