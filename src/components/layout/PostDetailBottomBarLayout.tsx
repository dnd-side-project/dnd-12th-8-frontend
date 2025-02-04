const smallBottomBar = () => {
  return (
    <div className="flex w-[493px] flex-col justify-between gap-4 rounded-lg bg-gray-800 p-4">
      <div className="flex flex-row gap-4">
        <div className="w-100 rounded-lg bg-gray-300 p-4">
          <div className="font-bold">참여하기</div>
        </div>
        <div className="w-10 rounded-lg bg-gray-300 p-4">
          <div className="font-bold">♥︎</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <div className="font-bold">사전퀴즈 100문항</div>
        <div className="font-bold">참여시 100 Point</div>
      </div>
    </div>
  );
};

const largeBottomBar = () => {
  return (
    <div className="flex h-[96px] items-center justify-between bg-gray-100 p-4">
      <div className="flex flex-col gap-4">
        <div className="font-bold">200 point</div>
        <div className="font-bold">사전 퀴즈 - 10문항</div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="rounded-lg bg-gray-300 p-4">
          <div className="font-bold">참여하기</div>
        </div>
        <div className="w-10 rounded-lg bg-gray-300 p-4">
          <div className="font-bold">♥︎</div>
        </div>
      </div>
    </div>
  );
};

export default function PostDetailBottomBarLayout({ isSmall }: { isSmall: boolean }) {
  return isSmall ? smallBottomBar() : largeBottomBar();
}
