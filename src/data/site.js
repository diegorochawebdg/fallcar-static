export const GTM_ID = 'GTM-W9H5SJVN';

// Seção "Novidades" (feed do Instagram). Fica oculta até a integração ser ativada — ver README.
export const SHOW_INSTAGRAM = false;

export const WHATSAPP = '5511947820539';

export const BRAND = {
  name: 'Fallcar Tapeçaria e Teto Solar',
  legal: 'Fallacar II / Bento Bueno Tapeçaria e Acessórios Ltda',
  cnpj: '18.164.593/0001-97',
  instagram: 'https://www.instagram.com/fallcar/',
  facebook: 'https://www.facebook.com/Fallcar',
  reviews: 'https://share.google/aTTQwXEVgZuLHa87X'
};

export const UNITS = [
  {
    name: 'Osasco — KM 18',
    address: 'Av. Hildebrando de Lima, 34, KM 18, Osasco/SP',
    phone: '(11) 94782-0539',
    tel: '+5511947820539',
    slug: 'osasco',
    menuLabel: 'Osasco',
    contact: 'Beto',
    whatsapp: '5511947820539',
    hours: 'Seg a sex 8h–18h · Sáb e dom fechado',
    mapTitle: 'Mapa da unidade Osasco',
    map: 'https://www.google.com/maps?q=Av.+Hildebrando+de+Lima,+34,+Osasco&output=embed',
    route: 'https://www.google.com/maps/dir/?api=1&destination=Av.+Hildebrando+de+Lima,+34,+Osasco',
    waMsg: 'Olá! Quero atendimento na unidade de Osasco.',
    schema: { street: 'Av. Hildebrando de Lima, 34', city: 'Osasco', tel: '+5511947820539' }
  },
  {
    name: 'São Paulo — Campos Elíseos',
    address: 'Alameda Nothmann, 1027, Campos Elíseos, São Paulo/SP',
    phone: '(11) 3825-5333 · (11) 94729-2623',
    tel: '+551138255333',
    slug: 'sp',
    menuLabel: 'Centro de São Paulo',
    contact: 'Luiz',
    whatsapp: '5511947292623',
    hours: 'Seg a sex 8h–18h · Sáb e dom fechado',
    mapTitle: 'Mapa da unidade Campos Elíseos',
    map: 'https://www.google.com/maps?q=Alameda+Nothmann,+1027,+Campos+El%C3%ADseos,+S%C3%A3o+Paulo&output=embed',
    route: 'https://www.google.com/maps/dir/?api=1&destination=Alameda+Nothmann,+1027,+Campos+El%C3%ADseos,+S%C3%A3o+Paulo',
    waMsg: 'Olá! Quero atendimento na unidade Campos Elíseos.',
    schema: { street: 'Alameda Nothmann, 1027', city: 'São Paulo', tel: '+551138255333' }
  }
];

export function wa(msg, number = WHATSAPP) {
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
}
