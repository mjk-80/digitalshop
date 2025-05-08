import { prisma } from '@/lib/prisma';

export const getProducts = async () => {
  const result = await prisma.product.findMany({ include: { images: true } });

  return result;
};

export const getProductById = async (id: string) => {
  const result = await prisma.product.findUnique({
    where: { id },
    include: { images: true },
  });
  if (!result) {
    return null;
  }

  return result;
};
