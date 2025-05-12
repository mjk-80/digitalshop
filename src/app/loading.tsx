import { ShoppingCartIcon } from 'lucide-react';

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-xl font-bold mb-3">Loading...</p>
      <ShoppingCartIcon className="animate-bounce" />
    </div>
  );
}

export default Loading;
