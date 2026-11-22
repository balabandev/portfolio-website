"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({
  text,
  label,
  doneLabel,
}: {
  text: string;
  label: string;
  doneLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Буфер обмена недоступен (например, не HTTPS): молча ничего не делаем
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-line px-3 text-xs text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {copied ? (
        <Check size={14} aria-hidden className="text-ok" />
      ) : (
        <Copy size={14} aria-hidden />
      )}
      <span aria-live="polite">{copied ? doneLabel : label}</span>
    </button>
  );
}