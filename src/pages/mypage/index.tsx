import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import feedbackFormRequests from '@/constants/fake-data/feedbackForm.json';

const MyPage = () => {
  return (
    <div className="bg-gray-900 pb-25">
      <div className="mx-auto flex flex-col gap-8 p-4 laptop:flex-row">
        <div className="flex-1">
          <div className="mb-8">
            <SmallPostCard
              title={feedbackFormRequests.title}
              targetJob={feedbackFormRequests.targetJob}
              thumbnailImgUrl={feedbackFormRequests.thumbnailImgUrl}
              categoryNames={feedbackFormRequests.categoryNames}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
