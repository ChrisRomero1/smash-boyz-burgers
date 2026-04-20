import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ── Menu data (descriptions trimmed to one punchy line) ───────────────────────
const burgers = [
  { name: "TWO STEP",     price: "$12", desc: "Double smash, American cheese, grilled onions, secret sauce, pickles" },
  { name: "THRASHER",     price: "$13", desc: "Spicy double smash, pepper jack, crispy onions, fresh jalapeños, Thrasher sauce" },
  { name: "Single Smash", price: "$8",  desc: "Single smashed patty, American cheese, buttered potato bun" },
];

const hotdogs = [
  { name: "GLIZZY",    price: "$7", desc: "Grilled Angus frank, grilled onions, sweet relish, secret sauce" },
  { name: "Plain Dawg", price: "$5", desc: "Grilled Angus frank, plain" },
];

const sides = [
  { name: "G. CHEESE", price: "$5",  desc: "Buttered toast, cheddar + American, secret sauce" },
  { name: "FRIES",     price: "$5",  desc: "Shoe-string fries, Steak n Shake style" },
  { name: "CHIPS",     price: "$3",  desc: "Crispy snack chips" },
];

const drinks = [
  { name: "Coke",      price: "$2.50" },
  { name: "Diet Coke", price: "$2.50" },
  { name: "Sprite",    price: "$2.50" },
  { name: "Water",     price: "$2.50" },
];

const kidz = [
  { name: "Single Smash", price: "$8", desc: "Single patty, American cheese, buttered bun" },
  { name: "Plain Dawg",   price: "$5", desc: "Grilled Angus frank, plain" },
];

// ── Reusable components ───────────────────────────────────────────────────────
function MenuRow({ name, price, desc }: { name: string; price: string; desc?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start justify-between gap-4 py-4 border-b border-foreground/10 last:border-0"
    >
      <div>
        <span className="font-black text-lg">{name}</span>
        {desc && <p className="text-sm text-foreground/60 mt-0.5 max-w-xs">{desc}</p>}
      </div>
      <span className="font-bold text-accent text-lg whitespace-nowrap">{price}</span>
    </motion.div>
  );
}

function MenuRowDark({ name, price, desc }: { name: string; price: string; desc?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start justify-between gap-4 py-4 border-b border-background/10 last:border-0"
    >
      <div>
        <span className="font-black text-lg text-background">{name}</span>
        {desc && <p className="text-sm text-background/60 mt-0.5 max-w-xs">{desc}</p>}
      </div>
      <span className="font-bold text-accent text-lg whitespace-nowrap">{price}</span>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Menu() {
  return (
    <div className="min-h-screen">

      {/* ── Hero banner ── */}
      <div
        className="relative h-56 md:h-72 overflow-hidden"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="container relative z-10 h-full flex flex-col justify-end pb-8">
          <motion.h1
            className="text-5xl md:text-6xl font-black text-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Menu
          </motion.h1>
          <motion.p
            className="text-background/70 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Buttered Matin's Potato Buns. Fresh beef. Secret sauce.
          </motion.p>
        </div>
      </div>

      {/* ── BURGERS — white bg, photo right ── */}
      <section className="bg-background py-14">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-foreground"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Burgers
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {burgers.map(item => <MenuRow key={item.name} {...item} />)}
              </motion.div>
            </div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl border-2 border-accent h-64 md:h-full min-h-56"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&q=80"
                alt="Signature smash burger"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOTDOGS — dark bg, photo left ── */}
      <section className="bg-foreground py-14">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl border-2 border-accent h-48 md:h-full min-h-48 order-last md:order-first"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Smash Boyz Glizzy hotdog"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-background"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Hotdogs
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {hotdogs.map(item => <MenuRowDark key={item.name} {...item} />)}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTRAZ & SIDEZ — white bg ── */}
      <section className="bg-background py-14">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-3xl">
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-foreground"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Extraz & Sidez
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {sides.map(item => <MenuRow key={item.name} {...item} />)}
              </motion.div>
            </div>
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-foreground"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Kidz Menu
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {kidz.map(item => <MenuRow key={item.name} {...item} />)}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRINKS + SECRET MENU — dark bg, side by side ── */}
      <section className="bg-foreground py-14">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-14 max-w-3xl">
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-background"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Drinks
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {drinks.map(item => <MenuRowDark key={item.name} {...item} />)}
              </motion.div>
            </div>
            <div>
              <motion.h2
                className="text-4xl font-black mb-1 text-background"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                Secret Menu 🤫
              </motion.h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <MenuRowDark
                  name="STAGE DIVE"
                  price="$12"
                  desc="Reverse bun, patty-melt style — Two Step but flipped"
                />
              </motion.div>
              <p className="text-background/40 text-xs mt-4 italic">Ask about it.</p>
            </div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Order?</h2>
            <p className="text-foreground/60 mb-8">
              Cash App pickup · DoorDash delivery · Every Monday 12–8PM at 3927 Saint Elmo Ave
            </p>
            <Button
              className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6 transition-transform hover:scale-105"
              onClick={() => window.open("https://cash.app/order/$smashboyzus", "_blank")}
            >
              Order Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
