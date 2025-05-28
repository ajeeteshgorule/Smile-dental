import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Phone, MapPin, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "../components/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Smile Dental - Professional Dental Care",
  description: "Quality dental care for the whole family. Book your appointment today.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold text-sky-600">Smile Dental</span>
                    </Link>
                  </div>
                  <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-sky-600 font-medium">
                      Home
                    </Link>
                    <Link href="/services" className="text-gray-600 hover:text-sky-600 font-medium">
                      Services
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-sky-600 font-medium">
                      About
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-sky-600 font-medium">
                      Contact
                    </Link>
                    <Button asChild className="bg-sky-600 hover:bg-sky-700">
                      <Link href="/appointment">Book Appointment</Link>
                    </Button>
                  </nav>
                  <div className="md:hidden">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-between border-b py-4">
                            <span className="text-xl font-bold text-sky-600">Smile Dental</span>
                          </div>
                          <nav className="flex flex-col gap-4 py-8">
                            <Link href="/" className="text-lg font-medium py-2">
                              Home
                            </Link>
                            <Link href="/services" className="text-lg font-medium py-2">
                              Services
                            </Link>
                            <Link href="/about" className="text-lg font-medium py-2">
                              About
                            </Link>
                            <Link href="/contact" className="text-lg font-medium py-2">
                              Contact
                            </Link>
                            <Button asChild className="mt-4 bg-sky-600 hover:bg-sky-700">
                              <Link href="/appointment">Book Appointment</Link>
                            </Button>
                          </nav>
                          <div className="mt-auto space-y-4 py-4 border-t">
                            <div className="flex items-center gap-2">
                              <Phone className="h-5 w-5 text-sky-600" />
                              <span>(123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-sky-600" />
                              <span>123 Dental St, City, State</span>
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1 bg-white">{children}</main>
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Smile Dental</h3>
                    <p className="text-gray-400">
                      Providing exceptional dental care with a patient-centered approach since 2005.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-gray-400 hover:text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-gray-400 hover:text-white">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-gray-400 hover:text-white">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-400 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/services" className="text-gray-400 hover:text-white">
                          General Dentistry
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-gray-400 hover:text-white">
                          Cosmetic Dentistry
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-gray-400 hover:text-white">
                          Orthodontics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="text-gray-400 hover:text-white">
                          Pediatric Dentistry
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Contact Us</h3>
                    <address className="not-italic text-gray-400 space-y-2">
                      <p>123 Dental Street, Suite 100</p>
                      <p>Cityville, State 12345</p>
                      <p>Phone: (123) 456-7890</p>
                      <p>Email: info@smiledental.com</p>
                    </address>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Smile Dental. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
