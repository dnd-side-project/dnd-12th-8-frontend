import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps } from 'react-hook-form';
import * as yup from 'yup';
import { OnboardingRequestJob, OnboardingRequestLevel } from '@/generated';

export interface OnboardingFormType {
  nickname: string;
  job: OnboardingRequestJob;
  level: OnboardingRequestLevel;
  categoryIds: number[];
}

export const OnboardingFormSchema = yup.object().shape({
  nickname: yup.string().required(),
  job: yup.mixed<OnboardingRequestJob>().required(),
  level: yup.mixed<OnboardingRequestLevel>().required(),
  categoryIds: yup.array().of(yup.number().required()).required(),
});

const useOnboardingForm = (options?: UseFormProps<OnboardingFormType>) => {
  return useForm<OnboardingFormType>({
    resolver: yupResolver(OnboardingFormSchema),
    mode: 'onChange',
    shouldFocusError: true,
    ...options,
  });
};

export default useOnboardingForm;
