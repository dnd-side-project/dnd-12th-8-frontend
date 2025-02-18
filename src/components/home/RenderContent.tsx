import PostCard from '@/components/@shared/card/post-card/PostCard';
import { PostCardItemSchema } from '@/types/schema';

interface RenderTabContentProps {
  activeTab: string;
  postcardItems: PostCardItemSchema[];
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
            <PostCard
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
              point={item.point}
              target={item.target}
              questionCount={item.questionCount}
              role={item.role}
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
