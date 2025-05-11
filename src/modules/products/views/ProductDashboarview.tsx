import React from 'react';
import ProductTable from '../components/ProductTable';
import DashboarProductDetail from '@/app/(private)/dashboard/products/[id]/page';
import { getProducts } from '../services';

async function ProductDashboarview() {
  const products = await getProducts();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductDashboarview;
