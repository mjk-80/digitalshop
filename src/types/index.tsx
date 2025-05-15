import { Prisma } from '@/generated/prisma';

export type ProductsWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;
export type CartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true; images: true };
}>;
