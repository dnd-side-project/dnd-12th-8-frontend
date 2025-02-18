import Image from 'next/image';
import Link from 'next/link';
import { AlarmIcon, LogoFullIcon, LogoShortIcon } from '@/assets/icons';
import Button from '../button/Button';
import { Icon } from '../icons/Icon';

export const profileImage =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D';

function Header() {
  const isLoggedIn = true;

  return (
    <div className="sticky top-0 left-0 z-50 mb-4 flex w-full items-center justify-between bg-gray-900 py-3 tablet:pt-6 laptop:mb-[58px] laptop:pt-7">
      <Link href="/">
        <LogoShortIcon className="laptop:hidden" />
        <LogoFullIcon className="hidden laptop:block" />
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center gap-6">
          <Link href="/upload">
            <Button
              variant="lined"
              className="h-auto w-auto min-w-0 rounded-full px-3 py-2 tablet:px-4 tablet:py-3"
            >
              <p className="font-body3 tablet:font-body1">Upload</p>
            </Button>
          </Link>
          <button className="flex h-8 w-8 items-center justify-center tablet:h-12 tablet:w-12">
            <Icon icon={AlarmIcon} className="h-5 w-5 tablet:h-7 tablet:w-7" />
          </button>
          <div className="relative h-8 w-8 overflow-hidden rounded-full tablet:h-12 tablet:w-12">
            <Link href="/mypage">
              <Image src={profileImage} alt="profile" fill style={{ objectFit: 'cover' }} />
            </Link>
          </div>
        </div>
      ) : (
        <Button variant="lined" className="h-auto w-auto min-w-0 px-3 py-2 tablet:px-4 tablet:py-3">
          <p className="font-body3 tablet:font-body1">Log in</p>
        </Button>
      )}
    </div>
  );
}

export default Header;
