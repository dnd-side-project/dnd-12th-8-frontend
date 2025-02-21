import Image from 'next/image';
import { CloseIcon } from '@/assets/icons';
import Badge from '../../bage/Badge';
import { Icon } from '../../icons/Icon';
import { profileImage } from '../../layout/Header';
import { LEVEL_MAP } from '../../select/LevelSelect';
import { ROLE_MAP } from '../../select/RoleSelect';

export interface Worker {
  id: number;
  name: string;
  isAuthor: boolean;
  position: 'DESIGNER' | 'DEVELOPER' | 'PLANNER';
  level: 'PROFESSIONAL' | 'LEARNER';
}

interface WorkerCardProps {
  isEditable?: boolean;
  data: Worker;
}

function WorkerCard({ isEditable = false, data }: WorkerCardProps) {
  const { name, isAuthor, position, level } = data;
  const positionLabel = ROLE_MAP[position].label;
  const levelLabel = LEVEL_MAP[level].label;

  return (
    <div className="relative rounded-[10px] bg-gray-700 px-5 py-4.5">
      <div className="flex items-center gap-3">
        <div className="relative h-[56px] w-[56px] overflow-hidden rounded-full tablet:h-[76px] tablet:w-[76px]">
          <Image src={profileImage} alt="profile" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex gap-4 tablet:flex-col tablet:gap-3">
          <div className="flex items-center gap-2">
            <span className="font-body2 text-gray-50">{name}</span>
            {isAuthor && <span className="font-caption1 text-gray-200">작성자</span>}
          </div>
          <div className="flex items-center gap-2">
            <Badge label={positionLabel} />
            <Badge label={levelLabel} />
          </div>
        </div>
      </div>
      {isEditable && (
        <button className="r absolute top-[50%] right-5 translate-y-[-50%]">
          <Icon icon={CloseIcon} width={24} height={24} />
        </button>
      )}
    </div>
  );
}

export default WorkerCard;
