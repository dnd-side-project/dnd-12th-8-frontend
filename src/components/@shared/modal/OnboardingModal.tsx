import { useState } from 'react';
import { CloseIcon } from '@/assets/icons';
import { CATEGORIES } from '@/constants/categories';
import {
  MemberResponseJob,
  MemberResponseLevel,
  OnboardingRequestJob,
  useCompleteOnboarding,
} from '@/generated';
import useUser from '@/hooks/useUser';
import Button from '../button/Button';
import { Icon } from '../icons/Icon';
import Input from '../input/input';
import LevelSelect from '../select/LevelSelect';
import RoleSelect from '../select/RoleSelect';
import useOnboardingForm from './useOnboardingForm';

function OnboardingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const { register, watch, setValue, getValues } = useOnboardingForm();
  const userInfo = useUser();
  const { mutate: completeOnboardingMutate } = useCompleteOnboarding({
    mutation: { onSuccess: () => setStep(3), onError: () => console.error('온보딩 실패') },
  });

  const handleSubmit = () => {
    const { nickname, job, level, categoryIds } = getValues();

    if (!userInfo?.memberId || !nickname || !job || !level || !categoryIds.length) return;

    completeOnboardingMutate({
      memberId: userInfo?.memberId,
      data: { email: userInfo.email || '', nickname, job, level, categoryIds },
    });
  };

  return (
    <div className="absolute top-0 left-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="relative mx-[20px] flex h-[750px] w-[448px] justify-center rounded-[20px] bg-gray-700 tablet:w-[800px] laptop:w-[1006px]">
        <Icon
          icon={CloseIcon}
          onClick={onClose}
          style={{ position: 'absolute', top: '28px', right: '28px', cursor: 'pointer' }}
        />
        <div className="mx-[20px] flex w-[408px] flex-col tablet:w-[604px]">
          <div className="mt-[121px] mb-[28px] flex gap-[6px]">
            <div
              className={`flex h-[24px] w-[24px] items-center justify-center rounded-full text-gray-50 ${step === 1 ? 'bg-purple-500' : 'bg-gray-600'}`}
            >
              1
            </div>
            <div
              className={`flex h-[24px] w-[24px] items-center justify-center rounded-full text-gray-50 ${step === 2 ? 'bg-purple-500' : 'bg-gray-600'}`}
            >
              2
            </div>
            <div
              className={`flex h-[24px] w-[24px] items-center justify-center rounded-full text-gray-50 ${step === 3 ? 'bg-purple-500' : 'bg-gray-600'}`}
            >
              3
            </div>
          </div>

          {step === 1 && (
            <div className="flex flex-col gap-[28px]">
              <div>
                <p className="mb-[20px] font-body1 text-gray-50">닉네임을 입력해주세요</p>
                <Input
                  placeholder="김규희"
                  className="tablet:w-[604px]"
                  {...register('nickname')}
                />
              </div>
              <div>
                <p className="mb-[20px] font-body1 text-gray-50">해당하는 직군을 선택해주세요</p>
                <div className="flex items-center gap-[8px]">
                  {Object.keys(OnboardingRequestJob).map((role) => (
                    <RoleSelect
                      key={role}
                      type="outline"
                      role={role as MemberResponseJob}
                      isSelected={watch('job') === role}
                      onChange={() => setValue('job', role as MemberResponseJob)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-[20px] font-body1 text-gray-50">해당하는 레벨을 선택해주세요</p>
                <div className="flex items-center gap-[8px]">
                  {Object.keys(MemberResponseLevel).map((level) => (
                    <LevelSelect
                      key={level}
                      type="outline"
                      level={level as MemberResponseLevel}
                      isSelected={watch('level') === level}
                      onChange={() => setValue('level', level as MemberResponseLevel)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-1 flex-col">
              <p className="mb-[20px] font-body1 text-gray-50">
                관심있는 서비스 분야를 선택해주세요
              </p>
              <div className="flex h-[400px] flex-wrap gap-[10px] overflow-y-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id[0]}
                    className={`flex h-[92px] w-[90px] items-center justify-center gap-[10px] rounded-[10px] bg-gray-100 text-center break-words ${watch('categoryIds')?.find((id) => category.id.includes(id)) ? 'bg-purple-500' : ''}`}
                    onClick={() => {
                      const currentIds = watch('categoryIds') || [];
                      const newIds = currentIds.find((id) => category.id.includes(id))
                        ? currentIds.filter((id) => category.id.includes(id))
                        : [...currentIds, ...category.id];
                      setValue('categoryIds', newIds);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col">
              <p className="mb-[20px] font-body1 text-gray-50">
                98% 회원가입 완료, <br /> 100포인트를 지급해드렸어요 🪙 <br />
                포인트는 이렇게 사용해요!
              </p>
              <p className="mt-[8px] font-caption1 text-gray-200">
                다른 이의 테스트에 참여하면 포인트를 쉽게 받아볼 수 있어요 나의 프로젝트 피드백이
                필요할 때 100p로 테스트를 업로드할 수 있어요! 내 글을 광고 배너에 올려 더 많은
                사용자가 참여할 수 있도록 유도할 수도 있답니다.
              </p>
            </div>
          )}

          <div className="absolute bottom-[20px] flex w-[408px] justify-end tablet:bottom-[64px] tablet:w-[604px]">
            {step === 1 && (
              <Button variant="primary" onClick={() => setStep(2)}>
                다음
              </Button>
            )}
            {step === 2 && (
              <div className="flex w-full gap-[10px]">
                <Button variant="primary" className="w-full" onClick={() => setStep(1)}>
                  이전
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  다음
                </Button>
              </div>
            )}
            {step === 3 && (
              <Button variant="primary" onClick={onClose}>
                가입하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingModal;
