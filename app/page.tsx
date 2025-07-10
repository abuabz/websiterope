"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Menu,
  MapPin,
  Users,
  ArrowRight,
  Play,
  Star,
  Building,
  Factory,
  Zap,
  Shield,
  X,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-8 py-4 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md border-b border-gray-800/50" : "bg-transparent"
          }`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="Squad Access Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain mix-blend-screen"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div>
            <span className="text-2xl font-bold">SQUAD</span>
            <div className="text-xs text-gray-400 -mt-1">ACCESS</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8 bg-white/10 border border-gray-700/50 rounded-full p-3 supports-[backdrop-filter]:backdrop-blur-lg supports-[backdrop-filter]:backdrop-brightness-75">
          <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Services
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Industries
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Global Presence
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            About
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
            <Globe className="w-4 h-4" />
            <span>Global</span>
          </div>
          <Button className="bg-gradient-to-r from-[#ba3c3c] to-red-600 hover:from-red-600 hover:to-[#ba3c3c] text-white border-0 rounded-full px-6 transition-all duration-300">
            Get Quote
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-gray-800" onClick={toggleMenu}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
      {/* Off-canvas Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={toggleMenu}
        ></div>

        {/* Off-canvas Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Squad Access Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <span className="text-xl font-bold">SQUAD</span>
                <div className="text-xs text-gray-400 -mt-1">ACCESS</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={toggleMenu}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Navigation</h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-[#ba3c3c] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  <Building className="w-5 h-5" />
                  <span>Services</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-[#ba3c3c] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  <Factory className="w-5 h-5" />
                  <span>Industries</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-[#ba3c3c] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  <Globe className="w-5 h-5" />
                  <span>Global Presence</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-[#ba3c3c] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  <Users className="w-5 h-5" />
                  <span>About</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 text-white hover:text-[#ba3c3c] transition-colors duration-200 py-2"
                  onClick={toggleMenu}
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Global Locations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Our Locations</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🇦🇪</div>
                  <div className="text-sm font-medium text-white">UAE</div>
                  <div className="text-xs text-gray-400">HQ</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🇮🇳</div>
                  <div className="text-sm font-medium text-white">India</div>
                  <div className="text-xs text-gray-400">Regional</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🇸🇦</div>
                  <div className="text-sm font-medium text-white">KSA</div>
                  <div className="text-xs text-gray-400">Middle East</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🇺🇸</div>
                  <div className="text-sm font-medium text-white">USA</div>
                  <div className="text-xs text-gray-400">Americas</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-[#ba3c3c]" />
                  <span className="text-sm">+971 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-[#ba3c3c]" />
                  <span className="text-sm">info@squadaccess.com</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                className="w-full bg-gradient-to-r from-[#ba3c3c] to-red-600 hover:from-red-600 hover:to-[#ba3c3c] text-white rounded-full py-3 transition-all duration-300"
                onClick={toggleMenu}
              >
                Get Quote Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-20  pt-28 min-h-screen flex items-center">
        {/* Background Image - Responsive */}

        <div className="absolute inset-0">
          {/* Desktop Background */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/desktop-hero.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Mobile Background */}
          <div
            className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/mobile-hero.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#ba3c3c]/20 border border-[#ba3c3c]/30 rounded-full px-4 py-2 text-sm">
                  <Star className="w-4 h-4 text-[#ba3c3c]" />
                  <span className="text-gray-300">Established 2025 • Global Leader</span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold leading-tight drop-shadow-2xl">
                  <span className="text-white drop-shadow-lg">Pioneering</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#ba3c3c] to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                    Rope Access
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">Solutions</span>
                </h1>

                <p className="text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow-lg">
                  Delivering high-quality rope access services across diverse industries with a commitment to safety,
                  innovation, and customer satisfaction worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#ba3c3c] to-red-600 hover:from-red-600 hover:to-[#ba3c3c] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  Request Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Work
                </Button>
              </div>

              {/* Global Presence */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#ba3c3c]" />
                  <span className="text-sm text-gray-300">UAE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#ba3c3c]" />
                  <span className="text-sm text-gray-300">India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#ba3c3c]" />
                  <span className="text-sm text-gray-300">KSA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#ba3c3c]" />
                  <span className="text-sm text-gray-300">USA</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ba3c3c]/50 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <Shield className="w-12 h-12 text-[#ba3c3c] mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
                      <p className="text-gray-400 text-sm">Certified professionals with highest safety standards</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ba3c3c]/50 transition-all duration-300 transform hover:scale-105 mt-8">
                    <CardContent className="p-6">
                      <Building className="w-12 h-12 text-[#ba3c3c] mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">High-Rise Access</h3>
                      <p className="text-gray-400 text-sm">Specialized solutions for tall structures</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#ba3c3c]/50 transition-all duration-300 transform hover:scale-105 -mt-4">
                    <CardContent className="p-6">
                      <Factory className="w-12 h-12 text-[#ba3c3c] mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">Industrial Services</h3>
                      <p className="text-gray-400 text-sm">Comprehensive industrial rope access</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#ba3c3c]/20 to-red-900/20 border-[#ba3c3c]/30 hover:border-[#ba3c3c] transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#ba3c3c] rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-400 text-sm">Certified rope access technicians</p>
                    </CardContent>
                  </Card>
                </div>

              </div>

              {/* Background Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#ba3c3c]/20 to-red-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-[#ba3c3c]/10 to-red-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ba3c3c] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 lg:px-12 py-20 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#ba3c3c]">Rope Access</span> Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions to meet the unique needs of diverse industries with efficient and effective rope access
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Maintenance",
                description: "Comprehensive maintenance services for high-rise buildings and structures.",
                icon: Building,
              },
              {
                title: "Industrial Inspection",
                description: "Detailed inspections of industrial facilities, towers, and infrastructure.",
                icon: Factory,
              },
              {
                title: "Emergency Access",
                description: "Rapid response rope access solutions for emergency situations.",
                icon: Zap,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-black/50 border-gray-800 hover:border-[#ba3c3c]/50 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ba3c3c] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-[#ba3c3c]">Global</span> Presence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic locations across four countries, enabling us to serve clients worldwide with local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { country: "UAE", description: "Headquarters & Operations", flag: "🇦🇪" },
              { country: "India", description: "Regional Hub", flag: "🇮🇳" },
              { country: "KSA", description: "Middle East Operations", flag: "🇸🇦" },
              { country: "USA", description: "Americas Division", flag: "🇺🇸" },
            ].map((location, index) => (
              <Card
                key={index}
                className="bg-black/50 border-gray-800 hover:border-[#ba3c3c]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{location.flag}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{location.country}</h3>
                  <p className="text-gray-400 text-sm">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#ba3c3c]/10 to-red-900/10 border border-[#ba3c3c]/20 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Reach New Heights?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Partner with Squad Access for safe, efficient, and professional rope access solutions tailored to your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#ba3c3c] to-red-600 hover:from-red-600 hover:to-[#ba3c3c] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo.png"
                    alt="Squad Access Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain mix-blend-screen"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">SQUAD</span>
                  <div className="text-xs text-gray-400 -mt-1">ACCESS</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering rope access solutions company delivering high-quality services across diverse industries with
                a commitment to safety, innovation, and customer satisfaction worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#ba3c3c]/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#ba3c3c]/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#ba3c3c]/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#ba3c3c]/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#ba3c3c]" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Our Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Safety Standards</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Building className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Building Maintenance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Factory className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Industrial Inspection</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Zap className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Emergency Access</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Shield className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Safety Training</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Users className="w-4 h-4 text-[#ba3c3c]" />
                    <span>Consulting</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#ba3c3c] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">UAE Headquarters</p>
                    <p className="text-gray-400 text-sm">Dubai, United Arab Emirates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#ba3c3c] flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+971 XX XXX XXXX</p>
                    <p className="text-gray-400 text-sm">24/7 Emergency Line</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#ba3c3c] flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">info@squadaccess.com</p>
                    <p className="text-gray-400 text-sm">Get a Quote</p>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Global Offices</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇦🇪</span>
                    <span className="text-sm text-gray-400">UAE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-sm text-gray-400">India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇸🇦</span>
                    <span className="text-sm text-gray-400">KSA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm text-gray-400">USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates on rope access solutions and safety innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba3c3c] focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-[#ba3c3c] to-red-600 hover:from-red-600 hover:to-[#ba3c3c] text-white px-8 py-3 rounded-full transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">© 2025 Squad Access. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Star className="w-4 h-4 text-[#ba3c3c]" />
              <span>Established 2025 • Global Leader in Rope Access</span>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ba3c3c] via-red-500 to-[#ba3c3c]"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#ba3c3c]/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-[#ba3c3c]/5 to-red-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  )
}
