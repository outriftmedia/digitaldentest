"use client";
import { useEffect, useState } from "react";

const KEY = "dd_cookies_accepted_v1";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  function accept() {
    try { localStorage.setItem(KEY, "1"); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[90] bg-surface border border-border rounded-xl p-5 shadow-elegant animate-fade-in" style={{ boxShadow: "var(--shadow-elegant)" }}>
      <p className="text-sm text-foreground mb-3">
        We use cookies to improve your experience. By continuing, you accept our{" "}
        <a href="#" className="underline text-accent">Terms & Conditions</a>.
      </p>
      <div className="flex gap-2">
        <button onClick={accept} className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-xs font-bold uppercase tracking-widest hover:opacity-90">
          Accept
        </button>
        <button onClick={accept} className="px-4 py-2 border border-border rounded-md text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent">
          Decline
        </button>
      </div>
    </div>
  );
}
