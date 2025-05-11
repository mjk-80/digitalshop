import ProductForm from '../components/ProductForm';
import { getProductById } from '../services';

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
