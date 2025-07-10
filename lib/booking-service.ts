import { supabase } from "@/lib/supabase"

export interface BookingData {
  customer: {
    first_name: string
    last_name: string
    email: string
    phone: string
    emergency_contact_name: string
    emergency_contact_phone: string
    medical_conditions?: string | null
    medications?: string | null
    allergies?: string | null
  }
  booking: {
    service_id: string
    appointment_date: string
    appointment_time: string
    location_type: string
    address: string
    city: string
    state: string
    zip_code: string
    special_requests?: string | null
    status: string
  }
  addOns: string[]
}

export class BookingService {
  static async createBooking(data: BookingData): Promise<{ success: boolean; bookingId?: string; error?: string }> {
    try {
      // Create customer
      const { data: customerData, error: customerError } = await supabase
        .from("customers")
        .insert(data.customer)
        .select()
        .single()

      if (customerError) {
        throw new Error(`Customer creation failed: ${customerError.message}`)
      }

      // Get service details for pricing
      const { data: serviceData, error: serviceError } = await supabase
        .from("services")
        .select("price")
        .eq("id", data.booking.service_id)
        .single()

      if (serviceError) {
        throw new Error(`Service lookup failed: ${serviceError.message}`)
      }

      // Get add-on prices
      let addOnTotal = 0
      if (data.addOns.length > 0) {
        const { data: addOnData, error: addOnError } = await supabase
          .from("add_ons")
          .select("price")
          .in("id", data.addOns)

        if (addOnError) {
          throw new Error(`Add-on lookup failed: ${addOnError.message}`)
        }

        addOnTotal = addOnData.reduce((sum, addOn) => sum + addOn.price, 0)
      }

      const totalAmount = serviceData.price + addOnTotal

      // Create booking
      const { data: bookingData, error: bookingError } = await supabase
        .from("bookings")
        .insert({
          ...data.booking,
          customer_id: customerData.id,
          total_amount: totalAmount,
        })
        .select()
        .single()

      if (bookingError) {
        throw new Error(`Booking creation failed: ${bookingError.message}`)
      }

      // Create booking add-ons
      if (data.addOns.length > 0) {
        const bookingAddOns = data.addOns.map((addOnId) => ({
          booking_id: bookingData.id,
          add_on_id: addOnId,
          quantity: 1,
          price: 0, // This will be updated with actual price
        }))

        const { error: addOnError } = await supabase.from("booking_add_ons").insert(bookingAddOns)

        if (addOnError) {
          throw new Error(`Booking add-ons creation failed: ${addOnError.message}`)
        }
      }

      return { success: true, bookingId: bookingData.id }
    } catch (error) {
      console.error("Booking creation error:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  }

  static async getBookingById(id: string) {
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        *,
        customers (*),
        services (*),
        booking_add_ons (
          add_ons (*)
        )
      `)
      .eq("id", id)
      .single()

    if (error) {
      throw new Error(`Failed to fetch booking: ${error.message}`)
    }

    return data
  }

  static async getAllBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        *,
        customers (*),
        services (*),
        booking_add_ons (
          add_ons (*)
        )
      `)
      .order("created_at", { ascending: false })

    if (error) {
      throw new Error(`Failed to fetch bookings: ${error.message}`)
    }

    return data
  }

  static async updateBookingStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from("bookings")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to update booking status: ${error.message}`)
    }

    return data
  }
}
