// Comprehensive watch data for the entire website

export interface WatchBrand {
  id: string;
  name: string;
  founded: number;
  origin: string;
  category: 'holy-trinity' | 'luxury' | 'entry-swiss' | 'japanese' | 'microbrand';
  description: string;
  priceRange: string;
  notable: string[];
  website?: string;
}

export interface Movement {
  id: string;
  name: string;
  type: 'quartz' | 'manual' | 'automatic' | 'solar' | 'kinetic' | 'spring-drive';
  description: string;
  pros: string[];
  cons: string[];
  powerReserve?: string;
  accuracy: string;
  maintenance: string;
}

export interface WatchType {
  id: string;
  name: string;
  slug: string;
  description: string;
  characteristics: string[];
  typicalFeatures: string[];
  priceRange: string;
  exampleBrands: string[];
  bestFor: string[];
  history: string;
}

export interface Complication {
  id: string;
  name: string;
  category: 'simple' | 'popular' | 'grand';
  description: string;
  purpose: string;
  complexity: 1 | 2 | 3 | 4 | 5;
  priceImpact: 'low' | 'medium' | 'high' | 'very-high';
}

export const WATCH_BRANDS: WatchBrand[] = [
  // Holy Trinity
  {
    id: 'patek-philippe',
    name: 'Patek Philippe',
    founded: 1839,
    origin: 'Geneva, Switzerland',
    category: 'holy-trinity',
    description: 'The pinnacle of Swiss watchmaking, Patek Philippe is renowned for creating timepieces of unparalleled quality and complexity. Their watches are considered the ultimate status symbol and investment pieces, with vintage models regularly breaking auction records.',
    priceRange: '$20,000 - $5,000,000+',
    notable: ['Calatrava', 'Nautilus', 'Aquanaut', 'Grand Complications'],
    website: 'patek.com'
  },
  {
    id: 'audemars-piguet',
    name: 'Audemars Piguet',
    founded: 1875,
    origin: 'Le Brassus, Switzerland',
    category: 'holy-trinity',
    description: 'Family-owned since its founding, Audemars Piguet revolutionized luxury sports watches with the Royal Oak in 1972. They combine traditional haute horlogerie with bold, contemporary design.',
    priceRange: '$18,000 - $800,000+',
    notable: ['Royal Oak', 'Royal Oak Offshore', 'Code 11.59'],
    website: 'audemarspiguet.com'
  },
  {
    id: 'vacheron-constantin',
    name: 'Vacheron Constantin',
    founded: 1755,
    origin: 'Geneva, Switzerland',
    category: 'holy-trinity',
    description: 'The oldest continuously operating watch manufacturer, Vacheron Constantin represents the pinnacle of traditional Swiss craftsmanship. Each watch is a work of art, combining technical mastery with aesthetic refinement.',
    priceRange: '$20,000 - $2,000,000+',
    notable: ['Overseas', 'Patrimony', 'Traditionnelle', 'Historiques'],
    website: 'vacheron-constantin.com'
  },
  // Luxury Brands
  {
    id: 'rolex',
    name: 'Rolex',
    founded: 1905,
    origin: 'Geneva, Switzerland',
    category: 'luxury',
    description: 'The most recognized luxury watch brand in the world, Rolex is synonymous with success and achievement. Their watches are known for exceptional reliability, timeless design, and strong value retention.',
    priceRange: '$6,000 - $100,000+',
    notable: ['Submariner', 'GMT-Master II', 'Daytona', 'Datejust', 'Day-Date'],
    website: 'rolex.com'
  },
  {
    id: 'omega',
    name: 'Omega',
    founded: 1848,
    origin: 'Biel, Switzerland',
    category: 'luxury',
    description: 'Famous for being the first watch on the moon and the official timekeeper of the Olympics, Omega combines rich history with cutting-edge technology. Their Co-Axial escapement represents a major innovation in mechanical watchmaking.',
    priceRange: '$3,000 - $50,000+',
    notable: ['Speedmaster', 'Seamaster', 'Constellation', 'De Ville'],
    website: 'omegawatches.com'
  },
  {
    id: 'cartier',
    name: 'Cartier',
    founded: 1847,
    origin: 'Paris, France',
    category: 'luxury',
    description: 'The king of jewelry watches, Cartier created some of the most iconic watch designs in history. Their watches are as much about style and elegance as they are about timekeeping.',
    priceRange: '$3,000 - $500,000+',
    notable: ['Tank', 'Santos', 'Ballon Bleu', 'Panthère'],
    website: 'cartier.com'
  },
  {
    id: 'iwc',
    name: 'IWC Schaffhausen',
    founded: 1868,
    origin: 'Schaffhausen, Switzerland',
    category: 'luxury',
    description: 'Known for robust, masculine watches with exceptional engineering, IWC specializes in pilot watches and complications. Their in-house movements are among the most reliable in the industry.',
    priceRange: '$4,000 - $100,000+',
    notable: ['Pilot\'s Watch', 'Portugieser', 'Aquatimer', 'Portofino'],
    website: 'iwc.com'
  },
  {
    id: 'jaeger-lecoultre',
    name: 'Jaeger-LeCoultre',
    founded: 1833,
    origin: 'Le Sentier, Switzerland',
    category: 'luxury',
    description: 'The "watchmaker\'s watchmaker," JLC has created over 1,200 calibers and holds hundreds of patents. They\'re renowned for complications and have supplied movements to many prestigious brands.',
    priceRange: '$6,000 - $300,000+',
    notable: ['Reverso', 'Master Control', 'Polaris', 'Atmos'],
    website: 'jaeger-lecoultre.com'
  },
  // Entry-Level Swiss
  {
    id: 'tissot',
    name: 'Tissot',
    founded: 1853,
    origin: 'Le Locle, Switzerland',
    category: 'entry-swiss',
    description: 'Part of the Swatch Group, Tissot offers exceptional value in Swiss watchmaking. They\'re innovators in materials and technology, making high-quality watches accessible to enthusiasts.',
    priceRange: '$300 - $3,000',
    notable: ['PRX', 'Gentleman', 'Seastar', 'Carson'],
    website: 'tissotwatches.com'
  },
  {
    id: 'hamilton',
    name: 'Hamilton',
    founded: 1892,
    origin: 'Lancaster, PA (now Swiss-owned)',
    category: 'entry-swiss',
    description: 'With American heritage and Swiss precision, Hamilton is known for aviation watches and Hollywood connections. They offer excellent quality at accessible prices.',
    priceRange: '$400 - $2,500',
    notable: ['Khaki Field', 'Khaki Aviation', 'Jazzmaster', 'Ventura'],
    website: 'hamiltonwatch.com'
  },
  {
    id: 'longines',
    name: 'Longines',
    founded: 1832,
    origin: 'Saint-Imier, Switzerland',
    category: 'entry-swiss',
    description: 'Combining elegant design with rich aviation and sports timing heritage, Longines creates refined watches at accessible prices. Their historical archive is one of the most extensive in the industry.',
    priceRange: '$1,000 - $5,000',
    notable: ['Master Collection', 'HydroConquest', 'Spirit', 'Heritage'],
    website: 'longines.com'
  },
  {
    id: 'mido',
    name: 'Mido',
    founded: 1918,
    origin: 'Le Locle, Switzerland',
    category: 'entry-swiss',
    description: 'Known for watches inspired by architecture, Mido focuses on durability and water resistance. They offer excellent build quality and movements from the Swatch Group at competitive prices.',
    priceRange: '$600 - $2,000',
    notable: ['Baroncelli', 'Commander', 'Ocean Star', 'Multifort'],
    website: 'mido.ch'
  },
  // Japanese Brands
  {
    id: 'seiko',
    name: 'Seiko',
    founded: 1881,
    origin: 'Tokyo, Japan',
    category: 'japanese',
    description: 'A pioneering force in watchmaking, Seiko invented the quartz watch and continues to innovate with Spring Drive technology. They offer everything from affordable automatics to haute horlogerie Grand Seiko pieces.',
    priceRange: '$100 - $50,000+',
    notable: ['SKX', 'Presage', 'Prospex', 'Grand Seiko'],
    website: 'seikowatches.com'
  },
  {
    id: 'citizen',
    name: 'Citizen',
    founded: 1918,
    origin: 'Tokyo, Japan',
    category: 'japanese',
    description: 'Pioneers of Eco-Drive solar technology, Citizen creates reliable, innovative watches that never need battery changes. Their movements are used by many other brands.',
    priceRange: '$100 - $5,000',
    notable: ['Eco-Drive', 'Promaster', 'Chronomaster', 'Tsuyosa'],
    website: 'citizenwatch.com'
  },
  {
    id: 'casio',
    name: 'Casio',
    founded: 1946,
    origin: 'Tokyo, Japan',
    category: 'japanese',
    description: 'Creators of the legendary G-Shock, Casio revolutionized digital watches with unmatched durability and functionality. Their watches combine cutting-edge technology with accessible pricing.',
    priceRange: '$50 - $5,000',
    notable: ['G-Shock', 'Pro Trek', 'Edifice', 'Oceanus'],
    website: 'casio.com'
  },
  {
    id: 'orient',
    name: 'Orient',
    founded: 1950,
    origin: 'Tokyo, Japan',
    category: 'japanese',
    description: 'A subsidiary of Seiko Epson, Orient specializes in affordable mechanical watches with in-house movements. They offer exceptional value for money in automatic watches.',
    priceRange: '$100 - $1,500',
    notable: ['Bambino', 'Kamasu', 'Mako', 'Sun and Moon'],
    website: 'orient-watch.com'
  }
];

