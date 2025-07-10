// Mock Supabase client implementation without external dependencies

// Define the Database types
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

// Mock data
const mockData = {
  customers: [
    {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      emergency_contact_name: "Jane Doe",
      emergency_contact_phone: "987-654-3210",
      medical_conditions: null,
      medications: null,
      allergies: null,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
  ],
  services: [
    {
      id: "hangover-relief",
      name: "IV Hangover Relief",
      description: "Quick relief from hangover symptoms",
      price: 3200,
      duration: 60,
      category: "IV Therapy",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
    {
      id: "dehydration-recovery",
      name: "IV Dehydration Recovery",
      description: "Rehydrate and recover",
      price: 2200,
      duration: 45,
      category: "IV Therapy",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
    {
      id: "myers-cocktail",
      name: "IV Myers Cocktail",
      description: "Classic IV therapy formula",
      price: 2400,
      duration: 60,
      category: "IV Therapy",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
  ],
  add_ons: [
    {
      id: "b12-boost",
      name: "Vitamin B12 Boost",
      description: "Energy boost with B12",
      price: 300,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
    {
      id: "glutathione-push",
      name: "Glutathione Push",
      description: "Antioxidant boost",
      price: 500,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
    {
      id: "extra-vitamin-c",
      name: "Extra Vitamin C",
      description: "Immune system support",
      price: 250,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: null,
    },
  ],
  bookings: [],
  booking_add_ons: [],
}

// Mock Supabase client
export const supabase = {
  from: (table: string) => {
    let queryData = [...(mockData[table] || [])]
    const filters = []

    return {
      select: (columns?: string) => {
        return {
          data: queryData,
          error: null,
        }
      },
      insert: (data: any) => {
        const newId = Math.random().toString(36).substring(2, 11)
        const newItem = {
          id: newId,
          ...data,
          created_at: new Date().toISOString(),
        }
        mockData[table].push(newItem)
        return {
          data: newItem,
          error: null,
        }
      },
      update: (data: any) => {
        return {
          data,
          error: null,
        }
      },
      delete: () => {
        return {
          data: null,
          error: null,
        }
      },
      eq: (column: string, value: any) => {
        filters.push({ column, value, op: "eq" })
        queryData = queryData.filter((item) => item[column] === value)
        return this
      },
      neq: (column: string, value: any) => {
        filters.push({ column, value, op: "neq" })
        queryData = queryData.filter((item) => item[column] !== value)
        return this
      },
      in: (column: string, values: any[]) => {
        filters.push({ column, values, op: "in" })
        queryData = queryData.filter((item) => values.includes(item[column]))
        return this
      },
      single: () => {
        return {
          data: queryData.length > 0 ? queryData[0] : null,
          error: queryData.length === 0 ? { message: "No rows found" } : null,
        }
      },
      order: (column: string, { ascending = true } = {}) => {
        queryData.sort((a, b) => {
          if (ascending) {
            return a[column] < b[column] ? -1 : 1
          } else {
            return a[column] > b[column] ? -1 : 1
          }
        })
        return this
      },
    }
  },
}

// Create a server client function
export const createServerClient = () => supabase
