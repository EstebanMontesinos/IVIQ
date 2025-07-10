"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
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
  const [isLoaded, setIsLoaded] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "es"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("language", language)
    }
  }, [language, isLoaded])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = dictionaries[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        value = dictionaries.en
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if not found in fallback
          }
        }
        break
      }
    }

    return typeof value === "string" ? value : key
  }

  // Don't render until language is loaded from localStorage
  if (!isLoaded) {
    return null
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
