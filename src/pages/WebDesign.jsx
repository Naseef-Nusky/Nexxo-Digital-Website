import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ColorGoogle, GoogleText } from '../components/GoogleText'
import { centeredCardClass } from '../utils/grid'

const conversionFeatures = [
  'Prominent enquiry forms',
  'Click-to-call functionality',
  'Request-a-quote forms',
  'Strong calls to action',
  'Service-specific landing pages',
  'Customer reviews',
  'Case studies',
  'Trust signals',
  'Accreditations',
  'Clear pricing messages where appropriate',
  'Live chat integrations',
  'Strategic contact points',
  'Mobile conversion optimisation',
  'Conversion tracking',
]

const journeySteps = [
  {
    num: '01',
    title: 'THEY SEARCH',
    body: 'A potential customer searches Google for a product or service your business provides.',
  },
  {
    num: '02',
    title: 'THEY FIND YOU',
    body: 'SEO or PPC puts your business in front of them at the right moment.',
  },
  {
    num: '03',
    title: 'THEY VISIT YOUR WEBSITE',
    body: 'Your website immediately communicates what you offer and why they should choose you.',
  },
  {
    num: '04',
    title: 'YOU BUILD TRUST',
    body: 'Professional design, compelling content, reviews, case studies and trust signals reduce uncertainty.',
  },
  {
    num: '05',
    title: 'THEY TAKE ACTION',
    body: 'Clear calls to action encourage them to call, request a quote, book or submit an enquiry.',
  },
  {
    num: '06',
    title: 'YOU GET THE LEAD',
    body: 'Your website turns traffic into a genuine sales opportunity.',
  },
]

const conversionFocus = [
  {
    title: 'Strong First Impressions',
    body: 'Visitors should understand what you do within seconds of arriving.',
  },
  {
    title: 'Clear Calls to Action',
    body: 'Every important page should give potential customers an obvious next step.',
  },
  {
    title: 'Trust & Credibility',
    body: 'Reviews, testimonials, case studies, accreditations and other trust signals can help remove the uncertainty that stops people enquiring.',
  },
  {
    title: 'Simple Enquiry Journeys',
    body: 'Contacting your company shouldn’t feel like hard work.',
  },
  {
    title: 'Persuasive Content',
    body: 'We don’t just explain what you offer. We communicate why somebody should choose you.',
  },
  {
    title: 'Mobile Conversion',
    body: 'Telephone buttons, forms and navigation are designed to make taking action simple on smartphones.',
  },
]

const seoDevItems = [
  'Keyword research',
  'Competitor analysis',
  'SEO website architecture',
  'Service landing pages',
  'Location landing pages where genuinely useful',
  'Search-optimised content',
  'Technical SEO',
  'Internal linking',
  'Schema markup',
  'Metadata',
  'Mobile optimisation',
  'Page-speed optimisation',
  'Core Web Vitals',
  'Search-friendly URLs',
  'XML sitemaps',
  'Indexation management',
]

const landingPageTypes = [
  {
    title: 'Specific Services',
    body: 'Target customers searching for individual services.',
  },
  {
    title: 'Google Ads Campaigns',
    body: 'Create focused landing experiences that match PPC searches and advertising messages.',
  },
  {
    title: 'Locations',
    body: 'Develop useful local landing experiences for businesses serving multiple areas.',
  },
  {
    title: 'Marketing Campaigns',
    body: 'Create dedicated destinations for specific promotions or campaigns.',
  },
]

const trackingItems = [
  'Enquiry form submissions',
  'Telephone call clicks',
  'Quote requests',
  'Bookings',
  'Purchases',
  'Key website actions',
  'PPC conversions',
]