export const MOVEMENTS: Movement[] = [
  {
    id: 'quartz',
    name: 'Quartz',
    type: 'quartz',
    description: 'Battery-powered movements using a vibrating quartz crystal to keep time. The crystal oscillates at 32,768 times per second when an electric current is applied, providing exceptional accuracy.',
    pros: [
      'Extremely accurate (±15 seconds per month)',
      'Low maintenance - battery lasts 2-5 years',
      'Affordable to produce and purchase',
      'Reliable in all conditions',
      'Lightweight and thin'
    ],
    cons: [
      'Requires battery replacement',
      'Less prestigious than mechanical',
      'Not as collectible or valuable',
      'No romantic appeal of mechanical craftsmanship',
      'Can\'t see the movement working'
    ],
    accuracy: '±15 seconds per month',
    maintenance: 'Battery replacement every 2-5 years'
  },
  {
    id: 'manual',
    name: 'Manual (Hand-Wind)',
    type: 'manual',
    description: 'The oldest type of mechanical movement, requiring daily winding via the crown. Energy is stored in a mainspring that gradually unwinds to power the watch through a series of gears and the escapement.',
    pros: [
      'Traditional watchmaking experience',
      'Thinner case profile possible',
      'Daily ritual creates connection with watch',
      'No rotor blocking view of movement',
      'Often more affordable than automatic'
    ],
    cons: [
      'Must be wound daily',
      'Easy to overwind if not careful',
      'Less convenient than automatic or quartz',
      'Stops if you forget to wind',
      'Accuracy varies (±5-15 seconds per day)'
    ],
    powerReserve: '38-80 hours typical',
    accuracy: '±5-15 seconds per day',
    maintenance: 'Service every 5-7 years'
  },
  {
    id: 'automatic',
    name: 'Automatic (Self-Winding)',
    type: 'automatic',
    description: 'Mechanical movements that wind themselves using a weighted rotor that spins with wrist motion. Invented by Abraham-Louis Perrelet in the 18th century, modern automatics were perfected by Rolex in the 1930s.',
    pros: [
      'Winds itself with normal wear',
      'No battery needed',
      'Long-term value retention',
      'Fascinating mechanical engineering',
      'Smooth sweeping seconds hand'
    ],
    cons: [
      'Less accurate than quartz (±5-15 seconds per day)',
      'Requires regular wear or winder',
      'More expensive than quartz',
      'Thicker case due to rotor',
      'Periodic servicing required'
    ],
    powerReserve: '38-80 hours typical',
    accuracy: '±5-15 seconds per day',
    maintenance: 'Service every 5-7 years'
  },
  {
    id: 'solar',
    name: 'Solar',
    type: 'solar',
    description: 'Quartz movements powered by light instead of batteries. Solar cells beneath the dial convert light into electricity, stored in a rechargeable battery that can last decades.',
    pros: [
      'Never needs battery changes',
      'Environmentally friendly',
      'Quartz accuracy',
      'Very low maintenance',
      'Long power reserve when fully charged'
    ],
    cons: [
      'Needs regular light exposure',
      'Rechargeable battery eventually degrades',
      'Slightly more expensive than standard quartz',
      'Can run down if stored in darkness',
      'Limited styling options for dial'
    ],
    powerReserve: '6-12 months when fully charged',
    accuracy: '±15 seconds per month',
    maintenance: 'Rechargeable battery replacement every 10-20 years'
  },
  {
    id: 'kinetic',
    name: 'Kinetic (Auto-Quartz)',
    type: 'kinetic',
    description: 'Seiko\'s hybrid technology combining an automatic rotor with quartz accuracy. Wrist motion spins a rotor that generates electricity, stored in a capacitor to power the quartz movement.',
    pros: [
      'Quartz accuracy with automatic winding',
      'No battery changes needed',
      'Power reserve indicator',
      'Combines best of both worlds',
      'Environmentally friendly'
    ],
    cons: [
      'Requires regular wear',
      'Capacitor eventually needs replacement',
      'More complex than standard quartz',
      'Limited to Seiko',
      'Thicker than regular quartz'
    ],
    powerReserve: '6 months typical',
    accuracy: '±15 seconds per month',
    maintenance: 'Capacitor replacement every 10-15 years'
  },
  {
    id: 'spring-drive',
    name: 'Spring Drive',
    type: 'spring-drive',
    description: 'Seiko\'s revolutionary movement combining mechanical mainspring power with electronic regulation. It offers the soul of mechanical watchmaking with quartz-level accuracy and a uniquely smooth seconds hand.',
    pros: [
      'Incredible accuracy (±1 second per day)',
      'Perfectly smooth sweeping seconds hand',
      'Mechanical power source',
      'No battery needed',
      'Unique technology'
    ],
    cons: [
      'Very expensive',
      'Limited availability (Grand Seiko)',
      'Requires servicing like mechanical',
      'Proprietary technology',
      'Thicker movements'
    ],
    powerReserve: '72 hours typical',
    accuracy: '±1 second per day (±15 seconds per month)',
    maintenance: 'Service every 5-7 years'
  }
];

