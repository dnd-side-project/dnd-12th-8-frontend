import { useRouter } from 'next/router';
import PostCard from '@/components/@shared/card/post-card/PostCard';
import { useGetRelatedProjects } from '@/generated';

function RelatedProjectsSection() {
  const router = useRouter();
  const { id } = router.query;

  const { data: relatedProjectsData } = useGetRelatedProjects(Number(id), {
    query: {
      enabled: !!Number(id),
    },
  });

  console.log('relatedProjectsData', relatedProjectsData);

  if (!relatedProjectsData) return null;

  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="font-title2 text-gray-50">같은 카테고리의 글</h2>
      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 laptop:grid-cols-4">
        {relatedProjectsData?.map((data) => {
          return (
            <PostCard
              key={data.projectId}
              data={{
                projectId: data.projectId || 0,
                logoImageUrl: data.logoImgUrl || '',
                thumbnailImageUrl: data.thumbnailImgUrl || '',
                title: data.title || '',
                point: 100,
                targetJob: data.targetJob || 'ALL',
                questionCount: 10,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjectsSection;
