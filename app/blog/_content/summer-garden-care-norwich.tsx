import Link from "next/link";

/** Inline Harvard-style citation that jumps to the matching reference entry. */
function Cite({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a href={`#${id}`} className="cite">
      ({children})
    </a>
  );
}

export default function SummerGardenCareNorwich() {
  return (
    <article className="article-prose">
      <p>
        If you garden anywhere around Norwich, you already know a Norfolk summer can’t make its
        mind up. One week the ground’s like concrete and the lawn’s gone the colour of straw; the
        next, a thundery downpour rolls in off the coast and everything’s soaked before teatime. A
        lot of that summer rain arrives in short, sharp bursts rather than steady drizzle{" "}
        <Cite id="ref-metoffice">Met Office, no date</Cite>, which is exactly why gardens round
        here need a slightly different touch through June, July and August.
      </p>
      <p>
        I look after gardens across the city and the villages most weeks of the year, so I see how
        both extremes play out. Here’s how I keep lawns, borders and hedges in good shape through a
        typical East Anglian summer — the dry spells, the wet ones, and everything in between.
      </p>

      <h2>When the sun’s out and the ground’s baked hard</h2>
      <p>
        The first thing people get wrong in a hot spell is watering a little bit, often. A quick
        splash every evening feels caring, but it only wets the top inch of soil and coaxes roots
        upward to find it — which leaves the whole plant more exposed the moment you stop. A good
        soak once or twice a week does far more good than a daily dribble, because the water sinks
        down and the roots follow it{" "}
        <Cite id="ref-rhs-water">Royal Horticultural Society, no date a</Cite>. Do it early in the
        morning or in the evening, too, so less of it steams straight back off in the midday heat.
      </p>
      <p>
        Lawns worry people most, because they brown off so fast. My honest advice: don’t panic, and
        don’t reach for the hose. An established lawn that’s gone brown isn’t dead — it’s dormant,
        and it greens up again within a couple of weeks of proper rain returning{" "}
        <Cite id="ref-rhs-lawn">Royal Horticultural Society, no date b</Cite>. What matters far more
        is how you cut it. In dry weather I raise the mower blade, cut less often, and never scalp
        it close, because longer grass shades its own roots and holds moisture better{" "}
        <Cite id="ref-rhs-lawn">Royal Horticultural Society, no date b</Cite>. If the clippings are
        short I’ll often leave them on the surface as well, where they break down and act as a thin
        mulch rather than filling another bag.
      </p>
      <p>
        The things that genuinely do need watering in a heatwave are the newcomers and the
        containers — freshly laid turf, this year’s bedding, pots and hanging baskets. They haven’t
        got the root run to fend for themselves yet, so they’re the ones I keep an eye on when a dry
        fortnight settles in over Norfolk.
      </p>

      <h2>When it won’t stop raining</h2>
      <p>
        Then the weather flips. After a wet spell the grass practically leaps out of the ground, and
        it’s tempting to get straight out and mow. Wait for it to dry off first if you can — cutting
        sodden grass tears rather than slices, clogs the mower, leaves ruts across soft ground and
        smears clippings everywhere. A day’s patience gives a far cleaner, tidier finish.
      </p>
      <p>
        Rain brings a few other jobs with it. Borders on our heavier Norfolk clay can sit
        waterlogged, so I’ll ease off walking on wet beds to avoid compacting them. Slugs and snails
        have a field day on damp evenings, hostas and young plants especially. And warmth plus
        moisture is the perfect recipe for weeds and hedges to romp away, so the gap between tidy-ups
        gets shorter through a muggy Norwich July than it does in a dry one.
      </p>

      <h2>Borders, hedges and a bit of feeding</h2>
      <p>
        Summer borders reward a little and often. Deadheading — snipping off the spent flowers —
        keeps roses, dahlias and bedding pushing out fresh blooms instead of setting seed, and five
        minutes with the secateurs makes a real difference over a season. A feed in early summer
        gives everything a lift while it’s growing hard.
      </p>
      <p>
        If there’s one job I’d nudge every gardener towards, it’s mulching the beds. A layer of bark
        or well-rotted compost over damp soil locks moisture in, keeps the weeds down and saves you
        watering later on{" "}
        <Cite id="ref-rhs-mulch">Royal Horticultural Society, no date c</Cite>. It’s the closest
        thing there is to a free afternoon.
      </p>
      <p>
        Hedges are worth a word of caution in high summer. Bird nesting season runs from March right
        through to the end of August, and it’s against the law to damage an active nest{" "}
        <Cite id="ref-rspb">RSPB, no date</Cite>. So before I trim anything in the middle of the
        season I have a proper look through it first, and if there’s a nest in there the hedge waits.
        It’s an easy thing to check and it matters.
      </p>

      <h2>Going easy on the water</h2>
      <p>
        It’s worth remembering where we live. The east of England is the driest part of the country
        and is classed as seriously water-stressed, with demand pressing hard against what little
        rain we actually get{" "}
        <Cite id="ref-ea">Environment Agency, 2025</Cite>. A hosepipe running over a lawn that would
        recover on its own is water we can ill afford round here.
      </p>
      <p>
        Small habits add up. A water butt on the downpipe catches the summer storms for the dry
        weeks that follow; mulched beds hold onto what they’re given; washing-up or bath water is
        fine for the borders in a pinch{" "}
        <Cite id="ref-rhs-water">Royal Horticultural Society, no date a</Cite>. None of it’s hard
        work, and it keeps a garden looking cared-for without emptying the mains.
      </p>

      <h2>Heading off on holiday?</h2>
      <p>
        If you’re away for a couple of weeks in August, a bit of prep saves a lot of heartache.
        Group your pots together in a shadier spot so they dry out more slowly, give the borders a
        good soak and a mulch before you go, and — if you can — ask a neighbour to keep the
        containers ticking over. Come back to a garden that’s coped, not one that’s given up.
      </p>

      <p>
        None of this is complicated, but it does need doing at the right moment, and summer moves
        fast once it gets going. If you’d rather someone else kept on top of the mowing, watering and
        tidying while the good weather lasts, that’s exactly what I do — have a look at{" "}
        <Link href="/services">what I offer</Link> or{" "}
        <Link href="/contact">drop me a message</Link> with your postcode and I’ll take it from
        there.
      </p>

      <div className="article-refs">
        <h2>References</h2>
        <ol>
          <li id="ref-ea">
            Environment Agency (2025) <em>Raising the standard for water efficiency in the east of
            England</em>. Available at:{" "}
            <a
              href="https://environmentagency.blog.gov.uk/2025/06/13/raising-the-standard-for-water-efficiency-in-the-east-of-england/"
              target="_blank"
              rel="noopener noreferrer"
            >
              environmentagency.blog.gov.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
          <li id="ref-metoffice">
            Met Office (no date) <em>Eastern England: climate</em>. Available at:{" "}
            <a
              href="https://www.metoffice.gov.uk/binaries/content/assets/metofficegovuk/pdf/weather/learn-about/weather/regional-climates/eastern-england_-climate-met-office.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              metoffice.gov.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
          <li id="ref-rhs-water">
            Royal Horticultural Society (no date a) <em>Watering plants wisely</em>. Available at:{" "}
            <a
              href="https://www.rhs.org.uk/garden-jobs/watering"
              target="_blank"
              rel="noopener noreferrer"
            >
              rhs.org.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
          <li id="ref-rhs-lawn">
            Royal Horticultural Society (no date b) <em>Lawn care for drought conditions</em>.
            Available at:{" "}
            <a
              href="https://www.rhs.org.uk/lawns/drought-care"
              target="_blank"
              rel="noopener noreferrer"
            >
              rhs.org.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
          <li id="ref-rhs-mulch">
            Royal Horticultural Society (no date c) <em>Mulches and mulching</em>. Available at:{" "}
            <a
              href="https://www.rhs.org.uk/soil-composts-mulches/mulch"
              target="_blank"
              rel="noopener noreferrer"
            >
              rhs.org.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
          <li id="ref-rspb">
            RSPB (no date) <em>The Wildlife and Countryside Act 1981</em>. Available at:{" "}
            <a
              href="https://www.rspb.org.uk/birds-and-wildlife/wildlife-and-countryside-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              rspb.org.uk
            </a>{" "}
            (Accessed: 6 July 2026).
          </li>
        </ol>
      </div>
    </article>
  );
}
