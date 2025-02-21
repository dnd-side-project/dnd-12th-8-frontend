import { cva } from 'class-variance-authority';
import { DeveloperIcon, GraduationHatIcon } from '@/assets/icons';
import { MemberResponseLevel } from '@/generated';
import { cn } from '@/utils/cn';
import { Icon } from '../icons/Icon';

interface LevelSelectProps {
  type?: 'outline' | 'solid';
  level: MemberResponseLevel;
  isSelected?: boolean;
  onChange?: () => void;
  isSelectable?: boolean;
}

export const LEVEL_MAP = {
  LEARNER: {
    icon: DeveloperIcon,
    label: '학습자',
  },
  PROFESSIONAL: {
    icon: GraduationHatIcon,
    label: '현직자',
  },
};

const levelButtonVariants = cva('', {
  variants: {
    variant: {
      outline: 'bg-gray-700 text-purple-400 border-purple-400',
      solid: 'bg-purple-400 text-white',
    },
  },
});

function LevelSelect({
  type = 'outline',
  level,
  isSelected = false,
  onChange,
  isSelectable = true,
}: LevelSelectProps) {
  const { icon, label } = LEVEL_MAP[level];

  return (
    <button
      onClick={() => isSelectable && onChange && onChange()}
      className={cn(
        'flex items-center justify-center gap-2 rounded-[20px] border-1 px-[16px] py-[8px]',
        isSelected &&
          levelButtonVariants({
            variant: type,
          }),
        !isSelected && 'border-gray-600 bg-gray-600 text-gray-400',
      )}
    >
      <Icon icon={icon} color="currentColor" />
      <p className="font-body3">{label}</p>
    </button>
  );
}

export default LevelSelect;
