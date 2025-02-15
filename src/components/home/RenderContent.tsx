import PostCardLayout from '@/components/layout/PostCardLayout';

interface RenderTabContentProps {
  activeTab: string;
  postcardItems: {
    id: number;
    item: number;
    title: string;
    recommendRank: number;
    popularRank: number;
  }[];
}

const renderTabContent = ({ activeTab, postcardItems }: RenderTabContentProps) => {
  const gridClassName =
    'grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4';

  switch (activeTab) {
    case 'popular':
    case 'recommend':
      return (
        <div className={gridClassName}>
          {postcardItems.map((item) => (
            <PostCardLayout
              key={item.id}
              item={item.item}
              recommendRank={item.recommendRank}
              popularRank={item.popularRank}
            />
          ))}
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

export default renderTabContent;
