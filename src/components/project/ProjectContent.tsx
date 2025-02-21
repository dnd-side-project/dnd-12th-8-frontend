import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AlertTriangleIcon, LinkIcon, ShareIcon } from '@/assets/icons';
import { ProjectDetailResponse, useGetProjectDetail } from '@/generated';
import SmallPostCard from '../@shared/card/post-card/SmallPostCard';
import { Icon } from '../@shared/icons/Icon';

const MOCK_IMAGE_URL =
  'https://images.unsplash.com/photo-1581712075036-2584cb8a3644?q=80&w=2982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const MOCK_FIGMA_URL =
  'https://embed.figma.com/proto/zzFIyZCYKl5BF7osFQcB2e/sample-prototype-(Community)?node-id=104-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=105%3A6&show-proto-sidebar=1&embed-host=share';
const MOCK_YOUTUBE_URL = 'https://www.youtube.com/embed/cXmYNmQ4BuM?si=ON6evyKW6TU65hx0';

function ProjectContent() {
  const router = useRouter();
  const { id } = router.query;

  const { data: projectDetailData } = useGetProjectDetail(Number(id), {
    query: { enabled: !!Number(id) },
  });

  console.log(projectDetailData);

  const handleShare = () => {
    console.log('공유하기');
  };

  const handleReport = () => {
    console.log('신고');
  };

  const { title, targetJob, logoImgUrl, platformCategories, dueDate, description } =
    projectDetailData || {};

  const renderContent = (item: ProjectDetailResponse) => {
    switch (item.type) {
      case 'TEXT':
        return (
          <p className="font-body2-regular whitespace-pre-wrap text-gray-50">
            {item.detailContent}
          </p>
        );
      case 'IMAGE':
        return (
          <div className="relative h-[475px] w-full overflow-hidden rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-30 bg-gradient-to-t from-black/10 to-black/10"></div>
            <Image
              src={MOCK_IMAGE_URL || item.detailContent}
              alt="project"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      case 'YOUTUBE':
        return (
          <iframe
            width="100%"
            height="500"
            src={MOCK_YOUTUBE_URL || item.detailContent}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        );
      case 'FIGMA':
        return (
          <iframe
            allowFullScreen
            width="100%"
            height="450"
            src={MOCK_FIGMA_URL || item.detailContent}
          />
        );
      case 'LINK':
        return (
          <Link href={`http://${item.detailContent}` || ''} target="_blank" rel="noreferrer">
            <div className="flex items-center gap-3 rounded-[10px] bg-gray-700 px-[18px] py-[16px] font-body3-regular text-gray-50">
              <Icon icon={LinkIcon} color="currentColor" />
              {item.detailContent}
            </div>
          </Link>
        );
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-gray-600 pb-5">
        <SmallPostCard
          data={{
            title: title || '',
            targetJob: targetJob || 'ALL',
            logoImageUrl: logoImgUrl || '',
            categoryNames: platformCategories?.categoryNames || [],
            dueDate: dueDate || '',
          }}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-[20px] border-1 border-gray-600 px-4 py-2 font-body3 text-gray-200"
          >
            <Icon icon={ShareIcon} color="currentColor" />
            <p>공유하기</p>
          </button>
          <button
            onClick={handleReport}
            className="flex items-center gap-2 rounded-[20px] border-1 border-gray-600 px-4 py-2 font-body3 text-gray-200"
          >
            <Icon icon={AlertTriangleIcon} color="currentColor" />
            <p>신고</p>
          </button>
        </div>
      </div>

      <div className="mt-[40px] flex flex-col gap-8">
        {renderContent({ type: 'TEXT', detailContent: description })}
        {projectDetailData?.projectDetails?.map((item) => {
          return renderContent(item);
        })}
      </div>
    </div>
  );
}

export default ProjectContent;
