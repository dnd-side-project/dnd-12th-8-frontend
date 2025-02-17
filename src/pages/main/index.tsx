import { useRouter } from 'next/router';
import Header from '@/components/@shared/layout/Header';
import Carousel from '@/components/home/Carousel';
import RenderContent from '@/components/home/RenderContent';
import TabSection from '@/components/home/TabSection';
import { fakePostCardItems } from '@/constants/fake-data/fakePostCardItems';

const MainPage = () => {
  const router = useRouter();
  const { tab = 'popular' } = router.query;

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="sticky top-0 left-0 z-50 w-full bg-gray-900">
        <div className="mx-auto max-w-[1200px] px-4 tablet:px-6 laptop:px-8">
          <Header />
        </div>
      </div>
      <div className="mt-15 mb-12">
        <Carousel items={fakePostCardItems} />
      </div>
      <div className="mx-auto max-w-[1200px] px-4 tablet:px-6 laptop:px-8">
        <TabSection activeTab={tab as string} />
        <RenderContent activeTab={tab as string} postcardItems={fakePostCardItems} />
      </div>
    </div>
  );
};

export default MainPage;
