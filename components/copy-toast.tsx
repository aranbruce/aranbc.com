"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ShowCopyToast = (message?: string) => void;

const CopyToastContext = createContext<ShowCopyToast | null>(null);

export function useCopyToast(): ShowCopyToast {
  const ctx = useContext(CopyToastContext);
  if (!ctx) {
    throw new Error("useCopyToast must be used within CopyToastProvider");
  }
  return ctx;
}

const defaultMessage = "Link copied to clipboard";

export function CopyToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const show = useCallback((text?: string) => {
    setMessage(text ?? defaultMessage);
    setOpen(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <CopyToastContext.Provider value={show}>
      {children}
      <div
        className={cn(
          "pointer-events-none fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 justify-center px-4 transition-[opacity,transform] duration-200 ease-out",
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground shadow-lg drop-shadow-card backdrop-blur-xs"
        >
          {message}
        </div>
      </div>
    </CopyToastContext.Provider>
  );
}
