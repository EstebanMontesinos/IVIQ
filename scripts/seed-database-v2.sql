-- Seed database with updated MXN pricing for IV therapy services
-- This script populates the services table with comprehensive IV therapy treatments

-- Clear existing data
DELETE FROM services;

-- Insert IV therapy services with new MXN pricing
INSERT INTO services (name, description, price, duration, category, ingredients, benefits, is_active) VALUES

-- Hangover and Recovery Services
('IV Hangover Relief', 'Revive and recover quickly from alcohol consumption. This therapy detoxifies your body, eliminates toxins, and effectively rehydrates, providing rapid relief from hangover symptoms.', 3200.00, 60, 'recovery', 
'["1000ml Normal Saline for rapid rehydration", "Ondansetron 4mg (anti-nausea medication)", "Ketorolac 30mg (anti-inflammatory pain relief)", "B-Complex Vitamins (B1, B2, B3, B5, B6)", "Magnesium Sulfate 2g (muscle relaxation)", "Zinc Sulfate 5mg (liver support)", "Thiamine 100mg (alcohol metabolism support)"]',
'["Rapid rehydration and electrolyte restoration", "Complete elimination of acetaldehyde toxins", "Immediate relief from nausea and vomiting", "Significant reduction in headache and body aches", "Energy level restoration within 30 minutes", "Enhanced liver detoxification and recovery", "Prevention of prolonged hangover symptoms"]', true),

('IV Dehydration Recovery', 'Feel fresh and revitalized with rapid fluid replacement. Replenishes electrolytes, boosts energy, and improves your mood with this essential hydration therapy.', 2200.00, 45, 'hydration',
'["1000ml Lactated Ringer''s Solution", "Sodium Chloride 154mEq/L (cellular hydration)", "Potassium Chloride 4mEq/L (muscle function)", "Magnesium Chloride 2mEq/L (enzyme activation)", "Calcium Gluconate 100mg (nerve function)", "B-Complex Vitamins for energy metabolism", "Dextrose 5% (immediate energy source)"]',
'["Immediate fluid volume restoration (within 15 minutes)", "Complete electrolyte balance optimization", "Enhanced cellular hydration and function", "Improved cognitive function and mental clarity", "Increased energy levels and physical alertness", "Better mood regulation and emotional stability", "Optimized kidney and cardiovascular function"]', true),

('IV Food Poisoning & Stomach Flu Recovery', 'Accelerate recovery from gastrointestinal distress. This therapy helps heal the stomach lining and is ideal for treating food poisoning and all gastrointestinal symptoms.', 2500.00, 60, 'recovery',
'["1000ml Normal Saline with electrolytes", "Ondansetron 8mg (potent anti-nausea)", "Famotidine 20mg (stomach acid reducer)", "B-Complex Vitamins (digestive support)", "Vitamin C 1000mg (immune support)", "Magnesium Sulfate 1g (muscle relaxation)", "Prochlorperazine 10mg (severe nausea relief)"]',
'["Rapid nausea and vomiting relief (within 20 minutes)", "Stomach lining protection and accelerated healing", "Complete restoration of lost fluids and nutrients", "Enhanced digestive function and gut health", "Accelerated recovery time (50% faster)", "Prevention of severe dehydration complications", "Improved immune response to fight infections"]', true),

-- Classic and Energy Services
('IV Myers Cocktail', 'The gold standard of IV therapy. This classic formula boosts red blood cell production, accelerates muscle recovery, improves sleep quality, and strengthens your immune system.', 2400.00, 60, 'wellness',
'["Magnesium Chloride 2-5g (muscle and nerve function)", "Calcium Gluconate 100-200mg (bone and muscle health)", "B-Complex Vitamins (energy metabolism)", "Vitamin B12 1000mcg (red blood cell production)", "Vitamin C 5-15g (immune and collagen support)", "Normal Saline 250-1000ml (hydration base)", "Pyridoxine 100mg (neurotransmitter synthesis)"]',
'["Enhanced immune system function (40% improvement)", "Improved energy metabolism and ATP production", "Better sleep quality and REM cycle regulation", "Reduced muscle fatigue and faster recovery", "Increased red blood cell production and oxygen delivery", "Support for chronic fatigue syndrome symptoms", "Overall wellness and vitality enhancement"]', true),

