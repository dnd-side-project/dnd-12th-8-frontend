const smallBottomBar = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
      <div className="flex items-center gap-4 text-white">
        <span className="font-bold">참여시 100 Point - small</span>
      </div>
    </div>
  );
};

const largeBottomBar = () => {
  return (
    <div className="items-center justify-between rounded-lg bg-gray-800 p-4">
      <div className="flex items-center gap-4 text-white">
        <span className="font-bold">참여시 100 Point</span>
      </div>
    </div>
  );
};

export default function PostDetailBottomBarLayout({ isSmall }: { isSmall: boolean }) {
  return isSmall ? smallBottomBar() : largeBottomBar();
}
