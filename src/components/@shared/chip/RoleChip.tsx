import { cva } from 'class-variance-authority';
import { Icon } from '@/components/@shared/icons/Icon';
import { MemberResponseJob } from '@/generated';
import { cn } from '@/utils/cn';
import { ROLE_MAP } from '../select/RoleSelect';

const roleTagVariants = cva(
  'inline-flex items-center gap-2 rounded-3xl px-3 py-1 text-sm font-caption1 bg-gray-600 border',
  {
    variants: {
      variant: {
        DESIGNER: 'text-purple-300 border-purple-300',
        PLANNER: 'text-orange-400 border-orange-400',
        DEVELOPER: 'text-pink-400 border-pink-400',
        ALL: 'text-gray-50 border-gray-600',
      },
    },
    defaultVariants: {
      variant: 'DEVELOPER',
    },
  },
);

export type RoleVariant = 'DESIGNER' | 'PLANNER' | 'DEVELOPER' | 'ALL';

interface RoleTagProps {
  className?: string;
  role: MemberResponseJob;
}

function RoleChip({ role = 'DEVELOPER', className }: RoleTagProps) {
  const { icon, label } = ROLE_MAP[role];

  return (
    <div className={cn(roleTagVariants({ variant: role }), className)}>
      <Icon icon={icon} width={24} height={24} color="currentColor" />
      <span>{label}</span>
    </div>
  );
}

export default RoleChip;
