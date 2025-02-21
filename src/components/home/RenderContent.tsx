import PostCard from '@/components/@shared/card/post-card/PostCard';
import {
  useGetPopularProjectsInfinite,
  useGetRecommendedProjectsInfinite,
  useSearchProjectsInfinite,
} from '@/generated';
import NoItemHome from './NoItemHome';

interface RenderTabContentProps {
  activeTab: string;
}

const RenderTabContent = ({ activeTab }: RenderTabContentProps) => {
  // 검색 프로젝트
  const searchProjects = useSearchProjectsInfinite(
    {
      keyword: '',
      roles: [],
      categories: [],
      page: 0,
      size: 30,
      sort: 'string',
    } as any,
    {
      query: {
        enabled: activeTab === 'search',
        getNextPageParam: (lastPage) => {
          if (!lastPage.last && typeof lastPage.number === 'number') {
            return lastPage.number + 1;
          }
          return undefined;
        },
      },
    },
  );
  console.log('🔍 Search Projects:', searchProjects.data);

  // 추천 프로젝트
  const recommendedProjects = useGetRecommendedProjectsInfinite(
    {
      page: 0,
      size: 100,
      sort: 'string',
    } as any,
    {
      query: {
        enabled: activeTab === 'recommend',
        getNextPageParam: (lastPage) => {
          if (!lastPage.last && typeof lastPage.number === 'number') {
            return lastPage.number + 1;
          }
          return undefined;
        },
      },
    },
  );
  console.log('👍 Recommended Projects:', recommendedProjects.data);

  // 인기 프로젝트
  const popularProjects = useGetPopularProjectsInfinite(
    {
      page: 0,
      size: 100,
      sort: 'string',
    } as any,
    {
      query: {
        enabled: activeTab === 'popular',
        getNextPageParam: (lastPage) => {
          if (!lastPage.last && typeof lastPage.number === 'number') {
            return lastPage.number + 1;
          }
          return undefined;
        },
      },
    },
  );
  console.log('🔥 Popular Projects:', popularProjects.data);

  const gridClassName =
    'grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4';

  switch (activeTab) {
    case 'popular':
      if (!popularProjects.data) {
        return (
          <div className="flex h-[400px] items-center justify-center">
            <div>로딩중...</div>
          </div>
        );
      }

      if (popularProjects.data.pages[0].content?.length === 0) {
        return <NoItemHome ment="인기 Post" />;
      }

      return (
        <div className={gridClassName}>
          {popularProjects.data.pages.map((page) => {
            if (!page.content) return null;

            return page.content.map((item) => (
              <PostCard
                key={item.projectId}
                id={item.projectId || 0}
                imageUrl={item.thumbnailImgUrl || ''}
                thumbnailUrl={item.thumbnailImgUrl || ''}
                title={item.title || ''}
                point={0}
                target={'developer'}
                questionCount={0}
                role={'DEVELOPER'}
              />
            ));
          })}
        </div>
      );
    case 'recommend':
      if (!recommendedProjects.data) {
        return (
          <div className="flex h-[400px] items-center justify-center">
            <div>로딩중...</div>
          </div>
        );
      }

      if (recommendedProjects.data.pages[0].content?.length === 0) {
        return <NoItemHome ment="추천 Post" />;
      }

      return (
        <div className={gridClassName}>
          {recommendedProjects.data.pages.map((page) => {
            if (!page.content) return null;

            return page.content.map((item) => (
              <PostCard
                key={item.projectId}
                id={item.projectId || 0}
                imageUrl={item.thumbnailImgUrl || ''}
                thumbnailUrl={item.thumbnailImgUrl || ''}
                title={item.title || ''}
                point={0}
                target={'developer'}
                questionCount={0}
                role={'DEVELOPER'}
              />
            ));
          })}
        </div>
      );
    case 'search':
      return (
        <div className="flex h-[400px] items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="focus:border-primary w-full rounded-lg border border-gray-300 p-4 focus:outline-none"
            />
          </div>
        </div>
      );
  }
};

export default RenderTabContent;
