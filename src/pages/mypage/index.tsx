import { useRouter } from 'next/router';
import TabSection from '@/components/@shared/tab/TabSection';
import ProfileSidebar from '@/components/mypage/ProfileSidebar';
import RenderMypageContent from '@/components/mypage/RenderMypageContent';
import { fakePostCardItems } from '@/constants/fake-data/fakePostCardItems';
import feedbackForm from '@/constants/fake-data/feedbackForm.json';

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
  const router = useRouter();
  const { tab = 'writtenPosts' } = router.query;

  return (
    <div className="laptop:pb mx-auto flex flex-col gap-8 py-4 pb-55 laptop:flex-row laptop:px-4">
      <ProfileSidebar {...profileSidebarInfo} />
      <div className="flex-1">
        <div className="mb-8">
          <TabSection activeTab={tab as string} isMyPage />
          <RenderMypageContent
            activeTab={tab as string}
            postcardItems={fakePostCardItems}
            feedbackFormItems={feedbackForm}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
