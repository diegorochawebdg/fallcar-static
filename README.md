# Fallcar — site estático (Astro)

Saída 100% estática. `npm run build` gera `dist/` — sobe em Netlify, Vercel, Cloudflare Pages, S3 ou qualquer hospedagem de arquivos.

## Rodar

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # atualiza o feed + gera dist/

## Feed do Instagram (JSON estático)

Fonte única: `src/data/instagram.json`. É lido em tempo de build — o site publicado não faz nenhuma chamada à API do Instagram.

Formato:

    {
      "updatedAt": "2026-08-01T09:00:00-03:00",
      "posts": [
        { "image": "/img/instagram/01.webp", "caption": "...", "permalink": "https://...", "date": "2026-07-30" }
      ]
    }

Atualizar:

1. **Manual** — edite o JSON e coloque as imagens em `public/img/instagram/`. Commit → o deploy refaz o build.
2. **Automático** — `npm run feed` (`scripts/fetch-instagram.mjs`) busca os últimos posts pela Graph API, baixa as imagens para `public/img/instagram/` e reescreve o JSON. Precisa de `IG_USER_ID` e `IG_TOKEN` no ambiente. Rode num cron diário (GitHub Action) que commita o resultado e dispara o rebuild.

Se o JSON estiver vazio ou ausente, a seção renderiza o estado de fallback — nunca aparece quebrada.

## Imagens

Coloque em `public/img/` no formato WebP:

- `hero.webp` — foto principal
- `servico-teto-solar.webp`, `servico-tapecaria.webp`, `servico-higienizacao.webp`
- `antes-depois/1-antes.webp` … `4-depois.webp`
- `logo.svg` (colorido, fundo claro), `logo-dark.svg` (FALL branco + CAR vermelho, usado no header/rodapé) e `logo-branco.svg` (monocromático)
- `instagram/*.webp`

Enquanto um arquivo não existir, o espaço aparece como bloco escuro rotulado — nada quebra.

## Onde mexer no conteúdo

Tudo em `src/data/`: `site.js` (telefones, endereços, WhatsApp), `content.js` (serviços, casos, passos, depoimentos, FAQ) e `instagram.json`.

## GTM

Coloque o ID em `GTM_ID` dentro de `src/data/site.js`. Eventos empurrados no dataLayer: `whatsapp_click` (com `origem`), `phone_click`, `form_submit` (com `servico`), `rota_click` (com `unidade`).


## Fotos e vídeos (atualização)

- `public/img/hero.webp` — Speedster laranja (recorte de 720x720; a foto original tem só 1280x720, trocar por uma de maior resolução quando houver).
- `public/img/servico-*.webp` — faixas dos três serviços; `public/video/higienizacao.mp4` toca em loop no card de Higienização (sem áudio).
- `public/img/antes-depois/` e `public/video/jetta-antes-depois.mp4` — cards da seção "Antes e depois" (tipos `video`, `split` e `pair` em `src/data/content.js`).
- `public/img/galeria/` — galeria "Trabalhos"; para incluir foto nova, adicione o arquivo e uma linha em `GALLERY`.


## Instagram — seção oculta (ativar depois)

A seção "Novidades" (feed do Instagram) está **desligada** no lançamento: `SHOW_INSTAGRAM = false` em `src/data/site.js`. Com a flag desligada somem a seção, os links "Novidades" do menu/rodapé, e a numeração das seções se ajusta sozinha. O código do feed e o script continuam no projeto, prontos para uso. `src/data/instagram.json` está vazio de propósito (sem posts de exemplo).

Para ativar, quando o dono liberar o acesso:

1. Confirmar que o Instagram da Fallcar é conta Profissional (Comercial ou Criador).
2. Criar um app em developers.facebook.com, adicionar o produto "Instagram" (login pelo Instagram) e incluir a conta como testadora. Por ser a conta do próprio cliente, não precisa de revisão da Meta.
3. Gerar o token de longa duração (vale 60 dias; precisa ser renovado) e anotar o ID da conta.
4. Guardar `IG_USER_ID` e `IG_TOKEN` como variáveis de ambiente/segredos do deploy.
5. Rodar `npm run feed` para testar (baixa os 8 últimos posts em `public/img/instagram/` e reescreve o JSON).
6. Mudar `SHOW_INSTAGRAM` para `true` e publicar.
7. Agendar atualização diária (cron/GitHub Action) e renovar o token antes dos 60 dias.

Na página de design (`Fallcar Site.dc.html`) o equivalente é `showInstagram: false` no `renderVals`; ao ligar, renumere os rótulos "05 — Quem já passou…" em diante (+1) e recoloque o link "Novidades" no menu.

## Publicação no GitHub Pages

- `.github/workflows/deploy.yml` faz o build (`npm ci` + `npm run build`) e publica a pasta `dist` a cada push na `main`.
- No repositório: Settings → Pages → Source: **GitHub Actions**. O domínio oficial `fallcar.com.br` (sem www) está em `public/CNAME`; ao ser configurado em Settings → Pages → Custom domain, o GitHub redireciona o `www` para ele.
- DNS: no domínio raiz `fallcar.com.br`, criar os registros A para 185.199.108.153, 185.199.109.153, 185.199.110.153 e 185.199.111.153 (e, se quiser IPv6, os AAAA 2606:50c0:8000::153 a 8003::153); no `www`, um CNAME para `<usuario>.github.io`. Marque "Enforce HTTPS" depois que o certificado for emitido.
- Se o site atual já está num repositório do GitHub Pages, o mais simples é substituir o conteúdo desse repositório por este projeto (o CNAME e o domínio continuam valendo).
- O Instagram segue oculto; para ativar, ver a seção acima. O workflow já aceita os segredos `IG_USER_ID` e `IG_TOKEN` e tem um build diário comentado.

## Google Tag Manager e conteúdo

- GTM: `GTM_ID = 'GTM-W9H5SJVN'` em `src/data/site.js` (mesmo contêiner do site atual). Eventos enviados ao dataLayer: `whatsapp_click`, `phone_click`, `form_submit`, `rota_click`, `reviews_click`.
- Avaliações: nota (4,5) e total (74) do perfil do Google da unidade Osasco, conferidos em 14/11/2026, ficam em `RATING` e `REVIEWS` (`src/data/content.js`) e foram digitados manualmente. Atualize de tempos em tempos. Não usamos marcação de nota nos dados estruturados, pois o Google não exibe estrelas para avaliações do próprio site.
- Horário de funcionamento: segunda a sexta, 8h às 18h; sábado e domingo fechados (conforme o perfil do Google, 14/11/2026). Fica em `hours` de cada unidade em `src/data/site.js` e em `openingHoursSpecification` no `index.astro`. Confirmar se Campos Elíseos tem o mesmo horário.
- Contatos de WhatsApp por unidade: `contact` e `whatsapp` de cada unidade em `src/data/site.js` (Osasco: Beto, (11) 94782-0539; Centro de São Paulo: Luiz, (11) 94729-2623). Alimentam o menu "WhatsApp" do topo e o botão de cada card de unidade. Confirmar que o (11) 94729-2623 é mesmo o WhatsApp do Luiz.
- Foto do hero: `public/img/hero.webp` (retrato 900x1200, placa do carro desfocada). A foto anterior (interior de Speedster) está arquivada em `uploads/hero-speedster-anterior.webp` na pasta do projeto de design.
- Webasto: a Fallcar não é mais autorizada (a marca saiu do Brasil), então a marca foi removida de textos, selos, FAQ e imagem de compartilhamento.
