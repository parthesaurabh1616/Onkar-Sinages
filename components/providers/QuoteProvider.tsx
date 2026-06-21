"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { QuoteModal } from "@/components/ui/QuoteModal";

type QuoteContextValue = {
  open: (product?: string) => void;
  close: () => void;
  isOpen: boolean;
  preset?: string;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>();

  const open = (product?: string) => {
    setPreset(product);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const value = useMemo(
    () => ({ open, close, isOpen, preset }),
    [isOpen, preset]
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={close} preset={preset} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
