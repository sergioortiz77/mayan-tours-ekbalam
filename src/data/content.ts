export type Language = 'es' | 'en' | 'fr';

export interface TourItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  notIncludes?: string[];
  badge?: string;
  whatsappMessage: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  highlight: string;
  whatsappMessage: string;
}

export interface TransportRoute {
  destination: string;
  type: string;
  description: string;
}

export interface PageContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    tours: string;
    workshops: string;
    transport: string;
    info: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      cert: string;
      exp: string;
      native: string;
      langs: string;
    };
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    stats: {
      experience: string;
      experienceLabel: string;
      certification: string;
      certificationLabel: string;
      languages: string;
      languagesLabel: string;
      community: string;
      communityLabel: string;
    };
    quote: string;
  };
  tours: {
    tag: string;
    title: string;
    subtitle: string;
    items: TourItem[];
  };
  workshops: {
    tag: string;
    title: string;
    subtitle: string;
    note: string;
    items: WorkshopItem[];
  };
  transport: {
    tag: string;
    title: string;
    subtitle: string;
    vehicleTitle: string;
    vehicleDescription: string;
    routesTitle: string;
    routes: TransportRoute[];
    cta: string;
    whatsappMessage: string;
  };
  complementary: {
    tag: string;
    title: string;
    lodgingTitle: string;
    lodgingDesc: string;
    craftsTitle: string;
    craftsDesc: string;
    ceremonyTitle: string;
    ceremonyDesc: string;
  };
  visitorGuide: {
    tag: string;
    title: string;
    subtitle: string;
    recommendationsTitle: string;
    recommendations: string[];
    feesTitle: string;
    feesInfo: {
      title: string;
      national: string;
      foreigner: string;
      note: string;
    };
    policiesTitle: string;
    paymentMethods: string;
    cancellationPolicy: string;
  };
  faq: {
    tag: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    guideName: string;
    guideRole: string;
    location: string;
    whatsappLabel: string;
    emailLabel: string;
    phoneFormatted: string;
    email: string;
    directChat: string;
    speiNotice: string;
  };
  footer: {
    brand: string;
    tagline: string;
    rights: string;
    communityMessage: string;
  };
}

export const GUIDE_INFO = {
  name: "Jesús Alfredo Chan Chan",
  brand: "Mayan Tours Ek Balam",
  phone: "529851099234",
  phoneDisplay: "+52 985 109 9234",
  email: "juniekbalam@gmail.com",
  location: "Ek Balam, Municipio de Temozón, Yucatán, México",
  certification: "SECTUR NOM-08-TUR-2002",
  experienceYears: "12+",
  vehicle: "Volkswagen Transporter (Van)",
};

