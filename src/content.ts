/*
  ============================================================
  ALLE INHALTE DER WEBSITE
  ============================================================
  Hier stehen sämtliche Texte (Deutsch und Englisch), Preise,
  Kontaktdaten, Öffnungszeiten und Firmendaten.
  Die Komponenten enthalten keinen eigenen Text.

  Fehlende Angaben sind mit "TODO: ..." markiert und zusätzlich
  in TODO.md aufgelistet. Wenn du einen Wert einträgst, hake ihn
  dort bitte ab.

  Aufbau:
  1. Gemeinsame Daten (gelten für beide Sprachen)
  2. Texte Deutsch   (content.de)
  3. Texte Englisch  (content.en)
  ============================================================
*/

export type Lang = "de" | "en";

export type SectionKey = "benefits" | "offer" | "howItWorks" | "faq" | "location" | "contact";

/** Prüft, ob ein Wert noch ein Platzhalter ist. */
export const isTodo = (value: string) => value.startsWith("TODO");

// ------------------------------------------------------------
// 1. GEMEINSAME DATEN
// ------------------------------------------------------------

export const site = {
  name: "Home Storage Paphos",
  // Finale Domain ohne "/" am Ende, z. B. "https://www.homestoragepaphos.com".
  // Solange hier TODO steht, werden Canonical-, hreflang- und OG-URLs weggelassen.
  url: "TODO: finale Domain",
  // Bild für Social Media (1200 × 630 px), abgelegt im Ordner public/
  ogImage: "TODO: Open-Graph-Bild, z. B. /og-image.jpg",
};

export const brand = {
  wordmark: "Home Storage",
  subline: "PAPHOS",
};

export const contact = {
  // So wird die Nummer auf der Seite angezeigt
  phoneDisplay: "TODO: Telefonnummer (Anzeige, z. B. +357 99 123456)",
  // Für den Anruf-Link: nur "+" und Ziffern, z. B. "+35799123456"
  phoneLink: "TODO: Telefonnummer für tel:-Link",
  // Für WhatsApp: nur Ziffern mit Ländervorwahl, ohne "+", z. B. "35799123456"
  whatsappNumber: "TODO: WhatsApp-Nummer",
  email: "TODO: E-Mail-Adresse",
};

export const location = {
  address: "TODO: Adresse des Geländes",
  // Einbettungs-Link für Google Maps. Standort: 34.7462246, 32.4830988
  // (aus https://maps.app.goo.gl/vTbqqfrT9X28GTxS6). z = Zoomstufe.
  mapEmbedUrl: "https://www.google.com/maps?q=34.7462246,32.4830988&z=17&output=embed",
};

export const company = {
  name: "TODO: Firmenname (… Ltd)",
  registeredOffice: "TODO: eingetragener Sitz (Registered Office)",
  registrationNumber: "TODO: Registernummer (HE …)",
  vatNumber: "TODO: VAT-Nummer",
  directors: "TODO: Director(s)",
};

// Mehrwertsteuer-Satz für den Preishinweis
export const vatRate = "19 %";

// Rabatte bei längerer Mietdauer
export const discounts = {
  sixMonths: "TODO: Rabatt 6 Monate (z. B. 5 %)",
  twelveMonths: "TODO: Rabatt 12 Monate (z. B. 10 %)",
};

// Boxgrößen und Monatspreise (inkl. MwSt.). Weitere Boxen einfach ergänzen.
export const boxes = [
  {
    name: { de: "Kleine Box", en: "Small box" },
    size: "TODO: Maße / Fläche",
    price: "TODO: Preis",
  },
  {
    name: { de: "Mittlere Box", en: "Medium box" },
    size: "TODO: Maße / Fläche",
    price: "TODO: Preis",
  },
  {
    name: { de: "Große Box", en: "Large box" },
    size: "TODO: Maße / Fläche",
    price: "TODO: Preis",
  },
];

// Links zu externen Datenschutzerklärungen
export const externalLinks = {
  googlePrivacy: "https://policies.google.com/privacy",
  whatsappPrivacy: "https://www.whatsapp.com/legal/privacy-policy-eea",
  dataProtectionCommissioner: "https://www.dataprotection.gov.cy",
};

