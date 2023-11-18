type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Samosa",
      desc: "Savor the crisp perfection of our spiced potato and pea samosas. A delightful appetizer sensation.",
      img: "/temporary/p1.png",
      price: 12.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Chicken Tikka",
      desc: "Indulge in our succulent Chicken Tikka, marinated in aromatic spices, grilled to perfection. Irresistible.",
      img: "/temporary/p2.png",
      price: 18.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Rasmalai",
      desc: "Delight in the exquisite sweetness of Rasmalai – delicate cottage cheese dumplings in saffron-infused milk. Pure indulgence.",
      img: "/temporary/p3.png",
      price: 14.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Mango Lassi",
      desc: "Sip on our refreshing Mango Lassi, a blend of luscious mango and yogurt. A tropical taste sensation.",
      img: "/temporary/p4.png",
      price: 8.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const entrees: Products = [
    {
      id: 1,
      title: "Samosa",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 12.99,
      options: [
        {
          title: "2 Pcs",
          additionalPrice: 0,
        },
        {
          title: "4 pcs",
          additionalPrice: 8,
        },
        {
          title: "6 Pcs",
          additionalPrice: 14,
        },
      ],
    },
    {
      id: 2,
      title: "Chicken Tikka",
      desc: "Indulge in our succulent Chicken Tikka, marinated in aromatic spices, grilled to perfection. Irresistible.",
      img: "/temporary/p2.png",
      price: 18.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Paneer Tikka",
      desc: "Indulge in our succulent Paneer Tikka, marinated in aromatic spices, grilled to perfection. Irresistible.",
      img: "/temporary/p5.png",
      price: 16.99,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Aloo Tikka",
      desc: "Indulge in our succulent Aloo Tikka. Potato marinated in aromatic spices, grilled to perfection. Iconic.",
      img: "/temporary/p6.png",
      price: 16.99,
      options: [
        {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 6,
          },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Samosa",
    desc: "Savor the crisp perfection of our spiced potato and pea samosas. A delightful appetizer sensation.",
    img: "/temporary/p1.png",
    price: 12.99,
    options: [
        {
            title: "2 Pcs",
            additionalPrice: 0,
          },
          {
            title: "4 pcs",
            additionalPrice: 8,
          },
          {
            title: "6 Pcs",
            additionalPrice: 14,
          },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "appetizers",
      title: "Appetizers",
      desc: "Explore a world of flavors with our diverse array of appetizing starters.",
      img: "/temporary/m1.png",
      color: "black",
    },
    {
      id: 2,
      slug: "entrees",
      title: "Entrees",
      desc: "Embark on a gastronomic adventure with our diverse and savory entrees.",
      img: "/temporary/m2.png",
      color: "white",
    },
    {
      id: 3,
      slug: "desserts",
      title: "Desserts",
      desc: "Sweeten the finale with our luscious desserts, a perfect symphony of flavors.",
      img: "/temporary/m3.png",
      color: "black",
    },
  ];