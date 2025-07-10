export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          emergency_contact_name: string
          emergency_contact_phone: string
          medical_conditions: string | null
          medications: string | null
          allergies: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          emergency_contact_name: string
          emergency_contact_phone: string
          medical_conditions?: string | null
          medications?: string | null
          allergies?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          emergency_contact_name?: string
          emergency_contact_phone?: string
          medical_conditions?: string | null
          medications?: string | null
          allergies?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          duration: number
          category: string
          is_active: boolean
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          duration: number
          category: string
          is_active?: boolean
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          duration?: number
          category?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string | null
        }
      }
      bookings: {
        Row: {
          id: string
          customer_id: string
          service_id: string
          appointment_date: string
          appointment_time: string
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          special_requests: string | null
          total_amount: number
          status: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          service_id: string
          appointment_date: string
          appointment_time: string
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          special_requests?: string | null
          total_amount: number
          status: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          service_id?: string
          appointment_date?: string
          appointment_time?: string
          location_type?: string
          address?: string
          city?: string
          state?: string
          zip_code?: string
          special_requests?: string | null
          total_amount?: number
          status?: string
          created_at?: string
          updated_at?: string | null
        }
      }
      add_ons: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          is_active: boolean
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          is_active?: boolean
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string | null
        }
      }
      booking_add_ons: {
        Row: {
          id: string
          booking_id: string
          add_on_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          add_on_id: string
          quantity?: number
          price?: number
          created_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          add_on_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
      }
    }
    Views: {
      booking_details: {
        Row: {
          booking_id: string
          customer_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          service_id: string
          service_name: string
          service_price: number
          appointment_date: string
          appointment_time: string
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          total_amount: number
          status: string
          created_at: string
          add_ons: string | null
        }
      }
    }
  }
}
