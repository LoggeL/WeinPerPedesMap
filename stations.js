const stations = [
  {
    id: 1,
    name: 'Heiser Buchner',
    lat: 49.60983032162279,
    lng: 8.180480003356935,
    description:
      'Traditionelles Familienweingut mit langer Geschichte und feinsten Weinen aus der Pfalz.',
    offerings: [
      {
        name: '2021 Riesling Kabinett trocken',
        description: 'Fruchtig-frisch mit feiner Mineralität und Apfelnoten',
        price: '4,50€/Glas',
      },
      {
        name: '2022 Weißburgunder trocken',
        description: 'Eleganter Weißwein mit Aromen von Birne und Quitte',
        price: '4,00€/Glas',
      },
      {
        name: 'Pfälzer Winzerbrot mit Schmalz',
        description:
          'Hausgemachtes Bauernbrot mit frischem Schmalz und Zwiebeln',
        price: '5,50€',
      },
      {
        name: 'Winzersekt Cuvée brut',
        description:
          'Feiner Sekt aus Riesling und Weißburgunder, perlend und frisch',
        price: '5,00€/Glas',
      },
    ],
  },
  {
    id: 2,
    name: 'Jens Griebel',
    lat: 49.60502176933786,
    lng: 8.173763751983644,
    description:
      'Modernes Familienweingut in dritter Generation mit Fokus auf regionaltypische Weine und nachhaltigem Anbau in den besten Lagen von Bockenheim.',
    offerings: [
      {
        name: '2022 Silvaner trocken',
        description:
          'Charaktervoller Weißwein mit feiner Kräuternote und mineralischem Abgang',
        price: '4,50€/Glas',
      },
      {
        name: '2021 Grauburgunder "Kalkstein"',
        description:
          'Cremiger Weißwein mit Aromen von reifen Birnen und Haselnuss',
        price: '5,00€/Glas',
      },
      {
        name: '2020 Spätburgunder Reserve',
        description:
          'Eleganter Rotwein mit Noten von Kirsche und einer feinen Holznote',
        price: '6,50€/Glas',
      },
      {
        name: 'Pfälzer Saumagen',
        description:
          'Regionale Spezialität nach traditionellem Rezept der Familie Griebel',
        price: '8,50€',
      },
      {
        name: 'Winzerplatte',
        description:
          'Auswahl an hausgemachten Wurst- und Käsespezialitäten mit Bauernbrot',
        price: '9,50€',
      },
    ],
  },
  {
    id: 3,
    name: 'Lauermann & Weyer',
    lat: 49.60088437405334,
    lng: 8.16910743713379,
    description:
      'Innovative Weinmanufaktur mit modernen Interpretationen klassischer Pfälzer Rebsorten.',
    offerings: [
      {
        name: '2022 Grauburgunder Spätlese',
        description:
          'Vollmundig mit tropischen Fruchtnoten und feiner Restsüße',
        price: '5,00€/Glas',
      },
      {
        name: '2021 Spätburgunder Rosé',
        description: 'Frischer Sommerwein mit Aromen von roten Beeren',
        price: '4,50€/Glas',
      },
      {
        name: 'Flammkuchen "Elsässer Art"',
        description: 'Mit Speck, Zwiebeln und Schmand auf dünnem Teig',
        price: '7,50€',
      },
      {
        name: 'Merlot vom Fass',
        description:
          'Harmonischer Rotwein mit weichen Tanninen und Brombeeraromen',
        price: '5,50€/Glas',
      },
    ],
  },
  {
    id: 4,
    name: 'Kinnerumer Kerweborsch',
    lat: 49.60061422768533,
    lng: 8.16139340400696,
    description:
      'Die Kerweborsch sorgen mit traditionellen Speisen und guter Stimmung für echtes Dorffest-Feeling.',
    offerings: [
      {
        name: 'Hausmacher Bratwurst',
        description: 'Deftige Pfälzer Bratwurst vom Grill mit Bauernbrot',
        price: '4,50€',
      },
      {
        name: 'Dampfnudeln mit Weinsoße',
        description: 'Süße Spezialität nach altem Familienrezept',
        price: '5,50€',
      },
      {
        name: 'Pfälzer Schorle',
        description:
          'Klassische Weinschorle aus Riesling, erfrischend und süffig',
        price: '3,00€/Glas',
      },
      {
        name: 'Kerwekuchen',
        description: 'Traditioneller Streuselkuchen nach altem Dorfrezept',
        price: '2,50€/Stück',
      },
    ],
  },
  {
    id: 5,
    name: 'TVK & HSVL',
    lat: 49.60523789102663,
    lng: 8.153035640716555,
    description:
      'Vereinsgemeinschaft mit herzlicher Atmosphäre und traditionellen Pfälzer Genüssen.',
    offerings: [
      {
        name: 'Bratwurst vom Grill',
        description: 'Gegrillte Pfälzer Bratwurst mit Bauernbrot und Senf',
        price: '4,50€',
      },
      {
        name: 'Fleischkäse im Brötchen',
        description: 'Warmer Fleischkäse im knusprigen Brötchen',
        price: '4,00€',
      },
      {
        name: 'Weinschorle',
        description: 'Weiß oder rot, nach Wahl',
        price: '3,00€/Glas',
      },
      {
        name: 'Kaffee und Kuchen',
        description: 'Hausgemachter Kuchen nach Tagesangebot',
        price: '3,50€',
      },
    ],
  },
  {
    id: 6,
    name: 'Gernot Weber',
    lat: 49.608156418445404,
    lng: 8.154612779617311,
    description:
      'Prämiertes Weingut mit Fokus auf nachhaltigem Weinbau und charaktervollen Weinen.',
    offerings: [
      {
        name: '2022 Sauvignon Blanc',
        description:
          'Frischer Weißwein mit Noten von Stachelbeeren und Zitrusfrüchten',
        price: '5,50€/Glas',
      },
      {
        name: '2020 Merlot Barrique',
        description:
          'Im Eichenfass gereift, mit samtigen Tanninen und Vanillearomen',
        price: '6,00€/Glas',
      },
      {
        name: 'Pfälzer Wurstsalat',
        description:
          'Traditioneller Wurstsalat mit Käse, Zwiebeln und Essig-Öl-Dressing',
        price: '6,50€',
      },
      {
        name: 'Käseauswahl',
        description: 'Regionale Käsesorten mit Weintrauben und Walnüssen',
        price: '8,50€',
      },
    ],
  },
  {
    id: 7,
    name: 'Weingut Schur',
    lat: 49.607226455067575,
    lng: 8.161715269088747,
    description:
      'Kleines Familienweingut mit liebevoll ausgebauten Weinen und persönlicher Beratung.',
    offerings: [
      {
        name: '2022 Gewürztraminer Spätlese',
        description:
          'Aromatischer Weißwein mit Rosennoten und exotischen Früchten',
        price: '5,00€/Glas',
      },
      {
        name: '2021 Cabernet Sauvignon',
        description:
          'Kräftiger Rotwein mit Aromen von schwarzen Johannisbeeren',
        price: '5,50€/Glas',
      },
      {
        name: 'Winzerplatte',
        description: 'Wurst- und Käseauswahl mit hausgemachten Chutneys',
        price: '9,00€',
      },
      {
        name: 'Zwiebelkuchen',
        description: 'Traditioneller Pfälzer Zwiebelkuchen nach Familienrezept',
        price: '4,50€/Stück',
      },
    ],
  },
  {
    id: 8,
    name: 'Weingut Benß',
    lat: 49.610056384251195,
    lng: 8.171027898788454,
    description:
      'Traditionsweingut in vierter Generation mit Fokus auf elegante und langlebige Weine.',
    offerings: [
      {
        name: '2021 Chardonnay Réserve',
        description:
          'Edler Weißwein mit Holznoten und reifer Frucht, im Barrique gereift',
        price: '6,00€/Glas',
      },
      {
        name: '2020 Cuvée Rot "Heimaterde"',
        description: 'Kraftvolle Cuvée aus Merlot, Cabernet und Dornfelder',
        price: '5,50€/Glas',
      },
      {
        name: 'Saumagen',
        description: 'Pfälzer Spezialität, deftig und würzig',
        price: '8,50€',
      },
      {
        name: 'Winzersekt Rosé',
        description: 'Eleganter Sekt aus Spätburgunder, zart und fruchtig',
        price: '5,00€/Glas',
      },
    ],
  },
]

