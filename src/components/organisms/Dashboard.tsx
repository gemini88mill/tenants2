import { useEffect, useState } from "react";
import { useSessionProvider } from "../contexts/SessionProvider";
import { ProfileType } from "../../supabase/profileClient";
import { Profile } from "./Profile";
import { ProfileContextProvider } from "../contexts/ProfileProvider";
import { Nav } from "./Nav";
import { Box, Slide } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

const NAVWIDTH = "250px";

type DashViews = "dashboard" | "profile" | "settings";

const getView = (view: DashViews) => {
  switch (view) {
    case "dashboard":
      return (
        <Box sx={{ marginLeft: NAVWIDTH }}>
          <h1>Dashboard</h1>
          <p>Welcome, person!</p>
        </Box>
      );
    case "profile":
      return <Profile />;
    case "settings":
      return (
        <Box sx={{ marginLeft: NAVWIDTH }}>
          <h1>Settings</h1>
          <p>Settings go here</p>
        </Box>
      );
  }
};

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
      <div style={{ marginLeft: "250px" }}>
        <Nav
          bannerText={`Welcome, ${profile.display_name}`}
          navWidth={NAVWIDTH}
          onSettingsClick={() => setView("settings")}
        />
          <Slide direction="right" in={view === "dashboard"} mountOnEnter unmountOnExit>
            <h1>Dashboard</h1>
          </Slide>
          <Slide direction="right" in={view === "settings"} mountOnEnter unmountOnExit>
            <h1>Settings</h1>
          </Slide>
        
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
