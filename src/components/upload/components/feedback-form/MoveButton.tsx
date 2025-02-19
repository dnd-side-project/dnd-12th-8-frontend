import { ArrowDownIcon, ArrowUpIcon } from '@/assets/icons';
import Button from '@/components/@shared/button/Button';
import { Icon } from '@/components/@shared/icons/Icon';

const MoveButton = ({ direction, onClick }: { direction: 'up' | 'down'; onClick: () => void }) => (
  <div className={`${direction === 'up' ? 'mb-4' : 'mt-4'} flex justify-center`}>
    <Button
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      variant="gray"
      size="icon-sm"
      className="flex items-center justify-center rounded-full py-2"
    >
      <Icon icon={direction === 'up' ? ArrowUpIcon : ArrowDownIcon} />
    </Button>
  </div>
);

export default MoveButton;
