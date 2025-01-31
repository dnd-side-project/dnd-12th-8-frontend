import CommonLayout from '@/components/layout/CommonLayout';
import PostDetailBottomBarLayout from '@/components/layout/PostDetailBottomBarLayout';

const PostDetailTest = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-10 pb-15">
      <div className="mx-auto tablet:max-w-[800px] desktop:max-w-[1040px] wide:max-w-[1520px]">
        {/* header */}
        <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="header" />
        <div className="mt-15 mb-12">
          {/* carusel */}
          <CommonLayout height="h-101" backgroundColor="bg-gray-500" title="carusel" />
        </div>
        <div className="flex flex-row gap-4">
          {/* post detail content */}
          <CommonLayout
            height="h-[1850px]"
            backgroundColor="bg-gray-200"
            title="post detail content"
          />
          <div className="hidden wide:block">
            <PostDetailBottomBarLayout isSmall={false} />
          </div>
        </div>
        <div>
          <div className="hidden max-wide:block">
            <PostDetailBottomBarLayout isSmall={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailTest;