('IV Jet Lag Reset', 'Restore your natural circadian rhythm quickly and effectively. This specialized therapy contains melatonin, vitamins, and relaxants to help reset your sleep cycle after traveling.', 2400.00, 60, 'wellness',
'["Melatonin 3mg (circadian rhythm regulation)", "B-Complex Vitamins (energy metabolism)", "Magnesium Glycinate 400mg (sleep quality)", "L-Theanine 200mg (relaxation without sedation)", "Vitamin D3 5000 IU (circadian clock)", "GABA 500mg (nervous system calming)", "Electrolyte blend (hydration balance)"]',
'["Rapid sleep cycle adjustment (1-2 days vs 1 week)", "Reduced travel fatigue and exhaustion", "Improved sleep quality and duration", "Enhanced daytime mental alertness", "Faster adaptation to new time zones", "Reduced travel anxiety and stress", "Better mood regulation and emotional balance"]', true),

('IV Energy Boost', 'Combat fatigue and low energy with a scientifically formulated blend of IV fluids, electrolytes, vitamins, and antioxidants designed to revitalize your body at the cellular level.', 2500.00, 60, 'energy',
'["Vitamin B12 5000mcg (methylcobalamin form)", "B-Complex Vitamins (thiamine, riboflavin, niacin)", "Taurine 500mg (cellular energy production)", "L-Carnitine 500mg (fat metabolism)", "CoQ10 100mg (mitochondrial function)", "Alpha-Lipoic Acid 300mg (antioxidant)", "Magnesium Sulfate 2g (enzyme cofactor)"]',
'["Significant increase in energy levels (up to 8 hours)", "Enhanced mental clarity and cognitive focus", "Improved physical endurance and vigor", "Better mood regulation and motivation", "Optimized cellular energy production (ATP synthesis)", "Reduced chronic fatigue symptoms", "Enhanced exercise performance and recovery"]', true),

('IV Muscle Recovery', 'Optimize athletic performance and recovery. This therapy enhances muscle regeneration, reduces inflammation, and includes essential amino acids and nutrients for peak fitness.', 2600.00, 75, 'athletic',
'["Branched-Chain Amino Acids (BCAAs) 10g", "L-Glutamine 5g (muscle repair)", "Creatine Monohydrate 3g (energy storage)", "Magnesium Sulfate 3g (muscle function)", "Vitamin C 2g (collagen synthesis)", "B-Complex Vitamins (protein metabolism)", "Zinc Sulfate 15mg (tissue repair)"]',
'["Accelerated muscle tissue repair (50% faster)", "Reduced exercise-induced inflammation", "Enhanced protein synthesis and muscle building", "Improved athletic performance and power output", "Faster recovery between intense training sessions", "Prevention of muscle breakdown (catabolism)", "Reduced delayed onset muscle soreness (DOMS)"]', true),

('IV Iron Recharge', 'Combat iron deficiency anemia and chronic fatigue. This therapy safely boosts iron levels, enhances red blood cell production, and improves oxygen delivery throughout your body.', 2100.00, 90, 'wellness',
'["Iron Sucrose 200mg (bioavailable iron)", "Vitamin C 1g (iron absorption enhancer)", "Vitamin B12 1000mcg (red blood cell formation)", "Folate 5mg (DNA synthesis)", "B-Complex Vitamins (hematopoiesis)", "Magnesium Sulfate 1g (enzyme cofactor)"]',
'["Increased hemoglobin levels (2-3g/dL improvement)", "Enhanced oxygen transport and delivery", "Reduced fatigue and weakness (within 1-2 weeks)", "Improved exercise tolerance and endurance", "Better cognitive function and concentration", "Support for healthy pregnancy", "Enhanced immune system function"]', true),

('IV NAD+ Revival', 'Cutting-edge anti-aging therapy that provides cellular energy at the mitochondrial level. NAD+ supports DNA repair, metabolic regulation, and neurological function.', 3200.00, 240, 'anti-aging',
'["NAD+ 250-500mg (cellular energy coenzyme)", "B-Complex Vitamins (NAD+ synthesis)", "Magnesium Chloride 2g (enzyme function)", "Amino Acid blend (protein synthesis)", "Vitamin C 2g (antioxidant protection)", "Normal Saline 1000ml (slow infusion base)"]',
'["Enhanced cellular energy production (mitochondrial function)", "Improved cognitive function and mental clarity", "DNA repair and anti-aging effects", "Better metabolism and weight management", "Increased physical endurance and vigor", "Support for addiction recovery", "Enhanced longevity and healthspan"]', true),

-- Immune Support Services
('IV Antiviral Defense', 'Strengthen your body''s natural defense against viral infections. This powerful formula uses high-dose vitamin C and zinc to target pathogens and enhance immune response.', 2300.00, 75, 'immune',
'["High-Dose Vitamin C 10-25g (immune enhancement)", "Zinc Sulfate 15mg (antiviral properties)", "Glutathione 1200mg (master antioxidant)", "Selenium 200mcg (immune function)", "B-Complex Vitamins (cellular energy)", "Magnesium Sulfate 2g (enzyme function)", "Lysine 1g (viral replication inhibitor)"]',
'["Enhanced antiviral immune response (3x stronger)", "Reduced viral replication and viral load", "Shortened illness duration (2-3 days)", "Improved white blood cell function", "Powerful antioxidant protection against free radicals", "Support for respiratory health and function", "Prevention of secondary bacterial infections"]', true),

