import { Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { ProfileType } from "../../supabase/profileClient";
import { ProfileContextProvider } from "../contexts/ProfileProvider";
import { useSessionProvider } from "../contexts/SessionProvider";
import { Nav } from "./Nav";
import { Profile } from "./Profile";
import { Settings } from "./Settings/Settings";

const NAVWIDTH = "250px";

export type DashViews = "dashboard" | "profile" | "settings";

export const Dashboard = () => {
  const { session, getProfile } = useSessionProvider();
  const [profile, setProfile] = useState<ProfileType | null>();
  const [view, setView] = useState<DashViews>("dashboard");

  useEffect(() => {
    (async () => {
      const res = await getProfile(session);

      setProfile(res);
    })();
  }, [getProfile, session]);

  if (profile) {
    return (
      <div>
        <Nav
          bannerText={`Welcome, ${profile.display_name}`}
          navWidth={NAVWIDTH}
          onSettingsClick={() => setView("settings")}
        />
        <TransitionGroup>
            <Main view={view} />
            <Settings navWidth={250} view={view} />
        </TransitionGroup>
      </div>
    );
  } else {
    return (
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>
    );
  }
};



const Main = ({ view }: { view: DashViews }) => {
  return view === "dashboard" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <h1>Dashboard</h1>
    </Slide>
  ) : null;
};

