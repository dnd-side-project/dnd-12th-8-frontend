import PostCard from '@/components/@shared/card/post-card/PostCard';
import { useGetPopularProjectsInfinite } from '@/generated';

function RelatedProjectsSection() {
  const { data: popularProjects } = useGetPopularProjectsInfinite(
    {
      page: 0,
      size: 8,
      sort: 'string',
    } as any,
    {
      query: {
        enabled: true,
        getNextPageParam: (lastPage) => {
          if (!lastPage.last && typeof lastPage.number === 'number') {
            return lastPage.number + 1;
          }
          return undefined;
        },
      },
    },
  );

  if (!popularProjects) return null;

  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="font-title2 text-gray-50">같은 카테고리의 글</h2>
      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 laptop:grid-cols-4">
        {popularProjects.pages.map((page) => {
          if (!page.content) return null;

          return page.content.map((item) => (
            <PostCard
              key={item.projectId}
              data={{
                projectId: item.projectId || 0,
                logoImageUrl: item.logoImgUrl || '',
                thumbnailImageUrl: item.thumbnailImgUrl || '',
                title: item.title || '',
                point: 100,
                targetJob: item.targetJob || 'ALL',
                questionCount: 10,
              }}
            />
          ));
        })}
        {popularProjects.pages.map((page) => {
          if (!page.content) return null;

          return page.content.map((item) => (
            <PostCard
              key={item.projectId}
              data={{
                projectId: item.projectId || 0,
                logoImageUrl: item.logoImgUrl || '',
                thumbnailImageUrl: item.thumbnailImgUrl || '',
                title: item.title || '',
                point: 100,
                targetJob: item.targetJob || 'ALL',
                questionCount: 10,
              }}
            />
          ));
        })}
      </div>
    </div>
  );
}

export default RelatedProjectsSection;
