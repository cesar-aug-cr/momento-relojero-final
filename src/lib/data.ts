import { WatchBrand, WatchType, WatchMovement, Complication } from '@/types'

export const watchTypes: WatchType[] = [
  {
    id: 'mechanical',
    name: 'Mechanical Watches',
    description: 'Powered by a mainspring that must be wound manually. These watches represent traditional watchmaking at its finest.',
    pros: [
      'No battery required',
      'Smooth sweeping seconds hand',
      'Traditional craftsmanship',
      'Can last for generations with proper care',
    ],
    cons: [
      'Requires regular winding',
      'Less accurate than quartz',
      'Generally more expensive',
      'Requires periodic servicing',
    ],
    bestFor: 'Collectors who appreciate traditional craftsmanship and don\'t mind daily maintenance',
  },
  {
    id: 'automatic',
    name: 'Automatic Watches',
    description: 'Self-winding mechanical watches that use the motion of your wrist to wind the mainspring.',
    pros: [
      'No manual winding needed with regular wear',
      'Smooth sweeping seconds hand',
      'No battery required',
      'Traditional watchmaking appeal',
    ],
    cons: [
      'Stops if not worn regularly',
      'Less accurate than quartz',
      'Generally more expensive',
      'Heavier than quartz watches',
    ],
    bestFor: 'Watch enthusiasts who wear their watches daily and appreciate mechanical movements',
  },
  {
    id: 'quartz',
    name: 'Quartz Watches',
    description: 'Battery-powered watches that use a quartz crystal oscillator for timekeeping.',
    pros: [
      'Extremely accurate',
      'Low maintenance',
      'Generally more affordable',
      'Lightweight',
    ],
    cons: [
      'Requires battery replacement',
      'Ticking seconds hand',
      'Less prestigious than mechanical',
      'Limited collectability',
    ],
    bestFor: 'Those who prioritize accuracy, low maintenance, and affordability',
  },
  {
    id: 'smartwatch',
    name: 'Smartwatches',
    description: 'Digital watches with computing capabilities, typically connected to smartphones.',
    pros: [
      'Extensive features (fitness tracking, notifications)',
      'Customizable faces',
      'Multiple functions in one device',
      'Regular software updates',
    ],
    cons: [
      'Requires frequent charging',
      'Limited lifespan due to technology obsolescence',
      'Expensive for premium models',
      'Not traditional watchmaking',
    ],
    bestFor: 'Tech enthusiasts who value functionality and connectivity over traditional aesthetics',
  },
]

export const watchBrands: WatchBrand[] = [
  {
    id: 'rolex',
    name: 'Rolex',
    category: 'luxury',
    description: 'The most recognized luxury watch brand, known for precision and status.',
    founded: 1905,
    origin: 'Switzerland',
  },
  {
    id: 'omega',
    name: 'Omega',
    category: 'luxury',
    description: 'Official timekeeper of the Olympics and the first watch on the moon.',
    founded: 1848,
    origin: 'Switzerland',
  },
  {
    id: 'patek-philippe',
    name: 'Patek Philippe',
    category: 'luxury',
    description: 'One of the most prestigious Swiss watch manufacturers.',
    founded: 1839,
    origin: 'Switzerland',
  },
  {
    id: 'seiko',
    name: 'Seiko',
    category: 'affordable',
    description: 'Japanese brand offering exceptional value and innovation.',
    founded: 1881,
    origin: 'Japan',
  },
  {
    id: 'citizen',
    name: 'Citizen',
    category: 'affordable',
    description: 'Known for Eco-Drive technology and reliable timepieces.',
    founded: 1918,
    origin: 'Japan',
  },
  {
    id: 'orient',
    name: 'Orient',
    category: 'affordable',
    description: 'Japanese brand specializing in mechanical watches at affordable prices.',
    founded: 1950,
    origin: 'Japan',
  },
  {
    id: 'longines',
    name: 'Longines',
    category: 'heritage',
    description: 'Swiss watchmaker with a rich heritage in elegance and performance.',
    founded: 1832,
    origin: 'Switzerland',
  },
  {
    id: 'hamilton',
    name: 'Hamilton',
    category: 'heritage',
    description: 'American-born brand now owned by Swatch Group, known for aviation watches.',
    founded: 1892,
    origin: 'United States',
  },
]

