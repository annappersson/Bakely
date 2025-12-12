// src/utils/toastConfig.tsx
import { toast, type ToastOptions } from "react-toastify";

const commonStyle = {
  borderRadius: "12px",
  padding: "14px 16px",
  fontSize: "15px",
  boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
};

export const toastSuccess = (message: string) => {
  const options: ToastOptions = {
    icon: <span>✨</span>,
    style: {
      ...commonStyle,
      background: "#ffeaf1",
      color: "#8a5a6a",
    },
  };
  toast(message, options);
};

export const toastInfo = (message: string) => {
  const options: ToastOptions = {
    icon: <span>💗</span>,
    style: {
      ...commonStyle,
      background: "#ffeaf1",
      color: "#8a5a6a",
    },
  };
  toast.info(message, options);
};

export const toastError = (message: string) => {
  const options: ToastOptions = {
    icon: <span>⚠️</span>,
    style: {
      ...commonStyle,
      background: "#ffd6d9",
      color: "#b00020",
    },
  };
  toast.error(message, options);
};
