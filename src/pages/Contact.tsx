import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Home as HomeIcon, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
              <a href="#/contact" className="text-primary font-medium">
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

      {/* Hero Section with Image */}
      <section className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Have questions about our properties or services? We're here to help! Fill out the form below and our team will get back to you.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to assist you with all your real estate needs in Andhra Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="card-hover shadow-xl border-0 bg-white/90">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=80&auto=format&fit=crop"
                    alt="Contact Icon"
                    className="w-12 h-12 rounded-full object-cover shadow"
                  />
                  <h2 className="text-2xl font-semibold">Send Us a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Property Inquiry"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'm interested in learning more about..."
                      required
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right column */}
            <div className="space-y-8">
              <Card className="card-hover shadow-xl border-0 bg-white/90">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=80&auto=format&fit=crop"
                      alt="Office Icon"
                      className="w-12 h-12 rounded-full object-cover shadow"
                    />
                    <h2 className="text-2xl font-semibold">Contact Information</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">
                          123 Real Estate Avenue <br />
                          New York, NY 10001 <br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">Main: (555) 123-4567</p>
                        <p className="text-muted-foreground">Support: (555) 987-6543</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@dreamhome.com</p>
                        <p className="text-muted-foreground">support@dreamhome.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] bg-muted/40 flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1200&auto=format&fit=crop"
          alt="Map of Office Location"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="relative z-10 bg-white/80 rounded-xl shadow-lg p-8 text-center max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Visit Our Office</h3>
          <p className="text-muted-foreground mb-2">
            123 Real Estate Avenue, New York, NY 10001, United States
          </p>
          <a
            href="https://www.google.com/maps/place/New+York,+NY+10001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded shadow hover:bg-primary/90 transition"
          >
            View on Google Maps
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
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
                <li><a href="#/home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#/real-estate-info" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Listings</a></li>
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

export default Contact;
