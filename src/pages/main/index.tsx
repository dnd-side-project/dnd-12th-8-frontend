import { useRouter } from 'next/router';
import Carousel from '@/components/home/Carousel';
import RenderContent from '@/components/home/RenderContent';
import TabSection from '@/components/home/TabSection';
import { fakeCarouselItems } from '@/constants/fake-data/fakeCarouselItems';
import { fakePostCardItems } from '@/constants/fake-data/fakePostCardItems';

const MainPage = () => {
  const router = useRouter();
  const { tab = 'popular' } = router.query;

  return (
    <div>
      <div className="relative right-[50%] left-[50%] mx-[-50vw] w-screen">
        <div className="mt-15 mb-12">
          <Carousel items={fakeCarouselItems} />
        </div>
      </div>

      <TabSection activeTab={tab as string} />
      <RenderContent activeTab={tab as string} postcardItems={fakePostCardItems} />
    </div>
  );
};

export default MainPage;
