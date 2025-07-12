"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Zap, Shield, Heart, Sparkles, Plus, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const treatments = [
    {
      id: "hangover-relief",
      name: t("services.formulas.hangover.title") || "IV Hangover Relief",
      description: t("services.formulas.hangover.description") || "Revive and recover quickly from alcohol consumption",
      price: t("services.formulas.hangover.price") || "$3,200 MXN",
      duration: t("services.formulas.hangover.duration") || "45-60 minutes",
      benefits: t("services.formulas.hangover.benefits") || [
        "Rapid rehydration and electrolyte restoration",
        "Complete elimination of acetaldehyde toxins",
        "Immediate relief from nausea and vomiting",
        "Significant reduction in headache and body aches",
      ],
      ingredients: t("services.formulas.hangover.ingredients") || [
        "1000ml Normal Saline for rapid rehydration",
        "Ondansetron 4mg (anti-nausea medication)",
        "Ketorolac 30mg (anti-inflammatory pain relief)",
        "B-Complex Vitamins (B1, B2, B3, B5, B6)",
      ],
      icon: Zap,
      popular: true,
    },
    {
      id: "dehydration-recovery",
      name: t("services.formulas.dehydration.title") || "IV Dehydration Recovery",
      description:
        t("services.formulas.dehydration.description") || "Feel fresh and revitalized with rapid fluid replacement",
      price: t("services.formulas.dehydration.price") || "$2,200 MXN",
      duration: t("services.formulas.dehydration.duration") || "30-45 minutes",
      benefits: t("services.formulas.dehydration.benefits") || [
        "Immediate fluid volume restoration",
        "Complete electrolyte balance optimization",
        "Enhanced cellular hydration and function",
        "Improved cognitive function and mental clarity",
      ],
      ingredients: t("services.formulas.dehydration.ingredients") || [
        "1000ml Lactated Ringer's Solution",
        "Sodium Chloride 154mEq/L",
        "Potassium Chloride 4mEq/L",
        "Magnesium Chloride 2mEq/L",
      ],
      icon: Droplets,
    },
    {
      id: "immune-shield",
      name: t("services.formulas.immune.title") || "IV Immune Shield",
      description:
        t("services.formulas.immune.description") || "Comprehensive immune system support with essential nutrients",
      price: t("services.formulas.immune.price") || "$2,600 MXN",
      duration: t("services.formulas.immune.duration") || "45-60 minutes",
      benefits: t("services.formulas.immune.benefits") || [
        "Strengthened immune system function",
        "Enhanced antibody production and response",
        "Improved resistance to infections",
        "Faster recovery from colds, flu, and viruses",
      ],
      ingredients: t("services.formulas.immune.ingredients") || [
        "Vitamin C 5-10g",
        "Zinc Sulfate 10mg",
        "Glutathione 600mg",
        "B-Complex Vitamins",
      ],
      icon: Shield,
    },
    {
      id: "energy-boost",
      name: t("services.formulas.energy.title") || "IV Energy Boost",
      description:
        t("services.formulas.energy.description") ||
        "Combat fatigue and low energy with scientifically formulated blend",
      price: t("services.formulas.energy.price") || "$2,500 MXN",
      duration: t("services.formulas.energy.duration") || "45-60 minutes",
      benefits: t("services.formulas.energy.benefits") || [
        "Significant increase in energy levels",
        "Enhanced mental clarity and cognitive focus",
        "Improved physical endurance and vigor",
        "Better mood regulation and motivation",
      ],
      ingredients: t("services.formulas.energy.ingredients") || [
        "Vitamin B12 5000mcg",
        "B-Complex Vitamins",
        "Taurine 500mg",
        "L-Carnitine 500mg",
      ],
      icon: Zap,
    },
    {
      id: "muscle-recovery",
      name: t("services.formulas.muscle.title") || "IV Muscle Recovery",
      description: t("services.formulas.muscle.description") || "Optimize athletic performance and recovery",
      price: t("services.formulas.muscle.price") || "$2,600 MXN",
      duration: t("services.formulas.muscle.duration") || "60-75 minutes",
      benefits: t("services.formulas.muscle.benefits") || [
        "Accelerated muscle tissue repair",
        "Reduced exercise-induced inflammation",
        "Enhanced protein synthesis and muscle building",
        "Improved athletic performance and power output",
      ],
      ingredients: t("services.formulas.muscle.ingredients") || [
        "Branched-Chain Amino Acids (BCAAs) 10g",
        "L-Glutamine 5g",
        "Creatine Monohydrate 3g",
        "Magnesium Sulfate 3g",
      ],
      icon: Heart,
    },
    {
      id: "glutathione-glow",
      name: t("services.formulas.glutathione.title") || "IV Glutathione Glow",
      description:
        t("services.formulas.glutathione.description") ||
        "Master antioxidant therapy for cellular detoxification and radiant skin",
      price: t("services.formulas.glutathione.price") || "$2,700 MXN",
      duration: t("services.formulas.glutathione.duration") || "45-60 minutes",
      benefits: t("services.formulas.glutathione.benefits") || [
        "Skin lightening and brightening effects",
        "Powerful cellular detoxification",
        "Enhanced immune system function",
        "Reduced signs of aging and wrinkles",
      ],
      ingredients: t("services.formulas.glutathione.ingredients") || [
        "High-Dose Glutathione 1500mg",
        "Vitamin C 5g",
        "Biotin 10mg",
        "B-Complex Vitamins",
      ],
      icon: Sparkles,
    },
  ]

  const addOns = [
    {
      name: t("services.addons.vitaminB12.name") || "Vitamin B12 Boost",
      description: t("services.addons.vitaminB12.description") || "Enhanced energy and metabolism support",
    },
    {
      name: t("services.addons.glutathione.name") || "Glutathione Push",
      description: t("services.addons.glutathione.description") || "Master antioxidant for detoxification",
    },
    {
      name: t("services.addons.vitaminC.name") || "Extra Vitamin C",
      description: t("services.addons.vitaminC.description") || "Additional immune system support",
    },
    {
      name: t("services.addons.zinc.name") || "Zinc Boost",
      description: t("services.addons.zinc.description") || "Immune function and wound healing",
    },
    {
      name: t("services.addons.antiNausea.name") || "Anti-Nausea Medication",
      description: t("services.addons.antiNausea.description") || "Relief from nausea and vomiting",
    },
    {
      name: t("services.addons.painReliever.name") || "Pain Reliever",
      description: t("services.addons.painReliever.description") || "Anti-inflammatory pain management",
    },
    {
      name: t("services.addons.magnesium.name") || "Magnesium Boost",
      description: t("services.addons.magnesium.description") || "Muscle relaxation and nerve function",
    },
    {
      name: t("services.addons.biotin.name") || "Biotin Beauty Boost",
      description: t("services.addons.biotin.description") || "Hair, skin, and nail health",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.title") || "Our IV Therapy Services"}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("services.subtitle") ||
                "Discover our comprehensive range of premium mobile IV therapy treatments designed to enhance your health and wellness."}
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("treatments.title") || "Our Popular Treatments"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("treatments.subtitle") ||
                "Customized IV therapy treatments to meet your specific health and wellness needs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => {
              const IconComponent = treatment.icon
              return (
                <Card
                  key={treatment.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  {treatment.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500">
                      {t("common.popular") || "Popular"}
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{treatment.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary text-lg">{treatment.price}</span>
                          <span>{treatment.duration}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 line-clamp-3">{treatment.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t("services.keyIngredients") || "Key Ingredients"}:
                        </h4>
                        <ul className="space-y-1">
                          {Array.isArray(treatment.ingredients)
                            ? treatment.ingredients.slice(0, 3).map((ingredient, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0 mt-2" />
                                  {ingredient}
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t("services.benefits") || "Key Benefits"}:
                        </h4>
                        <ul className="space-y-1">
                          {Array.isArray(treatment.benefits)
                            ? treatment.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0 mt-2" />
                                  {benefit}
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <Button className="w-full" asChild>
                        <Link href="/book">{t("services.bookThis") || "Book This Treatment"}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">{t("common.pricing") || "Pricing"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.addons.title") || "Optional Add-ons"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.addons.subtitle") || "Enhance your IV therapy experience with these beneficial add-ons."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Plus className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.process.title") || "How It Works"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.process.subtitle") || "Simple steps to get your IV therapy treatment"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step1.title") || "Book Online"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step1.description") ||
                  "Choose your treatment and schedule your appointment online"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step2.title") || "We Come to You"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step2.description") ||
                  "Our licensed professionals arrive at your location with all equipment"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step3.title") || "Relax & Recover"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step3.description") ||
                  "Relax while receiving your personalized IV therapy treatment"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("services.cta.title") || "Ready to Experience the Benefits?"}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("services.cta.subtitle") || "Book your mobile IV therapy session today and start feeling better."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-primary">
                <Link href="/book">{t("services.bookNow") || "Book Now"}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/pricing">{t("common.pricing") || "Pricing"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
