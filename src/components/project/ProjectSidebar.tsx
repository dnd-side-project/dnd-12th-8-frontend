import { CoinsStackedIcon, HeartIcon } from '@/assets/icons';
import Button from '../@shared/button/Button';
import { Icon } from '../@shared/icons/Icon';

function ProjectSidebar() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex gap-3">
        <Button variant="gray" size="icon-lg">
          <Icon icon={HeartIcon} />
        </Button>
        <Button variant="primary" size="lg">
          참여하기
        </Button>
      </div>
      <div className="flex flex-col gap-3 rounded-[10px] bg-gray-800 px-5 py-6">
        <div className="flex items-center gap-3">
          <Icon icon={CoinsStackedIcon} />
          <p className="font-subtitle text-gray-50">200 Point</p>
        </div>
        <div className="flex items-center gap-2 font-body1 text-gray-50">
          <p>사전퀴즈</p>
          <p>•</p>
          <p>10문항</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
