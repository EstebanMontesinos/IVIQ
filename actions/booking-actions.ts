"use server"

import { bookingService } from "@/lib/booking-service"
import type { BookingData } from "@/lib/booking-service"

export async function submitBooking(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const serviceId = formData.get("service") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const locationType = formData.get("locationType") as string
    const address = formData.get("address") as string
    const city = formData.get("city") as string
    const state = formData.get("state") as string
    const zipCode = formData.get("zipCode") as string
    const emergencyContact = formData.get("emergencyContact") as string
    const emergencyPhone = formData.get("emergencyPhone") as string
    const medicalConditions = formData.get("medicalConditions") as string
    const medications = formData.get("medications") as string
    const allergies = formData.get("allergies") as string
    const specialRequests = formData.get("specialRequests") as string

    // Get selected add-ons
    const addOns = []
    const addOnIds = formData.getAll("addOns") as string[]

    // Map add-on IDs to prices (you'll need to fetch these from database in production)
    const addOnPrices = {
      "b12-boost": 300,
      "glutathione-push": 500,
      "extra-vitamin-c": 250,
      "zinc-boost": 200,
      "anti-nausea": 300,
      "pain-reliever": 300,
    }

    for (const addOnId of addOnIds) {
      if (addOnPrices[addOnId]) {
        addOns.push({
          add_on_id: addOnId,
          quantity: 1,
          price: addOnPrices[addOnId],
        })
      }
    }

    // Check availability
    const availabilityCheck = await bookingService.checkAvailability(date, time)
    if (!availabilityCheck.success || !availabilityCheck.available) {
      return {
        success: false,
        error: "The selected time slot is not available. Please choose a different time.",
      }
    }

    // Prepare booking data
    const bookingData: BookingData = {
      customer: {
        email,
        first_name: firstName,
        last_name: lastName,
        phone,
        emergency_contact_name: emergencyContact,
        emergency_contact_phone: emergencyPhone,
        medical_conditions: medicalConditions || null,
        current_medications: medications || null,
        allergies: allergies || null,
      },
      booking: {
        service_id: serviceId,
        booking_date: date,
        booking_time: time,
        location_type: locationType,
        address,
        city,
        state,
        zip_code: zipCode,
        special_requests: specialRequests || null,
        total_amount: 0, // This will be calculated in the service
        status: "pending",
        payment_status: "pending",
      },
      addOns,
    }

    // Create the booking
    const result = await bookingService.createBooking(bookingData)

    if (result.success) {
      return {
        success: true,
        message: "Booking submitted successfully! We will contact you within 24 hours to confirm your appointment.",
        bookingId: result.booking.id,
      }
    } else {
      return {
        success: false,
        error: result.error || "Failed to create booking. Please try again.",
      }
    }
  } catch (error) {
    console.error("Booking submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function getBookingDetails(bookingId: string) {
  try {
    const result = await bookingService.getBooking(bookingId)
    return result
  } catch (error) {
    console.error("Error fetching booking details:", error)
    return {
      success: false,
      error: "Failed to fetch booking details",
    }
  }
}

export async function updateBookingStatus(bookingId: string, status: string) {
  try {
    const result = await bookingService.updateBookingStatus(bookingId, status)
    return result
  } catch (error) {
    console.error("Error updating booking status:", error)
    return {
      success: false,
      error: "Failed to update booking status",
    }
  }
}
