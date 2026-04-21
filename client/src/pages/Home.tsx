import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

// ── Flame divider ─────────────────────────────────────────────────────────────
function FlameIcon({ wide = false }: { wide?: boolean }) {
  const w = wide ? 36 : 26;
  const h = wide ? 56 : 42;
  return (
    <svg width={w} height={h} viewBox="0 0 28 44" fill="none" aria-hidden="true">
      <path
        d="M14 2C9 10 3 17 6 27C8 34 11 38 14 38C17 38 20 34 22 27C25 17 19 10 14 2Z"
        fill="#FF4500"
      />
      <path
        d="M14 12C11 18 10 23 12 28C13 31 13.5 32 14 32C14.5 32 15 31 16 28C18 23 17 18 14 12Z"
        fill="#FFD700"
      />
      <path
        d="M14 13C13.2 16 12.5 19 13.2 23C13.5 24.5 13.8 25 14 25C14.2 25 14.5 24.5 14.8 23C15.5 19 14.8 16 14 13Z"
        fill="#FFFACC"
      />
    </svg>
  );
}

function FlameDivider() {
  const sizes: boolean[] = [false, false, true, false, true, true, false, true, false, false, false, true];
  return (
    <div className="flame-divider" aria-hidden="true">
      {sizes.map((wide, i) => (
        <div key={i} className={`flame-item`}>
          <FlameIcon wide={wide} />
        </div>
      ))}
    </div>
  );
}

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative text-background py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url(/ig/img7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left – animated text */}
            <motion.div
              className="flex flex-col justify-center"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight hero-title-glow"
                >
                  SMASH BOYZ
                </h1>
                <p className="text-xl md:text-2xl font-bold text-accent mb-2">
                  Elevated Street Food
                </p>
                <p className="text-lg md:text-xl text-background/90">
                  Crafted burgers, bold flavors, unforgettable experience
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform hover:scale-105"
                  onClick={() => window.open("https://cash.app/order/$smashboyzus", "_blank")}
                >
                  Order Now <ArrowRight className="ml-2" size={20} />
                </Button>
                <Link href="/menu">
                  <Button
                    variant="outline"
                    className="border-background text-background hover:bg-background/10 font-bold text-lg px-8 py-6 w-full sm:w-auto transition-transform hover:scale-105"
                  >
                    View Menu
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-background/90">3927 Saint Elmo Ave, Chattanooga, TN</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-accent" />
                  <span className="text-background/90">Mondays 12PM – 8PM</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right – hero images */}
            <motion.div
              className="hidden md:flex flex-col gap-3 h-96"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex-1 overflow-hidden rounded-lg shadow-2xl border-2 border-accent">
                <img
                  src="/ig/img9.jpg"
                  alt="Smash Boyz food truck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 overflow-hidden rounded-lg shadow-2xl border-2 border-accent">
                <img
                  src="/ig/img7.jpg"
                  alt="Smash Boyz burger and fries"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Flame divider ── */}
      <FlameDivider />

      {/* ── Featured Burgers ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Signature Smashes
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                name: "TWO STEP",
                price: "$12",
                desc: "Double smashed beef, American cheese, grilled onions, secret sauce",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
              },
              {
                name: "THRASHER",
                price: "$13",
                desc: "Spicy double smash, pepper jack, crispy fried onions, jalapeños",
                image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80",
              },
              {
                name: "GLIZZY",
                price: "$7",
                desc: "Grilled Angus beef frank, grilled onions, relish, secret sauce",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative rounded-lg shadow-lg border-2 border-accent overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/55 transition duration-300" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-background">
                  <h3 className="text-2xl font-black mb-2">{item.name}</h3>
                  <p className="text-accent font-bold text-xl mb-4">{item.price}</p>
                  <p className="text-background/90 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="/menu">
              <Button className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 transition-transform hover:scale-105">
                See Full Menu <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Social ── */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                href: "https://www.instagram.com/smashboyzchatt/",
                icon: <Instagram size={40} className="text-accent" />,
                label: "Instagram",
                sub: "@smashboyzchatt",
              },
              {
                href: "https://www.facebook.com/p/Smash-Boyz-100086469021011/",
                icon: <Facebook size={40} className="text-accent" />,
                label: "Facebook",
                sub: "Smash Boyz",
              },
              {
                href: "https://www.doordash.com/store/smash-boyz-chattanooga-41354895/",
                icon: <span className="text-4xl">🚗</span>,
                label: "DoorDash",
                sub: "Delivery",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 bg-background/10 rounded-lg hover:bg-background/20 transition"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {item.icon}
                <span className="font-bold text-lg">{item.label}</span>
                <span className="text-sm text-background/80">{item.sub}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8">
              Ready to Get Smashed?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Order now via Cash App or visit us at 3927 Saint Elmo Ave every Monday from 12PM to 8PM
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 transition-transform hover:scale-105"
                onClick={() => window.open("https://cash.app/order/$smashboyzus", "_blank")}
              >
                Order Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
