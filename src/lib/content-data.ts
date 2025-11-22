/**
 * Comprehensive Content Data for Momento Relojero
 * All educational content organized by sections
 */

export const WATCH_ANATOMY = {
  title: 'Anatomy of a Watch',
  description: 'Understanding the essential parts of a timepiece',
  parts: [
    {
      name: 'Case',
      description: 'The outer housing that protects the movement and gives the watch its shape.',
      details: 'Materials range from stainless steel to precious metals like gold and platinum.'
    },
    {
      name: 'Crystal',
      description: 'The transparent cover protecting the dial.',
      details: 'Modern watches use sapphire crystal (scratch-resistant), mineral glass, or acrylic.'
    },
    {
      name: 'Dial',
      description: 'The face of the watch displaying the time.',
      details: 'Can be simple or complex, featuring various subdials, indices, and decorations.'
    },
    {
      name: 'Hands',
      description: 'Indicators that point to the time on the dial.',
      details: 'Typically includes hour, minute, and seconds hands. Designs vary from simple to ornate.'
    },
    {
      name: 'Crown',
      description: 'The knob used to set the time and date, and wind manual watches.',
      details: 'Located typically at 3 o\'clock position. Some watches have screw-down crowns for water resistance.'
    },
    {
      name: 'Bezel',
      description: 'The ring surrounding the crystal.',
      details: 'Can be fixed or rotating. Dive watches feature rotating bezels to track elapsed time.'
    },
    {
      name: 'Lugs',
      description: 'The projections extending from the case to attach the strap or bracelet.',
      details: 'Lug-to-lug measurement is crucial for determining if a watch will fit your wrist.'
    },
    {
      name: 'Strap/Bracelet',
      description: 'What secures the watch to your wrist.',
      details: 'Options include leather, NATO straps, rubber, and metal bracelets (oyster, jubilee, etc.).'
    },
    {
      name: 'Caseback',
      description: 'The rear of the watch case.',
      details: 'Can be solid (closed) or exhibition (transparent) to view the movement.'
    },
    {
      name: 'Movement',
      description: 'The engine of the watch - the mechanism that makes it tick.',
      details: 'Can be quartz, manual-wind mechanical, or automatic mechanical.'
    }
  ]
};

export const WATCH_TERMINOLOGY = [
  {
    term: 'Caliber',
    definition: 'The specific model or design of a watch movement.',
    example: 'The Rolex Caliber 3235 or ETA 2824-2.'
  },
  {
    term: 'Lume',
    definition: 'Luminescent material applied to hands and markers for visibility in darkness.',
    example: 'Swiss Super-LumiNova is a common modern lume compound.'
  },
  {
    term: 'Water Resistance',
    definition: 'A watch\'s ability to withstand water pressure, measured in meters, ATM, or bar.',
    example: '100m water resistance means suitable for swimming, not actual diving to 100 meters.'
  },
  {
    term: 'Complications',
    definition: 'Any function beyond basic timekeeping (hours, minutes, seconds).',
    example: 'Date display, chronograph, moon phase, perpetual calendar.'
  },
  {
    term: 'Power Reserve',
    definition: 'How long a mechanical watch runs when fully wound.',
    example: 'Typically 38-72 hours, though some modern movements exceed 7 days.'
  },
  {
    term: 'Frequency/BPH',
    definition: 'Beats per hour - how many times the balance wheel oscillates.',
    example: '28,800 BPH (4Hz) is standard, resulting in 8 ticks per second.'
  },
  {
    term: 'Aperture',
    definition: 'A window in the dial showing information like date or day.',
    example: 'The date window at 3 o\'clock position.'
  },
  {
    term: 'Pushers',
    definition: 'Buttons on the watch case that activate functions, typically on chronographs.',
    example: 'Start, stop, and reset buttons for the stopwatch function.'
  },
  {
    term: 'Jewels',
    definition: 'Synthetic rubies used as bearings to reduce friction in the movement.',
    example: 'A typical automatic movement has 25-31 jewels.'
  },
  {
    term: 'Rotor',
    definition: 'The semi-circular weight in an automatic watch that winds the mainspring.',
    example: 'Visible through exhibition casebacks, often decorated with brand engravings.'
  }
];

