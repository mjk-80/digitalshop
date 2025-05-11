import { getProductById } from '@/modules/products/services';
import ProductDetailview from '@/modules/products/views/ProductDetailview';
async function DashboarProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;

  return (
    <div>
      <ProductDetailview id={id} />
    </div>
  );
}

export default DashboarProductDetail;
