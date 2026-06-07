export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory?: string;
  isVegetarian: boolean;
  isChefRecommendation?: boolean;
  image?: string;
}

export const menuCategories = [
  // Beverages
  { id: "mocktails", name: "Zero-Alc Mocktails", type: "beverage" },
  { id: "coffees", name: "Specialty Hot Coffees", type: "beverage" },
  { id: "frappes", name: "Frappes & Frappuccinos", type: "beverage" },
  { id: "shakes", name: "Premium Milkshakes", type: "beverage" },
  { id: "boba", name: "Boba Milk Tea & Shakes", type: "beverage" },
  { id: "smoothies", name: "Sleek Smoothies", type: "beverage" },
  { id: "teas", name: "Aromatic Hot Teas", type: "beverage" },
  { id: "coolers", name: "All Day Coolers & Drinks", type: "beverage" },
  
  // Food
  { id: "soups", name: "Soups", type: "food" },
  { id: "salads", name: "Salads", type: "food" },
  { id: "small-plates", name: "Small Plates & Starters", type: "food" },
  { id: "platters", name: "Gourmet Platters", type: "food" },
  { id: "pizza", name: "Napoli Style Pizza", type: "food" },
  { id: "sandwiches", name: "Between Breads", type: "food" },
  { id: "mexican", name: "Tacos, Quesadillas & Enchiladas", type: "food" },
  { id: "kebabs", name: "Tandoori & Kebabs", type: "food" },
  { id: "pasta-risotto", name: "Pasta & Risotto", type: "food" },
  { id: "large-plates", name: "Signature Main Bowls", type: "food" },
  { id: "rice-noodles", name: "Wok Bowls, Rice & Noodles", type: "food" },
  { id: "breads", name: "Clay Oven Breads", type: "food" },
  { id: "desserts", name: "Luxury Desserts", type: "food" }
];

