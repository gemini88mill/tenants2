import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "./supabase/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthComponent = () => (
  <Auth supabaseClient={supabase} appearance={{theme: ThemeSupa}} />
)