export const watchMovements: WatchMovement[] = [
  {
    id: 'manual-mechanical',
    name: 'Manual Mechanical',
    type: 'mechanical',
    description: 'Requires daily winding by turning the crown. The most traditional form of watchmaking.',
    accuracy: '-10 to +30 seconds per day',
    maintenance: 'Service every 3-5 years',
  },
  {
    id: 'automatic-mechanical',
    name: 'Automatic Mechanical',
    type: 'automatic',
    description: 'Self-winding through wrist movement via a rotor that spins with motion.',
    accuracy: '-20 to +40 seconds per day',
    maintenance: 'Service every 3-5 years',
  },
  {
    id: 'quartz',
    name: 'Quartz',
    type: 'quartz',
    description: 'Battery-powered with quartz crystal oscillator for precise timekeeping.',
    accuracy: '±15 seconds per month',
    maintenance: 'Battery replacement every 2-3 years',
  },
  {
    id: 'kinetic',
    name: 'Kinetic/Auto-Quartz',
    type: 'hybrid',
    description: 'Combines automatic winding with quartz accuracy.',
    accuracy: '±15 seconds per month',
    maintenance: 'Minimal, capacitor replacement every 10-15 years',
  },
]

export const complications: Complication[] = [
  {
    id: 'chronograph',
    name: 'Chronograph',
    description: 'A stopwatch function integrated into the watch.',
    complexity: 'moderate',
    examples: ['Omega Speedmaster', 'Rolex Daytona', 'TAG Heuer Carrera'],
  },
  {
    id: 'date',
    name: 'Date Display',
    description: 'Shows the current date, typically through a window on the dial.',
    complexity: 'simple',
    examples: ['Rolex Datejust', 'Omega Seamaster', 'Seiko 5'],
  },
  {
    id: 'moon-phase',
    name: 'Moon Phase',
    description: 'Displays the current phase of the moon.',
    complexity: 'moderate',
    examples: ['Jaeger-LeCoultre Master Ultra Thin', 'IWC Portugieser'],
  },
  {
    id: 'perpetual-calendar',
    name: 'Perpetual Calendar',
    description: 'Automatically adjusts for different month lengths and leap years.',
    complexity: 'complex',
    examples: ['Patek Philippe Perpetual Calendar', 'Audemars Piguet Royal Oak'],
  },
  {
    id: 'tourbillon',
    name: 'Tourbillon',
    description: 'A rotating cage that counteracts the effects of gravity on the movement.',
    complexity: 'complex',
    examples: ['Breguet Classique Tourbillon', 'A. Lange & Söhne Tourbillon'],
  },
  {
    id: 'gmt',
    name: 'GMT/Dual Time',
    description: 'Displays time in multiple time zones simultaneously.',
    complexity: 'moderate',
    examples: ['Rolex GMT-Master II', 'Tudor Black Bay GMT'],
  },
]

export const careGuides = [
  {
    title: 'Daily Wear',
    tips: [
      'Wind manual watches at the same time each day',
      'Avoid extreme magnetic fields',
      'Keep away from extreme temperatures',
      'Wipe down with soft cloth after wear',
    ],
  },
  {
    title: 'Water Resistance',
    tips: [
      'Never operate crown or pushers underwater',
      'Check water resistance rating regularly',
      'Have gaskets checked during service',
      'Rinse with fresh water after saltwater exposure',
    ],
  },
  {
    title: 'Storage',
    tips: [
      'Use watch winders for automatics not worn daily',
      'Store in cool, dry place away from sunlight',
      'Keep in original box or watch case',
      'Separate watches to prevent scratches',
    ],
  },
  {
    title: 'Servicing',
    tips: [
      'Service mechanical watches every 3-5 years',
      'Only use authorized service centers',
      'Keep service records and receipts',
      'Address issues promptly to prevent damage',
    ],
  },
]

export const buyingGuides = [
  {
    category: 'First Watch',
    budget: '$100-$500',
    recommendations: [
      {
        brand: 'Seiko 5',
        reason: 'Reliable automatic movement, excellent value',
        price: '$200-$300',
      },
      {
        brand: 'Orient Bambino',
        reason: 'Dressy automatic with in-house movement',
        price: '$150-$250',
      },
      {
        brand: 'Citizen Eco-Drive',
        reason: 'Solar-powered, low maintenance',
        price: '$200-$400',
      },
    ],
  },
  {
    category: 'Enthusiast',
    budget: '$500-$2,000',
    recommendations: [
      {
        brand: 'Hamilton Khaki Field',
        reason: 'Swiss movement, heritage brand, versatile',
        price: '$400-$600',
      },
      {
        brand: 'Tissot PRX',
        reason: 'Swiss quality, integrated bracelet design',
        price: '$350-$700',
      },
      {
        brand: 'Longines HydroConquest',
        reason: 'Swiss dive watch with excellent finishing',
        price: '$1,000-$1,500',
      },
    ],
  },
  {
    category: 'Luxury',
    budget: '$5,000+',
    recommendations: [
      {
        brand: 'Omega Seamaster',
        reason: 'Iconic dive watch, Co-Axial movement',
        price: '$5,000-$8,000',
      },
      {
        brand: 'Rolex Oyster Perpetual',
        reason: 'Entry-level Rolex, excellent resale value',
        price: '$6,000-$7,000',
      },
      {
        brand: 'Grand Seiko',
        reason: 'Exceptional finishing, in-house movements',
        price: '$4,000-$10,000',
      },
    ],
  },
]
