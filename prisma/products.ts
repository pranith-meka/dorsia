import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const entreeCat = "entrees";
const appCat = "appetizers";
const dessertCat = "desserts";


export const entreeProduct = [
  {
    title: "Samosa",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 12.99,
    isFeatured: true,
    options: [
      {
        "title": "Small",
        "additionalPrice": 0
      },
      {
        "title": "Medium",
        "additionalPrice": 4
      },
      {
        "title": "Large",
        "additionalPrice": 6
      }
    ],
    catSlug: entreeCat
  },
  {
    title: "Chicken Tikka",
    desc: "Indulge in our succulent Chicken Tikka, marinated in aromatic spices, grilled to perfection. Irresistible.",
    img: "/temporary/p2.png",
    price: 18.99,
    isFeatured: true,
    options: [
      {
        "title": "Small",
        "additionalPrice": 0,
      },
      {
        "title": "Large",
        "additionalPrice": 6,
      },
    ],
    catSlug: entreeCat
  },
  {
    title: "Paneer Tikka",
    desc: "Indulge in our succulent Paneer Tikka, marinated in aromatic spices, grilled to perfection. Irresistible.",
    img: "/temporary/p5.png",
    price: 16.99,
    isFeatured: true,
    options: [
      {
        "title": "Small",
        "additionalPrice": 0,
      },
      {
        "title": "Large",
        "additionalPrice": 6,
      },
    ],
    catSlug: entreeCat
  },
  {
    title: "Aloo Tikka",
    desc: "Indulge in our succulent Aloo Tikka. Potato marinated in aromatic spices, grilled to perfection. Iconic.",
    img: "/temporary/p6.png",
    price: 16.99,
    isFeatured: true,
    options: [
      {
          "title": "Small",
          "additionalPrice": 0,
        },
        {
          "title": "Large",
          "additionalPrice": 6,
        },
    ],
    catSlug: entreeCat
  },
];

const categories = [
  {
    title: "Appetizers",
    desc: "Explore a world of flavors with our diverse array of appetizing starters.",
    color: "black",
    img: "/temporary/m1.png",
    slug: appCat,
  },
  {

    title: "Entrees",
    desc: "Embark on a gastronomic adventure with our diverse and savory entrees.",
    color: "white",
    img: "/temporary/m2.png",
    slug: entreeCat,
  },
  {
    title: "Desserts",
    desc: "Sweeten the finale with our luscious desserts, a perfect symphony of flavors.",
    color: "black",
    img: "/temporary/m3.png",
    slug: dessertCat,
  },
];

export async function createCategory() {
  const resCategories = [];

    //creating category tables
  for(let category of categories){
    const newCat =  await prisma.category.create({
      data: category
    });
    resCategories.push(newCat);
  }
  return resCategories;

}

export async function createProduct() {
  const resProducts = [];

    //creating category tables
  for(let product of entreeProduct){
    const newCat =  await prisma.product.create({
      data: product
    });
    resProducts.push(newCat);
  }
  return resProducts;
}