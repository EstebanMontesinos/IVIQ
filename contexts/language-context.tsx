"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Import dictionaries
import enDict from "@/dictionaries/en.json"
import esDict from "@/dictionaries/es.json"

const dictionaries = {
  en: enDict,
  es: esDict,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Load language from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["en", "es"].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      }
      setIsHydrated(true)
    }
  }, [])

  // Save language to localStorage when it changes (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined" && isHydrated) {
      localStorage.setItem("language", language)
    }
  }, [language, isHydrated])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  // Enhanced translation function that handles nested objects and arrays
  const t = (key: string): any => {
    const keys = key.split(".")
    let value: any = dictionaries[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        let fallbackValue: any = dictionaries.en
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === "object" && fallbackKey in fallbackValue) {
            fallbackValue = fallbackValue[fallbackKey]
          } else {
            return key // Return key if not found in fallback
          }
        }
        return fallbackValue
      }
    }

    return value !== undefined ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
