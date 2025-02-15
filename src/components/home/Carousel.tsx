import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { LeftIcon, RightIcon } from '@/assets/icons';

interface CarouselProps {
  items: Array<{
    imageUrl: string;
    title: string;
    id: number;
  }>;
}

const Carousel = ({ items }: CarouselProps) => {
  const extendedItems = [items[items.length - 1], ...items, items[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = useCallback(() => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  const goToNext = useCallback(() => {
    setTransition(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (currentIndex === 0) {
      timeoutId = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(extendedItems.length - 2);
      }, 300);
    } else if (currentIndex === extendedItems.length - 1) {
      timeoutId = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, extendedItems.length]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-12 z-10 hidden -translate-y-1/2 rounded-full bg-gray-500 p-2 tablet:block"
      >
        <LeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-12 z-10 hidden -translate-y-1/2 rounded-full bg-gray-500 p-2 tablet:block"
      >
        <RightIcon className="h-6 w-6 text-white" />
      </button>

      <div
        className="mx-auto h-full max-w-[90%] overflow-visible tablet:max-w-[70%]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex h-full ${transition ? 'transition-transform duration-300' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            width: '300%',
          }}
        >
          {extendedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="relative w-1/3 flex-shrink-0">
              <div
                className={`relative mx-auto h-full overflow-hidden rounded-2xl ${
                  transition ? 'transition-all duration-300' : ''
                } ${
                  index === currentIndex
                    ? 'scale-100 opacity-100'
                    : 'scale-100 opacity-0 tablet:scale-90 tablet:opacity-60'
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
