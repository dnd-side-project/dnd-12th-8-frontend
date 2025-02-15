import Header from './Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-gray-900 px-4">
      <div className="min-h-screen w-full tablet:max-w-[800px] laptop:max-w-[1040px] desktop:max-w-[1520px]">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