// ------------------------------------------------------------
// 2. TEXTE DEUTSCH
// ------------------------------------------------------------

const de = {
  meta: {
    home: {
      title: "Home Storage Paphos – Sicher einlagern auf Zypern",
      description:
        "Self Storage in Paphos: Boxen im Schiffscontainer für Möbel, Hausrat, Motorrad und Roller. Umzäunt, videoüberwacht, mit Schattendach. Ab 1 Monat, keine Kaution.",
    },
    imprint: {
      title: "Impressum – Home Storage Paphos",
      description: "Impressum und Unternehmensangaben von Home Storage Paphos.",
    },
    privacy: {
      title: "Datenschutzerklärung – Home Storage Paphos",
      description: "Informationen zum Datenschutz bei Home Storage Paphos.",
    },
    notFound: {
      title: "Seite nicht gefunden – Home Storage Paphos",
      description: "Diese Seite gibt es leider nicht.",
    },
  },

  header: {
    skipLink: "Zum Inhalt springen",
    homeLinkLabel: "Home Storage Paphos – zur Startseite",
    mainNavLabel: "Hauptnavigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    languageSwitch: {
      label: "EN",
      ariaLabel: "Switch to English",
    },
  },

  // Sprungmarken der Abschnitte (erscheinen in der Adresse, z. B. /#angebot)
  anchors: {
    benefits: "vorteile",
    offer: "angebot",
    howItWorks: "ablauf",
    faq: "faq",
    location: "standort",
    contact: "kontakt",
  },

  // Menüpunkte in der Kopfzeile ("section" verweist auf die Sprungmarken oben)
  nav: [
    { label: "Vorteile", section: "benefits" },
    { label: "Angebot", section: "offer" },
    { label: "So funktioniert's", section: "howItWorks" },
    { label: "FAQ", section: "faq" },
    { label: "Standort", section: "location" },
    { label: "Kontakt", section: "contact" },
  ] as { label: string; section: SectionKey }[],

  // Vorausgefüllter Text, wenn jemand auf einen WhatsApp-Button tippt
  whatsappMessage: "Hallo, ich interessiere mich für eine Lagerbox bei Home Storage Paphos.",

  hero: {
    eyebrow: "Self Storage in Paphos, Zypern",
    title: "Deine Sachen sind sicher, während du weg bist.",
    text: "Ob ein paar Wochen in Deutschland oder ein halbes Jahr: Möbel, Hausrat, Motorrad oder Roller lagerst du bei uns in abschließbaren Boxen im Schiffscontainer – auf umzäuntem, videoüberwachtem Gelände.",
    highlights: ["Ab 1 Monat", "Keine Kaution", "Dein eigenes Schloss"],
    ctaCall: "Jetzt anrufen",
    ctaWhatsapp: "Per WhatsApp schreiben",
    imagePlaceholder: "TODO: Foto – Container mit Schattendach",
  },

  benefits: {
    title: "Damit du beruhigt reisen kannst",
    intro: "Wir wissen, wie es ist, zwischen Zypern und Deutschland zu pendeln. Deshalb setzen wir auf Sicherheit und klare Bedingungen.",
    items: [
      {
        icon: "roof",
        title: "Hinterlüftetes Schattendach",
        text: "Über den Containern liegt ein hinterlüftetes Schattendach. So entsteht kein Hitzestau – auch nicht im zypriotischen Sommer.",
      },
      {
        icon: "shield",
        title: "Umzäunt und videoüberwacht",
        text: "Das Gelände ist umzäunt und wird per Video überwacht.",
      },
      {
        icon: "lock",
        title: "Dein eigenes Schloss",
        text: "Du verschließt deine Box mit deinem eigenen Schloss. Den Schlüssel hast nur du.",
      },
      {
        icon: "wallet",
        title: "Keine Kaution",
        text: "Du zahlst nur die Miete. Eine Kaution verlangen wir nicht.",
      },
      {
        icon: "calendar",
        title: "Schon ab 1 Monat",
        text: "Die Mindestmietdauer beträgt nur einen Monat. Bei 6 oder 12 Monaten bekommst du Rabatt.",
      },
    ],
  },

  offer: {
    title: "Unser Angebot",
    intro: "Von der kleinen Box für ein paar Umzugskartons bis zum Stellplatz für dein Boot.",
    boxes: {
      title: "Boxen im Schiffscontainer",
      text: "Für Möbel, Hausrat, Motorräder und Roller. Wähle die Größe, die zu dir passt.",
      sizeLabel: "Größe",
      perMonth: "pro Monat",
      vatNote: `Alle Preise inkl. ${vatRate} MwSt.`,
      imagePlaceholder: "TODO: Foto – Box von innen",
    },
    discount: {
      title: "Länger mieten, weniger zahlen",
      items: [
        { label: "6 Monate", value: discounts.sixMonths },
        { label: "12 Monate", value: discounts.twelveMonths },
      ],
      suffix: "Rabatt",
    },
    parking: {
      title: "Außenstellplätze",
      text: "Für Autos, Boote und Anhänger – direkt auf unserem Gelände.",
      price: "Preis auf Anfrage",
      imagePlaceholder: "TODO: Foto – Außenstellplätze",
    },
    packing: {
      title: "Verpackungsmaterial",
      text: "Verpackungsmaterial bekommst du auf Wunsch direkt bei uns. So hast du beim Einlagern alles zur Hand.",
    },
  },

  howItWorks: {
    title: "So funktioniert's",
    steps: [
      {
        title: "Anfragen",
        text: "Ruf uns an oder schreib uns per WhatsApp. Wir beantworten deine Fragen und sagen dir, was frei ist.",
      },
      {
        title: "Box wählen",
        text: "Gemeinsam finden wir die passende Größe. Bezahlen kannst du bar vor Ort oder per Überweisung.",
      },
      {
        title: "Einlagern",
        text: "Du bringst deine Sachen, verschließt die Box mit deinem Schloss – und kannst beruhigt reisen.",
      },
    ],
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Wann komme ich an meine Sachen?",
        answer:
          "Montag bis Freitag von 08:00 bis 17:00 Uhr. Außerhalb dieser Zeiten ist der Zugang nach Absprache gegen Aufpreis möglich.",
      },
      {
        question: "Wie kann ich bezahlen?",
        answer: "Bar vor Ort oder per Überweisung.",
      },
      {
        question: "Wie lange muss ich mindestens mieten?",
        answer: "Mindestens einen Monat. Eine Kaution verlangen wir nicht.",
      },
      {
        question: "Gibt es Rabatt bei längerer Mietdauer?",
        answer: `Ja. Bei 6 Monaten Mietdauer bekommst du ${discounts.sixMonths} Rabatt, bei 12 Monaten ${discounts.twelveMonths}.`,
      },
      {
        question: "Was darf ich einlagern?",
        answer:
          "Möbel, Hausrat, Motorräder, Roller und vieles mehr. TODO: Liste nicht erlaubter Gegenstände ergänzen (z. B. Gefahrstoffe, verderbliche Lebensmittel).",
      },
      {
        question: "Kann ich auch ein Auto, Boot oder einen Anhänger abstellen?",
        answer: "Ja, auf unseren Außenstellplätzen direkt auf dem Gelände. Den Preis nennen wir dir auf Anfrage.",
      },
    ],
  },

  location: {
    title: "Standort und Öffnungszeiten",
    addressLabel: "Adresse",
    hoursTitle: "Öffnungszeiten",
    hours: [
      { days: "Montag – Freitag", time: "08:00 – 17:00 Uhr" },
      { days: "Samstag, Sonntag", time: "geschlossen" },
    ],
    afterHoursNote: "Zugang außerhalb der Öffnungszeiten nach Absprache gegen Aufpreis.",
    map: {
      title: "Karte",
      notice:
        "Die Karte wird von Google Maps geladen. Dabei werden Daten wie deine IP-Adresse an Google übertragen. Erst wenn du auf „Karte laden“ klickst, wird eine Verbindung hergestellt.",
      button: "Karte laden",
      googlePrivacy: "Datenschutzerklärung von Google",
      ownPrivacy: "Unsere Datenschutzerklärung",
      iframeTitle: "Karte: Standort von Home Storage Paphos",
    },
  },

  contactSection: {
    title: "Kontakt",
    text: "Du hast Fragen oder möchtest eine Box reservieren? Ruf uns an oder schreib uns – wir helfen dir gern weiter.",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
    whatsappText: "Nachricht schreiben",
    emailLabel: "E-Mail",
  },

  footer: {
    legalNavLabel: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
  },

  floatingWhatsapp: "Per WhatsApp schreiben",

  imagePlaceholderLabel: "Platzhalter für ein Foto",

  draftNotice: "Entwurf – dieser Text wird vor dem Launch rechtlich geprüft. TODO: rechtlich prüfen lassen.",

  imprint: {
    title: "Impressum",
    intro:
      "Angaben gemäß dem zypriotischen Gesetz über den elektronischen Geschäftsverkehr (Gesetz 156(I)/2004) und dem Companies Law (Cap. 113).",
    fields: [
      { label: "Unternehmen", value: company.name },
      { label: "Eingetragener Sitz", value: company.registeredOffice },
      { label: "Handelsregister", value: "Registrar of Companies and Intellectual Property, Nikosia, Zypern" },
      { label: "Registernummer", value: company.registrationNumber },
      { label: "Umsatzsteuer-ID (VAT)", value: company.vatNumber },
      { label: "Director(s)", value: company.directors },
      { label: "Telefon", value: contact.phoneDisplay },
      { label: "E-Mail", value: contact.email },
    ],
  },

  privacy: {
    title: "Datenschutzerklärung",
    intro:
      "Der Schutz deiner Daten ist uns wichtig. Hier erfährst du, welche Daten wir verarbeiten, wenn du unsere Website besuchst oder uns kontaktierst. Grundlage sind die Datenschutz-Grundverordnung (DSGVO) und das zypriotische Gesetz 125(I)/2018.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        paragraphs: [
          `${company.name}, ${company.registeredOffice}`,
          `Telefon: ${contact.phoneDisplay} · E-Mail: ${contact.email}`,
        ],
      },
      {
        heading: "2. Kein Tracking, keine Cookies",
        paragraphs: [
          "Wir verwenden keine Cookies, keine Analyse- oder Tracking-Tools und keine Werbenetzwerke. Die Schriftarten sind direkt auf unserem Server gespeichert, es werden also keine Daten an Schriftarten-Anbieter übertragen.",
        ],
      },
      {
        heading: "3. Hosting und Server-Logfiles",
        paragraphs: [
          "Unsere Website wird gehostet bei: TODO: Hosting-Anbieter mit Anschrift (wird später festgelegt).",
          "Beim Aufruf der Website speichert der Server automatisch Informationen, die dein Browser übermittelt (Server-Logfiles): IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und Betriebssystem.",
          "Diese Daten sind technisch nötig, um die Website sicher und stabil auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Logfiles werden nach TODO: Speicherdauer Tagen gelöscht.",
        ],
      },
      {
        heading: "4. Kontakt per Telefon oder E-Mail",
        paragraphs: [
          "Wenn du uns anrufst oder eine E-Mail schreibst, verarbeiten wir deine Angaben (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt deiner Anfrage), um deine Anfrage zu bearbeiten.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um einen Mietvertrag geht, sonst Art. 6 Abs. 1 lit. f DSGVO. Wir löschen die Daten, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten bestehen.",
        ],
      },
      {
        heading: "5. Kontakt per WhatsApp",
        paragraphs: [
          "Du kannst uns über WhatsApp schreiben. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Beim Tippen auf einen WhatsApp-Button wirst du zu WhatsApp weitergeleitet; vorher werden keine Daten an WhatsApp übertragen.",
          "WhatsApp verarbeitet dabei eigene Daten, u. a. Telefonnummer und Metadaten, und kann Daten in die USA übermitteln. Grundlage dafür ist der EU-US Data Privacy Framework. Wenn du das nicht möchtest, nutze bitte Telefon oder E-Mail.",
          "Rechtsgrundlage für unsere Verarbeitung ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.",
        ],
        link: { label: "Datenschutzerklärung von WhatsApp", href: externalLinks.whatsappPrivacy },
      },
      {
        heading: "6. Google Maps",
        paragraphs: [
          "Auf unserer Seite kannst du eine Karte von Google Maps anzeigen lassen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
          "Die Karte wird erst geladen, wenn du auf „Karte laden“ klickst. Dann werden Daten wie deine IP-Adresse an Google übertragen, möglicherweise auch in die USA (EU-US Data Privacy Framework). Google kann dabei Cookies setzen.",
          "Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Wir speichern deine Einwilligung nicht: Beim nächsten Seitenaufruf ist die Karte wieder ausgeblendet. Du kannst die Einwilligung jederzeit widerrufen, indem du die Seite neu lädst.",
        ],
        link: { label: "Datenschutzerklärung von Google", href: externalLinks.googlePrivacy },
      },
      {
        heading: "7. Deine Rechte",
        paragraphs: [
          "Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung (Art. 21). Eine erteilte Einwilligung kannst du jederzeit für die Zukunft widerrufen (Art. 7 Abs. 3).",
          "Schreib uns dazu einfach eine E-Mail an die oben genannte Adresse.",
        ],
      },
      {
        heading: "8. Beschwerderecht",
        paragraphs: [
          "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In Zypern ist das der Commissioner for Personal Data Protection (Office of the Commissioner for Personal Data Protection), Kypranoros 15, 1061 Nikosia, Zypern, E-Mail: commissioner@dataprotection.gov.cy.",
        ],
        link: { label: "Website des Commissioner for Personal Data Protection", href: externalLinks.dataProtectionCommissioner },
      },
      {
        heading: "9. Stand",
        paragraphs: ["TODO: Datum der finalen Fassung eintragen."],
      },
    ],
  },

  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite gibt es leider nicht.",
    backLink: "Zur Startseite",
  },
};

