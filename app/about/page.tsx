import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Heart, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Dental Practice</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Providing exceptional dental care with a patient-centered approach since 2005.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/team.jpg?height=400&width=600&text=Our+Dental+Team"
            alt="Our Dental Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded in 2005 by Dr. Sarah Johnson, Smile Dental was established with a vision to provide comprehensive
            dental care in a comfortable and welcoming environment. What started as a small practice has grown into a
            trusted dental care provider in the community.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to help our patients achieve optimal oral health through personalized care, education, and
            the latest dental techniques. We believe that a healthy smile contributes to overall well-being and quality
            of life.
          </p>
          <div className="pt-4">
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These core principles guide everything we do at Smile Dental.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="h-10 w-10 text-sky-600" />,
              title: "Patient-Centered Care",
              description:
                "We prioritize your comfort and well-being, tailoring our approach to meet your unique needs.",
            },
            {
              icon: <Award className="h-10 w-10 text-sky-600" />,
              title: "Excellence",
              description:
                "We strive for excellence in every aspect of our practice, from clinical care to customer service.",
            },
            {
              icon: <Heart className="h-10 w-10 text-sky-600" />,
              title: "Compassion",
              description: "We treat every patient with empathy and understanding, creating a supportive environment.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-sky-600" />,
              title: "Integrity",
              description: "We maintain the highest ethical standards and are committed to honesty and transparency.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced dental professionals are dedicated to providing you with the highest quality care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Lead Dentist & Founder",
              bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She is passionate about creating beautiful, healthy smiles.",
              image: "/pt1.jpg?height=300&width=300&text=Dr.+Johnson",
            },
            {
              name: "Dr. Michael Chen",
              role: "Orthodontist",
              bio: "Specializing in orthodontics, Dr. Chen helps patients achieve perfectly aligned teeth using the latest techniques and technologies.",
              image: "/pt3.jpg?height=300&width=300&text=Dr.+Chen",
            },
            {
              name: "Dr. Emily Rodriguez",
              role: "Pediatric Dentist",
              bio: "With a gentle approach, Dr. Rodriguez specializes in making dental visits comfortable and fun for our youngest patients.",
              image: "/pt2.jpg?height=300&width=300&text=Dr.+Rodriguez",
            },
            {
              name: "Jessica Williams",
              role: "Dental Hygienist",
              bio: "Jessica is dedicated to preventive care and patient education, helping you maintain optimal oral health between visits.",
              image: "/pt4.jpg?height=300&width=300&text=Jessica",
            },
            
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-sky-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our modern dental office is designed with your comfort in mind, featuring state-of-the-art equipment and a
            welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Reception Area",
              image: "/Reception.jpg?height=250&width=400&text=Reception",
            },
            {
              title: "Treatment Room",
              image: "/Treatment.jpg?height=250&width=400&text=Treatment+Room",
            },
            {
              title: "Advanced Equipment",
              image: "/equipment.jpg?height=250&width=400&text=Equipment",
            },
            {
              title: "Children's Area",
              image: "/Children.jpg?height=250&width=400&text=Children's+Area",
            },
            {
              title: "Consultation Room",
              image: "/consultetion.jpg?height=250&width=400&text=Consultation",
            },
            {
              title: "Sterilization Center",
              image: "/sterelizatin.jpg?height=250&width=400&text=Sterilization",
            },
          ].map((facility, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-48 group">
              <Image
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-medium p-4">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-50 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Our Care?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're accepting new patients and would be honored to welcome you to our dental family. Schedule your first
              appointment today and see the difference our patient-centered approach can make.
            </p>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <Link href="/appointment">
                Book Your First Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/welcome.jpg?height=300&width=500&text=Welcoming+New+Patients"
              alt="Welcoming New Patients"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
