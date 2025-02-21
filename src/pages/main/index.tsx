import { useRouter } from 'next/router';
import Header from '@/components/@shared/layout/Header';
import TabSection from '@/components/@shared/tab/TabSection';
import Carousel from '@/components/home/Carousel';
import RenderContent from '@/components/home/RenderContent';
import { fakePostCardItems } from '@/constants/fake-data/fakePostCardItems';
import { useGetAdvertisedProjects } from '@/generated';

const MainPage = () => {
  const router = useRouter();
  const { tab = 'popular' } = router.query;
  const { data: advertisedProjects } = useGetAdvertisedProjects();

  const postCardItems = advertisedProjects?.map((project) => ({
    id: project.projectId,
    title: project.title,
    imageUrl: project.thumbnailImgUrl,
    thumbnailUrl: project.thumbnailImgUrl,
    point: 100,
    role: project.targetJob ?? 'ALL',
    questionCount: 5,
  }));

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="sticky top-0 left-0 z-50 w-full bg-gray-900">
        <div className="mx-auto max-w-[1200px] px-4 tablet:px-6 laptop:px-8">
          <Header />
        </div>
      </div>
      <div className="mt-15 mb-12">{advertisedProjects && <Carousel items={postCardItems} />}</div>
      <div className="mx-auto max-w-[1200px] px-4 tablet:px-6 laptop:px-8">
        <TabSection activeTab={tab as string} />
        <RenderContent activeTab={tab as string} postcardItems={fakePostCardItems} />
      </div>
    </div>
  );
};

export default MainPage;
