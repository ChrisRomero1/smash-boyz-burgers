import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <motion.h1
            className="text-5xl md:text-6xl font-black mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-background/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            The story behind Smash Boyz Burgers
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-8 text-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Elevated Street Food
            </motion.h2>

            <motion.div
              className="prose prose-lg max-w-none text-foreground/80 space-y-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Smash Boyz Burgers was born from a simple philosophy: street food doesn't have to compromise on quality. Founded by Sam Steadman, our brand represents a commitment to crafting exceptional burgers using premium ingredients, bold flavors, and meticulous technique.",
                "Every burger we make is smashed to perfection—a technique that creates an incredible crust while keeping the inside juicy and flavorful. We use Matin's Potato Buns, fresh beef, and our signature secret sauce to create an unforgettable experience with every bite.",
                "What sets us apart is our dedication to the craft. We believe that great food comes from passion, precision, and a deep respect for our ingredients. Whether you're ordering our signature TWO STEP or trying our spicy THRASHER, you're tasting the result of our commitment to excellence.",
                "Operating as a food truck allows us to bring our elevated street food directly to the Chattanooga community. We're not just serving burgers—we're building a movement around the idea that street food can be refined, bold, and absolutely delicious.",
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp} className="text-lg leading-relaxed">
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🍔", title: "Quality First",     description: "We use premium ingredients and time-tested techniques to create burgers that exceed expectations." },
              { icon: "⚡", title: "Bold & Energetic",  description: "Our brand is about passion, energy, and a refusal to settle for mediocrity in street food." },
              { icon: "❤️", title: "Community Driven",  description: "We're committed to serving the Chattanooga community with food that brings people together." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-background/10 p-8 rounded-lg border-2 border-background text-center"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-black mb-3">{value.title}</h3>
                <p className="text-background/80">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-8 text-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Meet Sam Steadman
            </motion.h2>

            <motion.div
              className="bg-foreground text-background p-8 md:p-12 rounded-lg border-4 border-accent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                Sam Steadman is the visionary behind Smash Boyz Burgers. With a passion for culinary excellence
                and a deep understanding of what makes great street food, Sam created Smash Boyz as a way to
                bring elevated burger craftsmanship to Chattanooga.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Sam believes that the smash burger technique—when executed properly—creates a superior burger
                experience. The high heat and pressure create an incredible crust while the thin patty ensures
                every bite is flavorful and juicy.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Smash Boyz has become a beloved part of the Chattanooga food scene, known for bold
                flavors, quality ingredients, and an energetic brand that refuses to compromise on excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Smash Burgers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Smash Burgers?
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-6 text-foreground/80"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🔥", title: "Superior Crust",    body: "The smash technique creates an incredible, caramelized crust that locks in flavor and creates texture contrast." },
              { icon: "💧", title: "Juicy & Flavorful", body: "Thin patties cook quickly and evenly, ensuring every bite is juicy and packed with beef flavor." },
              { icon: "⏱️", title: "Fresh & Fast",      body: "Smash burgers cook in minutes, ensuring you get fresh, hot food made to order." },
              { icon: "🎯", title: "Precision & Craft", body: "The technique requires skill and attention to detail—qualities that define everything we do." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">Experience the Difference</h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Taste what elevated street food is all about. Order now or visit us at 3927 Saint Elmo Ave every Monday.
            </p>
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
