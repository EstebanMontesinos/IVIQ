"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("terms.title")}</h1>
            <p className="text-xl opacity-90">{t("terms.subtitle")}</p>
            <p className="text-sm mt-4 opacity-75">{t("terms.lastUpdated")}: January 8, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {/* Agreement to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.agreement.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.agreement.content1")}</p>
              <p className="text-muted-foreground">{t("terms.sections.agreement.content2")}</p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.services.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.services.content1")}</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>{t("terms.sections.services.list.item1")}</li>
                <li>{t("terms.sections.services.list.item2")}</li>
                <li>{t("terms.sections.services.list.item3")}</li>
                <li>{t("terms.sections.services.list.item4")}</li>
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div className="mb-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.medical.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.medical.content1")}</p>
              <p className="text-muted-foreground mb-4">{t("terms.sections.medical.content2")}</p>
              <p className="text-muted-foreground">{t("terms.sections.medical.content3")}</p>
            </div>

            {/* Booking and Cancellation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.booking.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.booking.content1")}</p>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {t("terms.sections.booking.cancellation.title")}
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>{t("terms.sections.booking.cancellation.item1")}</li>
                <li>{t("terms.sections.booking.cancellation.item2")}</li>
                <li>{t("terms.sections.booking.cancellation.item3")}</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.payment.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.payment.content1")}</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>{t("terms.sections.payment.list.item1")}</li>
                <li>{t("terms.sections.payment.list.item2")}</li>
                <li>{t("terms.sections.payment.list.item3")}</li>
                <li>{t("terms.sections.payment.list.item4")}</li>
              </ul>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.liability.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.liability.content1")}</p>
              <p className="text-muted-foreground mb-4">{t("terms.sections.liability.content2")}</p>
              <p className="text-muted-foreground">{t("terms.sections.liability.content3")}</p>
            </div>

            {/* Privacy and Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.privacy.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.privacy.content1")}</p>
              <p className="text-muted-foreground">{t("terms.sections.privacy.content2")}</p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.intellectual.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.intellectual.content1")}</p>
              <p className="text-muted-foreground">{t("terms.sections.intellectual.content2")}</p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.termination.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.termination.content1")}</p>
              <p className="text-muted-foreground">{t("terms.sections.termination.content2")}</p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.governing.title")}</h2>
              <p className="text-muted-foreground">{t("terms.sections.governing.content")}</p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.changes.title")}</h2>
              <p className="text-muted-foreground">{t("terms.sections.changes.content")}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("terms.sections.contact.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("terms.sections.contact.content")}</p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> legal@iviq.com
                </p>
                <p>
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Medical Plaza, Suite 100, Your City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t("terms.cta.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("terms.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book">{t("terms.cta.book")}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">{t("terms.cta.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
