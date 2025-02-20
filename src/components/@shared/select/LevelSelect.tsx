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
  console.log('isSelected', isSelected, level, type);

  const renderIcon = () => {
    switch (level) {
      case 'LEARNER':
        return <Icon icon={DeveloperIcon} color="currentColor" />;
      case 'PROFESSIONAL':
        return <Icon icon={GraduationHatIcon} color="currentColor" />;
    }
  };

  const renderLabel = () => {
    switch (level) {
      case 'LEARNER':
        return '학습자';
      case 'PROFESSIONAL':
        return '현직자';
    }
  };

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
      {renderIcon()}
      <p className="font-body3">{renderLabel()}</p>
    </button>
  );
}

export default LevelSelect;
