import {
  CursorClickIcon,
  FaceHappyIcon,
  ImageIcon,
  LightbulbIcon,
  LinkIcon,
  MessageIcon,
  PieChartIcon,
  PrototypeIcon,
  TextIcon,
  YoutubeIcon,
} from '@/assets/icons';
import { Icon } from '@/components/@shared/icons/Icon';

interface UploadChipProps {
  type:
    | 'link'
    | 'image'
    | 'text'
    | 'prototype'
    | 'youtube'
    | 'multiple-choice'
    | 'short-answer'
    | 'likert'
    | 'AB'
    | 'keyword';
}

const CHIP_TYPE_MAP = {
  link: {
    label: '링크',
    icon: LinkIcon,
  },
  image: {
    label: '이미지',
    icon: ImageIcon,
  },
  text: {
    label: '텍스트',
    icon: TextIcon,
  },
  prototype: {
    label: '프로토타입',
    icon: PrototypeIcon,
  },
  youtube: {
    label: '유튜브',
    icon: YoutubeIcon,
  },
  'multiple-choice': {
    label: '객관식',
    icon: PieChartIcon,
  },
  'short-answer': {
    label: '단답형',
    icon: MessageIcon,
  },
  likert: {
    label: '리커트',
    icon: FaceHappyIcon,
  },
  AB: {
    label: 'AB',
    icon: CursorClickIcon,
  },
  keyword: {
    label: '총평 키워드',
    icon: LightbulbIcon,
  },
};

function UploadChip({ type }: UploadChipProps) {
  return (
    <div className="flex h-[80px] w-[80px] flex-col items-center justify-center gap-1 rounded-full bg-gray-700 text-gray-50 desktop:h-[118px] desktop:w-[118px] desktop:gap-2">
      <Icon icon={CHIP_TYPE_MAP[type].icon} />
      <span className="font-caption2 desktop:font-body3-regular">{CHIP_TYPE_MAP[type].label}</span>
    </div>
  );
}

export default UploadChip;
