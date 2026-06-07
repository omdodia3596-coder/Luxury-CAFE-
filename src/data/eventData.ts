export interface CafeEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: "party" | "music" | "offer" | "special";
  image: string;
  ctaText?: string;
}

export const cafeEvents: CafeEvent[] = [
  {
    id: "event-1",
    title: "FTV New Year Party 25'",
    date: "Dec 31, 2025",
    description: "We are back again with another New Year Party, but this time with a bigger setup! You heard it right, FashionTV Café is hosting the most stylish and high-profile NYE countdown in Anand.",
    category: "party",
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Copy-of-NYE25.png",
    ctaText: "Book Pass"
  },
  {
    id: "event-2",
    title: "Coffee Rave Night",
    date: "April 26, 2025 (Annual)",
    description: "We are proud to introduce the first Coffee Rave night in Anand. Join us for an energy-filled night with premium brewed signature caffeine mixes, upbeat DJ tracks, and a youthful, luxury nightlife vibe.",
    category: "special",
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-10-15-at-12.07.33-AM-1.jpeg",
    ctaText: "Join Rave"
  },
  {
    id: "event-3",
    title: "Buy-1-Get-1 Wednesday Pizza Special",
    date: "Every Wednesday",
    description: "Enjoy our authentic wood-fired, slow-fermented Napoli-style pizzas. Order any pizza from our collection and receive a classic Margherita absolutely free, all day long.",
    category: "offer",
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg",
    ctaText: "Explore Pizza Menu"
  },
  {
    id: "event-4",
    title: "FTV Executive Lunch Special",
    date: "Monday – Friday (12 PM - 4 PM)",
    description: "An elegant, prompt dining option for corporate catch-ups. Enjoy a three-course set menu comprising our soup of the day, a signature pasta or wok bowl, and a scoop of New York cheesecake at a premium package price.",
    category: "offer",
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/lunch-speacial-18.png",
    ctaText: "Reserve Lunch Table"
  }
];
