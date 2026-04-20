import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Burgers",
    items: [
      {
        name: "TWO STEP",
        price: "$12",
        description:
          "Buttered Matin's Potato Bun, Two Smashed Beef Patties, American Cheese, Grilled Onions, Secret Sauce, Pickles",
      },
      {
        name: "THRASHER",
        price: "$13",
        description:
          "Spicy Burger - Buttered Matin's Potato Bun, Two Smashed Beef Patties, Pepper Jack Cheese, Crispy Fried Onions, Thrasher Sauce (Spicy), Fresh Cut Jalapeños",
      },
      {
        name: "Single Smash",
        price: "$8",
        description:
          "Buttered Matin's Potato Bun, Single Smashed Beef Patty, American Cheese",
      },
    ],
  },
  {
    title: "Hotdogs",
    items: [
      {
        name: "GLIZZY",
        price: "$7",
        description:
          "Signature Hotdawg - Grilled Angus Beef Frank, Grilled Onions, Sweet Relish, Secret Sauce",
      },
      {
        name: "Plain Dawg",
        price: "$5",
        description: "Plain Hotdawg - Grilled Angus Beef Frank",
      },
    ],
  },
  {
    title: "Extraz & Sidez",
    items: [
      {
        name: "G. CHEESE",
        price: "$5",
        description:
          "Buttered Toast, 2 Slices of Cheddar Cheese, 2 Slices of American Cheese, Secret Sauce",
      },
      {
        name: "FRIES",
        price: "$5",
        description: "Shoe-String Fries (Similar to Steak n Shake) with Ketchup",
      },
      {
        name: "CHIPS",
        price: "$3",
        description: "Crispy snack chips",
      },
    ],
  },
  {
    title: "Kidz Menu",
    items: [
      {
        name: "Single Smash",
        price: "$8",
        description:
          "Buttered Matin's Potato Bun, Single Smashed Beef Patty, American Cheese",
      },
      {
        name: "Plain Dawg",
        price: "$5",
        description: "Plain Hotdawg - Grilled Angus Beef Frank",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Coke",
        price: "$2.50",
        description: "Classic Coca-Cola",
      },
      {
        name: "Diet Coke",
        price: "$2.50",
        description: "Diet Coca-Cola",
      },
      {
        name: "Sprite",
        price: "$2.50",
        description: "Crisp lemon-lime soda",
      },
      {
        name: "Water",
        price: "$2.50",
        description: "Refreshing bottled water",
      },
    ],
  },
  {
    title: "Secret Menu",
    items: [
      {
        name: "STAGE DIVE",
        price: "$12",
        description:
          "Reverse Bun Patty Melt Style - Buttered Matin's Potato Bun, Two Smashed Beef Patties, American Cheese, Grilled Onions, Secret Sauce, Pickles",
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Our Menu</h1>
          <p className="text-xl text-background/80">
            Elevated street food crafted with passion and precision
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {menuData.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground border-b-4 border-accent pb-4">
                  {category.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white border-2 border-foreground rounded-lg p-6 hover:shadow-lg transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-black text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-accent font-bold text-xl">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Order?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
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
