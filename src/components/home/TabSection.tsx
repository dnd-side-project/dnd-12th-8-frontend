import Link from 'next/link';
import { cn } from '@/utils/cn';

interface TabSectionProps {
  activeTab: string;
  isMyPage?: boolean;
}

const TabSection = ({ activeTab, isMyPage = false }: TabSectionProps) => {
  const tabs = [
    { id: 'popular', label: '인기 Post' },
    { id: 'recommend', label: '추천 Post' },
    { id: 'search', label: '검색' },
  ];

  const myPageTabs = [
    { id: 'writtenPosts', label: '작성한 포스트' },
    { id: 'likedPosts', label: '좋아요한 포스트' },
    { id: 'writtenReviews', label: '작성한 리뷰' },
  ];

  return (
    <div>
      {/* Tab Bar */}
      <div className="mb-6 border-b-2 border-gray-600">
        <div className="flex space-x-8">
          {(isMyPage ? myPageTabs : tabs).map((tab) => (
            <Link
              key={tab.id}
              href={{
                pathname: isMyPage ? '/mypage' : '/main',
                query: { tab: tab.id },
              }}
              className={cn(
                'relative pb-4 font-subtitle hover:text-gray-50',
                activeTab === tab.id ? 'text-gray-50' : 'text-gray-200',
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute right-0 bottom-[-2.5px] left-0 h-1 rounded-full bg-purple-400" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
