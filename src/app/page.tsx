import Banner from '@/components/Banner';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <Welcome />
    </div>
  );
}
