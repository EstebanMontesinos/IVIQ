"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PricingPage() {
  const { t } = useLanguage()

  const pricingPlans = [
    {
      name: t("pricing.plans.single.name"),
      description: t("pricing.plans.single.description"),
      price: t("pricing.plans.single.price"),
      features: t("pricing.plans.single.features"),
      popular: false,
      buttonText: t("pricing.plans.single.buttonText"),
    },
    {
      name: t("pricing.plans.monthly.name"),
      description: t("pricing.plans.monthly.description"),
      price: t("pricing.plans.monthly.price"),
      features: t("pricing.plans.monthly.features"),
      popular: true,
      buttonText: t("pricing.plans.monthly.buttonText"),
    },
    {
      name: t("pricing.plans.premium.name"),
      description: t("pricing.plans.premium.description"),
      price: t("pricing.plans.premium.price"),
      features: t("pricing.plans.premium.features"),
      popular: false,
      buttonText: t("pricing.plans.premium.buttonText"),
    },
  ]

  const treatmentPrices = [
    { name: "IV Hangover Relief", price: "$3,200 MXN" },
    { name: "IV Dehydration Recovery", price: "$2,200 MXN" },
    { name: "IV Food Poisoning Recovery", price: "$2,500 MXN" },
    { name: "IV Myers Cocktail", price: "$2,400 MXN" },
    { name: "IV Jet Lag Reset", price: "$2,400 MXN" },
    { name: "IV Energy Boost", price: "$2,500 MXN" },
    { name: "IV Muscle Recovery", price: "$2,600 MXN" },
    { name: "IV Iron Recharge", price: "$2,100 MXN" },
    { name: "IV NAD+ Revival", price: "$3,200 MXN" },
    { name: "IV Antiviral Defense", price: "$2,300 MXN" },
    { name: "IV Immune Shield", price: "$2,600 MXN" },
    { name: "IV Megadose Vitamin C", price: "$2,300 MXN" },
    { name: "IV Full Body Detox", price: "$2,400 MXN" },
    { name: "IV Heavy Metal Cleanse", price: "$2,600 MXN" },
    { name: "IV Glutathione Glow", price: "$2,700 MXN" },
    { name: "IV Anti-Inflammatory", price: "$2,500 MXN" },
    { name: "All-Inclusive Rejuvenation IV", price: "$2,700 MXN" },
    { name: "All-Inclusive Rejuvenation IV (Extra Strength)", price: "$3,000 MXN" },
  ]

  const addOns = [
    { name: "Vitamin B12 Boost", description: "Enhanced energy and metabolism support" },
    { name: "Glutathione Push", description: "Master antioxidant for detoxification" },
    { name: "Extra Vitamin C", description: "Additional immune system support" },
    { name: "Zinc Boost", description: "Immune function and wound healing" },
    { name: "Anti-Nausea Medication", description: "Relief from nausea and vomiting" },
    { name: "Pain Reliever", description: "Anti-inflammatory pain management" },
    { name: "Magnesium Boost", description: "Muscle relaxation and nerve function" },
    { name: "Biotin Beauty Boost", description: "Hair, skin, and nail health" },
    { name: "Amino Acid Complex", description: "Muscle recovery and protein synthesis" },
    { name: "Electrolyte Enhancement", description: "Advanced hydration and balance" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("pricing.title")}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t("pricing.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.membership.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pricing.membership.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary">{plan.price}</p>
                  </div>
                  <ul className="space-y-2">
                    {Array.isArray(plan.features) ? (
                      plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{plan.features}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/book">{plan.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Treatment Prices */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.individual.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pricing.individual.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("pricing.individual.treatments")}</CardTitle>
                <CardDescription>All treatments include mobile service to your location</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {treatmentPrices.map((item, index) => (
                    <li key={index} className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-bold text-primary">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Add-ons</CardTitle>
                <CardDescription>Enhance your IV therapy with these beneficial add-ons</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {addOns.map((item, index) => (
                    <li key={index} className="pb-3 border-b">
                      <div className="font-medium mb-1">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Add-on pricing varies based on the specific treatment and dosage. Contact us
                    for detailed pricing information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Group & Event Pricing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.group.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pricing.group.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader>
                <CardTitle>{t("pricing.group.discounts")}</CardTitle>
                <CardDescription>Save more when you book for groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">3-5 people</span>
                    <span className="font-bold text-primary">10% off</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">6-10 people</span>
                    <span className="font-bold text-primary">15% off</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">11+ people</span>
                    <span className="font-bold text-primary">20% off</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Group discounts apply to same-day treatments at the same location.
                </p>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-4">{t("pricing.group.corporate")}</h3>
              <p className="mb-6">{t("pricing.group.corporateDescription")}</p>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Corporate Wellness Packages</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Monthly employee wellness programs</li>
                    <li>• Executive health packages</li>
                    <li>• Event and conference services</li>
                    <li>• Custom pricing based on volume</li>
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/contact">{t("pricing.group.contactQuote")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Travel */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas & Travel</h2>
            <p className="text-lg text-muted-foreground">Mobile service throughout the metro area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Free Service Zone</CardTitle>
                <CardDescription>No additional travel fees</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Downtown core area</li>
                  <li>• Major hotel districts</li>
                  <li>• Business districts</li>
                  <li>• Residential areas within 15km</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Extended Zone</CardTitle>
                <CardDescription>Small travel fee applies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 15-30km from city center</li>
                  <li>• Suburban areas</li>
                  <li>• Additional fee: $300 MXN</li>
                  <li>• Still convenient and affordable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Premium Zone</CardTitle>
                <CardDescription>Custom pricing for distant locations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 30km+ from city center</li>
                  <li>• Remote locations</li>
                  <li>• Special events</li>
                  <li>• Contact for custom quote</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.faq.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.travel.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.travel.answer")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.insurance.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.insurance.answer")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.payment.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.payment.answer")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.cancellation.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.cancellation.answer")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">What's included in the price?</h3>
              <p className="text-muted-foreground">
                All treatments include professional consultation, IV administration by licensed healthcare providers,
                medical-grade equipment, and post-treatment monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">How much do add-ons cost?</h3>
              <p className="text-muted-foreground">
                Add-on pricing varies based on the specific treatment and dosage requirements. We'll provide detailed
                pricing when you book your appointment or contact us for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("pricing.cta.title")}</h2>
            <p className="text-xl mb-8">{t("pricing.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <Link href="/book">{t("pricing.cta.button")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
