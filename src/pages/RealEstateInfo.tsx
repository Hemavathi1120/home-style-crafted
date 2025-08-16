import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, TrendingUp, Calculator, FileText, PieChart, MapPin, Users, Clock } from "lucide-react";

const RealEstateInfo = () => {
  const navigate = useNavigate();

  const marketStats = [
    {
      icon: TrendingUp,
      title: "Average Home Price",
      value: "$485,000",
      change: "+5.2% from last year",
      positive: true
    },
    {
      icon: Clock,
      title: "Days on Market",
      value: "32 days",
      change: "-8 days from last year",
      positive: true
    },
    {
      icon: PieChart,
      title: "Market Activity",
      value: "Very Active",
      change: "15% above normal",
      positive: true
    },
    {
      icon: Users,
      title: "Homes Sold",
      value: "1,247",
      change: "This month",
      positive: true
    }
  ];

  const guides = [
    {
      title: "First-Time Buyer's Guide",
      description: "Everything you need to know about buying your first home, from financing to closing.",
      topics: ["Down Payment Requirements", "Mortgage Pre-approval", "Home Inspection", "Closing Process"]
    },
    {
      title: "Selling Your Home",
      description: "Maximize your home's value with our comprehensive selling guide.",
      topics: ["Pricing Strategy", "Home Staging", "Marketing Plan", "Negotiation Tips"]
    },
    {
      title: "Investment Properties",
      description: "Learn about real estate investment opportunities and strategies.",
      topics: ["Rental Properties", "Market Analysis", "ROI Calculation", "Property Management"]
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
              <a href="/home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/real-estate-info" className="text-primary font-medium">
                Real Estate Info
              </a>
              <a href="/properties" className="text-foreground hover:text-primary transition-colors font-medium">
                Properties
              </a>
              <a href="/application" className="text-foreground hover:text-primary transition-colors font-medium">
                Application
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
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
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Real Estate Market Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stay informed with the latest market trends, expert analysis, and comprehensive guides to help you make informed real estate decisions.
          </p>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Current Market Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time data from our local market analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Educational Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive guides to help you navigate the real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <ul className="space-y-2">
                    {guide.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 btn-primary">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Helpful Tools & Calculators
            </h2>
            <p className="text-lg text-muted-foreground">
              Use our tools to plan your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mortgage Calculator</h3>
                <p className="text-muted-foreground mb-4">
                  Calculate your monthly payments and see how much you can afford.
                </p>
                <Button className="btn-primary">
                  Open Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Neighborhood Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Explore neighborhoods with detailed statistics and insights.
                </p>
                <Button className="btn-primary">
                  Explore Areas
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Checklist</h3>
                <p className="text-muted-foreground mb-4">
                  Never miss important documents with our comprehensive checklist.
                </p>
                <Button className="btn-primary">
                  View Checklist
                </Button>
              </CardContent>
            </Card>
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
                <li><a href="/home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/real-estate-info" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Real Estate Info</a></li>
                <li><a href="/application" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Application</a></li>
                <li><a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
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

export default RealEstateInfo;