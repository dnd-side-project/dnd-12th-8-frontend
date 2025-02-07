import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  width = 24,
  height = 24,
  color = 'white',
  ...props
}) => {
  return <IconComponent width={width} height={height} color={color} {...props} />;
};
