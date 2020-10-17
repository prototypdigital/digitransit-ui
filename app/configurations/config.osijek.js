/**
 * Base settings
 */
const CONFIG = 'osijek';
const APP_TITLE = 'Digitransit - Grad Osijek';
const APP_DESCRIPTION = 'Dobrodošli u lokalnu navigaciju grada osijeka';
const YEAR = 1900 + new Date().getYear();
const APP_PATH = process.env.APP_CONTEXT || '';
const FONT =
  'https://fonts.googleapis.com/css?family=Lato:300,400,900%7CPT+Sans+Narrow:400,700';

/**
 * Service endpoints
 */
// API
const API_URL = process.env.API_URL || 'https://api.cityrouting.e-gpp.hr';
const OTP = process.env.OTP_URL || `${API_URL}/routing/v1/routers/croatia/`;
const GEOCODING_BASE_URL = `https://api.cityrouting.e-gpp.hr/geocoding/v1`;

// GEOCODER
const PELIAS = `${process.env.GEOCODING_BASE_URL || GEOCODING_BASE_URL}/search`;
const PELIAS_REVERSE_GEOCODER = `${
  process.env.GEOCODING_BASE_URL || GEOCODING_BASE_URL
}/reverse`;

// MAP
const MAP_URL = process.env.MAP_URL || 'https://api.maptiler.com/maps/basic/';

/**
 * Port settings
 */
const PORT = process.env.PORT || 8080;

/**
 * Map boundaries
 */
const minLat = 45.3244;
const maxLat = 45.8938;
const minLon = 18.2342;
const maxLon = 19.1046;

/**
 * Config
 */