export const WATCH_TYPES: WatchType[] = [
  {
    id: 'dive',
    name: 'Dive Watch',
    slug: 'dive',
    description: 'Originally designed for underwater diving, dive watches are built to ISO 6425 standards with water resistance of at least 100 meters, unidirectional rotating bezel, and high legibility. Today, they\'re the most popular sports watch style, worn daily by enthusiasts who never dive.',
    characteristics: [
      'Unidirectional rotating bezel to track dive time',
      'Water resistance: minimum 200m, often 300m+',
      'High-contrast luminous markers and hands',
      'Screw-down crown for water protection',
      'Robust case construction'
    ],
    typicalFeatures: [
      'Ceramic or aluminum bezel insert',
      'Bracelet with diver\'s extension or rubber strap',
      'Helium escape valve (professional models)',
      'Date window at 3 or 6 o\'clock',
      'Automatic movement preferred'
    ],
    priceRange: '$200 - $50,000+',
    exampleBrands: ['Rolex', 'Omega', 'Seiko', 'Tudor', 'Blancpain'],
    bestFor: [
      'Versatile everyday wear',
      'Water sports and swimming',
      'Casual and smart-casual occasions',
      'Those who value durability',
      'First luxury watch purchase'
    ],
    history: 'The modern dive watch was born in the 1950s with the Rolex Submariner (1953) and Blancpain Fifty Fathoms (1953). These watches enabled SCUBA diving by allowing divers to track bottom time safely. While dive computers have replaced their original function, dive watches remain immensely popular for their rugged build quality and versatile aesthetic.'
  },
  {
    id: 'dress',
    name: 'Dress Watch',
    slug: 'dress',
    description: 'The epitome of elegance and refinement, dress watches are characterized by thin profiles, simple dials, and precious metal cases. Designed to slip under a shirt cuff, they prioritize aesthetics and formal appeal over functionality.',
    characteristics: [
      'Thin case profile (typically under 10mm)',
      'Simple, uncluttered dial',
      'Leather strap (usually black or brown)',
      'Small to medium case size (36-40mm)',
      'Precious metal or steel case'
    ],
    typicalFeatures: [
      'Manual or thin automatic movement',
      'Time-only or simple complications',
      'Polished case finish',
      'Minimal or no luminous material',
      'Classic design language'
    ],
    priceRange: '$500 - $500,000+',
    exampleBrands: ['Patek Philippe', 'Vacheron Constantin', 'Jaeger-LeCoultre', 'Cartier', 'Longines'],
    bestFor: [
      'Formal events and black-tie occasions',
      'Business professional settings',
      'Those who appreciate minimalism',
      'Suit wearers',
      'Classic style enthusiasts'
    ],
    history: 'Dress watches evolved from pocket watches in the early 20th century. As wristwatches became acceptable for men (popularized during WWI), elegant timepieces were created specifically for formal wear. The Patek Philippe Calatrava (1932) remains the archetype of dress watch design.'
  },
  {
    id: 'chronograph',
    name: 'Chronograph',
    slug: 'chronograph',
    description: 'Watches with integrated stopwatch functionality, featuring sub-dials and pushers to start, stop, and reset timing. Chronographs represent the perfect blend of functionality and mechanical complexity, making them favorites among enthusiasts.',
    characteristics: [
      'Two or three sub-dials for timing',
      'Two pushers (start/stop and reset)',
      'Central chronograph seconds hand',
      'Tachymeter scale (often)',
      'Sporty aesthetic'
    ],
    typicalFeatures: [
      '30-minute and 12-hour counters',
      'Running seconds at 6 or 9 o\'clock',
      'Date complication',
      'Steel or precious metal case',
      'Bracelet or leather strap'
    ],
    priceRange: '$300 - $100,000+',
    exampleBrands: ['Omega', 'Rolex', 'TAG Heuer', 'Zenith', 'Breitling'],
    bestFor: [
      'Those who appreciate complications',
      'Motorsports enthusiasts',
      'Daily wear with sporty style',
      'Timing activities',
      'Making a statement'
    ],
    history: 'The chronograph was invented in 1816, but wrist chronographs became popular in the 1960s with aviation and motorsports. The Omega Speedmaster became legendary as the first watch on the moon in 1969, while the Rolex Daytona is synonymous with racing heritage.'
  },
  {
    id: 'pilot',
    name: 'Pilot Watch (Flieger)',
    slug: 'pilot',
    description: 'Aviation watches designed for cockpit use, featuring exceptional legibility, anti-magnetic properties, and navigation tools. Modern pilot watches maintain military-inspired aesthetics while adding contemporary complications.',
    characteristics: [
      'Large, highly legible dial',
      'Arabic numerals or bold markers',
      'Triangular marker at 12 o\'clock',
      'Onion crown for gloved operation',
      'Anti-magnetic protection'
    ],
    typicalFeatures: [
      'GMT or world time complication',
      'Slide rule bezel (navigation)',
      'Date window',
      'Leather or canvas strap',
      'Automatic or manual movement'
    ],
    priceRange: '$200 - $20,000+',
    exampleBrands: ['IWC', 'Breitling', 'Zenith', 'Laco', 'Stowa'],
    bestFor: [
      'Aviation enthusiasts',
      'Those who need high legibility',
      'Tool watch collectors',
      'Travelers (GMT models)',
      'Military/utilitarian aesthetic lovers'
    ],
    history: 'Pilot watches were developed in the 1930s-40s for military aviation. The German B-Uhr specification and IWC Big Pilot set standards. These watches needed to be readable in low light, resistant to magnetism, and accurate for navigation calculations.'
  },
  {
    id: 'field',
    name: 'Field Watch',
    slug: 'field',
    description: 'Military-inspired watches designed for soldiers, featuring simplicity, durability, and legibility. Field watches are characterized by their no-nonsense approach and excellent value, making them perfect everyday companions.',
    characteristics: [
      'Simple, clean dial with Arabic numerals',
      'High legibility in all conditions',
      'Durable case (steel or titanium)',
      'Fabric or leather strap',
      'Modest size (36-40mm typical)'
    ],
    typicalFeatures: [
      'Hacking seconds',
      'Screw-down crown (modern versions)',
      'Luminous markers and hands',
      'Date or no-date variants',
      'Manual or automatic movement'
    ],
    priceRange: '$100 - $5,000',
    exampleBrands: ['Hamilton', 'Seiko', 'Timex', 'Marathon', 'Vaer'],
    bestFor: [
      'First mechanical watch',
      'Budget-conscious buyers',
      'Daily wear and abuse',
      'Minimalist aesthetic',
      'Military heritage enthusiasts'
    ],
    history: 'Field watches trace their lineage to WWI trench watches and WWII military issue timepieces. The Hamilton Khaki Field is a direct descendant of watches supplied to US forces. Their simple, reliable design makes them timeless classics.'
  },
  {
    id: 'gmt',
    name: 'GMT Watch',
    slug: 'gmt',
    description: 'Watches displaying multiple time zones simultaneously, featuring an additional 24-hour hand and rotating 24-hour bezel. GMT watches are essential tools for travelers and those who work across time zones.',
    characteristics: [
      '24-hour hand (often in contrasting color)',
      'Bidirectional 24-hour bezel',
      'Ability to track 2-3 time zones',
      'Date function',
      'Robust construction'
    ],
    typicalFeatures: [
      'Quick-set hour hand (true GMT)',
      'Pepsi, Batman, or solid color bezel',
      'Automatic movement',
      'Steel case and bracelet',
      'Water resistance (100-200m)'
    ],
    priceRange: '$500 - $50,000+',
    exampleBrands: ['Rolex', 'Tudor', 'Grand Seiko', 'Omega', 'Ball'],
    bestFor: [
      'Frequent travelers',
      'International business',
      'Multiple time zone tracking',
      'Pilot and aviation enthusiasts',
      'Those who want travel functionality'
    ],
    history: 'The GMT watch was created by Rolex in 1954 for Pan Am pilots flying transatlantic routes. The GMT-Master allowed pilots to track both departure and arrival time zones, solving a real problem in the jet age. The iconic "Pepsi" bezel remains one of the most recognizable watch designs.'
  },
  {
    id: 'digital',
    name: 'Digital & Smartwatch',
    slug: 'digital',
    description: 'Watches displaying time through digital screens rather than analog hands. This category includes everything from classic LCD displays to modern smartwatches with full computing capabilities.',
    characteristics: [
      'Digital time display (LCD, LED, or OLED)',
      'Multiple functions and complications',
      'Resin, steel, or aluminum case',
      'Button or touchscreen operation',
      'Battery or rechargeable power'
    ],
    typicalFeatures: [
      'Multiple alarms and timers',
      'Stopwatch and countdown',
      'World time',
      'Backlight or always-on display',
      'Fitness and smart features (modern)'
    ],
    priceRange: '$20 - $1,500',
    exampleBrands: ['Casio', 'Apple', 'Garmin', 'Suunto', 'Samsung'],
    bestFor: [
      'Those prioritizing functionality',
      'Fitness and sports tracking',
      'Budget-conscious buyers',
      'Technology enthusiasts',
      'Extreme durability needs'
    ],
    history: 'Digital watches revolutionized the industry in the 1970s with LED and LCD displays. The Casio F-91W became an icon of affordable reliability. Modern smartwatches, led by Apple Watch, have created an entirely new category, bringing computing power to the wrist while traditional digital watches like G-Shock remain beloved for their toughness.'
  }
];

