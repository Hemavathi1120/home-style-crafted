// Properties Section Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Property data (hardcoded)
  const properties = [
    {
      id: 1,
      title: "Modern Villa near Beach Road",
      address: "Suryaraopeta, Kakinada, AP 533001",
      price: "6500000",
      image: "/assets/property1.jpg",
      badge: "Kakinada",
      beds: 5,
      baths: 4,
      sqft: 3800,
      year: 2023,
      agent: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      type: "House",
      status: "For Sale",
      images: [
        "/assets/property1.jpg",
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Spacious Kakinada villa with pool, landscaped garden, and premium finishes near Beach Road."
    },
    {
      id: 2,
      title: "Downtown Penthouse - Port Area",
      address: "Port Area, Kakinada, AP 533007",
      price: "14500000",
      image: "/assets/property2.jpg",
      badge: "Kakinada",
      beds: 3,
      baths: 3.5,
      sqft: 2450,
      year: 2022,
      agent: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      type: "Condo",
      status: "For Sale",
      images: [
        "/assets/property2.jpg",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560185127-c936d5c3fa16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Luxurious penthouse with private terrace and premium amenities near Kakinada Port."
    },
    {
      id: 3,
      title: "Charming Craftsman Bungalow",
      address: "789 Maple Avenue, Pasadena, CA 91106",
      price: "$1,495,000",
      image: "/assets/property3.jpg",
      badge: "Price Reduced",
      beds: 4,
      baths: 2,
      sqft: 2100,
      year: 1925,
      agent: {
        name: "Emily Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      type: "House",
      status: "For Sale",
      images: [
        "/assets/property3.jpg",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Beautiful restored Craftsman bungalow with original character and modern updates. Features include hardwood floors, built-in cabinets, and a cozy fireplace in the living room. The updated kitchen offers quartz countertops and stainless steel appliances. Enjoy the spacious front porch and private backyard with mature trees. Located in a historic neighborhood within walking distance to local shops, restaurants, and parks."
    },
    {
      id: 4,
      title: "Modern Oceanfront Condo",
      address: "321 Coastal Highway, Malibu, CA 90265",
      price: "$3,750,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c8a55cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
      badge: "Oceanfront",
      beds: 2,
      baths: 2.5,
      sqft: 1850,
      year: 2021,
      agent: {
        name: "David Wilson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      type: "Condo",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c8a55cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Stunning oceanfront condo with unobstructed views of the Pacific. Features an open concept living area with sliding glass doors leading to a private balcony perfect for watching sunsets. The gourmet kitchen includes high-end appliances and a breakfast bar. The luxurious primary suite offers ocean views and a spa-like bathroom. Building amenities include a pool, hot tub, fitness center, and direct beach access. Steps away from upscale dining and shopping."
    },
    {
      id: 5,
      title: "Mid-Century Modern Gem",
      address: "567 Palm Drive, Palm Springs, CA 92262",
      price: "$1,850,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
      badge: "",
      beds: 3,
      baths: 2,
      sqft: 2200,
      year: 1962,
      agent: {
        name: "Jessica Taylor",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      type: "House",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Iconic mid-century modern home with characteristic clean lines, ample windows, and indoor-outdoor living spaces. Features include terrazzo floors, a statement fireplace, and original architectural details throughout. The kitchen has been thoughtfully updated while preserving the vintage aesthetic. Enjoy the private backyard with pool, spa, and mountain views. Located in a desirable neighborhood close to downtown Palm Springs."
    },
    {
      id: 6,
      title: "Luxury Estate with Views",
      address: "852 Highland Drive, Los Angeles, CA 90046",
      price: "$5,950,000",
      image: "https://images.unsplash.com/photo-1600573472591-ae807fc616bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
      badge: "Luxury",
      beds: 6,
      baths: 7,
      sqft: 6500,
      year: 2020,
      agent: {
        name: "Robert Garcia",
        avatar: "https://randomuser.me/api/portraits/men/68.jpg"
      },
      type: "House",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600573472591-ae807fc616bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=900&q=80"
      ],
      description: "Spectacular estate offering the ultimate in luxury living with panoramic city and ocean views. This architectural masterpiece features soaring ceilings, walls of glass, and premium finishes throughout. The chef's kitchen boasts custom cabinetry, top-of-the-line appliances, and a large island. The primary suite includes a sitting area, dual walk-in closets, and a sumptuous bathroom. Additional features include a home theater, wine cellar, gym, and smart home technology. The resort-style backyard offers an infinity pool, spa, outdoor kitchen, and multiple entertaining areas."
    }
  ];

  // ---- Currency helpers: show all prices in INR (₹) with Indian numbering ----
  function parsePriceToNumber(priceStr) {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    const digits = String(priceStr).replace(/[^0-9]/g, '');
    const n = parseInt(digits, 10);
    return Number.isNaN(n) ? 0 : n;
  }

  function formatINR(amount) {
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
    } catch (e) {
      return `₹${Math.round(amount).toLocaleString('en-IN')}`;
    }
  }

  // Add: Hardcoded properties near Kakinada
  const kakinadaProperties = [
    {
      id: 101,
      title: "Sea View Apartment - Kakinada Beach Road",
      address: "Kakinada Beach Rd, Suryaraopeta, Kakinada, AP 533001",
      price: "$6,500,000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 3,
      baths: 3,
      sqft: 1600,
      year: 2021,
      agent: { name: "Harsha Varma", avatar: "https://randomuser.me/api/portraits/men/83.jpg" },
      type: "Apartment",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Modern 3BHK with sea view balcony, covered parking, and 24x7 security near Kakinada Beach Road."
    },
    {
      id: 102,
      title: "Gated Community Villa - Ramanayyapeta",
      address: "Ramanayyapeta, Kakinada, Andhra Pradesh 533005",
      price: "$12,500,000",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 4,
      baths: 4,
      sqft: 2800,
      year: 2020,
      agent: { name: "Sravani Reddy", avatar: "https://randomuser.me/api/portraits/women/66.jpg" },
      type: "House",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Premium east-facing 4BHK villa with clubhouse, pool, and children’s play area in a secure community."
    },
    {
      id: 103,
      title: "Budget 2BHK - Samalkota Road",
      address: "Samalkota Rd, Kakinada, AP 533006",
      price: "$3,800,000",
      image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 2,
      baths: 2,
      sqft: 1050,
      year: 2018,
      agent: { name: "Vikram Rao", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
      type: "Apartment",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Well-ventilated 2BHK near Samalkota Road with lift, generator backup, and covered parking."
    },
    {
      id: 104,
      title: "Independent House - Sarpavaram Junction",
      address: "Sarpavaram Jn, Kakinada, AP 533005",
      price: "$9,200,000",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 3,
      baths: 3,
      sqft: 1900,
      year: 2017,
      agent: { name: "Niharika Das", avatar: "https://randomuser.me/api/portraits/women/31.jpg" },
      type: "House",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559718062-2118d76473e0?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Corner plot independent house with garden, borewell, and ample parking near Sarpavaram Junction."
    },
    {
      id: 105,
      title: "Rental 3BHK - Bhanugudi Junction",
      address: "Bhanugudi Jn, Kakinada, AP 533003",
      price: "$28,000",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 3,
      baths: 3,
      sqft: 1450,
      year: 2019,
      agent: { name: "Srikanth Naidu", avatar: "https://randomuser.me/api/portraits/men/59.jpg" },
      type: "Apartment",
      status: "For Rent",
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Spacious semi-furnished flat with elevator and security, walkable to markets and schools."
    },
    {
      id: 106,
      title: "Riverfront House - Near Yanam",
      address: "Godavari Riverfront, Yanam (Near Kakinada), 533464",
      price: "$11,500,000",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop",
      badge: "Near Kakinada",
      beds: 4,
      baths: 4,
      sqft: 2400,
      year: 2016,
      agent: { name: "Ananya Iyer", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
      type: "House",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Picturesque riverfront home with large deck, landscaped garden, and ample parking, 30 mins from Kakinada."
    },
    {
      id: 107,
      title: "Penthouse - Port Area",
      address: "Port Area, Kakinada, AP 533007",
      price: "$14,500,000",
      image: "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 4,
      baths: 4,
      sqft: 2200,
      year: 2023,
      agent: { name: "Rohit Singh", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
      type: "Apartment",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1599420186946-7b1f08b72aab?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Luxurious penthouse with private terrace, sea breeze, lift access, and two car parks near Kakinada Port."
    },
    {
      id: 108,
      title: "3BHK Near JNTU Kakinada",
      address: "Near JNTU Kakinada, Nagamallithota, AP 533003",
      price: "$5,600,000",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
      badge: "Kakinada",
      beds: 3,
      baths: 2,
      sqft: 1320,
      year: 2022,
      agent: { name: "Keerthi Menon", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
      type: "Apartment",
      status: "For Sale",
      images: [
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop"
      ],
      description: "Walk-to-campus 3BHK in a newly built block with elevator, generator backup, and CCTV."
    }
  ];

  // Merge Kakinada properties into main dataset
  properties.push(...kakinadaProperties);

  // Restrict demo dataset to Andhra Pradesh entries
  (function restrictDemoToAP() {
    const apMarkers = [' kakinada', ' andhra pradesh', ', ap'];
    const isAP = (p) => {
      const addr = (p.address || '').toLowerCase();
      return apMarkers.some(m => addr.includes(m));
    };
    const apOnly = properties.filter(isAP);
    properties.length = 0;
    properties.push(...apOnly);
  })();

  // Initialize properties section
  initPropertiesSection();

  // Initialize property filters
  initFilters();

  // Initialize property modal
  initPropertyModal();

  // Function to initialize properties section
  function initPropertiesSection() {
    const propertiesGrid = document.getElementById('properties-grid');
    if (!propertiesGrid) return;

    // Clear existing content
    propertiesGrid.innerHTML = '';

    // Add property cards
    properties.forEach(property => {
      propertiesGrid.appendChild(createPropertyCard(property));
    });
  }

  // Function to create a property card
  function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.dataset.id = property.id;

  card.innerHTML = `
      <div class="property-image">
        ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
        <img src="${property.image}" alt="${property.title}">
    <div class="property-price">${formatINR(parsePriceToNumber(property.price))}</div>
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
            <div class="feature-value">${property.beds}</div>
            <div class="feature-label">Beds</div>
          </div>
          <div class="feature">
            <div class="feature-value">${property.baths}</div>
            <div class="feature-label">Baths</div>
          </div>
          <div class="feature">
            <div class="feature-value">${property.sqft.toLocaleString()}</div>
            <div class="feature-label">Sq Ft</div>
          </div>
        </div>
      </div>
      <div class="property-footer">
        <div class="property-agent">
          <div class="agent-avatar">
            <img src="${property.agent.avatar}" alt="${property.agent.name}">
          </div>
          <div class="agent-name">${property.agent.name}</div>
        </div>
        <div class="property-actions">
          <div class="action-button favorite-button" title="Add to favorites">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div class="action-button view-button" title="View property details">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    const viewButton = card.querySelector('.view-button');
    viewButton.addEventListener('click', () => {
      openPropertyModal(property);
    });

    const favoriteButton = card.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', function() {
      this.classList.toggle('favorited');
      if (this.classList.contains('favorited')) {
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#e53e3e" stroke="#e53e3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        `;
      } else {
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        `;
      }
    });

    return card;
  }

  // Function to initialize property filters
  function initFilters() {
    const filtersContainer = document.getElementById('property-filters');
    if (!filtersContainer) return;

    const filterButton = filtersContainer.querySelector('.filter-button');
    if (filterButton) {
      filterButton.addEventListener('click', applyFilters);
    }
  }

  // Function to apply filters
  function applyFilters() {
    // Get filter values
    const typeFilter = document.getElementById('property-type').value;
    const statusFilter = document.getElementById('property-status').value;
    const priceFilter = document.getElementById('price-range').value;

    // Filter properties
    let filteredProperties = properties;

    if (typeFilter !== 'all') {
      filteredProperties = filteredProperties.filter(property => property.type === typeFilter);
    }

    if (statusFilter !== 'all') {
      filteredProperties = filteredProperties.filter(property => property.status === statusFilter);
    }

    // Apply price filter logic (values are absolute INR rupees)
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(val => val === 'max' ? Infinity : Number(val));

      filteredProperties = filteredProperties.filter(property => {
        const price = parsePriceToNumber(property.price);
        return price >= min && price <= max;
      });
    }

    // Update properties grid
    const propertiesGrid = document.getElementById('properties-grid');
    if (!propertiesGrid) return;

    // Clear existing content
    propertiesGrid.innerHTML = '';

    if (filteredProperties.length === 0) {
      const noResultsMessage = document.createElement('div');
      noResultsMessage.style.gridColumn = '1 / -1';
      noResultsMessage.style.textAlign = 'center';
      noResultsMessage.style.padding = '30px';
      noResultsMessage.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 15px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: #4a5568; margin-bottom: 10px;">No properties found</h3>
        <p style="color: #718096;">Try adjusting your filters to see more results.</p>
      `;
      propertiesGrid.appendChild(noResultsMessage);
    } else {
      // Add filtered property cards
      filteredProperties.forEach(property => {
        propertiesGrid.appendChild(createPropertyCard(property));
      });
    }
  }

  // Function to initialize property modal
  function initPropertyModal() {
    const modal = document.getElementById('property-modal');
    if (!modal) return;

    // Close modal when clicking on close button
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    }

    // Close modal when clicking outside of modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Function to open property modal
  function openPropertyModal(property) {
    const modal = document.getElementById('property-modal');
    if (!modal) return;

    const modalContent = modal.querySelector('.modal-content');
    if (!modalContent) return;

    // Populate modal content
    modalContent.innerHTML = `
      <div class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <div class="modal-gallery">
        <img src="${property.images[0]}" alt="${property.title}" class="modal-main-image">
      </div>
      <div class="modal-thumbnails">
        ${property.images.map((image, index) => `
          <div class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${image}" alt="Thumbnail ${index + 1}">
          </div>
        `).join('')}
      </div>
      <div class="modal-details">
        <h2 class="modal-title">${property.title}</h2>
        <div class="modal-address">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${property.address}
        </div>
  <div class="modal-price">${formatINR(parsePriceToNumber(property.price))}</div>
        <p class="modal-description">${property.description}</p>
        <div class="modal-features">
          <div class="modal-feature">
            <div class="modal-feature-value">${property.beds}</div>
            <div class="modal-feature-label">Bedrooms</div>
          </div>
          <div class="modal-feature">
            <div class="modal-feature-value">${property.baths}</div>
            <div class="modal-feature-label">Bathrooms</div>
          </div>
          <div class="modal-feature">
            <div class="modal-feature-value">${property.sqft.toLocaleString()}</div>
            <div class="modal-feature-label">Square Feet</div>
          </div>
          <div class="modal-feature">
            <div class="modal-feature-value">${property.year}</div>
            <div class="modal-feature-label">Year Built</div>
          </div>
        </div>
        <div class="modal-actions">
          <div class="modal-button modal-button-primary">Schedule a Tour</div>
          <div class="modal-button modal-button-secondary">Contact Agent</div>
        </div>
      </div>
    `;

    // Add event listeners for thumbnails
    const thumbnails = modalContent.querySelectorAll('.modal-thumbnail');
    const mainImage = modalContent.querySelector('.modal-main-image');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Update main image
        const index = parseInt(this.dataset.index);
        mainImage.src = property.images[index];
      });
    });

    // Close button event listener
    const closeButton = modalContent.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
});
