import { createCategory, createProduct, entreeProduct} from './products';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main(){
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();

  //inserting data category tables
  const category = await createCategory();

  //inserting data product tables
  for (const product of entreeProduct) {
    const categoryTemp = await prisma.category.findUnique({
      where: {
        slug: product.catSlug,
      },
    });
  
    if (categoryTemp) {
      await prisma.product.create({
        data: {
          title: product.title,
          desc: product.desc,
          img: product.img,
          price: product.price,
          isFeatured: product.isFeatured,
          options: product.options,
          category: {
            connect: {
              slug: categoryTemp.slug,
            },
          },
        },
      });
    } else {
      console.error(`Category not found for product: ${product.title}`);
    }
  }
  
  //
  console.log({category});

  
}





main().catch((e)=>{
console.error(e);
process.exit(1)}).finally(()=>{
  prisma.$disconnect()
})