export const WATER_RESISTANCE_GUIDE = {
  title: 'Understanding Water Resistance Ratings',
  subtitle: 'What the numbers really mean',
  ratings: [
    {
      rating: '30m / 3 ATM',
      suitableFor: 'Splash resistant only',
      notFor: 'Swimming, showering, or any water contact',
      reality: 'Can withstand rain and hand washing, but nothing more. NOT waterproof.'
    },
    {
      rating: '50m / 5 ATM',
      suitableFor: 'Light swimming and showering',
      notFor: 'Diving, high-impact water sports',
      reality: 'Suitable for brief immersion in water, not prolonged swimming.'
    },
    {
      rating: '100m / 10 ATM',
      suitableFor: 'Swimming, snorkeling',
      notFor: 'Scuba diving',
      reality: 'True swimming watch. Can handle recreational swimming and water sports.'
    },
    {
      rating: '200m / 20 ATM',
      suitableFor: 'Recreational scuba diving',
      notFor: 'Professional diving beyond 200m',
      reality: 'Proper dive watch with rotating bezel. ISO 6425 certified dive watches start here.'
    },
    {
      rating: '300m+ / 30 ATM+',
      suitableFor: 'Professional diving, saturation diving',
      notFor: 'Nothing - these are serious dive watches',
      reality: 'Professional-grade dive watches with helium escape valves and superior seals.'
    }
  ],
  importantNote: 'Water resistance can degrade over time. Gaskets dry out, seals fail. Have your watch tested and serviced every 2-3 years if you regularly expose it to water.'
};

export const MOVEMENT_TYPES = {
  quartz: {
    name: 'Quartz Movement',
    description: 'Battery-powered watches that use a quartz crystal oscillator',
    howItWorks: 'A battery sends electrical current through a quartz crystal, causing it to vibrate at precisely 32,768 times per second. This vibration is converted into pulses that drive the motor, moving the hands.',
    pros: [
      'Extremely accurate (±15 seconds per month)',
      'Very affordable',
      'Low maintenance - just battery changes',
      'Thin cases possible',
      'No daily winding required'
    ],
    cons: [
      'Less "soul" for collectors - no mechanical complexity',
      'Battery needs replacement every 2-3 years',
      'Not considered haute horlogerie',
      'Tick once per second (not smooth sweep)'
    ],
    famousExamples: [
      'Grand Seiko 9F Quartz (ultra-high precision)',
      'Omega Seamaster Quartz',
      'Citizen Eco-Drive (solar-powered quartz)',
      'Casio G-Shock series'
    ]
  },
  manual: {
    name: 'Manual-Wind Mechanical',
    description: 'Traditional mechanical watches that require daily winding via the crown',
    howItWorks: 'Turning the crown winds a mainspring, storing energy. As the mainspring unwinds, it releases energy through a series of gears and the escapement, regulating the release of power to move the hands at a consistent rate.',
    pros: [
      'Historical significance - oldest type of watch movement',
      'Thinner cases than automatics',
      'Direct connection to horology traditions',
      'No rotor blocking movement view',
      'Appreciation for mechanical craftsmanship'
    ],
    cons: [
      'Requires daily winding (or when power reserve depletes)',
      'Less accurate than quartz (±5-20 seconds per day)',
      'More expensive than quartz',
      'Requires regular servicing (every 3-5 years)'
    ],
    famousExamples: [
      'Patek Philippe Calatrava',
      'A. Lange & Söhne 1815',
      'Omega Speedmaster Professional (Moonwatch)',
      'Panerai Luminor Manual-Wind'
    ]
  },
  automatic: {
    name: 'Automatic (Self-Winding) Mechanical',
    description: 'Mechanical watches that wind themselves via a rotor powered by wrist motion',
    howItWorks: 'A weighted rotor pivots freely with your wrist movements. This rotor is connected to the winding mechanism, automatically winding the mainspring. If worn regularly, the watch never needs manual winding.',
    pros: [
      'Convenience - winds itself while worn',
      'Smooth sweeping seconds hand',
      'Mechanical beauty and craftsmanship',
      'No battery needed',
      'Long lifespan with proper care'
    ],
    cons: [
      'Thicker than manual-wind (rotor adds height)',
      'Stops when not worn (unless on watch winder)',
      'Expensive to service (every 3-5 years, $200-$1000+)',
      'Less accurate than quartz',
      'More expensive initial cost'
    ],
    famousExamples: [
      'Rolex Submariner (Cal. 3235)',
      'Omega Seamaster 300M (Cal. 8800)',
      'Seiko SKX007 (Cal. 7S26)',
      'Tudor Black Bay (Cal. MT5602)'
    ]
  },
  other: {
    solar: {
      name: 'Solar-Powered',
      description: 'Quartz movements powered by light instead of traditional batteries',
      example: 'Citizen Eco-Drive, Seiko Solar',
      benefit: 'Never needs battery replacement - light keeps it charged for months in darkness'
    },
    kinetic: {
      name: 'Kinetic/Auto-Quartz',
      description: 'Hybrid using automatic winding to charge a capacitor that powers quartz movement',
      example: 'Seiko Kinetic',
      benefit: 'Quartz accuracy with no battery changes, powered by motion'
    },
    springDrive: {
      name: 'Spring Drive',
      description: 'Mechanical movement with electronic regulation for quartz-level accuracy',
      example: 'Grand Seiko Spring Drive',
      benefit: 'Perfectly smooth sweeping seconds hand with incredible accuracy (±1 sec/day)'
    }
  }
};

