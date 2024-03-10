export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address_types: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      addresses: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          country: string | null
          created_at: string
          created_by: number | null
          id: number
          postal_code: string | null
          state_province: string | null
          type: number | null
          updated_at: string | null
          updated_by: number | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          created_by?: number | null
          id?: number
          postal_code?: string | null
          state_province?: string | null
          type?: number | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          created_by?: number | null
          id?: number
          postal_code?: string | null
          state_province?: string | null
          type?: number | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_addresses_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "address_types"
            referencedColumns: ["id"]
          }
        ]
      }
      contact_types: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          created_by: number | null
          id: number
          profiles: number[] | null
          type: number | null
          updated_at: string | null
          updated_by: number | null
          value: string | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          id?: number
          profiles?: number[] | null
          type?: number | null
          updated_at?: string | null
          updated_by?: number | null
          value?: string | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          id?: number
          profiles?: number[] | null
          type?: number | null
          updated_at?: string | null
          updated_by?: number | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contacts_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "contact_types"
            referencedColumns: ["id"]
          }
        ]
      }
      Profile: {
        Row: {
          created_at: string
          created_by: number | null
          date_of_birth: string | null
          display_name: string | null
          first_name: string | null
          id: number
          last_name: string | null
          middle_name: string | null
          updated_at: string | null
          updated_by: number | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          date_of_birth?: string | null
          display_name?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          middle_name?: string | null
          updated_at?: string | null
          updated_by?: number | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          date_of_birth?: string | null
          display_name?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          middle_name?: string | null
          updated_at?: string | null
          updated_by?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Profile_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_addresses: {
        Row: {
          address_id: number | null
          created_at: string
          id: number
          profile_id: number | null
        }
        Insert: {
          address_id?: number | null
          created_at?: string
          id?: number
          profile_id?: number | null
        }
        Update: {
          address_id?: number | null
          created_at?: string
          id?: number
          profile_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profile_addresses_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profile_addresses_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_contacts: {
        Row: {
          contact_id: number | null
          created_at: string
          id: number
          profile_id: number | null
        }
        Insert: {
          contact_id?: number | null
          created_at?: string
          id?: number
          profile_id?: number | null
        }
        Update: {
          contact_id?: number | null
          created_at?: string
          id?: number
          profile_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profile_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profile_contacts_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
