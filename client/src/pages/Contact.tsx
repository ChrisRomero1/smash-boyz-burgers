import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "catering">("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Catering Form State
  const [cateringForm, setCateringForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    location: "",
    message: "",
  });

  // tRPC Mutations
  const submitContactMutation = trpc.forms.submitContact.useMutation();
  const submitCateringMutation = trpc.forms.submitCatering.useMutation();

  // Handle Contact Form Submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactMutation.mutateAsync({
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone || undefined,
        message: contactForm.message,
      });

      toast.success("Thank you! We'll get back to you soon.");
      setContactForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Catering Form Submit
  const handleCateringSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitCateringMutation.mutateAsync({
        name: cateringForm.name,
        email: cateringForm.email,
        phone: cateringForm.phone,
        eventDate: cateringForm.eventDate,
        eventType: cateringForm.eventType,
        guestCount: cateringForm.guestCount
          ? parseInt(cateringForm.guestCount)
          : undefined,
        location: cateringForm.location || undefined,
        message: cateringForm.message || undefined,
      });

      toast.success(
        "Thank you for your catering inquiry! We'll contact you soon."
      );
      setCateringForm({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        guestCount: "",
        location: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Get In Touch</h1>
          <p className="text-xl text-background/80">
            Have questions? Want to cater an event? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center">
              <MapPin size={40} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Address
              </h3>
              <p className="text-foreground/70">
                3927 Saint Elmo Ave
                <br />
                Chattanooga, TN 37412
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone size={40} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
              <p className="text-foreground/70">
                Monday
                <br />
                12:00 PM - 8:00 PM
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Mail size={40} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Order</h3>
              <p className="text-foreground/70">
                Cash App: $smashboyzus
                <br />
                DoorDash Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-3 px-6 font-bold text-lg rounded-lg transition ${
                  activeTab === "contact"
                    ? "bg-accent text-foreground"
                    : "bg-background/10 text-background hover:bg-background/20"
                }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setActiveTab("catering")}
                className={`flex-1 py-3 px-6 font-bold text-lg rounded-lg transition ${
                  activeTab === "catering"
                    ? "bg-accent text-foreground"
                    : "bg-background/10 text-background hover:bg-background/20"
                }`}
              >
                Catering Request
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === "contact" && (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        name: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        email: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={contactForm.phone}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        phone: e.target.value,
                      })
                    }
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us what's on your mind..."
                    value={contactForm.message}
                    onChange={e =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-foreground hover:bg-accent/90 font-bold text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}

            {/* Catering Form */}
            {activeTab === "catering" && (
              <form onSubmit={handleCateringSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={cateringForm.name}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        name: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={cateringForm.email}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        email: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={cateringForm.phone}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        phone: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Event Date *
                  </label>
                  <Input
                    type="date"
                    value={cateringForm.eventDate}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        eventDate: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Event Type *
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Birthday Party, Corporate Event, Wedding"
                    value={cateringForm.eventType}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        eventType: e.target.value,
                      })
                    }
                    required
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Guest Count
                  </label>
                  <Input
                    type="number"
                    placeholder="Estimated number of guests"
                    value={cateringForm.guestCount}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        guestCount: e.target.value,
                      })
                    }
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Location
                  </label>
                  <Input
                    type="text"
                    placeholder="Event location"
                    value={cateringForm.location}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        location: e.target.value,
                      })
                    }
                    className="bg-background text-foreground border-2 border-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    placeholder="Tell us more about your event and catering needs..."
                    value={cateringForm.message}
                    onChange={e =>
                      setCateringForm({
                        ...cateringForm,
                        message: e.target.value,
                      })
                    }
                    className="bg-background text-foreground border-2 border-background min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-foreground hover:bg-accent/90 font-bold text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Submit Catering Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
