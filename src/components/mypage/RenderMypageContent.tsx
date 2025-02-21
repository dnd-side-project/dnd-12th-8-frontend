import Link from 'next/link';
import { useRouter } from 'next/router';
import PostCard from '@/components/@shared/card/post-card/PostCard';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
// import { useGetUserPoints } from '@/generated';
import { useGetFavoriteProjectList } from '@/generated';
import { useGetProjectList } from '@/generated';

interface RenderTabContentProps {}

const RenderMypageContent = ({}: RenderTabContentProps) => {
  const router = useRouter();
  const { tab: currentTab } = router.query;

  const { data: favoriteProjectListData } = useGetFavoriteProjectList({
    query: { enabled: currentTab === 'likedPosts' },
  });
  const { data: projectListData } = useGetProjectList({
    query: { enabled: currentTab === 'writtenPosts' },
  });

  const renderContent = () => {
    switch (currentTab) {
      case 'likedPosts':
        return (
          <div className="grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 desktop:grid-cols-3">
            {favoriteProjectListData?.data?.map((item) => (
              <PostCard
                key={item.projectId}
                data={{
                  projectId: item.projectId || 0,
                  logoImageUrl: item.logoImgUrl || '',
                  thumbnailImageUrl: item.thumbnailImgUrl || '',
                  title: item.title || '',
                  point: 100,
                  questionCount: 10,
                  targetJob: item.job || 'ALL',
                }}
              />
            ))}
          </div>
        );
      case 'writtenPosts':
        return (
          <div className="flex flex-col gap-[18px]">
            {projectListData?.data?.map((item) => (
              <Link href={`/statistics/${item.projectId}`} key={item.projectId}>
                <div className="rounded-[10px] bg-gray-800 px-6 pt-7 pb-9">
                  <SmallPostCard
                    data={{
                      title: item.title || '',
                      logoImageUrl: item.logoImgUrl || '',
                      categoryNames: item.platformCategoryResponse?.categoryNames || [],
                      targetJob: item.job || 'ALL',
                      dueDate: item.dueDate || '',
                    }}
                    styles={{
                      icon: 'h-[64px] w-[64px]',
                      title: 'font-body1',
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        );

      case 'writtenReviews':
        return (
          <div className="flex flex-col gap-[18px]">
            {projectListData?.data?.map((item) => (
              <Link href={`/project/${item.projectId}`} key={item.projectId}>
                <div key={item.projectId} className="rounded-[10px] bg-gray-800 px-6 pt-7 pb-9">
                  <SmallPostCard
                    data={{
                      title: item.title || '',
                      logoImageUrl: item.logoImgUrl || '',
                      categoryNames: item.platformCategoryResponse?.categoryNames || [],
                      targetJob: item.job || 'ALL',
                      dueDate: item.dueDate || '',
                    }}
                    styles={{
                      icon: 'h-[64px] w-[64px]',
                      title: 'font-body1',
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        );
    }
  };

  return renderContent();
};

export default RenderMypageContent;
