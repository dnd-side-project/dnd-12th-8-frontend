import CommonLayout from '@/components/layout/CommonLayout';
import PostCardLayout from '@/components/layout/PostCardLayout';

const HomeLayoutTest = () => {
  return (
    <div>
      {/* header */}
      <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="header" />
      <div className="mt-15 mb-12">
        {/* carusel */}
        <CommonLayout height="h-101" backgroundColor="bg-gray-500" title="carusel" />
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

export default HomeLayoutTest;
