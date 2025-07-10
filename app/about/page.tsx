"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t("about.mission.values.0.title"),
      description: t("about.mission.values.0.description"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t("about.mission.values.1.title"),
      description: t("about.mission.values.1.description"),
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t("about.mission.values.2.title"),
      description: t("about.mission.values.2.description"),
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t("about.mission.values.3.title"),
      description: t("about.mission.values.3.description"),
    },
  ]

  const teamMembers = [
    {
      name: t("about.team.members.0.name"),
      title: t("about.team.members.0.title"),
      credentials: t("about.team.members.0.credentials"),
      bio: t("about.team.members.0.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: t("about.team.members.1.name"),
      title: t("about.team.members.1.title"),
      credentials: t("about.team.members.1.credentials"),
      bio: t("about.team.members.1.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: t("about.team.members.2.name"),
      title: t("about.team.members.2.title"),
      credentials: t("about.team.members.2.credentials"),
      bio: t("about.team.members.2.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t("about.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.story.title")}</h2>
              {Array.isArray(t("about.story.content")) ? (
                t("about.story.content").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mb-4">{t("about.story.content")}</p>
              )}
              <Button asChild>
                <Link href="/book">{t("about.story.button")}</Link>
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="IVIQ Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.mission.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("about.mission.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 text-primary">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative h-[200px] w-[200px] mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical Certifications"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.certifications.title")}</h2>
              <p className="mb-6">{t("about.certifications.description")}</p>

              <ul className="space-y-4">
                {Array.isArray(t("about.certifications.items"))
                  ? t("about.certifications.items").map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.serviceAreas.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.serviceAreas.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Where We Serve</h3>
              <p className="mb-6">{t("about.serviceAreas.description")}</p>

              <ul className="space-y-2 mb-6">
                {Array.isArray(t("about.serviceAreas.locations"))
                  ? t("about.serviceAreas.locations").map((location, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{location}</span>
                      </li>
                    ))
                  : null}
              </ul>

              <p className="text-sm text-muted-foreground">{t("about.serviceAreas.note")}</p>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Service Area Map"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.cta.title")}</h2>
            <p className="text-xl mb-8">{t("about.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <Link href="/book">{t("about.cta.buttons.book")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact">{t("about.cta.buttons.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
