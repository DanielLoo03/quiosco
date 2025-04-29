import ProductCard from "@/components/ui/ProductCard"
import ProductList from "@/components/ui/ProductList"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category:string) {
	const products = await prisma.product.findMany({
		where:{
            category:{
                slug: category
            }
        }
    })
    return products
}

export default async function OrderPage({params}: {params: {category:string}}) {
    const products = await getProducts(params.category)
    console.log(products)
    return (
      <>
      <h1 className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</h1>
      <ProductList products={products} />
      </>
    );
  }