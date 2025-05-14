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
import { toast } from 'sonner';
import { Product, ProductCategory } from '@/generated/prisma';
import Link from 'next/link';
import UploadImage from './UploadImage';
import { useActionState, useEffect, useState } from 'react';
import { upsertProduct } from '../action';

const ProductForm = (props: { product: Product | null }) => {
  const { product } = props;
  const [state, action, isPending] = useActionState<
    {
      data: Product | null;
      error: Record<string, string> | null;
    },
    FormData
  >(upsertProduct, {
    data: product ?? null,
    error: null,
  });

  const { data, error } = state;

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    setSubmitted(true);
    action(formData);
  };
  useEffect(() => {
    if (!submitted) return;
    if (error) toast.error('Failed');
    else if (data) toast.success('Success');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Card className="w-[500px] mx-auto mt-10">
      <form className="max-w-lg" action={handleSubmit}>
        {' '}
        <input type="hidden" name="id" value={product?.id || ''} />
        <CardHeader>
          <CardTitle>Product</CardTitle>
          {/* <CardTitle className="text-red-500">
            This product has {discount}% discount
          </CardTitle> */}
          <CardDescription>Create new product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-3 space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input name="name" id="name" defaultValue={data?.name || ''} />
            {error?.name && (
              <span className="text-red-500 mt-2 ml-2">{error.name}</span>
            )}
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              defaultValue={data?.category || ProductCategory.OTHERS}
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
              name="description"
              id="description"
              defaultValue={data?.description || ''}
            />
            {error?.description && (
              <span className="text-red-500 mt-2 ml-2">
                {error.description}
              </span>
            )}
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              type="number"
              id="price"
              step="0.01"
              defaultValue={data?.price || ''}
            />
            {error?.price && (
              <span className="text-red-500 mt-2 ml-2">{error.price}</span>
            )}
          </div>
          <div className="my-3 space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              name="quantity"
              type="number"
              id="quantity"
              defaultValue={data?.quantity || ''}
            />
            {error?.quantity && (
              <span className="text-red-500 mt-2 ml-2">{error.quantity}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/dashboard/products">Back</Link>
          </Button>
          <Button type="submit">
            {isPending
              ? 'Loading...'
              : product?.id
                ? 'Update Product'
                : 'Add Product'}
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
