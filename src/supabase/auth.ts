import { User } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export const signup = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const updateUser = async (user: User) => {
  const { data, error } = await supabase.from("users").upsert(user);
  return { data, error };
}