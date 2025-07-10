"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { submitBooking } from "@/actions/booking-actions"

export default function BookPage() {
  const { t } = useLanguage()
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const services = [
    { id: "hangover-relief", name: "IV Hangover Relief", price: 3200 },
    { id: "dehydration-recovery", name: "IV Dehydration Recovery", price: 2200 },
    { id: "food-poisoning", name: "IV Food Poisoning Recovery", price: 2500 },
    { id: "myers-cocktail", name: "IV Myers Cocktail", price: 2400 },
    { id: "jet-lag-reset", name: "IV Jet Lag Reset", price: 2400 },
    { id: "energy-boost", name: "IV Energy Boost", price: 2500 },
    { id: "muscle-recovery", name: "IV Muscle Recovery", price: 2600 },
    { id: "iron-recharge", name: "IV Iron Recharge", price: 2100 },
    { id: "nad-revival", name: "IV NAD+ Revival", price: 3200 },
    { id: "antiviral-defense", name: "IV Antiviral Defense", price: 2300 },
    { id: "immune-shield", name: "IV Immune Shield", price: 2600 },
    { id: "megadose-vitamin-c", name: "IV Megadose Vitamin C", price: 2300 },
    { id: "full-body-detox", name: "IV Full Body Detox", price: 2400 },
    { id: "heavy-metal-cleanse", name: "IV Heavy Metal Cleanse", price: 2600 },
    { id: "glutathione-glow", name: "IV Glutathione Glow", price: 2700 },
    { id: "anti-inflammatory", name: "IV Anti-Inflammatory", price: 2500 },
    { id: "rejuvenation", name: "All-Inclusive Rejuvenation IV", price: 2700 },
    { id: "rejuvenation-extra", name: "All-Inclusive Rejuvenation IV (Extra Strength)", price: 3000 },
  ]

  const addOns = [
    { id: "b12-boost", name: "Vitamin B12 Boost", price: 300 },
    { id: "glutathione-push", name: "Glutathione Push", price: 500 },
    { id: "extra-vitamin-c", name: "Extra Vitamin C", price: 250 },
    { id: "zinc-boost", name: "Zinc Boost", price: 200 },
    { id: "anti-nausea", name: "Anti-Nausea Medication", price: 300 },
    { id: "pain-reliever", name: "Pain Reliever", price: 300 },
  ]

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addOnId])
    } else {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId))
    }
  }

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const result = await submitBooking(formData)

        if (result.success) {
          setMessage({ type: "success", text: result.message })
          // Reset form
          const form = document.getElementById("booking-form") as HTMLFormElement
          form?.reset()
          setSelectedAddOns([])
        } else {
          setMessage({ type: "error", text: result.error })
        }
      } catch (error) {
        setMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your IV Therapy Session</h1>
          <p className="text-xl text-gray-600">Schedule your personalized IV therapy treatment</p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Booking Form
            </CardTitle>
            <CardDescription>Fill out the form below to schedule your IV therapy session</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="booking-form" action={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    First Name
                  </Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <Select name="service" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your IV therapy service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - ${service.price.toLocaleString()} MXN
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <Label>Add-ons (Optional)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={addOn.id}
                        name="addOns"
                        value={addOn.id}
                        checked={selectedAddOns.includes(addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                      />
                      <Label htmlFor={addOn.id} className="text-sm">
                        {addOn.name} - ${addOn.price.toLocaleString()} MXN
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Preferred Date
                  </Label>
                  <Input id="date" name="date" type="date" min={new Date().toISOString().split("T")[0]} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Preferred Time
                  </Label>
                  <Select name="time" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <Label>Location Type</Label>
                <Select name="locationType" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home Visit</SelectItem>
                    <SelectItem value="office">Office Visit</SelectItem>
                    <SelectItem value="hotel">Hotel Visit</SelectItem>
                    <SelectItem value="event">Event Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Input id="address" name="address" placeholder="Street address" required />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" name="zipCode" required />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input id="emergencyContact" name="emergencyContact" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input id="emergencyPhone" name="emergencyPhone" type="tel" required />
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    rows={3}
                    placeholder="List any medical conditions..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea id="medications" name="medications" rows={3} placeholder="List current medications..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea id="allergies" name="allergies" rows={3} placeholder="List any allergies..." />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  placeholder="Any special requests or notes..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Book Appointment"}
              </Button>

              {/* Message Display */}
              {message && (
                <div
                  className={`p-4 rounded-md ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
