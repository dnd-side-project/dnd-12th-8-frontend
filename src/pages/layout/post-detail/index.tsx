import CommonLayout from '@/components/layout/CommonLayout';
import PostCardLayout from '@/components/layout/PostCardLayout';
import PostDetailBottomBarLayout from '@/components/layout/PostDetailBottomBarLayout';

const PostDetailTest = () => {
  return (
    <>
      <div>
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

          <div className="hidden desktop:block">
            <PostDetailBottomBarLayout isSmall={true} />
          </div>
        </div>
        {/* 댓글 */}
        <div className="my-18">
          <CommonLayout height="h-[332px]" backgroundColor="bg-gray-400" title="comment" />
        </div>
        {/* 같은 카테고리의 글 */}
        <div className="mb-6 font-title1 text-white">같은 카테고리의 글</div>
        <div className="grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <PostCardLayout key={i + 1} item={i + 1} />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 hidden max-desktop:block">
        <div className="mx-[-300px]">
          <div className="w-full border-t-3 border-red-500" />
        </div>
        <PostDetailBottomBarLayout isSmall={false} />
      </div>
    </>
  );
};

export default PostDetailTest;
