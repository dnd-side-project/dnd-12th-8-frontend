import PostCard from '@/components/@shared/card/post-card/PostCard';
import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import { PostCardItemSchema } from '@/types/schema';

interface FeedbackFormSchema {
  title: string;
  targetJob: string;
  thumbnailImgUrl: string;
  categoryNames: string[];
}

interface RenderTabContentProps {
  activeTab: string;
  postcardItems: PostCardItemSchema[];
  feedbackFormItems: FeedbackFormSchema;
}

const RenderMypageContent = ({
  activeTab,
  postcardItems,
  feedbackFormItems,
}: RenderTabContentProps) => {
  const gridClassName = 'grid grid-cols-1 gap-5 pb-15 tablet:grid-cols-2 desktop:grid-cols-3';

  switch (activeTab) {
    case 'likedPosts':
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
    case 'writtenPosts':
      return (
        <div className="flex flex-col gap-8">
          {[...Array(10)].map((_, index) => (
            <SmallPostCard
              key={index}
              title={feedbackFormItems.title}
              targetJob={feedbackFormItems.targetJob}
              thumbnailImgUrl={feedbackFormItems.thumbnailImgUrl}
              categoryNames={feedbackFormItems.categoryNames}
              isMyPage
            />
          ))}
        </div>
      );
    case 'writtenReviews':
      return (
        <div className="flex flex-col gap-8">
          {[...Array(10)].map((_, index) => (
            <SmallPostCard
              key={index}
              title={feedbackFormItems.title}
              targetJob={feedbackFormItems.targetJob}
              thumbnailImgUrl={feedbackFormItems.thumbnailImgUrl}
              categoryNames={feedbackFormItems.categoryNames}
              isMyPage
            />
          ))}
        </div>
      );
  }
};

export default RenderMypageContent;
