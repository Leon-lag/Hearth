export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  popular?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Popular",
    items: [
      {
        name: "Beef Stroganoff",
        description:
          "Tender braised beef in a rich, creamy stroganoff sauce served over fresh egg noodles.",
        popular: true,
      },
      {
        name: "Charcuterie Board",
        description:
          "A curated selection of artisan meats, cheeses, house-made pickles, and accompaniments.",
        popular: true,
      },
      {
        name: "Duck Confit",
        description:
          "Slow-cooked duck leg, crispy skin, served with seasonal vegetables and a berry reduction.",
        popular: true,
      },
      {
        name: "Tagliatelle",
        description:
          "House-made tagliatelle pasta tossed in a rich, savory sauce with seasonal ingredients.",
        popular: true,
      },
    ],
  },
  {
    name: "Wood-Fired Mains",
    items: [
      {
        name: "Wood-Fired Ribeye",
        description:
          "Prime ribeye cooked over an open wood fire, served with roasted vegetables and compound butter.",
      },
      {
        name: "Wood-Fired Salmon",
        description:
          "Fresh Atlantic salmon, wood-fired to perfection with a citrus glaze and seasonal greens.",
      },
      {
        name: "Braised Short Ribs",
        description:
          "Slow-braised beef short ribs in a red wine reduction, served with creamy polenta.",
      },
    ],
  },
  {
    name: "Pasta & Tacos",
    items: [
      {
        name: "Tagliatelle Bolognese",
        description:
          "House-made tagliatelle with a slow-simmered Bolognese sauce and Parmesan.",
      },
      {
        name: "Street Tacos",
        description:
          "Three tacos with your choice of wood-fired protein, fresh salsa, and cilantro-lime crema.",
      },
      {
        name: "Lobster Mac & Cheese",
        description:
          "Rich and creamy mac & cheese loaded with chunks of fresh lobster.",
      },
    ],
  },
  {
    name: "Starters & Sides",
    items: [
      {
        name: "Charcuterie Board",
        description:
          "Artisan meats, aged cheeses, house pickles, mustard, and warm bread.",
      },
      {
        name: "Roasted Beet Salad",
        description:
          "Roasted beets, goat cheese, candied walnuts, and arugula with balsamic vinaigrette.",
      },
      {
        name: "Truffle Fries",
        description:
          "Crispy fries tossed in truffle oil and Parmesan, served with garlic aioli.",
      },
    ],
  },
  {
    name: "Chef\u2019s Tasting Menu",
    items: [
      {
        name: "5-Course Tasting Menu",
        description:
          "A curated five-course experience showcasing seasonal and locally sourced ingredients. $65 per person.",
        price: "$65",
      },
    ],
  },
];
