import { CheckSquareOffset, Warning, WarningCircle } from "phosphor-react";
import styles from "./Snackbar.module.css";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

interface SnackbarProps {
  type: string;
  open: boolean;
  children: string;
  onClose: () => void;
}

export function Snackbar({ type, open, children, onClose }: SnackbarProps) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSnackbarOpen(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [open]);
  return (
    <div
      className={`${styles.snackbar} ${isSnackbarOpen ? styles.visible : ""} ${
        styles[type]
      }
      }`}
    >
      <div className={styles.snackbarContent}>
        {type === "success" && <CheckSquareOffset size={24} />}
        {type === "info" && <WarningCircle size={24} />}
        {type === "warning" && <Warning size={24} />}
        {type === "error" && <WarningCircle size={24} />}

        <span>{children}</span>
      </div>
      <button className={styles.close} onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Snackbar;
