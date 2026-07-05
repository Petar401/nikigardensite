:root {
  --forest: #14432a;
  --forest-deep: #0f3521;
  --lime: #bfe88a;
  --moss: #5f8a2e;
  --cream: #f4efe1;
  --cream-line: #ddd4bd;
  --sand: #e7ddc7;
  --sand-line: #d3c9ae;
  --amber: #f4a11d;
  --amber-dark: #e59413;
  --ink: #2b3724;
  --body-text: #3c4837;
  --muted: #5a6b52;
  --muted-2: #8a9680;
  --card-line: #e6ddc6;

  --font-body: var(--font-barlow), sans-serif;
  --font-heading: var(--font-barlow-condensed), sans-serif;
  --font-label: var(--font-barlow-semi-condensed), sans-serif;
  --font-signature: var(--font-caveat), cursive;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--cream);
  background-image: radial-gradient(circle at 1px 1px, rgba(20, 60, 36, 0.07) 1px, transparent 0);
  background-size: 24px 24px;
  font-family: var(--font-body);
  color: var(--ink);
  min-height: 100vh;
}

a {
  color: inherit;
}

button {
  font: inherit;
}

/* ---------- shared type tokens ---------- */

.kicker {
  font-family: var(--font-label);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2.2px;
  color: var(--moss);
}

.section-heading {
  margin: 10px 0 0;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  color: var(--forest);
}

.section-lede {
  margin: 14px 0 0;
  font-size: 17px;
  line-height: 1.55;
  color: var(--muted);
}

/* ---------- nav ---------- */

.nav-link {
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 6px 1px;
  color: #4a5842;
  border-bottom: 2.5px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.nav-link.active {
  font-weight: 700;
  color: var(--forest);
  border-bottom-color: var(--moss);
}

.nav-link:hover {
  color: var(--forest);
  border-bottom-color: var(--lime);
}

/* ---------- buttons ---------- */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-label);
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.btn-cta {
  background: var(--amber);
  color: var(--forest);
  box-shadow: 0 2px 8px rgba(244, 161, 29, 0.35);
  transition: background 0.15s;
}
.btn-cta:hover {
  background: var(--amber-dark);
}

.btn-ghost-hero {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  transition: background 0.15s;
}
.btn-ghost-hero:hover {
  background: rgba(255, 255, 255, 0.22);
}

.btn-ghost-footer {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  transition: background 0.15s;
}
.btn-ghost-footer:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-dark {
  background: var(--forest);
  color: #fff;
  transition: background 0.15s;
}
.btn-dark:hover {
  background: var(--forest-deep);
}

.btn-outline {
  background: transparent;
  color: var(--forest);
  border: 1.5px solid #c6bfa6;
  transition: background 0.15s;
}
.btn-outline:hover {
  background: #efe7d1;
}

/* ---------- footer links ---------- */

.foot-link {
  color: var(--sand);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.15s;
}
.foot-link:hover {
  color: var(--lime);
}

/* ---------- home: service + gallery cards ---------- */

.service-card {
  display: block;
  text-decoration: none;
  background: #fff;
  border: 1px solid var(--card-line);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(20, 60, 36, 0.07);
  transition: transform 0.18s, box-shadow 0.18s;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 34px rgba(20, 60, 36, 0.16);
}

.gallery-tile {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  break-inside: avoid;
  margin-bottom: 18px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 6px 18px rgba(20, 60, 36, 0.1);
  transition: transform 0.18s, box-shadow 0.18s;
}
.gallery-tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(20, 60, 36, 0.22);
}

/* ---------- contact form fields ---------- */

.fld {
  width: 100%;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--ink);
  background: #fbf8f0;
  border: 1.5px solid var(--cream-line);
  border-radius: 9px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.fld:focus {
  border-color: var(--moss);
  box-shadow: 0 0 0 3px rgba(95, 138, 46, 0.15);
}
.fld::placeholder {
  color: var(--muted-2);
}
textarea.fld {
  resize: vertical;
  min-height: 120px;
}

.field-label {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-label);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.4px;
  color: var(--forest);
}
