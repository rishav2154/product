import React, { useState } from 'react';
import { ExternalLink, Users, Zap, Shield, ArrowLeft, CheckCircle, Star } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Enterprise Analytics Platform",
      description: "Transform your data into actionable insights with our comprehensive analytics solution designed for enterprise-scale operations.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time dashboards", "Advanced reporting", "Custom integrations"],
      detailedDescription: "Our Enterprise Analytics Platform revolutionizes how businesses understand and utilize their data. Built for scale, it processes millions of data points in real-time, providing instant insights that drive strategic decisions.",
      benefits: [
        "Increase decision-making speed by 75%",
        "Reduce data processing time from hours to minutes",
        "Integrate with 200+ business applications",
        "Enterprise-grade security and compliance"
      ],
      pricing: "Starting at $299/month",
      testimonial: {
        text: "This platform transformed our data strategy completely. We now make decisions based on real-time insights rather than gut feelings.",
        author: "Sarah Johnson, CTO at TechCorp"
      }
    },
    {
      id: 2,
      title: "Cloud Infrastructure Suite",
      description: "Scalable cloud solutions that grow with your business, featuring automated deployment and robust security protocols.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-6 h-6" />,
      features: ["Auto-scaling", "99.9% uptime", "Global CDN"],
      detailedDescription: "Deploy, scale, and manage your applications with confidence using our comprehensive cloud infrastructure suite. Built on enterprise-grade architecture with global reach and bulletproof security.",
      benefits: [
        "99.9% guaranteed uptime SLA",
        "Auto-scale based on demand",
        "Global edge locations for optimal performance",
        "Military-grade encryption and security"
      ],
      pricing: "Starting at $199/month",
      testimonial: {
        text: "The reliability and performance we get from this infrastructure suite is unmatched. Our applications have never been more stable.",
        author: "Michael Chen, DevOps Lead at StartupXYZ"
      }
    },
    {
      id: 3,
      title: "Team Collaboration Hub",
      description: "Streamline your workflow with our integrated collaboration platform that brings teams together regardless of location.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users className="w-6 h-6" />,
      features: ["Video conferencing", "Project management", "File sharing"],
      detailedDescription: "Break down silos and boost productivity with our all-in-one collaboration platform. Designed for modern teams, it combines communication, project management, and file sharing in one seamless experience.",
      benefits: [
        "Increase team productivity by 40%",
        "Reduce meeting time with smart scheduling",
        "Centralized file management and version control",
        "Seamless integration with existing tools"
      ],
      pricing: "Starting at $15/user/month",
      testimonial: {
        text: "Our remote team has never been more connected. This platform made collaboration effortless and actually enjoyable.",
        author: "Emma Rodriguez, Project Manager at DesignStudio"
      }
    }
  ];

  const handleProductClick = (product: React.SetStateAction<null>) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  if (currentView === 'product-detail' && selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={handleBackToProducts}
            className="inline-flex items-center space-x-2 text-[#154c79] hover:text-[#1a5c8a] font-semibold mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>

          {/* Product Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#154c79] text-white p-3 rounded-xl">
                  {selectedProduct.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {selectedProduct.title}
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedProduct.detailedDescription}
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-[#154c79]">
                  {selectedProduct.pricing}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.9/5)</span>
                </div>
              </div>
              <button className="bg-[#154c79] hover:bg-[#1a5c8a] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
            </div>
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedProduct.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#154c79]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-[#154c79] rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Advanced {feature.toLowerCase()} capabilities designed for enterprise needs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-[#154c79] to-[#1a5c8a] rounded-3xl p-8 md:p-12 text-center text-white mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{selectedProduct.testimonial.text}"
              </blockquote>
              <cite className="text-blue-200 font-semibold">
                — {selectedProduct.testimonial.author}
              </cite>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using {selectedProduct.title} to transform their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#154c79] hover:bg-[#1a5c8a] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-[#154c79] text-[#154c79] hover:bg-[#154c79] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built to Empower Your Vision
          </p>
          <div className="w-24 h-1 bg-[#154c79] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#154c79]/20 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-[#154c79]">
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#154c79] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#154c79] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* View Product Button */}
                <button className="w-full bg-[#154c79] hover:bg-[#1a5c8a] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/button transform hover:scale-[1.02] active:scale-[0.98]">
                  <span>View Product</span>
                  <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="py-8"></div>
      </div>
    </div>
  );
}

export default App;