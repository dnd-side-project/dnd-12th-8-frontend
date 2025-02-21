import { useRouter } from 'next/router';
import { useGetProjectDetail } from '@/generated';
import ProjectCommentSection from './ProjectCommentSection';
import ProjectContent from './ProjectContent';
import ProjectSidebar from './ProjectSidebar';
import RelatedProjectsSection from './RelatedProjectsSection';

function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: projectDetailData } = useGetProjectDetail(Number(id), {
    query: { enabled: !!Number(id) },
  });

  console.log(projectDetailData);

  return (
    <div className="flex flex-col gap-[72px]">
      <div className="desktop:flex desktop:gap-[36px]">
        <div className="desktop:w-[991px]">
          <ProjectContent />
        </div>
        <div className="hidden desktop:sticky desktop:top-50 desktop:flex desktop:h-screen desktop:flex-1">
          <ProjectSidebar />
        </div>
      </div>

      <ProjectCommentSection />
      <RelatedProjectsSection />
    </div>
  );
}

export default ProjectDetails;
