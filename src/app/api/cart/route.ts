import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { useId } from 'react';

export async function GET(req: NextRequest) {
  const user = await currentUser();
  const userId = user?.id;
  if (userId) {
    const cartItem = await prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });
    return NextResponse.json(cartItem);
  }
  return NextResponse.json([]);
}

export async function POST(req: NextRequest) {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return NextResponse.json({ error: 'Unathurized' }, { status: 401 });
  }
  const { productId } = await req.json();

  const existingItem = await prisma.cartItem.findFirst({
    where: { userId, productId },
  });
  if (existingItem) {
    const updateItem = await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: {
        quantity: existingItem.quantity + 1,
      },
    });
    return NextResponse.json(updateItem);
  }
  const newItem = await prisma.cartItem.create({
    data: {
      userId,
      productId,
      quantity: 1,
    },
  });
  return NextResponse.json(newItem);
}

export async function DELETE(req: NextRequest) {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return NextResponse.json({ error: 'Unathurized' }, { status: 401 });
  }
  const { productId } = await req.json();

  const existingItem = await prisma.cartItem.findFirst({
    where: { userId, productId },
  });
  if (!existingItem) {
    return NextResponse.json(
      { error: 'product does not exist' },
      { status: 402 },
    );
  }
  if (existingItem) {
    if (existingItem.quantity > 1) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity - 1,
        },
      });
      return NextResponse.json(updatedItem);
    } else {
      const deleteItem = await prisma.cartItem.delete({
        where: { id: existingItem.id },
      });
      return NextResponse.json(deleteItem);
    }
  }
}
