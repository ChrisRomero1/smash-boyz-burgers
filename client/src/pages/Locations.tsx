import { MapPin, Clock, Phone } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Locations() {
  const locationData = {
    name: "Smash Boyz Burgers",
    address: "3927 Saint Elmo Ave, Chattanooga, TN 37412",
    schedule: "Monday 12:00 PM - 8:00 PM",
    lat: 35.0844,
    lng: -85.2678,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Find Us</h1>
          <p className="text-xl text-background/80">
            Visit our food truck at 3927 Saint Elmo Ave, Chattanooga, TN
          </p>
        </div>
      </section>

      {/* Location Info & Map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-black mb-8 text-foreground">
                Our Location
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-foreground/70">{locationData.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(
                        locationData.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-foreground/70">{locationData.schedule}</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-4">
                  <Phone size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Order
                    </h3>
                    <p className="text-foreground/70 mb-2">
                      Order via Cash App: $smashboyzus
                    </p>
                    <a
                      href="https://cash.app/order/$smashboyzus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold hover:underline"
                    >
                      Order Now →
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-accent/10 rounded-lg border-2 border-accent">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  📍 Note
                </h3>
                <p className="text-foreground/70">
                  We operate as a food truck and are located at 3927 Saint Elmo
                  Ave every Monday from 12PM to 8PM. For the latest updates on
                  our location and schedule, follow us on Instagram
                  @smashboyzchatt.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-foreground h-96 md:h-full min-h-96">
              <MapView
                initialCenter={{ lat: locationData.lat, lng: locationData.lng }}
                initialZoom={15}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Delivery Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Pickup */}
            <div className="bg-background/10 p-8 rounded-lg border-2 border-background">
              <h3 className="text-2xl font-black mb-4">Pickup</h3>
              <p className="text-background/80 mb-6">
                Order via Cash App and pick up at our location on Saint Elmo Ave
              </p>
              <a
                href="https://cash.app/order/$smashboyzus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-foreground font-bold px-6 py-3 rounded hover:bg-accent/90 transition"
              >
                Order Pickup →
              </a>
            </div>

            {/* Delivery */}
            <div className="bg-background/10 p-8 rounded-lg border-2 border-background">
              <h3 className="text-2xl font-black mb-4">Delivery</h3>
              <p className="text-background/80 mb-6">
                Get Smash Boyz delivered to your door via DoorDash
              </p>
              <a
                href="https://www.doordash.com/store/smash-boyz-chattanooga-41354895/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-foreground font-bold px-6 py-3 rounded hover:bg-accent/90 transition"
              >
                Order Delivery →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
