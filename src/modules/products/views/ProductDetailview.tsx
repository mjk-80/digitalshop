import { Suspense } from 'react';
import ProductForm from '../components/ProductFormWithAction';
import { getProductById } from '../services';
import Spinner from '@/components/Spinner';

async function ProductDetailview(props: { id: string }) {
  const { id } = props;
  const product = await getProductById(id);
  return (
    <div>
      <ProductForm product={product} />
    </div>
  );
}

export default ProductDetailview;
