import * as Icons from '@/assets/icons/index';
import { Icon } from './Icon';
interface IconGalleryProps {
  width?: number;
  height?: number;
  color?: string;
}

export const IconGallery = ({ width, height, color }: IconGalleryProps) => {
  const iconEntries = Object.entries(Icons);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {iconEntries.map(([name, icon]) => (
          <div key={name} className="flex flex-col items-center rounded-lg bg-gray-100 p-4">
            <Icon icon={icon} className="mb-2" width={width} height={height} color={color} />
            <span className="text-sm text-gray-600">{name.replace('Icon', '')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