export const WATCH_STYLES = [
  {
    category: 'Dive Watches',
    description: 'Built for underwater exploration with exceptional water resistance',
    keyFeatures: [
      'Unidirectional rotating bezel for tracking dive time',
      'High water resistance (minimum 200m)',
      'Excellent legibility with luminous markers',
      'Screw-down crown for water protection',
      'ISO 6425 certification for true dive watches'
    ],
    iconicModels: [
      { name: 'Rolex Submariner', note: 'The standard-bearer since 1953' },
      { name: 'Omega Seamaster 300M', note: 'James Bond\'s choice' },
      { name: 'Seiko SKX007', note: 'Legendary affordable dive watch' },
      { name: 'Tudor Black Bay', note: 'Vintage-inspired modern diver' }
    ],
    priceRange: '$200 - $15,000+',
    idealFor: 'Water sports enthusiasts, those seeking robust tool watches'
  },
  {
    category: 'Dress Watches',
    description: 'Elegant timepieces designed for formal occasions and refined style',
    keyFeatures: [
      'Slim profile to fit under shirt cuff',
      'Simple, uncluttered dial',
      'Leather strap (typically)',
      'Precious metal cases (gold, platinum) or polished steel',
      'Minimal complications - focus on time only'
    ],
    iconicModels: [
      { name: 'Patek Philippe Calatrava', note: 'The ultimate dress watch' },
      { name: 'Jaeger-LeCoultre Master Ultra Thin', note: 'Exceptionally slim elegance' },
      { name: 'Cartier Tank', note: 'Art Deco icon since 1917' },
      { name: 'Nomos Tangente', note: 'Bauhaus-inspired German design' }
    ],
    priceRange: '$500 - $50,000+',
    idealFor: 'Formal events, business professionals, minimalist aesthetics'
  },
  {
    category: 'Chronograph Watches',
    description: 'Watches with built-in stopwatch functionality via pushers',
    keyFeatures: [
      'Two or three subdials for chronograph functions',
      'Pushers at 2 and 4 o\'clock (typically)',
      'Can measure elapsed time, split times',
      'Often sportier, larger case designs',
      'Tachymeter scale common (measures speed)'
    ],
    iconicModels: [
      { name: 'Omega Speedmaster Professional', note: 'Moon watch - NASA certified' },
      { name: 'Rolex Daytona', note: 'Racing legend, incredibly collectible' },
      { name: 'TAG Heuer Carrera', note: 'Motorsport heritage' },
      { name: 'Breitling Navitimer', note: 'Aviation chronograph with slide rule' }
    ],
    priceRange: '$300 - $40,000+',
    idealFor: 'Motorsport fans, those who appreciate complex functionality'
  },
  {
    category: 'Pilot/Aviator Watches',
    description: 'Originally designed for cockpit use, emphasizing legibility and precision',
    keyFeatures: [
      'Large, highly legible dials',
      'Oversized crown for use with gloves',
      'High-contrast markings',
      'Often include GMT or second timezone',
      'Historical military aviation aesthetics'
    ],
    iconicModels: [
      { name: 'IWC Big Pilot', note: 'Modern interpretation of B-Uhr watches' },
      { name: 'Breitling Navitimer', note: 'Slide rule for flight calculations' },
      { name: 'Zenith Pilot Type 20', note: 'Vintage military aesthetic' },
      { name: 'Bell & Ross BR 01', note: 'Cockpit instrument inspired' }
    ],
    priceRange: '$500 - $20,000+',
    idealFor: 'Aviation enthusiasts, those who love vintage military style'
  },
  {
    category: 'Field Watches',
    description: 'Military-inspired, rugged watches built for outdoor use',
    keyFeatures: [
      'Simple, easy-to-read dials',
      'Arabic numerals',
      'Durable construction',
      'Often hacking seconds for synchronization',
      'Moderate water resistance'
    ],
    iconicModels: [
      { name: 'Hamilton Khaki Field', note: 'American military heritage' },
      { name: 'Seiko SNK809', note: 'Affordable automatic field watch' },
      { name: 'Timex Expedition', note: 'Budget-friendly explorer' },
      { name: 'Vaer A5', note: 'Modern minimalist field watch' }
    ],
    priceRange: '$50 - $2,000',
    idealFor: 'Outdoor adventurers, military style fans, everyday wear'
  },
  {
    category: 'GMT/Travel Watches',
    description: 'Designed for frequent travelers with dual timezone capability',
    keyFeatures: [
      '24-hour hand to track second timezone',
      'Rotating 24-hour bezel',
      'Independently adjustable hour hand',
      'Date complication common',
      'Larger cases to accommodate complexity'
    ],
    iconicModels: [
      { name: 'Rolex GMT-Master II', note: 'Created for Pan Am pilots, ceramic bezel' },
      { name: 'Grand Seiko GMT', note: 'Spring Drive precision for travelers' },
      { name: 'Tudor Black Bay GMT', note: 'Affordable alternative with Pepsi bezel' },
      { name: 'Omega Seamaster Aqua Terra GMT', note: 'Elegant sports GMT' }
    ],
    priceRange: '$500 - $15,000+',
    idealFor: 'Frequent travelers, international business professionals'
  }
];