('IV Immune Shield', 'Comprehensive immune system support with essential nutrients. This therapy strengthens your body''s defenses, helping you recover from infections while promoting long-term wellness.', 2600.00, 60, 'immune',
'["Vitamin C 5-10g (immune cell activation)", "Zinc Sulfate 10mg (immune function)", "Glutathione 600mg (cellular protection)", "B-Complex Vitamins (immune cell energy)", "Selenium 100mcg (antioxidant enzyme)", "Vitamin D3 5000 IU (immune regulation)", "Magnesium Chloride 2g (immune cell function)"]',
'["Strengthened immune system function (60% improvement)", "Enhanced antibody production and response", "Improved resistance to infections", "Faster recovery from colds, flu, and viruses", "Reduced oxidative stress and inflammation", "Long-term immune health maintenance", "Better management of seasonal allergies"]', true),

('IV Megadose Vitamin C', 'High-dose vitamin C therapy for maximum immune support and detoxification. This treatment acts as a powerful antioxidant, promoting cellular repair and enhancing overall vitality.', 2300.00, 90, 'immune',
'["High-Dose Vitamin C 25-50g (maximum therapeutic dose)", "Magnesium Chloride 3g (vitamin C cofactor)", "Calcium Gluconate 200mg (cellular stability)", "B-Complex Vitamins (cellular energy)", "Glutathione 600mg (antioxidant synergy)", "Normal Saline 1000ml (dilution and hydration)"]',
'["Maximum antioxidant protection (10x normal levels)", "Enhanced collagen synthesis for skin and joints", "Boosted immune system function", "Powerful cellular detoxification", "Anti-aging effects at the cellular level", "Support for cancer treatment recovery", "Enhanced wound healing and tissue repair"]', true),

-- Detox and Beauty Services
('IV Full Body Detox', 'Comprehensive cellular detoxification to eliminate harmful toxins. This therapy enhances liver function, boosts your immune system, and restores your body''s natural balance.', 2400.00, 75, 'detox',
'["Glutathione 1200mg (master detoxifier)", "Alpha-Lipoic Acid 300mg (universal antioxidant)", "Vitamin C 5g (immune and detox support)", "B-Complex Vitamins (liver metabolism)", "Magnesium Sulfate 2g (enzyme activation)", "Selenium 200mcg (glutathione recycling)", "N-Acetylcysteine 600mg (glutathione precursor)"]',
'["Enhanced liver detoxification (Phase I & II pathways)", "Elimination of free radicals and toxins", "Improved cellular energy production", "Better skin health and radiant appearance", "Reduced inflammatory markers (CRP, IL-6)", "Optimized metabolic function", "Enhanced mental clarity and focus"]', true),

('IV Heavy Metal Cleanse', 'Specialized chelation therapy to remove heavy metals and environmental toxins. This treatment improves circulation, reduces inflammation, and supports overall health.', 2600.00, 90, 'detox',
'["EDTA 1-3g (heavy metal chelation)", "Glutathione 1500mg (cellular protection)", "Vitamin C 10g (antioxidant support)", "Alpha-Lipoic Acid 600mg (metal binding)", "Selenium 300mcg (mercury protection)", "B-Complex Vitamins (nervous system support)", "Magnesium Sulfate 3g (cardiovascular support)"]',
'["Removal of lead, mercury, cadmium, and arsenic", "Improved cardiovascular health and circulation", "Enhanced cognitive function and memory", "Reduced oxidative stress and inflammation", "Better circulation and blood flow", "Support for neurological health", "Improved energy and vitality"]', true),

('IV Glutathione Glow', 'Master antioxidant therapy for cellular detoxification and radiant skin. This treatment boosts immunity, reduces oxidative stress, and enhances your natural glow from within.', 2700.00, 60, 'beauty',
'["High-Dose Glutathione 1500mg (reduced form)", "Vitamin C 5g (glutathione recycling)", "Biotin 10mg (skin and hair health)", "B-Complex Vitamins (cellular energy)", "Alpha-Lipoic Acid 300mg (antioxidant)", "Selenium 200mcg (glutathione enzyme)"]',
'["Skin lightening and brightening effects (visible in 3-5 sessions)", "Powerful cellular detoxification", "Enhanced immune system function", "Reduced signs of aging and wrinkles", "Improved skin elasticity and texture", "Protection against UV damage", "Enhanced liver function and detoxification"]', true),

