import { ThemeProvider, createTheme } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./App.css";
import { SessionProvider } from "./components/contexts/SessionProvider";
import { useSession } from "./components/hooks/useSession";
import { supabase } from "./supabase/supabase";
import { Dashboard } from "./components/organisms/Dashboard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9C3535",
      
    },
    background: {
      default: "#121212",
      paper: "#15443f",

    },
    secondary: {
      main: "#359c9c",
    },
    
  },

});

function App() {
  const {session, setSession} = useSession();

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <ThemeProvider theme={darkTheme}>
        <SessionProvider session={session} setSession={setSession}>
          <Dashboard />
        </SessionProvider>
      </ThemeProvider>
    );
  }
}

export default App;
