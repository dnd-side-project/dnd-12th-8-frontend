import { useRouter } from 'next/router';
import Carousel from '@/components/home/Carousel';
import RenderContent from '@/components/home/RenderContent';
import TabSection from '@/components/home/TabSection';

const carouselItems = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/id/${i + 50}/1200/400`,
  title: `슬라이드 ${i + 1}`,
}));

const postcardItems = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/id/${i + 50}/200/300`,
  item: i + 1,
  title: `카드 ${i + 1}`,
  recommendRank: i + 1,
  popularRank: 15 - i,
}));

const MainPage = () => {
  const router = useRouter();
  const { tab = 'popular' } = router.query;

  return (
    <div>
      <div className="relative right-[50%] left-[50%] mx-[-50vw] w-screen">
        <div className="mt-15 mb-12">
          <Carousel items={carouselItems} />
        </div>
      </div>

      <TabSection activeTab={tab as string} />
      <RenderContent activeTab={tab as string} postcardItems={postcardItems} />
    </div>
  );
};

export default MainPage;
