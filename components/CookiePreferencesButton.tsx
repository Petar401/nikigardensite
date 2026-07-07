"use client";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="foot-link-button"
      onClick={() => {
        window.dispatchEvent(new Event("nlg:open-cookie-prefs"));
      }}
    >
      Cookie preferences
    </button>
  );
}
