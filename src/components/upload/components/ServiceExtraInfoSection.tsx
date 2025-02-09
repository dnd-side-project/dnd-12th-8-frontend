import UploadChip from './@shared/UploadChip';

function ServiceExtraInfoSection() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-[30px] rounded-[20px] bg-gray-800 px-5 py-[100px]">
      <button>
        <UploadChip type="link" />
      </button>
      <button>
        <UploadChip type="image" />
      </button>
      <button>
        <UploadChip type="text" />
      </button>
      <button>
        <UploadChip type="prototype" />
      </button>
      <button>
        <UploadChip type="youtube" />
      </button>
    </div>
  );
}

export default ServiceExtraInfoSection;
