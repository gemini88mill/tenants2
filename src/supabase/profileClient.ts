import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";
import {Tables} from '../../database.types'

export type ProfileType = Tables<'Profile'>;

export const getProfileFromSession = async (session: Session | null) => {
  if (!session) return null;
  const { data: Profile, error } = await supabase
    .from("Profile")
    .select()
    .eq("userId", session.user.id)
    .returns<ProfileType>().maybeSingle();

  if (error) {
    throw error;
  }

  return Profile;
};

export const createProfile = async (session: Session | null, profile: Partial<ProfileType>) => {
  if (!session) {
    throw new Error("You must be logged in to create a profile");
  }

  const { data, error } = await supabase
    .from("Profile")
    .insert([{ ...profile, userId: session.user.id }])
    .single();

  if (error) {
    throw error;
  }

  return data;
};