export const WATCH_COMPLICATIONS = {
  simple: [
    {
      name: 'Date',
      description: 'Displays the current day of the month via aperture or subdial',
      utility: 'Practical for everyday use',
      note: 'Most common complication; needs manual correction in short months'
    },
    {
      name: 'Day-Date',
      description: 'Shows both the day of the week and the date',
      utility: 'Enhanced daily information',
      note: 'Made famous by Rolex Day-Date "President"'
    }
  ],
  popular: [
    {
      name: 'Chronograph',
      description: 'Stopwatch function with elapsed time measurement',
      subdials: 'Typically 30-minute and 12-hour counters, running seconds',
      utility: 'Timing events, sporting activities',
      iconic: 'Omega Speedmaster - first watch on the moon'
    },
    {
      name: 'Moon Phase',
      description: 'Visual display showing the current phase of the moon',
      utility: 'Aesthetic beauty, astronomical interest',
      note: 'Requires adjustment only once every 122 years in high-precision versions'
    },
    {
      name: 'GMT / Dual Time',
      description: 'Tracks a second timezone with 24-hour hand',
      utility: 'Essential for travelers and international communication',
      note: 'Originally designed for Pan Am pilots in 1950s'
    },
    {
      name: 'Power Reserve Indicator',
      description: 'Shows how much energy remains in the mainspring',
      utility: 'Know when your watch needs winding',
      note: 'Particularly useful for manual-wind watches'
    }
  ],
  grand: [
    {
      name: 'Perpetual Calendar',
      description: 'Automatically adjusts for months of different lengths and leap years',
      complexity: 'Incredibly complex - won\'t need date correction until 2100',
      maintenance: 'Should never be allowed to stop - costly to reset',
      priceRange: '$20,000 - $500,000+',
      example: 'Patek Philippe Perpetual Calendar 5320G'
    },
    {
      name: 'Minute Repeater',
      description: 'Chimes the time on demand using hammers and gongs',
      complexity: 'One of the most difficult complications to craft',
      utility: 'Originally for telling time in darkness, now pure artistry',
      priceRange: '$100,000 - $1,000,000+',
      example: 'Patek Philippe 5303R Minute Repeater'
    },
    {
      name: 'Tourbillon',
      description: 'Rotating cage containing the escapement to counter gravity effects',
      complexity: 'Invented by Breguet in 1795',
      utility: 'Theoretical accuracy improvement (debated), stunning visual display',
      priceRange: '$50,000 - $500,000+',
      example: 'A. Lange & Söhne 1815 Tourbillon'
    },
    {
      name: 'Equation of Time',
      description: 'Shows the difference between solar time and mean time',
      complexity: 'Astronomical complication for purists',
      utility: 'Indicates when the sun is actually at its highest point',
      priceRange: '$100,000+',
      example: 'Audemars Piguet Royal Oak Equation of Time'
    }
  ]
};

