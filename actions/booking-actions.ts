"use server"

import { BookingService, type BookingData } from "@/lib/booking-service"

export async function submitBooking(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
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

    // Get all selected add-ons
    const addOns = formData.getAll("addOns") as string[]

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !service ||
      !date ||
      !time ||
      !locationType ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !emergencyContact ||
      !emergencyPhone
    ) {
      return { success: false, error: "Please fill in all required fields." }
    }

    // Prepare booking data
    const bookingData: BookingData = {
      customer: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        emergency_contact_name: emergencyContact,
        emergency_contact_phone: emergencyPhone,
        medical_conditions: medicalConditions || null,
        medications: medications || null,
        allergies: allergies || null,
      },
      booking: {
        service_id: service,
        appointment_date: date,
        appointment_time: time,
        location_type: locationType,
        address: address,
        city: city,
        state: state,
        zip_code: zipCode,
        special_requests: specialRequests || null,
        status: "pending",
      },
      addOns: addOns,
    }

    // Create booking
    const result = await BookingService.createBooking(bookingData)

    if (result.success) {
      return {
        success: true,
        message: `Booking confirmed! Your booking ID is ${result.bookingId}. We'll contact you shortly to confirm your appointment.`,
        bookingId: result.bookingId,
      }
    } else {
      return { success: false, error: result.error || "Failed to create booking." }
    }
  } catch (error) {
    console.error("Booking submission error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}

export async function getBookingDetails(id: string) {
  try {
    const booking = await BookingService.getBookingById(id)
    return { success: true, data: booking }
  } catch (error) {
    console.error("Get booking error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Failed to fetch booking details." }
  }
}

export async function updateBookingStatus(id: string, status: string) {
  try {
    const booking = await BookingService.updateBookingStatus(id, status)
    return { success: true, data: booking }
  } catch (error) {
    console.error("Update booking status error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Failed to update booking status." }
  }
}
