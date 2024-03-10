/* eslint-disable react-refresh/only-export-components */
import { Session } from "@supabase/supabase-js";
import { createContext, useContext } from "react";
import { ProfileType, getProfileFromSession } from "../../supabase/profileClient";

type SessionContextType = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  getProfile: (session: Session | null) => Promise<ProfileType | null>;
};

const SessionContext = createContext<SessionContextType>({
  session: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSession: (_session: Session | null) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getProfile: async (_session: Session | null) => {
    return null;
  },
});
SessionContext.displayName = "SessionContext";

type SessionProviderProps = {
  children: React.ReactNode;
  session: Session | null;
  setSession: (session: Session | null) => void;
};

export const SessionProvider = ({
  children,
  session,
  setSession,
}: SessionProviderProps) => {
  const getProfile = async (session: Session | null) => getProfileFromSession(session)

  return (
    <SessionContext.Provider value={{ session, setSession, getProfile }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionProvider = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessionProvider must be used within a SessionProvider");
  }
  return context;
};