const processSteps = [
  {
    num: '01',
    title: 'Understand Your Business',
    body: 'We learn what you sell, who your ideal customers are and what constitutes a valuable lead.',
  },
  {
    num: '02',
    title: 'Research Your Market',
    body: 'We analyse customer searches, competitors and opportunities within your market.',
  },
  {
    num: '03',
    title: 'Plan the Customer Journey',
    body: 'We determine the pages, content and calls to action required to move visitors towards making an enquiry.',
  },
  {
    num: '04',
    title: 'Design for Conversion',
    body: 'We create a professional user experience that builds credibility and makes taking action straightforward.',
  },
  {
    num: '05',
    title: 'Develop With Modern Technology',
    body: 'Our developers build your website using modern coding technologies rather than generic templates.',
  },
  {
    num: '06',
    title: 'Optimise for Search',
    body: 'SEO foundations are incorporated into the website architecture.',
  },
  {
    num: '07',
    title: 'Implement Tracking',
    body: 'Important conversions can be tracked so you can understand how your website performs.',
  },
  {
    num: '08',
    title: 'Launch & Grow',
    body: 'Once the website is live, SEO and PPC can begin driving more potential customers into the system.',
  },
]

const whyChoose = [
  {
    title: 'Bespoke Development',
    body: 'Custom-coded solutions built around your requirements.',
  },
  {
    title: 'Lead Generation Focused',
    body: 'Pages and customer journeys designed around enquiries and sales.',
  },
  {
    title: 'SEO Ready',
    body: 'Built with organic search growth in mind.',
  },
  {
    title: 'PPC Ready',
    body: 'Landing pages designed to maximise the value of paid traffic.',
  },
  {
    title: 'Conversion Focused',
    body: 'Traffic is encouraged towards measurable actions.',
  },
  {
    title: 'Data Driven',
    body: 'Tracking allows future improvements to be based on performance.',
  },
]

