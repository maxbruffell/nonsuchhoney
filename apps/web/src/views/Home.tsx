'use client';

import { useEffect, useState } from 'react';
import {
  Mail,
  MapPin,
  Tractor,
  Home as HomeIcon,
  Flower2,
  ShieldCheck,
  Wrench,
  Leaf,
  Building2,
  Users,
  BadgeCheck,
  Sprout,
} from 'lucide-react';

const LOGO_URL =
  'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/65174816-5125-47d8-a789-bf701da27093.png';
const PRODUCT_IMAGE_URL =
  'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/4c189b84-7975-4f04-a34a-3056bcffe7bf.jpg';
const BEES_IMAGE_URL =
  'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/650a2c75-f928-47b9-9146-868df6cdb642.jpg';
const BEES_IMAGE_2_URL =
  'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/95e086bc-5b1a-47c7-a890-d3059ee72b19.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Where to Buy Section */}
      <WhereToBuySection />

      {/* Landowners Section */}
      <LandownersSection />

      {/* Managed Beekeeping Section */}
      <ManagedBeekeepingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Honeycomb pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath fill='%23000000' d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill-opacity='1' fill-rule='evenodd' stroke-width='1' stroke='%23000'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-transparent to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img src={LOGO_URL} alt="Nonsuch Honey" className="w-64 md:w-80 lg:w-96 mx-auto mb-8" />
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
          Pure honey from our own bees in Cheam, Surrey
        </p>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="tracking-widest uppercase font-light">Cheam, Surrey</span>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">Our Story</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              We're Max and Jade, the beekeepers behind Nonsuch Honey. Our journey began with a
              fascination for these incredible creatures and a desire to produce the purest local
              honey for our community.
            </p>
            <p>
              All our honey comes from our own hives located in Cheam, Surrey — right in the heart
              of the historic Nonsuch area. Our bees forage on the diverse flora of local gardens,
              parks, and the beautiful Nonsuch Park itself.
            </p>
            <p>
              We believe in minimal intervention, allowing our bees to do what they do best. The
              result is pure, unprocessed honey that captures the unique essence of our Surrey
              countryside.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-honey/20 to-amber/10 rounded-sm -rotate-3" />
            <div className="relative bg-cream p-8 rounded-sm shadow-sm">
              <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground/80 leading-relaxed">
                "From our hives to your table — nothing added, nothing taken away"
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-0.5 bg-honey" />
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Max & Jade
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bees image section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-honey/20 to-amber/10 rounded-sm rotate-2" />
            <div className="relative grid grid-cols-1 gap-4">
              <img
                src={BEES_IMAGE_2_URL}
                alt="Our Buckfast bees"
                className="w-full rounded-sm shadow-xl"
              />
              <img
                src={BEES_IMAGE_URL}
                alt="Our Buckfast bees at the hive"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6 text-muted-foreground leading-relaxed">
            <h3 className="text-2xl font-medium text-foreground">Our Buckfast Bees</h3>
            <p>
              We keep Buckfast bees — a gentle, hardy breed known for their calm temperament and
              excellent honey production. Developed by Brother Adam at Buckfast Abbey in Devon,
              these wonderful bees are perfectly suited to the British climate.
            </p>
            <p>
              Watching them come and go from the hive, laden with pollen from local flowers, never
              gets old. Each bee plays its part in creating the golden honey that ends up in your
              jar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">Our Honey</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={PRODUCT_IMAGE_URL}
              alt="Nonsuch Honey jars"
              className="w-full rounded-sm shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Pure & Unfiltered</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our honey is extracted with care and bottled without heating or fine filtering,
                preserving all the natural enzymes, pollen, and goodness that makes pure honey so
                special.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Truly Local</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every jar represents the unique floral profile of Cheam and its surroundings. The
                taste varies subtly with the seasons, reflecting what's blooming in our corner of
                Surrey.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Small Batch</h3>
              <p className="text-muted-foreground leading-relaxed">
                We produce limited quantities to ensure the highest quality. When our honey is gone,
                it's gone until the next harvest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereToBuySection() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">Where to Buy</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-background p-8 rounded-sm shadow-sm border border-border/50">
            <h3 className="text-2xl font-medium mb-4">Local Stockists</h3>
            <p className="text-muted-foreground leading-relaxed">
              We sell our honey in local shops in Cheam village. Feel free to get in touch to
              receive our up to date stockists list.
            </p>
            <a
              href="mailto:info@nonsuchhoney.co.uk"
              className="inline-flex items-center gap-2 mt-4 text-sm text-honey hover:underline font-medium"
            >
              <Mail className="w-4 h-4" />
              info@nonsuchhoney.co.uk
            </a>
          </div>

          <div className="bg-background p-8 rounded-sm shadow-sm border border-border/50">
            <h3 className="text-2xl font-medium mb-4">Buy Direct</h3>
            <p className="text-muted-foreground leading-relaxed">
              We also sell direct in bulk — minimum order of 5 jars. Get in touch to place an order.
            </p>
            <a
              href="mailto:info@nonsuchhoney.co.uk"
              className="inline-flex items-center gap-2 mt-4 text-sm text-honey hover:underline font-medium"
            >
              <Mail className="w-4 h-4" />
              info@nonsuchhoney.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandownersSection() {
  const benefits = [
    {
      icon: Flower2,
      title: 'Enhanced Pollination',
      description:
        'A single colony of bees can visit millions of flowers a day. Having hives on your land dramatically improves pollination across your fields, orchards, and gardens — leading to better yields and healthier crops.',
    },
    {
      icon: Leaf,
      title: 'Boost to Biodiversity',
      description:
        'Bees are a keystone species. Their presence encourages a richer ecosystem, supporting wildflowers, insects, and birds throughout your land.',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Managed — No Effort from You',
      description:
        "We take care of everything. You simply provide the space and we handle all hive management, inspections, and care. There's nothing for you to do.",
    },
    {
      icon: Tractor,
      title: 'Minimal Space Required',
      description:
        'We only need a small, sheltered corner of your land with vehicle access for hive checks and equipment. Even a modest patch away from high-traffic areas works perfectly.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm tracking-widest uppercase text-honey font-medium">
            For Landowners & Farmers
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">Host Our Bees</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-8" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed text-lg">
          Do you have a field, orchard, garden, or unused corner of land near Cheam? We're always
          looking for new sites to place our hives — and hosting bees is one of the simplest ways to
          give your land a natural boost.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex gap-5 p-6 bg-card/50 rounded-sm border border-border/40"
              >
                <div className="mt-1 shrink-0">
                  <Icon className="w-6 h-6 text-honey" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-amber-50/60 border border-amber-200/60 rounded-sm p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-medium mb-3">What We Need</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We ask for a small, reasonably sheltered area with vehicle access so we can visit for
            regular hive inspections. That's it. If you have land available — even seasonally — we'd
            love to hear from you.
          </p>
          <a
            href="mailto:info@nonsuchhoney.co.uk"
            className="inline-flex items-center gap-3 bg-honey text-foreground px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-amber transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function ManagedBeekeepingSection() {
  const features = [
    {
      icon: HomeIcon,
      title: 'Bees in Your Garden',
      description:
        "We'll assess your garden and install a hive in the perfect spot — safe, well-positioned, and out of the way of day-to-day life.",
    },
    {
      icon: Wrench,
      title: 'We Handle Everything',
      description:
        'From routine inspections and swarm prevention to feeding and winter preparation — we manage the entire colony on your behalf.',
    },
    {
      icon: Flower2,
      title: 'Your Garden Will Thrive',
      description:
        'Your flowers, fruit trees, and vegetables will benefit enormously from having a resident colony of pollinators right on your doorstep.',
    },
    {
      icon: Leaf,
      title: 'Your Own Honey',
      description:
        "At harvest time, you'll receive a share of the honey your bees have produced — pure, local, and straight from your own garden.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm tracking-widest uppercase text-honey font-medium">
            For Homeowners
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4">Managed Beekeeping</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-8" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed text-lg">
          Love the idea of having bees but don't know where to start? Our managed beekeeping service
          lets you enjoy all the rewards of a hive — the pollination, the honey, the wonder —
          without any of the work.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex gap-5 p-6 bg-background rounded-sm border border-border/50 shadow-sm"
              >
                <div className="mt-1 shrink-0">
                  <Icon className="w-6 h-6 text-honey" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-br from-honey/20 to-amber/10 rounded-sm -rotate-1" />
          <div className="relative bg-background p-8 rounded-sm shadow-sm text-center">
            <blockquote className="text-xl md:text-2xl font-medium italic text-foreground/80 leading-relaxed mb-6">
              "Perfect for those who want to do their bit for nature, enjoy fresh local honey, and
              watch their garden come alive — without lifting a finger."
            </blockquote>
            <p className="text-muted-foreground mb-6 text-sm">
              We'll visit regularly throughout the season to ensure your colony is healthy and
              thriving. All equipment is supplied by us. You just enjoy the bees.
            </p>
            <a
              href="mailto:info@nonsuchhoney.co.uk"
              className="inline-flex items-center gap-3 bg-honey text-foreground px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-amber transition-colors"
            >
              <Mail className="w-4 h-4" />
              Enquire about managed beekeeping
            </a>
          </div>
        </div>

        {/* Business subsection */}
        <div className="mt-24 pt-16 border-t border-border/40">
          <div className="text-center mb-4">
            <span className="text-sm tracking-widest uppercase text-honey font-medium">
              For Businesses
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-medium text-center mb-4">Bees at Work</h3>
          <div className="w-24 h-0.5 bg-honey mx-auto mb-8" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            Forward-thinking businesses are increasingly bringing bees to their premises — whether
            on a rooftop, a courtyard, or company grounds. It&apos;s a powerful statement about your
            values, and we handle everything from installation to ongoing care.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: BadgeCheck,
                title: 'CSR & Sustainability',
                description:
                  'Demonstrate a genuine commitment to the environment with a tangible, visible initiative that goes beyond pledges.',
              },
              {
                icon: Users,
                title: 'Staff Engagement',
                description:
                  'Bees are a talking point that bring people together. Hive updates, honey tastings, and harvest days create memorable shared experiences for your team.',
              },
              {
                icon: Sprout,
                title: 'Branded Honey',
                description:
                  'Your harvest can be jarred with your own branding — a unique and thoughtful gift for clients, partners, and staff that money cannot easily buy elsewhere.',
              },
              {
                icon: Building2,
                title: 'Green Credentials',
                description:
                  'Supporting a local colony of pollinators is a meaningful contribution to biodiversity that strengthens your environmental story and sets you apart.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 p-6 bg-background rounded-sm border border-border/50 shadow-sm"
                >
                  <Icon className="w-7 h-7 text-honey" />
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-50/60 border border-amber-200/60 rounded-sm p-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you have a rooftop terrace, a garden, or open grounds, we&apos;ll assess the
              space and put together a proposal tailored to your business. All equipment is supplied
              and managed by us — you just enjoy the story it tells.
            </p>
            <a
              href="mailto:info@nonsuchhoney.co.uk"
              className="inline-flex items-center gap-3 bg-honey text-foreground px-8 py-3 rounded-sm font-medium tracking-wide hover:bg-amber transition-colors"
            >
              <Mail className="w-4 h-4" />
              Enquire about business beekeeping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Get In Touch</h2>
        <div className="w-24 h-0.5 bg-honey mx-auto mb-12" />

        <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
          Interested in our honey? Want to know more about our bees? We'd love to hear from you.
        </p>

        <a
          href="mailto:info@nonsuchhoney.co.uk"
          className="inline-flex items-center gap-3 bg-honey text-foreground px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-amber transition-colors"
        >
          <Mail className="w-5 h-5" />
          info@nonsuchhoney.co.uk
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {year} Nonsuch Honey</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@nonsuchhoney.co.uk"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@nonsuchhoney.co.uk
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Cheam, Surrey</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
