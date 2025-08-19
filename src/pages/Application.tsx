import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, Upload, FileText, CheckCircle } from "lucide-react";
import React, { useRef, useState } from "react";

const Application = () => {
  // File upload state
  const [incomeFiles, setIncomeFiles] = useState<File[]>([]);
  const [bankFiles, setBankFiles] = useState<File[]>([]);
  const [creditFiles, setCreditFiles] = useState<File[]>([]);
  const [employmentFiles, setEmploymentFiles] = useState<File[]>([]);
  const [assetFiles, setAssetFiles] = useState<File[]>([]);

  // Refs for file inputs
  const incomeInputRef = useRef<HTMLInputElement>(null);
  const bankInputRef = useRef<HTMLInputElement>(null);
  const creditInputRef = useRef<HTMLInputElement>(null);
  const employmentInputRef = useRef<HTMLInputElement>(null);
  const assetInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const applicationSteps = [
    {
      step: 1,
      title: "Personal Information",
      description: "Tell us about yourself",
      completed: false
    },
    {
      step: 2,
      title: "Financial Details",
      description: "Income and employment information",
      completed: false
    },
    {
      step: 3,
      title: "Property Preferences",
      description: "What you're looking for",
      completed: false
    },
    {
      step: 4,
      title: "Documents",
      description: "Upload required documents",
      completed: false
    }
  ];

  // Gallery/hero images for visual enhancement
  const heroImage = "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop";
  const stepImages = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=400&auto=format&fit=crop", // Personal
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=400&auto=format&fit=crop", // Financial
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop", // Preferences
    "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=400&auto=format&fit=crop"  // Documents
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
              <a href="#/application" className="text-primary font-medium">
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

      {/* Hero Section with Image */}
      <section className="relative h-[260px] md:h-[340px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
        <img
          src={heroImage}
          alt="Application Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Apply for Your Dream Home
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
            Start your real estate journey with a simple, guided application process.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Progress Steps with Images */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground'
                }`}>
                  {step.completed ? <CheckCircle className="h-5 w-5" /> : step.step}
                </div>
                <p className="text-xs mt-2 text-center max-w-20">{step.title}</p>
                {index < applicationSteps.length - 1 && (
                  <div className="w-16 h-0.5 bg-border mx-4 hidden sm:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Real Estate Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete this application to get pre-qualified for your dream home
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Current Address</Label>
                  <Input id="address" placeholder="Enter your current address" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="12345" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Financial Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Input id="income" placeholder="$0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employment">Employment Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employer">Employer Name</Label>
                    <Input id="employer" placeholder="Company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="Your position" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="creditScore">Credit Score Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">750+ (Excellent)</SelectItem>
                        <SelectItem value="good">700-749 (Good)</SelectItem>
                        <SelectItem value="fair">650-699 (Fair)</SelectItem>
                        <SelectItem value="poor">Below 650 (Poor)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="downPayment">Down Payment Amount</Label>
                    <Input id="downPayment" placeholder="$0" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Property Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">Single Family House</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priceRange">Price Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-300k">Under $300,000</SelectItem>
                        <SelectItem value="300k-500k">$300,000 - $500,000</SelectItem>
                        <SelectItem value="500k-750k">$500,000 - $750,000</SelectItem>
                        <SelectItem value="750k-1m">$750,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Min bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Min bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sqft">Square Footage</Label>
                    <Input id="sqft" placeholder="Min sq ft" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredAreas">Preferred Areas/Neighborhoods</Label>
                  <Textarea 
                    id="preferredAreas" 
                    placeholder="List your preferred neighborhoods or areas..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm font-medium">Income Documents</p>
                      <p className="text-xs text-muted-foreground mb-4">Pay stubs, tax returns, W-2s</p>
                      <input
                        type="file"
                        multiple
                        ref={incomeInputRef}
                        className="hidden"
                        onChange={e => {
                          if (e.target.files) setIncomeFiles(Array.from(e.target.files));
                        }}
                      />
                      <Button variant="outline" size="sm" onClick={() => incomeInputRef.current?.click()}>
                        Upload Files
                      </Button>
                      {incomeFiles.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          {incomeFiles.map(f => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm font-medium">Bank Statements</p>
                      <p className="text-xs text-muted-foreground mb-4">Last 3 months</p>
                      <input
                        type="file"
                        multiple
                        ref={bankInputRef}
                        className="hidden"
                        onChange={e => {
                          if (e.target.files) setBankFiles(Array.from(e.target.files));
                        }}
                      />
                      <Button variant="outline" size="sm" onClick={() => bankInputRef.current?.click()}>
                        Upload Files
                      </Button>
                      {bankFiles.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          {bankFiles.map(f => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Additional Documents (if applicable)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-border rounded-lg p-4 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm">Credit Report</p>
                      <input
                        type="file"
                        ref={creditInputRef}
                        className="hidden"
                        onChange={e => {
                          if (e.target.files) setCreditFiles(Array.from(e.target.files));
                        }}
                      />
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => creditInputRef.current?.click()}>
                        Upload
                      </Button>
                      {creditFiles.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          {creditFiles.map(f => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                    <div className="border border-border rounded-lg p-4 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm">Employment Letter</p>
                      <input
                        type="file"
                        ref={employmentInputRef}
                        className="hidden"
                        onChange={e => {
                          if (e.target.files) setEmploymentFiles(Array.from(e.target.files));
                        }}
                      />
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => employmentInputRef.current?.click()}>
                        Upload
                      </Button>
                      {employmentFiles.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          {employmentFiles.map(f => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                    <div className="border border-border rounded-lg p-4 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm">Asset Statements</p>
                      <input
                        type="file"
                        ref={assetInputRef}
                        className="hidden"
                        onChange={e => {
                          if (e.target.files) setAssetFiles(Array.from(e.target.files));
                        }}
                      />
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => assetInputRef.current?.click()}>
                        Upload
                      </Button>
                      {assetFiles.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          {assetFiles.map(f => f.name).join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>. I understand that this application does not guarantee loan approval and that all information provided will be verified.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm leading-5">
                      I consent to DreamHome and its partners contacting me regarding my application and available properties via phone, email, or text message.
                    </Label>
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button variant="outline">
                      Save as Draft
                    </Button>
                    <Button className="btn-primary">
                      Submit Application
                    </Button>
                  </div>
                </div>
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
                <li><a href="#/home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#/real-estate-info" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Real Estate Info</a></li>
                <li><a href="#/application" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Application</a></li>
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

export default Application;