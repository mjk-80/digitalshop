'use client';
import { Button, Input, Label } from '@/components/ui';
import { PrismaType } from '@/lib/prisma';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import { uploadImage } from '../services/image';

const UploadImage: FC<{ productId: string }> = ({ productId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<PrismaType.Image[] | null>(null);
  const [loading, setLoading] = useState(true);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !productId) {
      alert('please select a valid file and product');
    } else {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('productId', productId);
      const { data } = await uploadImage(formData);
      setImages(data);
      setFile(null);
    }
  };

  const handleDelete = (imageId: string) => {
    return null;
  };

  return (
    <div className="w-full">
      <Label htmlFor="picture">Product Image</Label>
      <div className="flex gap-2 w-full justify-between">
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
        <Button onClick={handleUpload}>Upload Image</Button>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap items-center justify-between">
        {images?.map((item) => {
          return (
            <div key={item.id} className="relative group">
              <Circle
                onClick={() => handleDelete(item.id)}
                className="absolute top-1 right-1 text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              />
              <Image
                width={100}
                height={100}
                alt="product image"
                src={item.image}
                className="mt-4 mx-auto rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadImage;
