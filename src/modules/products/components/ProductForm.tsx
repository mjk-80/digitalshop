'use client';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components/ui';

import { Product, ProductCategory } from '@/generated/prisma';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { upsertProduct } from '../services';
import {
  redirect,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import UploadImage from './UploadImage';

const ProductForm = (props: { product: Product | null }) => {
  const pathName = usePathname();
  // console.log(pathName);
  const params = useParams();
  // console.log(params);
  const searchParams = useSearchParams();
  // console.log(searchParams);
  const discount = searchParams.get('discount');
  const router = useRouter();
  console.log(router);

  const { product } = props;
  const { register, handleSubmit, setValue } = useForm<Product>();
  const onSubmitForm = (data: Product) => {
    const _product = {
      ...data,
      id: product?.id,
      price: parseFloat(data.price?.toString() || '0'),
      quantity: parseInt(data.quantity?.toString() || '0'),
      category: data.category || product?.category,
    };
    upsertProduct(_product as Product);
    redirect('/dashboard/products');
  };

  return (
    <Card className="w-[500px] mx-auto mt-10">
      <form className="max-w-lg" onSubmit={handleSubmit(onSubmitForm)}>
        <CardHeader>
          <CardTitle>Product</CardTitle>
          <CardTitle className="text-red-500">
            This product has {discount}% discount
          </CardTitle>
          <CardDescription>Create new product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-3 space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              {...register('name')}
              id="name"
              required
              defaultValue={product?.name || ''}
            />
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              required
              onValueChange={(value) =>
                setValue('category', value as ProductCategory)
              }
              defaultValue={product?.category || ProductCategory.OTHERS}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ProductCategory).map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              {...register('description')}
              id="description"
              defaultValue={product?.description || ''}
            />
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              {...register('price')}
              type="number"
              id="price"
              step="0.01"
              defaultValue={product?.price || ''}
            />
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              {...register('quantity')}
              type="number"
              id="quantity"
              defaultValue={product?.quantity || ''}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/dashboard/products">Back</Link>
          </Button>
          <Button type="submit">
            {product?.id ? 'Update Product' : 'Add Product'}
          </Button>
        </CardFooter>
      </form>
      {product?.id && (
        <CardFooter>
          <UploadImage productId={product?.id} />
        </CardFooter>
      )}
    </Card>
  );
};
export default ProductForm;
