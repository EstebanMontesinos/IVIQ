-- Create a view for booking details with joined data
DROP VIEW IF EXISTS booking_details;

CREATE VIEW booking_details AS
SELECT 
    b.id as booking_id,
    b.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) as customer_name,
    c.email as customer_email,
    c.phone as customer_phone,
    s.name as service_name,
    s.price as service_price,
    b.booking_date,
    b.booking_time,
    b.status,
    b.location_type,
    b.address,
    b.city,
    b.state,
    b.zip_code,
    b.total_amount,
    b.payment_status,
    b.created_at,
    b.updated_at,
    STRING_AGG(CONCAT(ao.name, ' (', ba.quantity, ')'), ', ') as add_ons
FROM bookings b
JOIN customers c ON b.customer_id = c.id
JOIN services s ON b.service_id = s.id
LEFT JOIN booking_add_ons ba ON b.id = ba.booking_id
LEFT JOIN add_ons ao ON ba.add_on_id = ao.id
GROUP BY b.id, b.customer_id, c.first_name, c.last_name, c.email, c.phone, s.name, s.price, 
         b.booking_date, b.booking_time, b.status, b.location_type, b.address, 
         b.city, b.state, b.zip_code, b.total_amount, b.payment_status, b.created_at, b.updated_at;
