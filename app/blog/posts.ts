export type Post = {
  slug: string;
  title: string;
  /** SEO meta description */
  description: string;
  /** Short summary shown on the blog index card */
  excerpt: string;
  /** Machine-readable publish date, e.g. 2026-06-18 */
  dateISO: string;
  /** Human-readable publish date, e.g. 18 June 2026 */
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  keywords: string[];
};

export const POSTS: Post[] = [
  {
    slug: "summer-garden-care-norwich",
    title:
      "Summer garden care in Norwich: looking after your lawn and borders through sun and rain",
    description:
      "A Norwich gardener's practical guide to summer garden care — how to water, mow and look after your lawn and borders through Norfolk's hot dry spells and sudden downpours.",
    excerpt:
      "A Norfolk summer can swing from bone-dry weeks to a proper soaking in the space of a few days. Here's how I keep Norwich lawns and borders looking their best through both.",
    dateISO: "2026-06-18",
    dateLabel: "18 June 2026",
    readTime: "9 min read",
    image: "/assets/summer-garden-care.jpg",
    imageAlt:
      "A freshly striped green lawn at golden hour beside a Norfolk stone cottage, with flower borders in full summer bloom near Norwich",
    tags: ["Summer", "Lawn care", "Norwich"],
    keywords: [
      "summer garden care Norwich",
      "summer lawn care Norfolk",
      "watering garden Norwich",
      "gardener Norwich summer",
      "lawn care Norwich",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