// ------------------------------------------------------------
// 3. TEXTE ENGLISCH
// ------------------------------------------------------------

const en: typeof de = {
  meta: {
    home: {
      title: "Home Storage Paphos – Secure Storage in Cyprus",
      description:
        "Self storage in Paphos: units in shipping containers for furniture, household goods, motorbikes and scooters. Fenced, CCTV-monitored, with a shade roof. From 1 month, no deposit.",
    },
    imprint: {
      title: "Legal Notice – Home Storage Paphos",
      description: "Legal notice and company information of Home Storage Paphos.",
    },
    privacy: {
      title: "Privacy Policy – Home Storage Paphos",
      description: "Information on data protection at Home Storage Paphos.",
    },
    notFound: {
      title: "Page not found – Home Storage Paphos",
      description: "Sorry, this page does not exist.",
    },
  },

  header: {
    skipLink: "Skip to content",
    homeLinkLabel: "Home Storage Paphos – go to homepage",
    mainNavLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    call: "Call",
    whatsapp: "WhatsApp",
    languageSwitch: {
      label: "DE",
      ariaLabel: "Auf Deutsch wechseln",
    },
  },

  anchors: {
    benefits: "benefits",
    offer: "offer",
    howItWorks: "how-it-works",
    faq: "faq",
    location: "location",
    contact: "contact",
  },

  nav: [
    { label: "Benefits", section: "benefits" },
    { label: "Offer", section: "offer" },
    { label: "How it works", section: "howItWorks" },
    { label: "FAQ", section: "faq" },
    { label: "Location", section: "location" },
    { label: "Contact", section: "contact" },
  ],

  whatsappMessage: "Hello, I am interested in a storage unit at Home Storage Paphos.",

  hero: {
    eyebrow: "Self storage in Paphos, Cyprus",
    title: "Your belongings are safe while you're away.",
    text: "Whether you're away for a few weeks or half a year: store your furniture, household goods, motorbike or scooter in lockable units inside shipping containers – on a fenced, CCTV-monitored site.",
    highlights: ["From 1 month", "No deposit", "Your own lock"],
    ctaCall: "Call now",
    ctaWhatsapp: "Message on WhatsApp",
    imagePlaceholder: "TODO: Photo – containers with shade roof",
  },

  benefits: {
    title: "So you can travel with peace of mind",
    intro: "We know what it's like to live between Cyprus and another home country. That's why we focus on security and clear terms.",
    items: [
      {
        icon: "roof",
        title: "Ventilated shade roof",
        text: "A ventilated shade roof covers the containers – no heat build-up, even in the Cypriot summer.",
      },
      {
        icon: "shield",
        title: "Fenced and CCTV-monitored",
        text: "The site is fenced and monitored by video surveillance.",
      },
      {
        icon: "lock",
        title: "Your own lock",
        text: "You lock your unit with your own padlock. Only you have the key.",
      },
      {
        icon: "wallet",
        title: "No deposit",
        text: "You only pay the rent. We don't ask for a deposit.",
      },
      {
        icon: "calendar",
        title: "From just 1 month",
        text: "The minimum rental period is only one month. Rent for 6 or 12 months and get a discount.",
      },
    ],
  },

  offer: {
    title: "What we offer",
    intro: "From a small unit for a few moving boxes to a parking space for your boat.",
    boxes: {
      title: "Units in shipping containers",
      text: "For furniture, household goods, motorbikes and scooters. Choose the size that suits you.",
      sizeLabel: "Size",
      perMonth: "per month",
      vatNote: `All prices incl. ${vatRate} VAT.`,
      imagePlaceholder: "TODO: Photo – inside a unit",
    },
    discount: {
      title: "Rent longer, pay less",
      items: [
        { label: "6 months", value: discounts.sixMonths },
        { label: "12 months", value: discounts.twelveMonths },
      ],
      suffix: "discount",
    },
    parking: {
      title: "Outdoor parking",
      text: "For cars, boats and trailers – right on our site.",
      price: "Price on request",
      imagePlaceholder: "TODO: Photo – outdoor parking",
    },
    packing: {
      title: "Packing materials",
      text: "On request, you can get packing materials directly from us – so you have everything at hand when you move in.",
    },
  },

  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Get in touch",
        text: "Call us or send a WhatsApp message. We'll answer your questions and tell you what's available.",
      },
      {
        title: "Choose your unit",
        text: "Together we'll find the right size. Pay in cash on site or by bank transfer.",
      },
      {
        title: "Move in",
        text: "Bring your belongings, lock the unit with your own padlock – and travel with peace of mind.",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "When can I access my belongings?",
        answer:
          "Monday to Friday, 8:00 am to 5:00 pm. Access outside these hours is possible by arrangement for an additional fee.",
      },
      {
        question: "How can I pay?",
        answer: "In cash on site or by bank transfer.",
      },
      {
        question: "What is the minimum rental period?",
        answer: "One month. We don't ask for a deposit.",
      },
      {
        question: "Is there a discount for longer rentals?",
        answer: `Yes. For a 6-month rental you get ${discounts.sixMonths} off, for 12 months ${discounts.twelveMonths}.`,
      },
      {
        question: "What can I store?",
        answer:
          "Furniture, household goods, motorbikes, scooters and much more. TODO: add list of prohibited items (e.g. hazardous materials, perishable food).",
      },
      {
        question: "Can I also park a car, boat or trailer?",
        answer: "Yes, in our outdoor parking spaces right on the site. Price on request.",
      },
    ],
  },

  location: {
    title: "Location and opening hours",
    addressLabel: "Address",
    hoursTitle: "Opening hours",
    hours: [
      { days: "Monday – Friday", time: "8:00 am – 5:00 pm" },
      { days: "Saturday, Sunday", time: "closed" },
    ],
    afterHoursNote: "Access outside opening hours by arrangement for an additional fee.",
    map: {
      title: "Map",
      notice:
        "The map is provided by Google Maps. Loading it transfers data such as your IP address to Google. No connection is made until you click “Load map”.",
      button: "Load map",
      googlePrivacy: "Google privacy policy",
      ownPrivacy: "Our privacy policy",
      iframeTitle: "Map: location of Home Storage Paphos",
    },
  },

  contactSection: {
    title: "Contact",
    text: "Have a question or want to reserve a unit? Give us a call or send us a message – we're happy to help.",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    whatsappText: "Send a message",
    emailLabel: "Email",
  },

  footer: {
    legalNavLabel: "Legal",
    imprint: "Legal notice",
    privacy: "Privacy",
    rights: "All rights reserved.",
  },

  floatingWhatsapp: "Message on WhatsApp",

  imagePlaceholderLabel: "Photo placeholder",

  draftNotice: "Draft – this text will be legally reviewed before launch. TODO: legal review.",

  imprint: {
    title: "Legal notice",
    intro:
      "Information pursuant to the Cyprus law on electronic commerce (Law 156(I)/2004) and the Companies Law (Cap. 113).",
    fields: [
      { label: "Company", value: company.name },
      { label: "Registered office", value: company.registeredOffice },
      { label: "Company register", value: "Registrar of Companies and Intellectual Property, Nicosia, Cyprus" },
      { label: "Registration number", value: company.registrationNumber },
      { label: "VAT number", value: company.vatNumber },
      { label: "Director(s)", value: company.directors },
      { label: "Phone", value: contact.phoneDisplay },
      { label: "Email", value: contact.email },
    ],
  },

  privacy: {
    title: "Privacy policy",
    intro:
      "Protecting your data matters to us. This page explains which data we process when you visit our website or contact us, based on the General Data Protection Regulation (GDPR) and Cyprus Law 125(I)/2018.",
    sections: [
      {
        heading: "1. Controller",
        paragraphs: [
          `${company.name}, ${company.registeredOffice}`,
          `Phone: ${contact.phoneDisplay} · Email: ${contact.email}`,
        ],
      },
      {
        heading: "2. No tracking, no cookies",
        paragraphs: [
          "We do not use cookies, analytics or tracking tools, or advertising networks. Fonts are stored on our own server, so no data is sent to font providers.",
        ],
      },
      {
        heading: "3. Hosting and server log files",
        paragraphs: [
          "Our website is hosted by: TODO: hosting provider and address (to be decided).",
          "When you visit the website, the server automatically stores information sent by your browser (server log files): IP address, date and time of access, page requested, referrer URL, browser type and operating system.",
          "This data is technically necessary to deliver the website securely and reliably. The legal basis is Art. 6(1)(f) GDPR (legitimate interest). Log files are deleted after TODO: retention period days.",
        ],
      },
      {
        heading: "4. Contact by phone or email",
        paragraphs: [
          "When you call or email us, we process your details (e.g. name, phone number, email address, content of your enquiry) to handle your enquiry.",
          "The legal basis is Art. 6(1)(b) GDPR where a rental contract is concerned, otherwise Art. 6(1)(f) GDPR. We delete the data once it is no longer needed and no statutory retention obligations apply.",
        ],
      },
      {
        heading: "5. Contact via WhatsApp",
        paragraphs: [
          "You can message us via WhatsApp. The provider is WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland. Tapping a WhatsApp button takes you to WhatsApp; no data is sent to WhatsApp before that.",
          "WhatsApp processes its own data, including your phone number and metadata, and may transfer data to the USA on the basis of the EU-US Data Privacy Framework. If you don't want this, please use phone or email instead.",
          "The legal basis for our processing is Art. 6(1)(b) or (f) GDPR.",
        ],
        link: { label: "WhatsApp privacy policy", href: externalLinks.whatsappPrivacy },
      },
      {
        heading: "6. Google Maps",
        paragraphs: [
          "Our site lets you display a map from Google Maps. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.",
          "The map is only loaded when you click “Load map”. Data such as your IP address is then transferred to Google, possibly also to the USA (EU-US Data Privacy Framework). Google may set cookies.",
          "The legal basis is your consent under Art. 6(1)(a) GDPR. We do not store your consent: the map is hidden again the next time you open the page. You can withdraw your consent at any time by reloading the page.",
        ],
        link: { label: "Google privacy policy", href: externalLinks.googlePrivacy },
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object to processing (Art. 21). You can withdraw any consent at any time with effect for the future (Art. 7(3)).",
          "Simply send us an email to the address above.",
        ],
      },
      {
        heading: "8. Right to lodge a complaint",
        paragraphs: [
          "You have the right to lodge a complaint with a data protection supervisory authority. In Cyprus, this is the Commissioner for Personal Data Protection (Office of the Commissioner for Personal Data Protection), Kypranoros 15, 1061 Nicosia, Cyprus, email: commissioner@dataprotection.gov.cy.",
        ],
        link: { label: "Website of the Commissioner for Personal Data Protection", href: externalLinks.dataProtectionCommissioner },
      },
      {
        heading: "9. Last updated",
        paragraphs: ["TODO: add date of final version."],
      },
    ],
  },

  notFound: {
    title: "Page not found",
    text: "Sorry, this page does not exist.",
    backLink: "Go to homepage",
  },
};

export const content = { de, en };
export type Content = typeof de;
