import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, Shield, Award, Users } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";

const Home = () => {
  const navigate = useNavigate();


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
              <a href="#/home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#/real-estate-info" className="text-foreground hover:text-primary transition-colors font-medium">
                Real Estate Info
              </a>
              <a href="#/properties" className="text-foreground hover:text-primary transition-colors font-medium">
                Properties
              </a>
              <a href="#/application" className="text-foreground hover:text-primary transition-colors font-medium">
                Application
              </a>
              <a href="#/contact" className="text-foreground hover:text-primary transition-colors font-medium">
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
          <Button className="btn-secondary text-lg px-8 py-4 h-auto" onClick={() => navigate("/properties") }>
            Explore Properties
          </Button>
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
                <li><a href="#/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
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