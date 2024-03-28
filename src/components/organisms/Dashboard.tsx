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

export type DashViews = "dashboard" | "profile" | "settings" | "tenants" | "owners" | "properties";

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
      <>
        <Nav
          bannerText={`Welcome, ${profile.display_name}`}
          navWidth={NAVWIDTH}
          onNavItemClick={setView}
        />
        <TransitionGroup>
            <Main view={view} />
            <Settings navWidth={250} view={view} />
            <Tenants view={view} />
        </TransitionGroup>
      </>
    );
  } else {
    return (
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>
    );
  }
};

type MainProps = {
  view: DashViews;
};

const Main = ({ view }: MainProps) => {
  return view === "dashboard" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <h1>Dashboard</h1>
    </Slide>
  ) : null;
};

const Tenants = ({ view }: MainProps) => {
  return view === "tenants" ? (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <h1>Tenants</h1>
    </Slide>
  ) : null;
};

