import TabSection from '@/components/@shared/tab/TabSection';
import ProfileSidebar from '@/components/mypage/profile-sidebar/ProfileSidebar';
import RenderMypageContent from '@/components/mypage/RenderMypageContent';

const MyPage = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 pb-55 laptop:flex-row">
      <ProfileSidebar />
      <div className="flex-1">
        <div className="mb-8">
          <TabSection isMyPage />
          <RenderMypageContent />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
