import Button from '@/components/@shared/button/Button';
import UserBaseProfile from './UserBaseProfile';
import UserSubInfo from './UserSubInfo';

const ProfileSidebar = () => {
  const onClickLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="z-30 w-full laptop:sticky laptop:top-30 laptop:h-fit laptop:w-[360px] laptop:border-none desktop:w-[493px]">
      <div className="mx-auto w-full flex-col items-stretch justify-between rounded-[10px] bg-gray-800 px-5 pt-9 pb-6 tablet:max-w-[800px] laptop:flex">
        <UserBaseProfile />
        <UserSubInfo />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Button variant="gray" size="lg" className="hidden laptop:block">
          내 정보 수정하기
        </Button>
        <Button variant="lined" size="lg" className="hidden laptop:block" onClick={onClickLogout}>
          로그아웃하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
