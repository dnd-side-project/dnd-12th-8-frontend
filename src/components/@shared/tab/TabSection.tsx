import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/utils/cn';

interface TabSectionProps {
  isMyPage?: boolean;
}

const TabSection = ({ isMyPage = false }: TabSectionProps) => {
  const router = useRouter();
  const { tab: currentTab } = router.query;

  useEffect(() => {
    if (!currentTab) {
      void router.replace({
        pathname: isMyPage ? '/mypage' : '/main',
        query: { tab: isMyPage ? 'writtenPosts' : 'popular' },
      });
    }
  }, [currentTab, isMyPage, router]);

  const tabs = [
    { id: 'popular', label: '인기 Post' },
    { id: 'recommend', label: '추천 Post' },
    { id: 'search', label: '검색' },
  ];

  const myPageTabs = [
    { id: 'writtenPosts', label: '작성한 Post' },
    { id: 'likedPosts', label: '찜한 Post' },
    { id: 'writtenReviews', label: '작성한 리뷰' },
  ];

  return (
    <div className="sticky top-20 z-30 mb-[20px] border-b-2 border-gray-600 bg-gray-900 tablet:top-25 laptop:top-35">
      <div className="flex">
        {(isMyPage ? myPageTabs : tabs).map((tab) => (
          <Link
            key={tab.id}
            href={{
              pathname: isMyPage ? '/mypage' : '/main',
              query: { tab: tab.id },
            }}
            className={cn(
              'relative px-4 py-4 font-subtitle hover:text-gray-50',
              currentTab === tab.id ? 'text-gray-50' : 'text-gray-200',
            )}
          >
            {tab.label}
            {currentTab === tab.id && (
              <div className="absolute right-0 bottom-[-2.5px] left-0 h-1 rounded-full bg-purple-400" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
