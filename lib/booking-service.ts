import { createServerClient } from "@/lib/supabase"
import type { Database } from "@/types/database"

type Customer = Database["public"]["Tables"]["customers"]["Insert"]
type Booking = Database["public"]["Tables"]["bookings"]["Insert"]
type BookingAddOn = Database["public"]["Tables"]["booking_add_ons"]["Insert"]

export interface BookingData {
  customer: Customer
  booking: Omit<Booking, "customer_id">
  addOns: Array<{
    add_on_id: string
    quantity: number
    price: number
  }>
}

export class BookingService {
  private supabase = createServerClient()

  async createBooking(bookingData: BookingData) {
    try {
      // First, get the service details to calculate total
      const { data: service, error: serviceError } = await this.supabase
        .from("services")
        .select("*")
        .eq("id", bookingData.booking.service_id)
        .single()

      if (serviceError) throw new Error("Service not found")

      // Calculate total amount
      const addOnTotal = bookingData.addOns.reduce((sum, addOn) => sum + addOn.price * addOn.quantity, 0)
      const totalAmount = service.price + addOnTotal

      // Start a transaction by creating customer first
      const { data: customer, error: customerError } = await this.supabase
        .from("customers")
        .upsert(bookingData.customer, {
          onConflict: "email",
          ignoreDuplicates: false,
        })
        .select()
        .single()

      if (customerError) throw customerError

      // Create the booking with calculated total
      const { data: booking, error: bookingError } = await this.supabase
        .from("bookings")
        .insert({
          ...bookingData.booking,
          customer_id: customer.id,
          total_amount: totalAmount,
        })
        .select()
        .single()

      if (bookingError) throw bookingError

      // Add the add-ons if any
      if (bookingData.addOns.length > 0) {
        const addOnsToInsert = bookingData.addOns.map((addOn) => ({
          booking_id: booking.id,
          add_on_id: addOn.add_on_id,
          quantity: addOn.quantity,
          price: addOn.price,
        }))

        const { error: addOnsError } = await this.supabase.from("booking_add_ons").insert(addOnsToInsert)

        if (addOnsError) throw addOnsError
      }

      return { success: true, booking, customer }
    } catch (error) {
      console.error("Error creating booking:", error)
      return { success: false, error: error.message }
    }
  }

  async getBooking(bookingId: string) {
    try {
      const { data, error } = await this.supabase
        .from("booking_details")
        .select("*")
        .eq("booking_id", bookingId)
        .single()

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error fetching booking:", error)
      return { success: false, error: error.message }
    }
  }

  async getCustomerBookings(customerId: string) {
    try {
      const { data, error } = await this.supabase
        .from("booking_details")
        .select("*")
        .eq("customer_id", customerId)
        .order("booking_date", { ascending: false })

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error fetching customer bookings:", error)
      return { success: false, error: error.message }
    }
  }

  async updateBookingStatus(bookingId: string, status: string) {
    try {
      const { data, error } = await this.supabase
        .from("bookings")
        .update({
          status: status as any,
          updated_at: new Date().toISOString(),
        })
        .eq("id", bookingId)
        .select()
        .single()

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error updating booking status:", error)
      return { success: false, error: error.message }
    }
  }

  async cancelBooking(bookingId: string) {
    try {
      const { data, error } = await this.supabase
        .from("bookings")
        .update({
          status: "cancelled",
          updated_at: new Date().toISOString(),
        })
        .eq("id", bookingId)
        .select()
        .single()

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error cancelling booking:", error)
      return { success: false, error: error.message }
    }
  }

  async getServices() {
    try {
      const { data, error } = await this.supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("category", { ascending: true })

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error fetching services:", error)
      return { success: false, error: error.message }
    }
  }

  async getAddOns() {
    try {
      const { data, error } = await this.supabase
        .from("add_ons")
        .select("*")
        .eq("is_active", true)
        .order("name", { ascending: true })

      if (error) throw error

      return { success: true, data }
    } catch (error) {
      console.error("Error fetching add-ons:", error)
      return { success: false, error: error.message }
    }
  }

  async checkAvailability(date: string, time: string) {
    try {
      const { data, error } = await this.supabase
        .from("bookings")
        .select("id")
        .eq("booking_date", date)
        .eq("booking_time", time)
        .in("status", ["pending", "confirmed", "in_progress"])

      if (error) throw error

      return { success: true, available: data.length === 0 }
    } catch (error) {
      console.error("Error checking availability:", error)
      return { success: false, error: error.message }
    }
  }
}

export const bookingService = new BookingService()
