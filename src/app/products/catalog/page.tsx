import CatalogList from '@/components/catalog/List';
import { Button } from '@/components/ui';
import Link from 'next/link';

function catalog() {
  return (
    <div className="flex flex-col items-center mx-auto mt-4">
      <CatalogList />
      <Button>
        <Link href={'/products'}>Back to Products</Link>
      </Button>
    </div>
  );
}
export default catalog;
