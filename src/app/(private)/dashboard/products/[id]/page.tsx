import Spinner from '@/components/Spinner';
import { getProductById } from '@/modules/products/services';
import ProductDetailview from '@/modules/products/views/ProductDetailview';
import { Suspense } from 'react';
async function DashboarProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;

  return (
    <div>
      <p className="mb-10">Some other things...</p>
      <Suspense fallback={<Spinner />}>
        <ProductDetailview id={id} />
      </Suspense>
    </div>
  );
}

export default DashboarProductDetail;
