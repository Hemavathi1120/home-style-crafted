import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, BedDouble, Bath, Square, Home as HomeIcon, Shield, Award, Users } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const Home = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: 1,
      image: property1,
      title: "Modern City Apartment",
      price: "$450,000",
      beds: 2,
      baths: 2,
      area: "1,200",
      location: "Downtown District",
      description: "Stunning modern apartment with city views and premium amenities."
    },
    {
      id: 2,
      image: property2,
      title: "Elegant Suburban Home",
      price: "$675,000",
      beds: 4,
      baths: 3,
      area: "2,400",
      location: "Maple Heights",
      description: "Beautiful family home with spacious rooms and large garden."
    },
    {
      id: 3,
      image: property3,
      title: "Luxury Penthouse",
      price: "$1,250,000",
      beds: 3,
      baths: 3,
      area: "1,800",
      location: "Sky Tower",
      description: "Exclusive penthouse with panoramic city views and premium finishes."
    }
  ];

  const benefits = [
    {
      icon: HomeIcon,
      title: "Extensive Listings",
      description: "Access to thousands of verified properties across the city"
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Secure transactions with verified property owners and agents"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Professional guidance from experienced real estate experts"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building stronger communities through quality housing solutions"
    }
  ];

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
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Listings
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            <Button 
              onClick={() => navigate("/login")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroProperty})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the perfect property that matches your lifestyle and budget
          </p>
          <Button className="btn-secondary text-lg px-8 py-4 h-auto">
            Explore Properties
          </Button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <Input placeholder="Enter city or area" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Property Type</label>
                  <Input placeholder="House, Apartment..." className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Price Range</label>
                  <Input placeholder="Min - Max Price" className="h-12" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full h-12 btn-primary">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground">
              Handpicked properties that offer the best value and location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="card-hover overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{property.title}</h3>
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area} sq ft</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{property.description}</p>
                  
                  <Button className="w-full btn-primary">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose DreamHome
            </h2>
            <p className="text-xl text-muted-foreground">
              We're committed to making your property search seamless and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HomeIcon className="h-8 w-8" />
                <span className="text-2xl font-bold">DreamHome</span>
              </div>
              <p className="text-primary-foreground/80">
                Your trusted partner in finding the perfect home. We connect you with properties that match your dreams.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Listings</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Buy Property</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sell Property</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Rent Property</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Property Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>123 Real Estate Ave</p>
                <p>New York, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@dreamhome.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 DreamHome. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;