export const COMPLICATIONS: Complication[] = [
  {
    id: 'date',
    name: 'Date',
    category: 'simple',
    description: 'Displays the current date, typically shown through a window at the 3, 4, or 6 o\'clock position. The most common complication in watchmaking.',
    purpose: 'Practical daily reference for the date',
    complexity: 1,
    priceImpact: 'low'
  },
  {
    id: 'day-date',
    name: 'Day-Date',
    category: 'simple',
    description: 'Shows both the day of the week and the date. Made famous by the Rolex Day-Date "President", often displayed in separate windows or apertures.',
    purpose: 'Complete daily calendar information',
    complexity: 2,
    priceImpact: 'low'
  },
  {
    id: 'power-reserve',
    name: 'Power Reserve Indicator',
    category: 'simple',
    description: 'Shows how much power remains in the mainspring, similar to a fuel gauge. Typically displayed as a sub-dial or arc with a hand.',
    purpose: 'Indicates when the watch needs winding',
    complexity: 2,
    priceImpact: 'medium'
  },
  {
    id: 'chronograph',
    name: 'Chronograph',
    category: 'popular',
    description: 'A stopwatch function integrated into the watch movement, controlled by pushers. Features sub-dials to track elapsed seconds, minutes, and hours.',
    purpose: 'Timing events and measuring elapsed time',
    complexity: 3,
    priceImpact: 'medium'
  },
  {
    id: 'gmt',
    name: 'GMT / Dual Time',
    category: 'popular',
    description: 'Displays a second time zone using an additional 24-hour hand and a rotating 24-hour bezel. Essential for travelers and international business.',
    purpose: 'Tracking multiple time zones simultaneously',
    complexity: 2,
    priceImpact: 'medium'
  },
  {
    id: 'moonphase',
    name: 'Moonphase',
    category: 'popular',
    description: 'Displays the current phase of the moon through a rotating disc with lunar imagery. One of the most romantic and traditional complications.',
    purpose: 'Tracking lunar cycles (historically for tides and agriculture)',
    complexity: 3,
    priceImpact: 'medium'
  },
  {
    id: 'annual-calendar',
    name: 'Annual Calendar',
    category: 'popular',
    description: 'Automatically accounts for months with 30 and 31 days, only requiring manual adjustment once per year at the end of February.',
    purpose: 'Reduced calendar maintenance compared to simple date',
    complexity: 4,
    priceImpact: 'high'
  },
  {
    id: 'perpetual-calendar',
    name: 'Perpetual Calendar',
    category: 'grand',
    description: 'Automatically adjusts for different month lengths and leap years, theoretically requiring no adjustment until the year 2100. Displays day, date, month, and often moon phase and leap year.',
    purpose: 'Complete automatic calendar with minimal intervention',
    complexity: 5,
    priceImpact: 'very-high'
  },
  {
    id: 'tourbillon',
    name: 'Tourbillon',
    category: 'grand',
    description: 'A rotating cage holding the escapement and balance wheel, designed to counter the effects of gravity on timekeeping. Invented by Abraham-Louis Breguet in 1795.',
    purpose: 'Improving accuracy by averaging out positional errors',
    complexity: 5,
    priceImpact: 'very-high'
  },
  {
    id: 'minute-repeater',
    name: 'Minute Repeater',
    category: 'grand',
    description: 'Chimes the time on demand using hammers striking gongs. Different tones indicate hours, quarter hours, and minutes. One of the most challenging complications to create.',
    purpose: 'Audibly telling time (originally for darkness)',
    complexity: 5,
    priceImpact: 'very-high'
  },
  {
    id: 'equation-of-time',
    name: 'Equation of Time',
    category: 'grand',
    description: 'Displays the difference between true solar time and mean solar time, which can vary up to 16 minutes throughout the year due to Earth\'s elliptical orbit.',
    purpose: 'Astronomical accuracy and horological prestige',
    complexity: 5,
    priceImpact: 'very-high'
  }
];

