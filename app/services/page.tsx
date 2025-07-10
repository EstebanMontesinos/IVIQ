"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap, Shield, Sparkles, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const serviceCategories = [
    {
      title: "Recovery & Wellness",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-green-100 text-green-800",
      services: [
        { key: "hangover", image: "/images/iv-hangover-relief.png" },
        { key: "dehydration", image: "/images/iv-dehydration-recovery.png" },
        { key: "foodPoisoning", image: "/images/iv-food-poisoning.png" },
        { key: "myers", image: "/images/iv-myers-cocktail.png" },
        { key: "jetLag", image: "/images/iv-jet-lag-reset.png" },
      ],
    },
    {
      title: "Energy & Performance",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-100 text-yellow-800",
      services: [
        { key: "energy", image: "/images/iv-energy-boost.png" },
        { key: "muscle", image: "/images/iv-muscle-recovery.png" },
        { key: "iron", image: "/images/iv-iron-recharge.png" },
        { key: "nad", image: "/images/iv-nad-revival.png" },
      ],
    },
    {
      title: "Immune Support",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-800",
      services: [
        { key: "antiviral", image: "/images/iv-antiviral-defense.png" },
        { key: "immune", image: "/images/iv-immune-shield.png" },
        { key: "megaC", image: "/images/iv-megadose-vitamin-c.png" },
      ],
    },
    {
      title: "Detox & Anti-Aging",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-800",
      services: [
        { key: "detox", image: "/images/iv-full-body-detox.png" },
        { key: "heavyMetal", image: "/images/iv-heavy-metal-cleanse.png" },
        { key: "glutathione", image: "/images/iv-glutathione-glow.png" },
        { key: "antiInflammatory", image: "/images/iv-anti-inflammatory.png" },
      ],
    },
    {
      title: "Premium Rejuvenation",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-800",
      services: [
        { key: "rejuvenation", image: "/images/iv-rejuvenation.png" },
        { key: "rejuvenationExtra", image: "/images/iv-rejuvenation-extra.png" },
      ],
    },
  ]

  const addOns = [
    {
      title: "Vitamin B12 Boost",
      description: "Extra energy and metabolism support.",
      price: "$25",
    },
    {
      title: "Glutathione Push",
      description: "Master antioxidant for detoxification and skin brightening.",
      price: "$35",
    },
    {
      title: "Extra Vitamin C",
      description: "Additional immune and collagen support.",
      price: "$25",
    },
    {
      title: "Zinc Boost",
      description: "Enhanced immune function and wound healing.",
      price: "$20",
    },
    {
      title: "Anti-Nausea Medication",
      description: "Relief from nausea and stomach discomfort.",
      price: "$30",
    },
    {
      title: "Pain Reliever",
      description: "Non-narcotic pain relief for headaches or discomfort.",
      price: "$30",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.title")}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t("services.subtitle")}</p>
            <Button asChild>
              <Link href="/book">{t("services.bookNow")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 md:py-24">
        <div className="container">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Badge className={`${category.color} px-4 py-2 text-sm font-medium`}>
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => {
                  const serviceData = {
                    title: t(`services.formulas.${service.key}.title`),
                    description: t(`services.formulas.${service.key}.description`),
                    price: t(`services.formulas.${service.key}.price`),
                    duration: t(`services.formulas.${service.key}.duration`),
                    ingredients: t(`services.formulas.${service.key}.ingredients`),
                    benefits: t(`services.formulas.${service.key}.benefits`),
                  }

                  return (
                    <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                      {/* Service Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={service.image || "/placeholder.svg?height=200&width=400"}
                          alt={serviceData.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl leading-tight">{serviceData.title}</CardTitle>
                          <Badge variant="secondary" className="ml-2 shrink-0">
                            {serviceData.price}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          {serviceData.description}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{serviceData.duration}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col pt-0">
                        <div className="mb-4 flex-1">
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {t("services.keyIngredients")}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {Array.isArray(serviceData.ingredients) ? (
                              serviceData.ingredients.slice(0, 3).map((ingredient, i) => (
                                <li key={i} className="text-muted-foreground">
                                  • {ingredient}
                                </li>
                              ))
                            ) : (
                              <li className="text-muted-foreground">• {serviceData.ingredients}</li>
                            )}
                            {Array.isArray(serviceData.ingredients) && serviceData.ingredients.length > 3 && (
                              <li className="text-xs text-muted-foreground italic">
                                +{serviceData.ingredients.length - 3} more ingredients
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary" />
                            {t("services.benefits")}
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {Array.isArray(serviceData.benefits) ? (
                              serviceData.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i} className="text-muted-foreground">
                                  • {benefit}
                                </li>
                              ))
                            ) : (
                              <li className="text-muted-foreground">• {serviceData.benefits}</li>
                            )}
                            {Array.isArray(serviceData.benefits) && serviceData.benefits.length > 3 && (
                              <li className="text-xs text-muted-foreground italic">
                                +{serviceData.benefits.length - 3} more benefits
                              </li>
                            )}
                          </ul>
                        </div>

                        <Button className="w-full mt-auto" asChild>
                          <Link href={`/book?service=${service.key}`}>{t("services.bookThis")}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Service Spotlight */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.featured.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.featured.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/megaboost-iv-bag.png"
                alt="MegaBoost IV Treatment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary px-4 py-2">{t("services.featured.badge")}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">{t("services.featured.name")}</h3>
              <p className="text-lg text-muted-foreground">{t("services.featured.description")}</p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {t("services.keyIngredients")}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-dose Vitamin C (2000mg)</li>
                  <li>• B-Complex vitamins</li>
                  <li>• Magnesium & Zinc</li>
                  <li>• Glutathione boost</li>
                  <li>• Essential amino acids</li>
                </ul>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="text-3xl font-bold text-primary">$199</div>
                <div className="text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 inline mr-1" />
                  45-60 minutes
                </div>
              </div>

              <Button size="lg" asChild>
                <Link href="/book?service=energy">{t("services.bookThis")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.addOns.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.addOns.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{addOn.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{addOn.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addOn.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.cta.title")}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{t("services.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book">{t("services.cta.bookNow")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">{t("services.cta.viewPricing")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
