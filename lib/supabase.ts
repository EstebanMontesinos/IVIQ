import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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
export const supabaseClient = {
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
export const createServerClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
