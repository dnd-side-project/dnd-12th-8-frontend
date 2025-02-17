import { cva } from 'class-variance-authority';
import { DesignerIcon, DeveloperIcon, PlannerIcon, UsersIcon } from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';
import { cn } from '@/utils/cn';

const roleTagVariants = cva(
  'inline-flex items-center gap-2 rounded-3xl px-3 py-1 text-sm font-caption1 bg-gray-600 border',
  {
    variants: {
      variant: {
        designer: 'text-purple-300 border-purple-300',
        planner: 'text-orange-400 border-orange-400',
        developer: 'text-pink-400 border-pink-400',
        all: 'text-gray-50 border-gray-600',
      },
    },
    defaultVariants: {
      variant: 'developer',
    },
  },
);

type RoleVariant = 'designer' | 'planner' | 'developer' | 'all';

interface RoleTagProps {
  className?: string;
  variant?: RoleVariant;
}

const ROLE_ICONS = {
  designer: DesignerIcon,
  planner: PlannerIcon,
  developer: DeveloperIcon,
  all: UsersIcon,
};

const ROLE_LABELS = {
  designer: '디자이너',
  planner: '기획자',
  developer: '개발자',
  all: '모두',
};

function RoleChip({ variant = 'developer', className }: RoleTagProps) {
  const IconComponent = ROLE_ICONS[variant];

  return (
    <div className={cn(roleTagVariants({ variant }), className)}>
      <Icon icon={IconComponent} width={24} height={24} color="currentColor" />
      <span>{ROLE_LABELS[variant]}</span>
    </div>
  );
}

export default RoleChip;
