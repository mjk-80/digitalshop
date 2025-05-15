'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useCart = () => {
  const queryClient = useQueryClient();

  //fetch data
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      //get data from db
      const res = await fetch('/api/cart');
      if (!res.ok) throw new Error('Failed to fetch cart');
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // cache for 5 min
  });

  //add cart
  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to add to cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      alert('item is added');
    },
    onError: () => {
      alert('failed to add');
    },
  });

  //remove cart item
  const removeCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'DELETE',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to remove from cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      alert('item is removed');
    },
    onError: () => {
      alert('failed to remove');
    },
  });

  return { cart, isLoading, error, addToCartMutation, removeCartMutation };
};
