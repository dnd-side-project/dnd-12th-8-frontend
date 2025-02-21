import { CoinsStackedIcon, FileIcon, HeartIcon, PencilIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';
import { useGetFavoriteProjectList, useGetProjectList, useGetUserPoints } from '@/generated';

const SUB_INFO_LIST = [
  {
    icon: CoinsStackedIcon,
    label: '내 포인트',
    key: 'points',
    unit: 'pt',
  },
  {
    icon: PencilIcon,
    label: '작성한 포스트',
    key: 'posts',
    unit: '개',
  },
  {
    icon: HeartIcon,
    label: '찜한 포스트',
    key: 'favorites',
    unit: '개',
  },
  {
    icon: FileIcon,
    label: '작성한 리뷰',
    key: 'reviews',
    unit: '개',
  },
];

function UserSubInfo() {
  const { data: pointsData } = useGetUserPoints();
  const { data: favoriteProjectListData } = useGetFavoriteProjectList();
  const { data: projectListData } = useGetProjectList();

  const dataMap = {
    points: pointsData?.points,
    posts: projectListData?.data?.length,
    favorites: favoriteProjectListData?.data?.length,
    reviews: 0,
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 rounded-[10px] font-body3 text-gray-50 sm:grid-cols-4 laptop:flex laptop:flex-col laptop:gap-2">
      {SUB_INFO_LIST.map(({ icon, key, label, unit }) => (
        <div
          key={key}
          className="flex flex-col gap-1 rounded-[10px] bg-gray-700 p-4 laptop:flex-row laptop:justify-between laptop:bg-transparent laptop:p-1"
        >
          <div className="flex items-center gap-2 text-gray-200 laptop:text-gray-50">
            <Icon icon={icon} color="currentColor" className="h-5 w-5" />
            <span className="font-body2-regular">{label}</span>
          </div>
          <div className="flex justify-end">
            <span className="font-title2 text-gray-50 laptop:font-body2-regular">
              {`${dataMap[key as keyof typeof dataMap]}${unit}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserSubInfo;
