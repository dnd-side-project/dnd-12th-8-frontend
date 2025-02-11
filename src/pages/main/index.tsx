import Carousel from '@/components/home/Carousel';
import CommonLayout from '@/components/layout/CommonLayout';
import PostCardLayout from '@/components/layout/PostCardLayout';

const MainPage = () => {
  const carouselItems = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    imageUrl: `https://picsum.photos/id/${i + 50}/1200/400`,
    title: `슬라이드 ${i + 1}`,
  }));

  return (
    <div>
      <div className="relative right-[50%] left-[50%] mx-[-50vw] w-screen">
        <div className="mt-15 mb-12">
          <Carousel items={carouselItems} />
        </div>
      </div>
      {/* post info */}
      <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="post info" />
      <div className="mt-6">
        <div className="grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {[...Array(15)].map((_, i) => (
            <PostCardLayout key={i + 1} item={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
