import { Loader2 } from 'lucide-react';

const Spinner = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <span className="f text-md">please wait...</span>
      <Loader2 size={20} className="text-9xl animate-spin" />
    </div>
  );
};

export default Spinner;
