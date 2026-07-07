export const SITE_URL = "https://www.nikislawngardens.co.uk";
export const SITE_NAME = "Niki's Lawn & Garden Services";
export const SITE_DESCRIPTION =
  "Reliable lawn mowing, hedge trimming, borders and garden clearances across Norwich and 15 miles around. Fully insured, waste-carrier licensed. Free quotes.";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const TELEPHONE = "+447843818290";
export const EMAIL = "hello@nikislawngardens.co.uk";
export const SAME_AS = [
  "https://www.facebook.com/profile.php?id=61561680606312",
  "https://www.tiktok.com/@nikisserviceshg",
  "https://share.google/r5ty22r7Hsa5UoVDx",
];

export const AREAS_SERVED = [
  "Norwich",
  "Thorpe St Andrew",
  "Eaton",
  "Hellesdon",
  "Sprowston",
  "Wymondham",
  "Costessey",
  "Drayton",
  "Taverham",
  "Poringland",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GardenStore"],
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/assets/front-bg.jpg`,
    logo: `${SITE_URL}/assets/logo.jpg`,
    description: SITE_DESCRIPTION,
    telephone: TELEPHONE,
    email: EMAIL,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Norwich",
      addressRegion: "Norfolk",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6309,
      longitude: 1.2974,
    },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.6309, longitude: 1.2974 },
      geoRadius: 24140,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: SAME_AS,
    slogan: "Trusted in Norwich since 2020",
    knowsLanguage: ["en-GB"],
  } as const;
}
