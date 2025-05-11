import ProductItem from './ProductItem';
import { DATA } from '../mock/products';
import { PrismaType } from '@/lib/prisma';
import { ProductsWithImages } from '@/types';

function ProductList(props: { products: ProductsWithImages[] }) {
  const { products } = props;
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}

export default ProductList;
