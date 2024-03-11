import { useEffect, useState } from "react";
import { useSessionProvider } from "../contexts/SessionProvider";
import { ProfileType } from "../../supabase/profileClient";
import { Profile } from "./Profile";
import { ProfileContextProvider } from "../contexts/ProfileProvider";
import { Nav } from "./Nav";

export const Dashboard = () => {
  const {session, getProfile} = useSessionProvider();
  const [profile, setProfile] = useState<ProfileType | null>();

  useEffect(() => {
    (async () => {
      const res = await getProfile(session);
  
      setProfile(res);
    })();
  }, [getProfile, session]);

  if(profile) {
    return (
      <div>
        <Nav />
        <h1>Dashboard</h1>
        <p>Welcome, {profile.display_name}!</p>
      </div>
    )
  } else {
    return (
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>
    );
  }
};