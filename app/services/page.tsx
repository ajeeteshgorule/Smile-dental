import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      description: "Comprehensive care for your overall oral health",
      image: "/genD.jpg?height=300&width=500&text=General+Dentistry",
      features: [
        "Dental check-ups and cleanings",
        "Fillings and restorations",
        "Gum disease treatment",
        "Oral cancer screenings",
        "Preventive care and education",
      ],
      cta: "Schedule a check-up",
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our range of cosmetic procedures",
      image: "/cosD.jpg?height=300&width=500&text=Cosmetic+Dentistry",
      features: ["Teeth whitening", "Porcelain veneers", "Dental bonding", "Smile makeovers", "Gum contouring"],
      cta: "Transform your smile",
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: "Straighten your teeth with our modern orthodontic treatments",
      image: "/orthoD.jpg?height=300&width=500&text=Orthodontics",
      features: ["Traditional braces", "Clear aligners", "Retainers", "Early intervention", "Adult orthodontics"],
      cta: "Get a straighter smile",
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a comfortable environment",
      image: "/pediD.jpg?height=300&width=500&text=Pediatric+Dentistry",
      features: [
        "Child-friendly environment",
        "Preventive care",
        "Dental sealants",
        "Fluoride treatments",
        "Education for parents and children",
      ],
      cta: "Book for your child",
    },
    {
      id: "oral-surgery",
      title: "Oral Surgery",
      description: "Expert surgical procedures for complex dental issues",
      image: "/oralD.jpg?height=300&width=500&text=Oral+Surgery",
      features: [
        "Tooth extractions",
        "Wisdom teeth removal",
        "Dental implant placement",
        "Bone grafting",
        "Treatment of jaw disorders",
      ],
      cta: "Consult with our surgeon",
    },
    {
      id: "emergency-care",
      title: "Emergency Dental Care",
      description: "Prompt attention for dental emergencies",
      image: "/emerD.jpg?height=300&width=500&text=Emergency+Care",
      features: [
        "Same-day appointments",
        "Pain relief",
        "Broken tooth repair",
        "Lost filling or crown replacement",
        "Treatment of dental infections",
      ],
      cta: "Get emergency help",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Dental Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive dental care services to meet all your oral health needs. Our experienced team uses
          the latest technology to ensure you receive the best possible care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                <Link href="/appointment">
                  {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 bg-sky-50 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Schedule a consultation with our dental experts. We'll assess your oral health and recommend the most
              appropriate treatments for your specific needs.
            </p>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <Link href="/appointment">Book a Consultation</Link>
            </Button>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/cons.jpg?height=300&width=500&text=Dental+Consultation"
              alt="Dental Consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
