import ProductDetail from '@/modules/products/components/ProductDetail';
import { DATA } from '@/modules/products/mock/products';
import { getProductById } from '@/modules/products/services';
import { ProductsWithImages } from '@/types';
import React from 'react';

async function Product({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductById(id)) as ProductsWithImages;

  return (
    <div>
      <ProductDetail {...product} />
    </div>
  );
}

export default Product;
