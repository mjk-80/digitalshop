'use server';
import { Product, ProductCategory } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';
import z from 'zod';
import { revalidatePath } from 'next/cache';

const validationUpsertProduct = (data: Record<string, any>) => {
  const formSchema = z.object({
    name: z.string().min(1, { message: 'name is required' }),
    description: z.string({ message: 'description is required' }),
    price: z
      .number({ message: 'price is required' })
      .min(1, { message: 'price must be at least 1' }),
    quantity: z
      .number({ message: 'quantity is required' })
      .min(1, { message: 'quantity must be at least 1' })
      .max(1000, { message: 'quantity must be at most 1000' }),
    category: z.enum(Object.values(ProductCategory) as [string]),
  });

  const result = formSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
  return null;
};

export const upsertProduct = async (
  preData: { data: Product | null; error: Record<string, string> | null },
  formData: FormData,
) => {
  const id = formData.get('id') as string;

  const productData = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: parseInt(formData.get('price') as string),
    category: formData.get('category'),
    quantity: parseInt(formData.get('quantity') as string),
  } as Product;

  //validataion
  const error = validationUpsertProduct(productData);
  if (error) {
    return { data: preData.data, error };
  }

  try {
    let result;
    if (id) {
      result = await prisma.product.update({
        where: {
          id,
        },
        data: productData,
      });
    } else {
      result = await prisma.product.create({
        data: productData,
      });
    }

    revalidatePath('/dashboard/products');

    return { error: null, data: result };
  } catch (e) {
    return { data: preData.data, error: { general: 'upsert failed' } };
  }
};
