-- Script to update IV therapy prices to Mexican pesos
-- Run this script to update existing database with new prices

UPDATE services SET price = 3200.00 WHERE name = 'Hangover Relief';
UPDATE services SET price = 2200.00 WHERE name = 'Hydration Boost';
UPDATE services SET price = 2500.00 WHERE name IN ('Recovery Plus', 'Energy Revitalize');
UPDATE services SET price = 2400.00 WHERE name IN ('Jet Lag Recovery');
UPDATE services SET price = 2600.00 WHERE name IN ('Athletic Performance');
UPDATE services SET price = 2100.00 WHERE name LIKE '%Iron%';

-- Insert new services if they don't exist
INSERT INTO services (name, description, price, duration_minutes, category) VALUES
('IV Myers Cocktail', 'The gold standard of IV therapy with comprehensive nutrients', 2400.00, 60, 'wellness'),
('IV Energy Boost', 'Combat fatigue and low energy with scientifically formulated blend', 2500.00, 60, 'energy'),
('IV Muscle Recovery', 'Optimize athletic performance and recovery', 2600.00, 75, 'recovery'),
('IV Iron Recharge', 'Combat iron deficiency anemia and chronic fatigue', 2100.00, 90, 'medical'),
('IV Food Poisoning & Stomach Flu Recovery', 'Accelerate recovery from gastrointestinal distress', 2500.00, 60, 'recovery')
ON CONFLICT (name) DO UPDATE SET price = EXCLUDED.price;

-- Verify the updates
SELECT name, price, category FROM services WHERE price >= 2000 ORDER BY price DESC;
