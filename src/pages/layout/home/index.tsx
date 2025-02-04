import CommonLayout from '@/components/layout/CommonLayout';
import PostCardLayout from '@/components/layout/PostCardLayout';

const HomeTest = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-5 pb-15">
      <div className="mx-auto tablet:max-w-[800px] desktop:max-w-[1040px] wide:max-w-[1520px]">
        {/* header */}
        <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="header" />
        <div className="mt-15 mb-12">
          {/* carusel */}
          <CommonLayout height="h-101" backgroundColor="bg-gray-500" title="carusel" />
        </div>
        {/* post info */}
        <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="post info" />
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3 wide:grid-cols-4">
            {[...Array(15)].map((_, i) => (
              <PostCardLayout key={i + 1} item={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
