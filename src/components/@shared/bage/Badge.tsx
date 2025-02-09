interface BadgeProps {
  label: string;
}

function Badge({ label }: BadgeProps) {
  return (
    <div className="flex rounded-[20px] bg-gray-600 px-3 py-1">
      <span className="font-caption1 text-gray-0">{label}</span>
    </div>
  );
}

export default Badge;
