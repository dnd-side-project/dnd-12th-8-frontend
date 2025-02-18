import Image from 'next/image';
import { CoinsStackedIcon, FileIcon, HeartIcon, PencilIcon } from '@/assets/icons';
import RoleChip, { RoleVariant } from '@/components/@shared/chip/RoleChip';

interface ProfileSidebarProps {
  points: number;
  writtenPosts: number;
  likedPosts: number;
  writtenReviews: number;
  username: string;
  email: string;
  role: string[];
  profileImage: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProfileSidebar = ({
  points,
  writtenPosts,
  likedPosts,
  writtenReviews,
  username,
  email,
  role,
  profileImage,
}: ProfileSidebarProps) => {
  const sidebarInfo = () => {
    const items = [
      {
        icon: <CoinsStackedIcon className="h-5 w-5" />,
        label: '내 포인트',
        value: `${points}pt`,
      },
      {
        icon: <PencilIcon className="h-5 w-5" />,
        label: '작성한 포스트',
        value: `${writtenPosts}개`,
      },
      {
        icon: <HeartIcon className="h-5 w-5" />,
        label: '찜한 포스트',
        value: `${likedPosts}개`,
      },
      {
        icon: <FileIcon className="h-5 w-5" />,
        label: '작성한 리뷰',
        value: `${writtenReviews}개`,
      },
    ];

    const InfoItem = ({ icon, label, value }: InfoItemProps) => (
      <div className="flex flex-col gap-1 rounded-[10px] bg-gray-700 p-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-gray-200">{label}</span>
        </div>
        <div className="flex justify-end">
          <span className="font-subtitle text-gray-50">{value}</span>
        </div>
      </div>
    );

    return (
      <div className="laptop:grid-row mt-10 grid grid-cols-2 gap-3 rounded-[10px] font-body3 text-gray-50 sm:grid-cols-4">
        {items.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </div>
    );
  };

  const sidebarHeader = () => {
    return (
      <div className="flex items-center gap-8 font-body2 laptop:flex-col laptop:gap-2">
        <div className="relative h-25 w-25 overflow-hidden rounded-full">
          <Image src={profileImage} alt="profile" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 laptop:flex-col">
            <span className="font-title1 text-gray-50">{username}</span>
            <span className="font-body3 text-gray-200">{email}</span>
          </div>
          <div className="flex flex-col gap-2 tablet:flex-row">
            {role.map((role, index) => (
              <RoleChip key={index} variant={role as RoleVariant} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // const onClickLogout = () => {
  //   console.log('로그아웃하기');
  // };

  return (
    <div className="z-30 w-full rounded-[10px] bg-gray-800 px-5 pt-9 pb-6 laptop:sticky laptop:top-30 laptop:h-fit laptop:w-[360px] laptop:border-none">
      <div className="mx-auto w-full flex-col items-stretch justify-between gap-2 tablet:max-w-[800px] laptop:flex">
        <div className="flex-1">{sidebarHeader()}</div>
        <div className="flex-1">{sidebarInfo()}</div>
        <div className="flex flex-row gap-4 laptop:flex-col laptop:gap-2">
          {/* <button className="w-full rounded-lg bg-gray-700 py-3 text-white">
            내 정보 수정하기
          </button> */}

          {/* <Button
            variant="lined"
            size="lg"
            className="h-[48px] max-w-55 px-4 font-body2 tablet:max-w-100 laptop:h-[60px]"
            onClick={onClickLogout}
          >
            로그아웃하기
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