('IV Anti-Inflammatory', 'Advanced inflammation reduction therapy combining turmeric, glutathione, and targeted nutrients to combat oxidative stress and support tissue repair for chronic and acute conditions.', 2500.00, 75, 'wellness',
'["Turmeric 500mg (potent anti-inflammatory)", "Glutathione 1000mg (oxidative stress reduction)", "Vitamin C 5g (collagen synthesis)", "Magnesium Sulfate 2g (muscle relaxation)", "Quercetin 250mg (natural antihistamine)", "B-Complex Vitamins (cellular repair)", "Omega-3 Fatty Acids 1g (inflammation resolution)"]',
'["Significant inflammation reduction (CRP levels drop 40-60%)", "Pain relief for chronic conditions (arthritis, fibromyalgia)", "Enhanced tissue repair and healing", "Improved joint mobility and flexibility", "Reduced inflammatory markers throughout the body", "Support for autoimmune conditions", "Better exercise recovery and performance"]', true),

-- Premium Rejuvenation Services
('IV All-Inclusive Rejuvenation', 'Comprehensive wellness therapy with a powerful blend of vitamins, minerals, and antioxidants. This treatment promotes cellular regeneration, boosts collagen, and enhances overall vitality.', 2700.00, 90, 'wellness',
'["Comprehensive multivitamin blend (A, D, E, K, B-complex)", "Glutathione 800mg (cellular protection)", "Vitamin C 10g (collagen synthesis)", "Biotin 10mg (hair, skin, nails)", "Zinc Sulfate 15mg (tissue repair)", "Magnesium Sulfate 2g (muscle function)", "Trace mineral blend (selenium, chromium, manganese)"]',
'["Complete nutritional optimization", "Enhanced skin health and youthful appearance", "Improved overall energy and vitality", "Stronger hair and nails", "Better immune system function", "Enhanced mental clarity and mood", "Overall wellness and longevity support"]', true),

('IV All-Inclusive Rejuvenation (Extra Strength)', 'The ultimate wellness experience with maximum-dose nutrients. This premium therapy amplifies all rejuvenation benefits, maximizing hydration, cellular repair, and anti-aging effects.',  3000.00, 120, 'wellness',
'["High-dose multivitamin complex (therapeutic levels)", "Glutathione 1500mg (maximum antioxidant)", "Vitamin C 25g (megadose therapy)", "Biotin 20mg (beauty enhancement)", "Collagen Peptides 5g (skin elasticity)", "CoQ10 200mg (cellular energy)", "Alpha-Lipoic Acid 600mg (universal antioxidant)", "Premium mineral blend (optimized ratios)"]',
'["Maximum anti-aging effects (cellular level)", "Superior skin rejuvenation and glow", "Optimal cellular regeneration and repair", "Enhanced collagen production (visible results)", "Peak energy levels and vitality", "Comprehensive wellness optimization", "Premium longevity and healthspan support"]', true);

-- Insert add-on services
INSERT INTO services (name, description, price, duration, category, ingredients, benefits, is_active) VALUES
('Vitamin B12 Boost', 'Additional B12 for enhanced energy and metabolism', 150.00, 0, 'addon', '["Vitamin B12 1000mcg (methylcobalamin)"]', '["Increased energy", "Better metabolism", "Enhanced mood"]', true),
('Glutathione Push', 'Extra glutathione for enhanced detoxification', 200.00, 0, 'addon', '["Glutathione 600mg (reduced form)"]', '["Enhanced detoxification", "Antioxidant protection", "Skin brightening"]', true),
('Biotin Beauty Boost', 'Additional biotin for hair, skin, and nail health', 100.00, 0, 'addon', '["Biotin 10mg"]', '["Stronger hair and nails", "Improved skin health", "Enhanced beauty"]', true),
('Magnesium Relaxation', 'Extra magnesium for muscle relaxation and sleep', 125.00, 0, 'addon', '["Magnesium Sulfate 1g"]', '["Muscle relaxation", "Better sleep", "Reduced stress"]', true),
('Vitamin C Immune Boost', 'Additional vitamin C for immune support', 175.00, 0, 'addon', '["Vitamin C 5g (ascorbic acid)"]', '["Enhanced immune function", "Antioxidant protection", "Collagen support"]', true);

-- Verify the data was inserted correctly
SELECT COUNT(*) as total_services FROM services;
SELECT name, price, category FROM services WHERE category != 'addon' ORDER BY price;
SELECT name, price FROM services WHERE category = 'addon' ORDER BY price;
