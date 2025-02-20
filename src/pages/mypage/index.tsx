import { useRouter } from 'next/router';
import TabSection from '@/components/@shared/tab/TabSection';
import ProfileSidebar from '@/components/mypage/profile-sidebar/ProfileSidebar';
import RenderMypageContent from '@/components/mypage/RenderMypageContent';
import { fakePostCardItems } from '@/constants/fake-data/fakePostCardItems';
import feedbackForm from '@/constants/fake-data/feedbackForm.json';

const MyPage = () => {
  const router = useRouter();
  const { tab = 'writtenPosts' } = router.query;

  return (
    <div className="laptop:pb mx-auto flex flex-col gap-8 py-4 pb-55 laptop:flex-row laptop:px-4">
      <ProfileSidebar />
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
