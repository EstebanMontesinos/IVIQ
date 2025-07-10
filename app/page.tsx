"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const [videoError, setVideoError] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Check if video exists by making a HEAD request
    fetch("/videos/hero.mp4", { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          console.error(`Video file check failed: ${response.status} ${response.statusText}`)
          setVideoError(true)
        }
      })
      .catch((error) => {
        console.error("Error checking video file:", error)
        setVideoError(true)
      })
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video Background or Fallback Image */}
          {!videoError ? (
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  console.error("Video failed to load:", e.currentTarget.error?.message || "Unknown error")
                  setVideoError(true)
                }}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/placeholder.svg?height=700&width=1920&text=IVIQ+Premium+IV+Therapy"
                alt="IVIQ Premium IV Therapy"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{t("hero.title")}</h1>
            <p className="text-lg md:text-xl">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/book">{t("hero.bookNow")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/services">{t("hero.viewServices")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("features.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("features.convenient.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("features.convenient.description")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("features.mobile.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("features.mobile.description")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Star className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("features.professional.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("features.professional.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("treatments.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("treatments.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: "hydration",
                features: ["1000ml Fluid", "Electrolytes", "B Vitamins", "30-45 min treatment"],
              },
              {
                key: "immune",
                features: ["Vitamin C", "Zinc", "Glutathione", "B-Complex", "45-60 min treatment"],
              },
              {
                key: "energy",
                features: ["B12", "Amino Acids", "Magnesium", "Taurine", "45-60 min treatment"],
              },
              {
                key: "recovery",
                features: [
                  "Anti-nausea medication",
                  "Pain reliever",
                  "Electrolytes",
                  "Antioxidants",
                  "45-60 min treatment",
                ],
              },
              {
                key: "beauty",
                features: ["Glutathione", "Biotin", "Vitamin C", "Collagen support", "45-60 min treatment"],
              },
              {
                key: "custom",
                features: [
                  "Consultation included",
                  "Customized ingredients",
                  "Personalized dosing",
                  "45-60 min treatment",
                ],
              },
            ].map((treatment, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{t(`treatments.${treatment.key}.title`)}</CardTitle>
                  <CardDescription>{t(`treatments.${treatment.key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-2xl font-bold text-primary mb-4">{t(`treatments.${treatment.key}.price`)}</p>
                  <ul className="space-y-2">
                    {treatment.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full" asChild>
                    <Link href="/book">{t("common.bookNow")}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">{t("treatments.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("benefits.title")}</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("benefits.absorption.title")}</h3>
                    <p className="text-muted-foreground">{t("benefits.absorption.description")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("benefits.immediate.title")}</h3>
                    <p className="text-muted-foreground">{t("benefits.immediate.description")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("benefits.customized.title")}</h3>
                    <p className="text-muted-foreground">{t("benefits.customized.description")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t("benefits.preventative.title")}</h3>
                    <p className="text-muted-foreground">{t("benefits.preventative.description")}</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8" asChild>
                <Link href="/benefits">{t("benefits.learnMore")}</Link>
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/benefits.png"
                alt="IV Therapy Benefits - Professional IV Administration"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("testimonials.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                image: "/placeholder.svg?height=80&width=80",
                quote: t("testimonials.clients.sarah.quote"),
                rating: 5,
              },
              {
                name: "Michael T.",
                image: "/placeholder.svg?height=80&width=80",
                quote: t("testimonials.clients.michael.quote"),
                rating: 5,
              },
              {
                name: "Jennifer L.",
                image: "/placeholder.svg?height=80&width=80",
                quote: t("testimonials.clients.jennifer.quote"),
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="relative h-20 w-20 mx-auto mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title")}</h2>
            <p className="text-xl mb-8">{t("cta.subtitle")}</p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <Link href="/book">{t("cta.book")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
