-- Update IV therapy service prices to new MXN amounts
-- Run this script to update existing database records

UPDATE services SET 
  price = 3200.00,
  name = 'IV Hangover Relief',
  description = 'Revive and recover quickly from alcohol consumption. This therapy detoxifies your body, eliminates toxins, and effectively rehydrates, providing rapid relief from hangover symptoms.'
WHERE name LIKE '%Hangover%' OR name LIKE '%hangover%';

UPDATE services SET 
  price = 2200.00,
  name = 'IV Dehydration Recovery',
  description = 'Feel fresh and revitalized with rapid fluid replacement. Replenishes electrolytes, boosts energy, and improves your mood with this essential hydration therapy.'
WHERE name LIKE '%Dehydration%' OR name LIKE '%Hydration%';

UPDATE services SET 
  price = 2500.00,
  name = 'IV Food Poisoning & Stomach Flu Recovery',
  description = 'Accelerate recovery from gastrointestinal distress. This therapy helps heal the stomach lining and is ideal for treating food poisoning and all gastrointestinal symptoms.'
WHERE name LIKE '%Food Poisoning%' OR name LIKE '%Stomach%';

UPDATE services SET 
  price = 2400.00,
  name = 'IV Myers Cocktail',
  description = 'The gold standard of IV therapy. This classic formula boosts red blood cell production, accelerates muscle recovery, improves sleep quality, and strengthens your immune system.'
WHERE name LIKE '%Myers%';

UPDATE services SET 
  price = 2500.00,
  name = 'IV Energy Boost',
  description = 'Combat fatigue and low energy with a scientifically formulated blend of IV fluids, electrolytes, vitamins, and antioxidants designed to revitalize your body at the cellular level.'
WHERE name LIKE '%Energy%';

UPDATE services SET 
  price = 2600.00,
  name = 'IV Muscle Recovery',
  description = 'Optimize athletic performance and recovery. This therapy enhances muscle regeneration, reduces inflammation, and includes essential amino acids and nutrients for peak fitness.'
WHERE name LIKE '%Muscle%' OR name LIKE '%Recovery%' OR name LIKE '%Athletic%';

UPDATE services SET 
  price = 2300.00,
  name = 'IV Antiviral Defense',
  description = 'Strengthen your body natural defense against viral infections. This powerful formula uses high-dose vitamin C and zinc to target pathogens and enhance immune response.'
WHERE name LIKE '%Antiviral%' OR name LIKE '%Viral%';

UPDATE services SET 
  price = 2600.00,
  name = 'IV Immune Shield',
  description = 'Comprehensive immune system support with essential nutrients. This therapy strengthens your body defenses, helping you recover from infections while promoting long-term wellness.'
WHERE name LIKE '%Immune%' AND name NOT LIKE '%Antiviral%';

UPDATE services SET 
  price = 2300.00,
  name = 'IV Megadose Vitamin C',
  description = 'High-dose vitamin C therapy for maximum immune support and detoxification. This treatment acts as a powerful antioxidant, promoting cellular repair and enhancing overall vitality.'
WHERE name LIKE '%Vitamin C%' OR name LIKE '%Mega%';

UPDATE services SET 
  price = 2400.00,
  name = 'IV Full Body Detox',
  description = 'Comprehensive cellular detoxification to eliminate harmful toxins. This therapy enhances liver function, boosts your immune system, and restores your body natural balance.'
WHERE name LIKE '%Detox%' AND name NOT LIKE '%Heavy Metal%';

UPDATE services SET 
  price = 2600.00,
  name = 'IV Heavy Metal Cleanse',
  description = 'Specialized chelation therapy to remove heavy metals and environmental toxins. This treatment improves circulation, reduces inflammation, and supports overall health.'
WHERE name LIKE '%Heavy Metal%' OR name LIKE '%Chelation%';

UPDATE services SET 
  price = 2700.00,
  name = 'IV Glutathione Glow',
  description = 'Master antioxidant therapy for cellular detoxification and radiant skin. This treatment boosts immunity, reduces oxidative stress, and enhances your natural glow from within.'
WHERE name LIKE '%Glutathione%' OR name LIKE '%Glow%';

UPDATE services SET 
  price = 2500.00,
  name = 'IV Anti-Inflammatory',
  description = 'Advanced inflammation reduction therapy combining turmeric, glutathione, and targeted nutrients to combat oxidative stress and support tissue repair for chronic and acute conditions.'
WHERE name LIKE '%Anti-Inflammatory%' OR name LIKE '%Inflammation%';

UPDATE services SET 
  price = 2400.00,
  name = 'IV Jet Lag Reset',
  description = 'Restore your natural circadian rhythm quickly and effectively. This specialized therapy contains melatonin, vitamins, and relaxants to help reset your sleep cycle after traveling.'
WHERE name LIKE '%Jet Lag%' OR name LIKE '%Travel%';

UPDATE services SET 
  price = 2100.00,
  name = 'IV Iron Recharge',
  description = 'Combat iron deficiency anemia and chronic fatigue. This therapy safely boosts iron levels, enhances red blood cell production, and improves oxygen delivery throughout your body.'
WHERE name LIKE '%Iron%' OR name LIKE '%Anemia%';

UPDATE services SET 
  price = 3200.00,
  name = 'IV NAD+ Revival',
  description = 'Cutting-edge anti-aging therapy that provides cellular energy at the mitochondrial level. NAD+ supports DNA repair, metabolic regulation, and neurological function.'
WHERE name LIKE '%NAD%';

UPDATE services SET 
  price = 2700.00,
  name = 'IV All-Inclusive Rejuvenation',
  description = 'Comprehensive wellness therapy with a powerful blend of vitamins, minerals, and antioxidants. This treatment promotes cellular regeneration, boosts collagen, and enhances overall vitality.'
WHERE name LIKE '%All-Inclusive%' AND name NOT LIKE '%Extra%';

UPDATE services SET 
  price = 3000.00,
  name = 'IV All-Inclusive Rejuvenation (Extra Strength)',
  description = 'The ultimate wellness experience with maximum-dose nutrients. This premium therapy amplifies all rejuvenation benefits, maximizing hydration, cellular repair, and anti-aging effects.'
WHERE name LIKE '%All-Inclusive%' AND name LIKE '%Extra%';

-- Verify the updates
SELECT name, price, description FROM services ORDER BY price;
