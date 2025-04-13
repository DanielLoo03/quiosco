import { Category } from ".prisma/client"
import Image from "next/image"
import Link from "next/link"

type CategoryIconProps = {
  category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <Link 
        className="flex items-center gap-4 border-t
        border-gray-200 last-of-type:border-b 
        text-xl font-bold"
        href={`/order/${category.slug}`}>
        <div className="w-16 h-16 relative">
            <Image
                fill
                src={`/icon_${category.slug}.svg`}
                alt="Imagen Categoría"
            />
        </div>
        {category.name}
    </Link>
  )
}
