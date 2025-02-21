import { useState } from 'react';
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
  const [searchKeyword, setSearchKeyword] = useState('');

  // 검색 프로젝트
  const searchProjects = useSearchProjectsInfinite(
    {
      query: searchKeyword.trim(),
      page: 0,
      size: 30,
      sort: 'string',
    } as any,
    {
      query: {
        enabled: activeTab === 'search' && searchKeyword.trim().length > 0,
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
                data={{
                  projectId: item.projectId || 0,
                  logoImageUrl: item.logoImgUrl || '',
                  thumbnailImageUrl: item.thumbnailImgUrl || '',
                  title: item.title || '',
                  point: 100,
                  targetJob: 'DESIGNER',
                  questionCount: 10,
                }}
              />
            ));
          })}
        </div>
      );
    case 'search':
      return (
        <div className="">
          <div className="mx-auto mb-8 w-full max-w-2xl overflow-hidden rounded-full">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="focus:border-primary w-full rounded-full bg-gray-600 p-4 text-gray-50 focus:outline-none"
            />
          </div>

          {searchKeyword.trim().length === 0 && (
            <div className="text-center text-gray-500">검색어를 입력해주세요</div>
          )}

          {searchKeyword.trim().length > 0 && !searchProjects.data && (
            <div className="flex items-center justify-center">
              <div>로딩중...</div>
            </div>
          )}

          {searchProjects.data && searchProjects.data.pages[0].content && (
            <div className={gridClassName}>
              {searchProjects.data.pages.map((page) => {
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
          )}

          {searchProjects.data?.pages[0].content?.length === 0 &&
            searchKeyword.trim().length > 0 && <NoItemHome ment="검색 결과" />}
        </div>
      );
  }
};

export default RenderTabContent;
