import L from 'leaflet';

interface Event {
  placeName: string;
  description: string;
  latlng: L.LatLng;
}

interface Cycle {
  name: string;
  events: Event[];
}

export const cycles: Cycle[] = [
  {
    name: 'Rencontres entre Des Grieux et Renoncour',
    events: [
      {
        placeName: 'Hôtellerie de Pacy',
        description: 'Renoncour rencontre Des Grieux pour la première fois',
        latlng: L.latLng(49.01421132996946, 1.3800250651426385),
      },
      {
        placeName: 'Hôtel Lion d\'Or',
        description: 'Des Grieux raconte toute son histoire',
        latlng: L.latLng(50.95157725866254, 1.8582214254860336),
      },
    ],
  },
  {
    name: 'Cycle 1',
    events: [
      {
        placeName: 'Amiens',
        description: 'Coup de foudre de Des Grieux',
        latlng: L.latLng(49.89437629715798, 2.2955438525342458),
      },
      {
        placeName: 'Saint-Denis',
        description: 'Fugue de Des Grieux et Manon',
        latlng: L.latLng(48.93570646696406, 2.3582349276637875),
      },
      {
        placeName: 'Église Saint-Sulpice',
        description: 'Début des études de Des Grieux au séminaire',
        latlng: L.latLng(48.85094095812596, 2.334879590137567),
      },
    ],
  },
  {
    name: 'Cycle 2',
    events: [
      {
        placeName: 'Chaillot',
        description: 'Fugue et installation dans une nouvelle demeure',
        latlng: L.latLng(48.868148093204724, 2.2889581373564263)
      },
      {
        placeName: 'Prison de Saint-Lazare',
        description: 'Emprisonnement de Des Grieux',
        latlng: L.latLng(48.875859343936455, 2.354293231148066),
      },
      {
        placeName: 'Hôpital de la Salpêtrière',
        description: 'Emprisonnement de Manon',
        latlng: L.latLng(48.83707825629325, 2.3650466026796457),
      },
    ],
  },
  {
    name: 'Cycle 3',
    events: [
      {
        placeName: 'Prison de Saint-Lazare',
        description: 'Evasion de Des Grieux',
        latlng: L.latLng(48.875859343936455, 2.354293231148066),
      },
      {
        placeName: 'Hôpital de la Salpêtrière',
        description: 'Evasion de Manon avec la complicité de Des Grieux',
        latlng: L.latLng(48.83707825629325, 2.3650466026796457),
      },
      {
        placeName: 'Bois de Boulogne',
        description: 'Tentative de séduction de Manon par le prince italien',
        latlng: L.latLng(48.862441796689836, 2.249173056319541)
      },
      {
        placeName: 'Théâtre de la Comédie Française',
        description: 'Trahison de Manon avec le jeune G... M...',
        latlng: L.latLng(48.863569376492265, 2.335937679451521),
      },
      {
        placeName: 'Prison du Châtelet',
        description: 'Emprisonnement de Des Grieux et de Manon',
        latlng: L.latLng(48.852756520370725, 2.3471567657499244),
      },
    ],
  },
  {
    name: 'Cycle 4',
    events: [
      {
        placeName: 'Navire vers l\'Amérique',
        description: 'Des Grieux suit Manon comme colon volontaire',
        latlng: L.latLng(40.00505930989624, -40.55585336068678),
      },
      {
        placeName: 'Nouvelle-Orléans',
        description: 'Vie heureuse et amour sincère',
        latlng: L.latLng(29.950960677547403, -90.07148619230067),
      },
      {
        placeName: 'Rue à une centaine de pas hors de la ville',
        description: 'Duel entre Des Grieux et Synnelet',
        latlng: L.latLng(29.97878064592997, -90.01940362581198),
      },
      {
        placeName: 'Désert',
        description: 'Mort de Manon',
        latlng: L.latLng(29.927394826948387, -89.87398201975412),
      },
      {
        placeName: 'Hôtel Lion d\'Or',
        description: 'Retour de Des Grieux chez son frère',
        latlng: L.latLng(50.95157725866254, 1.8582214254860336),
      },
    ],
  },
];
