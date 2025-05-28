import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Phone, ChevronRight, Star, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Your Smile Is Our <span className="text-sky-600">Priority</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Experience exceptional dental care with our team of experts. We provide comprehensive services to keep
              your smile healthy and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {["pt1.jpg", "pt2.jpg", "pt3.jpg", "pt4.jpg"].map((img, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-sky-100"
                  >
                    <Image
                      src={`/${img}`}
                      alt={`Patient ${i + 1}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-sm">
                <div className="font-medium">Trusted by 1000+ patients</div>
                <div className="flex items-center text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <Star className="h-4 w-4 fill-amber-500" />
                  <span className="ml-1 text-gray-600">5.0 (300+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/dentalClinic.jpg?height=400&width=600&text=Dental+Clinic"
              alt="Dental Clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-sky-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <p className="text-gray-600 mt-1">(123) 456-7890</p>
                <Link href="tel:+11234567890" className="text-sky-600 text-sm font-medium mt-2 inline-block">
                  Call now
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-sky-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600 mt-1">123 Dental St, City, State</p>
                <Link href="/contact" className="text-sky-600 text-sm font-medium mt-2 inline-block">
                  Get directions
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-sky-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Working Hours</h3>
                <p className="text-gray-600 mt-1">Mon-Fri: 9AM-6PM</p>
                <Link href="/appointment" className="text-sky-600 text-sm font-medium mt-2 inline-block">
                  Book appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Dental Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive dental care services to meet all your oral health needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Dentistry",
                description: "Comprehensive care for your overall oral health including cleanings and check-ups.",
                icon: "🦷",
              },
              {
                title: "Cosmetic Dentistry",
                description:
                  "Enhance your smile with our range of cosmetic procedures including whitening and veneers.",
                icon: "✨",
              },
              {
                title: "Orthodontics",
                description:
                  "Straighten your teeth with our modern orthodontic treatments including invisible aligners.",
                icon: "😁",
              },
              {
                title: "Pediatric Dentistry",
                description: "Specialized dental care for children in a comfortable and friendly environment.",
                icon: "👶",
              },
              {
                title: "Oral Surgery",
                description: "Expert surgical procedures including extractions and implant placement.",
                icon: "🔧",
              },
              {
                title: "Emergency Care",
                description: "Prompt attention for dental emergencies to relieve pain and prevent complications.",
                icon: "🚑",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-sky-600 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/dentalClinic2.jpg?height=500&width=600&text=Modern+Dental+Office"
              alt="Modern Dental Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Dental Practice</h2>
            <p className="text-lg text-gray-600">
              We combine advanced technology with compassionate care to provide you with the best dental experience
              possible.
            </p>
            <div className="space-y-4">
              {[
                "State-of-the-art equipment and modern techniques",
                "Experienced and caring dental professionals",
                "Comfortable and relaxing environment",
                "Personalized treatment plans for each patient",
                "Flexible scheduling and emergency appointments",
                "Affordable payment options and insurance acceptance",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sky-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-6 bg-sky-600 hover:bg-sky-700">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                comment:
                  "The team at Smile Dental made my dental visit stress-free. Dr. Smith was gentle and explained everything clearly. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Brown",
                comment:
                  "I've been coming here for years and have always received excellent care. The staff is friendly and the office is clean and modern.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                comment:
                  "As someone who used to be terrified of dentists, I can't believe how comfortable I feel here. The entire team is patient and understanding.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center text-amber-500 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500" />
                    ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="text-sky-600 font-medium">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-8">
            Take the first step towards a healthier smile today. Our team is ready to provide you with exceptional
            dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-sky-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
