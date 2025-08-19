  // More diverse Andhra Pradesh properties
  // (Removed stray property objects here. If you want to add these, put them inside the `kakinadaAdditions` array or directly in the `properties` array.)
// Properties Page JavaScript

// Sample property data (hardcoded)
// Note: Use remote image URLs to ensure assets load without bundling.
const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    price: 1250000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    yearBuilt: 2019,
    description: "This stunning modern villa features an open floor plan, high ceilings, and floor-to-ceiling windows that allow natural light to flood the space. The gourmet kitchen is equipped with high-end stainless steel appliances, a large island, and custom cabinetry. The spacious primary suite includes a walk-in closet and a luxurious bathroom with a soaking tub and separate shower. Outside, you'll find a beautifully landscaped yard with a swimming pool, outdoor kitchen, and covered patio perfect for entertaining.",
    features: ["Swimming Pool", "Garden", "Garage", "Air Conditioning", "Security System", "Smart Home"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 123-4567",
      email: "jane.smith@example.com"
    },
    location: { city: "Beverly Hills", state: "CA", neighborhood: "West Side" }
  },
  {
    id: 2,
    title: "Luxury Penthouse with Ocean View",
    address: "456 Skyline Drive, Miami, FL 33101",
    price: 1850000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    yearBuilt: 2020,
    description: "Experience luxury living in this breathtaking penthouse with panoramic ocean views and a private terrace. Building amenities include concierge, fitness center, spa, pool, and beach access.",
    features: ["Ocean View", "Balcony", "Fitness Center", "Pool", "Doorman", "Elevator"],
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "Michael Johnson",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 987-6543",
      email: "michael.johnson@example.com"
    },
    location: { city: "Miami", state: "FL", neighborhood: "Downtown" }
  },
  {
    id: 3,
    title: "Charming Cottage with Garden",
    address: "789 Maple Street, Portland, OR 97205",
    price: 685000,
    type: "House",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    yearBuilt: 1940,
    description: "Beautifully renovated cottage blending vintage charm with modern amenities. Private backyard with mature trees, garden, and patio for outdoor dining.",
    features: ["Garden", "Fireplace", "Hardwood Floors", "Renovated", "Patio", "Quiet Neighborhood"],
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "Emily Davis",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 456-7890",
      email: "emily.davis@example.com"
    },
    location: { city: "Portland", state: "OR", neighborhood: "Laurelhurst" }
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    address: "101 Urban Avenue, Seattle, WA 98101",
    price: 925000,
    type: "Townhouse",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1600,
    yearBuilt: 2018,
    description: "Sleek townhouse with designer kitchen, gas fireplace, and rooftop deck with city views. Two-car garage and smart home technology included.",
    features: ["Rooftop Deck", "City Views", "Garage", "Smart Home", "Fireplace", "Energy Efficient"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "David Wilson",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 789-0123",
      email: "david.wilson@example.com"
    },
    location: { city: "Seattle", state: "WA", neighborhood: "Capitol Hill" }
  },
  {
    id: 5,
    title: "Spacious Family Home",
    address: "234 Oak Lane, Austin, TX 78701",
    price: 795000,
    type: "House",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 3,
    area: 2800,
    yearBuilt: 2010,
    description: "Perfect for a growing family with multiple living spaces, finished basement, and a large backyard with covered patio.",
    features: ["Large Backyard", "Finished Basement", "Fireplace", "Home Office", "Family Room", "Quiet Neighborhood"],
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "Sarah Thompson",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 234-5678",
      email: "sarah.thompson@example.com"
    },
    location: { city: "Austin", state: "TX", neighborhood: "Travis Heights" }
  },
  {
    id: 6,
    title: "Historic Brownstone",
    address: "567 Heritage Row, Boston, MA 02108",
    price: 1450000,
    type: "Townhouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 2200,
    yearBuilt: 1890,
    description: "Meticulously renovated brownstone with original details, chef's kitchen, and private courtyard garden in a central location.",
    features: ["Historic", "Renovated", "Fireplace", "Garden", "Original Details", "Central Location"],
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: {
      name: "Robert Chen",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      phone: "(555) 876-5432",
      email: "robert.chen@example.com"
    },
    location: { city: "Boston", state: "MA", neighborhood: "Beacon Hill" }
  },
  {
    id: 7,
    title: "Urban Loft with Skyline Views",
    address: "890 Market St, San Francisco, CA 94103",
    price: 1100000,
    type: "Condo",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    yearBuilt: 2015,
    description: "Open-concept loft with floor-to-ceiling windows, polished concrete floors, and private balcony overlooking the skyline.",
    features: ["Balcony", "Elevator", "City Views", "Fitness Center", "Security System"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Ava Patel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 234-9988", email: "ava.patel@example.com" },
    location: { city: "San Francisco", state: "CA", neighborhood: "SoMa" }
  },
  {
    id: 8,
    title: "Lakefront Retreat",
    address: "12 Shoreline Rd, Lake Tahoe, NV 89448",
    price: 1650000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2300,
    yearBuilt: 2012,
    description: "Tranquil lakefront home with expansive deck, hot tub, and private dock. Ideal for year-round living or vacation stays.",
    features: ["Lake View", "Balcony", "Fireplace", "Garage", "Garden"],
    image: "https://images.unsplash.com/photo-1601918774871-2c2a3790fb70?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601918774871-2c2a3790fb70?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Liam Brown", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 664-2211", email: "liam.brown@example.com" },
    location: { city: "Lake Tahoe", state: "NV", neighborhood: "Incline Village" }
  },
  {
    id: 9,
    title: "Downtown Apartment for Rent",
    address: "45 Grand Ave, New York, NY 10013",
    price: 5200,
    type: "Apartment",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    yearBuilt: 2018,
    description: "Bright apartment in the heart of the city. In-unit laundry, doorman building, and steps from transit and dining.",
    features: ["Elevator", "Doorman", "Balcony", "Fitness Center", "Security System"],
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Noah Kim", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 881-3322", email: "noah.kim@example.com" },
    location: { city: "New York", state: "NY", neighborhood: "Tribeca" }
  },
  {
    id: 10,
    title: "Suburban Ranch Home",
    address: "780 Cedar Ct, Naperville, IL 60540",
    price: 575000,
    type: "House",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 1700,
    yearBuilt: 2004,
    description: "Single-story ranch with open layout, updated kitchen, and a spacious yard. Great schools and quiet cul-de-sac.",
    features: ["Garage", "Garden", "Fireplace", "Family Room"],
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Olivia Green", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 222-9911", email: "olivia.green@example.com" },
    location: { city: "Naperville", state: "IL", neighborhood: "Cedar Ridge" }
  },
  {
    id: 11,
    title: "Newly Built Townhome",
    address: "410 Maple Row, Denver, CO 80202",
    price: 815000,
    type: "Townhouse",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1900,
    yearBuilt: 2022,
    description: "Modern townhome near downtown with attached garage, rooftop patio, and mountain views.",
    features: ["Rooftop Deck", "Garage", "City Views", "Energy Efficient"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Sophia Martinez", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 600-2212", email: "sophia.martinez@example.com" },
    location: { city: "Denver", state: "CO", neighborhood: "LoHi" }
  },
  {
    id: 12,
    title: "Cozy Mountain Cabin",
    address: "99 Pine Trail, Asheville, NC 28801",
    price: 480000,
    type: "House",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 1,
    area: 900,
    yearBuilt: 1998,
    description: "Charming cabin with wood-burning fireplace, wraparound porch, and forest views. Perfect weekend getaway.",
    features: ["Fireplace", "Garden", "Quiet Neighborhood", "Balcony"],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Ethan Walker", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 123-7788", email: "ethan.walker@example.com" },
    location: { city: "Asheville", state: "NC", neighborhood: "Blue Ridge" }
  }
  ,
  // --- Kakinada and nearby listings ---
  {
    id: 101,
    title: "Sea View Apartment - Kakinada Beach Road",
    address: "Kakinada Beach Rd, Suryaraopeta, Kakinada, AP 533001",
    price: 6500000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    yearBuilt: 2021,
    description: "Modern 3BHK with sea view balcony, covered parking, and 24x7 security near Kakinada beach road.",
    features: ["Balcony", "Elevator", "Security System", "Garage"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Harsha Varma", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 98765 12345", email: "harsha.varma@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Beach Road" }
  },
  {
    id: 102,
    title: "Gated Community Villa - Ramanayyapeta",
    address: "Ramanayyapeta, Kakinada, Andhra Pradesh 533005",
    price: 12500000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    yearBuilt: 2020,
    description: "Premium east-facing 4BHK villa in gated community with clubhouse, pool, and children’s play area.",
    features: ["Swimming Pool", "Garden", "Garage", "Security System", "Smart Home"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Sravani Reddy", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 90000 11223", email: "sravani.reddy@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Ramanayyapeta" }
  },
  {
    id: 103,
    title: "Budget 2BHK - Samalkota Road",
    address: "Samalkota Rd, Kakinada, AP 533006",
    price: 3800000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    yearBuilt: 2018,
    description: "Well-ventilated 2BHK near Samalkota road with lift, generator backup and covered parking.",
    features: ["Elevator", "Garage", "Security System"],
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Vikram Rao", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 88999 44556", email: "vikram.rao@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Samalkota Road" }
  },
  {
    id: 104,
    title: "Independent House - Sarpavaram Junction",
    address: "Sarpavaram Jn, Kakinada, AP 533005",
    price: 9200000,
    type: "House",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1900,
    yearBuilt: 2017,
    description: "Corner plot independent house with garden, borewell and ample parking near Sarpavaram junction.",
    features: ["Garden", "Garage", "Balcony"],
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Niharika Das", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 77777 66554", email: "niharika.das@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Sarpavaram Junction" }
  },
  {
    id: 105,
    title: "Rental 3BHK - Bhanugudi Junction",
    address: "Bhanugudi Jn, Kakinada, AP 533003",
    price: 28000,
    type: "Apartment",
    status: "For Rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 1450,
    yearBuilt: 2019,
    description: "Spacious 3BHK semi-furnished flat with elevator and security, walkable to markets and schools.",
    features: ["Elevator", "Security System", "Balcony"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Srikanth Naidu", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 96666 11221", email: "srikanth.naidu@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Bhanugudi Junction" }
  },
  {
    id: 106,
    title: "Riverfront House - Near Yanam",
    address: "Godavari Riverfront, Yanam (Near Kakinada), 533464",
    price: 11500000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2400,
    yearBuilt: 2016,
    description: "Picturesque riverfront home with large deck, landscaped garden and ample parking, 30 mins from Kakinada.",
    features: ["Garden", "Balcony", "Garage", "Fireplace"],
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Ananya Iyer", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 95555 77889", email: "ananya.iyer@example.com" },
    location: { city: "Yanam", state: "PY", neighborhood: "Riverfront" }
  },
  {
    id: 107,
    title: "Penthouse - Port Area",
    address: "Port Area, Kakinada, AP 533007",
    price: 14500000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2200,
    yearBuilt: 2023,
    description: "Luxurious penthouse with private terrace, sea breeze, lift access and two car parks near Kakinada Port.",
    features: ["Balcony", "Elevator", "Garage", "Security System"],
    image: "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Rohit Singh", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 90009 34343", email: "rohit.singh@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Port Area" }
  },
  {
    id: 108,
    title: "3BHK Near JNTU Kakinada",
    address: "Near JNTU Kakinada, Nagamallithota, AP 533003",
    price: 5600000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 1320,
    yearBuilt: 2022,
    description: "Walk-to-campus 3BHK in a newly built block with elevator, generator backup, and CCTV.",
    features: ["Elevator", "Security System", "Balcony"],
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Keerthi Menon", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "+91 91234 55667", email: "keerthi.menon@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Nagamallithota" }
  }
  ,
  // --- Additional diverse property types ---
  {
    id: 201,
    title: "Luxury Villa in Gated Community",
    address: "Palm Grove Estate, Scottsdale, AZ 85255",
    price: 2350000,
    type: "Villa",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 5,
    area: 3500,
    yearBuilt: 2021,
    description: "Expansive luxury villa with double-height foyer, chef's kitchen, private pool, and smart home automation in a 24/7 secured community.",
    features: ["Swimming Pool", "Smart Home", "Garage", "Garden", "Security System", "Balcony"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154154-1e4c3b37a755?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154515-527231c71a7b?q=80&w=1600&auto=format&fit=crop"
    ],
  agent: { name: "Grace Parker", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", phone: "(555) 420-8811", email: "grace.parker@example.com" },
    location: { city: "Scottsdale", state: "AZ", neighborhood: "Palm Grove" }
  },
  {
    id: 202,
    title: "Cozy Downtown Studio",
    address: "200 Market St, Unit 17B, Philadelphia, PA 19106",
    price: 285000,
    type: "Studio",
    status: "For Sale",
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    yearBuilt: 2019,
    description: "Bright, efficient studio with city views, in-unit laundry, and access to a rooftop lounge and fitness center.",
    features: ["Elevator", "Fitness Center", "City Views", "Laundry"],
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Daniel Reyes", image: "https://randomuser.me/api/portraits/men/73.jpg", phone: "(555) 341-2288", email: "daniel.reyes@example.com" },
    location: { city: "Philadelphia", state: "PA", neighborhood: "Old City" }
  },
  {
    id: 203,
    title: "Modern Duplex with Backyard",
    address: "45 Brookside Ave, Portland, ME 04101",
    price: 865000,
    type: "Duplex",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2100,
    yearBuilt: 2017,
    description: "Stylish duplex ideal for multi-generational living or rental income. Includes private yard, two-car parking, and updated interiors.",
    features: ["Garage", "Garden", "Energy Efficient", "Balcony"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Natalie Brooks", image: "https://randomuser.me/api/portraits/women/84.jpg", phone: "(555) 778-6644", email: "natalie.brooks@example.com" },
    location: { city: "Portland", state: "ME", neighborhood: "East End" }
  },
  {
    id: 204,
    title: "Country Farmhouse with Acreage",
    address: "Ridgeview Rd, Franklin, TN 37064",
    price: 695000,
    type: "Farmhouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    yearBuilt: 2005,
    description: "Classic farmhouse charm with wraparound porch, barn, and lush acreage. Peaceful rural setting minutes from town.",
    features: ["Garden", "Fireplace", "Porch", "Barn"],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Logan Price", image: "https://randomuser.me/api/portraits/men/67.jpg", phone: "(555) 221-4455", email: "logan.price@example.com" },
    location: { city: "Franklin", state: "TN", neighborhood: "Ridgeview" }
  },
  {
    id: 205,
    title: "Heritage Bungalow Near Park",
    address: "18 Linden Ave, Pasadena, CA 91106",
    price: 540000,
    type: "Bungalow",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    yearBuilt: 1965,
    description: "Charming single-level bungalow with mature landscaping, renovated kitchen, and walkable neighborhood amenities.",
    features: ["Garden", "Fireplace", "Patio", "Garage"],
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Priya Shah", image: "https://randomuser.me/api/portraits/women/49.jpg", phone: "(555) 990-1122", email: "priya.shah@example.com" },
    location: { city: "Pasadena", state: "CA", neighborhood: "Playhouse District" }
  },
  {
    id: 206,
    title: "Prime Residential Plot",
    address: "Sunset Meadows, Plano, TX 75024",
    price: 150000,
    type: "Land",
    status: "For Sale",
    bedrooms: 0,
    bathrooms: 0,
    area: 6000,
    yearBuilt: 2024,
    description: "Ready-to-build corner plot in a developing community with wide roads, utilities, and park access.",
    features: ["Corner Plot", "Park Access"],
    image: "https://images.unsplash.com/photo-1600585154515-527231c71a7b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154515-527231c71a7b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154154-1e4c3b37a755?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Arjun Nair", image: "https://randomuser.me/api/portraits/men/26.jpg", phone: "(555) 333-5544", email: "arjun.nair@example.com" },
    location: { city: "Plano", state: "TX", neighborhood: "Sunset Meadows" }
  }
];

