import Image from 'next/image';
import RoleChip from '@/components/@shared/chip/RoleChip';
import LevelSelect from '@/components/@shared/select/LevelSelect';
import useUser from '@/hooks/useUser';

function UserBaseProfile() {
  const userData = useUser();

  if (!userData) return <div>로딩중...</div>;

  const { profileUrl, job, email, memberName, level } = userData;

  return (
    <div className="flex items-center gap-3 font-body2 tablet:gap-6 laptop:flex-col laptop:gap-2 desktop:flex-row desktop:gap-6">
      <div className="relative h-25 w-25 overflow-hidden rounded-full">
        <Image src={profileUrl || ''} alt="profile" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col gap-2 laptop:gap-4 desktop:gap-2">
        <div className="flex items-center gap-2 laptop:flex-col laptop:gap-1 desktop:flex-row">
          <span className="font-title1 text-gray-50">{memberName}</span>
          <span className="font-caption1 text-gray-200">{email || 'example@kakao.com'}</span>
        </div>
        <div className="flex gap-2 tablet:flex-row">
          {job && <RoleChip role={job} />}
          {level && <LevelSelect level={level} isSelectable={false} isSelected={true} />}
        </div>
      </div>
    </div>
  );
}

export default UserBaseProfile;
