"use client"

import { Label } from "@/components/ui/label"
import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Clock, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e?: React.FormEvent) => {
  if (e) e.preventDefault()
  if (isLoading) return

  // ✅ Validate 10-digit mobile number
  const phoneDigits = formData.phone.replace(/\D/g, "") // Remove non-digit characters
  const phonePattern = /^[0-9]{10}$/

  if (!phonePattern.test(phoneDigits)) {
    setError("Please enter a valid 10-digit phone number.")
    return
  }// Optional email validation if filled
  if (formData.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
  setError("Please enter a valid email address.")
  return
  }


  setIsLoading(true)
  setError(null)
  setIsSubmitted(false)

  const payload = {
    date: date ? format(date, "PPP") : "",
    time: timeSlot,
    ...formData,
  }


    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyLJbZqkarL22N0jk52RU9DRvYj6SQng4VnfZ88nbzEdNNUvrmLdMdmNc5iHhdt_Ad1Zg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )

      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      console.log("Form submitted with data:", payload)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An error occurred while submitting the form. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Scheduled!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for scheduling your appointment with Smile Dental. We've sent a confirmation to your email.
        </p>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{date ? format(date, "PPP") : ""}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{timeSlot}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{formData.service}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{formData.name}</p>
            </div>
          </div>
        </div>
        <Button asChild size="lg">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Book Your Dental Appointment</h1>
        <p className="mt-4 text-lg text-gray-600">Schedule your visit in just a few simple steps</p>
      </div>

      {/* Step Indicators */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {/* Step 1 */}
          <div className={`flex flex-col items-center ${step >= 1 ? "text-sky-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-sky-600 bg-sky-50" : "border-gray-200"}`}>
              <CalendarIcon className="h-5 w-5" />
            </div>
            <span className="text-sm mt-2">Select Date</span>
          </div>
          <div className="flex-1 h-1 mx-4 bg-gray-200">
            <div className={`h-full ${step >= 2 ? "bg-sky-600" : "bg-gray-200"}`} style={{ width: step >= 2 ? "100%" : "0%" }}></div>
          </div>

          {/* Step 2 */}
          <div className={`flex flex-col items-center ${step >= 2 ? "text-sky-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-sky-600 bg-sky-50" : "border-gray-200"}`}>
              <Clock className="h-5 w-5" />
            </div>
            <span className="text-sm mt-2">Select Time</span>
          </div>
          <div className="flex-1 h-1 mx-4 bg-gray-200">
            <div className={`h-full ${step >= 3 ? "bg-sky-600" : "bg-gray-200"}`} style={{ width: step >= 3 ? "100%" : "0%" }}></div>
          </div>

          {/* Step 3 */}
          <div className={`flex flex-col items-center ${step >= 3 ? "text-sky-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-sky-600 bg-sky-50" : "border-gray-200"}`}>
              <span className="text-sm font-medium">3</span>
            </div>
            <span className="text-sm mt-2">Your Details</span>
          </div>
        </div>
      </div>

      {/* Step 1: Date Selection */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Appointment Date</CardTitle>
            <CardDescription>Choose a date for your dental appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mx-auto"
            
              disabled={(date) => date < new Date()}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">Cancel</Link>
            </Button>
            <Button onClick={() => setStep(2)} disabled={!date} className="bg-sky-600 hover:bg-sky-700">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 2: Time Selection */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Appointment Time</CardTitle>
            <CardDescription>Choose an available time slot for {date ? format(date, "PPP") : ""}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={timeSlot === time ? "default" : "outline"}
                  className={timeSlot === time ? "bg-sky-600 hover:bg-sky-700" : ""}
                  onClick={() => setTimeSlot(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={() => setStep(3)} disabled={!timeSlot} className="bg-sky-600 hover:bg-sky-700">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Step 3: Form */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
            <CardDescription>Please provide your details to complete the booking</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="service">Service</Label>
                  <Select onValueChange={handleServiceChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-checkup">General Check-up & Cleaning</SelectItem>
                      <SelectItem value="teeth-whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="filling">Dental Filling</SelectItem>
                      <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                      <SelectItem value="extraction">Tooth Extraction</SelectItem>
                      <SelectItem value="crown">Dental Crown</SelectItem>
                      <SelectItem value="braces">Braces Consultation</SelectItem>
                      <SelectItem value="implant">Dental Implant Consultation</SelectItem>
                      <SelectItem value="emergency">Emergency Dental Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any specific concerns or information you'd like us to know"
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="bg-sky-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Appointment Summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-gray-500">Date:</span> {date ? format(date, "PPP") : ""}</div>
                  <div><span className="text-gray-500">Time:</span> {timeSlot}</div>
                </div>
              </div>
              {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
            <Button
              type="submit"
              disabled={isLoading || !formData.name || !formData.email || !formData.phone || !formData.service}
              className="bg-sky-600 hover:bg-sky-700 flex items-center justify-center min-w-[180px]"
              onClick={handleSubmit}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Confirm Appointment"
              )}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
