import SmallPostCard from '@/components/@shared/card/post-card/SmallPostCard';
import ProfileSidebar from '@/components/mypage/ProfileSidebar';
import feedbackFormRequests from '@/constants/fake-data/feedbackForm.json';

const profileSidebarInfo = {
  username: '홍길동',
  email: 'email@gmail.com',
  role: ['designer', 'planner'],
  profileImage:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  points: 1000,
  writtenPosts: 10,
  likedPosts: 10,
  writtenReviews: 10,
};

const MyPage = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 pb-55 laptop:flex-row laptop:pb-10">
      <ProfileSidebar {...profileSidebarInfo} />
      <div className="flex-1">
        <div className="mb-8">
          <div className="flex flex-col gap-8">
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
