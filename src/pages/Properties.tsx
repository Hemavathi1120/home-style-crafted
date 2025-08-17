import { useEffect } from "react";
import { Home as HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate();

  // Load external CSS and JS for the properties section
  useEffect(() => {
  const base = import.meta.env.BASE_URL || '/';
    // Add CSS
    const propertiesStyles = document.createElement('link');
    propertiesStyles.rel = 'stylesheet';
  propertiesStyles.href = `${base}properties-styles.css`;
    document.head.appendChild(propertiesStyles);
    
    // Add the new properties page CSS
    const propertiesPageStyles = document.createElement('link');
    propertiesPageStyles.rel = 'stylesheet';
  propertiesPageStyles.href = `${base}properties-page-styles.css`;
    document.head.appendChild(propertiesPageStyles);

    // Add JS
    const propertiesScript = document.createElement('script');
  propertiesScript.src = `${base}properties-page.js`;
    propertiesScript.async = true;
    document.body.appendChild(propertiesScript);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(propertiesStyles);
      document.head.removeChild(propertiesPageStyles);
      document.body.removeChild(propertiesScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">DreamHome</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#/home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#/real-estate-info" className="text-foreground hover:text-primary transition-colors font-medium">
                Real Estate Info
              </a>
              <a href="#/properties" className="text-primary font-medium">
                Properties
              </a>
              <a href="#/application" className="text-foreground hover:text-primary transition-colors font-medium">
                Application
              </a>
              <a href="#/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            <div className="flex space-x-4">
              <button 
                onClick={() => navigate("/login")}
                className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Browse our extensive collection of premium properties in the most desirable locations
          </p>

          {/* Property Search */}
          <div className="property-search-container">
            <div className="property-search">
              <div className="search-row">
                <div className="search-group">
                  <label htmlFor="main-search" className="search-label">Location, Property Type, or Keyword</label>
                  <div className="search-input-wrapper">
                    <input 
                      id="main-search" 
                      type="text" 
                      className="search-input" 
                      placeholder="Search for properties..."
                    />
                    <button className="search-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="search-row">
                <div className="search-group">
                  <label htmlFor="property-type" className="search-label">Property Type</label>
                  <select id="property-type" className="search-select">
                    <option value="all">All Types</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Studio">Studio</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Farmhouse">Farmhouse</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Land">Land</option>
                  </select>
                </div>

                <div className="search-group">
                  <label htmlFor="property-status" className="search-label">Status</label>
                  <select id="property-status" className="search-select">
                    <option value="all">All Status</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>

                <div className="search-group">
                  <label htmlFor="price-range" className="search-label">Price Range</label>
                  <select id="price-range" className="search-select">
                    <option value="all">Any Price</option>
                    <option value="0-5000000">Under ₹50L</option>
                    <option value="5000000-10000000">₹50L - ₹1Cr</option>
                    <option value="10000000-20000000">₹1Cr - ₹2Cr</option>
                    <option value="20000000-max">₹2Cr+</option>
                  </select>
                </div>

                <div className="search-group">
                  <label htmlFor="bedrooms" className="search-label">Bedrooms</label>
                  <select id="bedrooms" className="search-select">
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>
              
              <div className="search-advanced-toggle">
                <span>Advanced Options</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="properties-layout">
          {/* Sidebar Filters */}
          <aside className="properties-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Filter Properties</h3>
              
              <div className="filter-section">
                <h4 className="filter-title">Price Range</h4>
                <div className="range-slider-container">
                  <div className="range-values">
                    <span className="range-min">₹0</span>
                    <span className="range-max">₹10M+</span>
                  </div>
                  <div className="range-slider">
                    <div className="range-track"></div>
                    <div className="range-progress"></div>
                    <div className="range-handle range-handle-min" id="min-price-handle"></div>
                    <div className="range-handle range-handle-max" id="max-price-handle"></div>
                  </div>
                </div>
              </div>
              
              <div className="filter-section">
                <h4 className="filter-title">Property Features</h4>
                <div className="filter-checkboxes">
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="pool" />
                    Swimming Pool
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="garage" />
                    Garage
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="garden" />
                    Garden
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="balcony" />
                    Balcony
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="fireplace" />
                    Fireplace
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="elevator" />
                    Elevator
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="filter-checkbox" value="security" />
                    Security System
                  </label>
                </div>
              </div>
              
              <div className="filter-section">
                <h4 className="filter-title">Square Footage</h4>
                <div className="filter-group">
                  <select className="filter-select">
                    <option value="all">Any Size</option>
                    <option value="0-1000">Under 1,000 sq ft</option>
                    <option value="1000-2000">1,000 - 2,000 sq ft</option>
                    <option value="2000-3000">2,000 - 3,000 sq ft</option>
                    <option value="3000-5000">3,000 - 5,000 sq ft</option>
                    <option value="5000-max">5,000+ sq ft</option>
                  </select>
                </div>
              </div>
              
              <div className="filter-section">
                <h4 className="filter-title">Year Built</h4>
                <div className="filter-group">
                  <select className="filter-select">
                    <option value="all">Any Year</option>
                    <option value="2020-2025">2020 - 2025</option>
                    <option value="2010-2019">2010 - 2019</option>
                    <option value="2000-2009">2000 - 2009</option>
                    <option value="1990-1999">1990 - 1999</option>
                    <option value="0-1989">Before 1990</option>
                  </select>
                </div>
              </div>
              
              <button className="apply-filters-button">
                Apply Filters
              </button>
              
              <button className="reset-filters-button">
                Reset Filters
              </button>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Featured Agent</h3>
              <div className="featured-agent">
                <div className="agent-image">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sarah Johnson" />
                </div>
                <div className="agent-info">
                  <h4 className="agent-name">Sarah Johnson</h4>
                  <p className="agent-title">Senior Real Estate Agent</p>
                  <div className="agent-contact">
                    <div className="agent-contact-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      (555) 123-4567
                    </div>
                    <div className="agent-contact-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      sarah@dreamhome.com
                    </div>
                  </div>
                  <button className="contact-agent-button">Contact Sarah</button>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Properties Container */}
          <div className="properties-container">
            <div className="properties-header">
              <div className="properties-count">
                <span id="property-count">0</span> properties found
              </div>
              
              <div className="properties-sort">
                <label htmlFor="sort-properties" className="sort-label">Sort By:</label>
                <select id="sort-properties" className="sort-select">
                  <option value="default">Default</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                
                <div className="view-toggle">
                  <button id="grid-view" className="view-button view-button-active" title="Grid View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </button>
                  <button id="list-view" className="view-button" title="List View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div id="properties-grid" className="properties-grid">
              {/* Property cards will be added by JavaScript */}
            </div>
            
            {/* Properties Pagination */}
            <div className="properties-pagination">
              <button className="pagination-button pagination-prev" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Previous
              </button>
              
              <div className="pagination-numbers">
                <button className="pagination-number pagination-active">1</button>
                <button className="pagination-number">2</button>
                <button className="pagination-number">3</button>
                <span className="pagination-ellipsis">...</span>
                <button className="pagination-number">10</button>
              </div>
              
              <button className="pagination-button pagination-next">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Property Modal */}
      <div className="property-modal" id="property-modal">
        <div className="modal-content">
          {/* Modal content will be populated by JavaScript */}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HomeIcon className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">DreamHome</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Finding your dream home has never been easier.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Properties</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Agents</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-muted-foreground">123 Real Estate Ave, Beverly Hills, CA 90210</span>
                </li>
                <li className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </li>
                <li className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-muted-foreground">info@dreamhome.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest property updates.</p>
              <form className="space-y-2">
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-border rounded" />
                <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} DreamHome Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Properties;