const walkingPath = [
  {
    lat: 49.609930595018724,
    lng: 8.180394172668459,
  },
  {
    lat: 49.60992712072913,
    lng: 8.179793357849123,
  },
  {
    lat: 49.609822891925546,
    lng: 8.179648518562319,
  },
  {
    lat: 49.60890219448143,
    lng: 8.17962169647217,
  },
  {
    lat: 49.60879773855286,
    lng: 8.175458908081056,
  },
  {
    lat: 49.60895061060341,
    lng: 8.174686431884767,
  },
  {
    lat: 49.60943701848394,
    lng: 8.173334598541262,
  },
  {
    lat: 49.60964638165533,
    lng: 8.171521425247194,
  },
  {
    lat: 49.60754694922243,
    lng: 8.172680139541628,
  },
  {
    lat: 49.605677654238214,
    lng: 8.173570632934572,
  },
  {
    lat: 49.604996629330884,
    lng: 8.173731565475466,
  },
  {
    lat: 49.603460334379,
    lng: 8.174053430557253,
  },
  {
    lat: 49.60259163898258,
    lng: 8.17413926124573,
  },
  {
    lat: 49.601966168713595,
    lng: 8.174182176589968,
  },
  {
    lat: 49.601611731999625,
    lng: 8.173688650131227,
  },
  {
    lat: 49.601250342893465,
    lng: 8.17211151123047,
  },
  {
    lat: 49.60076385332858,
    lng: 8.169912099838259,
  },
  {
    lat: 49.60049975696072,
    lng: 8.169289827346804,
  },
  {
    lat: 49.600869855173315,
    lng: 8.169166445732118,
  },
  {
    lat: 49.60082468099423,
    lng: 8.168694376945497,
  },
  {
    lat: 49.60041463653146,
    lng: 8.168764114379885,
  },
  {
    lat: 49.59995768497879,
    lng: 8.166811466217043,
  },
  {
    lat: 49.599804784728114,
    lng: 8.165223598480226,
  },
  {
    lat: 49.59961018371566,
    lng: 8.164483308792116,
  },
  {
    lat: 49.599297430461526,
    lng: 8.164011240005495,
  },
  {
    lat: 49.59910282742436,
    lng: 8.162519931793215,
  },
  {
    lat: 49.59890127346002,
    lng: 8.161790370941164,
  },
  {
    lat: 49.60031213371597,
    lng: 8.161221742630007,
  },
  {
    lat: 49.600583181011835,
    lng: 8.161425590515138,
  },
  {
    lat: 49.602556915887384,
    lng: 8.16063165664673,
  },
  {
    lat: 49.60232062789382,
    lng: 8.158797025680544,
  },
  {
    lat: 49.60123660425131,
    lng: 8.152542114257814,
  },
  {
    lat: 49.60306437218423,
    lng: 8.151715993881227,
  },
  {
    lat: 49.60535838417402,
    lng: 8.15362572669983,
  },
  {
    lat: 49.60519855160544,
    lng: 8.152874708175661,
  },
  {
    lat: 49.60608109881217,
    lng: 8.15240263938904,
  },
  {
    lat: 49.60675515953961,
    lng: 8.154119253158571,
  },
  {
    lat: 49.60767242308451,
    lng: 8.153464794158937,
  },
  {
    lat: 49.6081310483849,
    lng: 8.154591321945192,
  },
  {
    lat: 49.60754691345096,
    lng: 8.155213594436647,
  },
  {
    lat: 49.60788046041064,
    lng: 8.156855106353762,
  },
  {
    lat: 49.60809587494252,
    lng: 8.157509565353395,
  },
  {
    lat: 49.607310649640425,
    lng: 8.157531023025514,
  },
  {
    lat: 49.60644897192231,
    lng: 8.157842159271242,
  },
  {
    lat: 49.60734479258583,
    lng: 8.161725997924806,
  },
  {
    lat: 49.6077344400495,
    lng: 8.163088560104372,
  },
  {
    lat: 49.60907920738918,
    lng: 8.169091343879701,
  },
  {
    lat: 49.60908336495227,
    lng: 8.169096708297731,
  },
  {
    lat: 49.609061756940456,
    lng: 8.16910743713379,
  },
  {
    lat: 49.60908938720045,
    lng: 8.169091343879701,
  },
  {
    lat: 49.60910005706276,
    lng: 8.169096708297731,
  },
  {
    lat: 49.60961150261976,
    lng: 8.16889822483063,
  },
  {
    lat: 49.60961864797831,
    lng: 8.16889822483063,
  },
  {
    lat: 49.60908997067735,
    lng: 8.169096708297731,
  },
  {
    lat: 49.609607635258975,
    lng: 8.16888749599457,
  },
  {
    lat: 49.610024550977165,
    lng: 8.171011805534365,
  },
  {
    lat: 49.60963542438564,
    lng: 8.171505331993105,
  },
]
