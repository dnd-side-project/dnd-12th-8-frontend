import { cva } from 'class-variance-authority';
import { DesignerIcon, DeveloperIcon, PlannerIcon } from '@/assets/icons';
import { MemberResponseJob } from '@/generated';
import { cn } from '@/utils/cn';
import { Icon } from '../icons/Icon';

interface RoleSelectProps {
  type?: 'outline' | 'solid';
  role: MemberResponseJob;
  isSelected?: boolean;
  onChange: () => void;
}

export const ROLE_MAP = {
  DEVELOPER: {
    label: '개발자',
    icon: DeveloperIcon,
  },
  DESIGNER: {
    label: '디자이너',
    icon: DesignerIcon,
  },
  PLANNER: {
    label: 'PM/PO',
    icon: PlannerIcon,
  },
};

const roleButtonVariants = cva('', {
  variants: {
    variant: {
      outline: 'bg-gray-700',
      solid: '',
    },
    roleStyle: {
      DEVELOPER: '',
      DESIGNER: '',
      PLANNER: '',
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      roleStyle: 'DEVELOPER',
      className: 'text-pink-400 border-pink-400',
    },
    {
      variant: 'solid',
      roleStyle: 'DEVELOPER',
      className: 'bg-pink-400 text-white',
    },
    {
      variant: 'outline',
      roleStyle: 'DESIGNER',
      className: 'text-purple-300 border-purple-300',
    },
    {
      variant: 'solid',
      roleStyle: 'DESIGNER',
      className: 'bg-purple-300 text-white',
    },
    {
      variant: 'outline',
      roleStyle: 'PLANNER',
      className: 'text-orange-400 border-orange-400',
    },
    {
      variant: 'solid',
      roleStyle: 'PLANNER',
      className: 'bg-orange-400 text-white',
    },
  ],
});

function RoleSelect({ type = 'outline', role, isSelected = false, onChange }: RoleSelectProps) {
  console.log('isSelected', isSelected, role, type);

  return (
    <button
      onClick={() => onChange()}
      className={cn(
        'flex items-center justify-center gap-2 rounded-[20px] border-1 px-[16px] py-[8px]',
        isSelected &&
          roleButtonVariants({
            variant: type,
            roleStyle: role,
          }),
        !isSelected && 'border-gray-600 bg-gray-600 text-gray-400',
      )}
    >
      <Icon icon={ROLE_MAP[role].icon} color="currentColor" />
      <p className="font-body3">{ROLE_MAP[role].label}</p>
    </button>
  );
}

export default RoleSelect;