export const WATCH_BRANDS = {
  holyTrinity: [
    {
      name: 'Patek Philippe',
      founded: 1839,
      country: 'Switzerland',
      specialty: 'Grand complications, perpetual calendars',
      priceRange: '$20,000 - $5,000,000+',
      iconicModel: 'Calatrava, Nautilus, Aquanaut',
      motto: 'You never actually own a Patek Philippe. You merely look after it for the next generation.',
      notableAchievement: 'Holds record for most expensive watch ever sold at auction (Grandmaster Chime - $31 million)'
    },
    {
      name: 'Audemars Piguet',
      founded: 1875,
      country: 'Switzerland',
      specialty: 'Royal Oak, innovative luxury sports watches',
      priceRange: '$20,000 - $1,000,000+',
      iconicModel: 'Royal Oak (designed by Gerald Genta, 1972)',
      notableAchievement: 'Pioneered luxury steel sports watch with Royal Oak',
      note: 'Still family-owned, independent'
    },
    {
      name: 'Vacheron Constantin',
      founded: 1755,
      country: 'Switzerland',
      specialty: 'Oldest continuously operating watch manufacturer',
      priceRange: '$15,000 - $2,000,000+',
      iconicModel: 'Patrimony, Overseas',
      motto: 'Do better if possible, and that is always possible',
      notableAchievement: 'Unbroken production since 1755 - over 265 years'
    }
  ],
  iconicLuxury: [
    {
      name: 'Rolex',
      founded: 1905,
      country: 'Switzerland',
      specialty: 'Tool watches, sports watches, brand prestige',
      priceRange: '$6,000 - $100,000+',
      iconicModels: 'Submariner, GMT-Master II, Daytona, Datejust, Day-Date',
      achievement: 'Most recognized watch brand globally',
      innovations: 'Oyster case (first waterproof case), Perpetual rotor (early automatic)',
      note: 'Extremely difficult to obtain new models due to demand'
    },
    {
      name: 'Omega',
      founded: 1848,
      country: 'Switzerland',
      specialty: 'Space exploration, Olympics official timekeeper',
      priceRange: '$3,000 - $50,000+',
      iconicModels: 'Speedmaster Professional (Moonwatch), Seamaster 300M',
      achievement: 'First and only watch worn on the moon (1969)',
      note: 'James Bond\'s watch since GoldenEye (1995)'
    }
  ],
  entrySwiss: [
    {
      name: 'Tissot',
      parent: 'Swatch Group',
      priceRange: '$300 - $3,000',
      specialty: 'Affordable Swiss quality, innovative materials',
      iconicModel: 'PRX (popular modern reissue)',
      note: 'Official timekeeper of MotoGP, NBA, more'
    },
    {
      name: 'Hamilton',
      parent: 'Swatch Group',
      priceRange: '$400 - $2,500',
      specialty: 'American heritage, military/aviation watches',
      iconicModel: 'Khaki Field, Ventura (Elvis watch)',
      note: 'Founded in USA (1892), now Swiss-owned'
    },
    {
      name: 'Longines',
      parent: 'Swatch Group',
      priceRange: '$1,000 - $5,000',
      specialty: 'Heritage reissues, elegant dress watches',
      iconicModel: 'Legend Diver, Heritage 1945',
      note: 'Excellent value in Swiss watchmaking'
    }
  ],
  japanese: [
    {
      name: 'Seiko',
      founded: 1881,
      country: 'Japan',
      specialty: 'Innovation, vertical integration, value',
      priceRange: '$100 - $50,000+',
      achievements: [
        'Invented quartz watch (1969 - Astron)',
        'Invented Spring Drive movement',
        'Grand Seiko sub-brand rivals Swiss haute horlogerie'
      ],
      iconicModels: 'SKX007, Seiko 5 series, Grand Seiko',
      note: 'Makes everything in-house from basic to ultra-luxury'
    },
    {
      name: 'Casio',
      founded: 1946,
      country: 'Japan',
      specialty: 'Digital watches, extreme durability',
      priceRange: '$20 - $5,000',
      iconicModels: 'G-Shock, F-91W, Casio Duro',
      achievement: 'G-Shock virtually indestructible - 200M+ sold',
      note: 'F-91W: the most affordable reliable watch on Earth (~$15)'
    },
    {
      name: 'Citizen',
      founded: 1918,
      country: 'Japan',
      specialty: 'Eco-Drive solar technology',
      priceRange: '$100 - $3,000',
      achievement: 'Never need battery replacement - light-powered',
      note: 'Excellent value for solar-powered watches'
    }
  ]
};