export const menuItems: MenuItem[] = [
  // 1. Zero Alc Cocktails
  {
    id: "bev-1",
    name: "Cranberry Sangria",
    price: 349,
    description: "Pineapple, orange, passionfruit, cranberry juice, ginger beer, mint, and pomegranate.",
    category: "mocktails",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-2",
    name: "Lush Apple Mojito",
    price: 349,
    description: "Green apple chunks, apple juice, green apple syrup, lime wedges, mint leaves, brown sugar, topped with ginger ale.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Lush-Apple-Mojito.png"
  },
  {
    id: "bev-3",
    name: "Scarlet Malta Mojito",
    price: 349,
    description: "Fresh Malta oranges, cranberry juice, lime wedges, mint leaves, brown sugar, topped with ginger ale.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-4",
    name: "Dragons Kiss Mojito",
    price: 349,
    description: "Fresh dragon fruit, lime wedges, mint leaves, brown sugar, sparkling water.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-5",
    name: "Watermelon Limeade",
    price: 349,
    description: "Seedless watermelon chunks, fresh lime, simple syrup, seltzer water, lime zest.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-6",
    name: "Frozen Apple Margarita",
    price: 349,
    description: "Fresh lime, pineapple juice, sparkling apple juice, lime zest, frozen and blended to perfection.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-7",
    name: "Dusky BlackBerry Mojito",
    price: 349,
    description: "Blackberry extract, lime wedges, mint leaves, and ginger ale.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-8",
    name: "Sparkling Matcha Lemonade",
    price: 349,
    description: "Fresh hand-smashed lemon slices infused with pure matcha and honey, topped with sparkling water.",
    category: "mocktails",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-9",
    name: "Frozen Shirley Temple",
    price: 349,
    description: "Sprite, pomegranate juice, grenadine, and maraschino cherries.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-10",
    name: "Pineapple Tamarind Cooler",
    price: 349,
    description: "Tamarind pulp, maple syrup, kosher salt, habanero powder, fresh pineapple, lime juice.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },
  {
    id: "bev-11",
    name: "Lemongrass Ginger Lime Crush",
    price: 349,
    description: "Lemongrass, lime juice, coconut water, ginger beer, mint.",
    category: "mocktails",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/WATERMELOM.png"
  },

  // 2. Specialty Hot Coffees
  {
    id: "bev-12",
    name: "Espresso",
    price: 199,
    description: "A single shot of our signature roasted coffee beans.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-13",
    name: "Double Espresso",
    price: 249,
    description: "A double shot of espresso for a rich, intense coffee experience.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-14",
    name: "Americano",
    price: 199,
    description: "Espresso shot topped with hot water for a smooth black coffee.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-15",
    name: "Flat White",
    price: 229,
    description: "Double shot espresso with velvety microfoam milk.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-16",
    name: "Latte",
    price: 229,
    description: "Espresso combined with steamed milk and a thin layer of foam.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-17",
    name: "Cappuccino",
    price: 229,
    description: "Equal parts espresso, steamed milk, and heavy milk foam.",
    category: "coffees",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-18",
    name: "Cafe Mocha",
    price: 229,
    description: "Espresso with premium dark chocolate sauce and steamed milk.",
    category: "coffees",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },

  // 3. Frappes & Frappuccinos
  {
    id: "bev-19",
    name: "Coffee Frappe",
    price: 249,
    description: "Rich blended coffee, milk, ice, and vanilla ice cream.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-20",
    name: "Mocha Frappe",
    price: 249,
    description: "Blended coffee with rich dark chocolate, vanilla ice cream, and whipped cream.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-21",
    name: "Vanilla Frappe",
    price: 249,
    description: "Creamy vanilla milkshake base blended with ice and coffee extract.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-22",
    name: "Caramel Frappe",
    price: 249,
    description: "Blended espresso with gold caramel syrup, ice, milk, topped with rich caramel drizzle.",
    category: "frappes",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-23",
    name: "Matcha Frappe",
    price: 249,
    description: "Premium Japanese green tea matcha powder blended with sweet vanilla cream and ice.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-24",
    name: "Chocolate Frappe",
    price: 249,
    description: "Rich cocoa syrup, milk, and vanilla ice cream blended with ice.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-25",
    name: "Oreo Frappe",
    price: 249,
    description: "Classic Oreo cookies blended with chocolate and vanilla ice cream.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-26",
    name: "Banana Frappe",
    price: 249,
    description: "Fresh banana pieces blended with milk, ice, and sweet vanilla extract.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-27",
    name: "Espresso Frappe",
    price: 249,
    description: "Blended double espresso shot with milk, ice, and sweet vanilla cream.",
    category: "frappes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-28",
    name: "Double Chocolaty Chip Creme Frappuccino Frappe",
    price: 249,
    description: "Our signature double chocolate blended creme shake loaded with chocolate chips.",
    category: "frappes",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },

  // 4. Premium Milkshakes
  {
    id: "bev-29",
    name: "Smoked Litchi Shake",
    price: 329,
    description: "Smokey maple infusion, salted litchi, and vanilla milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-30",
    name: "Amaretto Coffee Shake",
    price: 329,
    description: "Amaretto extracts, vanilla bourbon, espresso, and vanilla milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-31",
    name: "Japanese Green Melon Shake",
    price: 329,
    description: "Japanese green melon extracts, blended with premium vanilla milk.",
    category: "shakes",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-32",
    name: "Hazelnut & Maple Chocolate Shake",
    price: 329,
    description: "Smoked maple, roasted hazelnut, and vanilla chocolate milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-33",
    name: "Oreo Shake",
    price: 329,
    description: "Oreo cookies, chocolate sauce, vanilla ice cream, and milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-34",
    name: "White Chocolate-Berry-Almond Shake",
    price: 349,
    description: "White chocolate, mulberry, blueberry, strawberry, and almond vanilla ice cream.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-35",
    name: "Dark Chocolate & Orange Shake",
    price: 349,
    description: "Dark chocolate, fresh orange juice, vanilla ice cream, and milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-36",
    name: "Bears Milkshake",
    price: 349,
    description: "Chocolate ice-cream, fresh banana, milk, topped with gummy bear candies.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-37",
    name: "Captain Pirates Milkshake",
    price: 349,
    description: "Vanilla ice-cream, milk, caramel syrup, topped with gold chocolate coin.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-38",
    name: "Mermaid Milkshake",
    price: 349,
    description: "Pineapple ice-cream, rich coconut milk, and blue curacao.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-39",
    name: "Caramel Apple Milkshake",
    price: 349,
    description: "Vanilla ice-cream, rich caramel sauce, apple sauce, and milk.",
    category: "shakes",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },

  // 5. Boba Milk Tea & Shakes
  {
    id: "bev-40",
    name: "Matcha Boba Milkshake",
    price: 349,
    description: "Premium Japanese green tea matcha, blended milk, served with sweet chewy boba pearls.",
    category: "boba",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-41",
    name: "Chocolate Boba Milkshake",
    price: 349,
    description: "Cocoa powder, milk, caster sugar, chocolate ice cream, and black tapioca boba pearls.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-42",
    name: "Peach Boba Milk Tea",
    price: 349,
    description: "Fresh peach puree and jam, shaken with milk and boba of your choice.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-43",
    name: "Lychee Boba Milk Tea",
    price: 349,
    description: "Fresh lychee puree and jam, shaken with milk and boba of your choice.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-44",
    name: "Passion Fruit Boba Tea",
    price: 349,
    description: "Passion fruit puree, milk, vanilla ice cream, served with sweet passion fruit boba.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-45",
    name: "Coconut Boba Tea",
    price: 349,
    description: "Coconut boba pearls, coconut milk, vanilla ice cream, coconut powder, blue fresh cream.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-46",
    name: "Green Apple Boba Tea",
    price: 349,
    description: "Vanilla ice cream blended with green apple smash and milk, served with green apple boba.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-47",
    name: "Mango Boba Tea",
    price: 349,
    description: "Mango puree mixed with almond milk, vanilla ice cream, served with mango boba and mango fresh cream.",
    category: "boba",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },

  // 6. Sleek Smoothies
  {
    id: "bev-48",
    name: "Papaya Banana Smoothie",
    price: 349,
    description: "Milk, Greek yogurt, vanilla extract, fresh papaya, and banana.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-49",
    name: "Cherry Almond Smoothie",
    price: 349,
    description: "Fresh cherries, banana, almond milk, low-fat yogurt, and honey.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-50",
    name: "Banana and Walnut Smoothie",
    price: 349,
    description: "Almond milk, coconut water, walnuts, dry dates, and fresh banana.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-51",
    name: "Indian Style Coffee Smoothie",
    price: 349,
    description: "Black coffee, sweet condensed milk, scoop of ice, and dark chocolate shavings.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-52",
    name: "Kale, Avocado & Date Smoothie",
    price: 349,
    description: "Avocado, kale, organic dates, and fresh yogurt.",
    category: "smoothies",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/SWEET-POTATOE-CROC.png"
  },
  {
    id: "bev-53",
    name: "Green Tea Strawberry Smoothie",
    price: 349,
    description: "Brewed green tea, fresh strawberries, low-fat milk, lime juice, honey, and mint leaves.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },
  {
    id: "bev-54",
    name: "Muskmelon & Mint Smoothie",
    price: 319,
    description: "Muskmelon puree, organic honey, fresh mint, blended with low-fat Greek yogurt.",
    category: "smoothies",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/DOUBLE-CHOCOLATE-CHIP-CREME-FRAPPUCCHIO.png"
  },

  // 7. Aromatic Hot Teas
  {
    id: "bev-55",
    name: "English Breakfast Tea",
    price: 199,
    description: "Robust, full-bodied black tea blend, perfect for starting the day.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-56",
    name: "Earl Grey Tea",
    price: 199,
    description: "Black tea scented with premium oil of bergamot.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-57",
    name: "Tulsi Rituals Tea",
    price: 199,
    description: "An herbal infusion of sacred holy basil leaves to soothe the senses.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-58",
    name: "Refreshing Lemon Honey Tea",
    price: 199,
    description: "Steaming hot green tea infused with fresh lemon and honey.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-59",
    name: "Oolong Tea",
    price: 199,
    description: "Traditional Chinese tea with a rich, complex roasted aroma.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-60",
    name: "Calming Chamomile Tea",
    price: 199,
    description: "Mild, caffeine-free herbal infusion of pure chamomile flowers.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-61",
    name: "Jasmine Pearl Tea",
    price: 199,
    description: "Exquisite hand-rolled tea pearls scented with fresh jasmine blossoms.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },
  {
    id: "bev-62",
    name: "Moroccan Mint Tea",
    price: 199,
    description: "Refreshing blend of green tea leaves and Moroccan spearmint.",
    category: "teas",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/menuhiglight2.png"
  },

  // 8. All Day Coolers & Drinks
  {
    id: "bev-63",
    name: "Premium Iced Tea",
    price: 249,
    description: "Choice of flavor: Peach, Lemon, Grapefruit, Moroccan Rose, or Elderflower.",
    category: "coolers",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Lush-Apple-Mojito.png"
  },
  {
    id: "bev-64",
    name: "Cold Pressed Pomegranate & Italian Lemon",
    price: 249,
    description: "Freshly squeezed pomegranate juice blended with zesty Italian lemon juice.",
    category: "coolers",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-65",
    name: "Cold Pressed Mandarin Orange Juice",
    price: 249,
    description: "100% natural, freshly cold-pressed mandarin oranges.",
    category: "coolers",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-66",
    name: "Fresh Pineapple Ginger Spritzer",
    price: 219,
    description: "Fresh pineapple juice, muddled ginger root, simple syrup, and club soda.",
    category: "coolers",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-67",
    name: "Fresh Watermelon Cucumber & Mint Juice",
    price: 219,
    description: "A hydrating, cooling drink of watermelon, green cucumber, and mint.",
    category: "coolers",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/watermelon-lemanade.png"
  },
  {
    id: "bev-68",
    name: "Diet Coke / Coke Zero",
    price: 99,
    description: "Chilled canned aerated drink (300ml).",
    category: "coolers",
    isVegetarian: true,
  },
  {
    id: "bev-69",
    name: "Schweppes Tonic / Ginger Ale",
    price: 139,
    description: "Zesty ginger beer or carbonated premium tonic water.",
    category: "coolers",
    isVegetarian: true,
  },
  {
    id: "bev-70",
    name: "Red Bull Energy Drink",
    price: 199,
    description: "Chilled premium energy drink.",
    category: "coolers",
    isVegetarian: true,
  },
  {
    id: "bev-71",
    name: "Packaged Drinking Water",
    price: 99,
    description: "Purified bottled mineral water.",
    category: "coolers",
    isVegetarian: true,
  },

  // 9. Food: Soups
  {
    id: "food-1",
    name: "Tomato and Basil Soup",
    price: 239,
    description: "Open fire cooked tomatoes teamed with fresh basil, served with garlic toast.",
    category: "soups",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Mask-group-18.png"
  },
  {
    id: "food-2",
    name: "Tom Kha Soup",
    price: 249,
    description: "A rich coconut milk-based soup with a mélange of Thai herbs and an assortment of exotic veggies.",
    category: "soups",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Mask-group-18.png"
  },
  {
    id: "food-3",
    name: "Bean and Cheese Soup",
    price: 249,
    description: "A tomato-based soup with two types of beans, veggies, and a drop of cheddar cheese ball, served with crispy tortilla chips.",
    category: "soups",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Mask-group-18.png"
  },
  {
    id: "food-4",
    name: "All Time Mushroom Soup",
    price: 249,
    description: "Creamy pureed forest mushrooms finished with salted cream and fresh pesto oil.",
    category: "soups",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/Mask-group-18.png"
  },
  {
    id: "food-5",
    name: "All Asian Soup",
    price: 239,
    description: "Your choice of classic Asian street broth: Spicy Manchow with crispy noodles or Hot & Sour.",
    category: "soups",
    isVegetarian: true,
  },

  // 10. Food: Salads
  {
    id: "food-6",
    name: "Tomato and Burrata Salad",
    price: 319,
    description: "Textures of tomatoes, heirloom tomato, 64°C confit cherry tomatoes, basil pesto, and tomato oil teamed with mixed salad greens, burrata cheese, sea salt, and toasted walnuts.",
    category: "salads",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/TOMATO-AND-BURATTA-SALAD.jpeg"
  },
  {
    id: "food-7",
    name: "Greek Salad with Marinated Feta",
    price: 339,
    description: "Crisp bell peppers, cherry tomatoes, green cucumber, marinated olives, feta cheese chunks, tossed in mustard vinaigrette.",
    category: "salads",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/TOMATO-AND-BURATTA-SALAD.jpeg"
  },
  {
    id: "food-8",
    name: "Melons and Goat Cheese Mousse Salad",
    price: 359,
    description: "Assorted salad greens, compressed melons, pickled cucumber, toasted seeds, lemon-mint vinaigrette, topped with whipped goat cheese.",
    category: "salads",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/TOMATO-AND-BURATTA-SALAD.jpeg"
  },
  {
    id: "food-9",
    name: "FTV Caesar Salad",
    price: 299,
    description: "Crisp Romaine and Iceberg lettuce, pesto croutons, parmesan cheese shavings, burnt garlic, and a rich, creamy ranch dressing.",
    category: "salads",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/TOMATO-AND-BURATTA-SALAD.jpeg"
  },

  // 11. Food: Small Plates & Starters
  {
    id: "food-10",
    name: "Gourmet Fries",
    price: 199,
    description: "Golden fries served with roasted garlic aioli and sweet chili jam. Flavor choices: Regular (199), Peri Peri (199), or White Truffle Oil (275).",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-11",
    name: "Sweet Potato Fries",
    price: 239,
    description: "Crispy sweet potato fries served with roasted garlic aioli and chili jam.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-12",
    name: "Black Pepper Crispy Corn",
    price: 219,
    description: "Crispy fried American sweet corn tossed in black pepper spiked butter and fresh lime juice.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-13",
    name: "Jalapeno Cheese Poppers",
    price: 239,
    description: "House-pickled jalapenos stuffed with a 3-cheese blend, panko-crumbed and deep-fried. Served with kiwi chili relish.",
    category: "small-plates",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-14",
    name: "Sweet Potato & Devilled Cheese Croquettes",
    price: 239,
    description: "Roasted smoked sweet potatoes with a spicy, molten cheese center, served with chili jam.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/SWEET-POTATOE-CROC.png"
  },
  {
    id: "food-15",
    name: "Bhuna Bhutta",
    price: 219,
    description: "Char-grilled corn on the cob rubbed with tandoori spices and finished with a rich cheese sauce.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-16",
    name: "Popcorn Paneer Tikka",
    price: 239,
    description: "Bite-sized paneer tikka cubes deep-fried in a spiced tempura batter, served with spicy chutney mayo.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-17",
    name: "Chilly Cheese Toast",
    price: 199,
    description: "Spicy cheese and bell pepper mix topped on toasted bread, gratinated to golden perfection. Served with roasted garlic aioli.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-18",
    name: "Classic Nachos",
    price: 199,
    description: "Crispy tortilla chips served with warm refried beans, cheese sauce, and salsa.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-19",
    name: "Masala Shakarkandi",
    price: 219,
    description: "Charred sweet potato chunks tossed in spiced butter, green apple chutney, and fresh coriander.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/SWEET-POTATOE-CROC.png"
  },
  {
    id: "food-20",
    name: "Spinach and Spiced Cream Cheese Roll",
    price: 239,
    description: "A blend of spinach and cream cheese rolled in pastry sheets, fried golden, served with mango-jalapeno chutney.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-21",
    name: "Makai Tikki",
    price: 259,
    description: "Pan-fried spiced sweet corn patties served with garlic aioli and chili jam.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-22",
    name: "Avocado Sev Puri",
    price: 259,
    description: "Indian spice-infused guacamole topped over crispy flat puris with sweet-sour chutneys and fine sev.",
    category: "small-plates",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-23",
    name: "Aloo Tuk",
    price: 219,
    description: "Twice-fried crispy baby potatoes tossed in dry spices, served with assorted mint and tamarind chutneys.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-24",
    name: "Spiced Cottage Cheese Parcels",
    price: 239,
    description: "Paneer cubes tossed in tandoori spices wrapped in thin pastry sheets, deep-fried. Served with mango-jalapeno chutney.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-25",
    name: "Tokri Chaat",
    price: 239,
    description: "Tangy chickpea and potato salad filled in a crispy masala tart basket, topped with sweet yogurt, mint, and tamarind chutneys.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-26",
    name: "Hawkers Spring Rolls",
    price: 239,
    description: "Stir-fried farm veggies rolled in pastry sheets, deep-fried. Served with garlic-chili dipping sauce spiked with star anise.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/HAWKERS-SPRING-ROLL.jpeg"
  },
  {
    id: "food-27",
    name: "Makhani Arancini",
    price: 249,
    description: "Arborio rice balls stuffed with rich paneer makhani, breaded and fried. Served with green apple chutney.",
    category: "small-plates",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-28",
    name: "Tangra Style Chilly Paneer",
    price: 219,
    description: "Kolkata style street-food paneer chunks tossed with bell peppers and green chilies in a special Tangra dark soy-chili sauce.",
    category: "small-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-29",
    name: "Cottage Cheese in Hot Sauce",
    price: 219,
    description: "Paneer cubes tossed in a sweet and spicy Chinese red hot sauce.",
    category: "small-plates",
    isVegetarian: true,
  },
  {
    id: "food-30",
    name: "Cottage Cheese in Soy Coriander",
    price: 219,
    description: "Paneer cubes tossed in a fragrant soy, ginger, and fresh coriander sauce.",
    category: "small-plates",
    isVegetarian: true,
  },

  // 12. Platters
  {
    id: "food-31",
    name: "Mezzeh Platter",
    price: 299,
    description: "Creamy classic hummus, muhammara, Egyptian baba ganoush, garlic toum, served with soft pita bread, crispy lavash, falafel bullets, and pickled vegetables.",
    category: "platters",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },
  {
    id: "food-32",
    name: "Loaded Nachos Platter",
    price: 319,
    description: "Crispy corn tortilla chips topped with spiced refried beans, melted cheddar and mozzarella, smoky BBQ sauce, sliced jalapenos, pickled onions, fresh tomato salsa, guacamole, and sour cream.",
    category: "platters",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-33",
    name: "Bruschetta Platter",
    price: 349,
    description: "Toasted baguette slices topped with three variations: classic tomato-garlic-basil, balsamic glazed mushrooms, and herb cream cheese with bell peppers.",
    category: "platters",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },

  // 13. Napoli Pizza
  {
    id: "food-34",
    name: "Margherita Napoli Pizza",
    price: 425,
    description: "Slow-fermented Napoli dough topped with rich Italian tomato sauce, fresh buffalo mozzarella, extra virgin olive oil, and fresh basil leaves.",
    category: "pizza",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg"
  },
  {
    id: "food-35",
    name: "Quattro Formaggi Pizza",
    price: 459,
    description: "Mozzarella, parmesan, fresh bocconcini, and mature cheddar cheese, finished with premium white truffle oil.",
    category: "pizza",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg"
  },
  {
    id: "food-36",
    name: "Farmers Delight Pizza",
    price: 459,
    description: "Handstretched base topped with roasted zucchini, bell peppers, Kalamata olives, jalapenos, sweet corn, mushrooms, and fresh basil.",
    category: "pizza",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg"
  },
  {
    id: "food-37",
    name: "Spicy Mushroom Pizza",
    price: 459,
    description: "Sautéed wild forest mushrooms, sliced red onions, red chili flakes, and hot pickled red jalapenos.",
    category: "pizza",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/PestoMushroom.png"
  },
  {
    id: "food-38",
    name: "Paneer Tikka Pizza",
    price: 449,
    description: "Fusion base of classic tomato and rich buttery makhani sauce, spiced paneer tikka chunks, pickled onions, chopped chilies, and cilantro.",
    category: "pizza",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg"
  },
  {
    id: "food-39",
    name: "Lasooni Paneer Tikka Pizza",
    price: 459,
    description: "Creamy mint-coriander base sauce, tandoori garlic paneer cubes, confit garlic cloves, bell peppers, onions, and green chilies.",
    category: "pizza",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/BOGO-PIzza.jpeg"
  },
  {
    id: "food-40",
    name: "Pesto & Mushroom Pizza",
    price: 459,
    description: "Fragrant basil pesto sauce base, forest mushrooms, caramelized sweet onions, crumbled feta cheese, and fresh garden herbs.",
    category: "pizza",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/PestoMushroom.png"
  },

  // 14. Between Breads
  {
    id: "food-41",
    name: "Bambai Masala Sandwich",
    price: 299,
    description: "Spicy Mumbai street-style potato mash, green chutney, sliced cucumbers, tomatoes, and red onions in toasted bread, served with fries.",
    category: "sandwiches",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },
  {
    id: "food-42",
    name: "Paneer Junglee Sandwich",
    price: 339,
    description: "Crisp Romaine lettuce, diced paneer tikka, chopped onions, tomatoes, green chilies, and coriander, tossed in spicy tandoori mayo. Served in thick white bread with fries.",
    category: "sandwiches",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },
  {
    id: "food-43",
    name: "Grilled Veggies Sandwich",
    price: 339,
    description: "Char-grilled zucchini, bell peppers, aubergine, mixed greens, crumbled feta, parmesan shavings, and smoky chili mayo.",
    category: "sandwiches",
    isVegetarian: true,
  },
  {
    id: "food-44",
    name: "FTV Veggie Club Sandwich",
    price: 359,
    description: "Triple-decker sandwich with crisp lettuce, garden vegetables, a crispy potato railway cutlet, cheese, and spicy mayo, served with fries.",
    category: "sandwiches",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },
  {
    id: "food-45",
    name: "Crumbed Cottage Cheese Burger",
    price: 359,
    description: "Crispy panko-crumbed paneer patty, melted cheese slice, lettuce, tomatoes, red onions, and house burger sauce in a brioche bun.",
    category: "sandwiches",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Bruschetta-platter.png"
  },
  {
    id: "food-46",
    name: "Three Bean Burger",
    price: 349,
    description: "Spiced triple-bean grilled patty (kidney beans, black beans, chickpeas), red onions, crisp lettuce, jalapenos, and tomato salsa.",
    category: "sandwiches",
    isVegetarian: true,
  },
  {
    id: "food-47",
    name: "Aloo Tikki Burger",
    price: 319,
    description: "Crispy potato tikki patty flavored with coriander, cumin, and rock salt, with sliced onion, tomato, and mint chutney mayo.",
    category: "sandwiches",
    isVegetarian: true,
  },

  // 15. Mexican
  {
    id: "food-48",
    name: "Exotic Veggies Taco/Quesadilla",
    price: 319,
    description: "Sautéed sweet corn, colored bell peppers, zucchini, black beans, cheese, and sour cream inside folded crispy corn shells (Tacos) or grilled flour tortillas (Quesadillas).",
    category: "mexican",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/MUSHROOM-WITH-HERB-AND-CHILLI-QUESADILLA.jpeg"
  },
  {
    id: "food-49",
    name: "Mushroom with Herb & Chilli Taco/Quesadilla",
    price: 339,
    description: "Garlic, herb, and green chili sautéed mushrooms, folded with mozzarella and cheddar cheese.",
    category: "mexican",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/MUSHROOM-WITH-HERB-AND-CHILLI-QUESADILLA.jpeg"
  },
  {
    id: "food-50",
    name: "Mexican Beans Taco/Quesadilla",
    price: 339,
    description: "Slow-cooked pinto and black beans, sweet corn, salsa, and melted Mexican cheese blend.",
    category: "mexican",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/MUSHROOM-WITH-HERB-AND-CHILLI-QUESADILLA.jpeg"
  },
  {
    id: "food-51",
    name: "Chilly Cheese Taco/Quesadilla",
    price: 299,
    description: "Spicy green chilies, bell peppers, chopped onions, and a double portion of melted cheddar and mozzarella.",
    category: "mexican",
    isVegetarian: true,
  },
  {
    id: "food-52",
    name: "BBQ Cottage Cheese Taco/Quesadilla",
    price: 339,
    description: "Grilled cottage cheese cubes tossed in sweet smoky barbecue sauce, green onions, and cheese.",
    category: "mexican",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/MUSHROOM-WITH-HERB-AND-CHILLI-QUESADILLA.jpeg"
  },

  // 16. Kebabs
  {
    id: "food-53",
    name: "Classic Kebab Tikka",
    price: 260,
    description: "Your choice of ingredient marinated in tandoori red yogurt spice: Aloo (240), Bharwan Kumbh (Stuffed Mushroom - 260), or Cottage Cheese Paneer (260). Charred in clay oven.",
    category: "kebabs",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-54",
    name: "Malai Kebab Tikka",
    price: 260,
    description: "Mild cardamom, cream, and cashew nut marination. Choices: Aloo (240), Bharwan Kumbh (260), or Paneer (260).",
    category: "kebabs",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-55",
    name: "Lasooni Kebab Tikka",
    price: 260,
    description: "Garlic-heavy mustard oil and tandoori spice marination. Choices: Aloo (240), Bharwan Kumbh (260), or Paneer (260).",
    category: "kebabs",
    isVegetarian: true,
  },
  {
    id: "food-56",
    name: "Ajwaini Paneer Tikka",
    price: 340,
    description: "Succulent paneer cubes stuffed with mint chutney, marinated in yogurt, saffron, and aromatic carom seeds (ajwain), charred in the tandoor.",
    category: "kebabs",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-57",
    name: "Paneer Tiltinka",
    price: 340,
    description: "Marinated cottage cheese strips coated in sesame seeds (til), deep-fried crispy, served with spicy chutneys.",
    category: "kebabs",
    isVegetarian: true,
  },
  {
    id: "food-58",
    name: "Gilafi Makai Paneer Seekh",
    price: 350,
    description: "Minced cottage cheese seekh mixed with sweet corn, crusted with colorful bell peppers and onions, roasted on skewers in the tandoor.",
    category: "kebabs",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },

  // 17. Pasta & Risotto
  {
    id: "food-59",
    name: "Fashion TV Aglio Olio e Peperoncino (AOP)",
    price: 435,
    description: "Spaghetti tossed in premium extra virgin olive oil, garlic slivers, chili flakes, red onions, fresh baby spinach, pickled chilies, and grated parmesan.",
    category: "pasta-risotto",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Penne-In-Spicy-Araibita.png"
  },
  {
    id: "food-60",
    name: "Four Cheese Mac and Cheese",
    price: 435,
    description: "Classic American elbow pasta in rich cream cheese, bocconcini mozzarella, aged cheddar, and parmesan sauce, topped with garlic breadcrumbs.",
    category: "pasta-risotto",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Penne-In-Spicy-Araibita.png"
  },
  {
    id: "food-61",
    name: "Truffled Penne & Wild Mushroom",
    price: 435,
    description: "Penne pasta in a luxurious creamy sauce made from wild forest mushroom pate, rehydrated shiitake, and white truffle oil.",
    category: "pasta-risotto",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Penne-In-Spicy-Araibita.png"
  },
  {
    id: "food-62",
    name: "Tomato & Mascarpone Risotto",
    price: 435,
    description: "Arborio rice slow-cooked in a tangy marinara sauce, enriched with creamy Italian mascarpone and crispy tomato skin wafers.",
    category: "pasta-risotto",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Penne-In-Spicy-Araibita.png"
  },
  {
    id: "food-63",
    name: "Mushroom Risotto",
    price: 435,
    description: "Arborio rice cooked in mushroom broth with mixed forest mushrooms, fresh herbs, and served with a crispy parmesan wafer.",
    category: "pasta-risotto",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/Penne-In-Spicy-Araibita.png"
  },
  {
    id: "food-64",
    name: "Create Your Own Pasta",
    price: 400,
    description: "Choose Pasta: Penne, Spaghetti, or Fusilli. Choose Sauce: Spicy Arrabbiata, Cheesy Alfredo, Basil Pesto, or Aglio Olio. (Add-on veggies +40).",
    category: "pasta-risotto",
    isVegetarian: true,
  },

  // 18. Large Plates
  {
    id: "food-65",
    name: "Cottage Cheese Steak",
    price: 359,
    description: "Pan-seared herb paneer slab served with spicy tomato reduction, sautéed garden vegetables, baked potato wedges, and compressed basil oil.",
    category: "large-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-66",
    name: "Pandara Road Paneer Makhani",
    price: 359,
    description: "Delhi street-style rich cottage cheese cooked in buttery, sweet tomato-cashew gravy, served with hot butter naan, laccha onions, and mint chutney.",
    category: "large-plates",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/SPICES-COTTAGE-CHEESE-PARCEL.jpeg"
  },
  {
    id: "food-67",
    name: "Smoked Dal Makhani",
    price: 389,
    description: "48-hour slow-simmered black lentils cooked with salted butter and cream, smoked with active charcoal. Served with ghee rice, papad, and achar.",
    category: "large-plates",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/SWEET-POTATOE-CROC.png"
  },
  {
    id: "food-68",
    name: "Burrito Bowl",
    price: 379,
    description: "Spicy Mexican rice, refried beans, grilled cottage cheese skewers, sautéed bell peppers, guacamole, salsa, sour cream, and crispy tortilla chips.",
    category: "large-plates",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/LOADED-NACHOS.png"
  },
  {
    id: "food-69",
    name: "Dal Hing Tadka",
    price: 349,
    description: "Tempered yellow lentils with strong hing (asafoetida), dry red chilies, and ghee. Served with fragrant jeera rice, papad, and pickle.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-70",
    name: "Paneer Angara",
    price: 359,
    description: "Tandoor charred paneer cubes simmered in a spicy, smoky onion-tomato gravy, served with butter naan and masala onions.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-71",
    name: "Paneer Dhaba",
    price: 359,
    description: "Highway Punjab style rustic paneer curry spiced with freshly crushed coriander and red chilies, served with red chili laccha paratha and butter.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-72",
    name: "Palak Paneer",
    price: 339,
    description: "Paneer cubes in smooth spinach puree, tempered with ghee and crispy golden garlic cloves. Served with hot missi roti.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-73",
    name: "Paneer Lababdar",
    price: 349,
    description: "Paneer cooked in a silky, rich, sweet-spicy onion, tomato, cashew paste gravy. Served with butter roti.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-74",
    name: "Cheese Butter Masala",
    price: 359,
    description: "Diced processed cheese cubes cooked in a rich, buttery, sweet tomato and cashew gravy, served with multi-layered laccha paratha.",
    category: "large-plates",
    isVegetarian: true,
    isChefRecommendation: true,
  },
  {
    id: "food-75",
    name: "Veg Jalfrezi",
    price: 329,
    description: "Stir-fried seasonal vegetables in a sweet and tangy tomato-onion semi-dry gravy, served with laccha naan.",
    category: "large-plates",
    isVegetarian: true,
  },
  {
    id: "food-76",
    name: "Nilgiri Subz Handi",
    price: 329,
    description: "Mixed winter vegetables cooked in a green Nilgiri coconut, coriander, spinach, and mint gravy, served with laccha paratha.",
    category: "large-plates",
    isVegetarian: true,
  },

  // 19. Rice & Noodles
  {
    id: "food-77",
    name: "The Oriental Wok Bowl",
    price: 399,
    description: "Choose Base: Fried Rice or Hakka Noodles. Choose Sauce: Soy Coriander, Hot Garlic, Chili Basil, or Kung Pao. Protein: Paneer or Exotic Veggies.",
    category: "rice-noodles",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/HAWKERS-SPRING-ROLL.jpeg"
  },
  {
    id: "food-78",
    name: "Dum Biryani Veg",
    price: 359,
    description: "Traditional slow-cooked layered basmati rice with exotic vegetables, saffron, rose water, and tandoori spices. Served with raita.",
    category: "rice-noodles",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/SWEET-POTATOE-CROC.png"
  },
  {
    id: "food-79",
    name: "Plain Steamed Basmati Rice",
    price: 179,
    description: "Steamed fragrant long-grain basmati rice.",
    category: "rice-noodles",
    isVegetarian: true,
  },
  {
    id: "food-80",
    name: "Jeera / Ghee Rice",
    price: 229,
    description: "Basmati rice tempered in pure cow ghee and cumin seeds (Jeera: 229, Ghee: 219).",
    category: "rice-noodles",
    isVegetarian: true,
  },
  {
    id: "food-81",
    name: "Schezwan / Burnt Garlic Fried Rice",
    price: 349,
    description: "Wok-tossed basmati rice with finely chopped veggies in spicy house Schezwan sauce or smokey burnt garlic.",
    category: "rice-noodles",
    isVegetarian: true,
  },
  {
    id: "food-82",
    name: "Chilli Garlic Noodles",
    price: 299,
    description: "Wok-tossed noodles with green cabbage, carrot, bell peppers, loads of garlic, and spicy red chili sauce.",
    category: "rice-noodles",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/09/HAWKERS-SPRING-ROLL.jpeg"
  },
  {
    id: "food-83",
    name: "Hakka Noodles",
    price: 359,
    description: "Classic Chinese street style wok-tossed noodles with crunch vegetables.",
    category: "rice-noodles",
    isVegetarian: true,
  },
  {
    id: "food-84",
    name: "Pan Fried Crispy Noodles",
    price: 359,
    description: "Pan-fried noodles made crispy, topped with stir-fried Chinese greens in a mild garlic white sauce.",
    category: "rice-noodles",
    isVegetarian: true,
  },

  // 20. Breads
  {
    id: "food-85",
    name: "Clay Oven Tandoori Roti",
    price: 45,
    description: "Flatbread cooked in the clay oven: Plain (35), Butter (45), or spiced Missi Roti (60).",
    category: "breads",
    isVegetarian: true,
  },
  {
    id: "food-86",
    name: "Tandoori Naan",
    price: 109,
    description: "Leavened refined flour flatbread: Plain (89), Butter (109), or Garlic (119).",
    category: "breads",
    isVegetarian: true,
  },
  {
    id: "food-87",
    name: "Tandoori Kulcha",
    price: 179,
    description: "Soft leavened flatbread stuffed with spiced potato Aloo (159), onion Pyaz (179), or Paneer (199).",
    category: "breads",
    isVegetarian: true,
  },
  {
    id: "food-88",
    name: "Cheese Chilly Naan / Laccha Naan",
    price: 159,
    description: "Naan stuffed with cheddar and green chilies (159) or multi-layered flaky whole wheat Laccha Naan (159).",
    category: "breads",
    isVegetarian: true,
  },
  {
    id: "food-89",
    name: "Laccha Paratha",
    price: 159,
    description: "Multi-layered crispy flatbread: Butter, fresh Pudina (mint), Red Chilli, or green chili.",
    category: "breads",
    isVegetarian: true,
  },

  // 21. Desserts
  {
    id: "food-90",
    name: "Classic Tiramisu",
    price: 325,
    description: "Decadent Italian coffee-soaked sponge layered with whipped mascarpone cream, dusted with cocoa.",
    category: "desserts",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/center.jpg"
  },
  {
    id: "food-91",
    name: "New York Cheesecake",
    price: 339,
    description: "Creamy baked New York style cheesecake topped with a sweet seasonal fruit compote (blueberry/strawberry).",
    category: "desserts",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/center.jpg"
  },
  {
    id: "food-92",
    name: "Fudge Brownie with Vanilla Ice Cream",
    price: 299,
    description: "Warm, gooey dark chocolate fudge brownie topped with a scoop of premium vanilla bean ice cream and hot chocolate fudge sauce.",
    category: "desserts",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/center.jpg"
  },
  {
    id: "food-93",
    name: "Red Velvet Cake Slice",
    price: 299,
    description: "Traditional crimson cocoa layer cake sandwiched with sweet vanilla cream cheese frosting.",
    category: "desserts",
    isVegetarian: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/center.jpg"
  },
  {
    id: "food-94",
    name: "Mava Cake French Toast",
    price: 219,
    description: "Indian mava cake slices eggless battered and grilled like French toast, served with maple syrup and tart berry compote.",
    category: "desserts",
    isVegetarian: true,
    isChefRecommendation: true,
    image: "https://luxecafeanand.com/wp-content/uploads/2025/10/center.jpg"
  }
];
