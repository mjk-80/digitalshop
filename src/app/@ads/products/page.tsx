import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import Image from 'next/image';

const Ads = () => {
  return (
    <Card className="flex flex-row shadow">
      <div className="w-1/3">
        <CardHeader>
          <CardTitle>on Sale Products</CardTitle>
          <CardDescription>
            Buy outdated products with 50% discount
          </CardDescription>
          <Button>Buy now</Button>
        </CardHeader>
      </div>
      <div className="relative p-0">
        <CardContent>
          <div>
            <Image
              src={'/assets/ads.jpg'}
              width={300}
              height={200}
              alt="ads"
              className="object-cover rounded"
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Ads;