export const WATCH_HISTORY = {
  pocketToWrist: {
    era: 'Early 1900s',
    event: 'The Birth of the Wristwatch',
    story: 'In 1904, Brazilian aviator Alberto Santos-Dumont complained to his friend Louis Cartier that pocket watches were impractical while flying. Cartier created the "Santos" wristwatch - one of the first men\'s wristwatches. WWI soldiers also adopted wristwatches for practicality in the trenches, accelerating their popularity.',
    significance: 'Transformed watches from jewelry to essential tools'
  },
  quartzCrisis: {
    era: '1970s-1980s',
    event: 'The Quartz Crisis',
    story: 'In 1969, Seiko released the Astron - the world\'s first quartz watch. Quartz watches were more accurate, cheaper to produce, and required no winding. Swiss watchmaking industry nearly collapsed - employment dropped from 90,000 to 30,000. Many historic brands went bankrupt.',
    resolution: 'Swiss industry pivoted to luxury positioning, emphasizing craftsmanship over pure accuracy',
    significance: 'Separated watch industry into two segments: tool/commodity (quartz) vs. luxury/art (mechanical)'
  },
  mechanicalResurgence: {
    era: '1990s-Present',
    event: 'The Mechanical Renaissance',
    story: 'Despite smartphones making watches functionally obsolete, mechanical watches experienced a revival. Collectors appreciated them as art, engineering marvels, and status symbols. Independent brands emerged (F.P. Journe, MB&F, Richard Mille). Vintage watches became investment pieces.',
    drivers: [
      'Digital fatigue - desire for analog, mechanical objects',
      'Craftsmanship appreciation',
      'Status signaling in luxury goods',
      'Investment potential of rare pieces'
    ],
    significance: 'Mechanical watches redefined as luxury goods, art pieces, and heirlooms'
  }
};