export const CONTENT_BY_LANG: Record<Language, PageContent> = {
  es: {
    meta: {
      title: "Mayan Tours Ek Balam | Guía Nativo y Experiencias Mayas con Jesús Alfredo Chan",
      description: "Descubre la zona arqueológica de Ek Balam, talleres tradicionales de cacao y bordado, ceremonias mayas y transporte privado con Jesús Alfredo Chan Chan, guía oficial certificado NOM-08.",
    },
    nav: {
      about: "Sobre el Guía",
      tours: "Zona Arqueológica",
      workshops: "Talleres y Cultura",
      transport: "Transporte",
      info: "Información Práctica",
      contact: "Contacto",
      bookNow: "Reservar por WhatsApp",
    },
    hero: {
      badge: "Guía Oficial Certificado SECTUR NOM-08 • Nativo de Ek Balam",
      title: "Vive el corazón del mundo maya con un",
      titleHighlight: "guía nativo de Ek Balam",
      subtitle: "12 años compartiendo la historia viva, la arquitectura ancestral, los talleres comunitarios y la hospitalidad de nuestra gente en Yucatán.",
      ctaPrimary: "Explorar Experiencias",
      ctaSecondary: "Contactar por WhatsApp",
      features: {
        cert: "Acreditación NOM-08 SECTUR",
        exp: "12 años de trayectoria",
        native: "Turismo Comunitario 100% Nativo",
        langs: "Español, Maya, Inglés y Francés",
      },
    },
    about: {
      tag: "Tu Anfitrión Local",
      title: "Conoce a Jesús Alfredo Chan Chan",
      subtitle: "Un puente vivo entre el legado milenario maya y los viajeros del mundo.",
      bioParagraph1: "Soy originario de la comunidad maya de Ek Balam en Temozón, Yucatán. Durante más de 12 años he guiado a visitantes de México y todo el mundo a través de nuestra historia, astronomía y arquitectura sagrada.",
      bioParagraph2: "Nuestro proyecto tiene una vocación comunitaria: cada recorrido, taller y traslado genera un beneficio directo y compartido para las familias y artesanos de Ek Balam.",
      stats: {
        experience: "12+",
        experienceLabel: "Años de experiencia",
        certification: "NOM-08",
        certificationLabel: "SECTUR Certificado",
        languages: "4",
        languagesLabel: "Idiomas (Español, Maya, EN, FR)",
        community: "100%",
        communityLabel: "Impacto Comunitario",
      },
      quote: "El trabajo que realizamos en Ek Balam es para el beneficio de nuestra comunidad maya; es un esfuerzo compartido donde abrimos nuestras casas y saberes.",
    },
    tours: {
      tag: "Arqueología e Historia",
      title: "Recorrido por la Zona Arqueológica de Ek Balam",
      subtitle: "Explora la misteriosa 'Estrella Jaguar' (Ek' Balam), sus murales de estuco y la tumba real maya.",
      items: [
        {
          id: "ekbalam-ruins",
          title: "Visita Guiada Oficial a Ek Balam",
          category: "Arqueología y Cosmovisión",
          duration: "1 Hora (aprox.)",
          price: "Servicio de guía personalizado",
          description: "Recorrido especializado por la Acrópolis, la Plaza Central, la tumba de Ukit Kan Lek Tok' y las intrincadas fachadas de estuco de gobernantes y seres alados.",
          includes: [
            "Guía oficial certificado SECTUR NOM-08",
            "Explicación en Español, Inglés, Francés o Maya",
            "Historia de la dinastía de Ek Balam y simbolismo arquitectónico",
            "Recomendaciones para visitar cenotes locales",
          ],
          notIncludes: [
            "Boletos de acceso oficial al sitio arqueológico (se pagan en taquilla)",
          ],
          badge: "Experiencia Estrella",
          whatsappMessage: "Hola Jesús, me gustaría consultar disponibilidad y reservar el tour guiado a la Zona Arqueológica de Ek Balam.",
        },
      ],
    },
    workshops: {
      tag: "Saberes Tradicionales",
      title: "Talleres Vivos en Casas de Familias Mayas",
      subtitle: "Adéntrate en la vida cotidiana de Ek Balam y aprende técnicas ancestrales directamente de maestras y maestros de la comunidad.",
      note: "Duración de 1 hora por taller. Precio accesible: $130 - $150 MXN por persona, canalizado directamente a las familias.",
      items: [
        {
          id: "hamaca",
          title: "Taller de Urdido de Hamacas",
          duration: "1 Hora",
          price: "$130 - $150 MXN / persona",
          description: "Aprende el arte milenario del tejido de hamacas yucatecas con hilos de colores y técnicas transmitidas de generación en generación en los hogares locales.",
          highlight: "Práctica directa con bastidor tradicional en casa de familia.",
          whatsappMessage: "Hola Jesús, me interesa participar en el Taller de Urdido de Hamacas en la comunidad.",
        },
        {
          id: "bordado",
          title: "Taller de Bordado Tradicional",
          duration: "1 Hora",
          price: "$130 - $150 MXN / persona",
          description: "Descubre las puntadas, simbolismos y flores plasmados en los tradicionales huipiles mayas de la península de Yucatán.",
          highlight: "Impartido por artesanas mayas de Ek Balam.",
          whatsappMessage: "Hola Jesús, quiero agendar el Taller de Bordado Tradicional en Ek Balam.",
        },
        {
          id: "cacao",
          title: "Taller de Cacao y Chocolate Ancestral",
          duration: "1 Hora",
          price: "$130 - $150 MXN / persona",
          description: "Conoce la historia sagrada del cacao maya, muele semillas tostadas en metate de piedra y degusta una bebida tradicional aromatizada con especias.",
          highlight: "Molienda en metate y degustación incluida.",
          whatsappMessage: "Hola Jesús, quisiera reservar el Taller de Cacao y Chocolate en Ek Balam.",
        },
        {
          id: "milpa",
          title: "Ceremonia en la Parcela y Taller de Milpa",
          duration: "1 a 1.5 Horas",
          price: "$150 MXN / persona",
          description: "Visita una parcela agrícola maya tradicional, aprende el ciclo sagrado de la milpa (maíz, frijol y calabaza) y participa en una ceremonia tradicional de gratitud.",
          highlight: "Conexión directa con la tierra y cosmovisión agrícola maya.",
          whatsappMessage: "Hola Jesús, me gustaría participar en la Ceremonia en la parcela y taller de milpa.",
        },
      ],
    },
    transport: {
      tag: "Traslados Seguros",
      title: "Transportación Turística y Privada en Van",
      subtitle: "Unidad propia Volkswagen Transporter con aire acondicionado para tu familia o grupo.",
      vehicleTitle: "Comodidad y Flexibilidad en Todo Yucatán",
      vehicleDescription: "Contamos con Van propia para traslados cómodos, seguros y con aire acondicionado. Los precios se cotizan de manera transparente en función de la distancia y ruta requerida.",
      routesTitle: "Rutas y Destinos Frecuentes",
      routes: [
        {
          destination: "Cenotes de Ek Balam y Alrededores",
          type: "Ruta Local",
          description: "Traslados al cenote Xcanché, Hubiku, Palomitas, Agua Dulce o Zací en Valladolid.",
        },
        {
          destination: "Estaciones del Tren Maya",
          type: "Conexión Ferroviaria",
          description: "Enlace directo con las estaciones de Valladolid, Chichén Itzá o Cancún Aeropuerto.",
        },
        {
          destination: "Aeropuertos Internacionales",
          type: "Traslado Foráneo",
          description: "Ruta directa desde o hacia el Aeropuerto de Cancún (CUN) y Aeropuerto de Mérida (MID).",
        },
        {
          destination: "Riviera Maya y Ciudades Históricas",
          type: "Circuito Turístico",
          description: "Viajes a Playa del Carmen, Tulum, Valladolid, Chichén Itzá y Mérida.",
        },
      ],
      cta: "Cotizar Traslado por WhatsApp",
      whatsappMessage: "Hola Jesús, quisiera cotizar un servicio de transporte en Van para mi viaje. Mi ruta y fechas son: ",
    },
    complementary: {
      tag: "Servicios Integrales",
      title: "Hospedaje, Artesanías y Ceremonias Privadas",
      lodgingTitle: "Hospedaje Comunitario / Cabañas",
      lodgingDesc: "Quédate en la tranquilidad de Ek Balam en cabañas ecológicas gestionadas localmente para vivir una experiencia inmersiva.",
      craftsTitle: "Venta de Artesanías Auténticas",
      craftsDesc: "Compra directa a creadores locales sin intermediarios: hamacas de calidad, bordados finos y productos de la colmena.",
      ceremonyTitle: "Ceremonias Mayas y Eventos Privados",
      ceremonyDesc: "Organización de ceremonias de bendición, bautizos mayas (Het'smeek) y reuniones culturales respetuosas.",
    },
    visitorGuide: {
      tag: "Prepara Tu Visita",
      title: "Guía Práctica y Tarifas de Referencia",
      subtitle: "Todo lo que necesitas saber antes de tu llegada a Ek Balam.",
      recommendationsTitle: "Recomendaciones para el Visitante",
      recommendations: [
        "Llevar ropa ligera de algodón y calzado deportivo o cerrado para caminar en senderos y escalinatas.",
        "Protegerse del sol: sombrero, gorra y bloqueador solar preferentemente biodegradable.",
        "Repelente ecológico contra mosquitos.",
        "Llevar suficiente agua para mantenerse hidratado durante el recorrido.",
        "Llevar efectivo (pesos mexicanos) para el acceso a taquillas y compra de artesanías.",
      ],
      feesTitle: "Tarifas de Acceso a la Zona Arqueológica (INAH / CULTUR)",
      feesInfo: {
        title: "Costo de boletos de entrada oficial (no incluidos en el servicio de guía):",
        foreigner: "Visitantes extranjeros: ~$709 MXN por persona",
        national: "Visitantes nacionales: ~$280 MXN por persona",
        note: "Nota: Los boletos se adquieren en la taquilla oficial del parador turístico de Ek Balam.",
      },
      policiesTitle: "Políticas de Pago y Reservación",
      paymentMethods: "Métodos de pago aceptados: Transferencia Bancaria (SPEI).",
      cancellationPolicy: "Política de anticipo: Pago del 100% del servicio previo al inicio del tour o traslado.",
    },
    faq: {
      tag: "Dudas Habituales",
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Con cuánta anticipación debo reservar mi tour?",
          answer: "Recomendamos reservar con al menos 24 a 48 horas de anticipación vía WhatsApp para garantizar disponibilidad de horarios y coordinar traslados o talleres en las casas locales.",
        },
        {
          question: "¿Puedo combinar el tour arqueológico con un taller y transporte?",
          answer: "¡Por supuesto! Diseñamos paquetes a la medida donde combinamos la visita arqueológica matutina, un taller de chocolate o hamaca al mediodía y el traslado al cenote o a tu hotel.",
        },
        {
          question: "¿En qué idiomas se pueden impartir los recorridos?",
          answer: "Jesús Alfredo habla fluidamente Español, Maya Yucateco, Inglés y Francés.",
        },
        {
          question: "¿Los talleres comunitarios son adecuados para niños y familias?",
          answer: "Sí, son experiencias 100% familiares, seguras y muy enriquecedoras para personas de todas las edades.",
        },
      ],
    },
    contact: {
      tag: "Atención Inmediata",
      title: "Reserva Tu Experiencia en Ek Balam",
      subtitle: "Escríbenos directamente por WhatsApp para coordinar fechas, horarios y cotizaciones a tu medida.",
      guideName: "Jesús Alfredo Chan Chan",
      guideRole: "Guía Oficial Certificado SECTUR NOM-08 • Anfitrión Comunitario",
      location: "Ek Balam, Municipio de Temozón, Yucatán, México",
      whatsappLabel: "WhatsApp Directo",
      emailLabel: "Correo Electrónico",
      phoneFormatted: "+52 985 109 9234",
      email: "juniekbalam@gmail.com",
      directChat: "Chatear por WhatsApp",
      speiNotice: "Aceptamos pagos y anticipos mediante transferencia SPEI.",
    },
    footer: {
      brand: "Mayan Tours Ek Balam",
      tagline: "Turismo comunitario, arqueología viva y saberes ancestrales mayas en Yucatán.",
      rights: "Todos los derechos reservados. Ek Balam, Yucatán, México.",
      communityMessage: "Proyecto impulsado por guías y familias nativas mayas de Ek Balam.",
    },
  },
  en: {
    meta: {
      title: "Mayan Tours Ek Balam | Native Certified Maya Guide Jesús Alfredo Chan",
      description: "Discover Ek Balam ruins, traditional hammock, embroidery and cacao workshops, and private van transport with official certified guide Jesús Alfredo Chan Chan.",
    },
    nav: {
      about: "About the Guide",
      tours: "Archaeology",
      workshops: "Workshops & Culture",
      transport: "Transportation",
      info: "Visitor Info",
      contact: "Contact",
      bookNow: "Book via WhatsApp",
    },
    hero: {
      badge: "Official SECTUR NOM-08 Certified Guide • Ek Balam Native",
      title: "Experience the Mayan World with an",
      titleHighlight: "authentic native guide in Ek Balam",
      subtitle: "12+ years sharing living heritage, sacred architecture, community workshops, and genuine Yucatecan warmth.",
      ctaPrimary: "Explore Experiences",
      ctaSecondary: "Message on WhatsApp",
      features: {
        cert: "Official SECTUR NOM-08 License",
        exp: "12+ Years Experience",
        native: "100% Community-Based Tourism",
        langs: "English, French, Spanish, Yucatec Maya",
      },
    },
    about: {
      tag: "Your Local Host",
      title: "Meet Jesús Alfredo Chan Chan",
      subtitle: "A living bridge between ancient Maya wisdom and world travelers.",
      bioParagraph1: "I am a native of the Maya community of Ek Balam in Temozón, Yucatán. For over 12 years, I have had the privilege of guiding travelers through our sacred archaeology, history, and astronomy.",
      bioParagraph2: "Our tours are community-rooted: every tour, craft workshop, and transfer directly supports local Mayan families and artisans in our village.",
      stats: {
        experience: "12+",
        experienceLabel: "Years of Experience",
        certification: "NOM-08",
        certificationLabel: "SECTUR Certified",
        languages: "4",
        languagesLabel: "Languages Spoken",
        community: "100%",
        communityLabel: "Local Community Benefit",
      },
      quote: "The work we do in Ek Balam benefits our entire community; it is shared hospitality where we welcome you into our homes and living culture.",
    },
    tours: {
      tag: "Archaeology & History",
      title: "Ek Balam Archaeological Guided Tour",
      subtitle: "Explore the mysterious 'Star Jaguar' (Ek' Balam) city, its monumental Acropolis, and stucco carvings of rulers and winged beings.",
      items: [
        {
          id: "ekbalam-ruins",
          title: "Official Guided Tour of Ek Balam Ruins",
          category: "Archaeology & Cosmovision",
          duration: "1 Hour (approx.)",
          price: "Personalized Guide Fee",
          description: "Detailed tour of the Acropolis, Central Plaza, Ball Court, the royal tomb of Ukit Kan Lek Tok', and the intricate stucco facades of rulers and winged beings.",
          includes: [
            "Official SECTUR NOM-08 Certified Guide",
            "Tour in English, French, Spanish, or Maya",
            "Dynastic history, hieroglyphs & architectural symbolism",
            "Tips for nearby cenotes and traditional meals",
          ],
          notIncludes: [
            "Official site entrance tickets (purchased at the park ticket booth)",
          ],
          badge: "Signature Tour",
          whatsappMessage: "Hello Jesús, I would like to check availability and book a guided tour of the Ek Balam archaeological site.",
        },
      ],
    },
    workshops: {
      tag: "Living Traditions",
      title: "Workshops in Local Mayan Family Homes",
      subtitle: "Step into our community homes and learn ancestral crafts directly from local masters.",
      note: "1-hour sessions. Modest rate: $130 - $150 MXN (~$7-$8 USD) per person, directly supporting host families.",
      items: [
        {
          id: "hamaca",
          title: "Hammock Weaving Workshop",
          duration: "1 Hour",
          price: "$130 - $150 MXN / person",
          description: "Learn the intricate hand-weaving techniques used to make traditional Yucatecan hammocks in a village home.",
          highlight: "Hands-on practice on a traditional wooden loom.",
          whatsappMessage: "Hello Jesús, I want to book the Hammock Weaving Workshop in Ek Balam.",
        },
        {
          id: "bordado",
          title: "Traditional Mayan Embroidery Workshop",
          duration: "1 Hour",
          price: "$130 - $150 MXN / person",
          description: "Explore the stitches and floral symbols embroidered on traditional Maya huipiles with local craftswomen.",
          highlight: "Taught by master artisan women of Ek Balam.",
          whatsappMessage: "Hello Jesús, I am interested in booking the Traditional Embroidery Workshop.",
        },
        {
          id: "cacao",
          title: "Ancestral Cacao & Chocolate Making",
          duration: "1 Hour",
          price: "$130 - $150 MXN / person",
          description: "Discover the sacred history of Maya cacao, grind roasted beans on a stone metate, and taste an aromatic traditional drink.",
          highlight: "Stone metate grinding and tasting included.",
          whatsappMessage: "Hello Jesús, I would like to reserve the Cacao and Chocolate Workshop in Ek Balam.",
        },
        {
          id: "milpa",
          title: "Parcel Ceremony & Traditional Milpa Tour",
          duration: "1 to 1.5 Hours",
          price: "$150 MXN / person",
          description: "Visit a traditional farming parcel, learn the agroecological milpa system (corn, beans, squash), and join a gratitude ceremony.",
          highlight: "Authentic connection with Maya sacred agricultural cycles.",
          whatsappMessage: "Hello Jesús, I would love to join the Milpa and Parcel Ceremony experience.",
        },
      ],
    },
    transport: {
      tag: "Private Transfers",
      title: "Private Tourist Van & Transport Services",
      subtitle: "Dedicated Volkswagen Transporter van with air conditioning for your family or travel group.",
      vehicleTitle: "Comfortable & Reliable Transport Across Yucatán",
      vehicleDescription: "We provide private, door-to-door transportation tailored to your itinerary. Clean, fully air-conditioned, and driven by experienced local drivers.",
      routesTitle: "Popular Routes & Connections",
      routes: [
        {
          destination: "Ek Balam Cenotes & Local Attractions",
          type: "Local Transfer",
          description: "Rides to Xcanché cenote, Hubiku, Palomitas, Agua Dulce, and Zací in Valladolid.",
        },
        {
          destination: "Maya Train Stations (Tren Maya)",
          type: "Train Link",
          description: "Direct pick-up and drop-off at Valladolid and Chichén Itzá Maya Train stations.",
        },
        {
          destination: "Cancún & Mérida International Airports",
          type: "Airport Shuttles",
          description: "Stress-free private transfers to/from Cancún (CUN) and Mérida (MID) airports.",
        },
        {
          destination: "Riviera Maya & Colonial Cities",
          type: "Custom Day Trips",
          description: "Trips to Playa del Carmen, Tulum, Valladolid, Chichén Itzá, and Mérida.",
        },
      ],
      cta: "Get a Transport Quote via WhatsApp",
      whatsappMessage: "Hello Jesús, I would like a quote for private van transport. My itinerary and dates are: ",
    },
    complementary: {
      tag: "Full Services",
      title: "Lodging, Artisan Goods & Private Ceremonies",
      lodgingTitle: "Community Eco-Cabins & Lodging",
      lodgingDesc: "Stay peacefully inside Ek Balam village in charming local cabins.",
      craftsTitle: "Authentic Handmade Crafts",
      craftsDesc: "Purchase high-quality hammocks, fine embroidery, and local honey directly from makers.",
      ceremonyTitle: "Private Ceremonies & Cultural Gatherings",
      ceremonyDesc: "Respectful traditional Maya blessings, Het'smeek child ceremonies, and private events.",
    },
    visitorGuide: {
      tag: "Trip Essentials",
      title: "Visitor Guide & Reference Rates",
      subtitle: "Everything you need to know before visiting Ek Balam.",
      recommendationsTitle: "Visitor Recommendations",
      recommendations: [
        "Wear lightweight breathable clothing and sturdy walking shoes for trails and stone steps.",
        "Sun protection: hat, sunglasses, and eco-friendly biodegradable sunscreen.",
        "Biodegradable insect repellent.",
        "Bring plenty of drinking water to stay well-hydrated.",
        "Carry Mexican Pesos (cash) for park tickets, small shops, and local crafts.",
      ],
      feesTitle: "Archaeological Site Entrance Fees (INAH / CULTUR)",
      feesInfo: {
        title: "Official park ticket fees (not included in guide service):",
        foreigner: "International visitors: ~$709 MXN per person",
        national: "Mexican citizens: ~$280 MXN per person",
        note: "Note: Entrance tickets are bought on-site at the official parador ticket booth.",
      },
      policiesTitle: "Payment & Reservation Policies",
      paymentMethods: "Accepted Payment: Electronic Bank Transfer (SPEI) or direct arrangement.",
      cancellationPolicy: "Payment policy: 100% full payment prior to service commencement.",
    },
    faq: {
      tag: "Got Questions?",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How far in advance should I book my tour?",
          answer: "We suggest booking 24 to 48 hours in advance via WhatsApp so we can coordinate workshop schedules and vehicle availability.",
        },
        {
          question: "Can I combine the ruins tour with workshops and cenote transport?",
          answer: "Yes! We specialize in custom day packages combining the ruins in the morning, a chocolate or hammock workshop, and a cenote transfer.",
        },
        {
          question: "What languages do you speak?",
          answer: "Jesús Alfredo is fluent in English, French, Spanish, and Yucatec Maya.",
        },
        {
          question: "Are workshops suitable for children?",
          answer: "Absolutely. Our workshops are family-friendly, hands-on, and great for travelers of all ages.",
        },
      ],
    },
    contact: {
      tag: "Fast Response",
      title: "Book Your Ek Balam Experience",
      subtitle: "Message us directly on WhatsApp to coordinate dates, times, and tailored itineraries.",
      guideName: "Jesús Alfredo Chan Chan",
      guideRole: "SECTUR Certified Guide NOM-08 • Maya Cultural Host",
      location: "Ek Balam, Temozón, Yucatán, Mexico",
      whatsappLabel: "Direct WhatsApp",
      emailLabel: "Email Address",
      phoneFormatted: "+52 985 109 9234",
      email: "juniekbalam@gmail.com",
      directChat: "Chat on WhatsApp",
      speiNotice: "Bank transfers (SPEI) accepted for reservation deposits.",
    },
    footer: {
      brand: "Mayan Tours Ek Balam",
      tagline: "Community tourism, living Maya archaeology, and ancestral wisdom in Yucatán.",
      rights: "All rights reserved. Ek Balam, Yucatán, Mexico.",
      communityMessage: "A local initiative led by native Maya guides and families.",
    },
  },
  fr: {
    meta: {
      title: "Mayan Tours Ek Balam | Guide Maya Officiel Certifié Jesús Alfredo Chan",
      description: "Visitez le site archéologique d'Ek Balam, participez à des ateliers traditionnels de cacao et broderie, et réservez vos transferts avec Jesús Alfredo Chan Chan.",
    },
    nav: {
      about: "Le Guide",
      tours: "Archéologie",
      workshops: "Ateliers & Culture",
      transport: "Transport",
      info: "Infos Pratiques",
      contact: "Contact",
      bookNow: "Réserver via WhatsApp",
    },
    hero: {
      badge: "Guide Officiel Certifié SECTUR NOM-08 • Natif d'Ek Balam",
      title: "Découvrez le monde maya avec un",
      titleHighlight: "guide natif d'Ek Balam",
      subtitle: "Plus de 12 ans d'expérience à partager l'histoire vivante, l'architecture sacrée et les ateliers communautaires au Yucatán.",
      ctaPrimary: "Découvrir les Expériences",
      ctaSecondary: "Contacter sur WhatsApp",
      features: {
        cert: "Accréditation SECTUR NOM-08",
        exp: "12+ Ans d'Expérience",
        native: "Tourisme Communautaire 100% Natif",
        langs: "Français, Anglais, Espagnol, Maya",
      },
    },
    about: {
      tag: "Votre Hôte Local",
      title: "Rencontrez Jesús Alfredo Chan Chan",
      subtitle: "Un lien vivant entre la civilisation maya et les voyageurs du monde.",
      bioParagraph1: "Je suis né au sein de la communauté maya d'Ek Balam à Temozón, Yucatán. Depuis plus de 12 ans, j'accompagne les visiteurs dans la découverte de nos cités antiques et de nos traditions.",
      bioParagraph2: "Notre projet est communautaire : chaque visite, atelier et transport apporte un bénéfice direct et partagé aux familles et artisans d'Ek Balam.",
      stats: {
        experience: "12+",
        experienceLabel: "Ans d'expérience",
        certification: "NOM-08",
        certificationLabel: "Certifié SECTUR",
        languages: "4",
        languagesLabel: "Langues (FR, EN, ES, Maya)",
        community: "100%",
        communityLabel: "Impact Communautaire",
      },
      quote: "Notre travail à Ek Balam est au bénéfice de toute la communauté; c'est une hospitalité partagée où nous vous ouvrons nos portes.",
    },
    tours: {
      tag: "Archéologie & Histoire",
      title: "Visite Guidée du Site d'Ek Balam",
      subtitle: "Explorez la mystérieuse cité 'Étoile Jaguar' (Ek' Balam), ses fresques en stuc et le tombeau royal maya.",
      items: [
        {
          id: "ekbalam-ruins",
          title: "Visite Guidée Officielle d'Ek Balam",
          category: "Archéologie et Cosmovision",
          duration: "1 Heure (environ)",
          price: "Tarif guide personnalisé",
          description: "Parcours guidé complet de l'Acropole, de la Place Centrale, du tombeau d'Ukit Kan Lek Tok' et des fresques en stuc représentant rois et êtres ailés.",
          includes: [
            "Guide officiel certifié SECTUR NOM-08",
            "Visite guidée en Français, Anglais, Espagnol ou Maya",
            "Histoire dynastique et décryptage des symboles mayas",
            "Conseils personnalisés pour cenotes et restaurants locaux",
          ],
          notIncludes: [
            "Billets d'entrée au site archéologique (payables au guichet officiel)",
          ],
          badge: "Visite Incontournable",
          whatsappMessage: "Bonjour Jesús, je souhaite réserver une visite guidée en français du site archéologique d'Ek Balam.",
        },
      ],
    },
    workshops: {
      tag: "Traditions Vivantes",
      title: "Ateliers Artisanaux chez l'Habitant",
      subtitle: "Partagez le quotidien d'Ek Balam et découvrez des savoir-faire ancestraux au cœur des foyers mayas.",
      note: "Ateliers d'1 heure. Tarif accessible : 130 à 150 MXN (~7-8 €) par personne, reversés directement aux familles.",
      items: [
        {
          id: "hamaca",
          title: "Atelier de Tissage de Hamacs",
          duration: "1 Heure",
          price: "130 - 150 MXN / personne",
          description: "Initiez-vous au tissage traditionnel des hamacs yucatèques avec les familles du village.",
          highlight: "Pratique sur métier à tisser traditionnel en bois.",
          whatsappMessage: "Bonjour Jesús, je souhaite réserver l'Atelier de Tissage de Hamacs.",
        },
        {
          id: "bordado",
          title: "Atelier de Broderie Traditionnelle",
          duration: "1 Heure",
          price: "130 - 150 MXN / personne",
          description: "Apprenez les motifs et techniques de broderie des célèbres huipils mayas.",
          highlight: "Animé par des brodeuses mayas d'Ek Balam.",
          whatsappMessage: "Bonjour Jesús, je souhaite réserver l'Atelier de Broderie Traditionnelle.",
        },
        {
          id: "cacao",
          title: "Atelier Cacao et Chocolat Ancestral",
          duration: "1 Heure",
          price: "130 - 150 MXN / personne",
          description: "Broyez le cacao torréfié sur un metate en pierre et dégustez une boisson chocolatée maya traditionnelle.",
          highlight: "Broyage sur metate en pierre et dégustation.",
          whatsappMessage: "Bonjour Jesús, je souhaite réserver l'Atelier Cacao et Chocolat.",
        },
        {
          id: "milpa",
          title: "Cérémonie et Visite de la Milpa",
          duration: "1 à 1.5 Heure",
          price: "150 MXN / personne",
          description: "Découvrez le champ traditionnel maya (maïs, haricots, courges) et assistez à une cérémonie de gratitude.",
          highlight: "Immersion dans l'agroécologie et la spiritualité maya.",
          whatsappMessage: "Bonjour Jesús, je souhaite participer à la Cérémonie et découverte de la Milpa.",
        },
      ],
    },
    transport: {
      tag: "Transferts Privés",
      title: "Transport Privé et Circuits en Van",
      subtitle: "Van Volkswagen Transporter climatisée pour vos déplacements en toute sérénité.",
      vehicleTitle: "Confort et Sécurité dans Tout le Yucatán",
      vehicleDescription: "Véhicule spacieux et climatisé avec chauffeur local expérimenté pour tous vos trajets vers les aéroports, cénotes et villes coloniales.",
      routesTitle: "Destinations Principales",
      routes: [
        {
          destination: "Cénotes d'Ek Balam et Environs",
          type: "Trajet Local",
          description: "Transferts vers les cénotes Xcanché, Hubiku, Palomitas, Agua Dulce ou Zací.",
        },
        {
          destination: "Gares du Train Maya",
          type: "Liaison Train",
          description: "Liaisons avec les gares de Valladolid et Chichén Itzá.",
        },
        {
          destination: "Aéroports de Cancún et Mérida",
          type: "Transfert Aéroport",
          description: "Transferts privés directs depuis/vers l'aéroport de Cancún (CUN) ou Mérida (MID).",
        },
        {
          destination: "Riviera Maya et Cités Mayas",
          type: "Excursions d'une Journée",
          description: "Trajets vers Playa del Carmen, Tulum, Valladolid, Chichén Itzá et Mérida.",
        },
      ],
      cta: "Demander un Devis de Transport sur WhatsApp",
      whatsappMessage: "Bonjour Jesús, je souhaite un devis pour un transfert en van. Mon trajet et dates sont : ",
    },
    complementary: {
      tag: "Services Complémentaires",
      title: "Hébergement, Artisanat et Cérémonies",
      lodgingTitle: "Cabanes Écologiques & Hébergement",
      lodgingDesc: "Dormez au calme à Ek Balam dans des cabanes locales confortables.",
      craftsTitle: "Artisanat Local Authentique",
      craftsDesc: "Achetez directement aux artisans : hamacs, broderies fines et miel de melipona.",
      ceremonyTitle: "Cérémonies Mayas Privées",
      ceremonyDesc: "Organisation de bénédictions et rituels traditionnels dans le respect des coutumes.",
    },
    visitorGuide: {
      tag: "Préparez Votre Visite",
      title: "Guide Pratique et Tarifs de Référence",
      subtitle: "Toutes les informations utiles avant votre venue à Ek Balam.",
      recommendationsTitle: "Conseils pour les Visiteurs",
      recommendations: [
        "Vêtements légers en coton et chaussures de marche fermées pour les sentiers et marches en pierre.",
        "Protection solaire : chapeau, lunettes de soleil et crème solaire biodégradable.",
        "Répulsif anti-moustiques respectueux de l'environnement.",
        "Apportez suffisamment d'eau pour vous hydrater.",
        "Prévoir des espèces (Pesos Mexicains) pour les billets d'entrée et l'artisanat.",
      ],
      feesTitle: "Tarifs d'Entrée au Site Archéologique (INAH / CULTUR)",
      feesInfo: {
        title: "Prix des billets officiels (non inclus dans la prestation de guide) :",
        foreigner: "Visiteurs étrangers : ~709 MXN par personne",
        national: "Visiteurs nationaux mexicains : ~280 MXN par personne",
        note: "Note : Les billets s'achètent sur place aux guichets officiels du site.",
      },
      policiesTitle: "Conditions de Réservation et Paiement",
      paymentMethods: "Moyens de paiement acceptés : Virement bancaire (SPEI) ou règlement convenu.",
      cancellationPolicy: "Conditions de paiement : Règlement intégral (100%) avant le début de la prestation.",
    },
    faq: {
      tag: "Questions Fréquentes",
      title: "Foire Aux Questions",
      items: [
        {
          question: "Combien de temps à l'avance dois-je réserver ?",
          answer: "Nous conseillons de réserver 24 à 48 heures à l'avance par WhatsApp pour organiser les horaires et ateliers.",
        },
        {
          question: "Puis-je combiner la visite des ruines, un atelier et un cénote ?",
          answer: "Oui, nous organisons des journées sur-mesure combinant ruines le matin, atelier traditionnel et baignade en cénote.",
        },
        {
          question: "Quelles langues parle le guide ?",
          answer: "Jesús Alfredo parle couramment Français, Anglais, Espagnol et Maya Yucatèque.",
        },
        {
          question: "Les ateliers sont-ils adaptés aux enfants ?",
          answer: "Oui, tous nos ateliers sont très appréciés des familles et adaptés à tous les âges.",
        },
      ],
    },
    contact: {
      tag: "Contact Rapide",
      title: "Réservez Votre Expérience à Ek Balam",
      subtitle: "Écrivez-nous directement sur WhatsApp pour convenir des dates et de votre programme sur-mesure.",
      guideName: "Jesús Alfredo Chan Chan",
      guideRole: "Guide Officiel Agréé SECTUR NOM-08 • Hôte Maya",
      location: "Ek Balam, Temozón, Yucatán, Mexique",
      whatsappLabel: "WhatsApp Direct",
      emailLabel: "Adresse E-mail",
      phoneFormatted: "+52 985 109 9234",
      email: "juniekbalam@gmail.com",
      directChat: "Discuter sur WhatsApp",
      speiNotice: "Virements bancaires (SPEI) acceptés pour les acomptes et réservations.",
    },
    footer: {
      brand: "Mayan Tours Ek Balam",
      tagline: "Tourisme communautaire, archéologie vivante et traditions mayas au Yucatán.",
      rights: "Tous droits réservés. Ek Balam, Yucatán, Mexique.",
      communityMessage: "Projet mené par des guides et familles mayas d'Ek Balam.",
    },
  },
};
