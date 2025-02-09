import SectionWrapper from './SectionWrapper';
import WorkerSection from './WorkerSection';

function ServiceBasicInfoSection() {
  return (
    <div className="flex flex-col gap-11 rounded-[10px] bg-gray-800 px-4 py-7">
      <SectionWrapper title="서비스 카테고리" isRequired>
        서비스 카테고리
      </SectionWrapper>
      <SectionWrapper title="로고 이미지" isRequired>
        서비스 카테고리
      </SectionWrapper>
      <SectionWrapper title="서비스를 소개해주세요!" isRequired>
        서비스 카테고리
      </SectionWrapper>
      <SectionWrapper title="마감일">서비스 카테고리</SectionWrapper>
      <SectionWrapper title="작업자">
        <WorkerSection />
      </SectionWrapper>
    </div>
  );
}

export default ServiceBasicInfoSection;
