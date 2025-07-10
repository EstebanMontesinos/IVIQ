-- Verify tables exist and have data
SELECT 'customers' as table_name, COUNT(*) as row_count FROM customers
UNION ALL
SELECT 'services' as table_name, COUNT(*) as row_count FROM services
UNION ALL
SELECT 'add_ons' as table_name, COUNT(*) as row_count FROM add_ons
UNION ALL
SELECT 'bookings' as table_name, COUNT(*) as row_count FROM bookings
UNION ALL
SELECT 'booking_add_ons' as table_name, COUNT(*) as row_count FROM booking_add_ons;

-- Show sample services
SELECT name, price, category FROM services LIMIT 5;

-- Show sample add-ons
SELECT name, price FROM add_ons;
