"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplets,
  Zap,
  Shield,
  Heart,
  Sparkles,
  Plus,
  CheckCircle,
  Flame,
  Leaf,
  Star,
  Brain,
  Dna,
  Pill,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const { t } = useLanguage()

  const treatments = [
    {
      id: "hangover-relief",
      name: t("services.formulas.hangover.title") || "IV Hangover Relief",
      description:
        t("services.formulas.hangover.description") ||
        "Revive and recover quickly from alcohol consumption. This therapy detoxifies your body, eliminates toxins, and effectively rehydrates, providing rapid relief from hangover symptoms.",
      price: t("services.formulas.hangover.price") || "$3,200 MXN",
      duration: t("services.formulas.hangover.duration") || "45-60 minutes",
      benefits: t("services.formulas.hangover.benefits") || [
        "Rapid rehydration and electrolyte restoration",
        "Complete elimination of acetaldehyde toxins",
        "Immediate relief from nausea and vomiting",
        "Significant reduction in headache and body aches",
        "Energy level restoration within 30 minutes",
        "Enhanced liver detoxification and recovery",
        "Prevention of prolonged hangover symptoms",
      ],
      ingredients: t("services.formulas.hangover.ingredients") || [
        "1000ml Normal Saline for rapid rehydration",
        "Ondansetron 4mg (anti-nausea medication)",
        "Ketorolac 30mg (anti-inflammatory pain relief)",
        "B-Complex Vitamins (B1, B2, B3, B5, B6)",
        "Magnesium Sulfate 2g (muscle relaxation)",
        "Zinc Sulfate 5mg (liver support)",
        "Thiamine 100mg (alcohol metabolism support)",
      ],
      icon: Zap,
      image: "/images/iv-bags/yellow.jpg", // Yellow for energy restoration
      popular: true,
    },
    {
      id: "dehydration-recovery",
      name: t("services.formulas.dehydration.title") || "IV Dehydration Recovery",
      description:
        t("services.formulas.dehydration.description") ||
        "Feel fresh and revitalized with rapid fluid replacement. Replenishes electrolytes, boosts energy, and improves your mood with this essential hydration therapy.",
      price: t("services.formulas.dehydration.price") || "$2,200 MXN",
      duration: t("services.formulas.dehydration.duration") || "30-45 minutes",
      benefits: t("services.formulas.dehydration.benefits") || [
        "Immediate fluid volume restoration (within 15 minutes)",
        "Complete electrolyte balance optimization",
        "Enhanced cellular hydration and function",
        "Improved cognitive function and mental clarity",
        "Increased energy levels and physical alertness",
        "Better mood regulation and emotional stability",
        "Optimized kidney and cardiovascular function",
      ],
      ingredients: t("services.formulas.dehydration.ingredients") || [
        "1000ml Lactated Ringer's Solution",
        "Sodium Chloride 154mEq/L (cellular hydration)",
        "Potassium Chloride 4mEq/L (muscle function)",
        "Magnesium Chloride 2mEq/L (enzyme activation)",
        "Calcium Gluconate 100mg (nerve function)",
        "B-Complex Vitamins for energy metabolism",
        "Dextrose 5% (immediate energy source)",
      ],
      icon: Droplets,
      image: "/images/iv-bags/transparent.jpg", // Clear for pure hydration
    },
    {
      id: "food-poisoning",
      name: t("services.formulas.foodPoisoning.title") || "IV Food Poisoning & Stomach Flu Recovery",
      description:
        t("services.formulas.foodPoisoning.description") ||
        "Accelerate recovery from gastrointestinal distress. This therapy helps heal the stomach lining and is ideal for treating food poisoning and all gastrointestinal symptoms.",
      price: t("services.formulas.foodPoisoning.price") || "$2,500 MXN",
      duration: t("services.formulas.foodPoisoning.duration") || "45-60 minutes",
      benefits: t("services.formulas.foodPoisoning.benefits") || [
        "Rapid nausea and vomiting relief (within 20 minutes)",
        "Stomach lining protection and accelerated healing",
        "Complete restoration of lost fluids and nutrients",
        "Enhanced digestive function and gut health",
        "Accelerated recovery time (50% faster)",
        "Prevention of severe dehydration complications",
        "Improved immune response to fight infections",
      ],
      ingredients: t("services.formulas.foodPoisoning.ingredients") || [
        "1000ml Normal Saline with electrolytes",
        "Ondansetron 8mg (potent anti-nausea)",
        "Famotidine 20mg (stomach acid reducer)",
        "B-Complex Vitamins (digestive support)",
        "Vitamin C 1000mg (immune support)",
        "Magnesium Sulfate 1g (muscle relaxation)",
        "Prochlorperazine 10mg (severe nausea relief)",
      ],
      icon: Shield,
      image: "/images/iv-bags/green.jpg", // Green for healing and recovery
    },
    {
      id: "myers-cocktail",
      name: t("services.formulas.myers.title") || "IV Myers Cocktail",
      description:
        t("services.formulas.myers.description") ||
        "The gold standard of IV therapy. This classic formula boosts red blood cell production, accelerates muscle recovery, improves sleep quality, and strengthens your immune system.",
      price: t("services.formulas.myers.price") || "$2,400 MXN",
      duration: t("services.formulas.myers.duration") || "45-60 minutes",
      benefits: t("services.formulas.myers.benefits") || [
        "Enhanced immune system function (40% improvement)",
        "Improved energy metabolism and ATP production",
        "Better sleep quality and REM cycle regulation",
        "Reduced muscle fatigue and faster recovery",
        "Increased red blood cell production and oxygen delivery",
        "Support for chronic fatigue syndrome symptoms",
        "Overall wellness and vitality enhancement",
      ],
      ingredients: t("services.formulas.myers.ingredients") || [
        "Magnesium Chloride 2-5g (muscle and nerve function)",
        "Calcium Gluconate 100-200mg (bone and muscle health)",
        "B-Complex Vitamins (energy metabolism)",
        "Vitamin B12 1000mcg (red blood cell production)",
        "Vitamin C 5-15g (immune and collagen support)",
        "Normal Saline 250-1000ml (hydration base)",
        "Pyridoxine 100mg (neurotransmitter synthesis)",
      ],
      icon: Star,
      image: "/images/iv-bags/blue.jpg", // Blue for comprehensive wellness
      popular: true,
    },
    {
      id: "energy-boost",
      name: t("services.formulas.energy.title") || "IV Energy Boost",
      description:
        t("services.formulas.energy.description") ||
        "Combat fatigue and low energy with a scientifically formulated blend of IV fluids, electrolytes, vitamins, and antioxidants designed to revitalize your body at the cellular level.",
      price: t("services.formulas.energy.price") || "$2,500 MXN",
      duration: t("services.formulas.energy.duration") || "45-60 minutes",
      benefits: t("services.formulas.energy.benefits") || [
        "Significant increase in energy levels (up to 8 hours)",
        "Enhanced mental clarity and cognitive focus",
        "Improved physical endurance and vigor",
        "Better mood regulation and motivation",
        "Optimized cellular energy production (ATP synthesis)",
        "Reduced chronic fatigue symptoms",
        "Enhanced exercise performance and recovery",
      ],
      ingredients: t("services.formulas.energy.ingredients") || [
        "Vitamin B12 5000mcg (methylcobalamin form)",
        "B-Complex Vitamins (thiamine, riboflavin, niacin)",
        "Taurine 500mg (cellular energy production)",
        "L-Carnitine 500mg (fat metabolism)",
        "CoQ10 100mg (mitochondrial function)",
        "Alpha-Lipoic Acid 300mg (antioxidant)",
        "Magnesium Sulfate 2g (enzyme cofactor)",
      ],
      icon: Zap,
      image: "/images/iv-bags/yellow.jpg", // Yellow for energy and vitality
    },
    {
      id: "muscle-recovery",
      name: t("services.formulas.muscle.title") || "IV Muscle Recovery",
      description:
        t("services.formulas.muscle.description") ||
        "Optimize athletic performance and recovery. This therapy enhances muscle regeneration, reduces inflammation, and includes essential amino acids and nutrients for peak fitness.",
      price: t("services.formulas.muscle.price") || "$2,600 MXN",
      duration: t("services.formulas.muscle.duration") || "60-75 minutes",
      benefits: t("services.formulas.muscle.benefits") || [
        "Accelerated muscle tissue repair (50% faster)",
        "Reduced exercise-induced inflammation",
        "Enhanced protein synthesis and muscle building",
        "Improved athletic performance and power output",
        "Faster recovery between intense training sessions",
        "Prevention of muscle breakdown (catabolism)",
        "Reduced delayed onset muscle soreness (DOMS)",
      ],
      ingredients: t("services.formulas.muscle.ingredients") || [
        "Branched-Chain Amino Acids (BCAAs) 10g",
        "L-Glutamine 5g (muscle repair)",
        "Creatine Monohydrate 3g (energy storage)",
        "Magnesium Sulfate 3g (muscle function)",
        "Vitamin C 2g (collagen synthesis)",
        "B-Complex Vitamins (protein metabolism)",
        "Zinc Sulfate 15mg (tissue repair)",
      ],
      icon: Heart,
      image: "/images/iv-bags/blue.jpg", // Blue for athletic performance
    },
    {
      id: "antiviral-defense",
      name: t("services.formulas.antiviral.title") || "IV Antiviral Defense",
      description:
        t("services.formulas.antiviral.description") ||
        "Strengthen your body's natural defense against viral infections. This powerful formula uses high-dose vitamin C and zinc to target pathogens and enhance immune response.",
      price: t("services.formulas.antiviral.price") || "$2,300 MXN",
      duration: t("services.formulas.antiviral.duration") || "60-75 minutes",
      benefits: t("services.formulas.antiviral.benefits") || [
        "Enhanced antiviral immune response (3x stronger)",
        "Reduced viral replication and viral load",
        "Shortened illness duration (2-3 days)",
        "Improved white blood cell function",
        "Powerful antioxidant protection against free radicals",
        "Support for respiratory health and function",
        "Prevention of secondary bacterial infections",
      ],
      ingredients: t("services.formulas.antiviral.ingredients") || [
        "High-Dose Vitamin C 10-25g (immune enhancement)",
        "Zinc Sulfate 15mg (antiviral properties)",
        "Glutathione 1200mg (master antioxidant)",
        "Selenium 200mcg (immune function)",
        "B-Complex Vitamins (cellular energy)",
        "Magnesium Sulfate 2g (enzyme function)",
        "Lysine 1g (viral replication inhibitor)",
      ],
      icon: Shield,
      image: "/images/iv-bags/green.jpg", // Green for immune defense
    },
    {
      id: "immune-shield",
      name: t("services.formulas.immune.title") || "IV Immune Shield",
      description:
        t("services.formulas.immune.description") ||
        "Comprehensive immune system support with essential nutrients. This therapy strengthens your body's defenses, helping you recover from infections while promoting long-term wellness.",
      price: t("services.formulas.immune.price") || "$2,600 MXN",
      duration: t("services.formulas.immune.duration") || "45-60 minutes",
      benefits: t("services.formulas.immune.benefits") || [
        "Strengthened immune system function (60% improvement)",
        "Enhanced antibody production and response",
        "Improved resistance to infections",
        "Faster recovery from colds, flu, and viruses",
        "Reduced oxidative stress and inflammation",
        "Long-term immune health maintenance",
        "Better management of seasonal allergies",
      ],
      ingredients: t("services.formulas.immune.ingredients") || [
        "Vitamin C 5-10g (immune cell activation)",
        "Zinc Sulfate 10mg (immune function)",
        "Glutathione 600mg (cellular protection)",
        "B-Complex Vitamins (immune cell energy)",
        "Selenium 100mcg (antioxidant enzyme)",
        "Vitamin D3 5000 IU (immune regulation)",
        "Magnesium Chloride 2g (immune cell function)",
      ],
      icon: Shield,
      image: "/images/iv-bags/blue.jpg", // Blue for immune protection
    },
    {
      id: "mega-vitamin-c",
      name: t("services.formulas.megaC.title") || "IV Megadose Vitamin C",
      description:
        t("services.formulas.megaC.description") ||
        "High-dose vitamin C therapy for maximum immune support and detoxification. This treatment acts as a powerful antioxidant, promoting cellular repair and enhancing overall vitality.",
      price: t("services.formulas.megaC.price") || "$2,300 MXN",
      duration: t("services.formulas.megaC.duration") || "60-90 minutes",
      benefits: t("services.formulas.megaC.benefits") || [
        "Maximum antioxidant protection (10x normal levels)",
        "Enhanced collagen synthesis for skin and joints",
        "Boosted immune system function",
        "Powerful cellular detoxification",
        "Anti-aging effects at the cellular level",
        "Support for cancer treatment recovery",
        "Enhanced wound healing and tissue repair",
      ],
      ingredients: t("services.formulas.megaC.ingredients") || [
        "High-Dose Vitamin C 25-50g (maximum therapeutic dose)",
        "Magnesium Chloride 3g (vitamin C cofactor)",
        "Calcium Gluconate 200mg (cellular stability)",
        "B-Complex Vitamins (cellular energy)",
        "Glutathione 600mg (antioxidant synergy)",
        "Normal Saline 1000ml (dilution and hydration)",
      ],
      icon: Sparkles,
      image: "/images/iv-bags/yellow.jpg", // Yellow for high-dose vitamin C
    },
    {
      id: "detox-therapy",
      name: t("services.formulas.detox.title") || "IV Full Body Detox",
      description:
        t("services.formulas.detox.description") ||
        "Comprehensive cellular detoxification to eliminate harmful toxins. This therapy enhances liver function, boosts your immune system, and restores your body's natural balance.",
      price: t("services.formulas.detox.price") || "$2,400 MXN",
      duration: t("services.formulas.detox.duration") || "60-75 minutes",
      benefits: t("services.formulas.detox.benefits") || [
        "Enhanced liver detoxification (Phase I & II pathways)",
        "Elimination of free radicals and toxins",
        "Improved cellular energy production",
        "Better skin health and radiant appearance",
        "Reduced inflammatory markers (CRP, IL-6)",
        "Optimized metabolic function",
        "Enhanced mental clarity and focus",
      ],
      ingredients: t("services.formulas.detox.ingredients") || [
        "Glutathione 1200mg (master detoxifier)",
        "Alpha-Lipoic Acid 300mg (universal antioxidant)",
        "Vitamin C 5g (immune and detox support)",
        "B-Complex Vitamins (liver metabolism)",
        "Magnesium Sulfate 2g (enzyme activation)",
        "Selenium 200mcg (glutathione recycling)",
        "N-Acetylcysteine 600mg (glutathione precursor)",
      ],
      icon: Leaf,
      image: "/images/iv-bags/green.jpg", // Green for detoxification
    },
    {
      id: "heavy-metal-cleanse",
      name: t("services.formulas.heavyMetal.title") || "IV Heavy Metal Cleanse",
      description:
        t("services.formulas.heavyMetal.description") ||
        "Specialized chelation therapy to remove heavy metals and environmental toxins. This treatment improves circulation, reduces inflammation, and supports overall health.",
      price: t("services.formulas.heavyMetal.price") || "$2,600 MXN",
      duration: t("services.formulas.heavyMetal.duration") || "75-90 minutes",
      benefits: t("services.formulas.heavyMetal.benefits") || [
        "Removal of lead, mercury, cadmium, and arsenic",
        "Improved cardiovascular health and circulation",
        "Enhanced cognitive function and memory",
        "Reduced oxidative stress and inflammation",
        "Better circulation and blood flow",
        "Support for neurological health",
        "Improved energy and vitality",
      ],
      ingredients: t("services.formulas.heavyMetal.ingredients") || [
        "EDTA 1-3g (heavy metal chelation)",
        "Glutathione 1500mg (cellular protection)",
        "Vitamin C 10g (antioxidant support)",
        "Alpha-Lipoic Acid 600mg (metal binding)",
        "Selenium 300mcg (mercury protection)",
        "B-Complex Vitamins (nervous system support)",
        "Magnesium Sulfate 3g (cardiovascular support)",
      ],
      icon: Shield,
      image: "/images/iv-bags/green.jpg", // Green for cleansing
    },
    {
      id: "glutathione-glow",
      name: t("services.formulas.glutathione.title") || "IV Glutathione Glow",
      description:
        t("services.formulas.glutathione.description") ||
        "Master antioxidant therapy for cellular detoxification and radiant skin. This treatment boosts immunity, reduces oxidative stress, and enhances your natural glow from within.",
      price: t("services.formulas.glutathione.price") || "$2,700 MXN",
      duration: t("services.formulas.glutathione.duration") || "45-60 minutes",
      benefits: t("services.formulas.glutathione.benefits") || [
        "Skin lightening and brightening effects (visible in 3-5 sessions)",
        "Powerful cellular detoxification",
        "Enhanced immune system function",
        "Reduced signs of aging and wrinkles",
        "Improved skin elasticity and texture",
        "Protection against UV damage",
        "Enhanced liver function and detoxification",
      ],
      ingredients: t("services.formulas.glutathione.ingredients") || [
        "High-Dose Glutathione 1500mg (reduced form)",
        "Vitamin C 5g (glutathione recycling)",
        "Biotin 10mg (skin and hair health)",
        "B-Complex Vitamins (cellular energy)",
        "Alpha-Lipoic Acid 300mg (antioxidant)",
        "Selenium 200mcg (glutathione enzyme)",
      ],
      icon: Sparkles,
      image: "/images/iv-bags/purple.jpg", // Purple for beauty and glow
      popular: true,
    },
    {
      id: "anti-inflammatory",
      name: t("services.formulas.antiInflammatory.title") || "IV Anti-Inflammatory",
      description:
        t("services.formulas.antiInflammatory.description") ||
        "Advanced inflammation reduction therapy combining turmeric, glutathione, and targeted nutrients to combat oxidative stress and support tissue repair for chronic and acute conditions.",
      price: t("services.formulas.antiInflammatory.price") || "$2,500 MXN",
      duration: t("services.formulas.antiInflammatory.duration") || "60-75 minutes",
      benefits: t("services.formulas.antiInflammatory.benefits") || [
        "Significant inflammation reduction (CRP levels drop 40-60%)",
        "Pain relief for chronic conditions (arthritis, fibromyalgia)",
        "Enhanced tissue repair and healing",
        "Improved joint mobility and flexibility",
        "Reduced inflammatory markers throughout the body",
        "Support for autoimmune conditions",
        "Better exercise recovery and performance",
      ],
      ingredients: t("services.formulas.antiInflammatory.ingredients") || [
        "Turmeric 500mg (potent anti-inflammatory)",
        "Glutathione 1000mg (oxidative stress reduction)",
        "Vitamin C 5g (collagen synthesis)",
        "Magnesium Sulfate 2g (muscle relaxation)",
        "Quercetin 250mg (natural antihistamine)",
        "B-Complex Vitamins (cellular repair)",
        "Omega-3 Fatty Acids 1g (inflammation resolution)",
      ],
      icon: Flame,
      image: "/images/iv-bags/green.jpg", // Green for healing inflammation
    },
    {
      id: "jet-lag-reset",
      name: t("services.formulas.jetLag.title") || "IV Jet Lag Reset",
      description:
        t("services.formulas.jetLag.description") ||
        "Restore your natural circadian rhythm quickly and effectively. This specialized therapy contains melatonin, vitamins, and relaxants to help reset your sleep cycle after traveling.",
      price: t("services.formulas.jetLag.price") || "$2,400 MXN",
      duration: t("services.formulas.jetLag.duration") || "45-60 minutes",
      benefits: t("services.formulas.jetLag.benefits") || [
        "Rapid sleep cycle adjustment (1-2 days vs 1 week)",
        "Reduced travel fatigue and exhaustion",
        "Improved sleep quality and duration",
        "Enhanced daytime mental alertness",
        "Faster adaptation to new time zones",
        "Reduced travel anxiety and stress",
        "Better mood regulation and emotional balance",
      ],
      ingredients: t("services.formulas.jetLag.ingredients") || [
        "Melatonin 3mg (circadian rhythm regulation)",
        "B-Complex Vitamins (energy metabolism)",
        "Magnesium Glycinate 400mg (sleep quality)",
        "L-Theanine 200mg (relaxation without sedation)",
        "Vitamin D3 5000 IU (circadian clock)",
        "GABA 500mg (nervous system calming)",
        "Electrolyte blend (hydration balance)",
      ],
      icon: Brain,
      image: "/images/iv-bags/purple.jpg", // Purple for sleep and relaxation
    },
    {
      id: "iron-recharge",
      name: t("services.formulas.iron.title") || "IV Iron Recharge",
      description:
        t("services.formulas.iron.description") ||
        "Combat iron deficiency anemia and chronic fatigue. This therapy safely boosts iron levels, enhances red blood cell production, and improves oxygen delivery throughout your body.",
      price: t("services.formulas.iron.price") || "$2,100 MXN",
      duration: t("services.formulas.iron.duration") || "60-90 minutes",
      benefits: t("services.formulas.iron.benefits") || [
        "Increased hemoglobin levels (2-3g/dL improvement)",
        "Enhanced oxygen transport and delivery",
        "Reduced fatigue and weakness (within 1-2 weeks)",
        "Improved exercise tolerance and endurance",
        "Better cognitive function and concentration",
        "Support for healthy pregnancy",
        "Enhanced immune system function",
      ],
      ingredients: t("services.formulas.iron.ingredients") || [
        "Iron Sucrose 200mg (bioavailable iron)",
        "Vitamin C 1g (iron absorption enhancer)",
        "Vitamin B12 1000mcg (red blood cell formation)",
        "Folate 5mg (DNA synthesis)",
        "B-Complex Vitamins (hematopoiesis)",
        "Magnesium Sulfate 1g (enzyme cofactor)",
      ],
      icon: Pill,
      image: "/images/iv-bags/blue.jpg", // Blue for blood and circulation
    },
    {
      id: "nad-revival",
      name: t("services.formulas.nad.title") || "IV NAD+ Revival",
      description:
        t("services.formulas.nad.description") ||
        "Cutting-edge anti-aging therapy that provides cellular energy at the mitochondrial level. NAD+ supports DNA repair, metabolic regulation, and neurological function.",
      price: t("services.formulas.nad.price") || "$3,200 MXN",
      duration: t("services.formulas.nad.duration") || "2-4 hours",
      benefits: t("services.formulas.nad.benefits") || [
        "Enhanced cellular energy production (mitochondrial function)",
        "Improved cognitive function and mental clarity",
        "DNA repair and anti-aging effects",
        "Better metabolism and weight management",
        "Increased physical endurance and vigor",
        "Support for addiction recovery",
        "Enhanced longevity and healthspan",
      ],
      ingredients: t("services.formulas.nad.ingredients") || [
        "NAD+ 250-500mg (cellular energy coenzyme)",
        "B-Complex Vitamins (NAD+ synthesis)",
        "Magnesium Chloride 2g (enzyme function)",
        "Amino Acid blend (protein synthesis)",
        "Vitamin C 2g (antioxidant protection)",
        "Normal Saline 1000ml (slow infusion base)",
      ],
      icon: Dna,
      image: "/images/iv-bags/purple.jpg", // Purple for advanced anti-aging
    },
    {
      id: "rejuvenation",
      name: t("services.formulas.rejuvenation.title") || "IV All-Inclusive Rejuvenation",
      description:
        t("services.formulas.rejuvenation.description") ||
        "Comprehensive wellness therapy with a powerful blend of vitamins, minerals, and antioxidants. This treatment promotes cellular regeneration, boosts collagen, and enhances overall vitality.",
      price: t("services.formulas.rejuvenation.price") || "$2,700 MXN",
      duration: t("services.formulas.rejuvenation.duration") || "75-90 minutes",
      benefits: t("services.formulas.rejuvenation.benefits") || [
        "Complete nutritional optimization",
        "Enhanced skin health and youthful appearance",
        "Improved overall energy and vitality",
        "Stronger hair and nails",
        "Better immune system function",
        "Enhanced mental clarity and mood",
        "Overall wellness and longevity support",
      ],
      ingredients: t("services.formulas.rejuvenation.ingredients") || [
        "Comprehensive multivitamin blend (A, D, E, K, B-complex)",
        "Glutathione 800mg (cellular protection)",
        "Vitamin C 10g (collagen synthesis)",
        "Biotin 10mg (hair, skin, nails)",
        "Zinc Sulfate 15mg (tissue repair)",
        "Magnesium Sulfate 2g (muscle function)",
        "Trace mineral blend (selenium, chromium, manganese)",
      ],
      icon: Sparkles,
      image: "/images/iv-bags/purple.jpg", // Purple for beauty and rejuvenation
    },
    {
      id: "rejuvenation-extra",
      name: t("services.formulas.rejuvenationExtra.title") || "IV All-Inclusive Rejuvenation (Extra Strength)",
      description:
        t("services.formulas.rejuvenationExtra.description") ||
        "The ultimate wellness experience with maximum-dose nutrients. This premium therapy amplifies all rejuvenation benefits, maximizing hydration, cellular repair, and anti-aging effects.",
      price: t("services.formulas.rejuvenationExtra.price") || "$3,000 MXN",
      duration: t("services.formulas.rejuvenationExtra.duration") || "90-120 minutes",
      benefits: t("services.formulas.rejuvenationExtra.benefits") || [
        "Maximum anti-aging effects (cellular level)",
        "Superior skin rejuvenation and glow",
        "Optimal cellular regeneration and repair",
        "Enhanced collagen production (visible results)",
        "Peak energy levels and vitality",
        "Comprehensive wellness optimization",
        "Premium longevity and healthspan support",
      ],
      ingredients: t("services.formulas.rejuvenationExtra.ingredients") || [
        "High-dose multivitamin complex (therapeutic levels)",
        "Glutathione 1500mg (maximum antioxidant)",
        "Vitamin C 25g (megadose therapy)",
        "Biotin 20mg (beauty enhancement)",
        "Collagen Peptides 5g (skin elasticity)",
        "CoQ10 200mg (cellular energy)",
        "Alpha-Lipoic Acid 600mg (universal antioxidant)",
        "Premium mineral blend (optimized ratios)",
      ],
      icon: Star,
      image: "/images/iv-bags/purple.jpg", // Purple for premium beauty treatment
      popular: true,
    },
  ]

  const addOns = [
    {
      name: t("services.addons.vitaminB12.name") || "Vitamin B12 Boost",
      description: t("services.addons.vitaminB12.description") || "Enhanced energy and metabolism support",
    },
    {
      name: t("services.addons.glutathione.name") || "Glutathione Push",
      description: t("services.addons.glutathione.description") || "Master antioxidant for detoxification",
    },
    {
      name: t("services.addons.vitaminC.name") || "Extra Vitamin C",
      description: t("services.addons.vitaminC.description") || "Additional immune system support",
    },
    {
      name: t("services.addons.zinc.name") || "Zinc Boost",
      description: t("services.addons.zinc.description") || "Immune function and wound healing",
    },
    {
      name: t("services.addons.antiNausea.name") || "Anti-Nausea Medication",
      description: t("services.addons.antiNausea.description") || "Relief from nausea and vomiting",
    },
    {
      name: t("services.addons.painReliever.name") || "Pain Reliever",
      description: t("services.addons.painReliever.description") || "Anti-inflammatory pain management",
    },
    {
      name: t("services.addons.magnesium.name") || "Magnesium Boost",
      description: t("services.addons.magnesium.description") || "Muscle relaxation and nerve function",
    },
    {
      name: t("services.addons.biotin.name") || "Biotin Beauty Boost",
      description: t("services.addons.biotin.description") || "Hair, skin, and nail health",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.title") || "Our IV Therapy Services"}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("services.subtitle") ||
                "Discover our comprehensive range of premium mobile IV therapy treatments designed to enhance your health and wellness."}
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("treatments.title") || "Our Complete Treatment Menu"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("treatments.subtitle") ||
                "Customized IV therapy treatments to meet your specific health and wellness needs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => {
              const IconComponent = treatment.icon
              return (
                <Card
                  key={treatment.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  {treatment.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500">
                      {t("common.popular") || "Popular"}
                    </Badge>
                  )}

                  {/* Treatment Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 bg-white/90 rounded-lg backdrop-blur-sm shadow-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl">{treatment.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="font-semibold text-primary text-lg">{treatment.price}</span>
                      <span>{treatment.duration}</span>
                    </div>
                    <CardDescription className="text-gray-600 line-clamp-3">{treatment.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t("services.keyIngredients") || "Key Ingredients"}:
                        </h4>
                        <ul className="space-y-1">
                          {Array.isArray(treatment.ingredients)
                            ? treatment.ingredients.slice(0, 3).map((ingredient, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0 mt-2" />
                                  {ingredient}
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {t("services.benefits") || "Key Benefits"}:
                        </h4>
                        <ul className="space-y-1">
                          {Array.isArray(treatment.benefits)
                            ? treatment.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 flex-shrink-0 mt-2" />
                                  {benefit}
                                </li>
                              ))
                            : null}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <Button className="w-full" asChild>
                        <Link href="/book">{t("services.bookThis") || "Book This Treatment"}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">{t("common.pricing") || "View Pricing"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.addons.title") || "Optional Add-ons"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.addons.subtitle") || "Enhance your IV therapy experience with these beneficial add-ons."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Plus className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.process.title") || "How It Works"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.process.subtitle") || "Simple steps to get your IV therapy treatment"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step1.title") || "Book Online"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step1.description") ||
                  "Choose your treatment and schedule your appointment online"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step2.title") || "We Come to You"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step2.description") ||
                  "Our licensed professionals arrive at your location with all equipment"}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("services.process.step3.title") || "Relax & Recover"}</h3>
              <p className="text-muted-foreground">
                {t("services.process.step3.description") ||
                  "Relax while receiving your personalized IV therapy treatment"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("services.cta.title") || "Ready to Experience the Benefits?"}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("services.cta.subtitle") || "Book your mobile IV therapy session today and start feeling better."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-primary">
                <Link href="/book">{t("services.bookNow") || "Book Now"}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/pricing">{t("common.pricing") || "View Pricing"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