export const COLLECTOR_GUIDES = {
  startingCollection: {
    title: 'How to Start Your Watch Collection',
    steps: [
      {
        step: 'Define Your Style',
        description: 'Before buying, determine what resonates with you',
        questions: [
          'Do you prefer sporty or elegant?',
          'Large or small watches?',
          'Modern or vintage aesthetics?',
          'Specific use cases (diving, formal events, daily wear)?'
        ],
        advice: 'Visit watch boutiques, try different styles on your wrist, follow watch content creators'
      },
      {
        step: 'Set a Realistic Budget',
        description: 'Great watches exist at every price point',
        tiers: [
          { range: '$50-$500', recommendation: 'Seiko 5, Casio, Timex, Orient' },
          { range: '$500-$2,000', recommendation: 'Hamilton, Tissot, Seiko Presage, Christopher Ward' },
          { range: '$2,000-$5,000', recommendation: 'Longines, Oris, Tudor (pre-owned), Grand Seiko (pre-owned)' },
          { range: '$5,000-$10,000', recommendation: 'Omega, Tudor, Zenith, Grand Seiko' },
          { range: '$10,000+', recommendation: 'Rolex, Omega, luxury brands' }
        ]
      },
      {
        step: 'Research Thoroughly',
        description: 'Knowledge prevents costly mistakes',
        resources: [
          'YouTube: Teddy Baldassarre, Hodinkee, WatchFinder & Co.',
          'Forums: WatchUSeek, r/Watches',
          'Books: "A Man and His Watch" by Matt Hranek',
          'Websites: Hodinkee, Worn & Wound'
        ]
      },
      {
        step: 'Buy What You Love, Not Hype',
        description: 'Avoid investment thinking for first watches',
        warning: 'Don\'t buy a watch solely because it "holds value" - buy what brings you joy',
        note: 'The best watch is one you\'ll actually wear'
      },
      {
        step: 'Consider the "One Watch Collection"',
        description: 'Start with a versatile daily wearer',
        ideal: 'A watch that handles 80% of situations',
        examples: 'Rolex Submariner, Omega Seamaster, Grand Seiko SBGA413, Tudor Black Bay'
      }
    ]
  },
  buyingGuide: {
    title: 'New vs. Pre-Owned vs. Vintage',
    options: [
      {
        type: 'Buying New',
        pros: [
          'Full manufacturer warranty',
          'Latest technology and designs',
          'No history of abuse or poor servicing',
          'Satisfaction of being first owner'
        ],
        cons: [
          'Highest price point',
          'Immediate depreciation (except Rolex, Patek)',
          'Long waitlists for popular models',
          'Limited selection (what\'s currently in production)'
        ],
        bestFor: 'Those who value warranty, latest models, and peace of mind'
      },
      {
        type: 'Buying Pre-Owned',
        pros: [
          'Better value - skip initial depreciation',
          'Immediate availability (no waitlists)',
          'Access to recently discontinued models',
          'Often includes box and papers'
        ],
        cons: [
          'Limited or no warranty',
          'Condition varies - inspection crucial',
          'Risk of fakes (buy from reputable dealers)',
          'May need immediate servicing'
        ],
        bestFor: 'Value-conscious buyers, those avoiding waitlists',
        trustedSources: 'Chrono24 (with Trusted Checkout), Bob\'s Watches, Crown & Caliber, WatchBox'
      },
      {
        type: 'Buying Vintage',
        pros: [
          'Historical significance',
          'Unique patina and character',
          'Investment potential (rare models)',
          'Models no longer in production'
        ],
        cons: [
          'No warranty',
          'Higher risk of frankenwatches (parts swapped)',
          'Expensive to service (parts scarce)',
          'Requires expert knowledge',
          'Water resistance compromised'
        ],
        bestFor: 'Experienced collectors, history enthusiasts, investors',
        warning: 'Educate yourself extensively or work with trusted vintage dealers. Fakes and modified watches are common.'
      }
    ]
  },
  spotFakes: {
    title: 'How to Spot a Fake Watch',
    redFlags: [
      {
        indicator: 'Price Too Good to Be True',
        detail: 'If a Rolex Submariner is $2,000 new, it\'s fake. Research typical market prices.'
      },
      {
        indicator: 'Misspellings or Font Errors',
        detail: 'Luxury brands have perfect printing. Check for inconsistent spacing, wrong fonts, typos.'
      },
      {
        indicator: 'Weight',
        detail: 'Genuine luxury watches use quality materials. Fakes often feel lighter (cheaper metals).'
      },
      {
        indicator: 'Movement Sound and Action',
        detail: 'Most fakes use cheap quartz movements. A "mechanical" Rolex that ticks once per second is fake.'
      },
      {
        indicator: 'Cyclops Magnification',
        detail: 'Rolex cyclops magnifies date 2.5x. Fakes often have weak or no magnification.'
      },
      {
        indicator: 'Caseback Engravings',
        detail: 'Most Rolex models have smooth casebacks (no engravings). Exhibition backs are rare.'
      },
      {
        indicator: 'Serial and Model Numbers',
        detail: 'Check if serial number matches production year. Verify with manufacturer databases.'
      }
    ],
    protectionTips: [
      'Buy from authorized dealers or reputable grey market dealers',
      'Request authenticity certificate and service history',
      'Have watch authenticated by independent watchmaker before purchase',
      'Use escrow services for private sales',
      'Trust your instincts - if something feels off, walk away'
    ]
  }
};

