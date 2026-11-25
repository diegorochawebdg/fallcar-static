(() => {
  const dl = (event, extra) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event }, extra || {}));
  };

  // Tracking por delegação: data-track="whatsapp_click" data-origem="hero"
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (!el) return;
    const extra = {};
    if (el.dataset.origem) extra.origem = el.dataset.origem;
    if (el.dataset.unidade) extra.unidade = el.dataset.unidade;
    dl(el.dataset.track, extra);
  });

  // Menu mobile
  const burger = document.querySelector('.burger');
  const mobileNav = document.getElementById('mobile-nav');
  if (burger && mobileNav) {
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      if (open) mobileNav.setAttribute('data-open', ''); else mobileNav.removeAttribute('data-open');
    };
    burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
    mobileNav.addEventListener('click', (e) => { if (e.target.tagName === 'A') setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // Menu de WhatsApp do topo (uma opção por unidade)
  const waMenu = document.querySelector('[data-wa-menu]');
  if (waMenu) {
    const btn = waMenu.querySelector('.wa-menu__btn');
    const list = waMenu.querySelector('.wa-menu__list');
    const setWa = (open) => { btn.setAttribute('aria-expanded', String(open)); list.hidden = !open; };
    btn.addEventListener('click', () => setWa(btn.getAttribute('aria-expanded') !== 'true'));
    list.addEventListener('click', (e) => { if (e.target.closest('a')) setWa(false); });
    document.addEventListener('click', (e) => { if (!waMenu.contains(e.target)) setWa(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setWa(false); });
  }

  // Botão flutuante depois do hero
  const fab = document.querySelector('.fab');
  if (fab) {
    const toggle = () => {
      if (window.scrollY > window.innerHeight * 0.7) fab.setAttribute('data-show', '');
      else fab.removeAttribute('data-show');
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  // Reveal no scroll
  const reveal = new IntersectionObserver((entries, obs) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.setAttribute('data-reveal', 'in');
      obs.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

  // Mapas só ao entrar em viewport
  const maps = document.querySelectorAll('[data-map]');
  if (maps.length) {
    const mapObs = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const holder = en.target;
        const frame = document.createElement('iframe');
        frame.src = holder.dataset.map;
        frame.title = holder.dataset.mapTitle;
        frame.loading = 'lazy';
        frame.referrerPolicy = 'no-referrer-when-downgrade';
        holder.appendChild(frame);
        obs.unobserve(holder);
      });
    }, { rootMargin: '200px' });
    maps.forEach((m) => mapObs.observe(m));
  }

  // Vídeo antes/depois: o rótulo troca no ponto de corte
  document.querySelectorAll('video[data-split]').forEach((v) => {
    const tag = v.parentElement.querySelector('[data-vtag]');
    const at = parseFloat(v.dataset.split) || 0;
    if (!tag) return;
    v.addEventListener('timeupdate', () => {
      const after = v.currentTime >= at;
      tag.textContent = after ? 'Depois' : 'Antes';
      tag.classList.toggle('tag--b', after);
      tag.classList.toggle('tag--a', !after);
    });
  });
  // Vídeos só tocam quando visíveis
  const vObs = new IntersectionObserver((es) => es.forEach((en) => { const v = en.target; if (en.isIntersecting) v.play().catch(() => {}); else v.pause(); }), { threshold: 0.25 });
  document.querySelectorAll('video[autoplay]').forEach((v) => vObs.observe(v));

  // Galeria: filtro por modelo
  const chips = document.querySelectorAll('.chip[data-filter]');
  chips.forEach((chip) => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    document.querySelectorAll('.shot').forEach((s) => { s.hidden = !(f === 'all' || s.dataset.cat === f); });
  }));

  // Orçamento rápido -> WhatsApp preenchido
  const form = document.getElementById('form-orcamento');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const servico = d.get('servico');
      const linhas = [
        'Olá, Fallcar! Quero um orçamento.',
        '',
        'Nome: ' + d.get('nome'),
        'WhatsApp: ' + d.get('fone'),
        'Veículo: ' + d.get('carro'),
        'Serviço: ' + servico
      ];
      if (d.get('desc')) linhas.push('Situação: ' + d.get('desc'));
      linhas.push('', 'Vou enviar as fotos em seguida.');
      dl('form_submit', { servico });
      const url = 'https://wa.me/' + form.dataset.whatsapp + '?text=' + encodeURIComponent(linhas.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
