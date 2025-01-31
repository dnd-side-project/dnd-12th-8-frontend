import CommonLayout from '@/components/layout/CommonLayout';

const CreateFormTest = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-10 pb-15">
      <div className="mx-auto tablet:max-w-[800px] desktop:max-w-[1040px] wide:max-w-[1520px]">
        {/* header */}
        <CommonLayout height="h-23" backgroundColor="bg-gray-300" title="header" />
      </div>
    </div>
  );
};

export default CreateFormTest;
