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
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your IV Therapy Session</h1>
            <p className="text-lg text-muted-foreground mb-8">Schedule your personalized IV therapy treatment</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <form id="booking-form" action={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>Please provide your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Service Selection</CardTitle>
                <CardDescription>Choose your IV therapy service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="service">Treatment *</Label>
                  <Select name="service" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your treatment" />
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

                <div>
                  <Label>Add-ons (Optional)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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
              </CardContent>
            </Card>

            {/* Date & Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Date & Time
                </CardTitle>
                <CardDescription>Select your preferred appointment time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input id="date" name="date" type="date" min={new Date().toISOString().split("T")[0]} required />
                  </div>
                  <div>
                    <Label htmlFor="time">Time *</Label>
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
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
                <CardDescription>Where would you like your treatment?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="locationType">Location Type *</Label>
                  <Select name="locationType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Visit</SelectItem>
                      <SelectItem value="hotel">Hotel Visit</SelectItem>
                      <SelectItem value="office">Office Visit</SelectItem>
                      <SelectItem value="event">Event Location</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" name="address" placeholder="Street address" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" name="state" required />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input id="zipCode" name="zipCode" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle>Medical Information</CardTitle>
                <CardDescription>Help us provide safe treatment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    placeholder="List any medical conditions..."
                  />
                </div>

                <div>
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea id="medications" name="medications" placeholder="List current medications..." />
                </div>

                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea id="allergies" name="allergies" placeholder="List any allergies..." />
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
                <CardDescription>Required for safety purposes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input id="emergencyContact" name="emergencyContact" required />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input id="emergencyPhone" name="emergencyPhone" type="tel" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card>
              <CardHeader>
                <CardTitle>Special Requests</CardTitle>
                <CardDescription>Any additional information or requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="specialRequests">Additional Requests</Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any special requests or notes..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isPending}>
                {isPending ? "Submitting..." : "Book Appointment"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>

          {/* Success/Error Messages */}
          {message && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <p>{message.text}</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-muted-foreground">Contact us if you have any questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+52 (998) 123-4567</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@vitaflow.com</p>
                <p className="text-sm text-muted-foreground">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Service Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">8:00 AM - 8:00 PM</p>
                <p className="text-sm text-muted-foreground">7 days a week</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
