-- Enable Row Level Security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_add_ons ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Customers can view own data" ON customers;
DROP POLICY IF EXISTS "Customers can update own data" ON customers;
DROP POLICY IF EXISTS "Customers can insert own data" ON customers;
DROP POLICY IF EXISTS "Customers can view own bookings" ON bookings;
DROP POLICY IF EXISTS "Customers can create bookings" ON bookings;
DROP POLICY IF EXISTS "Customers can update own bookings" ON bookings;
DROP POLICY IF EXISTS "Services are publicly readable" ON services;
DROP POLICY IF EXISTS "Add-ons are publicly readable" ON add_ons;
DROP POLICY IF EXISTS "Booking add-ons follow booking permissions" ON booking_add_ons;
DROP POLICY IF EXISTS "Allow public read access to services" ON services;
DROP POLICY IF EXISTS "Allow public read access to add_ons" ON add_ons;

-- Create RLS policies for customers
CREATE POLICY "Allow public insert for customers" ON customers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select for customers" ON customers
    FOR SELECT USING (true);

CREATE POLICY "Allow public update for customers" ON customers
    FOR UPDATE USING (true);

-- Create RLS policies for bookings
CREATE POLICY "Allow public insert for bookings" ON bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select for bookings" ON bookings
    FOR SELECT USING (true);

CREATE POLICY "Allow public update for bookings" ON bookings
    FOR UPDATE USING (true);

-- Services and add_ons are publicly readable
CREATE POLICY "Allow public read access to services" ON services
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to add_ons" ON add_ons
    FOR SELECT USING (true);

-- Booking add-ons policies
CREATE POLICY "Allow public access to booking_add_ons" ON booking_add_ons
    FOR ALL USING (true);