export default {
  CONFIG,
  PORT,
  APP_PATH,
  URL: {
    API_URL,
    MAP_URL,
    PELIAS,
    PELIAS_REVERSE_GEOCODER,
    OTP,
    FONT,
    ASSET_URL: process.env.ASSET_URL,
    MAP: { default: MAP_URL },
    STOP_MAP: `${API_URL}/map/v1/croatia-stop-map/`,
    ROUTE_TIMETABLES: { HSL: `${API_URL}/timetables/v1/hsl/routes/` },
    STOP_TIMETABLES: { HSL: `${API_URL}/timetables/v1/hsl/stops/` },
  },

  appBarLinks: [
    { name: 'Grad Osijek', href: 'https://www.osijek.hr/' },
    { name: 'GPP', href: 'http://www.gpp-osijek.com/' },
    { name: 'HŽPP', href: 'https://prodaja.hzpp.hr/' },
    { name: 'Flixbus', href: 'https://global.flixbus.com/' },
  ],

  searchSources: ['osm', 'openstreetmap'],

  modeToOTP: {
    bus: 'BUS',
    tram: 'TRAM',
    rail: 'RAIL',
    walk: 'WALK',
  },

  colors: {
    primary: '#9fbf4e',
  },

  socialMedia: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },

  // Google Tag Manager id
  GTMid: 'GTM-NC9NQQW',

  title: APP_TITLE,

  textLogo: false,

  logo: 'osijek/logo.png',

  favicon: './app/configurations/images/osijek/favicon.png',

  feedIds: [],
  availableLanguages: ['hr', 'en'],
  defaultLanguage: 'hr',

  searchParams: {
    'boundary.rect.min_lat': minLat,
    'boundary.rect.max_lat': maxLat,
    'boundary.rect.min_lon': minLon,
    'boundary.rect.max_lon': maxLon,
  },

  areaPolygon: [
    [minLon, minLat],
    [minLon, maxLat],
    [maxLon, maxLat],
    [maxLon, minLat],
  ],

  defaultEndpoint: {
    address: 'Željeznički kolodvor Osijek',
    lon: 18.68376,
    lat: 45.55281,
  },

  defaultOrigins: [
    {
      icon: 'icon-icon_info',
      label: 'Trg Ante Starčevića ',
      lon: 18.677,
      lat: 45.56156,
    },
    {
      icon: 'icon-icon_info',
      label: 'Tvrđa ',
      lon: 18.69599,
      lat: 45.56085,
    },
    {
      icon: 'icon-icon_bus',
      label: 'Autobusni kolodvor Osijek',
      lon: 18.67992,
      lat: 45.55303,
    },
    {
      icon: 'icon-icon_rail',
      label: 'Željeznički kolodvor Osijek',
      lon: 18.68376,
      lat: 45.55281,
    },
  ],

  transportModes: {
    bus: {
      availableForSelection: true,
      defaultValue: true,
    },

    tram: {
      availableForSelection: true,
      defaultValue: false,
    },

    rail: {
      availableForSelection: true,
      defaultValue: false,
    },

    ferry: {
      availableForSelection: false,
      defaultValue: false,
    },

    subway: {
      availableForSelection: false,
      defaultValue: false,
    },
  },

  nearestStopDistance: {
    maxShownDistance: 5000,
  },

  stopCard: {
    header: {
      showDescription: true,
      showStopCode: true,
      showDistance: true,
      showZone: false,
    },
  },

  // Lowest level for stops and terminals are rendered
  stopsMinZoom: 13,
  // Highest level when stops and terminals are still rendered as small markers
  stopsSmallMaxZoom: 14,
  // Highest level when terminals are still rendered instead of individual stops
  terminalStopsMaxZoom: 17,
  terminalStopsMinZoom: 12,
  terminalNamesZoom: 16,
  mergeStopsByCode: true,
  stopsIconSize: {
    small: 8,
    selected: 28,
    default: 18,
  },

  showAllBusses: true,
  showVehiclesOnStopPage: true,

  map: {
    useRetinaTiles: true,
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 18,
    genericMarker: {
      // Do not render name markers at zoom levels below this value
      nameMarkerMinZoom: 18,

      popup: {
        offset: [106, 16],
        maxWidth: 250,
        minWidth: 250,
      },
    },
  },

  sprites: 'assets/svg-sprite.default.svg',

  streetModes: {
    public_transport: {
      availableForSelection: true,
      defaultValue: true,
      exclusive: false,
      icon: 'bus-withoutBox',
    },

    walk: {
      availableForSelection: true,
      defaultValue: false,
      exclusive: true,
      icon: 'walk',
    },

    bicycle: {
      availableForSelection: false,
      defaultValue: false,
      exclusive: true,
      icon: 'bicycle-withoutBox',
    },

    car: {
      availableForSelection: true,
      defaultValue: false,
      exclusive: true,
      icon: 'car-withoutBox',
    },
  },

  mainMenu: {
    // Whether to show the left menu toggle button at all
    show: true,
    showDisruptions: false,
    showLoginCreateAccount: true,
    showOffCanvasList: true,
  },

  footer: {
    content: [
      { label: `© Grad Osijek ${YEAR}` },
      // Spacer
      {},
      {
        name: 'footer-feedback',
        nameEn: 'Submit feedback',
        href: 'mailto:info@osijek.hr',
        icon: 'icon-icon_speech-bubble',
      },
      {
        name: 'about-this-service',
        nameEn: 'About this service',
        route: '/o-usluzi',
        icon: 'icon-icon_info',
      },
    ],
  },

  aboutThisService: {
    hr: [
      {
        header: 'O usluzi',
        paragraphs: [
          'Ovu uslugu nudi Grad Osijek za planiranje putovanja unutar urbane Aglomeracije grada. Usluga pokriva javni, željeznički, međugradski prijevoz te pješačke rute. Usluga je temeljena na Digitransit sustavu.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'This service is provided by City of Osijek for route planning in Osijek-Baranja region. The service covers public transport, train, intercity bus and walking. Service is built on Digitransit platform.',
        ],
      },
    ],
  },
};
