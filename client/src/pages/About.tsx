import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", alt: "Smash Boyz burger" },
  { src: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80", alt: "Thrasher burger" },
  { src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80",    alt: "Street food" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ── */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.h1
            className="text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg text-background/70 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Street food doesn't have to compromise on quality. We started Smash Boyz to prove it —
            smashing burgers on a flat top in Chattanooga, every Monday, no shortcuts.
          </motion.p>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-0">
        <div className="grid grid-cols-3 h-56 md:h-72">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Story — 2 column layout ── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-6 text-foreground">
                The Smash
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/70 leading-relaxed mb-4">
                The smash technique is everything. High heat, a flat top, and pressure — it creates a
                caramelized crust you can't get any other way. Thin patty, massive flavor, fresh every time.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/70 leading-relaxed">
                We use Matin's Potato Buns, fresh beef, and a secret sauce Sam developed from scratch.
                Simple, but every detail matters.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-black mb-6 text-foreground">
                The People
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/70 leading-relaxed mb-4">
                Sam Steadman built Smash Boyz from the ground up. The goal was straightforward: serve
                Chattanooga the best smash burger in the city, out of a food truck.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/70 leading-relaxed">
                Every Monday at 3927 Saint Elmo Ave, 12PM to 8PM. Follow{" "}
                <a
                  href="https://www.instagram.com/smashboyzchatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  @smashboyzchatt
                </a>{" "}
                for updates.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why smash — no icon grid, just bold facts ── */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <motion.h2
            className="text-4xl font-black mb-10"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Why the smash technique wins
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-0 max-w-3xl border-t-2 border-background/20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { stat: "More crust",    body: "Smashing maximizes contact with the flat top — caramelization on every inch." },
              { stat: "Juicier bite",  body: "Thin patty cooks in 90 seconds. Less time on heat = more moisture." },
              { stat: "Made to order", body: "We don't pre-cook. You order it, we smash it." },
              { stat: "Precision",     body: "Same weight, same smash, every single time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="py-6 pr-8 border-b-2 border-background/20 md:odd:border-r-2"
              >
                <p className="text-accent font-black text-xl mb-1">{item.stat}</p>
                <p className="text-background/70 text-sm">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black mb-4">Come taste the difference.</h2>
            <p className="text-foreground/60 mb-8">3927 Saint Elmo Ave · Every Monday 12–8PM</p>
            <a href="https://cash.app/order/$smashboyzus" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 transition-transform hover:scale-105">
                Order Now <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
