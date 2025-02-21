import { useRouter } from 'next/router';
import { CoinsStackedIcon, HeartIcon } from '@/assets/icons';
import Button from '../@shared/button/Button';
import { Icon } from '../@shared/icons/Icon';

const ProjectDesktopSidebar = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="hidden w-full flex-col gap-5 desktop:flex">
      <div className="flex gap-3">
        <Button variant="gray" size="icon-lg">
          <Icon icon={HeartIcon} />
        </Button>
        <Button variant="primary" size="lg" onClick={() => void router.push(`/quiz/${Number(id)}`)}>
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
};

const ProjectBottombar = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex items-center justify-center border-t border-gray-700 bg-gray-900 px-4 pt-[12px] pb-[24px]">
      <div className="flex w-full items-center justify-between gap-5 tablet:max-w-[800px] laptop:max-w-[1040px] desktop:hidden">
        <div className="flex flex-1 flex-col gap-1">
          <p className="font-body2 text-gray-50 tablet:font-subtitle">200 Point</p>
          <div className="flex items-center gap-2 font-caption1 text-purple-200 tablet:font-body2">
            <p>사전퀴즈</p>
            <p>•</p>
            <p>10문항</p>
          </div>
        </div>
        <div className="flex gap-3 tablet:w-[495px]">
          <Button
            variant="primary"
            size="lg"
            className="flex-1"
            onClick={() => void router.push(`/quiz/${Number(id)}`)}
          >
            참여하기
          </Button>
          <Button variant="gray" size="icon-lg">
            <Icon icon={HeartIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

function ProjectSidebar() {
  return (
    <>
      <ProjectDesktopSidebar />
      <ProjectBottombar />
    </>
  );
}

export default ProjectSidebar;
