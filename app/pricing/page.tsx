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
    { name: "Hydration Boost", price: "$149" },
    { name: "Immune Defense", price: "$179" },
    { name: "Energy Revitalize", price: "$199" },
    { name: "Recovery Plus", price: "$219" },
    { name: "Beauty Glow", price: "$229" },
    { name: "Detox Cleanse", price: "$199" },
    { name: "Athletic Performance", price: "$249" },
    { name: "Hangover Relief", price: "$179" },
    { name: "Weight Loss Support", price: "$219" },
    { name: "Anti-Aging", price: "$259" },
    { name: "Stress Relief", price: "$189" },
    { name: "Brain Boost", price: "$209" },
    { name: "Migraine Relief", price: "$199" },
    { name: "Fertility Support", price: "$239" },
    { name: "Post-Workout Recovery", price: "$189" },
    { name: "Jet Lag Recovery", price: "$169" },
    { name: "Seasonal Allergy Relief", price: "$159" },
    { name: "Custom Formula", price: "From $249" },
  ]

  const addonPrices = [
    { name: "Vitamin B12 Boost", price: "$25" },
    { name: "Glutathione Push", price: "$35" },
    { name: "Extra Vitamin C", price: "$25" },
    { name: "Zinc Boost", price: "$20" },
    { name: "Anti-Nausea Medication", price: "$30" },
    { name: "Pain Reliever", price: "$30" },
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
                <CardTitle>{t("pricing.individual.addons")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {addonPrices.map((item, index) => (
                    <li key={index} className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-bold text-primary">{item.price}</span>
                    </li>
                  ))}
                </ul>
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
              <Button asChild>
                <Link href="/contact">{t("pricing.group.contactQuote")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("pricing.cta.title")}</h2>
            <p className="text-xl mb-8">{t("pricing.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <Link href="/book">{t("pricing.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
