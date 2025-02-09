import PreQuizSection from './components/pre-quiz-section/PreQuizSection';
import ServiceBasicInfoSection from './components/service-basic-info-section/ServiceBasicInfoSection';
import ServiceExtraInfoSection from './components/ServiceExtraInfoSection';
import ThumbnailSection from './components/ThumbnailSection';

function UploadForm() {
  return (
    <div className="mb-50 flex flex-col gap-[72px] laptop:flex-row laptop:gap-5">
      <div className="flex flex-1 flex-col gap-[18px]">
        <ThumbnailSection />
        <ServiceExtraInfoSection />
        <PreQuizSection />
      </div>
      <div className="flex w-full flex-col gap-5 laptop:max-w-[493px]">
        <ServiceBasicInfoSection />
      </div>
    </div>
  );
}

export default UploadForm;