function FeatureList({ items }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex items-start gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3.5 text-sm text-slate md:text-base ${centeredCardClass(index, items.length)}`}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function WebDesign() {
  return (
    <main>
      <section className="relative flex min-h-[58vh] items-center overflow-hidden bg-ink px-5 pt-28 pb-16 text-white md:block md:min-h-0 md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.28),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(0,87,255,0.4),transparent_48%),linear-gradient(160deg,#000000_0%,#000000_55%,#050505_100%)]" />
        <img
          src="/Web-Design-hero-BG.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto w-full max-w-4xl text-center">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.14em] md:tracking-[0.24em] text-cyan uppercase">
            Web Design & Development
          </p>
          <h1 className="animate-rise-delay mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Websites Built to Generate Leads, Enquiries & More Business
          </h1>
          <p className="animate-rise-delay-2 mx-auto mt-6 max-w-3xl text-base text-white/75 md:text-xl">
            Your website shouldn’t just look impressive. It should generate
            business.
          </p>
          <Link
            to="/quote"
            className="mt-10 inline-flex btn-brand rounded-full px-6 py-3.5 text-sm font-bold text-white"
          >
            GET A FREE WEBSITE QUOTE
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-brand" />
          <div className="space-y-6 text-base leading-relaxed text-slate md:text-xl">
            <p>
              At Nexxo Digital, we design and develop high-performance, bespoke
              websites with one clear commercial objective: turning more visitors
              into customers.
            </p>
            <p>
              We combine modern web design, custom development, conversion
              strategy and SEO to create websites that attract the right
              audience, build trust and encourage people to take action.
            </p>
            <p>
              Whether that’s making a phone call, requesting a quote, booking a
              consultation or completing an enquiry form, every part of your
              website can be designed around generating opportunities.
            </p>
            <p>
              We don’t rely on generic templates or drag-and-drop page builders.
              Our websites are developed using modern code and advanced web
              technologies, giving us greater control over performance,
              functionality and the customer journey.
            </p>
          </div>
          <p className="mt-10 font-display text-xl font-bold text-ink md:text-2xl">
            More Traffic. More Enquiries. More Customers.
          </p>
          <p className="mt-4 font-display text-xl font-bold tracking-[0.08em] whitespace-nowrap md:text-2xl md:tracking-[0.12em]">
            <span className="text-brand">BUILD</span>
            <span className="text-ink/25">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-ink/25">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-ink/25">.</span>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="Your Website Should Be Your Best Salesperson"
            subtitle="Open 24 Hours a Day. Built to Generate Opportunities."
          />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate md:text-xl">
            <p>
              Potential customers are searching online every day for businesses
              like yours.
            </p>
            <p>
              When they reach your website, you have a limited amount of time to
              convince them that they’ve found the right company.
            </p>
            <p className="font-medium text-ink">
              A successful website needs to answer three questions quickly:
            </p>
          </div>
          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {[
              'Can you solve their problem?',
              'Why should they trust you?',
              'What should they do next?',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-ink/10 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="mt-2 h-1 w-8 shrink-0 rounded-full bg-brand" />
                <span className="text-lg text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-slate md:text-xl">
            <p>Nexxo Digital designs websites around these decisions.</p>
            <p>
              We combine compelling content, strong calls to action, intelligent
              page structures, trust signals and straightforward enquiry journeys
              to help turn website traffic into real sales opportunities.
            </p>
            <p>
              Because ultimately, website traffic alone doesn’t grow your
              business.
            </p>
            <p className="font-display text-xl font-bold text-ink">Customers do.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              eyebrow="Lead Generation Website Design"
              title="Designed Around One Thing: Conversion"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>
                A lead generation website has a different purpose from a website
                that’s simply there to showcase your company.
              </p>
              <p>
                Every page needs to move potential customers closer to taking
                action.
              </p>
              <p>
                Before designing your website, we look at your business, target
                customers, competitors and services to understand exactly what
                motivates somebody to enquire.
              </p>
              <p>We then build the website around that journey.</p>
              <p className="font-medium text-ink">This can include:</p>
            </div>
          </div>
          <FeatureList items={conversionFeatures} />
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-slate md:text-xl">
            We remove unnecessary distractions and make it easy for potential
            customers to take the next step.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Built to Turn Visitors Into Leads"
              subtitle="Every Click Should Have a Purpose"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>Getting somebody onto your website is only the beginning.</p>
              <p>
                What happens next determines whether your marketing produces
                results.
              </p>
              <p>
                <ColorGoogle text="At Nexxo Digital, we consider the complete journey from Google search to website enquiry." />
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-4 lg:grid-cols-6">
            {journeySteps.map((step, index) => (
              <div
                key={step.num}
                className={`rounded-2xl border border-ink/8 bg-white p-5 md:p-6 ${centeredCardClass(index, journeySteps.length)}`}
              >
                <p className="font-display text-sm font-bold tracking-[0.2em] text-cyan">
                  {step.num}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  <ColorGoogle text={step.body} />
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-medium text-ink md:text-xl">
            That’s how we believe business websites should work.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="Bespoke Websites Built With Code"
            subtitle="No Generic Templates. No Restrictions."
          />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate md:text-xl">
            <p>
              Nexxo Digital takes a development-led approach to website design.
            </p>
            <p>
              We don’t rely on generic themes to produce websites that look like
              everybody else’s.
            </p>
            <p>
              Our websites are developed using modern coding frameworks and
              advanced web technologies, allowing us to build around your
              business, your marketing strategy and your conversion objectives.
            </p>
            <p>
              Depending on the project, technologies can include modern HTML,
              CSS, JavaScript, TypeScript, React, Next.js, APIs, databases and
              cloud-based technologies.
            </p>
            <p>But technology isn’t the selling point.</p>
            <p className="font-display text-xl font-bold text-ink">
              The results it enables are.
            </p>
            <p>
              We use technology to create websites that are fast, professional,
              scalable and designed to generate business.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Conversion-Focused Web Design"
              subtitle="Good Design Gets Attention. Great Design Gets Action."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>A beautiful website is valuable.</p>
              <p>
                A beautiful website that consistently generates enquiries is
                significantly more valuable.
              </p>
              <p>
                That’s why conversion strategy sits at the centre of our web design
                process.
              </p>
              <p>
                We consider everything from the wording of your headline to where
                your telephone number appears.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-4 lg:grid-cols-6">
            {conversionFocus.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-ink/8 bg-white p-5 transition duration-300 hover:border-cyan/35 md:p-6 ${centeredCardClass(index, conversionFocus.length)}`}
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="SEO-Friendly Websites"
              subtitle={
                <>
                  Generate Leads From <GoogleText />
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>
                A high-converting website becomes considerably more powerful when
                potential customers can actually find it.
              </p>
              <p>
                That’s why SEO is considered from the beginning of the website
                project.
              </p>
              <p>
                We can research what your potential customers are searching for and
                build your website structure around commercially valuable keywords.
              </p>
              <p>
                Instead of creating five generic pages and trying to optimise them
                afterwards, we can build dedicated pages around the services and
                locations that matter to your business.
              </p>
              <p className="font-medium text-ink">
                Our SEO-focused web development can include:
              </p>
            </div>
          </div>
          <FeatureList items={seoDevItems} />
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-base leading-relaxed text-slate md:text-xl">
            <p>The objective isn’t simply more traffic.</p>
            <p className="font-medium text-ink">
              It’s attracting people who are actively looking for what you sell.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title={
              <>
                Websites Built for <GoogleText /> Ads
              </>
            }
            subtitle="Turn Paid Clicks Into Paying Customers"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
            <p>
              <ColorGoogle text="If you’re paying Google every time somebody clicks your advert, your website needs to work extremely hard." />
            </p>
            <p>Poor landing pages can waste advertising budgets.</p>
            <p>
              That’s why Nexxo Digital can create dedicated PPC landing pages
              around specific campaigns, services and customer searches.
            </p>
            <p>
              <ColorGoogle text="For example, instead of sending every Google Ads visitor to your homepage, we can create a landing page specifically designed around what that person searched for." />
            </p>
            <p>The message matches their search.</p>
            <p>The content answers their questions.</p>
            <p>The call to action gives them an immediate next step.</p>
          </div>
          <div className="mt-10 rounded-2xl border border-cyan/20 bg-white p-6 md:p-8">
            <p className="font-display text-xl font-bold text-ink md:text-2xl">
              PPC Generates the Click. Your Website Generates the Lead.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
              Because Nexxo Digital provides both web development and PPC
              management, the two can work together instead of being managed
              independently.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="More Leads From Your Existing Traffic"
            subtitle="Sometimes You Don’t Need More Visitors. You Need More From Them."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
            <p>Imagine two websites each receive 1,000 relevant visitors.</p>
            <p>Website A converts 2% into enquiries.</p>
            <p className="font-medium text-ink">That’s 20 leads.</p>
            <p>Website B converts 5%.</p>
            <p className="font-medium text-ink">That’s 50 leads.</p>
            <p>The traffic hasn’t increased.</p>
            <p>But the number of opportunities has more than doubled.</p>
            <p>This is why conversion rate optimisation is so important.</p>
            <p>
              Rather than focusing exclusively on attracting more visitors, we
              look for ways to increase the commercial value of the traffic
              you’re already receiving.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Landing Pages That Sell"
              subtitle="One Audience. One Message. One Objective."
            />
            <p className="mt-8 text-base leading-relaxed text-slate md:text-xl">
              Dedicated landing pages can be extremely effective for lead
              generation.
            </p>
            <p className="mt-4 text-lg font-medium text-ink">
              We can build pages around:
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {landingPageTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 md:p-7"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-xl font-semibold text-ink">
                  <ColorGoogle text={item.title} />
                </h3>
                <p className="mt-3 leading-relaxed text-slate">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3 text-center text-base leading-relaxed text-slate md:text-xl">
            <p>Each landing page can have one primary objective:</p>
            <p className="font-display text-xl font-bold text-ink">
              Get the visitor to take action.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Know Where Your Leads Come From"
              subtitle="Track What Actually Generates Business"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>
                Marketing becomes considerably more powerful when you understand
                what’s producing results.
              </p>
              <p>
                We can implement appropriate tracking to help businesses understand
                how visitors interact with their website and which marketing
                activity generates valuable actions.
              </p>
              <p className="font-medium text-ink">
                Depending on your setup, this can include tracking:
              </p>
            </div>
          </div>
          <FeatureList items={trackingItems} />
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-base leading-relaxed text-slate md:text-xl">
            <p>
              This allows SEO, PPC and website decisions to become increasingly
              data driven.
            </p>
            <p>Instead of guessing what’s working, you can start measuring it.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="Built for Mobile Leads"
            subtitle="Your Next Customer Could Be Holding Their Phone Right Now"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
            <p>
              Potential customers increasingly search, compare companies and make
              enquiries directly from their phones.
            </p>
            <p>
              Every Nexxo Digital website is therefore developed to work
              effectively across mobile, tablet and desktop devices.
            </p>
            <p>We pay particular attention to mobile conversion.</p>
          </div>
          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {[
              'Telephone numbers can become tap-to-call buttons.',
              'Forms remain simple.',
              'Navigation remains clear.',
              'Important information remains easy to find.',
              'Calls to action remain prominent.',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-ink/10 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="mt-2 h-1 w-8 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-ink md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base leading-relaxed text-slate md:text-xl">
            Because losing a customer simply because your website is frustrating
            on mobile shouldn’t happen.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            title="Fast Websites Convert Better"
            subtitle="Don’t Keep Potential Customers Waiting"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
            <p>
              Every additional obstacle between a visitor and an enquiry creates
              another opportunity for them to leave.
            </p>
            <p>Website speed is one of those obstacles.</p>
            <p>
              Our custom-development approach allows us to build efficient
              websites without relying on unnecessary themes and large
              collections of plugins.
            </p>
            <p>
              Performance is considered throughout the development process to
              create a fast, responsive experience.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="More Than a Website"
              subtitle="Build Your Online Lead Generation System"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>
                The real power of Nexxo Digital comes from bringing your website
                and marketing together.
              </p>
              <p>
                Rather than building a website and simply hoping customers discover
                it, we can create the entire strategy.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'BUILD',
                body: 'We develop a professional, conversion-focused website designed to generate enquiries.',
              },
              {
                title: 'RANK',
                body: 'Our SEO campaigns increase your visibility when potential customers search Google.',
              },
              {
                title: 'GROW',
                body: 'Our PPC and Google Ads campaigns put your business directly in front of customers searching for your services.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 text-center md:p-7"
              >
                <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-xl font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate">
                  <ColorGoogle text={item.body} />
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-medium text-ink md:text-xl">
            Everything works together.
          </p>
          <ul className="mx-auto mt-6 max-w-md space-y-3 text-center">
            {[
              'SEO + PPC → Traffic',
              'Website → Conversion',
              'Conversion → Leads',
              'Leads → Customers',
              'Customers → Growth',
            ].map((item) => (
              <li
                key={item}
                className="font-display text-base font-semibold text-ink md:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Our Lead Generation Web Design Process"
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-4 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                className={`rounded-2xl border border-ink/8 bg-mist/60 p-5 md:p-6 ${centeredCardClass(index, processSteps.length)}`}
              >
                <p className="font-display text-sm font-bold tracking-[0.2em] text-cyan">
                  {step.num}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
            <SectionHeading
              className="text-center"
              title="Why Businesses Choose Nexxo Digital"
              subtitle="We Think About Revenue, Not Just Design"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-xl">
              <p>We approach websites from a commercial perspective.</p>
              <p>The question isn’t simply:</p>
              <p className="font-display text-xl font-semibold text-ink">
                “Does this website look good?”
              </p>
              <p>It’s:</p>
              <p className="font-display text-xl font-semibold text-ink">
                “Will this website help generate more business?”
              </p>
              <p>That difference influences everything we build.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-4 lg:grid-cols-6">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-ink/8 bg-white p-5 transition duration-300 hover:border-cyan/35 md:p-6 ${centeredCardClass(index, whyChoose.length)}`}
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-brand" />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.2),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(0,87,255,0.26),transparent_48%)]" />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-brand" />
          <SectionHeading
            className="text-center"
            light
            title="Stop Treating Your Website Like an Online Brochure"
            subtitle="Turn It Into a Lead Generation Machine."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
            <p>Your website should be actively helping your sales team.</p>
            <p>
              It should be attracting potential customers, explaining why they
              should choose you, building trust and generating enquiries every
              single day.
            </p>
            <p>That’s what we build at Nexxo Digital.</p>
            <p>
              Whether you need a completely new website or your existing site
              isn’t producing enough business, we’ll create a digital strategy
              focused on turning more online searches into leads, customers and
              revenue.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            DON’T JUST GET ONLINE. GET MORE BUSINESS.
          </p>
          <p className="mt-4 font-display text-xl font-bold tracking-[0.08em] whitespace-nowrap md:tracking-[0.12em]">
            <span className="text-brand">BUILD</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-white/35">.</span>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="btn-brand rounded-full px-6 py-3.5 text-sm font-bold text-white"
            >
              GET YOUR FREE WEBSITE QUOTE
            </Link>
            <Link
              to="/quote"
              className="btn-outline rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
            >
              SPEAK TO NEXXO DIGITAL
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