export const WATCH_CARE = {
  cleaning: {
    title: 'How to Clean Your Watch Safely',
    methods: [
      {
        material: 'Stainless Steel Bracelet',
        process: [
          'Remove bracelet from watch case if possible',
          'Use warm water with mild soap',
          'Soft toothbrush to scrub between links',
          'Rinse thoroughly',
          'Dry completely with microfiber cloth',
          'Air dry overnight before wearing'
        ],
        frequency: 'Monthly or when visibly dirty'
      },
      {
        material: 'Leather Strap',
        process: [
          'DO NOT submerge in water',
          'Wipe with slightly damp cloth',
          'Use leather cleaner/conditioner occasionally',
          'Air dry away from direct heat'
        ],
        warning: 'Water damages leather - minimize exposure',
        lifespan: '1-2 years with regular wear'
      },
      {
        material: 'NATO/Fabric Strap',
        process: [
          'Remove from watch',
          'Hand wash with mild detergent',
          'Rinse thoroughly',
          'Air dry completely (12-24 hours)'
        ],
        frequency: 'Every 2-3 weeks with regular wear'
      },
      {
        material: 'Rubber/Silicone Strap',
        process: [
          'Wash with warm soapy water',
          'Scrub gently',
          'Rinse and dry'
        ],
        note: 'Most durable and water-resistant option'
      }
    ]
  },
  servicing: {
    title: 'Watch Servicing: What You Need to Know',
    whyService: [
      'Lubricants dry out over time (3-5 years)',
      'Gaskets deteriorate, compromising water resistance',
      'Accumulated wear can damage components',
      'Maintain accuracy and functionality',
      'Preserve long-term value'
    ],
    frequency: {
      quartz: 'Battery replacement every 2-3 years. Full service every 10 years.',
      mechanical: 'Full service every 3-5 years (depending on manufacturer recommendation)',
      vintage: 'More frequent servicing often needed (every 2-3 years)'
    },
    whatHappens: [
      'Complete disassembly of movement',
      'Ultrasonic cleaning of all parts',
      'Inspection for worn components',
      'Replacement of worn parts and gaskets',
      'Lubrication with specialized oils',
      'Reassembly and regulation',
      'Water resistance testing',
      'Timing accuracy verification'
    ],
    cost: {
      basic: '$200-$400 (simple time-only movements)',
      standard: '$400-$800 (date, water-resistant sports watches)',
      complex: '$800-$2,000+ (chronographs, complications)',
      manufacture: '$1,000-$5,000+ (in-house brand servicing - Rolex, Omega, Patek)'
    },
    tip: 'Always use authorized service centers for luxury watches to maintain warranty and value'
  },
  storage: {
    title: 'Proper Watch Storage',
    options: [
      {
        solution: 'Watch Box',
        description: 'Individual cushions protect watches when not worn',
        bestFor: 'Manual-wind watches, dress watches worn occasionally',
        priceRange: '$30-$500+',
        features: 'Look for soft interior, proper spacing, UV-protected glass (if display box)'
      },
      {
        solution: 'Watch Winder',
        description: 'Motorized device that rotates automatic watches to keep them wound',
        bestFor: 'Complicated automatics (perpetual calendar), watches worn in rotation',
        priceRange: '$50-$1,000+',
        settings: 'Turns Per Day (TPD) - typically 650-900 TPD for most watches',
        note: 'Research specific TPD requirements for your watch'
      },
      {
        solution: 'Watch Roll',
        description: 'Portable fabric storage for travel',
        bestFor: 'Traveling with multiple watches',
        priceRange: '$20-$200'
      }
    ],
    tips: [
      'Store away from magnetic sources (speakers, laptops)',
      'Avoid extreme temperature fluctuations',
      'Keep out of direct sunlight (prevents dial fading)',
      'Store in low-humidity environment (prevents moisture damage)',
      'Wind manual watches before storage (maintains lubrication distribution)'
    ]
  },
  strapChange: {
    title: 'How to Change a Watch Strap',
    tools: 'Spring bar tool ($5-$15)',
    process: [
      'Identify spring bar location (between lugs)',
      'Use spring bar tool to compress spring bar',
      'Slide strap off while holding spring bar compressed',
      'Insert new strap\'s spring bar into lug hole',
      'Compress spring bar and align with opposite lug hole',
      'Release tool - spring bar should click into place',
      'Test security by gently pulling strap'
    ],
    strapTypes: {
      quickRelease: 'No tools needed - lever on spring bar',
      integrated: 'Cannot be changed (Royal Oak, Nautilus) - requires bracelet links only',
      standard: 'Requires spring bar tool'
    },
    lugWidth: 'Measure distance between lugs (common: 18mm, 20mm, 22mm)',
    tip: 'Changing straps is the easiest way to completely transform your watch\'s look for $20-$100'
  }
};
