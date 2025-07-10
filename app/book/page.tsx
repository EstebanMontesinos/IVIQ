"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BookPage() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    locationType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    addOns: [] as string[],
    specialRequests: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalConditions: "",
    medications: "",
    allergies: "",
    consent: false,
    hipaa: false,
  })

  const services = [
    { id: "hydration-boost", name: "Hydration Boost", price: "$149" },
    { id: "immune-defense", name: "Immune Defense", price: "$179" },
    { id: "energy-revitalize", name: "Energy Revitalize", price: "$199" },
    { id: "recovery-plus", name: "Recovery Plus", price: "$219" },
    { id: "beauty-glow", name: "Beauty Glow", price: "$229" },
    { id: "detox-cleanse", name: "Detox Cleanse", price: "$199" },
    { id: "athletic-performance", name: "Athletic Performance", price: "$249" },
    { id: "hangover-relief", name: "Hangover Relief", price: "$179" },
    { id: "weight-loss-support", name: "Weight Loss Support", price: "$219" },
    { id: "anti-aging", name: "Anti-Aging", price: "$259" },
    { id: "stress-relief", name: "Stress Relief", price: "$189" },
    { id: "brain-boost", name: "Brain Boost", price: "$209" },
    { id: "migraine-relief", name: "Migraine Relief", price: "$199" },
    { id: "fertility-support", name: "Fertility Support", price: "$239" },
    { id: "post-workout", name: "Post-Workout Recovery", price: "$189" },
    { id: "jet-lag-recovery", name: "Jet Lag Recovery", price: "$169" },
    { id: "seasonal-allergy", name: "Seasonal Allergy Relief", price: "$159" },
    { id: "custom-formula", name: "Custom Formula", price: "From $249" },
  ]

  const addOns = [
    { id: "b12-boost", name: "Vitamin B12 Boost", price: "$25" },
    { id: "glutathione-push", name: "Glutathione Push", price: "$35" },
    { id: "extra-vitamin-c", name: "Extra Vitamin C", price: "$25" },
    { id: "zinc-boost", name: "Zinc Boost", price: "$20" },
    { id: "anti-nausea", name: "Anti-Nausea Medication", price: "$30" },
    { id: "pain-reliever", name: "Pain Reliever", price: "$30" },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      addOns: checked ? [...prev.addOns, addOnId] : prev.addOns.filter((id) => id !== addOnId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Booking request submitted! We'll contact you within 24 hours to confirm your appointment.")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("booking.title")}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t("booking.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {t("booking.personal.title")}
                </CardTitle>
                <CardDescription>{t("booking.personal.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t("booking.personal.firstName")} *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t("booking.personal.lastName")} *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">{t("booking.personal.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t("booking.personal.phone")} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.service.title")}</CardTitle>
                <CardDescription>{t("booking.service.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="service">{t("booking.service.treatment")} *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("booking.service.selectTreatment")} />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t("booking.service.addons")}</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {addOns.map((addOn) => (
                      <div key={addOn.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={addOn.id}
                          checked={formData.addOns.includes(addOn.id)}
                          onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                        />
                        <Label htmlFor={addOn.id} className="text-sm">
                          {addOn.name} - {addOn.price}
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
                  {t("booking.datetime.title")}
                </CardTitle>
                <CardDescription>{t("booking.datetime.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">{t("booking.datetime.date")} *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">{t("booking.datetime.time")} *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("booking.datetime.selectTime")} />
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
                  {t("booking.location.title")}
                </CardTitle>
                <CardDescription>{t("booking.location.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="locationType">{t("booking.location.type")} *</Label>
                  <Select
                    value={formData.locationType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, locationType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("booking.location.selectType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">{t("booking.location.types.home")}</SelectItem>
                      <SelectItem value="hotel">{t("booking.location.types.hotel")}</SelectItem>
                      <SelectItem value="office">{t("booking.location.types.office")}</SelectItem>
                      <SelectItem value="event">{t("booking.location.types.event")}</SelectItem>
                      <SelectItem value="other">{t("booking.location.types.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">{t("booking.location.address")} *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    placeholder={t("booking.location.addressPlaceholder")}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">{t("booking.location.city")} *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">{t("booking.location.state")} *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">{t("booking.location.zipCode")} *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.medical.title")}</CardTitle>
                <CardDescription>{t("booking.medical.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="medicalConditions">{t("booking.medical.conditions")}</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => setFormData((prev) => ({ ...prev, medicalConditions: e.target.value }))}
                    placeholder={t("booking.medical.conditionsPlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="medications">{t("booking.medical.medications")}</Label>
                  <Textarea
                    id="medications"
                    value={formData.medications}
                    onChange={(e) => setFormData((prev) => ({ ...prev, medications: e.target.value }))}
                    placeholder={t("booking.medical.medicationsPlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="allergies">{t("booking.medical.allergies")}</Label>
                  <Textarea
                    id="allergies"
                    value={formData.allergies}
                    onChange={(e) => setFormData((prev) => ({ ...prev, allergies: e.target.value }))}
                    placeholder={t("booking.medical.allergiesPlaceholder")}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.emergency.title")}</CardTitle>
                <CardDescription>{t("booking.emergency.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">{t("booking.emergency.name")} *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData((prev) => ({ ...prev, emergencyContact: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">{t("booking.emergency.phone")} *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, emergencyPhone: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.special.title")}</CardTitle>
                <CardDescription>{t("booking.special.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="specialRequests">{t("booking.special.requests")}</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder={t("booking.special.requestsPlaceholder")}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Consent & Agreement */}
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.consent.title")}</CardTitle>
                <CardDescription>{t("booking.consent.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    {t("booking.consent.treatment")} *
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="hipaa"
                    checked={formData.hipaa}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hipaa: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="hipaa" className="text-sm leading-relaxed">
                    {t("booking.consent.hipaa")} *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                {t("booking.submit.button")}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">{t("booking.submit.note")}</p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("booking.help.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("booking.help.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>{t("booking.help.call.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{t("booking.help.call.number")}</p>
                <p className="text-sm text-muted-foreground">{t("booking.help.call.hours")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>{t("booking.help.email.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{t("booking.help.email.address")}</p>
                <p className="text-sm text-muted-foreground">{t("booking.help.email.response")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>{t("booking.help.hours.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{t("booking.help.hours.time")}</p>
                <p className="text-sm text-muted-foreground">{t("booking.help.hours.days")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
