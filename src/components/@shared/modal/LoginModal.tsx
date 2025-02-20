import { useRouter } from 'next/router';
import { CloseIcon, GoogleIcon, KakaoIcon, LogoFullIcon } from '@/assets/icons';
import { Icon } from '../icons/Icon';

const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_URL}/oauth/kakao&response_type=code`;

function LoginModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const handleKakaoLogin = () => {
    void router.replace(KAKAO_LOGIN_URL);
  };

  const handleGoogleLogin = () => {
    alert('준비중입니다.');
  };

  return (
    <div className="absolute top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="relative mx-[20px] flex h-[750px] w-[448px] justify-center rounded-[20px] bg-gray-700 tablet:w-[800px] laptop:w-[1006px]">
        <Icon
          icon={CloseIcon}
          onClick={onClose}
          style={{ position: 'absolute', top: '28px', right: '28px', cursor: 'pointer' }}
        />
        <div className="relative mx-[20px] mt-[151px] flex w-full flex-col items-center px-[20px] tablet:w-[420px] tablet:px-[auto]">
          <LogoFullIcon width="300px" height="75px" />
          <p className="mx-[auto] mt-[7px] font-body3-regular text-gray-200">
            SNS로 간편하게 시작하세요
          </p>

          <div className="absolute bottom-[66px] left-0 w-full tablet:relative tablet:bottom-0 tablet:mt-[72px]">
            <button
              className="flex h-[60px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#FFE617]"
              onClick={handleKakaoLogin}
            >
              <KakaoIcon />
              <p className="font-body2">카카오로 로그인하기</p>
            </button>
            <button
              className="mt-[12px] flex h-[60px] w-full items-center justify-center gap-2 rounded-[6px] bg-white"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon />
              <p className="font-body2">구글로 로그인하기</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
