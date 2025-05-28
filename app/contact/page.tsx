import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We're here to help with any questions you may have about our dental services. Reach out to us using any of the
          methods below.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12 text-left">
        <div className="relative h-64 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30412.103370513832!2d75.86401211083984!3d17.673213699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7f632f18af%3A0x25decef639a26651!2sIvory%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1748424525798!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Our Location</h3>
              <p className="text-gray-600 mt-1">
                123 Dental Street, Suite 100
                <br />
                Cityville, State 12345
              </p>
              <a
                href="https://maps.app.goo.gl/ciTLFsYyXpKkcjwu8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 text-sm font-medium mt-2 inline-block"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600 mt-1">(123) 456-7890</p>
              <a href="tel:+11234567890" className="text-sky-600 text-sm font-medium mt-2 inline-block">
                Call now
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600 mt-1">info@smiledental.com</p>
              <a
                href="mailto:info@smiledental.com"
                className="text-sky-600 text-sm font-medium mt-2 inline-block"
              >
                Send email
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Hours</h3>
              <div className="text-gray-600 mt-1 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-50 rounded-xl p-6 mb-20 max-w-xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency?</h3>
        <p className="text-gray-600 mb-4">
          If you're experiencing a dental emergency, please call us immediately at
          <strong className="text-gray-900"> (123) 456-7890</strong>.
        </p>
        <Button asChild className="bg-sky-600 hover:bg-sky-700">
          <Link href="/appointment">Book Emergency Appointment</Link>
        </Button>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our dental services and policies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            question: "Do you accept insurance?",
            answer:
              "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage.",
          },
          {
            question: "How often should I visit the dentist?",
            answer:
              "We recommend a check-up and cleaning every six months for most patients, though some may need more frequent visits based on their oral health needs.",
          },
          {
            question: "What should I do in case of a dental emergency?",
            answer:
              "Call our office immediately. We reserve time in our daily schedules for emergency patients. If it's after hours, call our emergency number provided on our voicemail.",
          },
          {
            question: "Do you offer payment plans?",
            answer:
              "Yes, we offer various payment options and financing plans to help make dental care affordable for all our patients.",
          },
          {
            question: "How can I whiten my teeth?",
            answer:
              "We offer professional in-office whitening treatments as well as take-home whitening kits. Schedule a consultation to determine the best option for you.",
          },
          {
            question: "Are dental X-rays safe?",
            answer:
              "Yes, with modern digital X-ray technology, radiation exposure is minimal. We also use protective equipment to ensure your safety.",
          },
        ].map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-left">
            <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
