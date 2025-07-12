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
    { name: t("pricing.individual.treatmentList.hangover"), price: "$3,200 MXN" },
    { name: t("pricing.individual.treatmentList.dehydration"), price: "$2,200 MXN" },
    { name: t("pricing.individual.treatmentList.foodPoisoning"), price: "$2,500 MXN" },
    { name: t("pricing.individual.treatmentList.myers"), price: "$2,400 MXN" },
    { name: t("pricing.individual.treatmentList.jetLag"), price: "$2,400 MXN" },
    { name: t("pricing.individual.treatmentList.energy"), price: "$2,500 MXN" },
    { name: t("pricing.individual.treatmentList.muscle"), price: "$2,600 MXN" },
    { name: t("pricing.individual.treatmentList.iron"), price: "$2,100 MXN" },
    { name: t("pricing.individual.treatmentList.nad"), price: "$3,200 MXN" },
    { name: t("pricing.individual.treatmentList.antiviral"), price: "$2,300 MXN" },
    { name: t("pricing.individual.treatmentList.immune"), price: "$2,600 MXN" },
    { name: t("pricing.individual.treatmentList.megaC"), price: "$2,300 MXN" },
    { name: t("pricing.individual.treatmentList.detox"), price: "$2,400 MXN" },
    { name: t("pricing.individual.treatmentList.heavyMetal"), price: "$2,600 MXN" },
    { name: t("pricing.individual.treatmentList.glutathione"), price: "$2,700 MXN" },
    { name: t("pricing.individual.treatmentList.antiInflammatory"), price: "$2,500 MXN" },
    { name: t("pricing.individual.treatmentList.rejuvenation"), price: "$2,700 MXN" },
    { name: t("pricing.individual.treatmentList.rejuvenationExtra"), price: "$3,000 MXN" },
  ]

  const addOns = [
    { name: t("services.addons.vitaminB12.name"), description: t("services.addons.vitaminB12.description") },
    { name: t("services.addons.glutathione.name"), description: t("services.addons.glutathione.description") },
    { name: t("services.addons.vitaminC.name"), description: t("services.addons.vitaminC.description") },
    { name: t("services.addons.zinc.name"), description: t("services.addons.zinc.description") },
    { name: t("services.addons.antiNausea.name"), description: t("services.addons.antiNausea.description") },
    { name: t("services.addons.painReliever.name"), description: t("services.addons.painReliever.description") },
    { name: t("services.addons.magnesium.name"), description: t("services.addons.magnesium.description") },
    { name: t("services.addons.biotin.name"), description: t("services.addons.biotin.description") },
    { name: t("pricing.individual.addons.aminoAcid"), description: t("pricing.individual.addons.aminoAcidDesc") },
    { name: t("pricing.individual.addons.electrolyte"), description: t("pricing.individual.addons.electrolyteDesc") },
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
                <CardDescription>{t("pricing.individual.treatmentsDesc")}</CardDescription>
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
                <CardTitle>{t("pricing.individual.addonsTitle")}</CardTitle>
                <CardDescription>{t("pricing.individual.addonsDesc")}</CardDescription>
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
                    <strong>{t("pricing.individual.note.title")}</strong> {t("pricing.individual.note.content")}
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
                <CardDescription>{t("pricing.group.discountsDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">{t("pricing.group.discount3to5")}</span>
                    <span className="font-bold text-primary">10% off</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">{t("pricing.group.discount6to10")}</span>
                    <span className="font-bold text-primary">15% off</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">{t("pricing.group.discount11plus")}</span>
                    <span className="font-bold text-primary">20% off</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">{t("pricing.group.discountNote")}</p>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-4">{t("pricing.group.corporate")}</h3>
              <p className="mb-6">{t("pricing.group.corporateDescription")}</p>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">{t("pricing.group.corporatePackages")}</h4>
                  <ul className="text-sm space-y-1">
                    <li>• {t("pricing.group.corporateList.monthly")}</li>
                    <li>• {t("pricing.group.corporateList.executive")}</li>
                    <li>• {t("pricing.group.corporateList.events")}</li>
                    <li>• {t("pricing.group.corporateList.custom")}</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.serviceAreas.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pricing.serviceAreas.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">{t("pricing.serviceAreas.free.title")}</CardTitle>
                <CardDescription>{t("pricing.serviceAreas.free.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• {t("pricing.serviceAreas.free.areas.downtown")}</li>
                  <li>• {t("pricing.serviceAreas.free.areas.hotels")}</li>
                  <li>• {t("pricing.serviceAreas.free.areas.business")}</li>
                  <li>• {t("pricing.serviceAreas.free.areas.residential")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">{t("pricing.serviceAreas.extended.title")}</CardTitle>
                <CardDescription>{t("pricing.serviceAreas.extended.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• {t("pricing.serviceAreas.extended.areas.distance")}</li>
                  <li>• {t("pricing.serviceAreas.extended.areas.suburban")}</li>
                  <li>• {t("pricing.serviceAreas.extended.areas.fee")}</li>
                  <li>• {t("pricing.serviceAreas.extended.areas.convenient")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">{t("pricing.serviceAreas.premium.title")}</CardTitle>
                <CardDescription>{t("pricing.serviceAreas.premium.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• {t("pricing.serviceAreas.premium.areas.distance")}</li>
                  <li>• {t("pricing.serviceAreas.premium.areas.remote")}</li>
                  <li>• {t("pricing.serviceAreas.premium.areas.events")}</li>
                  <li>• {t("pricing.serviceAreas.premium.areas.contact")}</li>
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
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.included.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.included.answer")}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">{t("pricing.faq.questions.addons.question")}</h3>
              <p className="text-muted-foreground">{t("pricing.faq.questions.addons.answer")}</p>
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
                <Link href="/contact">{t("pricing.cta.customQuote")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
