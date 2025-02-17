import { ReactElement, ReactNode } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 px-4">
      <div className="min-h-screen w-full tablet:max-w-[800px] laptop:max-w-[1040px] desktop:max-w-[1520px]">
        <Header />
        {children}
      </div>
    </div>
  );
};

const getPageLayout = (page: ReactElement, pathname: string): ReactNode => {
  if (pathname === '/main') {
    return page;
  }
  return <Layout>{page}</Layout>;
};

export default getPageLayout;
