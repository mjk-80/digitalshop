import CatalogList from '@/components/catalog/List';
import CatalogSelector from '@/components/catalog/Selector';

function CatalogPage() {
  return (
    <div className="flex flex-col items-center mx-auto mt-4">
      <CatalogList />
      <CatalogSelector />
    </div>
  );
}

export default CatalogPage;
