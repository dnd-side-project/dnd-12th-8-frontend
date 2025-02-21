import ProjectCommentSection from './ProjectCommentSection';
import ProjectContent from './ProjectContent';
import ProjectSidebar from './ProjectSidebar';
import RelatedProjectsSection from './RelatedProjectsSection';

function ProjectDetails() {
  return (
    <div className="mb-[200px] flex flex-col gap-[72px]">
      <div className="desktop:flex desktop:gap-[36px]">
        <div className="desktop:w-[991px]">
          <ProjectContent />
        </div>
        <div className="fixed bottom-0 left-0 z-30 w-full desktop:sticky desktop:top-50 desktop:flex desktop:h-screen desktop:flex-1">
          <ProjectSidebar />
        </div>
      </div>

      <ProjectCommentSection />
      <RelatedProjectsSection />
    </div>
  );
}

export default ProjectDetails;
