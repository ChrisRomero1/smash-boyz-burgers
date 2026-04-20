import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-background py-20 md:py-32 overflow-hidden" style={{
        backgroundImage: 'url(/manus-storage/smash-burger-hero_ab2dbb66.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  SMASH BOYZ
                </h1>
                <p className="text-xl md:text-2xl font-bold text-accent mb-2">
                  Elevated Street Food
                </p>
                <p className="text-lg md:text-xl text-background/90">
                  Crafted burgers, bold flavors, unforgettable experience
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 w-full sm:w-auto"
                  onClick={() => window.open('https://cash.app/order/$smashboyzus', '_blank')}
                >
                  Order Now <ArrowRight className="ml-2" size={20} />
                </Button>
                <Link href="/menu">
                  <Button
                    variant="outline"
                    className="border-background text-background hover:bg-background/10 font-bold text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>

              {/* Quick Info */}
              <div className="mt-12 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-background/90">
                    3927 Saint Elmo Ave, Chattanooga, TN
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-accent" />
                  <span className="text-background/90">
                    Mondays 12PM – 8PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual - Shows burger image on desktop */}
            <div className="hidden md:block relative h-96">
              <img
                src="/manus-storage/smash-burger-hero_ab2dbb66.jpg"
                alt="Smash Boyz Signature Burger"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Burgers Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Signature Smashes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "TWO STEP",
                price: "$12",
                desc: "Double smashed beef, American cheese, grilled onions, secret sauce",
                image: "/manus-storage/two-step-burger_ef00461e.jpg",
              },
              {
                name: "THRASHER",
                price: "$13",
                desc: "Spicy double smash, pepper jack, crispy fried onions, jalapeños",
                image: "/manus-storage/thrasher-burger_41680e52.jpg",
              },
              {
                name: "GLIZZY",
                price: "$7",
                desc: "Grilled Angus beef frank, grilled onions, relish, secret sauce",
                image: "/manus-storage/glizzy-hotdog_951cba37.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-lg shadow-lg hover:shadow-xl transition border-2 border-accent overflow-hidden group"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '300px',
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-background">
                  <h3 className="text-2xl font-black mb-2">{item.name}</h3>
                  <p className="text-accent font-bold text-xl mb-4">{item.price}</p>
                  <p className="text-background/90 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6">
                See Full Menu <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social & Links Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Connect With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/smashboyzchatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-background/10 rounded-lg hover:bg-background/20 transition"
            >
              <Instagram size={40} className="text-accent" />
              <span className="font-bold text-lg">Instagram</span>
              <span className="text-sm text-background/80">@smashboyzchatt</span>
            </a>

            <a
              href="https://www.facebook.com/p/Smash-Boyz-100086469021011/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-background/10 rounded-lg hover:bg-background/20 transition"
            >
              <Facebook size={40} className="text-accent" />
              <span className="font-bold text-lg">Facebook</span>
              <span className="text-sm text-background/80">Smash Boyz</span>
            </a>

            <a
              href="https://www.doordash.com/store/smash-boyz-chattanooga-41354895/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-background/10 rounded-lg hover:bg-background/20 transition"
            >
              <span className="text-4xl">🚗</span>
              <span className="font-bold text-lg">DoorDash</span>
              <span className="text-sm text-background/80">Delivery</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Get Smashed?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Order now via Cash App or visit us at 3927 Saint Elmo Ave every Monday from 12PM to 8PM
          </p>
          <Button
            className="bg-accent text-foreground hover:bg-accent/90 font-bold text-lg px-12 py-6"
            onClick={() => window.open('https://cash.app/order/$smashboyzus', '_blank')}
          >
            Order Now <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
