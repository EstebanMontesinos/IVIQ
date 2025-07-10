export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone: string
          date_of_birth: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          medical_conditions: string | null
          current_medications: string | null
          allergies: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          phone: string
          date_of_birth?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          medical_conditions?: string | null
          current_medications?: string | null
          allergies?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone?: string
          date_of_birth?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          medical_conditions?: string | null
          current_medications?: string | null
          allergies?: string | null
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          duration_minutes: number
          category: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          duration_minutes: number
          category: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          duration_minutes?: number
          category?: string
          is_active?: boolean
          updated_at?: string
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
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          is_active?: boolean
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          customer_id: string
          service_id: string
          booking_date: string
          booking_time: string
          status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          special_requests: string | null
          total_amount: number
          payment_status: "pending" | "paid" | "refunded"
          payment_method: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          service_id: string
          booking_date: string
          booking_time: string
          status?: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          special_requests?: string | null
          total_amount: number
          payment_status?: "pending" | "paid" | "refunded"
          payment_method?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          service_id?: string
          booking_date?: string
          booking_time?: string
          status?: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          location_type?: string
          address?: string
          city?: string
          state?: string
          zip_code?: string
          special_requests?: string | null
          total_amount?: number
          payment_status?: "pending" | "paid" | "refunded"
          payment_method?: string | null
          updated_at?: string
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
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          add_on_id?: string
          quantity?: number
          price?: number
        }
      }
    }
    Views: {
      booking_details: {
        Row: {
          booking_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          service_name: string
          service_price: number
          booking_date: string
          booking_time: string
          status: string
          location_type: string
          address: string
          city: string
          state: string
          zip_code: string
          total_amount: number
          payment_status: string
          add_ons: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