export const WATCH_TERMINOLOGY = [
  {
    term: 'Automatic',
    definition: 'A mechanical watch that winds itself using a weighted rotor that spins with wrist movement.'
  },
  {
    term: 'Balance Wheel',
    definition: 'The oscillating wheel that beats back and forth, dividing time into equal segments.'
  },
  {
    term: 'Bezel',
    definition: 'The ring surrounding the watch crystal, which can be fixed or rotating, often with markings.'
  },
  {
    term: 'Caliber',
    definition: 'The specific movement model, essentially the engine of the watch.'
  },
  {
    term: 'Case',
    definition: 'The metal housing that protects the movement and dial.'
  },
  {
    term: 'Chronograph',
    definition: 'A watch with stopwatch functionality.'
  },
  {
    term: 'Chronometer',
    definition: 'A watch certified for accuracy by COSC (Contrôle Officiel Suisse des Chronomètres).'
  },
  {
    term: 'Complication',
    definition: 'Any function beyond basic time display (hours, minutes, seconds).'
  },
  {
    term: 'Crown',
    definition: 'The knob used to wind the watch and set the time.'
  },
  {
    term: 'Crystal',
    definition: 'The transparent cover over the dial (sapphire, acrylic, or mineral).'
  },
  {
    term: 'Escapement',
    definition: 'The mechanism that controls the release of energy from the mainspring to the gear train.'
  },
  {
    term: 'Guilloche',
    definition: 'Decorative engraving on the dial or case with intricate patterns.'
  },
  {
    term: 'Hacking',
    definition: 'A feature that stops the seconds hand when the crown is pulled out for precise time setting.'
  },
  {
    term: 'Haute Horlogerie',
    definition: 'High watchmaking - the pinnacle of mechanical watch craftsmanship.'
  },
  {
    term: 'In-House Movement',
    definition: 'A movement designed and manufactured by the watch brand itself.'
  },
  {
    term: 'Jewels',
    definition: 'Synthetic rubies used as bearings to reduce friction in the movement.'
  },
  {
    term: 'Lug-to-Lug',
    definition: 'The measurement from the top to bottom lugs, important for wrist fit.'
  },
  {
    term: 'Lugs',
    definition: 'The protruding parts of the case where the strap or bracelet attaches.'
  },
  {
    term: 'Lume',
    definition: 'Luminous material (often Super-LumiNova) applied to markers and hands for visibility in darkness.'
  },
  {
    term: 'Mainspring',
    definition: 'The coiled spring that stores energy to power a mechanical watch.'
  },
  {
    term: 'Manual Wind',
    definition: 'A mechanical watch that must be wound by hand via the crown.'
  },
  {
    term: 'Movement',
    definition: 'The mechanism that powers the watch and keeps time.'
  },
  {
    term: 'Power Reserve',
    definition: 'How long a watch will run after being fully wound.'
  },
  {
    term: 'Pusher',
    definition: 'Buttons on the case used to operate complications like chronographs.'
  },
  {
    term: 'Rotor',
    definition: 'The weighted semicircular piece that spins to wind an automatic watch.'
  },
  {
    term: 'Screw-Down Crown',
    definition: 'A crown that screws into the case for enhanced water resistance.'
  },
  {
    term: 'Tachymeter',
    definition: 'A scale on the bezel or dial used to measure speed based on time and distance.'
  },
  {
    term: 'WR / Water Resistance',
    definition: 'The depth rating indicating how much water pressure a watch can withstand.'
  }
];
