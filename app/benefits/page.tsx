"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function BenefitsPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("benefitsPage.title")}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t("benefitsPage.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("benefitsPage.keyBenefits.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("benefitsPage.keyBenefits.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(t("benefitsPage.keyBenefits.items"))
              ? t("benefitsPage.keyBenefits.items").map((benefit, index) => {
                  const benefitImages = [
                    "/images/100-percent-absorption.png", // 100% Absorption
                    "/images/patient-effects.jpg", // Immediate Effects
                    "/images/home-nurse.jpg", // Customized Treatment
                    "/images/health-clinic.jpg", // Preventative Health
                    "/images/nurse-portrait.jpg", // Convenience
                    "/images/professional-care.jpg", // Professional Administration
                  ]

                  return (
                    <Card key={index} className="flex flex-col">
                      <div className="relative h-[200px]">
                        <Image
                          src={benefitImages[index] || "/placeholder.svg?height=200&width=400"}
                          alt={benefit.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  )
                })
              : null}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("benefitsPage.howItWorks.title")}</h2>
              {Array.isArray(t("benefitsPage.howItWorks.description")) ? (
                t("benefitsPage.howItWorks.description").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mb-4">{t("benefitsPage.howItWorks.description")}</p>
              )}
              <div className="space-y-4">
                {Array.isArray(t("benefitsPage.howItWorks.steps"))
                  ? t("benefitsPage.howItWorks.steps").map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/rainbow-iv-bag.jpg"
                alt="How IV Therapy Works"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions That Benefit */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("benefitsPage.conditions.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("benefitsPage.conditions.subtitle")}</p>
          </div>

          <div className="mb-12 text-center">
            <div className="relative h-[300px] max-w-2xl mx-auto">
              <Image
                src="/images/elderly-patient-2.png"
                alt="Happy patient receiving IV therapy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(t("benefitsPage.conditions.items"))
              ? t("benefitsPage.conditions.items").map((condition, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{condition.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {Array.isArray(condition.benefits)
                          ? condition.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))
                          : null}
                      </ul>
                    </CardContent>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("benefitsPage.safety.title")}</h2>
              <p className="mb-4">{t("benefitsPage.safety.description")}</p>
              <ul className="space-y-4 mb-6">
                {Array.isArray(t("benefitsPage.safety.items"))
                  ? t("benefitsPage.safety.items").map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))
                  : null}
              </ul>
              <p className="text-muted-foreground">{t("benefitsPage.safety.note")}</p>
            </div>

            <div className="relative h-[400px] md:h-[500px] order-1 md:order-2">
              <Image
                src="/images/elderly-patient.jpg"
                alt="Professional IV Therapy Administration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("benefitsPage.cta.title")}</h2>
            <p className="text-xl mb-8">{t("benefitsPage.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <Link href="/book">{t("benefitsPage.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
