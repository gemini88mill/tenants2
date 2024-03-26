/* eslint-disable react-refresh/only-export-components */
import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext<ToastContextType | undefined>(undefined);
ToastContext.displayName = "ToastContext";

type Toast = {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

type ToastContextType = {
  createToast: (toast: Toast) => void;
  clearToast: () => void;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const createToast = (toast: Toast) => {
    setToast(toast);
  };

  const clearToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ createToast, clearToast}}>
      {children}
      <Snackbar
        open={toast !== null}
        autoHideDuration={6000}
        onClose={clearToast}
      >
        <Alert
          onClose={clearToast}
          severity={toast?.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast?.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