// ----- Currency: Display all prices in Indian Rupees (INR) -----
// Assumption: Listings with location.state as 'AP' (Andhra Pradesh) or 'PY' (Puducherry/Yanam)
// are already entered in INR; others are assumed to be USD and converted using a static rate.
const USD_TO_INR = 83; // static conversion rate for display only

function isIndianProperty(property) {
  try {
    if (!property || !property.location) return false;
    const st = (property.location.state || '').toUpperCase();
    if (st === 'AP' || st === 'PY') return true;
    const addr = (property.address || '').toLowerCase();
    return addr.includes('kakinada') || addr.includes('yanam') || addr.includes('andhra pradesh');
  } catch {
    return false;
  }
}

function toINRAmount(property) {
  const base = Number(property?.price || 0);
  if (Number.isNaN(base)) return 0;
  return isIndianProperty(property) ? base : Math.round(base * USD_TO_INR);
}

function formatINR(amount) {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    // Fallback formatting
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
  }
}

function displayPriceINR(property) {
  return formatINR(toINRAmount(property));
}

// Add Kakinada and nearby hardcoded properties (moved from Contact page)
const kakinadaAdditions = [
  // New Andhra Pradesh properties
  {
    id: 209,
    title: "Luxury 3BHK Flat - Rajahmundry Riverside",
    address: "Godavari Bund Road, Rajahmundry, AP 533101",
    price: 7800000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    yearBuilt: 2023,
    description: "Spacious 3BHK with river view balcony, modular kitchen, and covered parking in a gated community.",
    features: ["Balcony", "Elevator", "Security System", "Parking"],
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Ravi Kumar", image: "https://randomuser.me/api/portraits/men/45.jpg", phone: "+91 99887 12345", email: "ravi.kumar@example.com" },
    location: { city: "Rajahmundry", state: "AP", neighborhood: "Godavari Bund" }
  },
  {
    id: 210,
    title: "Independent House - Guntur City Center",
    address: "Lakshmipuram Main Road, Guntur, AP 522007",
    price: 9500000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2200,
    yearBuilt: 2022,
    description: "Modern 4BHK house with private garden, borewell, and solar power backup in a prime Guntur location.",
    features: ["Garden", "Parking", "Solar Power", "Borewell"],
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Lakshmi Devi", image: "https://randomuser.me/api/portraits/women/55.jpg", phone: "+91 98765 43210", email: "lakshmi.devi@example.com" },
    location: { city: "Guntur", state: "AP", neighborhood: "Lakshmipuram" }
  },
  {
    id: 211,
    title: "Budget 2BHK - Vizag Beachside",
    address: "RK Beach Road, Visakhapatnam, AP 530017",
    price: 4200000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    yearBuilt: 2021,
    description: "Affordable 2BHK with sea view, 24x7 water supply, and easy access to schools and shopping.",
    features: ["Sea View", "Parking", "Security System"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Suresh Reddy", image: "https://randomuser.me/api/portraits/men/35.jpg", phone: "+91 91234 56789", email: "suresh.reddy@example.com" },
    location: { city: "Visakhapatnam", state: "AP", neighborhood: "RK Beach" }
  },
  {
    id: 212,
    title: "Rental 1BHK - Vijayawada City",
    address: "MG Road, Vijayawada, AP 520010",
    price: 15000,
    type: "Apartment",
    status: "For Rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    yearBuilt: 2020,
    description: "Compact 1BHK ideal for working professionals, close to bus stand and shopping malls.",
    features: ["Elevator", "Power Backup", "Parking"],
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Anil Kumar", image: "https://randomuser.me/api/portraits/men/25.jpg", phone: "+91 90000 11122", email: "anil.kumar@example.com" },
    location: { city: "Vijayawada", state: "AP", neighborhood: "MG Road" }
  },
  {
    id: 201,
    title: "Uppada Beachfront 3BHK",
    address: "Uppada Beach Rd, Kakinada, AP",
    price: 1800000,
    type: "House",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    yearBuilt: 2019,
    description: "Sea-facing 3BHK with airy balconies and quick access to Uppada Beach.",
    features: ["Balcony", "Parking", "Security System"],
    image: "https://placehold.co/600x400?text=Uppada+Beachfront",
    images: [
      "https://placehold.co/1200x800?text=Uppada+Beachfront+1",
      "https://placehold.co/1200x800?text=Uppada+Beachfront+2",
      "https://placehold.co/1200x800?text=Uppada+Beachfront+3",
      "https://placehold.co/1200x800?text=Uppada+Beachfront+4"
    ],
    agent: { name: "Harsha Varma", image: "https://randomuser.me/api/portraits/men/83.jpg", phone: "+91 98765 12345", email: "harsha.varma@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Uppada Beach" }
  },
  {
    id: 202,
    title: "Serenity Villas Kakinada",
    address: "Pithapuram Rd, Kakinada, AP",
    price: 2400000,
    type: "House",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2400,
    yearBuilt: 2020,
    description: "Premium independent villa community with landscaped avenues and 24x7 security.",
    features: ["Garden", "Garage", "Security System", "Smart Home"],
    image: "https://placehold.co/600x400?text=Serenity+Villas",
    images: [
      "https://placehold.co/1200x800?text=Serenity+Villas+1",
      "https://placehold.co/1200x800?text=Serenity+Villas+2",
      "https://placehold.co/1200x800?text=Serenity+Villas+3",
      "https://placehold.co/1200x800?text=Serenity+Villas+4"
    ],
    agent: { name: "Sravani Reddy", image: "https://randomuser.me/api/portraits/women/66.jpg", phone: "+91 90000 11223", email: "sravani.reddy@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Pithapuram Road" }
  },
  {
    id: 203,
    title: "RiverView Apartments",
    address: "Yanam (Godavari View), near Kakinada",
    price: 900000,
    type: "Condo",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    yearBuilt: 2018,
    description: "Modern 2BHK with river views, clubhouse access, and covered parking.",
    features: ["Balcony", "Elevator", "Parking"],
    image: "https://placehold.co/600x400?text=RiverView+Apartments",
    images: [
      "https://placehold.co/1200x800?text=RiverView+1",
      "https://placehold.co/1200x800?text=RiverView+2",
      "https://placehold.co/1200x800?text=RiverView+3",
      "https://placehold.co/1200x800?text=RiverView+4"
    ],
    agent: { name: "Ananya Iyer", image: "https://randomuser.me/api/portraits/women/19.jpg", phone: "+91 95555 77889", email: "ananya.iyer@example.com" },
    location: { city: "Yanam", state: "PY", neighborhood: "River View" }
  },
  {
    id: 204,
    title: "Gollaprolu Green Residency",
    address: "Gollaprolu, Kakinada District, AP",
    price: 1200000,
    type: "Townhouse",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    yearBuilt: 2017,
    description: "Townhouse with private garden, near schools and local markets.",
    features: ["Garden", "Parking"],
    image: "https://placehold.co/600x400?text=Green+Residency",
    images: [
      "https://placehold.co/1200x800?text=Green+Residency+1",
      "https://placehold.co/1200x800?text=Green+Residency+2",
      "https://placehold.co/1200x800?text=Green+Residency+3",
      "https://placehold.co/1200x800?text=Green+Residency+4"
    ],
    agent: { name: "Vikram Rao", image: "https://randomuser.me/api/portraits/men/11.jpg", phone: "+91 88999 44556", email: "vikram.rao@example.com" },
    location: { city: "Gollaprolu", state: "AP", neighborhood: "Central" }
  },
  {
    id: 205,
    title: "Coringa Eco Homes",
    address: "Near Coringa Wildlife Sanctuary, Kakinada, AP",
    price: 700000,
    type: "House",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    yearBuilt: 2016,
    description: "Nature-friendly homes with ample ventilation and green trails nearby.",
    features: ["Garden", "Balcony"],
    image: "https://placehold.co/600x400?text=Coringa+Eco+Homes",
    images: [
      "https://placehold.co/1200x800?text=Coringa+1",
      "https://placehold.co/1200x800?text=Coringa+2",
      "https://placehold.co/1200x800?text=Coringa+3",
      "https://placehold.co/1200x800?text=Coringa+4"
    ],
    agent: { name: "Keerthi Menon", image: "https://randomuser.me/api/portraits/women/22.jpg", phone: "+91 91234 55667", email: "keerthi.menon@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Coringa" }
  },
  {
    id: 206,
    title: "Samalkota Heights",
    address: "Samalkota, near Kakinada, AP",
    price: 1500000,
    type: "Condo",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    yearBuilt: 2021,
    description: "High-rise living with city views, power backup, and elevator access.",
    features: ["Elevator", "Power Backup", "Parking"],
    image: "https://placehold.co/600x400?text=Samalkota+Heights",
    images: [
      "https://placehold.co/1200x800?text=Samalkota+1",
      "https://placehold.co/1200x800?text=Samalkota+2",
      "https://placehold.co/1200x800?text=Samalkota+3",
      "https://placehold.co/1200x800?text=Samalkota+4"
    ],
    agent: { name: "Rohit Singh", image: "https://randomuser.me/api/portraits/men/12.jpg", phone: "+91 90009 34343", email: "rohit.singh@example.com" },
    location: { city: "Samalkota", state: "AP", neighborhood: "Central" }
  },
  {
    id: 207,
    title: "Sarpavaram Junction Residency",
    address: "Sarpavaram Junction, Kakinada, AP",
    price: 1100000,
    type: "Townhouse",
    status: "For Rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 1500,
    yearBuilt: 2018,
    description: "Well-connected townhouse close to malls, hospitals, and eateries.",
    features: ["Parking", "Balcony"],
    image: "https://placehold.co/600x400?text=Sarpavaram+Residency",
    images: [
      "https://placehold.co/1200x800?text=Sarpavaram+1",
      "https://placehold.co/1200x800?text=Sarpavaram+2",
      "https://placehold.co/1200x800?text=Sarpavaram+3",
      "https://placehold.co/1200x800?text=Sarpavaram+4"
    ],
    agent: { name: "Niharika Das", image: "https://randomuser.me/api/portraits/women/31.jpg", phone: "+91 77777 66554", email: "niharika.das@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "Sarpavaram Junction" }
  },
  {
    id: 208,
    title: "Kakinada SmartCity Tower",
    address: "JNTU-K Road, Kakinada, AP",
    price: 3200000,
    type: "Condo",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 2650,
    yearBuilt: 2022,
    description: "Spacious condo with smart-home features and premium amenities.",
    features: ["Smart Home", "Elevator", "Parking", "Security System"],
    image: "https://placehold.co/600x400?text=SmartCity+Tower",
    images: [
      "https://placehold.co/1200x800?text=SmartCity+1",
      "https://placehold.co/1200x800?text=SmartCity+2",
      "https://placehold.co/1200x800?text=SmartCity+3",
      "https://placehold.co/1200x800?text=SmartCity+4"
    ],
    agent: { name: "Local Expert", image: "https://randomuser.me/api/portraits/men/41.jpg", phone: "+91 96666 11221", email: "expert.kakinada@example.com" },
    location: { city: "Kakinada", state: "AP", neighborhood: "JNTU-K Road" }
  },
  // 12 new Andhra Pradesh properties
  {
    id: 213,
    title: "Beachfront Villa - Bheemili",
    address: "Bheemili Beach Road, Visakhapatnam, AP 531163",
    price: 18500000,
    type: "Villa",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 5,
    area: 4200,
    yearBuilt: 2024,
    description: "Luxurious 5BHK villa with private pool, sea view, and landscaped gardens.",
    features: ["Pool", "Sea View", "Garden", "Parking", "Security System"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Sunitha Rao", image: "https://randomuser.me/api/portraits/women/44.jpg", phone: "+91 90001 23456", email: "sunitha.rao@example.com" },
    location: { city: "Visakhapatnam", state: "AP", neighborhood: "Bheemili Beach" }
  },
  {
    id: 214,
    title: "Modern Studio - Amaravati IT Park",
    address: "IT Park, Amaravati, AP 522503",
    price: 3200000,
    type: "Studio",
    status: "For Sale",
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    yearBuilt: 2023,
    description: "Compact studio apartment ideal for tech professionals, with gym and co-working space.",
    features: ["Gym", "Co-working", "Parking"],
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Ramesh Babu", image: "https://randomuser.me/api/portraits/men/52.jpg", phone: "+91 91234 56780", email: "ramesh.babu@example.com" },
    location: { city: "Amaravati", state: "AP", neighborhood: "IT Park" }
  },
  {
    id: 215,
    title: "Farmhouse Retreat - Anantapur",
    address: "NH44, Anantapur Rural, AP 515001",
    price: 9500000,
    type: "Farmhouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    yearBuilt: 2021,
    description: "Spacious farmhouse with fruit orchards, well water, and open lawns.",
    features: ["Orchard", "Well", "Lawn", "Parking"],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Deepak Reddy", image: "https://randomuser.me/api/portraits/men/61.jpg", phone: "+91 99887 65432", email: "deepak.reddy@example.com" },
    location: { city: "Anantapur", state: "AP", neighborhood: "NH44" }
  },
  {
    id: 216,
    title: "Lakeview Penthouse - Kurnool",
    address: "Orvakal Lake Road, Kurnool, AP 518010",
    price: 12000000,
    type: "Penthouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 5,
    area: 3100,
    yearBuilt: 2024,
    description: "Elegant penthouse with panoramic lake views, rooftop deck, and smart home features.",
    features: ["Lake View", "Rooftop Deck", "Smart Home", "Parking"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Priya Nair", image: "https://randomuser.me/api/portraits/women/60.jpg", phone: "+91 98765 43219", email: "priya.nair@example.com" },
    location: { city: "Kurnool", state: "AP", neighborhood: "Orvakal Lake" }
  },
  {
    id: 217,
    title: "Budget Apartment - Srikakulam Town",
    address: "Main Road, Srikakulam, AP 532001",
    price: 2100000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    yearBuilt: 2022,
    description: "Affordable 2BHK apartment with lift, generator backup, and children’s play area.",
    features: ["Elevator", "Power Backup", "Play Area"],
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a2a?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a2a?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Sailaja Devi", image: "https://randomuser.me/api/portraits/women/70.jpg", phone: "+91 90000 22233", email: "sailaja.devi@example.com" },
    location: { city: "Srikakulam", state: "AP", neighborhood: "Main Road" }
  },
  {
    id: 218,
    title: "Luxury Row House - Nellore",
    address: "Magunta Layout, Nellore, AP 524003",
    price: 6700000,
    type: "Row House",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    yearBuilt: 2023,
    description: "Premium row house with private terrace, modular kitchen, and covered parking.",
    features: ["Terrace", "Modular Kitchen", "Parking"],
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Vikram Joshi", image: "https://randomuser.me/api/portraits/men/77.jpg", phone: "+91 91234 55678", email: "vikram.joshi@example.com" },
    location: { city: "Nellore", state: "AP", neighborhood: "Magunta Layout" }
  },
  {
    id: 219,
    title: "City Center Flat - Eluru",
    address: "Eluru Main Road, Eluru, AP 534001",
    price: 3900000,
    type: "Apartment",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    yearBuilt: 2022,
    description: "2BHK flat in the heart of Eluru, close to schools, hospitals, and shopping.",
    features: ["Elevator", "Parking", "Security System"],
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Meena Sharma", image: "https://randomuser.me/api/portraits/women/80.jpg", phone: "+91 90001 33445", email: "meena.sharma@example.com" },
    location: { city: "Eluru", state: "AP", neighborhood: "Main Road" }
  },
  {
    id: 220,
    title: "Golf Greens Villa - Vizianagaram",
    address: "Golf Course Road, Vizianagaram, AP 535002",
    price: 15500000,
    type: "Villa",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 5,
    area: 3900,
    yearBuilt: 2024,
    description: "Exclusive villa with golf course access, home theater, and private garden.",
    features: ["Golf Access", "Home Theater", "Garden", "Parking"],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Arvind Rao", image: "https://randomuser.me/api/portraits/men/88.jpg", phone: "+91 98888 12345", email: "arvind.rao@example.com" },
    location: { city: "Vizianagaram", state: "AP", neighborhood: "Golf Course Road" }
  },
  {
    id: 221,
    title: "Rental 2BHK - Ongole City",
    address: "Trunk Road, Ongole, AP 523001",
    price: 18000,
    type: "Apartment",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    yearBuilt: 2020,
    description: "2BHK rental with 24x7 water, generator backup, and easy access to bus stand.",
    features: ["Power Backup", "Parking", "Water Supply"],
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a2a?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a2a?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Srinivas Rao", image: "https://randomuser.me/api/portraits/men/90.jpg", phone: "+91 90000 99887", email: "srinivas.rao@example.com" },
    location: { city: "Ongole", state: "AP", neighborhood: "Trunk Road" }
  },
  {
    id: 222,
    title: "Heritage Bungalow - Rajahmundry",
    address: "Dowleswaram, Rajahmundry, AP 533125",
    price: 11000000,
    type: "Bungalow",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 4,
    area: 3700,
    yearBuilt: 2015,
    description: "Classic bungalow with heritage architecture, large verandah, and mature trees.",
    features: ["Verandah", "Garden", "Parking"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Padmaja Rao", image: "https://randomuser.me/api/portraits/women/99.jpg", phone: "+91 98888 77665", email: "padmaja.rao@example.com" },
    location: { city: "Rajahmundry", state: "AP", neighborhood: "Dowleswaram" }
  },
  {
    id: 223,
    title: "Student Studio - Guntur University Area",
    address: "University Road, Guntur, AP 522509",
    price: 12000,
    type: "Studio",
    status: "For Rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 400,
    yearBuilt: 2021,
    description: "Furnished studio for students, walkable to university, with WiFi and laundry.",
    features: ["WiFi", "Laundry", "Furnished"],
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Karthik Reddy", image: "https://randomuser.me/api/portraits/men/91.jpg", phone: "+91 90000 12345", email: "karthik.reddy@example.com" },
    location: { city: "Guntur", state: "AP", neighborhood: "University Road" }
  },
  {
    id: 224,
    title: "Hilltop Cottage - Araku Valley",
    address: "Padmapuram Gardens, Araku Valley, AP 531149",
    price: 8500000,
    type: "Cottage",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    yearBuilt: 2022,
    description: "Charming hilltop cottage with valley views, fireplace, and organic garden.",
    features: ["Fireplace", "Valley View", "Organic Garden"],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1600&auto=format&fit=crop"
    ],
    agent: { name: "Lalitha Devi", image: "https://randomuser.me/api/portraits/women/92.jpg", phone: "+91 90000 54321", email: "lalitha.devi@example.com" },
    location: { city: "Araku Valley", state: "AP", neighborhood: "Padmapuram Gardens" }
  }
];

// Merge Kakinada properties into main dataset
properties.push(...kakinadaAdditions);

// Restrict dataset to Andhra Pradesh properties only
(function restrictToAndhraPradesh() {
  const apCities = [
    'kakinada','visakhapatnam','vizag','vijayawada','guntur','rajahmundry','tirupati','nellore','anantapur','kurnool',
    'srikakulam','eluru','kadapa','ongole','amaravati','machilipatnam','bhimavaram','tenali','chittoor','srikalahasti','tanuku'
  ];
  const isAP = (p) => {
    const state = (p.location && p.location.state || '').toUpperCase();
    if (state === 'AP') return true;
    if (state && state !== 'AP') return false; // exclude other known states like PY/CA etc.
    const addr = (p.address || '').toLowerCase();
    if (!addr) return false;
    if (addr.includes(', ap')) return true;
    return apCities.some(city => addr.includes(city));
  };

  const apOnly = properties.filter(isAP);
  properties.length = 0;
  properties.push(...apOnly);
})();

// Holds the latest filtered/search results so view toggles and sorting keep context
let currentResults = null;

// Initialize when DOM is ready (handles late script injection)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPropertiesPage);
} else {
  initPropertiesPage();
}

// Initialize the properties page
function initPropertiesPage() {
  // Render properties
  renderProperties();
  
  // Set up event listeners
  setupEventListeners();
  
  // Update properties count
  updatePropertiesCount();
}

// Update properties count
function updatePropertiesCount() {
  const propertiesCount = document.getElementById('property-count');
  if (propertiesCount) {
    propertiesCount.textContent = properties.length;
  }
}

// Render properties in grid view (default)
function renderProperties(filteredProperties = null) {
  const propertiesGrid = document.getElementById('properties-grid');
  if (!propertiesGrid) return;
  
  // Clear existing properties
  propertiesGrid.innerHTML = '';
  
  // Use filtered properties if available, then currentResults, otherwise all
  const propertiesToRender = filteredProperties || currentResults || properties;
  
  // Update properties count
  const propertiesCount = document.querySelector('.properties-count span');
  if (propertiesCount) {
    propertiesCount.textContent = propertiesToRender.length;
  }
  
  // If no properties to display
  if (propertiesToRender.length === 0) {
    propertiesGrid.innerHTML = '<div class="no-properties">No properties match your search criteria. Please try different filters.</div>';
    return;
  }
  
  // Render each property
  propertiesToRender.forEach(property => {
    const propertyCard = createPropertyCard(property);
    propertiesGrid.appendChild(propertyCard);
  });
}

// Create a property card element
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.dataset.id = property.id;
  
  card.innerHTML = `
    <div class="property-image">
      <div class="property-badge">${property.status}</div>
      <img src="${property.image}" alt="${property.title}">
  <div class="property-price">${displayPriceINR(property)}</div>
    </div>
    <div class="property-details">
      <h3 class="property-title">${property.title}</h3>
      <div class="property-address">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        ${property.address}
      </div>
      <div class="property-features">
        <div class="feature">
          <span class="feature-value">${property.bedrooms}</span>
          <span class="feature-label">Beds</span>
        </div>
        <div class="feature">
          <span class="feature-value">${property.bathrooms}</span>
          <span class="feature-label">Baths</span>
        </div>
        <div class="feature">
          <span class="feature-value">${property.area}</span>
          <span class="feature-label">Sq Ft</span>
        </div>
      </div>
    </div>
    <div class="property-footer">
      <div class="property-agent">
        <div class="agent-avatar">
          <img src="${property.agent.image}" alt="${property.agent.name}">
        </div>
        <div class="agent-name">${property.agent.name}</div>
      </div>
      <div class="property-actions">
        <button class="action-button favorite-button" title="Add to favorites">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <button class="action-button share-button" title="Share property">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  // Add click event to open property modal
  card.addEventListener('click', function(e) {
    // Don't open modal if clicking on action buttons
    if (!e.target.closest('.property-actions')) {
      openPropertyModal(property);
    }
  });
  
  // Add favorite button functionality
  const favoriteButton = card.querySelector('.favorite-button');
  favoriteButton.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('favorited');
  });
  
  // Add share button functionality
  const shareButton = card.querySelector('.share-button');
  shareButton.addEventListener('click', function(e) {
    e.stopPropagation();
    alert(`Share property: ${property.title}`);
  });
  
  return card;
}

// Create and open property modal
function openPropertyModal(property) {
  // Get modal element
  const modal = document.getElementById('property-modal');
  if (!modal) return;
  
  // Get modal content element
  const modalContent = modal.querySelector('.modal-content');
  
  // Set modal content
  modalContent.innerHTML = `
    <button class="modal-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
      
      <div class="modal-gallery">
        <img src="${property.images[0]}" alt="${property.title}" class="modal-main-image">
      </div>
      
      <div class="modal-thumbnails">
        ${property.images.map((img, index) => `
          <div class="modal-thumbnail ${index === 0 ? 'active' : ''}">
            <img src="${img}" alt="Thumbnail ${index + 1}">
          </div>
        `).join('')}
      </div>
      
      <div class="modal-details">
        <h2 class="modal-title">${property.title}</h2>
        <div class="modal-address">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${property.address}
        </div>
        
  <div class="modal-price">${displayPriceINR(property)}</div>
        
        <p class="modal-description">${property.description}</p>
        
        <div class="modal-features">
          <div class="modal-feature">
            <span class="modal-feature-value">${property.bedrooms}</span>
            <span class="modal-feature-label">Bedrooms</span>
          </div>
          <div class="modal-feature">
            <span class="modal-feature-value">${property.bathrooms}</span>
            <span class="modal-feature-label">Bathrooms</span>
          </div>
          <div class="modal-feature">
            <span class="modal-feature-value">${property.area}</span>
            <span class="modal-feature-label">Square Feet</span>
          </div>
          <div class="modal-feature">
            <span class="modal-feature-value">${property.yearBuilt}</span>
            <span class="modal-feature-label">Year Built</span>
          </div>
        </div>
        
        <div class="modal-actions">
          <button class="modal-button modal-button-primary">Schedule a Tour</button>
          <button class="modal-button modal-button-secondary">Contact Agent</button>
        </div>
      </div>
    </div>
  `;
  
  // Show modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
  
  // Add close functionality
  const closeButton = modal.querySelector('.modal-close');
  closeButton.addEventListener('click', closePropertyModal);
  
  // Add thumbnail click functionality
  const thumbnails = modal.querySelectorAll('.modal-thumbnail');
  const mainImage = modal.querySelector('.modal-main-image');
  
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      // Update main image
      mainImage.src = property.images[index];
      
      // Update active thumbnail
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closePropertyModal();
    }
  });
}

// Close property modal
function closePropertyModal() {
  const modal = document.querySelector('.property-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Setup event listeners
function setupEventListeners() {
  // Toggle grid/list view
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');
  
  if (gridViewButton && listViewButton) {
    gridViewButton.addEventListener('click', function() {
      if (!this.classList.contains('view-button-active')) {
        this.classList.add('view-button-active');
        listViewButton.classList.remove('view-button-active');
        
        // Switch to grid view
        const propertiesElement = document.getElementById('properties-grid');
        if (propertiesElement) {
          propertiesElement.className = 'properties-grid';
          renderProperties(currentResults);
        }
      }
    });
    
    listViewButton.addEventListener('click', function() {
      if (!this.classList.contains('view-button-active')) {
        this.classList.add('view-button-active');
        gridViewButton.classList.remove('view-button-active');
        
        // Switch to list view
        const propertiesElement = document.getElementById('properties-grid');
        if (propertiesElement) {
          propertiesElement.className = 'properties-list';
          renderPropertiesList(currentResults);
        }
      }
    });
  }
  
  // Sort functionality
  const sortSelect = document.getElementById('sort-properties');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      sortProperties(this.value);
    });
  }
  
  // Advanced search toggle
  const advancedToggle = document.querySelector('.search-advanced-toggle');
  const advancedFields = document.querySelector('.advanced-fields');
  
  if (advancedToggle && advancedFields) {
    advancedToggle.addEventListener('click', function() {
      advancedFields.classList.toggle('show');
      this.querySelector('span').textContent = 
        advancedFields.classList.contains('show') ? 'Hide Advanced' : 'Advanced Search';
    });
  }
  
  // Search form submission
  const searchForm = document.querySelector('.property-search form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      searchProperties();
    });
  }
  // If there is no <form>, wire up the Search button and Enter key
  const searchButton = document.querySelector('.property-search .search-button');
  if (searchButton) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      searchProperties();
    });
  }
  const mainSearchInput = document.getElementById('main-search');
  if (mainSearchInput) {
    mainSearchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchProperties();
      }
    });
    // Debounced search while typing
    const debounced = debounce(searchProperties, 250);
    mainSearchInput.addEventListener('input', debounced);
  }
  // Trigger search on select changes in the top bar
  ['property-type','property-status','price-range','bedrooms'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => searchProperties());
  });
  
  // Filter functionality
  const applyFiltersButton = document.querySelector('.apply-filters-button');
  if (applyFiltersButton) {
    applyFiltersButton.addEventListener('click', filterProperties);
  }
  
  // Reset filters
  const resetFiltersButton = document.querySelector('.reset-filters-button');
  if (resetFiltersButton) {
    resetFiltersButton.addEventListener('click', resetFilters);
  }
}

// Render properties in list view
function renderPropertiesList(filteredProperties = null) {
  const propertiesList = document.getElementById('properties-grid');
  if (!propertiesList) return;
  
  // Clear existing properties
  propertiesList.innerHTML = '';
  
  // Use filtered properties if available, then currentResults, otherwise all
  const propertiesToRender = filteredProperties || currentResults || properties;
  
  // Update properties count
  const propertiesCount = document.getElementById('property-count');
  if (propertiesCount) {
    propertiesCount.textContent = propertiesToRender.length;
  }
  
  // If no properties to display
  if (propertiesToRender.length === 0) {
    propertiesList.innerHTML = '<div class="no-properties">No properties match your search criteria. Please try different filters.</div>';
    return;
  }
  
  // Render each property in list view
  propertiesToRender.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card-list';
    propertyCard.dataset.id = property.id;
    
    propertyCard.innerHTML = `
      <div class="property-image">
        <div class="property-badge">${property.status}</div>
        <img src="${property.image}" alt="${property.title}">
      </div>
      <div class="property-details">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-address">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${property.address}
        </div>
  <div class="property-price">${displayPriceINR(property)}</div>
        <p class="property-description">${property.description.substring(0, 150)}...</p>
        <div class="property-features">
          <div class="feature">
            <span class="feature-value">${property.bedrooms}</span>
            <span class="feature-label">Beds</span>
          </div>
          <div class="feature">
            <span class="feature-value">${property.bathrooms}</span>
            <span class="feature-label">Baths</span>
          </div>
          <div class="feature">
            <span class="feature-value">${property.area}</span>
            <span class="feature-label">Sq Ft</span>
          </div>
          <div class="feature">
            <span class="feature-value">${property.yearBuilt}</span>
            <span class="feature-label">Year</span>
          </div>
        </div>
      </div>
    `;
    
    // Add click event to open property modal
    propertyCard.addEventListener('click', function() {
      openPropertyModal(property);
    });
    
    propertiesList.appendChild(propertyCard);
  });
}

// Sort properties
function sortProperties(sortOption) {
  let base = currentResults ? [...currentResults] : [...properties];
  let sortedProperties = base;
  
  switch (sortOption) {
    case 'price-high':
  sortedProperties.sort((a, b) => toINRAmount(b) - toINRAmount(a));
      break;
    case 'price-low':
  sortedProperties.sort((a, b) => toINRAmount(a) - toINRAmount(b));
      break;
    case 'newest':
      sortedProperties.sort((a, b) => b.yearBuilt - a.yearBuilt);
      break;
    case 'oldest':
      sortedProperties.sort((a, b) => a.yearBuilt - b.yearBuilt);
      break;
  }
  
  // Check if we're in grid or list view
  const isGridView = document.getElementById('grid-view').classList.contains('view-button-active');
  
  currentResults = sortedProperties;
  if (isGridView) {
    renderProperties(currentResults);
  } else {
    renderPropertiesList(currentResults);
  }
}

// Search properties based on search form inputs
function searchProperties() {
  const keyword = document.getElementById('main-search') ? 
                  document.getElementById('main-search').value.toLowerCase() : '';
  const propertyType = document.getElementById('property-type') ? 
                     document.getElementById('property-type').value : 'all';
  const propertyStatus = document.getElementById('property-status') ? 
                       document.getElementById('property-status').value : 'all';
  const priceRange = document.getElementById('price-range') ? 
                   document.getElementById('price-range').value : 'all';
  const bedrooms = document.getElementById('bedrooms') ? 
                 document.getElementById('bedrooms').value : 'any';
  
  // Filter properties based on search criteria
  const searchResults = properties.filter(property => {
    // Basic search
    const matchesKeyword = keyword === '' || 
      property.title.toLowerCase().includes(keyword) || 
      property.description.toLowerCase().includes(keyword) ||
      property.address.toLowerCase().includes(keyword) ||
      property.features.some(feature => feature.toLowerCase().includes(keyword));
      
    const matchesType = propertyType === 'all' || property.type === propertyType;
    const matchesStatus = propertyStatus === 'all' || property.status === propertyStatus;
    
    // Price range
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [minPrice, maxPrice] = priceRange.split('-').map(price => 
        price === 'max' ? Infinity : parseInt(price));
  const inr = toINRAmount(property);
  matchesPrice = inr >= minPrice && inr <= maxPrice;
    }
    
    // Bedrooms
    let matchesBedrooms = true;
    if (bedrooms !== 'any') {
      matchesBedrooms = property.bedrooms >= parseInt(bedrooms);
    }
    
    return matchesKeyword && matchesType && matchesStatus && matchesPrice && matchesBedrooms;
  });
  
  // Check if we're in grid or list view
  const isGridView = document.querySelector('.properties-grid') !== null;
  currentResults = searchResults;
  if (isGridView) {
    renderProperties(currentResults);
  } else {
    renderPropertiesList(currentResults);
  }
}

// Filter properties based on sidebar filters
function filterProperties() {
  // Get filter values from the sidebar
  const propertyTypeSelect = document.querySelector('.sidebar-section .filter-select');
  const priceRangeSelect = document.querySelectorAll('.sidebar-section .filter-select')[2];
  const checkboxes = document.querySelectorAll('.filter-checkbox:checked');
  
  // If these elements don't exist, return
  if (!propertyTypeSelect || !priceRangeSelect) return;
  
  const propertyType = propertyTypeSelect.value;
  const priceRange = priceRangeSelect.value;
  
  // Get selected features
  const selectedFeatures = [];
  checkboxes.forEach(checkbox => {
    selectedFeatures.push(checkbox.value.toLowerCase());
  });
  
  // Filter properties based on criteria
  const filteredProperties = properties.filter(property => {
    // Match property type
    const matchesType = propertyType === 'all' || property.type.toLowerCase() === propertyType.toLowerCase();
    
    // Match price range
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [minPrice, maxPrice] = priceRange.split('-').map(price => 
        price === 'max' ? Infinity : parseInt(price));
  const inr = toINRAmount(property);
  matchesPrice = inr >= minPrice && inr <= maxPrice;
    }
    
    // Match features
    const matchesFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.every(feature => 
        property.features.some(f => f.toLowerCase().includes(feature))
      );
    
    return matchesType && matchesPrice && matchesFeatures;
  });
  
  // Check if we're in grid or list view
  const isGridView = document.querySelector('.properties-grid') !== null;
  currentResults = filteredProperties;
  if (isGridView) {
    renderProperties(currentResults);
  } else {
    renderPropertiesList(currentResults);
  }
}

// Reset all filters to default values
function resetFilters() {
  // Reset property type
  const propertyTypeSelect = document.querySelector('.sidebar-section .filter-select');
  if (propertyTypeSelect) propertyTypeSelect.value = 'all';
  
  // Reset price range
  const priceRangeSelect = document.querySelectorAll('.sidebar-section .filter-select')[2];
  if (priceRangeSelect) priceRangeSelect.value = 'all';
  
  // Uncheck all checkboxes
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Also reset top search inputs if present
  ['main-search','property-type','property-status','price-range','bedrooms'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'INPUT') el.value = '';
    if (el.tagName === 'SELECT') el.value = id === 'bedrooms' ? 'any' : 'all';
  });

  // Reset to show all properties
  currentResults = null;
  const isGridView = document.getElementById('grid-view').classList.contains('view-button-active');
  
  if (isGridView) {
    renderProperties();
  } else {
    renderPropertiesList();
  }
}

// Utility: debounce
function debounce(fn, wait) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
