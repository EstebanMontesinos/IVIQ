"use client"

import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">IVIQ</h3>
            <p className="text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/iviq_wellness/"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/1234567890"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:underline">
                  {t("nav.book")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t("footer.information")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:underline">
                  {t("nav.benefits")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  {t("common.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/hipaa" className="hover:underline">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} IVIQ. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
